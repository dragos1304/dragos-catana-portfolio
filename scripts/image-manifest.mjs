// Builds lib/image-manifest.json from the WebP files in public/lucrari: for every image name,
// the available widths and the real proportions. Shot and LighthouseReport read it, so a new
// screenshot (any size, any ratio) needs no code change. Runs before every build (npm "prebuild").
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const root = "public/lucrari";

/** Width and height of a WebP file, read from its header (VP8, VP8L or VP8X). */
function webpSize(file) {
  const b = readFileSync(file);
  if (b.toString("ascii", 0, 4) !== "RIFF" || b.toString("ascii", 8, 12) !== "WEBP") throw new Error(`not a WebP: ${file}`);
  const chunk = b.toString("ascii", 12, 16);
  if (chunk === "VP8X") return { w: 1 + b.readUIntLE(24, 3), h: 1 + b.readUIntLE(27, 3) };
  if (chunk === "VP8L") { const bits = b.readUInt32LE(21); return { w: 1 + (bits & 0x3fff), h: 1 + ((bits >> 14) & 0x3fff) }; }
  if (chunk === "VP8 ") return { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
  throw new Error(`unknown WebP chunk ${chunk} in ${file}`);
}

const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)]));

const manifest = {};
for (const file of walk(root).filter((f) => f.endsWith(".webp")).sort()) {
  const rel = relative("public", file);
  const dir = "/" + rel.slice(0, rel.lastIndexOf("/"));
  const base = rel.slice(rel.lastIndexOf("/") + 1, -".webp".length);
  const m = base.match(/^(.*)-(\d+)$/);
  const name = m ? m[1] : base;
  const { w, h } = webpSize(file);
  const entry = (manifest[name] ??= { dir, variants: [] });
  // Images are served with a one-year immutable cache, so the URL carries a content hash:
  // replacing a screenshot under the same file name still reaches every browser.
  const v = createHash("md5").update(readFileSync(file)).digest("hex").slice(0, 8);
  entry.variants.push({ src: `/${rel}?v=${v}`, w, h });
}
for (const e of Object.values(manifest)) e.variants.sort((a, b) => a.w - b.w);
writeFileSync("lib/image-manifest.json", JSON.stringify(manifest, null, 2) + "\n");
console.log(`image manifest: ${Object.keys(manifest).length} images`);
