#!/usr/bin/env node
/**
 * Step 1 of an audit: collect measurable facts about a client's website.
 *
 *   node scripts/collect.mjs --url https://example.ro --slug example [--pages 10] [--no-lighthouse] [--psi]
 *
 * Writes audits/clients/<slug>/data.json plus mobile/desktop screenshots. Everything in data.json is
 * measured (HTTP responses, parsed HTML, Lighthouse lab run); nothing is estimated here. The report
 * renderer turns these facts into findings and section scores with fixed, documented rules.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";

const here = path.dirname(fileURLToPath(import.meta.url));
const args = parseArgs(process.argv.slice(2));
if (!args.url || !args.slug) {
  console.error("Usage: node scripts/collect.mjs --url <site> --slug <client-slug> [--pages 10] [--no-lighthouse] [--psi]");
  process.exit(1);
}
const startUrl = normalizeUrl(args.url);
const outDir = path.join(here, "..", "clients", args.slug);
const maxPages = Number(args.pages ?? 10);
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36";
const AI_BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "CCBot", "Bingbot", "Googlebot"];

await mkdir(outDir, { recursive: true });
const log = (...m) => console.log("·", ...m);

// --only-browser: redo screenshots and mobile checks only, keep everything else in data.json.
if (args["only-browser"]) {
  const { readFile } = await import("node:fs/promises");
  const prev = JSON.parse(await readFile(path.join(outDir, "data.json"), "utf8"));
  prev.browser = await browserChecks(prev.finalUrl);
  await writeFile(path.join(outDir, "data.json"), JSON.stringify(prev, null, 2));
  log("screenshots and mobile checks updated");
  process.exit(0);
}

// ---------- 1. Redirects, HTTPS, headers ----------
log("redirect chain", startUrl);
const chain = await redirectChain(startUrl);
const finalUrl = chain.at(-1)?.url ?? startUrl;
const origin = new URL(finalUrl).origin;
const httpVariant = await redirectChain(origin.replace(/^https:/, "http:"));
const wwwHost = new URL(origin).hostname.startsWith("www.") ? new URL(origin).hostname.slice(4) : "www." + new URL(origin).hostname;
const altHostChain = await redirectChain(`https://${wwwHost}/`).catch(() => []);
const homeHead = chain.at(-1)?.headers ?? {};

// ---------- 2. robots.txt, llms.txt, sitemap ----------
log("robots.txt / llms.txt / sitemap");
const robots = await getText(`${origin}/robots.txt`);
const robotsInfo = parseRobots(robots.ok ? robots.text : "");
const llms = await getText(`${origin}/llms.txt`);
const sitemapUrls = robotsInfo.sitemaps.length ? robotsInfo.sitemaps : [`${origin}/sitemap.xml`, `${origin}/sitemap_index.xml`, `${origin}/wp-sitemap.xml`];
const sitemap = await readSitemaps(sitemapUrls);

// ---------- 3. Pages ----------
const home = await getText(finalUrl);
const homeParsed = parsePage(finalUrl, home);
const candidates = new Set();
for (const u of [...sitemap.urls, ...homeParsed.internalLinks]) {
  const clean = stripHash(u);
  if (sameSite(clean) && !/\.(pdf|jpe?g|png|webp|gif|svg|zip|docx?|xlsx?)$/i.test(clean) && clean !== finalUrl) candidates.add(clean);
}
// Prefer short, top-level paths (services, contact, about) over deep blog posts.
const picked = [...candidates].sort((a, b) => depth(a) - depth(b) || a.length - b.length).slice(0, Math.max(0, maxPages - 1));
log(`pages: home + ${picked.length}`);
const pages = [homeParsed];
for (const u of picked) pages.push(parsePage(u, await getText(u)));

// ---------- 4. Links (broken / redirected) ----------
const internal = new Set(), external = new Set();
for (const p of pages) {
  p.internalLinks.forEach((l) => internal.add(stripHash(l)));
  p.externalLinks.forEach((l) => external.add(stripHash(l)));
}
log(`checking ${Math.min(internal.size, 150)} internal + ${Math.min(external.size, 60)} external links`);
const LOGIN_WALLED = /(^|\.)(facebook|instagram|linkedin|tiktok|x|twitter)\.com$/i; // answer bots with 400/999: not checkable
const linkResults = await pool([...[...internal].slice(0, 150).map((u) => ({ u, kind: "internal" })), ...[...external].slice(0, 60).filter((u) => !LOGIN_WALLED.test(new URL(u).hostname)).map((u) => ({ u, kind: "external" }))], 4, async ({ u, kind }) => {
  let r = await checkLink(u);
  if (r.status === 0 || r.status === 429 || r.status >= 500) { await new Promise((ok) => setTimeout(ok, 2500)); r = await checkLink(u); } // one retry: slow hosts and rate limits
  return { url: u, kind, ...r, foundOn: pages.filter((p) => p.internalLinks.includes(u) || p.externalLinks.includes(u)).map((p) => p.url).slice(0, 3) };
});
// Broken = the server answered 4xx/5xx twice. No answer at all is reported apart, as "unreachable", never as broken.
const broken = linkResults.filter((r) => r.status >= 400 && r.status !== 429);
const unreachable = linkResults.filter((r) => r.status === 0 || r.status === 429);
const redirected = linkResults.filter((r) => r.kind === "internal" && r.redirects > 0 && r.status < 400);

// ---------- 5. Browser: screenshots + mobile checks ----------
let browserFacts = null;
try {
  browserFacts = await browserChecks(finalUrl);
} catch (e) {
  console.warn("browser checks failed:", e.message);
}

// ---------- 6. Lighthouse (lab) ----------
let lighthouse = null;
if (!args["no-lighthouse"]) {
  try {
    lighthouse = await runLighthouse(finalUrl, args.lang === "en" ? "en" : "ro");
  } catch (e) {
    console.warn("lighthouse failed:", e.message);
  }
}

// ---------- 7. PageSpeed Insights field data (optional, keyless quota is small) ----------
let crux = null;
if (args.psi) {
  try {
    const key = process.env.PSI_KEY ? `&key=${process.env.PSI_KEY}` : "";
    const r = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(finalUrl)}&strategy=mobile&category=performance${key}`, { signal: AbortSignal.timeout(90000) });
    const j = await r.json();
    crux = j.loadingExperience?.metrics ? { overall: j.loadingExperience.overall_category, metrics: Object.fromEntries(Object.entries(j.loadingExperience.metrics).map(([k, v]) => [k, { p75: v.percentile, category: v.category }])) } : { note: j.error?.message ?? "no field data for this URL" };
  } catch (e) {
    crux = { note: e.message };
  }
}

const data = {
  collectedAt: new Date().toISOString(),
  input: { url: args.url, slug: args.slug },
  finalUrl,
  origin,
  redirectChain: chain.map(({ url, status }) => ({ url, status })),
  httpToHttps: { chain: httpVariant.map(({ url, status }) => ({ url, status })), ok: httpVariant.at(-1)?.url?.startsWith("https:") ?? false },
  hostVariant: { tried: `https://${wwwHost}/`, chain: altHostChain.map(({ url, status }) => ({ url, status })), consolidated: altHostChain.length ? new URL(altHostChain.at(-1).url).hostname === new URL(origin).hostname : null },
  headers: pick(homeHead, ["server", "strict-transport-security", "x-robots-tag", "content-encoding", "cache-control", "x-powered-by", "cf-ray", "content-security-policy"]),
  robots: { found: robots.ok, status: robots.status, ...robotsInfo, raw: robots.ok ? robots.text.slice(0, 4000) : null },
  llmsTxt: { found: llms.ok && llms.text.trim().length > 0 && !/<html/i.test(llms.text), status: llms.status },
  sitemap: { tried: sitemapUrls, found: sitemap.found, files: sitemap.files, urlCount: sitemap.urls.length, sample: sitemap.urls.slice(0, 15) },
  pages: pages.map(({ internalLinks, externalLinks, ...p }) => ({ ...p, internalLinkCount: internalLinks.length, externalLinkCount: externalLinks.length })),
  links: { checked: linkResults.length, internalTotal: internal.size, externalTotal: external.size, broken, unreachable, redirectedInternal: redirected.slice(0, 20) },
  browser: browserFacts,
  lighthouse,
  crux,
};
await writeFile(path.join(outDir, "data.json"), JSON.stringify(data, null, 2));
log(`done → ${path.relative(process.cwd(), path.join(outDir, "data.json"))}`);

// =====================================================================================

function parseArgs(a) {
  const o = {};
  for (let i = 0; i < a.length; i++) {
    if (!a[i].startsWith("--")) continue;
    const k = a[i].slice(2);
    o[k] = a[i + 1] && !a[i + 1].startsWith("--") ? a[++i] : true;
  }
  return o;
}
function normalizeUrl(u) {
  return /^https?:\/\//i.test(u) ? u : `https://${u}`;
}
function stripHash(u) {
  try { const x = new URL(u); x.hash = ""; return x.href; } catch { return u; }
}
function depth(u) {
  return new URL(u).pathname.split("/").filter(Boolean).length;
}
function sameSite(u) {
  try { return new URL(u).hostname.replace(/^www\./, "") === new URL(origin).hostname.replace(/^www\./, ""); } catch { return false; }
}
function pick(o, keys) {
  return Object.fromEntries(keys.filter((k) => o[k] != null).map((k) => [k, o[k]]));
}

async function redirectChain(url, max = 10) {
  const out = [];
  let current = url;
  for (let i = 0; i < max; i++) {
    let r;
    try {
      r = await fetch(current, { redirect: "manual", headers: { "user-agent": UA }, signal: AbortSignal.timeout(20000) });
    } catch (e) {
      out.push({ url: current, status: 0, error: e.cause?.code ?? e.message, headers: {} });
      return out;
    }
    out.push({ url: current, status: r.status, headers: Object.fromEntries(r.headers) });
    const loc = r.headers.get("location");
    if (r.status >= 300 && r.status < 400 && loc) current = new URL(loc, current).href;
    else return out;
  }
  return out;
}

async function getText(url) {
  const t0 = Date.now();
  try {
    const r = await fetch(url, { headers: { "user-agent": UA, "accept-language": "ro,en;q=0.8" }, signal: AbortSignal.timeout(25000) });
    const text = await r.text();
    return { ok: r.ok, status: r.status, url: r.url, text, ms: Date.now() - t0, bytes: Buffer.byteLength(text) };
  } catch (e) {
    return { ok: false, status: 0, url, text: "", ms: Date.now() - t0, error: e.cause?.code ?? e.message };
  }
}

async function checkLink(url) {
  const opts = { headers: { "user-agent": UA }, signal: AbortSignal.timeout(15000) };
  try {
    let r = await fetch(url, { ...opts, method: "HEAD", redirect: "follow" });
    if (r.status === 405 || r.status === 403 || r.status === 501) r = await fetch(url, { ...opts, method: "GET", redirect: "follow" });
    return { status: r.status, final: r.url, redirects: r.redirected ? 1 : 0 };
  } catch (e) {
    return { status: 0, error: e.cause?.code ?? e.message, redirects: 0 };
  }
}

async function pool(items, n, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => {
    while (i < items.length) { const k = i++; out[k] = await fn(items[k]); }
  }));
  return out;
}

function parseRobots(txt) {
  const groups = [];
  let cur = null;
  const sitemaps = [];
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.replace(/#.*/, "").trim();
    const m = line.match(/^([A-Za-z-]+)\s*:\s*(.*)$/);
    if (!m) continue;
    const [, k, v] = m;
    const key = k.toLowerCase();
    if (key === "sitemap") { sitemaps.push(v.trim()); continue; }
    if (key === "user-agent") {
      if (!cur || cur.rules.length) { cur = { agents: [], rules: [] }; groups.push(cur); }
      cur.agents.push(v.trim().toLowerCase());
    } else if ((key === "disallow" || key === "allow") && cur) cur.rules.push({ type: key, path: v.trim() });
  }
  const groupFor = (bot) => groups.find((g) => g.agents.includes(bot.toLowerCase())) ?? groups.find((g) => g.agents.includes("*"));
  const blocksAll = (g) => !!g && g.rules.some((r) => r.type === "disallow" && r.path === "/") && !g.rules.some((r) => r.type === "allow" && r.path === "/");
  const bots = Object.fromEntries(AI_BOTS.map((b) => {
    const g = groupFor(b);
    return [b, { blocked: blocksAll(g), explicitGroup: !!groups.find((x) => x.agents.includes(b.toLowerCase())) }];
  }));
  return { sitemaps, bots, groupCount: groups.length };
}

