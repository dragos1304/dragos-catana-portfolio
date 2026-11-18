import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-11-18");
  const pages = [
    "", "/servicii", "/servicii/redesign-website", "/servicii/creare-website", "/servicii/seo-vizibilitate-ai",
    "/lucrari", "/lucrari/cheesy-media", "/audit-gratuit-vizibilitate-ai", "/articole", "/despre", "/contact",
    "/confidentialitate", "/cookie", "/termeni",
  ].map((p) => ({ url: `${site.url}${p}`, lastModified: now }));
  const posts = articles.map((a) => ({ url: `${site.url}/articole/${a.slug}`, lastModified: new Date(a.date) }));
  return [...pages, ...posts];
}
