import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, Eyebrow, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { Shot } from "@/components/Shot";
import { alternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Portofoliu web design și studii de caz",
  description: "Proiecte de redesign și creare de website-uri, cu rezultate măsurate. Începe cu Cheesy Media, o agenție foto-video din Cluj-Napoca.",
  alternates: alternates("/lucrari/", "ro"),
};

export default function Lucrari() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Acasă", path: "/" }, { name: "Lucrări", path: "/lucrari" }])} />
      <Section>
        <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: "Lucrări" }]} />
        <Eyebrow>Lucrări</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">Proiecte, cu rezultate pe care le poți verifica.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">
          Public doar ce e real și măsurabil. Pe măsură ce apar proiecte noi, le adaug aici.
        </p>
        <div className="mt-10">
          <Link href="/lucrari/cheesy-media" className="group grid overflow-hidden rounded-3xl border-2 border-ink bg-canvas transition-shadow duration-200 hover:shadow-[8px_8px_0_0_var(--color-ink)] lg:grid-cols-[1.3fr_1fr]">
            <div className="relative bg-ink p-5 pb-8 pr-10 sm:p-8 sm:pb-10 sm:pr-16">
              <Shot name="site-desktop" alt="Noul site Cheesy Media pe desktop" sizes="(min-width: 1024px) 560px, 92vw" eager />
              <Shot name="site-mobile" phone alt="Noul site Cheesy Media pe telefon" sizes="140px" className="absolute bottom-3 right-3 w-[24%] max-w-[140px]" />
            </div>
            <div className="flex flex-col p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-wider text-brass-dark">Redesign · Cluj-Napoca</p>
              <h2 className="mt-2 font-serif text-3xl font-extrabold">Cheesy Media</h2>
              <p className="mt-3 text-[17px] leading-relaxed text-slate-ink">
                Agenție foto-video și social media. De la o pagină lungă la un site complet: design nou, o pagină pentru fiecare serviciu și bază tehnică pentru Google și AI.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
                {["Performanță 82 → 100", "11 pagini", "Date structurate", "Pregătit pentru AI"].map((t) => <li key={t} className="rounded-full bg-paper px-3 py-1">{t}</li>)}
              </ul>
              <span className="mt-auto inline-block pt-6 font-semibold text-ink underline decoration-orange decoration-2 underline-offset-4">Vezi studiul de caz →</span>
            </div>
          </Link>
        </div>
      </Section>
      <CtaBand title="Vrei să fii următorul proiect?" text="Începe cu un audit gratuit al site-ului tău, livrat în maximum 24 de ore." />
    </>
  );
}
