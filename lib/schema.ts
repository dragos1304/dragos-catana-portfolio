import { site } from "./site-config";
import { services } from "./site-map";

export const abs = (path: string) => `${site.url}${path === "/" ? "/" : path.replace(/\/?$/, "/")}`;

export const personSchema = {
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  jobTitle: "Web designer și specialist SEO / optimizare pentru AI",
  address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "RO" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Universitatea Babeș-Bolyai" },
  knowsLanguage: ["ro", "en", "fr", "de"],
  knowsAbout: ["Web design", "Creare site web", "Optimizare SEO", "SEO local", "Generative Engine Optimization (GEO)", "Date structurate (schema.org)", "Next.js"],
  sameAs: [site.github, site.linkedin],
};

export const ogImage = `${site.url}/og.png`;

export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: site.name,
      url: site.url,
      description: site.description,
      image: `${site.url}/og.png`,
      serviceType: ["Creare site web", "Redesign website", "Optimizare SEO", "SEO local", "Optimizare pentru motoare AI (GEO)"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicii",
        itemListElement: services("ro").map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, url: `${site.url}${s.href}` } })),
      },
      areaServed: { "@type": "Country", name: "România" },
      address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "RO" },
      founder: { "@id": `${site.url}/#person` },
      knowsLanguage: ["ro", "en", "fr", "de"],
      sameAs: [site.github, site.linkedin],
    },
    { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, inLanguage: ["ro-RO", "en"], publisher: { "@id": `${site.url}/#person` } },
  ],
};

export const breadcrumb = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});

export const serviceSchema = (name: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: abs(path),
  serviceType: name,
  provider: { "@id": `${site.url}/#service` },
  areaServed: { "@type": "Country", name: "România" },
});

export const faqSchema = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((i) => ({
    "@type": "Question",
    name: i.q,
    acceptedAnswer: { "@type": "Answer", text: i.a },
  })),
});
