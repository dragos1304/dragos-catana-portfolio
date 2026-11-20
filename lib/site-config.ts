export const site = {
  name: "Dragoș Cătană",
  legalName: "Dragoș-Mihai Cătană",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dragoscatana.com",
  description:
    "Redesign de website, creare de website-uri și SEO cu accent pe vizibilitate în ChatGPT, Gemini și Perplexity. Pentru clinici, cabinete de avocatură și afaceri locale din România.",
  city: "Cluj-Napoca",
  calendly: "https://calendly.com/dragoscatana/consultanta-1-la-1",
  github: "https://github.com/dragos1304",
  linkedin: "https://www.linkedin.com/in/dragos-catana/",
  gtmId: "GTM-K7RPGZSV",
  /** The reply promise, phrased per language. Change it here and every page, email and band follows. */
  reply: { hours: 24, ro: "24 de ore", en: "24 hours" },
} as const;

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
