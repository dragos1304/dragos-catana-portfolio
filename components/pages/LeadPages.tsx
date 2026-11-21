import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { Breadcrumbs, Eyebrow, FAQ, H2, Section } from "@/components/ui";
import { faqs } from "@/lib/faqs";
import { CalendarDays, MessageCircle, Search } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { MapEmbed } from "@/components/MapEmbed";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, serviceSchema } from "@/lib/schema";
import { phone, place, site, social } from "@/lib/site-config";
import { href, pageName, type Lang } from "@/lib/site-map";

/** The two pages that end in the lead form: Contact and the free audit. Once each, in either language. */

const linkCls = "font-semibold text-orange-ink underline underline-offset-4";

const contactCopy = {
  ro: {
    title: "Contact: cere o ofertă pentru site sau SEO",
    description: `Scrie-mi despre site-ul sau proiectul tău SEO: răspund personal în maximum ${site.reply.ro}. Web designer în Cluj-Napoca, cu clienți din toată România.`,
    h1: "Hai să-ți facem site-ul ușor de recomandat de AI.",
    lead: `Spune-mi pe scurt ce ai nevoie. Îți răspund personal în maximum ${site.reply.ro}.`,
    quick: "Preferi WhatsApp?",
    waysH2: "Alte moduri de a vorbi cu mine",
    ways: [
      { k: "call", t: "Programează o discuție", d: "30 de minute online, gratuit. Alegi singur ora în calendar.", cta: "Deschide Calendly" },
      { k: "wa", t: "Scrie-mi pe WhatsApp", d: "Pentru o întrebare scurtă sau ca să trimiți rapid adresa site-ului.", cta: phone.display },
      { k: "audit", t: "Cere doar auditul", d: `Vezi cum apari în Google și în ChatGPT. Gratuit, făcut manual, în ${site.reply.ro}.`, cta: "Cere auditul gratuit" },
    ],
    whereH2: "Unde lucrez",
    where: `Adresa mea: ${place.addressLine.ro}. Lucrez online cu clienți din toată țara, iar discuțiile au loc prin apel video.`,
    langs: "Lucrez în română și în engleză. Pot livra site-ul și în franceză sau germană, ca opțiune suplimentară.",
    profiles: "Mă găsești și pe",
  },
  en: {
    title: "Contact: get a quote for a website or SEO",
    description: `Tell me about your website or SEO project and I reply personally within ${site.reply.en}. Web designer in Cluj-Napoca, working with clients across Romania.`,
    h1: "Let's make your website easy for AI to recommend.",
    lead: `Tell me briefly what you need. I reply personally within ${site.reply.en}.`,
    quick: "Prefer WhatsApp?",
    waysH2: "Other ways to reach me",
    ways: [
      { k: "call", t: "Book a call", d: "30 minutes online, free. Pick the time yourself in the calendar.", cta: "Open Calendly" },
      { k: "wa", t: "Message me on WhatsApp", d: "For a quick question or to send your website address.", cta: phone.display },
      { k: "audit", t: "Just get the audit", d: `See how you show up on Google and in ChatGPT. Free, done by hand, within ${site.reply.en}.`, cta: "Get the free audit" },
    ],
    whereH2: "Where I work",
    where: `My address: ${place.addressLine.en}. I work online with clients across the country, and calls happen over video.`,
    langs: "I work in English and Romanian. Sites can also be delivered in French or German as an add-on.",
    profiles: "Also find me on",
  },
} as const;

export function contactMetadata(lang: Lang): Metadata {
  return pageMeta("contact", lang, contactCopy[lang]);
}

const wayIcon = { call: CalendarDays, wa: MessageCircle, audit: Search } as const;

export function ContactPage({ lang }: { lang: Lang }) {
  const c = contactCopy[lang];
  const home = { name: pageName("home", lang), path: href("home", lang) };
  const wayHref = { call: site.calendly, wa: social.whatsapp.url, audit: href("audit", lang) };
  return (
    <>
      <JsonLd data={breadcrumb([home, { name: pageName("contact", lang), path: href("contact", lang) }])} />
      <Section>
        <Breadcrumbs lang={lang} items={[{ name: home.name, href: home.path }, { name: pageName("contact", lang) }]} />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">{c.h1}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{c.lead}</p>
            <p className="mt-6 text-muted">
              <strong className="text-ink">{c.quick}</strong>{" "}
              <a className={linkCls} href={social.whatsapp.url} target="_blank" rel="noopener noreferrer">{phone.display}</a>
            </p>
          </div>
          <div className="rounded-md border border-line bg-white p-6 shadow-sm sm:p-8">
            <LeadForm kind="contact" lang={lang} />
          </div>
        </div>
      </Section>

      <Section white>
        <H2>{c.waysH2}</H2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {c.ways.map((w) => {
            const Icon = wayIcon[w.k];
            const external = w.k !== "audit";
            const cls = "group flex h-full flex-col rounded-3xl border-2 border-ink bg-paper p-6 transition-shadow duration-200 hover:shadow-[6px_6px_0_0_var(--color-ink)]";
            const inner = (
              <>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-orange"><Icon aria-hidden className="h-6 w-6 text-ink" /></span>
                <h3 className="mt-5 font-serif text-2xl font-extrabold text-ink">{w.t}</h3>
                <p className="mt-2 text-[17px] leading-relaxed text-muted">{w.d}</p>
                <span className="mt-auto pt-5 font-semibold text-ink underline decoration-orange decoration-2 underline-offset-4">{w.cta}</span>
              </>
            );
            return external
              ? <a key={w.k} href={wayHref[w.k]} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
              : <Link key={w.k} href={wayHref[w.k]} className={cls}>{inner}</Link>;
          })}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <H2>{c.whereH2}</H2>
            <p className="mt-5 text-lg leading-relaxed text-ink">{c.where}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted">{c.langs}</p>
            <p className="mt-6 text-muted">
              <strong className="text-ink">{c.profiles}:</strong>{" "}
              {Object.values(social).filter((p) => p.sameAs).map((p, i) => (
                <span key={p.name}>{i > 0 && " · "}<a className={linkCls} href={p.url} target="_blank" rel="me noopener noreferrer">{p.name}</a></span>
              ))}
            </p>
          </div>
          <MapEmbed lang={lang} />
        </div>
      </Section>

      <Section id="intrebari" tint><FAQ items={faqs.contact[lang]} lang={lang} /></Section>
    </>
  );
}

