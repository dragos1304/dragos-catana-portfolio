import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, Eyebrow, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articole: SEO, vizibilitate în AI și web design",
  description: "Ghiduri practice despre SEO, optimizare pentru ChatGPT, Gemini și Perplexity, redesign și date structurate, pe înțelesul proprietarilor de afaceri.",
  alternates: { canonical: "/articole/" },
};

export default function Articole() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Acasă", path: "/" }, { name: "Articole", path: "/articole" }])} />
      <Section>
        <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: "Articole" }]} />
        <Eyebrow>Articole</Eyebrow>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">Ghiduri practice despre SEO, AI și web design.</h1>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {articles.map((a) => (
            <li key={a.slug}>
              <Link href={`/articole/${a.slug}`} className="block h-full rounded-md border border-line p-6 hover:shadow-lg">
                <p className="text-sm font-semibold uppercase tracking-wider text-brass-dark">{a.category} · {a.readMin} min</p>
                <h2 className="mt-2 font-serif text-xl font-semibold leading-snug">{a.title}</h2>
                <p className="mt-3 leading-relaxed text-slate-ink">{a.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </>
  );
}
