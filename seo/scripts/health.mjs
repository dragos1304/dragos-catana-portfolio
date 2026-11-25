// What AI crawlers really get from the live site: node seo/scripts/health.mjs
const site = process.argv[2] ?? "https://dragoscatana.com";
const UA = {
  GPTBot: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)",
  "OAI-SearchBot": "Mozilla/5.0 (compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot)",
  ClaudeBot: "Mozilla/5.0 (compatible; ClaudeBot/1.0)", PerplexityBot: "Mozilla/5.0 (compatible; PerplexityBot/1.0)",
  Googlebot: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)", Bingbot: "Mozilla/5.0 (compatible; bingbot/2.0)",
};
const get = async (u, ua = UA.GPTBot) => { const r = await fetch(u, { headers: { "User-Agent": ua }, redirect: "manual", signal: AbortSignal.timeout(30000) }); return { status: r.status, body: await r.text() }; };
// "Read without JavaScript": only the HTML the server sends, scripts and styles removed.
const text = (h) => h.replace(/<(script|style|template|noscript)\b[\s\S]*?<\/\1>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const norm = (u) => u.replace(/[#?].*$/, "");
const issues = [];

const robots = await get(`${site}/robots.txt`);
if (robots.status !== 200) issues.push(`robots.txt: ${robots.status}`);
for (const group of robots.body.split(/\n\s*\n/)) {
  if (/^\s*disallow:\s*\/\s*$/im.test(group)) issues.push(`robots.txt blocks everything for: ${(group.match(/user-agent:\s*(.+)/i) ?? [])[1]}`);
}
for (const [name, ua] of Object.entries(UA)) { const r = await get(`${site}/`, ua); if (r.status !== 200 || text(r.body).length < 500) issues.push(`${name}: status ${r.status}, ${text(r.body).length} characters of text`); }

const llms = await get(`${site}/llms.txt`);
if (llms.status !== 200 || !/^# /m.test(llms.body)) issues.push(`llms.txt: ${llms.status} or no title`);
const map = await get(`${site}/sitemap.xml`);
const urls = [...map.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) { console.error("No sitemap URLs: the check cannot run."); process.exit(1); }

const inbound = new Map(urls.map((u) => [norm(u), new Set()]));
const queue = [...urls];
await Promise.all(Array.from({ length: 4 }, async () => {
  for (let u; (u = queue.shift()); ) {
    try {
      const r = await get(u);
      const words = text(r.body).split(" ").length;
      if (r.status !== 200) { issues.push(`${u}: ${r.status}`); continue; }
      if (words < 150) issues.push(`${u}: only ${words} words without JavaScript`);
      if (!/<h1[\s>]/i.test(r.body)) issues.push(`${u}: no H1`);
      if (!/rel="canonical"/i.test(r.body)) issues.push(`${u}: no canonical`);
      if (/<meta[^>]+name="robots"[^>]+noindex/i.test(r.body)) issues.push(`${u}: noindex but in the sitemap`);
      const main = (r.body.match(/<main[\s\S]*<\/main>/i) ?? [r.body])[0];
      for (const m of main.matchAll(/<a\b[^>]*href="([^"]+)"/gi)) { const t = norm(new URL(m[1], u).href); if (t !== norm(u)) inbound.get(t)?.add(u); }
    } catch (e) { issues.push(`${u}: ${e.message}`); }
  }
}));
// Pages linked from the page body (not the menu or footer). Articles need two: the hub plus a related page.
for (const [u, from] of inbound) if (/\/(articole|articles)\/[^/]+\/$/.test(u) && from.size < 2) issues.push(`${u}: only ${from.size} internal link(s) from page content`);
const articles = urls.filter((u) => /\/articole\/[^/]+\/$/.test(u));
for (const u of articles) if (!llms.body.includes(u)) issues.push(`llms.txt does not list ${u}`);

console.log(`${site}: ${urls.length} sitemap pages, ${articles.length} articles, ${Object.keys(UA).length} crawlers`);
console.log(issues.length ? issues.map((i) => `- ${i}`).join("\n") : "No issues.");
process.exitCode = issues.length ? 1 : 0;
