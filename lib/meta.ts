import type { Metadata } from "next";
import { brand, site } from "./site-config";
import { alternates, type Lang, type PageKey } from "./site-map";

/**
 * Page metadata in one place: title, description, canonical + hreflang, Open Graph and Twitter card.
 * Next.js replaces (does not merge) a layout's `openGraph` when a page sets its own, so every page gets
 * the full set here: its own title, description and URL, the locale and the preview image of its language.
 */
const LOCALE: Record<Lang, string> = { ro: "ro_RO", en: "en_GB" };
const OG_ALT: Record<Lang, string> = {
  ro: `${site.name}: ${brand.tagline.ro}. Site-uri și SEO pentru afaceri locale din România.`,
  en: `${site.name}: ${brand.tagline.en}. Websites and SEO for local businesses in Romania.`,
};

type Title = string | { absolute: string };
type SeoInput = {
  title: Title;
  description: string;
  lang: Lang;
  canonical: string;
  languages?: Record<string, string>;
  article?: { publishedTime: string; modifiedTime?: string };
};

export const ogImage = (lang: Lang) => ({ url: brand.og[lang], width: 1200, height: 630, alt: OG_ALT[lang] });

export function seo({ title, description, lang, canonical, languages, article }: SeoInput): Metadata {
  const full = typeof title === "string" ? `${title} | ${site.name}` : title.absolute;
  const image = ogImage(lang);
  return {
    title,
    description,
    alternates: languages ? { canonical, languages } : { canonical },
    openGraph: {
      type: article ? "article" : "website",
      siteName: site.name,
      locale: LOCALE[lang],
      ...(languages ? { alternateLocale: [LOCALE[lang === "ro" ? "en" : "ro"]] } : {}),
      url: canonical,
      title: full,
      description,
      images: [image],
      ...(article ? { publishedTime: article.publishedTime, modifiedTime: article.modifiedTime, authors: [site.legalName] } : {}),
    },
    twitter: { card: "summary_large_image", title: full, description, images: [image.url] },
  };
}

/** Metadata for a page in the site map (hreflang twins included). */
export function pageMeta(key: PageKey, lang: Lang, m: { title: Title; description: string }): Metadata {
  const a = alternates(key, lang);
  return seo({ title: m.title, description: m.description, lang, canonical: a.canonical, languages: "languages" in a ? a.languages : undefined });
}
