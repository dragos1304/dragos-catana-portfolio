import { articles } from "@/lib/articles";
import { site } from "@/lib/site-config";
import { llmsLinks, type PageKey } from "@/lib/site-map";

export const dynamic = "force-static";

const list = (lang: "ro" | "en", keys: PageKey[]) =>
  llmsLinks(lang, keys).map((l) => `- [${l.name}](${site.url}${l.path})${l.summary ? `: ${l.summary}` : ""}`).join("\n");

const serviceKeys: PageKey[] = ["services", "redesign", "newSite", "seo", "clinics", "lawFirms", "maintenance", "audit"];

export function GET() {
  const body = `# ${site.name}

> ${site.description}

${site.name} (${site.legalName}) este web designer și specialist SEO din ${site.city}, România. Lucrează online cu clinici, cabinete de avocatură și afaceri locale. Limba principală: română. Engleză, franceză și germană ca opțiune suplimentară. Nu publică prețuri fixe: ofertele sunt personalizate. Auditul de vizibilitate AI este gratuit, manual, livrat în maximum ${site.responseTime}.

## Servicii
${list("ro", serviceKeys)}

## Lucrări
${list("ro", ["cheesy"])}: redesign cu scoruri Lighthouse pe mobil: performanță de la 82 la 100 și accesibilitate de la 96 la 100

## Articole
${articles.map((a) => `- [${a.title}](${site.url}/articole/${a.slug}/): ${a.description}`).join("\n")}

## Despre și contact
${list("ro", ["about", "contact"])}
- [Programare discuție](${site.calendly})

## English version
The main pages are also available in English, for English-speaking business owners in Romania:
${list("en", ["home", ...serviceKeys, "cheesy", "about", "contact"])}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
