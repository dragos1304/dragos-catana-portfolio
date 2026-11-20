import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { abs } from "@/lib/schema";
import { sitemapEntries } from "@/lib/site-map";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-11-19");
  const pages = sitemapEntries().map(({ path, languages }) => ({
    url: abs(path),
    lastModified: now,
    ...(languages && { alternates: { languages: Object.fromEntries(Object.entries(languages).map(([l, p]) => [l, abs(p)])) } }),
  }));
  const posts = articles.map((a) => ({ url: abs(`/articole/${a.slug}`), lastModified: new Date(a.date) }));
  return [...pages, ...posts];
}
