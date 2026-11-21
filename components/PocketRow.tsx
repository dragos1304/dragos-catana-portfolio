import Link from "next/link";

export type PocketItem = {
  emoji: string;
  label: string;
  note?: string;
  href: string;
  /** Opens in a new tab (another site). */
  external?: boolean;
  /** The one action to take first: orange, with a badge. */
  primary?: boolean;
  badge?: string;
};

/**
 * One big, obvious action on the pocket pages (links page, business card): an emoji tile that says what it is
 * at a glance, a verb-first label, one line of detail, and an arrow that says whether it leaves the site.
 */
export function PocketRow({ item }: { item: PocketItem }) {
  const cls = `group flex min-h-[4.5rem] w-full items-center gap-4 rounded-2xl border-2 border-ink p-3 pr-4 text-left transition-transform active:translate-y-0.5 ${
    item.primary ? "bg-orange shadow-[4px_4px_0_#131313]" : "bg-white hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#131313]"
  }`;
  const body = (
    <>
      <span aria-hidden="true" className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${item.primary ? "bg-paper" : "bg-paper"}`}>
        {item.emoji}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-[16px] font-bold leading-snug text-ink">{item.label}</span>
          {item.badge && <span className="rounded-full bg-ink px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-paper">{item.badge}</span>}
        </span>
        {item.note && <span className={`mt-0.5 block text-sm leading-snug ${item.primary ? "text-ink/80" : "text-muted"}`}>{item.note}</span>}
      </span>
      <span aria-hidden="true" className="text-xl text-ink transition-transform group-hover:translate-x-0.5">{item.external ? "↗" : "→"}</span>
      {item.external && <span className="sr-only">(se deschide într-o filă nouă)</span>}
    </>
  );
  if (item.external) return <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>{body}</a>;
  if (!item.href.startsWith("/") || item.href.endsWith(".vcf")) return <a href={item.href} className={cls}>{body}</a>;
  return <Link href={item.href} className={cls}>{body}</Link>;
}

/** A short section heading with an emoji, so the page reads as a few clear choices. */
export function PocketHeading({ emoji, children }: { emoji: string; children: React.ReactNode }) {
  return (
    <h2 className="mt-9 mb-3 flex items-center gap-2 text-[15px] font-bold uppercase tracking-wider text-ink">
      <span aria-hidden="true">{emoji}</span> {children}
    </h2>
  );
}
