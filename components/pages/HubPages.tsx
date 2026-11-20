import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, Button, CtaBand, Eyebrow, FAQ, H2, Section } from "@/components/ui";
import { faqs } from "@/lib/faqs";
import { JsonLd } from "@/components/JsonLd";
import { Shot } from "@/components/Shot";
import { breadcrumb } from "@/lib/schema";
import { proof, site } from "@/lib/site-config";
import { alternates, href, pageName, services, type Lang, type PageKey } from "@/lib/site-map";

/** The two index pages: Work and Services. Once each, in either language. */

const perf = proof.cheesy.lighthouse[0];
const pagesAfter = proof.cheesy.sitemapPages.after;
const link = "font-semibold text-orange-ink underline underline-offset-4";

const workCopy = {
  ro: {
    title: "Portofoliu web design și studii de caz",
    description: "Proiecte de redesign și creare de website-uri, cu rezultate măsurate. Începe cu Cheesy Media, o agenție foto-video din Cluj-Napoca.",
    h1: "Proiecte, cu rezultate pe care le poți verifica.",
    lead: "Public doar ce e real și măsurabil. Pe măsură ce apar proiecte noi, le adaug aici.",
    desktopAlt: "Noul site Cheesy Media pe desktop", phoneAlt: "Noul site Cheesy Media pe telefon",
    kicker: "Redesign · Cluj-Napoca",
    text: "Agenție foto-video și social media. De la o pagină lungă la un site complet: design nou, o pagină pentru fiecare serviciu și o bază tehnică pregătită pentru Google și AI.",
    chips: [`Performanță ${perf.before} → ${perf.after}`, `${pagesAfter} pagini`, "Date structurate", "Pregătit pentru AI"],
    more: "Vezi studiul de caz →",
    ctaTitle: "Vrei să fii următorul proiect?", ctaText: `Începe cu un audit gratuit al site-ului tău, livrat în maximum ${site.reply.ro}.`,
  },
  en: {
    title: "Web design portfolio and case studies",
    description: "Website redesign and new-website projects with measured results. Starting with Cheesy Media, a photo and video agency in Cluj-Napoca.",
    h1: "Projects, with results you can check.",
    lead: "I only publish what's real and measurable. As new projects come in, I add them here.",
    desktopAlt: "The new Cheesy Media site on desktop", phoneAlt: "The new Cheesy Media site on a phone",
    kicker: "Redesign · Cluj-Napoca",
    text: "A photo, video and social media agency. From one long page to a complete site: a new design, a page for every service and a technical base for Google and AI.",
    chips: [`Performance ${perf.before} → ${perf.after}`, `${pagesAfter} pages`, "Structured data", "AI-ready"],
    more: "Read the case study →",
    ctaTitle: "Want to be the next project?", ctaText: `Start with a free audit of your website, delivered within ${site.reply.en}.`,
  },
} as const;

export function workMetadata(lang: Lang): Metadata {
  return { title: workCopy[lang].title, description: workCopy[lang].description, alternates: alternates("work", lang) };
}

