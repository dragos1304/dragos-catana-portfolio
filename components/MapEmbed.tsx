"use client";
import { useState } from "react";
import { MapPin } from "lucide-react";
import type { Lang } from "@/lib/site-map";

/**
 * Google Maps for Cluj-Napoca, loaded only after a click: the embed sets Google cookies, so it stays
 * off until the visitor asks for it (see the cookie policy). City level only, no street address.
 */
const text = {
  ro: { place: "Cluj-Napoca, România", note: "Harta se încarcă de la Google Maps, care poate folosi cookie-uri.", show: "Afișează harta", open: "Deschide în Google Maps", title: "Harta: Cluj-Napoca, România" },
  en: { place: "Cluj-Napoca, Romania", note: "The map loads from Google Maps, which may use cookies.", show: "Show the map", open: "Open in Google Maps", title: "Map: Cluj-Napoca, Romania" },
} as const;

const EMBED = "https://maps.google.com/maps?q=Cluj-Napoca%2C%20Romania&z=12&output=embed";
const LINK = "https://www.google.com/maps/search/?api=1&query=Cluj-Napoca%2C%20Romania";

export function MapEmbed({ lang }: { lang: Lang }) {
  const t = text[lang];
  const [on, setOn] = useState(false);
  return (
    <div className="overflow-hidden rounded-3xl border-2 border-ink bg-canvas">
      {on ? (
        <iframe title={t.title} src={EMBED} className="block h-[320px] w-full sm:h-[380px]" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
      ) : (
        <div className="grid h-[320px] place-items-center bg-[radial-gradient(circle_at_center,var(--color-line)_1px,transparent_1px)] bg-[size:18px_18px] p-6 text-center sm:h-[380px]">
          <div>
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-orange"><MapPin aria-hidden className="h-7 w-7 text-ink" /></span>
            <p className="mt-4 font-serif text-2xl font-extrabold text-ink">{t.place}</p>
            <p className="mx-auto mt-2 max-w-xs text-sm text-muted">{t.note}</p>
            <button type="button" onClick={() => setOn(true)} className="mt-5 inline-flex min-h-11 items-center rounded-full bg-ink px-5 font-semibold text-paper hover:bg-orange hover:text-ink">
              {t.show}
            </button>
          </div>
        </div>
      )}
      <a href={LINK} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center justify-between border-t-2 border-ink px-5 text-[15px] font-semibold text-ink hover:bg-paper">
        {t.open} <span aria-hidden>↗</span>
      </a>
    </div>
  );
}
