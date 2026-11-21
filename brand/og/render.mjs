// Renders brand/og/og.html to public/og-ro.png and public/og-en.png (1200 x 630).
// Usage (from the project root): node brand/og/render.mjs   — needs Playwright (npm i -g playwright).
import { createRequire } from "node:module";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const require = createRequire(join(execSync("npm root -g").toString().trim(), "playwright") + "/");
const { chromium } = require("playwright");
const here = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const lang of ["ro", "en"]) {
  await page.goto(`file://${join(here, "og.html")}?lang=${lang}`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  await page.screenshot({ path: join(here, "..", "..", "public", `og-${lang}.png`) });
}
await browser.close();
console.log("public/og-ro.png, public/og-en.png");