export function WorkPage({ lang }: { lang: Lang }) {
  const c = workCopy[lang];
  const home = { name: pageName("home", lang), path: href("home", lang) };
  return (
    <>
      <JsonLd data={breadcrumb([home, { name: pageName("work", lang), path: href("work", lang) }])} />
      <Section>
        <Breadcrumbs lang={lang} items={[{ name: home.name, href: home.path }, { name: pageName("work", lang) }]} />
        <Eyebrow>{pageName("work", lang)}</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">{c.h1}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{c.lead}</p>
        <div className="mt-10">
          <Link href={href("cheesy", lang)} className="group grid overflow-hidden rounded-3xl border-2 border-ink bg-canvas transition-shadow duration-200 hover:shadow-[8px_8px_0_0_var(--color-ink)] lg:grid-cols-[1.3fr_1fr]">
            <div className="relative bg-ink p-5 pb-8 pr-10 sm:p-8 sm:pb-10 sm:pr-16">
              <Shot name="site-desktop" alt={c.desktopAlt} sizes="(min-width: 1024px) 560px, 92vw" eager />
              <Shot name="site-mobile" phone alt={c.phoneAlt} sizes="140px" className="absolute bottom-3 right-3 w-[24%] max-w-[140px]" />
            </div>
            <div className="flex flex-col p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-ink">{c.kicker}</p>
              <h2 className="mt-2 font-serif text-3xl font-extrabold">Cheesy Media</h2>
              <p className="mt-3 text-[17px] leading-relaxed text-muted">{c.text}</p>
              <ul className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
                {c.chips.map((t) => <li key={t} className="rounded-full bg-paper px-3 py-1">{t}</li>)}
              </ul>
              <span className="mt-auto inline-block pt-6 font-semibold text-ink underline decoration-orange decoration-2 underline-offset-4">{c.more}</span>
            </div>
          </Link>
        </div>
      </Section>
      <Section id="intrebari" tint><FAQ items={faqs.work[lang]} lang={lang} /></Section>
      <CtaBand lang={lang} title={c.ctaTitle} text={c.ctaText} />
    </>
  );
}

type ServicesCopy = {
  title: string; description: string; h1: string; lead: string; details: string;
  needH2: string; tableCaption: string; colSituation: string; colService: string; rows: [string, PageKey][];
  fieldH3: string; fields: [PageKey, string, string][];
  packsH3: string; packs: [string, string][];
  langsH3: string; langs: string; quote: string; audit: string;
};

const servicesCopy: Record<Lang, ServicesCopy> = {
  ro: {
    title: "Servicii: creare site, redesign și SEO",
    description: "Redesign de website, creare de website-uri și SEO cu accent pe vizibilitate în ChatGPT, Gemini și Perplexity. Cere o ofertă sau un audit gratuit.",
    h1: "Un website modern, găsit în Google și recomandat de AI.",
    lead: "Fiecare redesign și fiecare website nou pe care îl livrez este „pregătit pentru AI” din start: conținut clar, date structurate și o bază tehnică curată. Prețurile depind de proiect, așa că primești o ofertă după o discuție scurtă.",
    details: "Detalii →",
    needH2: "De ce ai nevoie?", tableCaption: "Ghid pentru alegerea serviciului", colSituation: "Situația ta", colService: "Serviciul potrivit",
    rows: [
      ["Am un site, dar e vechi sau lent", "redesign"],
      ["Nu am site sau am doar o pagină de social media", "newSite"],
      ["Am site, dar nu mă găsește nimeni, nici AI-ul", "seo"],
      ["Am un site bun, dar nu am timp să am grijă de el", "maintenance"],
    ],
    fieldH3: "Pentru domeniul tău",
    fields: [
      ["clinics", "Website pentru clinici și cabinete medicale", "Pagini pe specialități, medici, programare și SEO local."],
      ["lawFirms", "Website pentru cabinete de avocatură", "Domenii de practică, avocați, articole și contact discret."],
    ],
    packsH3: "Pachete combinate",
    packs: [
      ["Redesign + pregătit pentru AI.", "Site nou, migrare sigură, conținut și date structurate gândite pentru motoare AI."],
      ["Website nou + pregătit pentru AI.", "De la zero, cu SEO, date structurate și analiză încă din prima zi."],
    ],
    langsH3: "Alte limbi",
    langs: "Site-urile pot fi livrate și în engleză, franceză sau germană, ca opțiune suplimentară, cu aceeași atenție pentru SEO în fiecare limbă.",
    quote: "Cere o ofertă", audit: "Audit gratuit AI",
  },
  en: {
    title: "Services: websites, redesign and SEO",
    description: "Website redesign, new websites and SEO focused on visibility in ChatGPT, Gemini and Perplexity, for businesses in Romania. Get a quote or a free audit.",
    h1: "A modern website, found on Google and recommended by AI.",
    lead: "Every redesign and every new website I deliver is “AI-ready” from the start: clear content, structured data and a clean technical base. Prices depend on the project, so you get an offer after a short call.",
    details: "Details →",
    needH2: "What do you need?", tableCaption: "Guide to choosing the right service", colSituation: "Your situation", colService: "The right service",
    rows: [
      ["I have a site, but it's old or slow", "redesign"],
      ["I have no site, or only a social media page", "newSite"],
      ["I have a site, but nobody finds me, not even AI", "seo"],
      ["My site is good, but I have no time to look after it", "maintenance"],
    ],
    fieldH3: "For your field",
    fields: [
      ["clinics", "Websites for clinics and medical practices", "Specialty pages, doctors, booking and local SEO."],
      ["lawFirms", "Websites for law firms", "Practice areas, lawyers, articles and discreet contact."],
    ],
    packsH3: "Combined packages",
    packs: [
      ["Redesign + AI-ready.", "A new site, a safe migration, and content and structured data designed for AI engines."],
      ["New website + AI-ready.", "From scratch, with SEO, schema and analytics from day one."],
    ],
    langsH3: "Other languages",
    langs: "Sites can be delivered in Romanian and English, and in French or German as an add-on, with the same attention to SEO in every language.",
    quote: "Get a quote", audit: "Free AI audit",
  },
};

