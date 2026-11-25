// Turns a Search Console "Queries" CSV export into a to-do list.
// node seo/scripts/gsc.mjs seo/exports/Queries.csv   (Performance → 16 months → Export → CSV; works in EN and RO)
import { readFileSync } from "node:fs";
const file = process.argv[2];
if (!file) { console.error("usage: node seo/scripts/gsc.mjs <Queries.csv>"); process.exit(1); }
const parse = (line) => [...line.matchAll(/(?:^|,)(?:"((?:[^"]|"")*)"|([^,]*))/g)].map((m) => (m[1] ?? m[2] ?? "").replaceAll('""', '"'));
const raw = readFileSync(file, "utf8").replace(/^﻿/, "").trim().split(/\r?\n/).slice(1);
const num = (s) => Number(String(s).replace("%", "").replace(",", "."));
const int = (s) => Number(String(s).replace(/[^\d]/g, ""));
const rows = raw.map(parse).map(([q, c, i, , p]) => ({ q, clicks: int(c), imp: int(i), pos: num(p) })).filter((r) => r.q);
if (!rows.length || rows.some((r) => [r.clicks, r.imp, r.pos].some(Number.isNaN))) { console.error("Unexpected CSV columns: expected query, clicks, impressions, CTR, position."); process.exit(1); }
const plain = (s) => s.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
const brand = (r) => /dragos|catana|dragoscatana/.test(plain(r.q));
const table = (title, list, n = 15) => { console.log(`\n## ${title} (${list.length})`); list.slice(0, n).forEach((r) => console.log(`- ${r.q} · ${r.imp} impressions · ${r.clicks} clicks · position ${r.pos.toFixed(1)}`)); };
const by = (f) => rows.filter(f).sort((a, b) => b.imp - a.imp);
console.log(`${rows.length} queries`);
table("8+ words: conversational questions", by((r) => r.q.trim().split(/\s+/).length >= 8));
table("Real questions", by((r) => /^(cum|ce|de ce|cat|care|cine|unde|cand|how|what|why|which|who|is|can|does)\b/.test(plain(r.q)) && !brand(r)));
table("Seen but not clicked: 20+ impressions, CTR under 1%, position 1-20", by((r) => r.imp >= 20 && r.clicks / r.imp < 0.01 && r.pos <= 20 && !brand(r)));
table("One push from page one: positions 8-15", by((r) => r.pos >= 8 && r.pos <= 15 && !brand(r)));
const b = by(brand);
console.log(`\n## Brand\n${b.reduce((s, r) => s + r.imp, 0)} impressions, ${b.reduce((s, r) => s + r.clicks, 0)} clicks, ${b.length} queries`);
