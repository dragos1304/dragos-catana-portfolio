"use client";
import { useState } from "react";

/** Opens the phone's share sheet; where there is none (most desktops), copies the link instead. */
export function ShareButton({ url, title, text, label, className }: { url: string; title: string; text: string; label: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    if (navigator.share) {
      try {
        await navigator.share({ url, title, text });
      } catch {
        /* the visitor closed the share sheet */
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copiază linkul:", url);
    }
  }

  return (
    <button type="button" onClick={share} className={className}>
      <span aria-hidden="true" className="text-xl">{copied ? "✅" : "🔗"}</span>
      <span aria-live="polite">{copied ? "Link copiat" : label}</span>
    </button>
  );
}
