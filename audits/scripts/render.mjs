#!/usr/bin/env node
/**
 * Step 3 of an audit: turn data.json (measured) + findings.json (observed by hand / via tools) into
 * the branded report: clients/<slug>/report.html and report.pdf.
 *
 *   node scripts/render.mjs --slug <client-slug> [--html-only]
 */
import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { runChecks, sectionScores, shortUrl, schemaTypeFor } from "./checks.mjs";
import { STRINGS } from "./strings.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const args = Object.fromEntries(process.argv.slice(2).join(" ").split("--").filter(Boolean).map((s) => { const [k, ...v] = s.trim().split(" "); return [k, v.join(" ") || true]; }));
if (!args.slug) { console.error("Usage: node scripts/render.mjs --slug <client-slug> [--html-only]"); process.exit(1); }
const dir = path.join(here, "..", "clients", args.slug);
const data = JSON.parse(await readFile(path.join(dir, "data.json"), "utf8"));
const f = JSON.parse(await readFile(path.join(dir, "findings.json"), "utf8"));
const css = await readFile(path.join(here, "..", "template", "report.css"), "utf8");
const contact = await readContact();
const L = f.client.lang === "en" ? "en" : "ro";
const T = STRINGS[L];

const checks = runChecks(data, f);
const scores = sectionScores(checks);
const SECTIONS = ["google", "ai", "gbp", "technical", "onpage", "schema", "mobile"];
const scored = SECTIONS.filter((s) => scores[s] != null);
const overall = Math.round(scored.reduce((a, s) => a + scores[s], 0) / scored.length);
const SEV = { critic: 3, important: 2, minor: 1 };
const failing = (sec) => checks.filter((c) => c.section === sec && !c.hidden && (c.manual || (c.value != null && c.value < 0.9))).sort((a, b) => SEV[b.severity] - SEV[a.severity] || (a.value ?? 0) - (b.value ?? 0));
const allFailing = checks.filter((c) => !c.hidden && (c.manual || (c.value != null && c.value < 0.9)));
const byId = Object.fromEntries(checks.map((c) => [c.id, c]));
const top3 = (f.top3?.length ? f.top3.map((id) => byId[id]).filter(Boolean) : []).concat(allFailing.sort((a, b) => SEV[b.severity] * b.weight - SEV[a.severity] * a.weight)).filter((c, i, arr) => arr.indexOf(c) === i).slice(0, 3);
const Q = L === "en" ? ["“", "”"] : ["„", "”"];
const schemaDone = ["localbusiness-schema", "nap-schema"].every((id) => checks.find((c) => c.id === id)?.value === 1);
const audience = /stomat|dent|clinic|medic|cabinet|spital|fizio|psih|veterin/i.test(f.client.type ?? "") ? T.patients : T.clients;

