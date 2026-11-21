import { brand, phone, place, sameAs, site } from "./site-config";
import { services } from "./site-map";

export const abs = (path: string) => `${site.url}${path === "/" ? "/" : path.replace(/\/?$/, "/")}`;

export const personSchema = {
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  jobTitle: "Web designer și specialist SEO / optimizare pentru AI",
  address: { "@type": "PostalAddress", streetAddress: place.address.street, postalCode: place.address.postalCode, addressLocality: place.address.city, addressRegion: place.address.region, addressCountry: place.address.country },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Universitatea Babeș-Bolyai" },
  knowsLanguage: ["ro", "en", "fr", "de"],
  knowsAbout: ["Web design", "Creare site web", "Optimizare SEO", "SEO local", "Generative Engine Optimization (GEO)", "Date structurate (schema.org)", "Next.js"],
  sameAs,
  telephone: phone.e164,
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
      image: `${site.url}${brand.og.ro}`,
      logo: `${site.url}${brand.logo}`,
      slogan: brand.tagline.ro,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicii",
        itemListElement: services("ro").map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, url: `${site.url}${s.href}` } })),
      },
      areaServed: { "@type": "Country", name: "România" },
      address: { "@type": "PostalAddress", streetAddress: place.address.street, postalCode: place.address.postalCode, addressLocality: place.address.city, addressRegion: place.address.region, addressCountry: place.address.country },
      geo: { "@type": "GeoCoordinates", ...place.geo },
      hasMap: place.mapsUrl,
      founder: { "@id": `${site.url}/#person` },
      knowsLanguage: ["ro", "en", "fr", "de"],
      sameAs,
  telephone: phone.e164,
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
