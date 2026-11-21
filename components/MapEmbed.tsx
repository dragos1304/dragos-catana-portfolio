"use client";
import { useState } from "react";
import { MapPin } from "lucide-react";
import type { Lang } from "@/lib/site-map";
import { place } from "@/lib/site-config";

/**
 * The Google Business Profile on Google Maps, loaded only after a click: the embed sets Google cookies,
 * so it stays off until the visitor asks for it (see the cookie policy). Source: `place` in lib/site-config.ts.
 */
const text = {
  ro: { place: "Dragoș Catană", addr: place.addressLine.ro, note: "Harta se încarcă de la Google Maps, care poate folosi cookie-uri.", show: "Afișează harta", open: "Deschide în Google Maps", title: "Harta: Dragoș Catană pe Google Maps" },
  en: { place: "Dragoș Catană", addr: place.addressLine.en, note: "The map loads from Google Maps, which may use cookies.", show: "Show the map", open: "Open in Google Maps", title: "Map: Dragoș Catană on Google Maps" },
} as const;


export function MapEmbed({ lang }: { lang: Lang }) {
  const t = text[lang];
  const [on, setOn] = useState(false);
  return (
    <div className="overflow-hidden rounded-3xl border-2 border-ink bg-canvas">
      {on ? (
        <iframe title={t.title} src={place.embed} className="block h-[320px] w-full sm:h-[380px]" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
      ) : (
        <div className="grid h-[320px] place-items-center bg-[radial-gradient(circle_at_center,var(--color-line)_1px,transparent_1px)] bg-[size:18px_18px] p-6 text-center sm:h-[380px]">
          <div>
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-orange"><MapPin aria-hidden className="h-7 w-7 text-ink" /></span>
            <p className="mt-4 font-serif text-2xl font-extrabold text-ink">{t.place}</p>
            <p className="mt-1 text-[15px] text-ink">{t.addr}</p>
            <p className="mx-auto mt-2 max-w-xs text-sm text-muted">{t.note}</p>
            <button type="button" onClick={() => setOn(true)} className="mt-5 inline-flex min-h-11 items-center rounded-full bg-ink px-5 font-semibold text-paper hover:bg-orange hover:text-ink">
              {t.show}
            </button>
          </div>
        </div>
      )}
      <a href={place.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center justify-between border-t-2 border-ink px-5 text-[15px] font-semibold text-ink hover:bg-paper">
        {t.open} <span aria-hidden>↗</span>
      </a>
    </div>
  );
}
