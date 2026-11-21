"use client";
import { useEffect, useState } from "react";

type Platform = "ios" | "android" | "other";

const hints: Record<Platform, string> = {
  ios: "Se deschide fișa de contact. Apasă „Creează contact nou”.",
  android: "Se descarcă fișierul. Deschide-l și alege „Contacte”.",
  other: "Descarcă fișa de contact (.vcf) și deschide-o pe telefon.",
};

/**
 * The business card's main action, pinned to the bottom of the screen while scrolling.
 * After the tap it shows the next step for the visitor's phone, so nobody is left wondering what happened.
 */
export function SaveContactBar({ href }: { href: string }) {
  const [platform, setPlatform] = useState<Platform>("other");
  const [tapped, setTapped] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) setPlatform("ios");
    else if (/Android/.test(ua)) setPlatform("android");
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 z-20 border-t border-ink/10 bg-paper/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_rgba(19,19,19,0.08)] backdrop-blur">
      <div className="mx-auto max-w-md">
        <a
          href={href}
          onClick={() => setTapped(true)}
          className="flex min-h-14 items-center justify-center gap-3 rounded-xl border-2 border-ink bg-orange px-5 text-lg font-bold text-ink shadow-[4px_4px_0_#131313] transition-transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#131313]"
        >
          <span aria-hidden="true" className="text-2xl">📲</span> Salvează contactul în telefon
        </a>
        <p className="mt-2 text-center text-[13px] leading-snug text-muted" aria-live="polite">
          {tapped ? <>✅ {hints[platform]}</> : "Numele, telefonul și e-mailul meu ajung direct în agenda ta."}
        </p>
      </div>
    </div>
  );
}
