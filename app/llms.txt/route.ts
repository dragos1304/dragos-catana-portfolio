import { articles } from "@/lib/articles";
import { site } from "@/lib/site-config";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> ${site.description}

${site.name} (${site.legalName}) este web designer și specialist SEO din ${site.city}, România. Lucrează online cu clinici, cabinete de avocatură și afaceri locale. Limba principală: română. Engleză, franceză și germană ca opțiune suplimentară. Nu publică prețuri fixe: ofertele sunt personalizate. Auditul de vizibilitate AI este gratuit, manual, livrat în maximum 24 de ore.

## Servicii
- [Servicii (prezentare generală)](${site.url}/servicii)
- [Redesign de website](${site.url}/servicii/redesign-website): redesign modern cu migrare sigură, redirecturi 301 și conținut pregătit pentru AI
- [Creare de website](${site.url}/servicii/creare-website): website nou în Next.js, Webflow, Shopify sau Medusa
- [SEO și vizibilitate în AI](${site.url}/servicii/seo-vizibilitate-ai): audit, optimizare GEO/SEO, colaborare lunară
- [Audit gratuit de vizibilitate AI](${site.url}/audit-gratuit-vizibilitate-ai)

## Lucrări
- [Studiu de caz Cheesy Media](${site.url}/lucrari/cheesy-media): redesign cu scoruri Lighthouse mobil de la 82 la 100 (performanță)

## Articole
${articles.map((a) => `- [${a.title}](${site.url}/articole/${a.slug}): ${a.description}`).join("\n")}

## Despre și contact
- [Despre ${site.name}](${site.url}/despre)
- [Contact](${site.url}/contact)
- [Programare discuție](${site.calendly})
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
