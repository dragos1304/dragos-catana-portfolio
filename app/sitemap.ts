import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { abs } from "@/lib/schema";
import { pairs } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-11-19");
  const langs = (ro: string) => ({ languages: { ro: abs(ro), en: abs(pairs[ro]), "x-default": abs(ro) } });
  // Romanian pages with an English twin, then the English twins, both with reciprocal hreflang.
  const paired = Object.keys(pairs).flatMap((ro) => [
    { url: abs(ro), lastModified: now, alternates: langs(ro) },
    { url: abs(pairs[ro]), lastModified: now, alternates: langs(ro) },
  ]);
  const roOnly = ["/articole/", "/confidentialitate/", "/cookie/", "/termeni/"].map((p) => ({ url: abs(p), lastModified: now }));
  const posts = articles.map((a) => ({ url: abs(`/articole/${a.slug}`), lastModified: new Date(a.date) }));
  return [...paired, ...roOnly, ...posts];
}
