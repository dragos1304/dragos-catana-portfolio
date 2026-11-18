"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "cookie-consent-v1";
type Choice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

function applyConsent(choice: Choice) {
  window.dataLayer = window.dataLayer || [];
  // Consent Mode v2: push the same shape gtag('consent','update',…) produces.
  (function gtag(..._args: unknown[]) {
    window.dataLayer.push(arguments);
  })("consent", "update", {
    analytics_storage: choice,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try { stored = localStorage.getItem(KEY); } catch {}
    if (!stored) setVisible(true);
    const open = () => setVisible(true);
    window.addEventListener("open-cookie-settings", open);
    return () => window.removeEventListener("open-cookie-settings", open);
  }, []);

  function choose(choice: Choice) {
    try { localStorage.setItem(KEY, choice); } catch {}
    applyConsent(choice);
    setVisible(false);
  }

  if (!visible) return null;
  return (
    <div role="dialog" aria-modal="false" aria-labelledby="cookie-title"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-2xl border border-line bg-white p-5 shadow-2xl sm:inset-x-6 sm:p-6">
      <p id="cookie-title" className="font-serif text-lg font-semibold">Cookie-uri pentru statistici</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-ink">
        Folosesc Google Analytics doar dacă ești de acord, ca să înțeleg ce pagini sunt utile. Nu folosesc cookie-uri de publicitate.
        Poți schimba alegerea oricând din subsol. Detalii în{" "}
        <Link href="/cookie" className="font-medium text-navy underline underline-offset-4">politica de cookie-uri</Link>.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose("granted")}
          className="min-h-11 rounded-full bg-brass px-5 font-semibold text-navy hover:bg-[#f59e0b]">Accept statisticile</button>
        <button type="button" onClick={() => choose("denied")}
          className="min-h-11 rounded-full border border-navy/30 px-5 font-semibold text-navy hover:bg-navy hover:text-white">Refuz</button>
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  return (
    <button type="button" className="inline-block py-1.5 text-left hover:text-white"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}>
      Setări cookie-uri
    </button>
  );
}
