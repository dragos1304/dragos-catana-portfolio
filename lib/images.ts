import manifest from "./image-manifest.json";

/** An image from the generated manifest (scripts/image-manifest.mjs): srcset, fallback src and real proportions. */
export type ImageName = keyof typeof manifest;

export function image(name: ImageName, opts: { phone?: boolean } = {}) {
  const variants = manifest[name].variants;
  const largest = variants[variants.length - 1];
  const smallest = variants[0];
  // Phones fall back to the smallest file; everything else to the one closest to 960px.
  const fallback = opts.phone ? smallest : variants.reduce((a, b) => (Math.abs(b.w - 960) < Math.abs(a.w - 960) ? b : a));
  const size = opts.phone ? smallest : largest;
  return {
    src: fallback.src,
    srcSet: variants.map((v) => `${v.src} ${v.w}w`).join(", "),
    width: size.w,
    height: size.h,
  };
}
