import type { ReactNode } from "react";
import { Breadcrumbs, Section } from "./ui";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Section>
      <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: title }]} />
      <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
      <p className="mt-3 text-sm text-slate-ink">Ultima actualizare: 18 noiembrie 2026</p>
      <div className="prose prose-lg prose-slate mt-8 max-w-3xl prose-headings:font-serif prose-headings:text-navy prose-a:text-brass-dark">
        {children}
      </div>
    </Section>
  );
}
