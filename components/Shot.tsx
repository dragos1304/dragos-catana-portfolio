/* eslint-disable @next/next/no-img-element -- static export: explicit srcset instead of next/image */
import { image, type ImageName } from "@/lib/images";

/** A real project screenshot in a light browser frame or a phone frame. Sizes come from the image manifest. */
export function Shot({
  name, alt, phone = false, sizes, eager = false, className = "", frame = true,
}: { name: ImageName; alt: string; phone?: boolean; sizes: string; eager?: boolean; className?: string; frame?: boolean }) {
  const img = <img {...image(name, { phone })} sizes={sizes} alt={alt} loading={eager ? undefined : "lazy"} decoding="async" className="block h-auto w-full" />;
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
