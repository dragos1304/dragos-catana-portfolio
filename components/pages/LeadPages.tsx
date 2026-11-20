import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Eyebrow, FAQ, H2, Section } from "@/components/ui";
import { faqs } from "@/lib/faqs";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, serviceSchema } from "@/lib/schema";
import { phone, site, social } from "@/lib/site-config";
import { alternates, href, pageName, type Lang } from "@/lib/site-map";

/** The two pages that end in the lead form: Contact and the free audit. Once each, in either language. */

const linkCls = "font-semibold text-orange-ink underline underline-offset-4";

const contactCopy = {
  ro: {
    title: "Contact: cere o ofertă pentru site sau SEO",
    description: `Spune-mi despre proiectul tău. Răspund în maximum ${site.reply.ro}. Poți programa și o discuție pe Calendly.`,
    h1: "Hai să vorbim despre proiectul tău.",
    lead: `Completează formularul sau programează direct o discuție. Răspund la orice mesaj în maximum ${site.reply.ro}.`,
    book: "Programează o discuție:", auditQ: "Doar vrei un audit?", auditLink: "Cere auditul gratuit",
    whatsapp: "WhatsApp:", profiles: "Mă găsești și pe:",
    where: "Unde:", whereText: `${site.city}, România. Lucrez online cu clienți din toată țara.`,
    langs: "Limbi:", langsText: "română. Engleză, franceză și germană ca opțiune suplimentară.",
  },
  en: {
    title: "Contact: get a quote for a website or SEO",
    description: `Tell me about your project. I reply within ${site.reply.en}. You can also book a call on Calendly.`,
    h1: "Let's talk about your project.",
    lead: `Fill in the form or book a call directly. I reply to every message within ${site.reply.en}.`,
    book: "Book a call:", auditQ: "Just want an audit?", auditLink: "Get the free audit",
    whatsapp: "WhatsApp:", profiles: "Also find me on:",
    where: "Where:", whereText: `${site.city}, Romania. I work online with clients across the country.`,
    langs: "Languages:", langsText: "English and Romanian. French and German as an add-on.",
  },
} as const;

export function contactMetadata(lang: Lang): Metadata {
  return { title: contactCopy[lang].title, description: contactCopy[lang].description, alternates: alternates("contact", lang) };
}

export function ContactPage({ lang }: { lang: Lang }) {
  const c = contactCopy[lang];
  const home = { name: pageName("home", lang), path: href("home", lang) };
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
            <ul className="mt-8 space-y-4 text-muted">
              <li><strong className="text-ink">{c.book}</strong>{" "}
                <a className={linkCls} href={site.calendly} target="_blank" rel="noopener noreferrer">Calendly</a></li>
              <li><strong className="text-ink">{c.auditQ}</strong>{" "}
                <Link className={linkCls} href={href("audit", lang)}>{c.auditLink}</Link></li>
              <li><strong className="text-ink">{c.whatsapp}</strong>{" "}
                <a className={linkCls} href={social.whatsapp.url} target="_blank" rel="noopener noreferrer">{phone.display}</a></li>
              <li><strong className="text-ink">{c.profiles}</strong>{" "}
                {Object.values(social).filter((p) => p.sameAs).map((p, i) => (
                  <span key={p.name}>{i > 0 && " · "}<a className={linkCls} href={p.url} target="_blank" rel="me noopener noreferrer">{p.name}</a></span>
                ))}</li>
              <li><strong className="text-ink">{c.where}</strong> {c.whereText}</li>
              <li><strong className="text-ink">{c.langs}</strong> {c.langsText}</li>
            </ul>
          </div>
          <div className="rounded-md border border-line bg-white p-6 shadow-sm sm:p-8">
            <LeadForm kind="contact" lang={lang} />
          </div>
        </div>
      </Section>
      <Section id="intrebari" tint><FAQ items={faqs.contact[lang]} lang={lang} /></Section>
    </>
  );
}

const auditCopy = {
  ro: {
    title: "Audit SEO gratuit și audit de vizibilitate în AI",
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
  return { title: auditCopy[lang].title, description: auditCopy[lang].description, alternates: alternates("audit", lang) };
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
