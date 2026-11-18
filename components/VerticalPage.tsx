import Link from "next/link";
import { Breadcrumbs, Button, CtaBand, Eyebrow, FAQ, H2, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, serviceSchema } from "@/lib/schema";

export type VerticalProps = {
  path: string;
  crumb: string;
  eyebrow: string;
  h1: string;
  lead: string;
  schemaName: string;
  schemaDescription: string;
  needs: { t: string; d: string }[];
  structure: { t: string; d: string }[];
  schemaTypes: string;
  caution: { title: string; text: string };
  faq: { q: string; a: string }[];
  ctaTitle: string;
};

export function VerticalPage(p: VerticalProps) {
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: "Acasă", path: "/" }, { name: "Servicii", path: "/servicii" }, { name: p.crumb, path: p.path }]),
        serviceSchema(p.schemaName, p.schemaDescription, p.path)]} />
      <Section>
        <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: "Servicii", href: "/servicii" }, { name: p.crumb }]} />
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">{p.h1}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">{p.lead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/audit-gratuit-vizibilitate-ai">Audit gratuit AI</Button>
          <Button href="/contact" variant="ghost">Cere o ofertă</Button>
        </div>
      </Section>

      <Section tint>
        <H2>Ce caută clienții tăi înainte să te contacteze</H2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {p.needs.map((n) => (
            <div key={n.t} className="rounded-2xl border border-line bg-white p-6"><h3 className="font-serif text-xl font-semibold">{n.t}</h3><p className="mt-2 leading-relaxed text-slate-ink">{n.d}</p></div>
          ))}
        </div>
      </Section>

      <Section>
        <H2>Cum structurez site-ul</H2>
        <ol className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {p.structure.map((n, i) => (
            <li key={n.t} className="flex gap-4">
              <span className="font-serif text-3xl font-semibold text-brass-dark" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
              <div><h3 className="text-lg font-semibold">{n.t}</h3><p className="mt-1 leading-relaxed text-slate-ink">{n.d}</p></div>
            </li>
          ))}
        </ol>
      </Section>

      <Section tint>
        <H2>Vizibilitate în Google și în AI</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-ink">
          Fiecare pagină are date structurate potrivite ({p.schemaTypes}), titluri formulate ca întrebări reale și răspunsuri scurte, ușor de citat. Informațiile de contact și identitatea rămân identice pe site, în profilul Google al afacerii și în directoare, ca asistenții AI să te poată verifica. Detalii în{" "}
          <Link className="font-semibold text-brass-dark underline underline-offset-4" href="/servicii/seo-vizibilitate-ai">serviciul de SEO și vizibilitate în AI</Link>.
        </p>
      </Section>

      <Section>
        <div className="max-w-3xl rounded-2xl border border-brass bg-white p-7 ring-1 ring-brass">
          <h2 className="font-serif text-2xl font-semibold">{p.caution.title}</h2>
          <p className="mt-3 leading-relaxed text-slate-ink">{p.caution.text}</p>
        </div>
      </Section>

      <Section tint><FAQ items={p.faq} /></Section>
      <CtaBand title={p.ctaTitle} />
    </>
  );
}
