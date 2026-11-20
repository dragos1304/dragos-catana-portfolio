"use client";
import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { serviceOptions, type Lang } from "@/lib/site-map";
import { leadForm, type LeadKind } from "@/lib/lead-form";
import { site } from "@/lib/site-config";

const inputCls =
  "mt-1.5 block w-full rounded-md border border-ink/25 bg-white px-4 py-3 text-base text-ink placeholder:text-muted/60 focus:border-ink";

const text = {
  ro: {
    thanks: "Mulțumesc, am primit mesajul.",
    auditDone: `Îți trimit auditul pe email în maximum ${site.reply.ro}.`,
    contactDone: `Îți răspund în maximum ${site.reply.ro}.`,
    orTalk: "Dacă preferi să vorbim direct, poți și",
    book: "programa o discuție",
    honeypot: "Nu completa:",
    name: "Nume",
    email: "Email",
    website: "Adresa website-ului",
    ifAny: "(dacă ai unul)",
    business: "Tipul afacerii",
    businessPh: "ex. clinică stomatologică",
    city: "Orașul",
    competitors: "2–3 concurenți (opțional)",
    competitorsPh: "Adresele site-urilor sau numele lor",
    need: "De ce ai nevoie?",
    choose: "Alege o opțiune",
    message: "Spune-mi pe scurt despre proiect",
    consentA: "Sunt de acord ca datele mele să fie folosite pentru a-mi răspunde, conform",
    consentLink: "politicii de confidențialitate",
    sending: "Se trimite…",
    sendAudit: "Trimite cererea de audit",
    sendContact: "Trimite mesajul",
    error: "Nu s-a trimis mesajul. Încearcă din nou sau programează direct o discuție pe Calendly.",
  },
  en: {
    thanks: "Thank you, I've got your message.",
    auditDone: `I'll email you the audit within ${site.reply.en}.`,
    contactDone: `I'll reply within ${site.reply.en}.`,
    orTalk: "If you'd rather talk directly, you can also",
    book: "book a call",
    honeypot: "Leave empty:",
    name: "Name",
    email: "Email",
    website: "Website address",
    ifAny: "(if you have one)",
    business: "Type of business",
    businessPh: "e.g. dental clinic",
    city: "City",
    competitors: "2–3 competitors (optional)",
    competitorsPh: "Their websites or names",
    need: "What do you need?",
    choose: "Choose an option",
    message: "Tell me briefly about the project",
    consentA: "I agree that my data is used to reply to me, as described in the",
    consentLink: "privacy policy (Romanian)",
    sending: "Sending…",
    sendAudit: "Send the audit request",
    sendContact: "Send the message",
    error: "The message wasn't sent. Try again or book a call directly on Calendly.",
  },
} as const;

export function LeadForm({ kind, lang = "ro" }: { kind: LeadKind; lang?: Lang }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const isAudit = kind === "audit";
  const openedAt = useRef(Date.now());
  const t = text[lang];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = new FormData(e.currentTarget);
    data.set(leadForm.meta.openedAt, String(openedAt.current)); // milliseconds, see lib/lead-form.ts
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      const json = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || !json?.ok) throw new Error(String(res.status));
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "generate_lead", form_name: kind, form_lang: lang });
      setState("done");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div role="status" className="rounded-md border border-line bg-paper p-6">
        <p className="font-serif text-xl font-bold">{t.thanks}</p>
        <p className="mt-2 text-muted">
          {isAudit ? t.auditDone : t.contactDone}{" "}
          {t.orTalk}{" "}
          <a className="font-medium underline underline-offset-4" href={site.calendly} target="_blank" rel="noopener noreferrer">{t.book}</a>.
        </p>
      </div>
    );
  }

  return (
    <form name={kind} method="POST" onSubmit={onSubmit} className="space-y-5">
      <input type="hidden" name={leadForm.meta.kind} value={kind} />
      <input type="hidden" name={leadForm.meta.lang} value={lang} />
      <p className="hidden"><label>{t.honeypot} <input name={leadForm.meta.honeypot} tabIndex={-1} autoComplete="off" /></label></p>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">{t.name}
          <input className={inputCls} name="name" type="text" autoComplete="name" required />
        </label>
        <label className="block text-sm font-medium">{t.email}
          <input className={inputCls} name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label className="block text-sm font-medium">{t.website} {isAudit ? "" : t.ifAny}
        <input className={inputCls} name="website" type="url" inputMode="url" placeholder="https://" required={isAudit} />
      </label>
      {isAudit ? (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">{t.business}
              <input className={inputCls} name="business" type="text" placeholder={t.businessPh} required />
            </label>
            <label className="block text-sm font-medium">{t.city}
              <input className={inputCls} name="city" type="text" required />
            </label>
          </div>
          <label className="block text-sm font-medium">{t.competitors}
            <textarea className={inputCls} name="competitors" rows={3} placeholder={t.competitorsPh} />
          </label>
        </>
      ) : (
        <>
          <label className="block text-sm font-medium">{t.need}
            <select className={inputCls} name="need" defaultValue="" required>
              <option value="" disabled>{t.choose}</option>
              {serviceOptions(lang).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </label>
          <label className="block text-sm font-medium">{t.message}
            <textarea className={inputCls} name="message" rows={5} required />
          </label>
        </>
      )}
      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
        <input type="checkbox" name={leadForm.meta.consent} value={leadForm.consentToken} required className="mt-0.5 h-6 w-6 shrink-0 accent-orange-ink" />
        <span>
          {t.consentA}{" "}
          <Link href="/confidentialitate" hrefLang="ro" className="font-medium text-ink underline underline-offset-4">{t.consentLink}</Link>.
        </span>
      </label>
      <button type="submit" disabled={state === "sending"}
        className="inline-flex min-h-12 items-center justify-center rounded-sm bg-ink px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white hover:bg-orange-ink disabled:opacity-60">
        {state === "sending" ? t.sending : isAudit ? t.sendAudit : t.sendContact}
      </button>
      {state === "error" && (
        <p role="alert" className="text-sm text-red-700">{t.error}</p>
      )}
    </form>
  );
}
