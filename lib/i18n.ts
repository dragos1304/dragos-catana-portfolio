/** Romanian is the main language; English lives under /en/. Only pages with a twin get hreflang. */
export type Lang = "ro" | "en";

/** Romanian path → English path. Paths end with a slash (trailingSlash: true). */
export const pairs: Record<string, string> = {
  "/": "/en/",
  "/servicii/": "/en/services/",
  "/servicii/redesign-website/": "/en/services/website-redesign/",
  "/servicii/creare-website/": "/en/services/website-design/",
  "/servicii/seo-vizibilitate-ai/": "/en/services/seo-ai-visibility/",
  "/servicii/mentenanta-site/": "/en/services/website-maintenance/",
  "/servicii/website-clinici-medicale/": "/en/services/clinic-websites/",
  "/servicii/website-cabinete-avocatura/": "/en/services/law-firm-websites/",
  "/lucrari/": "/en/work/",
  "/lucrari/cheesy-media/": "/en/work/cheesy-media/",
  "/despre/": "/en/about/",
  "/contact/": "/en/contact/",
  "/audit-gratuit-vizibilitate-ai/": "/en/free-ai-visibility-audit/",
};
const reverse = Object.fromEntries(Object.entries(pairs).map(([ro, en]) => [en, ro]));

const slash = (p: string) => (p.endsWith("/") ? p : `${p}/`);

/** The same page in the other language, or that language's home page when there is no twin. */
export function otherLangPath(path: string, from: Lang): string {
  const p = slash(path);
  return from === "ro" ? pairs[p] ?? "/en/" : reverse[p] ?? "/";
}

/** Next metadata `alternates` for a page: canonical plus reciprocal hreflang (ro, en, x-default = ro). */
export function alternates(path: string, lang: Lang) {
  const p = slash(path);
  const ro = lang === "ro" ? p : reverse[p];
  const en = lang === "en" ? p : pairs[p];
  if (!ro || !en) return { canonical: p };
  return { canonical: p, languages: { ro, en, "x-default": ro } };
}

/** Strings used by shared components (header, footer, form, banner, bands). */
export const ui = {
  ro: {
    home: "/",
    homeLabel: "Acasă",
    skip: "Sari la conținut",
    nav: [
      { href: "/servicii", label: "Servicii" },
      { href: "/lucrari", label: "Lucrări" },
      { href: "/articole", label: "Articole" },
      { href: "/despre", label: "Despre" },
      { href: "/contact", label: "Contact" },
    ],
    navLabel: "Principal",
    navMobileLabel: "Principal mobil",
    menu: "Meniu",
    auditHref: "/audit-gratuit-vizibilitate-ai",
    auditCta: "Audit gratuit AI",
    switchLabel: "English",
    switchShort: "EN",
    footerLine1: "Hai să te facem",
    footerLine2: "ușor de găsit.",
    footerAbout: "Web design și optimizare pentru căutare AI. Pentru clinici, cabinete de avocatură și afaceri locale din România.",
    footerWhere: "Cluj-Napoca, România · răspuns în 24 de ore",
    footerLabel: "Subsol site",
    footerNav: "Subsol",
    pages: "Pagini",
    legal: "Legal și contact",
    privacy: "Politica de confidențialitate",
    cookiesPolicy: "Politica de cookie-uri",
    terms: "Termeni și condiții",
    cookieSettings: "Setări cookie-uri",
    breadcrumbs: "Navigare",
    faqTitle: "Întrebări frecvente",
    ctaEyebrow: "Primul pas",
    ctaTitle: "Vrei să știi dacă AI-ul îți recomandă afacerea?",
    ctaText: "Primești un audit manual gratuit, în maximum 24 de ore. Fără obligații.",
    ctaPrimary: "Cere auditul gratuit",
    ctaSecondary: "Programează o discuție",
  },
  en: {
    home: "/en/",
    homeLabel: "Home",
    skip: "Skip to content",
    nav: [
      { href: "/en/services", label: "Services" },
      { href: "/en/work", label: "Work" },
      { href: "/en/about", label: "About" },
      { href: "/en/contact", label: "Contact" },
    ],
    navLabel: "Main",
    navMobileLabel: "Main mobile",
    menu: "Menu",
    auditHref: "/en/free-ai-visibility-audit",
    auditCta: "Free AI audit",
    switchLabel: "Română",
    switchShort: "RO",
    footerLine1: "Let's make you",
    footerLine2: "easy to find.",
    footerAbout: "Web design and AI search optimisation for clinics, law firms and local businesses in Romania.",
    footerWhere: "Cluj-Napoca, Romania · reply within 24 hours",
    footerLabel: "Site footer",
    footerNav: "Footer",
    pages: "Pages",
    legal: "Legal and contact",
    privacy: "Privacy policy (Romanian)",
    cookiesPolicy: "Cookie policy (Romanian)",
    terms: "Terms and conditions (Romanian)",
    cookieSettings: "Cookie settings",
    breadcrumbs: "Breadcrumb",
    faqTitle: "Frequently asked questions",
    ctaEyebrow: "First step",
    ctaTitle: "Want to know if AI recommends your business?",
    ctaText: "Get a free manual audit within 24 hours. No obligation.",
    ctaPrimary: "Get the free audit",
    ctaSecondary: "Book a call",
  },
} as const;
