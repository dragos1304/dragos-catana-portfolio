import type { ReactNode } from "react";
import { Breadcrumbs, FAQ, Section } from "./ui";
import type { Faq } from "@/lib/faqs";

export function LegalPage({ title, children, faq }: { title: string; children: ReactNode; faq?: Faq[] }) {
  return (
    <>
    <Section>
      <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: title }]} />
      <h1 className="font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">{title}</h1>
      <p className="mt-3 text-sm text-muted">Ultima actualizare: 18 noiembrie 2026</p>
      <div className="prose prose-lg prose-slate mt-8 max-w-3xl prose-headings:font-serif prose-headings:text-ink prose-a:text-orange-ink">
        {children}
      </div>
    </Section>
    {faq && <Section id="intrebari" tint><FAQ items={faq} /></Section>}
    </>
  );
}
