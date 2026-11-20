import type { Metadata } from "next";
import { Breadcrumbs, Button, CtaBand, Eyebrow, FAQ, H2, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, serviceSchema } from "@/lib/schema";
import { alternates } from "@/lib/i18n";

const path = "/en/services/website-design";
export const metadata: Metadata = {
  title: "Website design for clinics and local businesses in Romania",
  description:
    "A fast new website for clinics, law firms and local businesses in Romania: brochure site or online shop, with SEO built in. See what shapes the price.",
  alternates: alternates(`${path}/`, "en"),
};

const platforms = [
  ["Next.js (custom code)", "Clinics, law firms, local services: any site where speed, SEO and AI-readiness matter.", "Full control over code, speed and structured data. The most flexible option."],
  ["Webflow", "Clients who want to edit the site themselves, visually.", "A visual CMS, a clean result, no code to maintain. I check hosting costs and Romanian-language limits before the offer."],
  ["Shopify", "Standard online shops that want to start quickly.", "Mature checkout, payments and apps. We settle the Romanian specifics from the start: payments, invoicing, couriers."],
  ["Medusa (headless commerce)", "Custom or B2B shops with their own logic.", "Open-source and fully customisable, with a Next.js storefront. It needs more engineering, so it's for special needs."],
];

const faq = [
  { q: "Which platform should I choose?", a: "For clinics, law firms and local services I usually recommend a Next.js site, for speed and control. If you want to edit visually yourself, Webflow. For a standard shop, Shopify. We choose together, based on what you need." },
  { q: "Will the site be found on Google?", a: "I build it with the SEO basics done right: structure, titles, speed, structured data and a sitemap. Rankings then depend on competition and time, which is what monthly SEO is for." },
  { q: "Who owns the website?", a: "You do. The domain, the content and the hosting account are in your name. We state that clearly in the offer." },
  { q: "Can it be in English, French or German?", a: "Yes, as an add-on. Each language gets its own content and SEO, not just an automatic translation." },
  { q: "How much does a website cost?", a: "It depends on the number of pages, the features (booking, forms, a shop) and the platform. I don't publish fixed prices: after a short call you get a clear offer with everything it includes." },
  { q: "How long does a brochure site take?", a: "It depends on how many pages it has and how quickly we have the copy and images. You get a stage-by-stage timeline in the offer, and you see progress at every stage." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: "Home", path: "/en/" }, { name: "Services", path: "/en/services" }, { name: "New website", path }]),
        serviceSchema("Website design", "A new brochure site or online shop, fast and ready for Google and AI engines, in Next.js, Webflow, Shopify or Medusa.", path)]} />
      <Section id="new-website">
        <Breadcrumbs lang="en" items={[{ name: "Home", href: "/en/" }, { name: "Services", href: "/en/services" }, { name: "New website" }]} />
        <Eyebrow>New website</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">
          A new website: fast, clear and built to be <em className="font-accent font-normal tracking-normal text-orange-ink">found</em> from day one.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">
          A brochure site or an online shop for clinics, law firms and local businesses in Romania. No generic templates: I build it myself, from structure to SEO.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/en/contact">Get a quote</Button>
          <Button href="/en/free-ai-visibility-audit" variant="ghost">Free AI audit</Button>
        </div>
      </Section>

      <Section id="included" tint>
        <H2>What&apos;s included</H2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {["Strategy and page structure", "Design and build", "Responsive on every screen", "SEO basics and structured data (schema)", "Analytics (Google Tag Manager / GA4) with cookie consent", "Contact forms, booking, integrations", "Handover and training", "Optional: versions in English, French, German"].map((t) => (
            <li key={t} className="flex gap-3 rounded-md border border-line bg-white p-4"><span aria-hidden className="text-brass-dark">✓</span>{t}</li>
          ))}
        </ul>
      </Section>

      <Section id="platforms">
        <H2>Platforms: what I choose and when</H2>
        <p className="mt-4 max-w-3xl text-slate-ink leading-relaxed">I choose the platform for your business, not for my taste.</p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left align-top">
            <caption className="sr-only">Available platforms and when they fit</caption>
            <thead><tr className="border-b border-navy/20 text-sm uppercase tracking-wider text-slate-ink">
              <th scope="col" className="py-3 pr-4">Platform</th><th scope="col" className="py-3 pr-4">Good for</th><th scope="col" className="py-3">Why</th></tr></thead>
            <tbody className="divide-y divide-line">
              {platforms.map(([a, b, c]) => (
                <tr key={a}><th scope="row" className="py-4 pr-4 font-semibold">{a}</th><td className="py-4 pr-4 text-slate-ink">{b}</td><td className="py-4 text-slate-ink">{c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="cost" tint>
        <H2>How much does a website cost? What shapes the price</H2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-ink">
          <p>I don&apos;t publish a fixed price, because a five-page brochure site and an online shop with payments and invoicing are different projects. The price depends on three things: the number of pages and how much copy we write together, the features (online booking, forms, several languages) and the platform.</p>
          <p>You get a clear offer after a 30-minute call. If you already have a site and only want to modernise it, see <a href="/en/services/website-redesign/" className="font-semibold text-brass-dark underline-offset-4 hover:underline">website redesign</a>. To know where you stand first, start with the <a href="/en/free-ai-visibility-audit/" className="font-semibold text-brass-dark underline-offset-4 hover:underline">free audit</a>. And to see a real project, read the <a href="/en/work/cheesy-media/" className="font-semibold text-brass-dark underline-offset-4 hover:underline">Cheesy Media case study</a>.</p>
        </div>
      </Section>

      <Section id="faq"><FAQ items={faq} lang="en" /></Section>
      <CtaBand lang="en" title="Starting a new website?" text="Get a free audit of your current online presence and a clear direction, within 24 hours." />
    </>
  );
}
