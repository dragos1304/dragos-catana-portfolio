import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/articles";
import { Eyebrow, H2 } from "./ui";

/** Hub-and-spoke internal links: a service page lists the guides of its topic cluster. */
export function Guides({ slugs, title = "Ghiduri utile" }: { slugs: string[]; title?: string }) {
  const items = slugs.map((s) => articles.find((a) => a.slug === s)).filter((a): a is (typeof articles)[number] => Boolean(a));
  if (!items.length) return null;
  return (
    <>
      <Eyebrow>Din articole</Eyebrow>
      <H2>{title}</H2>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((a) => (
          <li key={a.slug}>
            <Link href={`/articole/${a.slug}`} className="group flex h-full flex-col rounded-3xl border-2 border-ink bg-canvas p-6 transition-shadow duration-200 hover:shadow-[6px_6px_0_0_var(--color-ink)]">
              <span className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">{a.category} · {a.readMin} min</span>
              <span className="mt-2 font-serif text-xl font-extrabold leading-snug text-ink">{a.title}</span>
              <span className="mt-2 text-[16px] leading-relaxed text-muted">{a.description}</span>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 font-semibold text-ink underline decoration-orange decoration-2 underline-offset-4">
                Citește ghidul <ArrowUpRight aria-hidden className="h-4 w-4" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
