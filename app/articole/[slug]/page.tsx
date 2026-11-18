import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, FAQ, Section, Container } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { abs, breadcrumb } from "@/lib/schema";
import { articles, getArticle, type Block } from "@/lib/articles";
import { site } from "@/lib/site-config";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/articole/${a.slug}/` },
    openGraph: { type: "article", title: a.title, description: a.description, publishedTime: a.date, authors: [site.legalName] },
  };
}

function render(b: Block, i: number) {
  switch (b.t) {
    case "h2": return <h2 key={i}>{b.text}</h2>;
    case "h3": return <h3 key={i}>{b.text}</h3>;
    case "p": return <p key={i}>{b.text}</p>;
    case "ul": return <ul key={i}>{b.items.map((x) => <li key={x}>{x}</li>)}</ul>;
    case "ol": return <ol key={i}>{b.items.map((x) => <li key={x}>{x}</li>)}</ol>;
    case "code": return <pre key={i} className="overflow-x-auto"><code>{b.text}</code></pre>;
    case "table":
      return (
        <div key={i} className="overflow-x-auto">
          <table>
            <thead><tr>{b.head.map((h, j) => <th key={j} scope="col">{h}</th>)}</tr></thead>
            <tbody>{b.rows.map((r, j) => <tr key={j}>{r.map((c, k) => <td key={k}>{c}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const path = `/articole/${a.slug}`;
  return (
    <>
      <JsonLd data={[
        breadcrumb([{ name: "Acasă", path: "/" }, { name: "Articole", path: "/articole" }, { name: a.title, path }]),
        { "@context": "https://schema.org", "@type": "Article", headline: a.title, description: a.description, url: abs(path), inLanguage: "ro-RO",
          datePublished: a.date, dateModified: a.date, author: { "@id": `${site.url}/#person` }, publisher: { "@id": `${site.url}/#service` }, mainEntityOfPage: abs(path) },
      ]} />
      <Section>
        <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: "Articole", href: "/articole" }, { name: a.category }]} />
        <p className="text-sm font-semibold uppercase tracking-wider text-brass-dark">{a.category} · {a.readMin} min de citit</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">{a.title}</h1>
        <p className="mt-4 text-sm text-slate-ink">
          De <Link href="/despre" className="underline underline-offset-4">{site.name}</Link> · actualizat la{" "}
          <time dateTime={a.date}>{new Date(a.date).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}</time>
        </p>
        <article className="prose prose-lg prose-slate mt-10 max-w-3xl prose-headings:font-serif prose-headings:text-navy prose-a:text-brass-dark prose-th:text-left">
          {a.blocks.map(render)}
        </article>
      </Section>
      <Section tint>
        <Container className="!px-0"><FAQ items={a.faq} /></Container>
        <div className="mt-12">
          <h2 className="font-serif text-2xl font-semibold">Citește și</h2>
          <ul className="mt-4 space-y-2">
            {a.related.map((r) => (<li key={r.href}><Link href={r.href} className="font-semibold text-brass-dark underline underline-offset-4">{r.label}</Link></li>))}
          </ul>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
