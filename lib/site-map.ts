/**
 * The site map module: every page, its twin in the other language, and every service.
 * Sitemap, llms.txt, hreflang, the language switch, navigation, schema and the lead form all read from here,
 * so adding a page or a service is one entry, not a hunt through eight files.
 */
export type Lang = "ro" | "en";

type Page = {
  ro: string;
  en?: string; // missing = Romanian-only page
  name: { ro: string; en?: string };
  /** One line used in llms.txt. */
  summary?: { ro: string; en?: string };
};

const PAGES = {
  home: { ro: "/", en: "/en/", name: { ro: "Acasă", en: "Home" } },
  services: { ro: "/servicii/", en: "/en/services/", name: { ro: "Servicii", en: "Services" }, summary: { ro: "prezentare generală", en: "overview" } },
  redesign: { ro: "/servicii/redesign-website/", en: "/en/services/website-redesign/", name: { ro: "Redesign de website", en: "Website redesign" }, summary: { ro: "redesign modern cu migrare sigură, redirecționări 301 și conținut pregătit pentru AI", en: "modern redesign with a safe migration and AI-ready content" } },
  newSite: { ro: "/servicii/creare-website/", en: "/en/services/website-design/", name: { ro: "Creare de website", en: "New website" }, summary: { ro: "website nou în Next.js, Webflow, Shopify sau Medusa", en: "a new website in Next.js, Webflow, Shopify or Medusa" } },
  seo: { ro: "/servicii/seo-vizibilitate-ai/", en: "/en/services/seo-ai-visibility/", name: { ro: "SEO și vizibilitate în AI", en: "SEO and AI visibility" }, summary: { ro: "audit, optimizare GEO/SEO, colaborare lunară", en: "audit, GEO/SEO optimisation, monthly work" } },
  maintenance: { ro: "/servicii/mentenanta-site/", en: "/en/services/website-maintenance/", name: { ro: "Mentenanță site", en: "Website maintenance" }, summary: { ro: "actualizări, backup, verificări lunare (viteză, formulare, Google) și modificări mici de conținut", en: "updates, backups, monthly checks and small content edits" } },
  clinics: { ro: "/servicii/website-clinici-medicale/", en: "/en/services/clinic-websites/", name: { ro: "Website pentru clinici medicale", en: "Websites for clinics" }, summary: { ro: "pagini pe specialități, medici, programare și SEO local", en: "specialty pages, doctors, booking and local SEO" } },
  lawFirms: { ro: "/servicii/website-cabinete-avocatura/", en: "/en/services/law-firm-websites/", name: { ro: "Website pentru cabinete de avocatură", en: "Websites for law firms" }, summary: { ro: "domenii de practică, avocați, articole, contact discret", en: "practice areas, lawyers, articles, discreet contact" } },
  audit: { ro: "/audit-gratuit-vizibilitate-ai/", en: "/en/free-ai-visibility-audit/", name: { ro: "Audit gratuit AI", en: "Free AI audit" } },
  work: { ro: "/lucrari/", en: "/en/work/", name: { ro: "Lucrări", en: "Work" } },
  cheesy: { ro: "/lucrari/cheesy-media/", en: "/en/work/cheesy-media/", name: { ro: "Cheesy Media", en: "Cheesy Media" } },
  about: { ro: "/despre/", en: "/en/about/", name: { ro: "Despre", en: "About" } },
  contact: { ro: "/contact/", en: "/en/contact/", name: { ro: "Contact", en: "Contact" } },
  articles: { ro: "/articole/", name: { ro: "Articole" } },
  privacy: { ro: "/confidentialitate/", name: { ro: "Politica de confidențialitate" } },
  cookies: { ro: "/cookie/", name: { ro: "Politica de cookie-uri" } },
  terms: { ro: "/termeni/", name: { ro: "Termeni și condiții" } },
} as const satisfies Record<string, Page>;

export type PageKey = keyof typeof PAGES;
const page = (k: PageKey): Page => PAGES[k];

/** The page's path in a language; Romanian-only pages fall back to their Romanian path. */
export function href(key: PageKey, lang: Lang = "ro"): string {
  const p = page(key);
  return lang === "en" && p.en ? p.en : p.ro;
}

/** The page's name in a language (Romanian-only pages keep their Romanian name). */
export function pageName(key: PageKey, lang: Lang = "ro"): string {
  const p = page(key);
  return (lang === "en" && p.name.en) || p.name.ro;
}

export const hasTwin = (key: PageKey) => Boolean(page(key).en);

/** Next metadata `alternates`: canonical, plus reciprocal hreflang (ro, en, x-default = ro) when the page has a twin. */
export function alternates(key: PageKey, lang: Lang) {
  const p = page(key);
  const canonical = href(key, lang);
  if (!p.en) return { canonical };
  return { canonical, languages: { ro: p.ro, en: p.en, "x-default": p.ro } };
}

const withSlash = (path: string) => (path.endsWith("/") ? path : `${path}/`);

