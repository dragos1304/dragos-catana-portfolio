"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";

const text = {
  ro: { title: "Cookie-uri pentru statistici", body: "Folosesc Google Analytics doar dacă ești de acord, ca să înțeleg ce pagini sunt utile. Nu folosesc cookie-uri de publicitate. Poți schimba alegerea oricând din subsol. Detalii în", link: "politica de cookie-uri", accept: "Accept statisticile", reject: "Refuz" },
  en: { title: "Cookies for statistics", body: "I use Google Analytics only if you agree, to understand which pages are useful. No advertising cookies. You can change your choice any time from the footer. Details in the", link: "cookie policy (Romanian)", accept: "Accept statistics", reject: "Decline" },
} as const;

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

export function CookieBanner({ lang = "ro" }: { lang?: Lang }) {
  const t = text[lang];
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
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-md border border-line bg-white p-5 shadow-2xl sm:inset-x-6 sm:p-6">
      <p id="cookie-title" className="font-serif text-lg font-bold">{t.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {t.body}{" "}
        <Link href="/cookie" hrefLang="ro" className="font-medium text-ink underline underline-offset-4">{t.link}</Link>.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose("granted")}
          className="min-h-11 rounded-sm bg-ink px-5 font-semibold text-white hover:bg-orange-ink">{t.accept}</button>
        <button type="button" onClick={() => choose("denied")}
          className="min-h-11 rounded-sm border border-ink/40 px-5 font-semibold text-ink hover:bg-ink hover:text-white">{t.reject}</button>
      </div>
    </div>
  );
}

export function CookieSettingsButton({ label = "Setări cookie-uri" }: { label?: string }) {
  return (
    <button type="button" className="inline-block py-1.5 text-left hover:text-white"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}>
      {label}
    </button>
  );
}
