import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { abs } from "@/lib/schema";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-11-18");
  const pages = [
    "", "/servicii", "/servicii/redesign-website", "/servicii/creare-website", "/servicii/seo-vizibilitate-ai", "/servicii/website-clinici-medicale", "/servicii/website-cabinete-avocatura",
    "/lucrari", "/lucrari/cheesy-media", "/audit-gratuit-vizibilitate-ai", "/articole", "/despre", "/contact",
    "/confidentialitate", "/cookie", "/termeni",
  ].map((p) => ({ url: abs(p === "" ? "/" : p), lastModified: now }));
  const posts = articles.map((a) => ({ url: abs(`/articole/${a.slug}`), lastModified: new Date(a.date) }));
  return [...pages, ...posts];
}
