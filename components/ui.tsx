import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { faqSchema } from "@/lib/schema";
import { site } from "@/lib/site-config";
import { ui } from "@/lib/i18n";
import { href, type Lang } from "@/lib/site-map";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** Bands: paper (default), white, ink (dark) or orange. */
export function Section({
  children, dark = false, tint = false, white = false, orange = false, id, className = "",
}: { children: ReactNode; dark?: boolean; tint?: boolean; white?: boolean; orange?: boolean; id?: string; className?: string }) {
  const bg = dark ? "bg-ink text-paper" : orange ? "bg-orange text-ink" : white ? "bg-canvas" : tint ? "bg-canvas" : "bg-paper";
  return (
    <section id={id} className={`${bg} py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.12em] ${dark ? "text-paper/80" : "text-muted"}`}>
      {children}
    </p>
  );
}

export function H2({ children, dark = false, className = "" }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <h2 className={`font-serif text-[2.1rem] font-extrabold leading-[1.02] sm:text-5xl ${dark ? "text-paper" : "text-ink"} ${className}`}>
      {children}
    </h2>
  );
}

/** Italic serif accent inside a heading. */
export function Accent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`font-accent font-normal italic tracking-normal ${className}`}>{children}</span>;
}

/**
 * Hand-drawn orange mark around (circle) or under (underline) a word.
 * Decorative SVG only; the text stays plain HTML. `draw` animates once (0.6s), see .mark-draw in globals.css.
 */
export function Mark({ children, kind = "circle", draw = false, color = "var(--color-orange)" }: { children: ReactNode; kind?: "circle" | "underline"; draw?: boolean; color?: string }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="relative z-10">{children}</span>
      {kind === "circle" ? (
        <svg aria-hidden className={`pointer-events-none absolute -inset-x-[0.22em] -inset-y-[0.16em] h-[calc(100%+0.32em)] w-[calc(100%+0.44em)] overflow-visible ${draw ? "mark-draw" : ""}`} viewBox="0 0 200 80" preserveAspectRatio="none">
          <path d="M150 9C112 1 40 3 14 22 -6 37 12 66 62 74c48 7 113 1 130-22C207 31 172 10 118 7" fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      ) : (
        <svg aria-hidden className={`pointer-events-none absolute -bottom-[0.18em] left-0 h-[0.32em] w-full overflow-visible ${draw ? "mark-draw" : ""}`} viewBox="0 0 200 20" preserveAspectRatio="none">
          <path d="M3 14C50 5 120 3 197 9" fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );
}

type BtnProps = { href: string; children: ReactNode; variant?: "primary" | "ghost" | "ghost-dark" | "light"; external?: boolean; arrow?: boolean };
export function Button({ href, children, variant = "primary", external, arrow = false }: BtnProps) {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors duration-200";
  const styles = {
    primary: "bg-ink text-paper hover:bg-orange hover:text-ink",
    ghost: "border-2 border-ink text-ink hover:bg-ink hover:text-paper",
    "ghost-dark": "border-2 border-paper/70 text-paper hover:bg-paper hover:text-ink",
    light: "bg-paper text-ink hover:bg-orange",
  }[variant];
  const cls = `${base} ${styles}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  );
  if (external)
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Breadcrumbs({ items, lang = "ro" }: { items: { name: string; href?: string }[]; lang?: Lang }) {
  return (
    <nav aria-label={ui[lang].breadcrumbs} className="mb-6 text-sm text-muted">
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

export function FAQ({ items, title, lang = "ro" }: { items: { q: string; a: string }[]; title?: string; lang?: Lang }) {
  return (
    <>
      <JsonLd data={faqSchema(items)} />
      <H2>{title ?? ui[lang].faqTitle}</H2>
      <div className="mt-8 space-y-3">
        {items.map((it) => (
          <details key={it.q} className="group rounded-2xl border border-line bg-canvas px-6 py-5 open:border-ink">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold text-ink">
              {it.q}
              <span aria-hidden className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orange text-ink transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted">{it.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}

export function CtaBand({ title, text, id = "cta", lang = "ro" }: { title?: string; text?: string; id?: string; lang?: Lang }) {
  const t = ui[lang];
  return (
    <Section orange id={id}>
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-ink/80">{t.ctaEyebrow}</p>
          <h2 className="font-serif text-[2.3rem] font-extrabold leading-[1] text-ink sm:text-6xl">{title ?? t.ctaTitle}</h2>
          <p className="mt-5 max-w-xl text-lg text-ink/85">{text ?? t.ctaText}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Button href={href("audit", lang)} arrow>{t.ctaPrimary}</Button>
          <Button href={site.calendly} variant="ghost" external>{t.ctaSecondary}</Button>
        </div>
      </div>
    </Section>
  );
}