export function servicesMetadata(lang: Lang): Metadata {
  return { title: servicesCopy[lang].title, description: servicesCopy[lang].description, alternates: alternates("services", lang) };
}

export function ServicesPage({ lang }: { lang: Lang }) {
  const c = servicesCopy[lang];
  const home = { name: pageName("home", lang), path: href("home", lang) };
  const list = services(lang);
  const titleOf = (k: PageKey) => list.find((s) => s.key === k)?.title ?? pageName(k, lang);
  return (
    <>
      <JsonLd data={breadcrumb([home, { name: pageName("services", lang), path: href("services", lang) }])} />
      <Section id="servicii">
        <Breadcrumbs lang={lang} items={[{ name: home.name, href: home.path }, { name: pageName("services", lang) }]} />
        <Eyebrow>{pageName("services", lang)}</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">{c.h1}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{c.lead}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {list.map((s) => (
            <Link key={s.key} href={s.href} className={`rounded-md border p-7 hover:shadow-lg ${s.flagship ? "border-orange-ink" : "border-line"}`}>
              <h2 className="font-serif text-2xl font-bold">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{s.short}</p>
              <span className="mt-5 inline-block font-semibold text-orange-ink">{c.details}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="ce-ai-nevoie" tint>
        <H2>{c.needH2}</H2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <caption className="sr-only">{c.tableCaption}</caption>
            <thead>
              <tr className="border-b border-ink/20 text-sm uppercase tracking-wider text-muted">
                <th scope="col" className="py-3 pr-4">{c.colSituation}</th>
                <th scope="col" className="py-3">{c.colService}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {c.rows.map(([situation, key]) => (
                <tr key={key}><th scope="row" className="py-4 pr-4 font-medium">{situation}</th><td><Link className={link} href={href(key, lang)}>{titleOf(key)}</Link></td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="mt-12 font-serif text-2xl font-bold">{c.fieldH3}</h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {c.fields.map(([key, name, d]) => (
            <li key={key} className="rounded-md border border-line bg-white p-6"><Link className={link} href={href(key, lang)}>{name}</Link><p className="mt-2 text-muted">{d}</p></li>
          ))}
        </ul>
        <h3 className="mt-12 font-serif text-2xl font-bold">{c.packsH3}</h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {c.packs.map(([t, d]) => <li key={t} className="rounded-md border border-line bg-white p-6"><strong>{t}</strong> {d}</li>)}
        </ul>
        <h3 className="mt-12 font-serif text-2xl font-bold">{c.langsH3}</h3>
        <p className="mt-3 max-w-2xl text-muted leading-relaxed">{c.langs}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={href("contact", lang)}>{c.quote}</Button>
          <Button href={href("audit", lang)} variant="ghost">{c.audit}</Button>
        </div>
      </Section>
      <Section id="intrebari"><FAQ items={faqs.services[lang]} lang={lang} /></Section>
      <CtaBand lang={lang} />
    </>
  );
}
