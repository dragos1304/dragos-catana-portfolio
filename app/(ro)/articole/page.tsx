import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, Eyebrow, Section, FAQ } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { articles } from "@/lib/articles";
import { faqsRo } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Blog: SEO, AI și web design pentru afaceri locale",
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
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">Ghiduri practice despre SEO, AI și web design.</h1>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {articles.map((a) => (
            <li key={a.slug}>
              <Link href={`/articole/${a.slug}`} className="block h-full rounded-md border border-line p-6 hover:shadow-lg">
                <p className="text-sm font-semibold uppercase tracking-wider text-orange-ink">{a.category} · {a.readMin} min</p>
                <h2 className="mt-2 font-serif text-xl font-bold leading-snug">{a.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{a.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section id="intrebari" tint><FAQ items={faqsRo.articles} /></Section>
      <CtaBand />
    </>
  );
}
