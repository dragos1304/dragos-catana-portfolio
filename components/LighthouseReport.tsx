/* eslint-disable @next/next/no-img-element -- static export: explicit srcset instead of next/image */

/** A Lighthouse report screenshot ("inainte" = before, "dupa" = after) with its caption. */
const reports = {
  inainte: { height: 980 },
  dupa: { height: 953 },
} as const;

export function LighthouseReport({ which, alt, caption }: { which: keyof typeof reports; alt: string; caption: string }) {
  const base = `/lucrari/cheesy-media/lighthouse-${which}`;
  return (
    <figure>
      <img src={`${base}-960.webp`} srcSet={`${base}-640.webp 640w, ${base}-960.webp 960w, ${base}.webp 1600w`} width={1600} height={reports[which].height}
        alt={alt} sizes="(min-width: 1152px) 560px, (min-width: 768px) 45vw, 92vw" loading="lazy" decoding="async" className="h-auto w-full rounded-2xl border-2 border-ink" />
      <figcaption className="mt-2 text-sm text-slate-ink">{caption}</figcaption>
    </figure>
  );
}
