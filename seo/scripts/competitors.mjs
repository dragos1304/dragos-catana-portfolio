// Public tags on competitors' home pages and the Google Ads conversion tags in their public GTM container.
// node seo/scripts/competitors.mjs [domain ...]
import { readFileSync } from "node:fs";
const brand = readFileSync("content-state/BRAND.md", "utf8");
const domains = process.argv.slice(2).length ? process.argv.slice(2) : [...brand.match(/competitors:[^\n]*\n((?:\s+-.*\n)+)/)[1].matchAll(/-\s+(\S+)/g)].map((m) => m[1]);
const get = async (u) => { const r = await fetch(u, { headers: { "User-Agent": "Mozilla/5.0 Chrome/131.0 Safari/537.36" }, signal: AbortSignal.timeout(20000) }); if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text(); };
const uniq = (s, re) => [...new Set(s.match(re) ?? [])];
for (const d of domains) {
  try {
    const h = await get(`https://${d}/`);
    const gtm = uniq(h, /GTM-[A-Z0-9]{4,10}\b/g);
    console.log(`\n${d}: ${[...gtm, ...uniq(h, /\b(?:AW-\d{8,}|G-[A-Z0-9]{8,12})\b/g)].join(", ") || "no tags in the HTML"}`);
    for (const id of gtm) {
      const js = await get(`https://www.googletagmanager.com/gtm.js?id=${id}`);
      const labels = uniq(js, /"vtp_conversionLabel":"[^"]+"/g), events = uniq(js, /"vtp_eventName":"[^"]+"/g);
      console.log(`  ${id}: ${(js.match(/"function":"__awct"/g) ?? []).length} Google Ads conversion tags${labels.length ? `, labels ${labels.map((l) => l.split('"')[3]).join(", ")}` : ""}${events.length ? `; events ${events.map((l) => l.split('"')[3]).join(", ")}` : ""}`);
    }
  } catch (e) { console.log(`\n${d}: not readable (${e.message})`); }
}
