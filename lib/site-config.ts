import type { Metadata } from "next";
export const site = {
  name: "Dragoș Catană",
  legalName: "Dragoș-Mihai Catană",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dragoscatana.com",
  description:
    "Redesign de website, creare de website-uri și SEO cu accent pe vizibilitate în ChatGPT, Gemini și Perplexity. Pentru clinici, cabinete de avocatură și afaceri locale din România.",
  city: "Cluj-Napoca",
  calendly: "https://calendly.com/dragoscatana/consultanta-1-la-1",
  gtmId: "GTM-K7RPGZSV",
  /** The reply promise, phrased per language. Change it here and every page, email and band follows. */
  reply: { hours: 24, ro: "24 de ore", en: "24 hours" },
} as const;

/** Public phone (also on the Google Business Profile and LinkedIn). WhatsApp uses the same number. */
export const phone = { e164: "+40740939472", display: "+40 740 939 472" } as const;

/**
 * Every social profile, in one place. Footer, contact pages and the schema `sameAs` read from here:
 * change or add a link once and it updates everywhere. `sameAs: true` = the profile is the same entity
 * (tells Google and AI assistants these accounts are you); WhatsApp is a contact channel, not a profile.
 */
export const social = {
  linkedin: { name: "LinkedIn", url: "https://www.linkedin.com/in/dragos-catana/", sameAs: true },
  instagram: { name: "Instagram", url: "https://www.instagram.com/dragos_catana", sameAs: true },
  whatsapp: { name: "WhatsApp", url: `https://wa.me/${phone.e164.replace("+", "")}`, sameAs: false },
  github: { name: "GitHub", url: "https://github.com/dragos1304", sameAs: true },
} as const;

/** Profile URLs for schema.org `sameAs`. */
export const sameAs = Object.values(social).filter((s) => s.sameAs).map((s) => s.url);

/** Measured proof. Only numbers we can show evidence for (Lighthouse reports in public/lucrari/cheesy-media). */
export const proof = {
  cheesy: {
    measuredOn: "2026-11-18",
    lighthouse: [
      { name: { ro: "Performanță", en: "Performance" }, before: 82, after: 100 },
      { name: { ro: "Accesibilitate", en: "Accessibility" }, before: 96, after: 100 },
      { name: { ro: "Bune practici", en: "Best practices" }, before: 100, after: 100 },
      { name: { ro: "SEO", en: "SEO" }, before: 100, after: 100 },
    ],
    sitemapPages: { before: 0, after: 11 },
  },
} as const;

/**
 * Logo and icons (sources in brand/logo, copied to public/). Images are cached for a year under the
 * same URL, so every link carries `?v=`: bump `brandVersion` whenever a logo or icon file changes.
 */
export const brandVersion = "1";
const v = (path: string) => `${path}?v=${brandVersion}`;
const icons: NonNullable<Metadata["icons"]> = {
  icon: [
    { url: v("/favicon.ico"), sizes: "16x16 32x32 48x48" },
    { url: v("/icon.svg"), type: "image/svg+xml" },
    { url: v("/icon-192.png"), sizes: "192x192", type: "image/png" },
  ],
  apple: [{ url: v("/apple-touch-icon.png"), sizes: "180x180" }],
};
export const brand = {
  wordmark: { src: v("/brand/wordmark.svg"), width: 868, height: 179 },
  wordmarkWhite: { src: v("/brand/wordmark-white.svg"), width: 868, height: 179 },
  logo: "/brand/logo-ro.png",
  icons,
  manifest: "/site.webmanifest",
};
