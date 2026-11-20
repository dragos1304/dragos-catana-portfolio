/* eslint-disable @next/next/no-img-element -- static export: explicit srcset instead of next/image */

const base = "/lucrari/cheesy-media";
/** Phone shots are 390 wide; the client-supplied home shot is a little shorter than our own captures. */
const phoneHeight: Record<string, number> = { "site-mobile": 706 };

/** A real project screenshot in a light browser frame. Desktop shots come in 640/960/1440, phone shots in 390/780. */
export function Shot({
  name, alt, phone = false, sizes, eager = false, className = "", frame = true,
}: { name: string; alt: string; phone?: boolean; sizes: string; eager?: boolean; className?: string; frame?: boolean }) {
  const img = phone ? (
    <img src={`${base}/${name}-390.webp`} srcSet={`${base}/${name}-390.webp 390w, ${base}/${name}-780.webp 780w`}
      sizes={sizes} width={390} height={phoneHeight[name] ?? 778} alt={alt} loading={eager ? undefined : "lazy"} decoding="async" className="block h-auto w-full" />
  ) : (
    <img src={`${base}/${name}-960.webp`} srcSet={`${base}/${name}-640.webp 640w, ${base}/${name}-960.webp 960w, ${base}/${name}-1440.webp 1440w`}
      sizes={sizes} width={1440} height={900} alt={alt} loading={eager ? undefined : "lazy"} decoding="async" className="block h-auto w-full" />
  );
  if (!frame) return <div className={className}>{img}</div>;
  if (phone) return <div className={`overflow-hidden rounded-[1.6rem] border-[5px] border-ink bg-ink shadow-xl ${className}`}>{img}</div>;
  return (
    <div className={`overflow-hidden rounded-2xl border-2 border-ink bg-canvas shadow-[6px_6px_0_0_var(--color-ink)] ${className}`}>
      <div aria-hidden className="flex items-center gap-1.5 border-b-2 border-ink bg-paper px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-orange" /><span className="h-2.5 w-2.5 rounded-full bg-ink/25" /><span className="h-2.5 w-2.5 rounded-full bg-ink/25" />
      </div>
      {img}
    </div>
  );
}
