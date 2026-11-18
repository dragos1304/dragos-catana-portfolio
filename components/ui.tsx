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
    <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.14em] ${dark ? "text-brass" : "text-brass-dark"}`}>
      {children}
    </p>
  );
}

export function H2({ children, dark = false, className = "" }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <h2 className={`font-serif text-3xl font-semibold leading-tight sm:text-4xl ${dark ? "text-white" : "text-navy"} ${className}`}>
      {children}
    </h2>
  );
}

type BtnProps = { href: string; children: ReactNode; variant?: "primary" | "ghost" | "ghost-dark"; external?: boolean };
export function Button({ href, children, variant = "primary", external }: BtnProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-colors";
  const styles = {
    primary: "bg-brass text-navy hover:bg-[#f59e0b]",
    ghost: "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-white",
    "ghost-dark": "border border-white/40 text-white hover:bg-white hover:text-navy",
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
            {it.href ? <Link href={it.href} className="underline-offset-4 hover:underline">{it.name}</Link> : <span aria-current="page">{it.name}</span>}
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
}: { title?: string; text?: string }) {
  return (
    <Section dark>
      <div className="max-w-3xl">
        <H2 dark>{title}</H2>
        <p className="mt-4 text-lg text-white/80">{text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/audit-gratuit-vizibilitate-ai">Cere auditul gratuit</Button>
          <Button href={site.calendly} variant="ghost-dark" external>Programează o discuție</Button>
        </div>
      </div>
    </Section>
  );
}
