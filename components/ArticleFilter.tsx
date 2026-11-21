"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Item = { slug: string; title: string; description: string; tags: readonly string[]; readMin: number };

/**
 * The /articole list with tag filters. Several tags can be on at once (an article shows when it has any of them).
 * The choice is kept in the address (?eticheta=SEO,Redesign) so a filtered list can be shared; tag links on
 * article pages land here pre-filtered. Without JavaScript every article is listed.
 */
export function ArticleFilter({ items, tags }: { items: Item[]; tags: { tag: string; count: number }[] }) {
  const [on, setOn] = useState<string[]>([]);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("eticheta");
    if (p) setOn(p.split(",").filter((t) => tags.some((x) => x.tag === t)));
  }, [tags]);

  function update(next: string[]) {
    setOn(next);
    const url = new URL(window.location.href);
    if (next.length) url.searchParams.set("eticheta", next.join(","));
    else url.searchParams.delete("eticheta");
    window.history.replaceState(null, "", url);
  }

  const toggle = (t: string) => update(on.includes(t) ? on.filter((x) => x !== t) : [...on, t]);
  const shown = on.length ? items.filter((a) => a.tags.some((t) => on.includes(t))) : items;
  const chip = "inline-flex min-h-10 items-center gap-2 rounded-full border-2 px-4 text-[15px] font-semibold transition-colors";

  return (
    <>
      <div className="mt-10" role="group" aria-label="Filtrează articolele după etichetă">
        <div className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={on.length === 0} onClick={() => update([])}
            className={`${chip} ${on.length === 0 ? "border-ink bg-ink text-paper" : "border-ink/20 bg-white text-ink hover:border-ink"}`}>
            Toate <span className="text-sm opacity-70">{items.length}</span>
          </button>
          {tags.map(({ tag, count }) => {
            const active = on.includes(tag);
            return (
              <button key={tag} type="button" aria-pressed={active} onClick={() => toggle(tag)}
                className={`${chip} ${active ? "border-ink bg-orange text-ink" : "border-ink/20 bg-white text-ink hover:border-ink"}`}>
                {tag} <span className="text-sm opacity-70">{count}</span>
              </button>
            );
          })}
        </div>
        <p className="mt-4 text-sm text-muted" aria-live="polite">
          {on.length ? `${shown.length} ${shown.length === 1 ? "articol" : "articole"} cu ${on.length === 1 ? "eticheta" : "etichetele"} ${on.join(", ")}` : `${items.length} articole`}
        </p>
      </div>
      <ul className="mt-6 grid gap-6 md:grid-cols-2">
        {shown.map((a) => (
          <li key={a.slug}>
            <Link href={`/articole/${a.slug}`} className="flex h-full flex-col rounded-md border border-line bg-white p-6 hover:shadow-lg">
              <span className="flex flex-wrap gap-1.5">
                {a.tags.map((t) => (
                  <span key={t} className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${on.includes(t) ? "bg-orange text-ink" : "bg-paper text-orange-ink"}`}>{t}</span>
                ))}
              </span>
              <h2 className="mt-3 font-serif text-xl font-bold leading-snug">{a.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{a.description}</p>
              <span className="mt-auto pt-4 text-sm text-muted">{a.readMin} min de citit</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
