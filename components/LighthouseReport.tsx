/* eslint-disable @next/next/no-img-element -- static export: explicit srcset instead of next/image */
import { image } from "@/lib/images";

/** A Lighthouse report screenshot ("inainte" = before, "dupa" = after) with its caption. */
export function LighthouseReport({ which, alt, caption }: { which: "inainte" | "dupa"; alt: string; caption: string }) {
  return (
    <figure>
      <img {...image(`lighthouse-${which}`)} alt={alt} sizes="(min-width: 1152px) 560px, (min-width: 768px) 45vw, 92vw"
        loading="lazy" decoding="async" className="h-auto w-full rounded-2xl border-2 border-ink" />
      <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}
