import type { Metadata } from "next";
import { Breadcrumbs, Container, Eyebrow, H2, Section } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site-config";
import { alternates } from "@/lib/site-map";

const path = "/audit-gratuit-vizibilitate-ai";
export const metadata: Metadata = {
  title: "Audit SEO gratuit și audit de vizibilitate în AI",
  description:
    "Audit SEO gratuit, făcut manual: vezi cum apari în Google și dacă te recomandă ChatGPT, Gemini și Perplexity. Rezultatul îl primești în 24 de ore.",
  alternates: alternates("audit", "ro"),
};

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: "Acasă", path: "/" }, { name: "Audit gratuit AI", path }]),
        serviceSchema("Audit gratuit de vizibilitate în AI și SEO", "Audit manual al modului în care apari în Google și în răspunsurile asistenților AI.", path)]} />
      <Section>
        <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: "Audit gratuit AI" }]} />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Gratuit · Manual · În 24 de ore</Eyebrow>
            <h1 className="font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">
              Audit SEO gratuit: te recomandă Google și <em className="font-accent font-normal tracking-normal text-orange-ink">ChatGPT</em>?
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-ink">
              Îți arăt cum apare afacerea ta acum în Google și în răspunsurile asistenților AI, și ce poți face dacă nu apari.
            </p>
            <H2 className="mt-10 !text-3xl">Ce primești în auditul gratuit</H2>
            <ul className="mt-4 space-y-3 text-slate-ink leading-relaxed">
              <li>✓ Testul întrebărilor reale ale clienților tăi, în mai multe asistente AI</li>
              <li>✓ Dacă ești menționat, pe ce loc și cum ești descris</li>
              <li>✓ Ce concurenți apar în locul tău</li>
              <li>✓ O listă scurtă de pași, în ordinea impactului</li>
            </ul>
            <p className="mt-6 text-sm text-slate-ink">
              Răspund în maximum {site.responseTime}. Nu trebuie să continui cu mine după audit. Preferi să vorbim direct?{" "}
              <a className="font-semibold text-navy underline underline-offset-4" href={site.calendly} target="_blank" rel="noopener noreferrer">Programează o discuție</a>.
            </p>
          </div>
          <div className="rounded-md border border-line bg-white p-6 shadow-sm sm:p-8">
            <LeadForm kind="audit" />
          </div>
        </div>
      </Section>
    </>
  );
}