async function readSitemaps(urls) {
  const found = [], files = [], all = new Set();
  const queue = [...urls];
  let fetched = 0;
  while (queue.length && fetched < 12) {
    const u = queue.shift();
    const r = await getText(u);
    fetched++;
    if (!r.ok || !/<(urlset|sitemapindex)/i.test(r.text)) continue;
    found.push(u);
    const $ = cheerio.load(r.text, { xmlMode: true });
    const subs = $("sitemap > loc").map((_, e) => $(e).text().trim()).get();
    const locs = $("url > loc").map((_, e) => $(e).text().trim()).get();
    files.push({ url: u, type: subs.length ? "index" : "urlset", entries: subs.length || locs.length });
    queue.push(...subs.slice(0, 10));
    locs.forEach((l) => all.add(l));
    if (!subs.length && urls.indexOf(u) >= 0 && all.size) break; // first plain urlset among the guesses is enough
  }
  return { found, files, urls: [...all] };
}

function parsePage(url, res) {
  const $ = cheerio.load(res.text || "");
  const text = $("body").clone().find("script,style,noscript").remove().end().text().replace(/\s+/g, " ").trim();
  const headings = $("h1,h2,h3,h4,h5,h6").map((_, e) => ({ level: Number(e.tagName[1]), text: $(e).text().replace(/\s+/g, " ").trim().slice(0, 140) })).get();
  let skips = 0;
  for (let i = 1; i < headings.length; i++) if (headings[i].level > headings[i - 1].level + 1) skips++;
  const imgs = $("img").map((_, e) => ({ src: $(e).attr("src") || $(e).attr("data-src") || "", alt: $(e).attr("alt"), w: $(e).attr("width"), h: $(e).attr("height"), loading: $(e).attr("loading") })).get();
  const schema = [];
  $('script[type="application/ld+json"]').each((_, e) => {
    try { collectTypes(JSON.parse($(e).contents().text()), schema); } catch { schema.push({ type: "INVALID_JSON" }); }
  });
  const microdata = $("[itemtype]").map((_, e) => ($(e).attr("itemtype") || "").split("/").pop()).get();
  const internalLinks = [], externalLinks = [];
  const anchors = [];
  $("a[href]").each((_, e) => {
    const href = $(e).attr("href");
    if (!href || /^(mailto:|tel:|javascript:|#|whatsapp:|viber:)/i.test(href)) return;
    try {
      const abs = new URL(href, res.url || url).href;
      if (!/^https?:/.test(abs)) return;
      (sameSite(abs) ? internalLinks : externalLinks).push(abs);
      anchors.push($(e).text().replace(/\s+/g, " ").trim().toLowerCase());
    } catch {}
  });
  const weakAnchors = anchors.filter((a) => /^(aici|click aici|citește mai mult|afla mai mult|află mai mult|detalii|mai mult|read more|click here|here|more)$/.test(a)).length;
  const meta = (n) => $(`meta[name="${n}"]`).attr("content") ?? $(`meta[property="${n}"]`).attr("content") ?? null;
  return {
    url,
    status: res.status,
    ms: res.ms,
    bytes: res.bytes ?? 0,
    error: res.error ?? null,
    lang: $("html").attr("lang") ?? null,
    title: $("title").first().text().trim() || null,
    description: meta("description"),
    canonical: $('link[rel="canonical"]').attr("href") ?? null,
    robotsMeta: meta("robots"),
    viewport: meta("viewport"),
    og: { title: meta("og:title"), description: meta("og:description"), image: meta("og:image") },
    hreflang: $('link[rel="alternate"][hreflang]').map((_, e) => $(e).attr("hreflang")).get(),
    h1: headings.filter((h) => h.level === 1).map((h) => h.text),
    headings: headings.slice(0, 40),
    headingSkips: skips,
    wordCount: text ? text.split(" ").length : 0,
    images: { total: imgs.length, missingAlt: imgs.filter((i) => i.alt == null).length, emptyAlt: imgs.filter((i) => i.alt === "").length, noSize: imgs.filter((i) => !i.w || !i.h).length, modernFormat: imgs.filter((i) => /\.(webp|avif)(\?|$)/i.test(i.src)).length, sample: imgs.filter((i) => i.alt == null).slice(0, 5).map((i) => i.src.slice(0, 160)) },
    schema,
    microdata: [...new Set(microdata)],
    telLinks: $('a[href^="tel:"]').length,
    mailLinks: $('a[href^="mailto:"]').length,
    forms: $("form").length,
    weakAnchors,
    hasFaqText: /întrebări frecvente|intrebari frecvente|faq|frequently asked/i.test(text),
    hasPrices: /\d[\d.,]*\s?(lei|ron|€|eur)\b/i.test(text),
    hasAddress: /\b(str(ada|\.)|calea|bulevardul|b-dul|piața|nr\.)\b/i.test(text),
    generator: meta("generator"),
    internalLinks: [...new Set(internalLinks)],
    externalLinks: [...new Set(externalLinks)],
  };
}

function collectTypes(node, out) {
  if (Array.isArray(node)) return node.forEach((n) => collectTypes(n, out));
  if (!node || typeof node !== "object") return;
  if (node["@graph"]) collectTypes(node["@graph"], out);
  if (node["@type"]) {
    const types = [].concat(node["@type"]);
    out.push({
      type: types.join(","),
      name: typeof node.name === "string" ? node.name.slice(0, 120) : null,
      has: ["address", "telephone", "openingHoursSpecification", "openingHours", "geo", "aggregateRating", "sameAs", "priceRange", "image", "url", "areaServed", "medicalSpecialty", "mainEntity"].filter((k) => node[k] != null),
    });
  }
}

async function chromePath() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const mac = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  if (existsSync(mac)) return mac;
  const { Launcher } = await import("chrome-launcher");
  return Launcher.getInstallations()[0];
}

async function browserChecks(url) {
  const puppeteer = (await import("puppeteer-core")).default;
  const browser = await puppeteer.launch({ executablePath: await chromePath(), headless: true, args: ["--no-first-run", "--hide-scrollbars"] });
  try {
    const page = await browser.newPage();
    page.setDefaultTimeout(90000);
    const open = async (u) => {
      await page.goto(u, { waitUntil: "load", timeout: 90000 }).catch(() => page.goto(u, { waitUntil: "domcontentloaded", timeout: 90000 }));
      await new Promise((r) => setTimeout(r, 3500));
      await dismissCookies(page);
    };
    await page.setUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1");
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await open(url);
    await page.screenshot({ path: path.join(outDir, "mobile.png") });
    const mobile = await page.evaluate(() => {
      const vw = window.innerWidth;
      const small = [...document.querySelectorAll("a, button, input, select, textarea, [role=button]")].filter((el) => {
        const r = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        return r.width > 0 && r.height > 0 && cs.visibility !== "hidden" && (r.width < 24 || r.height < 24) && el.closest("p, li") === null; // WCAG 2.2 target size minimum (24px), inline text links excepted
      }).length;
      const p = document.querySelector("main p, article p, p");
      return {
        viewportWidth: vw,
        scrollWidth: document.documentElement.scrollWidth,
        horizontalOverflow: document.documentElement.scrollWidth > vw + 2,
        bodyFontPx: parseFloat(getComputedStyle(p || document.body).fontSize),
        smallTapTargets: small,
        hasTelLinkVisible: [...document.querySelectorAll('a[href^="tel:"]')].some((a) => a.getBoundingClientRect().top < window.innerHeight * 2),
        cookieBanner: /cookie/i.test(document.body.innerText.slice(0, 5000)),
      };
    });
    await page.setUserAgent(UA);
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await open(url);
    await page.screenshot({ path: path.join(outDir, "desktop.png") });
    return { mobile };
  } finally {
    await browser.close();
  }
}

/** Cookie banners: pick the most privacy-preserving button (reject / necessary only); otherwise hide the banner for the screenshot. */
async function dismissCookies(page) {
  const clicked = await page.evaluate(() => {
    const re = /^(nu accept|refuz|resping|respinge( tot)?|doar (cele )?necesare|numai necesare|reject( all)?|decline|only necessary|necessary only|deny)$/i;
    const btn = [...document.querySelectorAll("button, a, [role=button]")].find((b) => re.test((b.innerText || "").trim()));
    if (btn) { btn.click(); return true; }
    return false;
  }).catch(() => false);
  await new Promise((r) => setTimeout(r, 800));
  await page.evaluate(() => {
    for (const el of document.querySelectorAll("body *")) {
      const cs = getComputedStyle(el);
      if ((cs.position === "fixed" || cs.position === "sticky") && /cookie|gdpr|confiden/i.test(el.innerText || "") && el.getBoundingClientRect().height > 80) el.style.display = "none";
    }
  }).catch(() => {});
  return clicked;
}

async function runLighthouse(url, locale) {
  log("lighthouse (mobile, lab)… ~40 s");
  const { default: lighthouse } = await import("lighthouse");
  const chromeLauncher = await import("chrome-launcher");
  const chrome = await chromeLauncher.launch({ chromePath: await chromePath(), chromeFlags: ["--headless=new", "--no-first-run"] });
  try {
    const r = await lighthouse(url, { port: chrome.port, output: "json", logLevel: "error", locale, onlyCategories: ["performance", "accessibility", "best-practices", "seo"] });
    const lhr = r.lhr;
    const num = (id) => lhr.audits[id]?.numericValue ?? null;
    const failed = Object.values(lhr.audits)
      .filter((a) => a.score !== null && a.score < 0.9 && a.scoreDisplayMode !== "informative" && a.scoreDisplayMode !== "notApplicable" && a.scoreDisplayMode !== "manual")
      .map((a) => ({ id: a.id, title: a.title, score: a.score, display: a.displayValue ?? null, savingsMs: a.metricSavings?.LCP ?? a.details?.overallSavingsMs ?? null }))
      .sort((a, b) => (b.savingsMs ?? 0) - (a.savingsMs ?? 0) || a.score - b.score)
      .slice(0, 25);
    return {
      fetchTime: lhr.fetchTime,
      lighthouseVersion: lhr.lighthouseVersion,
      formFactor: lhr.configSettings.formFactor,
      scores: Object.fromEntries(Object.entries(lhr.categories).map(([k, c]) => [k, c.score == null ? null : Math.round(c.score * 100)])),
      metrics: { lcpMs: num("largest-contentful-paint"), cls: num("cumulative-layout-shift"), tbtMs: num("total-blocking-time"), fcpMs: num("first-contentful-paint"), siMs: num("speed-index"), ttfbMs: num("server-response-time") },
      pageWeightKb: lhr.audits["total-byte-weight"]?.numericValue ? Math.round(lhr.audits["total-byte-weight"].numericValue / 1024) : null,
      failed,
    };
  } finally {
    await chrome.kill();
  }
}
