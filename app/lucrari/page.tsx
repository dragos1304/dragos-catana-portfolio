import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, Eyebrow, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Lucrări și studii de caz",
  description: "Proiecte de redesign și creare de website-uri, cu rezultate măsurate. Începe cu Cheesy Media, o agenție foto-video din Cluj-Napoca.",
  alternates: { canonical: "/lucrari/" },
};

export default function Lucrari() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Acasă", path: "/" }, { name: "Lucrări", path: "/lucrari" }])} />
      <Section>
        <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: "Lucrări" }]} />
        <Eyebrow>Lucrări</Eyebrow>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">Proiecte, cu rezultate pe care le poți verifica.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">
          Public doar ce e real și măsurabil. Pe măsură ce apar proiecte noi, le adaug aici.
        </p>
        <div className="mt-10">
          <Link href="/lucrari/cheesy-media" className="block max-w-2xl rounded-md border border-line p-7 hover:shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-wider text-brass-dark">Redesign · Cluj-Napoca</p>
            <h2 className="mt-2 font-serif text-2xl font-semibold">Cheesy Media</h2>
            <p className="mt-3 leading-relaxed text-slate-ink">
              Agenție foto-video și social media. De la o pagină lungă la un site complet, cu performanță de 100 în Lighthouse pe mobil.
            </p>
            <span className="mt-4 inline-block font-semibold text-brass-dark">Vezi studiul de caz →</span>
          </Link>
        </div>
      </Section>
      <CtaBand title="Vrei să fii următorul proiect?" text="Începe cu un audit gratuit al site-ului tău, livrat în maximum 24 de ore." />
    </>
  );
}
