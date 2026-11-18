import type { Metadata } from "next";
import { Breadcrumbs, Button, CtaBand, Eyebrow, FAQ, H2, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, serviceSchema } from "@/lib/schema";

const path = "/servicii/creare-website";
export const metadata: Metadata = {
  title: "Creare website pentru clinici, avocați și afaceri locale",
  description:
    "Website nou, rapid și clar, construit să fie găsit în Google și recomandat de AI: Next.js, Webflow, Shopify sau Medusa. Cere o ofertă.",
  alternates: { canonical: path },
};

const platforms = [
  ["Next.js (cod propriu)", "Clinici, cabinete de avocatură, servicii locale, orice site unde contează viteza, SEO-ul și pregătirea pentru AI.", "Control complet asupra codului, vitezei și datelor structurate. Cel mai flexibil."],
  ["Webflow", "Clienți care vor să-și editeze singuri site-ul, vizual.", "CMS vizual, rezultat curat, fără întreținere de cod. Verific costurile de găzduire și limitele pentru limba română înainte de ofertă."],
  ["Shopify", "Magazine online standard care vor să pornească repede.", "Checkout, plăți și aplicații mature. Stabilim din start particularitățile din România: plăți, facturare, curierat."],
  ["Medusa (comerț headless)", "Magazine personalizate sau B2B, cu logică aparte.", "Open-source și complet personalizabil, cu vitrină în Next.js. Cere mai multă inginerie, deci e pentru nevoi mai speciale."],
];

const faq = [
  { q: "Ce platformă să aleg?", a: "Pentru clinici, cabinete și servicii locale recomand de regulă un site în Next.js, pentru viteză și control. Dacă vrei să editezi singur vizual, Webflow. Pentru un magazin standard, Shopify. Alegem împreună, după nevoile tale." },
  { q: "Site-ul va fi găsit în Google?", a: "Îl construiesc cu bazele SEO făcute corect: structură, titluri, viteză, date structurate și sitemap. Pozițiile depind apoi de concurență și de timp, iar pentru ele există colaborarea lunară de SEO." },
  { q: "Cine deține site-ul?", a: "Tu. Domeniul, conținutul și contul de găzduire sunt pe numele tău. Stabilim clar asta în ofertă." },
  { q: "Se poate în engleză, franceză sau germană?", a: "Da, ca opțiune suplimentară. Fiecare limbă primește conținut și SEO propriu, nu doar traducere automată." },
  { q: "Cât costă?", a: "Depinde de număr de pagini, funcționalități și platformă. Nu afișez prețuri fixe: primești o ofertă clară după o discuție scurtă." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: "Acasă", path: "/" }, { name: "Servicii", path: "/servicii" }, { name: "Creare de website", path }]),
        serviceSchema("Creare de website", "Website nou, rapid și pregătit pentru Google și motoare AI, în Next.js, Webflow, Shopify sau Medusa.", path)]} />
      <Section>
        <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: "Servicii", href: "/servicii" }, { name: "Creare de website" }]} />
        <Eyebrow>Creare de website</Eyebrow>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          Un website rapid și clar, construit să fie găsit din prima zi.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">
          Pentru practici noi, clinici, cabinete de avocatură, servicii locale și magazine online. Fără șabloane generice.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact">Cere o ofertă</Button>
          <Button href="/audit-gratuit-vizibilitate-ai" variant="ghost">Audit gratuit AI</Button>
        </div>
      </Section>

      <Section tint>
        <H2>Ce include</H2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {["Strategie și structura paginilor", "Design și construire", "Responsive pe orice ecran", "Bazele SEO și date structurate (schema)", "Analiză (Google Tag Manager / GA4) cu consimțământ cookie", "Formulare de contact, programări, integrări", "Predare și instruire", "Opțional: versiuni în engleză, franceză, germană"].map((t) => (
            <li key={t} className="flex gap-3 rounded-xl border border-line bg-white p-4"><span aria-hidden className="text-brass-dark">✓</span>{t}</li>
          ))}
        </ul>
      </Section>

      <Section>
        <H2>Platforme: ce aleg și când</H2>
        <p className="mt-4 max-w-3xl text-slate-ink leading-relaxed">Aleg platforma după afacerea ta, nu după ce îmi place mie.</p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left align-top">
            <caption className="sr-only">Platforme disponibile și când se potrivesc</caption>
            <thead><tr className="border-b border-navy/20 text-sm uppercase tracking-wider text-slate-ink">
              <th scope="col" className="py-3 pr-4">Platformă</th><th scope="col" className="py-3 pr-4">Potrivită pentru</th><th scope="col" className="py-3">De ce</th></tr></thead>
            <tbody className="divide-y divide-line">
              {platforms.map(([a, b, c]) => (
                <tr key={a}><th scope="row" className="py-4 pr-4 font-semibold">{a}</th><td className="py-4 pr-4 text-slate-ink">{b}</td><td className="py-4 text-slate-ink">{c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-3xl text-slate-ink leading-relaxed">
          Dacă ai un magazin online, stabilim din start ce ține de piața din România: procesatorul de plăți, programul de facturare, curierii, consimțământul pentru cookie-uri și paginile de informare cerute consumatorilor. Verific fiecare punct cu tine, nu presupun.
        </p>
      </Section>

      <Section tint><FAQ items={faq} /></Section>
      <CtaBand title="Pornești un site nou?" text="Primești gratuit un audit al prezenței tale online actuale și o direcție clară, în maximum 24 de ore." />
    </>
  );
}
