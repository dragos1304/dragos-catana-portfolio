import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { seo } from "@/lib/meta";
import { Breadcrumbs, CtaBand, FAQ, Section, Container } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { abs, breadcrumb, ogImage } from "@/lib/schema";
import { articles, getArticle, type Block } from "@/lib/articles";
import type { ReactNode } from "react";
import { site } from "@/lib/site-config";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  // Keep the full title under ~60 characters: drop the " | Dragoș Catană" suffix when it would overflow.
  const t = a.seoTitle ?? a.title;
  return seo({
    title: t.length > 44 ? { absolute: t } : t,
    description: a.description,
    lang: "ro",
    canonical: `/articole/${a.slug}/`,
    article: { publishedTime: a.date, modifiedTime: a.updated ?? a.date },
  });}

/** Turns `[words](url)` in article text into links: the source sits next to the claim it supports. */
function inline(text: string): ReactNode {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  for (const m of text.matchAll(re)) {
    const [all, label, url] = m;
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(url.startsWith("/")
      ? <Link key={m.index} href={url}>{label}</Link>
      : <a key={m.index} href={url} target="_blank" rel="noopener noreferrer">{label}</a>);
    last = m.index + all.length;
  }
  if (last === 0) return text;
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function render(b: Block, i: number) {
  switch (b.t) {
    case "h2": return <h2 key={i}>{b.text}</h2>;
    case "h3": return <h3 key={i}>{b.text}</h3>;
    case "p": return <p key={i}>{inline(b.text)}</p>;
    case "ul": return <ul key={i}>{b.items.map((x) => <li key={x}>{inline(x)}</li>)}</ul>;
    case "ol": return <ol key={i}>{b.items.map((x) => <li key={x}>{inline(x)}</li>)}</ol>;
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
        { "@context": "https://schema.org", "@type": "Article", headline: a.title, description: a.description, url: abs(path), inLanguage: "ro-RO", image: ogImage,
          datePublished: a.date, dateModified: a.updated ?? a.date, citation: a.sources.map((s) => s.url), author: { "@id": `${site.url}/#person` }, publisher: { "@id": `${site.url}/#service` }, mainEntityOfPage: abs(path), keywords: a.tags.join(", ") },
      ]} />
      <Section>
        <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: "Articole", href: "/articole" }, { name: a.tags[0] }]} />
        <div className="flex flex-wrap items-center gap-2">
          {a.tags.map((t) => (
            <Link key={t} href={`/articole/?eticheta=${encodeURIComponent(t)}`} className="rounded-full border border-ink/20 bg-white px-3 py-1 text-sm font-semibold text-ink hover:border-ink">{t}</Link>
          ))}
          <span className="text-sm text-muted">{a.readMin} min de citit</span>
        </div>
        <h1 className="mt-3 max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">{a.title}</h1>
        <p className="mt-4 text-sm text-muted">
          De <Link href="/despre" className="underline underline-offset-4">{site.name}</Link> · actualizat la{" "}
          <time dateTime={a.updated ?? a.date}>{new Date(a.updated ?? a.date).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time>
        </p>
        <article className="prose prose-lg prose-slate mt-10 max-w-3xl prose-headings:font-serif prose-headings:text-ink prose-a:text-orange-ink prose-th:text-left">
          {a.blocks.map(render)}
          {a.sources.length > 0 && (
            <>
              <h2>Surse</h2>
              <ol className="text-base">
                {a.sources.map((s) => (
                  <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>, {s.publisher}</li>
                ))}
              </ol>
            </>
          )}
        </article>
      </Section>
      <Section tint>
        <Container className="!px-0"><FAQ items={a.faq} /></Container>
        <div className="mt-12">
          <h2 className="font-serif text-2xl font-bold">Citește și</h2>
          <ul className="mt-4 space-y-2">
            {a.related.map((r) => (<li key={r.href}><Link href={r.href} className="font-semibold text-orange-ink underline underline-offset-4">{r.label}</Link></li>))}
          </ul>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