const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const tone = (v) => (v >= 80 ? "good" : v >= 55 ? "warn" : "bad");
const toneColor = (v) => ({ good: "var(--good)", warn: "#d98a00", bad: "var(--bad)" })[tone(v)];
const dateFmt = (d) => new Date(/^\d{4}-\d{2}-\d{2}$/.test(d) ? d + "T12:00:00" : d).toLocaleDateString(L === "ro" ? "ro-RO" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
const num = (x, d = 0) => Number(x).toLocaleString(L === "ro" ? "ro-RO" : "en-GB", { maximumFractionDigits: d });
const ring = (v, size = 120, stroke = 11, label = "/ 100") => {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r;
  return `<div class="ring"><svg viewBox="0 0 ${size} ${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="#e2dfd6" stroke-width="${stroke}"/><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${toneColor(v)}" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${(c * v) / 100} ${c}"/></svg><div class="val"><b>${v}</b><span>${label}</span></div></div>`;
};
const pill = (sec) => (scores[sec] == null ? "" : `<div class="pill ${tone(scores[sec])}"><b>${scores[sec]}</b><span>${T.score}</span></div>`);
const head = (n, sec, lead) => `<div class="shead"><div><div class="num">${String(n).padStart(2, "0")}</div><h2>${T.sections[sec]}</h2><p class="lead">${lead}</p></div>${pill(sec)}</div>`;
const issueHtml = (c) => `<div class="issue"><span class="sev ${c.severity}">${T.sev[c.severity]}</span><div><h4>${esc(c[L].title)}</h4>${c[L].detail ? `<p>${esc(c[L].detail)}</p>` : ""}${c[L].fix ? `<div class="fix"><b>${T.whatToDo}</b> ${esc(c[L].fix)}</div>` : ""}</div></div>`;
const issues = (sec) => { const x = failing(sec); return x.length ? `<div class="issues">${x.map(issueHtml).join("")}</div>` : ""; };
const goods = (items) => (items.filter(Boolean).length ? `<div class="goodlist"><h4>${T.good}</h4><ul>${items.filter(Boolean).map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>` : "");
const img = (file) => (existsSync(path.join(dir, file)) ? file : null);

// ------------------------------------------------------------------ pages
const P = data.pages.filter((p) => p.status === 200);
const lh = data.lighthouse;
const html = `<!doctype html><html lang="${L}"><head><meta charset="utf-8"><title>${esc(T.docTitle)} · ${esc(f.client.name)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${css}</style></head><body>

<!-- COVER -->
<section class="cover">
  <div class="blob"></div>
  <div class="brandline"><strong>Dragoș Catană</strong><span>dragoscatana.com</span></div>
  ${f.dryRun ? `<span class="dry">${T.dryRun}</span>` : ""}
  <div class="kicker">${T.kicker}</div>
  <h1>${T.coverTitle(audience)}</h1>
  <div class="client"><div class="name">${esc(f.client.name)}</div><div class="meta">${esc(shortUrl(data.finalUrl))} · ${esc(f.client.city ?? "")}${f.client.type ? ` · ${esc(f.client.type)}` : ""}</div></div>
  <div class="teaser">${[["overall", overall], ["google", scores.google], ["ai", scores.ai]].filter(([, v]) => v != null).map(([k, v]) => `<div><b style="color:${toneColor(v)}">${v}</b><span>${k === "overall" ? T.overallScore : T.sections[k]}</span></div>`).join("")}</div>
  ${img("mobile.png") ? `<div class="phone"><img src="mobile.png" alt=""></div>` : ""}
  <div class="foot"><div class="who">${T.preparedBy}<span>${T.preparedNote}</span></div><div class="date"><b>${dateFmt(f.reportDate ?? data.collectedAt)}</b>${T.auditFree}</div></div>
</section>

<!-- SUMMARY -->
<section class="section wrap">
  <div class="shead"><div><div class="num">01</div><h2>${T.summary}</h2><p class="lead">${T.summaryLead}</p></div></div>
  <div class="summary-top avoid">
    ${ring(overall)}
    <div class="verdict"><h3>${esc(f.summary?.headline ?? "")}</h3><p>${esc(f.summary?.intro ?? "")}</p><p class="small muted">${T.scale}</p></div>
  </div>
  <div class="bars avoid">${SECTIONS.map((s) => scores[s] == null ? `<div class="bar na"><span class="lbl">${T.sections[s]}</span><span class="v">${T.notChecked}</span><div class="track"></div></div>` : `<div class="bar"><span class="lbl">${T.sections[s]}</span><span class="v" style="color:${toneColor(scores[s])}">${scores[s]}</span><div class="track"><i style="width:${scores[s]}%;background:${toneColor(scores[s])}"></i></div></div>`).join("")}</div>
  <div class="top3 avoid"><h3>${T.top3}</h3><div class="cards">${top3.map((c, i) => `<div class="card"><div class="n">${i + 1}</div><h4>${esc(c[L].title)}</h4>${c[L].fix ? `<div class="fix"><b>${T.whatToDo}</b> ${esc(c[L].fix)}</div>` : ""}</div>`).join("")}</div></div>
</section>

<!-- GOOGLE -->
<section class="section wrap">
  ${head("02", "google", T.leads.google(audience))}
  ${f.google?.keywords?.length ? `<table><thead><tr><th>${T.kw}</th><th class="c">${T.mapPack}</th><th class="c">${T.organic}</th><th class="c">${T.aiOverview}</th><th>${T.whoIsFirst}</th></tr></thead><tbody>
  ${f.google.keywords.map((k) => `<tr><td><b>${esc(k.kw)}</b></td><td class="c">${posChip(k.localPack, 3)}</td><td class="c">${posChip(k.organic, 10)}</td><td class="c">${k.aiOverviewMentions == null ? `<span class="chip na">–</span>` : k.aiOverviewMentions ? `<span class="chip yes">${T.yes}</span>` : `<span class="chip no">${T.no}</span>`}</td><td class="small">${esc((k.leaders ?? []).join(" · "))}</td></tr>`).join("")}
  </tbody></table><p class="note">${T.source}: ${esc(f.google.source)}, ${dateFmt(f.google.checkedAt)}. ${T.rankNote}</p>` : `<p class="muted">${T.notChecked}</p>`}
  ${issues("google")}
  ${(f.google?.notes ?? []).length ? `<p class="note">${f.google.notes.map(esc).join(" ")}</p>` : ""}
</section>

<!-- AI -->
<section class="section wrap">
  ${head("03", "ai", T.leads.ai(audience))}
  ${f.ai?.prompts?.length ? `<table><thead><tr><th>${T.assistant}</th><th>${T.question}</th><th class="c">${T.appear}</th><th>${T.recommendedInstead}</th></tr></thead><tbody>
  ${f.ai.prompts.map((p) => `<tr><td><b>${esc(p.engine)}</b></td><td>${esc(p.prompt)}</td><td class="c">${p.mentioned ? `<span class="chip yes">${T.yes}${p.position ? ` · #${p.position}` : ""}</span>` : `<span class="chip no">${T.no}</span>`}</td><td class="small">${esc((p.recommended ?? []).filter((r) => !new RegExp(f.client.name, "i").test(r)).slice(0, 4).join(", ") || "–")}</td></tr>`).join("")}
  </tbody></table>
  <p class="note">${esc(f.ai.method ?? "")} ${T.checkedOn} ${dateFmt(f.ai.checkedAt)}.${f.ai.notChecked?.length ? ` ${T.notCheckedYet}: ${esc(f.ai.notChecked.join(", "))}.` : ""}</p>
  ${f.ai.prompts.filter((p) => p.excerpt).slice(0, 1).map((p) => `<div class="quote avoid">${Q[0]}${esc(p.excerpt)}${Q[1]}<small>${esc(p.engine)}, ${T.answerTo} ${Q[0]}${esc(p.prompt)}${Q[1]}</small></div>`).join("")}` : `<p class="muted">${T.notChecked}</p>`}
  <div class="avoid"><h3 class="sub">${T.aiReady}</h3>
  <table><tbody>
    ${aiRow(T.aiRows.bots, !Object.entries(data.robots.bots ?? {}).some(([b, v]) => /GPT|OAI|Claude|Perplexity|Google-Extended/.test(b) && v.blocked))}
    ${aiRow(T.aiRows.local, checks.find((c) => c.id === "localbusiness-schema")?.value === 1)}
    ${aiRow(T.aiRows.faq, P.some((p) => p.hasFaqText))}
    ${aiRow(T.aiRows.address, P.some((p) => p.hasAddress))}
    ${aiRow(T.aiRows.prices, P.some((p) => p.hasPrices))}
    ${aiRow(T.aiRows.llms, data.llmsTxt.found)}
  </tbody></table></div>
  ${issues("ai")}
</section>

<!-- GBP -->
<section class="section wrap">
  ${head("04", "gbp", T.leads.gbp(audience))}
  ${f.gbp?.exists !== false && (f.gbp?.rating != null || f.gbp?.reviews != null) ? `<div class="kpis avoid">
    <div class="kpi ${f.gbp.rating >= 4.6 ? "good" : "warn"}"><div class="k">${T.rating}</div><div class="v">${f.gbp.rating != null ? num(f.gbp.rating, 1) + " ★" : "–"}</div><div class="t">${num(f.gbp.reviews)} ${T.reviews}</div></div>
    <div class="kpi ${f.gbp.ownerResponseRate >= 0.9 ? "good" : "warn"}"><div class="k">${T.replies}</div><div class="v">${f.gbp.ownerResponseRate != null ? Math.round(f.gbp.ownerResponseRate * 100) + "%" : "–"}</div><div class="t">${f.gbp.responseSample ? T.lastN(f.gbp.responseSample) : ""}</div></div>
    <div class="kpi ${f.gbp.reviewsPerMonth >= 8 ? "good" : f.gbp.reviewsPerMonth >= 4 ? "warn" : "bad"}"><div class="k">${T.newReviews}</div><div class="v">${f.gbp.reviewsPerMonth != null ? "≈" + num(f.gbp.reviewsPerMonth, 1) : "–"}</div><div class="t">${T.perMonth}</div></div>
  </div>
  ${f.gbp.competitors?.length ? `<h3 class="sub">${T.vsCompetitors}</h3><div class="hbars">${[...[...f.gbp.competitors].sort((a, b) => b.reviews - a.reviews).slice(0, 7), { name: f.gbp.name, rating: f.gbp.rating, reviews: f.gbp.reviews, me: true }].sort((a, b) => b.reviews - a.reviews).map((c, _, arr) => `<div class="hbar ${c.me ? "me" : ""}"><span>${esc(c.name)}</span><div class="t"><i style="width:${(100 * c.reviews) / arr[0].reviews}%"></i></div><span class="r">${num(c.reviews)} · ${num(c.rating, 1)}★</span></div>`).join("")}</div>` : ""}
  <p class="note">${T.source}: ${esc(f.gbp.source)}${f.gbp.competitorsSource ? `; ${T.compSrc}: ${esc(f.gbp.competitorsSource)}` : ""}. ${(f.gbp.notes ?? []).map(esc).join(" ")}</p>
  ${goods([f.gbp.rating >= 4.6 && T.goods.rating(num(f.gbp.rating, 1)), f.gbp.ownerResponseRate >= 0.9 && T.goods.replies, f.gbp.websiteLinked && T.goods.site, f.gbp.categories > 3 && T.goods.categories(f.gbp.categories)])}` : f.gbp?.exists === false ? `<p class="note">${T.source}: ${esc(f.gbp.source ?? "")}. ${(f.gbp.notes ?? []).map(esc).join(" ")}</p>` : `<p class="muted">${T.notChecked}</p>`}
  ${issues("gbp")}
</section>

<!-- TECHNICAL -->
<section class="section wrap">
  ${head("05", "technical", T.leads.technical(audience))}
  ${lh ? `<div class="gauges avoid">${[["performance", T.lh.performance], ["accessibility", T.lh.accessibility], ["best-practices", T.lh.best], ["seo", T.lh.seo]].map(([k, l]) => `<div class="gauge">${ring(lh.scores[k], 80, 9, "")}<span>${l}</span></div>`).join("")}</div>
  <div class="kpis avoid">
    ${kpi(T.lcp, lh.metrics.lcpMs / 1000, "s", 2.5, 4, T.lcpT)}
    ${kpi(T.fcp, lh.metrics.fcpMs / 1000, "s", 1.8, 3, T.fcpT)}
    ${kpi(T.cls, lh.metrics.cls, "", 0.1, 0.25, T.clsT, 2)}
  </div>
  <p class="note">${T.lhNote(lh.lighthouseVersion, dateFmt(lh.fetchTime), lh.pageWeightKb)}</p>` : ""}
  ${issues("technical")}
  ${goods([data.httpToHttps.ok && T.goods.https, data.hostVariant.consolidated && T.goods.host, data.robots.found && T.goods.robots, data.sitemap.found.length && T.goods.sitemap(data.sitemap.urlCount), data.headers["content-encoding"] && T.goods.compression, !data.links.broken.some((l) => l.kind === "internal") && T.goods.noBroken(data.links.checked)])}
</section>

<!-- ON-PAGE -->
<section class="section wrap">
  ${head("06", "onpage", T.leads.onpage(audience))}
  <table><thead><tr><th>${T.page}</th><th>${T.titleCol}</th><th class="c">${T.descCol}</th><th class="c">H1</th><th class="c">${T.imgAlt}</th></tr></thead><tbody>
  ${P.slice(0, 10).map((p) => `<tr><td class="small"><b>${esc(shortUrl(p.url).replace(/^[^/]+/, "") || "/")}</b></td><td class="small">${esc(p.title ?? "–")} <span class="muted">(${p.title?.length ?? 0})</span></td><td class="c">${p.description ? `<span class="chip ${p.description.length >= 70 && p.description.length <= 165 ? "yes" : "mid"}">${p.description.length}</span>` : `<span class="chip no">${T.no}</span>`}</td><td class="c"><span class="chip ${p.h1.length === 1 ? "yes" : "no"}">${p.h1.length}</span></td><td class="c">${p.images.total ? `<span class="chip ${p.images.missingAlt ? "mid" : "yes"}">${p.images.total - p.images.missingAlt}/${p.images.total}</span>` : "–"}</td></tr>`).join("")}
  </tbody></table>
  <p class="note">${T.onpageNote(P.length, data.sitemap.urlCount)}</p>
  ${issues("onpage")}
</section>

<!-- SCHEMA -->
<section class="flow wrap">
  ${head("07", "schema", T.leads.schema(audience))}
  <div class="${schemaDone ? "" : "two"}">
    <div><h3 class="sub" style="margin-top:0">${T.schemaFound}</h3><table><tbody>${[...new Map(P.flatMap((p) => p.schema).map((s) => [s.type, s])).values()].map((s) => `<tr><td><b>${esc(s.type)}</b></td><td class="small muted">${esc(s.has.join(", ") || "–")}</td></tr>`).join("") || `<tr><td class="muted">${T.none}</td></tr>`}</tbody></table></div>
    ${schemaDone ? "" : `<div><h3 class="sub" style="margin-top:0">${T.schemaExample}</h3><pre class="code">${esc(schemaExample())}</pre></div>`}
  </div>
  ${issues("schema")}
</section>

<!-- MOBILE -->
<section class="section wrap">
  ${head("08", "mobile", T.leads.mobile(audience))}
  <div class="twoshot">
    ${img("mobile.png") ? `<div class="shot"><img src="mobile.png" alt=""></div>` : "<div></div>"}
    <div>${data.browser?.mobile ? `<table><tbody>
      ${aiRow(T.mob.overflow, !data.browser.mobile.horizontalOverflow)}
      ${aiRow(T.mob.font(data.browser.mobile.bodyFontPx), data.browser.mobile.bodyFontPx >= 16)}
      ${aiRow(T.mob.tap(data.browser.mobile.smallTapTargets), data.browser.mobile.smallTapTargets <= 3)}
      ${aiRow(T.mob.tel, data.browser.mobile.hasTelLinkVisible)}
      ${aiRow(T.mob.viewport, !!P[0]?.viewport)}
    </tbody></table>` : ""}</div>
  </div>
  ${issues("mobile")}
</section>

<!-- PLAN -->
<section class="section wrap">
  <div class="shead"><div><div class="num">09</div><h2>${T.plan}</h2><p class="lead">${T.planLead}</p></div></div>
  <div class="plan">
    ${["quick", "big"].map((e) => `<div class="col"><h3>${T.effort[e].t}</h3><div class="when">${T.effort[e].when}</div><ol>${allFailing.filter((c) => c.effort === e).sort((a, b) => SEV[b.severity] - SEV[a.severity] || b.weight - a.weight).slice(0, 6).map((c) => `<li><span class="tag">${T.sections[c.section]} · ${T.impact[c.severity]}</span><b>${esc(c[L].fix || c[L].title)}</b></li>`).join("")}</ol></div>`).join("")}
  </div>
</section>

<!-- CTA -->
<section class="section wrap">
  <div class="cta">
    <h2>${T.ctaTitle}</h2>
    <p>${T.ctaText(audience)}</p>
    <a class="btn" href="${contact.calendly}">${T.ctaBtn} →</a>
    <div class="contacts">
      <div>${T.book}<b><a href="${contact.calendly}" style="color:#fff">${esc(contact.calendly.replace("https://", ""))}</a></b></div>
      <div>E-mail<b>${esc(contact.email)}</b></div>
      <div>${T.phone}<b>${esc(contact.phone)}</b></div>
      <div>Web<b>dragoscatana.com</b></div>
    </div>
    <div class="sign"><span class="s">Dragoș Catană</span><span class="small" style="color:#c9c7bf">${T.signRole}</span></div>
  </div>
  <div class="method">
    <div><h4>${T.howScore}</h4><p>${T.howScoreText}</p></div>
    <div><h4>${T.sourcesT}</h4><ul>
      <li>${T.src.site(dateFmt(data.collectedAt), data.pages.length, data.links.checked)}</li>
      ${lh ? `<li>${T.src.lh}</li>` : ""}
      ${f.google?.source ? `<li>${esc(f.google.source)}</li>` : ""}
      ${f.gbp?.source ? `<li>${esc(f.gbp.source)}</li>` : ""}
      ${f.ai?.prompts?.length ? `<li>${T.src.ai([...new Set(f.ai.prompts.map((p) => p.engine))].join(", "))}</li>` : ""}
    </ul></div>
  </div>
</section>
</body></html>`;

await writeFile(path.join(dir, "report.html"), html);
console.log("· report.html written; overall", overall, scores);
if (!args["html-only"]) await toPdf();

// ------------------------------------------------------------------ helpers
function posChip(pos, good) {
  if (pos == null) return `<span class="chip no">${T.notInTop}</span>`;
  return `<span class="chip ${pos <= 3 ? "yes" : pos <= good ? "mid" : "no"}">#${pos}</span>`;
}
function aiRow(label, ok) {
  return `<tr><td>${esc(label)}</td><td class="c" style="width:22mm">${ok ? `<span class="chip yes">${T.yes}</span>` : `<span class="chip no">${T.no}</span>`}</td></tr>`;
}
function kpi(label, v, unit, good, ok, hint, d = 1) {
  const cls = v <= good ? "good" : v <= ok ? "warn" : "bad";
  return `<div class="kpi ${cls}"><div class="k">${label}</div><div class="v">${num(v, d)}${unit ? " " + unit : ""}</div><div class="t">${hint}</div></div>`;
}
function schemaExample() {
  const g = f.gbp ?? {};
  const type = schemaTypeFor(f.client.type);
  const o = { "@context": "https://schema.org", "@type": type, name: g.name ?? f.client.name, url: data.finalUrl };
  if (type === "ProfessionalService" && f.client.contact) o.founder = { "@type": "Person", name: f.client.contact, jobTitle: f.client.type };
  if (g.phone) o.telephone = g.phone;
  if (g.address) o.address = { "@type": "PostalAddress", streetAddress: g.address.split(",")[0], addressLocality: f.client.city, addressCountry: "RO" };
  else o.areaServed = [f.client.city, "Online"].filter(Boolean);
  if (g.address) o.openingHoursSpecification = "…";
  o.sameAs = f.gbp?.exists === false ? ["…Instagram", "…YouTube", "…LinkedIn"] : ["…Google Maps", "…Facebook", "…Instagram"];
  return JSON.stringify(o, null, 2);
}
async function readContact() {
  const src = await readFile(path.join(here, "..", "..", "lib", "site-config.ts"), "utf8").catch(() => "");
  return {
    calendly: /calendly:\s*"([^"]+)"/.exec(src)?.[1] ?? "https://calendly.com/dragoscatana/consultanta-1-la-1",
    email: /email:\s*"([^"]+)"/.exec(src)?.[1] ?? "me@dragoscatana.com",
    phone: /display:\s*"([^"]+)"/.exec(src)?.[1] ?? "+40 740 939 472",
  };
}
async function toPdf() {
  const puppeteer = (await import("puppeteer-core")).default;
  const exe = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  const browser = await puppeteer.launch({ executablePath: exe, headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(path.join(dir, "report.html")).href, { waitUntil: "networkidle0", timeout: 60000 });
    await page.evaluate(() => document.fonts.ready);
    const foot = `<div style="width:100%;font-family:Inter,Arial,sans-serif;font-size:7px;color:#59594f;padding:0 17mm;display:flex;justify-content:space-between;"><span>${esc(T.docTitle)} · ${esc(f.client.name)}</span><span>Dragoș Catană · dragoscatana.com · <span class="pageNumber"></span>/<span class="totalPages"></span></span></div>`;
    const opts = { format: "A4", printBackground: true, preferCSSPageSize: true };
    const cover = await page.pdf({ ...opts, pageRanges: "1" });
    const rest = await page.pdf({ ...opts, pageRanges: "2-", displayHeaderFooter: true, headerTemplate: "<div></div>", footerTemplate: foot });
    const { PDFDocument } = await import("pdf-lib");
    const out = await PDFDocument.create();
    for (const buf of [cover, rest]) { const src = await PDFDocument.load(buf); (await out.copyPages(src, src.getPageIndices())).forEach((p) => out.addPage(p)); }
    out.setTitle(`${T.docTitle} · ${f.client.name}`); out.setAuthor("Dragoș Catană"); out.setCreator("dragoscatana.com");
    await writeFile(path.join(dir, "report.pdf"), await out.save());
    console.log("· report.pdf written");
  } finally {
    await browser.close();
  }
}
