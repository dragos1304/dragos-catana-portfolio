import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, Button, CtaBand, Eyebrow, H2, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Servicii: redesign, creare website și SEO pentru AI",
  description:
    "Redesign de website, creare de website-uri și SEO cu accent pe vizibilitate în ChatGPT, Gemini și Perplexity. Cere o ofertă sau un audit gratuit.",
  alternates: { canonical: "/servicii/" },
};

export default function Servicii() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Acasă", path: "/" }, { name: "Servicii", path: "/servicii" }])} />
      <Section id="servicii">
        <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: "Servicii" }]} />
        <Eyebrow>Servicii</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-medium leading-[1.05] sm:text-6xl">
          Un website modern, găsit în Google și recomandat de AI.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">
          Fiecare redesign și fiecare website nou pe care îl livrez este „pregătit pentru AI” din start: conținut clar,
          date structurate și o bază tehnică curată. Prețurile depind de proiect, așa că primești o ofertă după o discuție scurtă.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/servicii/${s.slug}`}
              className={`rounded-md border p-7 hover:shadow-lg ${"flagship" in s ? "border-brass-dark" : "border-line"}`}>
              <h2 className="font-serif text-2xl font-semibold">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-slate-ink">{s.short}</p>
              <span className="mt-5 inline-block font-semibold text-brass-dark">Detalii →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="ce-ai-nevoie" tint>
        <H2>Ce ai nevoie?</H2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <caption className="sr-only">Ghid pentru alegerea serviciului</caption>
            <thead>
              <tr className="border-b border-navy/20 text-sm uppercase tracking-wider text-slate-ink">
                <th scope="col" className="py-3 pr-4">Situația ta</th>
                <th scope="col" className="py-3">Serviciul potrivit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              <tr><th scope="row" className="py-4 pr-4 font-medium">Am un site, dar e vechi sau lent</th><td><Link className="font-semibold text-brass-dark underline underline-offset-4" href="/servicii/redesign-website">Redesign de website</Link></td></tr>
              <tr><th scope="row" className="py-4 pr-4 font-medium">Nu am site sau am doar o pagină de social media</th><td><Link className="font-semibold text-brass-dark underline underline-offset-4" href="/servicii/creare-website">Creare de website</Link></td></tr>
              <tr><th scope="row" className="py-4 pr-4 font-medium">Am site, dar nu mă găsește nimeni, nici AI-ul</th><td><Link className="font-semibold text-brass-dark underline underline-offset-4" href="/servicii/seo-vizibilitate-ai">SEO și vizibilitate în AI</Link></td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="mt-12 font-serif text-2xl font-semibold">Pentru domeniul tău</h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          <li className="rounded-md border border-line bg-white p-6"><Link className="font-semibold text-brass-dark underline underline-offset-4" href="/servicii/website-clinici-medicale">Website pentru clinici și cabinete medicale</Link><p className="mt-2 text-slate-ink">Pagini pe specialități, medici, programare și SEO local.</p></li>
          <li className="rounded-md border border-line bg-white p-6"><Link className="font-semibold text-brass-dark underline underline-offset-4" href="/servicii/website-cabinete-avocatura">Website pentru cabinete de avocatură</Link><p className="mt-2 text-slate-ink">Domenii de practică, avocați, articole și contact discret.</p></li>
        </ul>
        <h3 className="mt-12 font-serif text-2xl font-semibold">Pachete combinate</h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          <li className="rounded-md border border-line bg-white p-6"><strong>Redesign + pregătit pentru AI.</strong> Site nou, migrare sigură, conținut și date structurate gândite pentru motoare AI.</li>
          <li className="rounded-md border border-line bg-white p-6"><strong>Website nou + pregătit pentru AI.</strong> De la zero, cu SEO, schema și analiză încă din prima zi.</li>
        </ul>
        <h3 className="mt-12 font-serif text-2xl font-semibold">Alte limbi</h3>
        <p className="mt-3 max-w-2xl text-slate-ink leading-relaxed">
          Site-urile pot fi livrate și în engleză, franceză sau germană, ca opțiune suplimentară, cu aceeași atenție pentru SEO în fiecare limbă.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact">Cere o ofertă</Button>
          <Button href="/audit-gratuit-vizibilitate-ai" variant="ghost">Audit gratuit AI</Button>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
