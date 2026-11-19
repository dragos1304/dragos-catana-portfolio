"use client";
import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";

type Kind = "audit" | "contact";
const inputCls =
  "mt-1.5 block w-full rounded-md border border-navy/25 bg-white px-4 py-3 text-base text-navy placeholder:text-slate-ink/60 focus:border-navy";

export function LeadForm({ kind }: { kind: Kind }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const isAudit = kind === "audit";
  const openedAt = useRef(Date.now());

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = new FormData(e.currentTarget);
    data.set("ts", String(openedAt.current));
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      const json = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || !json?.ok) throw new Error(String(res.status));
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "generate_lead", form_name: kind });
      setState("done");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div role="status" className="rounded-md border border-line bg-mist p-6">
        <p className="font-serif text-xl font-semibold">Mulțumesc, am primit mesajul.</p>
        <p className="mt-2 text-slate-ink">
          {isAudit
            ? "Îți trimit auditul pe email în maximum 24 de ore."
            : "Îți răspund în maximum 24 de ore."}{" "}
          Dacă preferi să vorbim direct, poți și{" "}
          <a className="font-medium underline underline-offset-4" href="https://calendly.com/dragoscatana/consultanta-1-la-1" target="_blank" rel="noopener noreferrer">programa o discuție</a>.
        </p>
      </div>
    );
  }

  return (
    <form name={kind} method="POST" onSubmit={onSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value={kind} />
      <p className="hidden"><label>Nu completa: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">Nume
          <input className={inputCls} name="name" type="text" autoComplete="name" required />
        </label>
        <label className="block text-sm font-medium">Email
          <input className={inputCls} name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label className="block text-sm font-medium">Adresa website-ului {isAudit ? "" : "(dacă ai unul)"}
        <input className={inputCls} name="website" type="url" inputMode="url" placeholder="https://" required={isAudit} />
      </label>
      {isAudit ? (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">Tipul afacerii
              <input className={inputCls} name="business" type="text" placeholder="ex. clinică stomatologică" required />
            </label>
            <label className="block text-sm font-medium">Orașul
              <input className={inputCls} name="city" type="text" required />
            </label>
          </div>
          <label className="block text-sm font-medium">2–3 concurenți (opțional)
            <textarea className={inputCls} name="competitors" rows={3} placeholder="Adresele site-urilor sau numele lor" />
          </label>
        </>
      ) : (
        <>
          <label className="block text-sm font-medium">De ce ai nevoie?
            <select className={inputCls} name="need" defaultValue="" required>
              <option value="" disabled>Alege o opțiune</option>
              <option>Redesign de website</option>
              <option>Website nou</option>
              <option>SEO și vizibilitate în AI (colaborare lunară)</option>
              <option>Altceva</option>
            </select>
          </label>
          <label className="block text-sm font-medium">Spune-mi pe scurt despre proiect
            <textarea className={inputCls} name="message" rows={5} required />
          </label>
        </>
      )}
      <label className="flex items-start gap-3 text-sm leading-relaxed text-slate-ink">
        <input type="checkbox" name="consent" value="da" required className="mt-0.5 h-6 w-6 shrink-0 accent-brass-dark" />
        <span>
          Sunt de acord ca datele mele să fie folosite pentru a-mi răspunde, conform{" "}
          <Link href="/confidentialitate" className="font-medium text-navy underline underline-offset-4">politicii de confidențialitate</Link>.
        </span>
      </label>
      <button type="submit" disabled={state === "sending"}
        className="inline-flex min-h-12 items-center justify-center rounded-sm bg-navy px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white hover:bg-brass-dark disabled:opacity-60">
        {state === "sending" ? "Se trimite…" : isAudit ? "Trimite cererea de audit" : "Trimite mesajul"}
      </button>
      {state === "error" && (
        <p role="alert" className="text-sm text-red-700">
          Nu s-a trimis mesajul. Încearcă din nou sau programează direct o discuție pe Calendly.
        </p>
      )}
    </form>
  );
}
