import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "./JsonLd";
import { faqSchema } from "@/lib/schema";
import { site } from "@/lib/site-config";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children, dark = false, tint = false, id, className = "",
}: { children: ReactNode; dark?: boolean; tint?: boolean; id?: string; className?: string }) {
  const bg = dark ? "bg-navy text-white" : tint ? "bg-mist" : "bg-canvas";
  return (
    <section id={id} className={`${bg} py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.14em] ${dark ? "text-[#e0a46b]" : "text-brass-dark"}`}>
      {children}
    </p>
  );
}

export function H2({ children, dark = false, className = "" }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <h2 className={`font-serif text-4xl font-medium leading-[1.1] sm:text-5xl ${dark ? "text-white" : "text-navy"} ${className}`}>
      {children}
    </h2>
  );
}

type BtnProps = { href: string; children: ReactNode; variant?: "primary" | "ghost" | "ghost-dark"; external?: boolean };
export function Button({ href, children, variant = "primary", external }: BtnProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-colors";
  const styles = {
    primary: "bg-navy text-white hover:bg-brass-dark",
    ghost: "border border-navy/40 text-navy hover:border-navy hover:bg-navy hover:text-white",
    "ghost-dark": "border border-white/50 text-white hover:bg-white hover:text-navy",
  }[variant];
  const cls = `${base} ${styles}`;
  if (external)
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Navigare" className="mb-6 text-sm text-slate-ink">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {it.href ? <Link href={it.href} className="inline-flex min-h-6 items-center underline-offset-4 hover:underline">{it.name}</Link> : <span aria-current="page">{it.name}</span>}
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FAQ({ items, title = "Întrebări frecvente" }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <>
      <JsonLd data={faqSchema(items)} />
      <H2>{title}</H2>
      <div className="mt-8 divide-y divide-line border-y border-line">
        {items.map((it) => (
          <details key={it.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold">
              {it.q}
              <span aria-hidden className="mt-1 text-brass-dark transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 max-w-3xl text-slate-ink leading-relaxed">{it.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}

export function CtaBand({
  title = "Vrei să știi dacă AI-ul îți recomandă afacerea?",
  text = `Primești un audit manual gratuit, în maximum 24 de ore. Fără obligații.`,
  id = "cta",
}: { title?: string; text?: string; id?: string }) {
  return (
    <Section tint id={id} className="border-t border-line">
      <div className="max-w-3xl">
        <Eyebrow>Primul pas</Eyebrow>
        <H2>{title}</H2>
        <p className="mt-4 text-lg text-slate-ink">{text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/audit-gratuit-vizibilitate-ai">Cere auditul gratuit</Button>
          <Button href={site.calendly} variant="ghost" external>Programează o discuție</Button>
        </div>
      </div>
    </Section>
  );
}
