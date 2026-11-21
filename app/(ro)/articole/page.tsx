import type { Metadata } from "next";
import { seo } from "@/lib/meta";
import { Breadcrumbs, CtaBand, Eyebrow, Section, FAQ } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { articles, usedTags } from "@/lib/articles";
import { ArticleFilter } from "@/components/ArticleFilter";
import { faqsRo } from "@/lib/faqs";

export const metadata: Metadata = seo({
  title: "Articole despre SEO, AI și web design",
  description: "Ghiduri practice despre SEO, optimizare pentru ChatGPT, Gemini și Perplexity, redesign și date structurate, pe înțelesul proprietarilor de afaceri.",
  lang: "ro",
  canonical: "/articole/",
});

export default function Articole() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Acasă", path: "/" }, { name: "Articole", path: "/articole" }])} />
      <Section>
        <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: "Articole" }]} />
        <Eyebrow>Articole</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">Ghiduri practice despre SEO, AI și web design.</h1>
        <ArticleFilter items={articles.map(({ slug, title, description, tags, readMin }) => ({ slug, title, description, tags, readMin }))} tags={usedTags} />
      </Section>
      <Section id="intrebari" tint><FAQ items={faqsRo.articles} /></Section>
      <CtaBand />
    </>
  );
}
