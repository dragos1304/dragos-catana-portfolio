export const site = {
  name: "Dragoș Cătană",
  legalName: "Dragoș-Mihai Cătană",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dragoscatana.com",
  tagline: "Web design și optimizare pentru căutare AI",
  description:
    "Redesign de website, creare de website-uri și SEO cu accent pe vizibilitate în ChatGPT, Gemini și Perplexity. Pentru clinici, cabinete de avocatură și afaceri locale din România.",
  city: "Cluj-Napoca",
  calendly: "https://calendly.com/dragoscatana/consultanta-1-la-1",
  github: "https://github.com/dragos1304",
  linkedin: "https://www.linkedin.com/in/dragos-catana/",
  gtmId: "GTM-K7RPGZSV",
  responseTime: "24 de ore",
} as const;

export const nav = [
  { href: "/servicii", label: "Servicii" },
  { href: "/lucrari", label: "Lucrări" },
  { href: "/articole", label: "Articole" },
  { href: "/despre", label: "Despre" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "redesign-website",
    title: "Redesign de website",
    short: "Site-ul tău arată și se simte ca în 2015? Îl reconstruiesc modern, rapid și fără să pierzi pozițiile din Google.",
    points: ["Design nou și coerent", "Migrare sigură, cu redirecturi 301", "Conținut structurat ca AI-ul să te citeze"],
  },
  {
    slug: "creare-website",
    title: "Creare de website",
    short: "Un website rapid și clar, construit să fie găsit din prima zi, în cod propriu, Webflow sau Shopify.",
    points: ["Next.js, Webflow, Shopify sau Medusa", "SEO și date structurate incluse", "Formulare, programări, analiză"],
  },
  {
    slug: "seo-vizibilitate-ai",
    title: "SEO și vizibilitate în AI",
    short: "Apari în Google și în răspunsurile ChatGPT, Gemini și Perplexity. Audit gratuit, apoi implementare sau colaborare lunară.",
    points: ["Audit gratuit în 24 de ore", "Optimizare pentru motoare AI (GEO)", "Raport lunar în limbaj simplu"],
    flagship: true,
  },
  {
    slug: "mentenanta-site",
    title: "Mentenanță site",
    short: "Site-ul rămâne rapid, sigur și la zi după lansare: actualizări, backup, verificări lunare și modificări mici, fără să-ți bați capul.",
    points: ["Actualizări și backup", "Verificare lunară: viteză, formulare, Google", "Modificări mici de conținut"],
  },
] as const;