/** The same page in the other language, or that language's home when there is no twin. Used by the language switch. */
export function twinOf(path: string, from: Lang): string {
  const p = withSlash(path);
  const key = (Object.keys(PAGES) as PageKey[]).find((k) => href(k, from) === p && (from === "ro" || page(k).en));
  const to: Lang = from === "ro" ? "en" : "ro";
  if (!key || !hasTwin(key)) return href("home", to);
  return href(key, to);
}

/** Main navigation, in order. English has no Articles (they are Romanian-only). */
export function nav(lang: Lang) {
  const keys: PageKey[] = lang === "ro" ? ["services", "work", "articles", "about", "contact"] : ["services", "work", "about", "contact"];
  return keys.map((k) => ({ href: href(k, lang), label: pageName(k, lang) }));
}

/** Every page in the sitemap (articles are added by app/sitemap.ts); twins carry reciprocal alternates. */
export function sitemapEntries() {
  const entries: { path: string; languages?: Record<string, string> }[] = [];
  for (const k of Object.keys(PAGES) as PageKey[]) {
    const p = page(k);
    const languages = p.en ? { ro: p.ro, en: p.en, "x-default": p.ro } : undefined;
    entries.push({ path: p.ro, languages });
    if (p.en) entries.push({ path: p.en, languages });
  }
  return entries;
}

/* ---------- Services ---------- */

type ServiceCopy = { title: string; short: string; points: readonly string[] };
const SERVICES: readonly { key: PageKey; flagship?: boolean; ro: ServiceCopy; en: ServiceCopy; formLabel: { ro: string; en: string } }[] = [
  {
    key: "redesign",
    ro: { title: "Redesign de website", short: "Site-ul tău arată ca în 2015? Îl reconstruiesc modern, rapid și fără să pierzi pozițiile din Google.", points: ["Design nou și coerent", "Migrare sigură, cu redirecționări 301", "Conținut structurat, ca AI-ul să te poată cita"] },
    en: { title: "Website redesign", short: "Does your site look and feel like 2015? I rebuild it modern and fast, without losing your Google rankings.", points: ["A new, consistent design", "Safe migration with 301 redirects", "Content structured so AI can cite you"] },
    formLabel: { ro: "Redesign de website", en: "Website redesign" },
  },
  {
    key: "newSite",
    ro: { title: "Creare de website", short: "Un website rapid și clar, construit ca să fie găsit din prima zi, în cod propriu, Webflow sau Shopify.", points: ["Next.js, Webflow, Shopify sau Medusa", "SEO și date structurate incluse", "Formulare, programări, analiză"] },
    en: { title: "New website", short: "A fast, clear website built to be found from day one, in custom code, Webflow or Shopify.", points: ["Next.js, Webflow, Shopify or Medusa", "SEO and structured data included", "Forms, bookings, analytics"] },
    formLabel: { ro: "Website nou", en: "New website" },
  },
  {
    key: "seo",
    flagship: true,
    ro: { title: "SEO și vizibilitate în AI", short: "Apari în Google și în răspunsurile ChatGPT, Gemini și Perplexity. Audit gratuit, apoi implementare sau colaborare lunară.", points: ["Audit gratuit în 24 de ore", "Optimizare pentru motoare AI (GEO)", "Raport lunar în limbaj simplu"] },
    en: { title: "SEO and AI visibility", short: "Show up on Google and in ChatGPT, Gemini and Perplexity answers. Free audit, then implementation or monthly work.", points: ["Free audit within 24 hours", "Optimisation for AI engines (GEO)", "Monthly report in plain words"] },
    formLabel: { ro: "SEO și vizibilitate în AI (colaborare lunară)", en: "SEO and AI visibility (monthly)" },
  },
  {
    key: "maintenance",
    ro: { title: "Mentenanță site", short: "Site-ul rămâne rapid, sigur și la zi după lansare: actualizări, backup, verificări lunare și modificări mici, fără să-ți bați capul.", points: ["Actualizări și backup", "Verificare lunară: viteză, formulare, Google", "Modificări mici de conținut"] },
    en: { title: "Website maintenance", short: "Your site stays fast, safe and up to date after launch: updates, backups, monthly checks and small edits, without the hassle.", points: ["Updates and backups", "Monthly check: speed, forms, Google", "Small content changes"] },
    formLabel: { ro: "Mentenanță site", en: "Website maintenance" },
  },
];

/** The four services in display order, in one language, with their links. */
export function services(lang: Lang) {
  return SERVICES.map((s) => ({ key: s.key, href: href(s.key, lang), flagship: Boolean(s.flagship), ...s[lang] }));
}

/** Options for the lead form's "what do you need" field: the value is stable, the label is localised. */
export function serviceOptions(lang: Lang) {
  return [...SERVICES.map((s) => ({ value: s.key, label: s.formLabel[lang] })), { value: "other", label: lang === "ro" ? "Altceva" : "Something else" }];
}

/** llms.txt links for a language, built from the same entries. */
export function llmsLinks(lang: Lang, keys: PageKey[]) {
  return keys
    .filter((k) => lang === "ro" || hasTwin(k))
    .map((k) => {
      const s = page(k).summary;
      const summary = s ? (lang === "en" ? s.en : s.ro) : undefined;
      return { key: k, path: href(k, lang), name: pageName(k, lang), summary };
    });
}