const auditCopy = {
  ro: {
    title: "Audit SEO gratuit și vizibilitate în AI",
    description: `Audit SEO gratuit, făcut manual: vezi cum apari în Google și dacă te recomandă ChatGPT, Gemini și Perplexity. Rezultatul îl primești în ${site.reply.ro}.`,
    schemaName: "Audit gratuit de vizibilitate în AI și SEO",
    schemaDescription: "Audit manual al modului în care apari în Google și în răspunsurile asistenților AI.",
    eyebrow: `Gratuit · Manual · În ${site.reply.ro}`,
    h1a: "Audit SEO gratuit: te recomandă Google și ", h1b: "ChatGPT", h1c: "?",
    lead: "Îți arăt cum apare afacerea ta acum în Google și în răspunsurile asistenților AI, și ce poți face dacă nu apari.",
    h2: "Ce primești în auditul gratuit",
    items: ["Testul întrebărilor reale ale clienților tăi, în mai mulți asistenți AI", "Dacă ești menționat, pe ce loc și cum ești descris", "Ce concurenți apar în locul tău", "O listă scurtă de pași, în ordinea importanței"],
    note: `Răspund în maximum ${site.reply.ro}. Nu trebuie să continui cu mine după audit. Preferi să vorbim direct?`,
    book: "Programează o discuție",
  },
  en: {
    title: "Free SEO audit and AI visibility audit",
    description: `A free SEO audit, done by hand: see how you show up on Google and whether ChatGPT, Gemini and Perplexity recommend you. You get the result within ${site.reply.en}.`,
    schemaName: "Free AI visibility and SEO audit",
    schemaDescription: "A manual audit of how you show up on Google and in AI assistants' answers.",
    eyebrow: `Free · Manual · Within ${site.reply.en}`,
    h1a: "Free SEO audit: do Google and ", h1b: "ChatGPT", h1c: " recommend you?",
    lead: "I show you how your business shows up today on Google and in AI assistants' answers, and what you can do if it doesn't.",
    h2: "What the free audit covers",
    items: ["Your clients' real questions, tested in several AI assistants", "Whether you're mentioned, where, and how you're described", "Which competitors appear instead of you", "A short list of steps, in order of impact"],
    note: `I reply within ${site.reply.en}. You don't have to continue with me after the audit. Rather talk directly?`,
    book: "Book a call",
  },
} as const;

export function auditMetadata(lang: Lang): Metadata {
  return pageMeta("audit", lang, auditCopy[lang]);
}

export function AuditPage({ lang }: { lang: Lang }) {
  const c = auditCopy[lang];
  const home = { name: pageName("home", lang), path: href("home", lang) };
  const path = href("audit", lang);
  return (
    <>
      <JsonLd data={[breadcrumb([home, { name: pageName("audit", lang), path }]), serviceSchema(c.schemaName, c.schemaDescription, path)]} />
      <Section>
        <Breadcrumbs lang={lang} items={[{ name: home.name, href: home.path }, { name: pageName("audit", lang) }]} />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h1 className="font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">
              {c.h1a}<em className="font-accent font-normal tracking-normal text-orange-ink">{c.h1b}</em>{c.h1c}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{c.lead}</p>
            <H2 className="mt-10 !text-3xl">{c.h2}</H2>
            <ul className="mt-4 space-y-3 text-muted leading-relaxed">
              {c.items.map((i) => <li key={i}>✓ {i}</li>)}
            </ul>
            <p className="mt-6 text-sm text-muted">
              {c.note}{" "}
              <a className="font-semibold text-ink underline underline-offset-4" href={site.calendly} target="_blank" rel="noopener noreferrer">{c.book}</a>.
            </p>
          </div>
          <div className="rounded-md border border-line bg-white p-6 shadow-sm sm:p-8">
            <LeadForm kind="audit" lang={lang} />
          </div>
        </div>
      </Section>
      <Section id="intrebari" tint><FAQ items={faqs.audit[lang]} lang={lang} /></Section>
    </>
  );
}
