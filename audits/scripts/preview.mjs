#!/usr/bin/env node
// Slice the rendered report into tall PNG screenshots so the whole report can be read back page by page
// before it goes to anyone. Also prints the PDF page count.
// Usage: node scripts/preview.mjs --slug <slug>   → clients/<slug>/png/p0.png, p1.png, …
import { readFile, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer-core";
import { PDFDocument } from "pdf-lib";

const here = path.dirname(fileURLToPath(import.meta.url));
const slug = process.argv[process.argv.indexOf("--slug") + 1];
if (!slug || slug.startsWith("--")) { console.error("usage: node scripts/preview.mjs --slug <slug>"); process.exit(1); }
const dir = path.join(here, "..", "clients", slug);
const out = path.join(dir, "png");
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 794, height: 1123 }); // A4 at 96 dpi
  await page.goto(pathToFileURL(path.join(dir, "report.html")).href, { waitUntil: "networkidle0", timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMediaType("print");
  const h = await page.evaluate(() => document.body.scrollHeight);
  let i = 0;
  for (let y = 0; y < h; y += 2200, i++) await page.screenshot({ path: path.join(out, `p${i}.png`), clip: { x: 0, y, width: 794, height: Math.min(2200, h - y) } });
  console.log(`· ${i} slices → clients/${slug}/png/`);
} finally {
  await browser.close();
}
const pdf = await PDFDocument.load(await readFile(path.join(dir, "report.pdf")));
console.log(`· report.pdf: ${pdf.getPageCount()} pages`);
