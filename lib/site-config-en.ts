/** English service list, same order as `services` in site-config.ts (slugs follow lib/i18n.ts pairs). */
export const servicesEn = [
  {
    slug: "website-redesign",
    title: "Website redesign",
    short: "Does your site look and feel like 2015? I rebuild it modern and fast, without losing your Google rankings.",
    points: ["A new, consistent design", "Safe migration with 301 redirects", "Content structured so AI can cite you"],
    flagship: false,
  },
  {
    slug: "website-design",
    title: "New website",
    short: "A fast, clear website built to be found from day one, in custom code, Webflow or Shopify.",
    points: ["Next.js, Webflow, Shopify or Medusa", "SEO and structured data included", "Forms, bookings, analytics"],
    flagship: false,
  },
  {
    slug: "seo-ai-visibility",
    title: "SEO and AI visibility",
    short: "Show up on Google and in ChatGPT, Gemini and Perplexity answers. Free audit, then implementation or monthly work.",
    points: ["Free audit within 24 hours", "Optimisation for AI engines (GEO)", "Monthly report in plain words"],
    flagship: true,
  },
  {
    slug: "website-maintenance",
    title: "Website maintenance",
    short: "Your site stays fast, safe and up to date after launch: updates, backups, monthly checks and small edits, without the hassle.",
    points: ["Updates and backups", "Monthly check: speed, forms, Google", "Small content changes"],
    flagship: false,
  },
] as const;
