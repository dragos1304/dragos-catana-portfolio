import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Breadcrumbs, Button, CtaBand, Eyebrow, H2, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Shot } from "@/components/Shot";
import type { ImageName } from "@/lib/images";
import { LighthouseReport } from "@/components/LighthouseReport";
import { abs, breadcrumb } from "@/lib/schema";
import { proof, site } from "@/lib/site-config";
import { alternates, href, pageName, type Lang } from "@/lib/site-map";

/** The Cheesy Media case study, once, in either language. */

type Copy = {
  title: string; description: string; ldHeadline: string; ldDescription: string; ldLang: string; published: string;
  eyebrow: string; h1: string; lead: string; tags: string[]; desktopAlt: string; phoneAlt: string;
  before: string; after: string; liveNote: string;
  baEyebrow: string; baH2: string; baLead: string; beforeAlt: string; beforeCaption: string; afterAlt: string; afterCaption: string;
  beforeTag: string; afterTag: string; phoneBeforeAlt: string; phoneAfterAlt: string; phoneBefore: string; phoneAfter: string;
  designEyebrow: string; designH2a: string; designH2b: string; designLead: string;
  palette: { hex: string; name: string; use: string; ink: boolean }[];
  headlinesLabel: string; headlinesNote: string; textLabel: string; textSample: string; textNote: string;
  design: [string, string][];
  pagesEyebrow: string; pagesH2: string; pagesLead: string;
  pages: { name: ImageName; label: string; alt: string }[];
  phones: { name: ImageName; label: string; alt: string }[];
  aiEyebrow: string; aiH2: string; aiLead: string;
  aiSteps: { t: string; before: string; after: string }[];
  dontClaimLabel: string; dontClaim: string;
  resultEyebrow: string; resultH2: string; resultLead: string;
  lhBeforeAlt: string; lhBeforeCaption: string; lhAfterAlt: string; lhAfterCaption: string;
  noTraffic: string; redesignCta: string; auditCta: string;
};

const [perf, a11y] = proof.cheesy.lighthouse;
const pagesAfter = proof.cheesy.sitemapPages.after;

const copy: Record<Lang, Copy> = {
  ro: {
    title: "Studiu de caz: redesign website Cheesy Media",
    description: `Redesign pentru o agenție foto-video din Cluj: design nou, ${pagesAfter} pagini, date structurate, pregătit pentru Google și AI. Performanță mobil ${perf.before} → ${perf.after}.`,
    ldHeadline: "Studiu de caz: redesign website Cheesy Media",
    ldDescription: "Redesign pentru o agenție foto-video din Cluj-Napoca: design, structură, pregătire pentru Google și AI, rezultate măsurate în Lighthouse.",
    ldLang: "ro-RO",
    published: "2026-11-18",
    eyebrow: "Studiu de caz · Redesign",
    h1: "Cheesy Media: de la o pagină lungă la un site complet.",
    lead: "Cheesy Media este o agenție de foto, video și social media din Cluj-Napoca. Am refăcut site-ul împreună cu proprietarii: design nou, o pagină pentru fiecare serviciu și o bază tehnică pregătită pentru Google și asistenții AI.",
    tags: ["Redesign", "Design vizual", "Structură și conținut", "SEO tehnic", "Pregătire pentru AI", "Next.js · Netlify"],
    desktopAlt: "Pagina principală a noului site Cheesy Media pe desktop",
    phoneAlt: "Același site Cheesy Media pe telefon",
    before: "Înainte", after: "După", liveNote: "",
    baEyebrow: "Înainte și după",
    baH2: "Aceeași firmă, alt prim contact.",
    baLead: "Site-ul inițial funcționa, dar punea toată oferta pe o singură pagină violetă, iar cererile treceau printr-un formular Google. Noul site explică pe rând ce face agenția și duce vizitatorul spre o cerere de ofertă.",
    beforeAlt: "Prima pagină a vechiului site Cheesy Media: fundal violet, titlu centrat și logo mare",
    beforeCaption: "O pagină, totul violet, logo în locul unui mesaj.",
    afterAlt: "Prima pagină a noului site Cheesy Media",
    afterCaption: "Mesaj clar, contrast puternic, „Cere ofertă” mereu în meniu.",
    beforeTag: "Înainte", afterTag: "După",
    phoneBeforeAlt: "Vechiul site Cheesy Media pe telefon", phoneAfterAlt: "Noul site Cheesy Media pe telefon",
    phoneBefore: "Telefon, înainte", phoneAfter: "Telefon, după",
    designEyebrow: "Designul", designH2a: "Un brand jucăuș,", designH2b: "pus în ordine.",
    designLead: "Am păstrat tonul jucăuș al mascotei, dar i-am dat site-ului ordinea unei agenții serioase. Culorile și fonturile de mai jos sunt cele măsurate pe site-ul live.",
    palette: [
      { hex: "#121016", name: "Negru cald", use: "fundal pentru titluri mari și meniu", ink: false },
      { hex: "#FBF7EF", name: "Crem", use: "fundalul paginilor, mai cald decât albul", ink: true },
      { hex: "#FFB21C", name: "Galben „brânză”", use: "butoane și cuvântul-cheie din titlu", ink: true },
      { hex: "#5D3DB6", name: "Violet", use: "păstrat din vechiul brand, ca accent", ink: false },
      { hex: "#F2542D", name: "Portocaliu", use: "accent rar, din steaua mascotei", ink: false },
    ],
    headlinesLabel: "Titluri", headlinesNote: "ExtraBold, comprimat, majuscule. Înainte: Alfa Slab One.",
    textLabel: "Text", textSample: "Inter, ușor de citit", textNote: "Paragrafe scurte, rânduri aerisite, contrast mare pe fundal crem.",
    design: [
      ["Titluri care se citesc dintr-o privire", "Bricolage Grotesque ExtraBold, comprimat, cu majuscule, în loc de Alfa Slab One. Câte un cuvânt important în galben, pe fiecare pagină."],
      ["Contrast în loc de violet peste tot", "Vechiul site era violet de sus până jos. Noul folosește benzi negre și crem, iar violetul a rămas doar ca accent, ca brandul să fie recognoscibil."],
      ["Mascota rămâne vedeta", "Brânza cu difuzoare apare în logo și pe pagini. Nu am inventat o identitate nouă, am pus-o în valoare."],
      ["Imagini mari, în cadre", "Serviciile au imagini mari, cu margini groase și colțuri rotunjite, în loc de blocuri de text."],
      ["Un singur pas următor, mereu vizibil", "Butonul galben „Cere ofertă” e în meniu pe fiecare pagină, iar WhatsApp e la un deget distanță pe telefon."],
    ],
    pagesEyebrow: "Paginile noi", pagesH2: "Fiecare serviciu are pagina lui.",
    pagesLead: "Din aceeași pagină lungă au ieșit pagini separate pentru servicii, fiecare serviciu în parte, proces, portofoliu, despre și contact. Același sistem vizual, pe toate.",
    pages: [
      { name: "after-servicii", label: "Servicii", alt: "Pagina Servicii a noului site Cheesy Media, cu titlul mare „Tot ce-ți trebuie ca să crești online”" },
      { name: "after-foto", label: "Serviciu: foto", alt: "Pagina dedicată serviciului de fotografie, cu titlul „Imagini care vând înainte să spui un cuvânt”" },
      { name: "after-proces", label: "Proces în 4 pași", alt: "Pagina Proces, cu cei patru pași: analiză, producție, editare, administrare" },
      { name: "after-portofoliu", label: "Portofoliu", alt: "Pagina Portofoliu, cu filtre pentru foto, video, social și web" },
    ],
    phones: [
      { name: "site-mobile", label: "Acasă", alt: "Prima pagină pe telefon" },
      { name: "m-after-servicii", label: "Servicii", alt: "Pagina Servicii pe telefon" },
      { name: "m-after-proces", label: "Proces", alt: "Pagina Proces pe telefon" },
    ],
    aiEyebrow: "Google și AI", aiH2: "Ce am făcut ca site-ul să fie găsit și citat.",
    aiLead: "Un asistent AI recomandă ce poate înțelege și verifica. Acestea sunt pașii tehnici făcuți pe Cheesy Media. Îi poți verifica oricând în codul paginilor.",
    aiSteps: [
      { t: "Limba corectă", before: "Pagina era declarată în engleză (lang=\"en\"), deși textul era în română.", after: "lang=\"ro\" pe toate paginile, ca Google și asistenții AI să știe pentru ce piață e." },
      { t: "O pagină pentru fiecare întrebare", before: "O singură pagină lungă cu toate serviciile.", after: `${pagesAfter} adrese în sitemap, inclusiv câte o pagină pentru foto, video, social media și web design. Un asistent AI poate cita exact pagina potrivită.` },
      { t: "Date structurate", before: "Niciun bloc de date structurate.", after: "ProfessionalService pe fiecare pagină, FAQPage pe prima pagină și BreadcrumbList pe paginile interioare." },
      { t: "Titluri cu serviciu și oraș", before: "Un titlu general: „Agenție Modernă de Marketing în Cluj-Napoca”.", after: "Titlu și descriere proprii pe fiecare pagină, de exemplu „Agenție marketing Cluj: foto, video, social”." },
      { t: "Acces deschis pentru roboți", before: "Fără robots.txt și fără sitemap.", after: "robots.txt permite toți roboții (inclusiv cei ai asistenților AI) și indică sitemap-ul. Doar pagina de mulțumire e exclusă." },
      { t: "Răspunsuri directe", before: "Formulări generale despre servicii.", after: "Întrebări frecvente cu răspunsuri scurte și un proces în 4 pași: formatul pe care AI-ul îl poate prelua ușor." },
      { t: "Previzualizare la distribuire", before: "Nicio imagine pentru distribuire.", after: "Imagine de previzualizare (og:image) pe fiecare pagină, pentru WhatsApp, Facebook și LinkedIn." },
      { t: "Viteză pe mobil", before: `Performanță ${perf.before} în Lighthouse.`, after: "100 la toate cele patru categorii Lighthouse." },
    ],
    dontClaimLabel: "Ce nu afirm:",
    dontClaim: "nu public poziții în Google sau mențiuni în ChatGPT pentru Cheesy Media, pentru că nu le-am măsurat încă împreună cu clientul. Când le avem, le adaug aici.",
    resultEyebrow: "Rezultat măsurat", resultH2: "Scoruri Lighthouse pe mobil",
    resultLead: "Măsurat cu Google PageSpeed Insights (Lighthouse), pe mobil, pe 18 noiembrie 2026. Scorurile sunt estimări și pot varia ușor de la o rulare la alta.",
    lhBeforeAlt: `Raport Lighthouse pentru site-ul vechi: performanță ${perf.before}, accesibilitate ${a11y.before}, bune practici 100, SEO 100`,
    lhBeforeCaption: `Înainte: performanță ${perf.before}, accesibilitate ${a11y.before}.`,
    lhAfterAlt: "Raport Lighthouse pentru site-ul nou: 100 la performanță, accesibilitate, bune practici și SEO",
    lhAfterCaption: "După: 100 la toate cele patru categorii.",
    noTraffic: "Nu public cifre de trafic sau de cereri, pentru că nu am date confirmate de client. Stack: Next.js, găzduit pe Netlify.",
    redesignCta: "Vezi serviciul de redesign", auditCta: "Audit gratuit pentru site-ul tău",
  },
  en: {
    title: "Case study: Cheesy Media website redesign",
    description: `Redesign for a photo and video agency in Cluj: new design, ${pagesAfter} pages, structured data, ready for Google and AI. Mobile performance ${perf.before} → ${perf.after}.`,
    ldHeadline: "Case study: Cheesy Media website redesign",
    ldDescription: "Redesign for a photo and video agency in Cluj-Napoca: design, structure, readiness for Google and AI, results measured in Lighthouse.",
    ldLang: "en",
    published: "2026-11-19",
    eyebrow: "Case study · Redesign",
    h1: "Cheesy Media: from one long page to a complete website.",
    lead: "Cheesy Media is a photo, video and social media agency in Cluj-Napoca. I rebuilt the site together with the owners: a new design, a page for every service and a technical base ready for Google and AI assistants.",
    tags: ["Redesign", "Visual design", "Structure and content", "Technical SEO", "AI readiness", "Next.js · Netlify"],
    desktopAlt: "The new Cheesy Media home page on desktop",
    phoneAlt: "The same Cheesy Media site on a phone",
    before: "Before", after: "After", liveNote: " (both in Romanian)",
    baEyebrow: "Before and after",
    baH2: "Same business, a different first impression.",
    baLead: "The original site worked, but it put the whole offer on one violet page, and requests went through a Google form. The new site explains what the agency does, one topic at a time, and leads visitors to a quote request.",
    beforeAlt: "The old Cheesy Media home page: violet background, centred headline and a big logo",
    beforeCaption: "One page, all violet, a logo instead of a message.",
    afterAlt: "The new Cheesy Media home page",
    afterCaption: "A clear message, strong contrast, “Get a quote” always in the menu.",
    beforeTag: "Before", afterTag: "After",
    phoneBeforeAlt: "The old Cheesy Media site on a phone", phoneAfterAlt: "The new Cheesy Media site on a phone",
    phoneBefore: "Phone, before", phoneAfter: "Phone, after",
    designEyebrow: "The design", designH2a: "A playful brand,", designH2b: "put in order.",
    designLead: "I kept the mascot's playful tone, but gave the site the order of a serious agency. The colours and fonts below are the ones measured on the live site.",
    palette: [
      { hex: "#121016", name: "Warm black", use: "background for big headlines and the menu", ink: false },
      { hex: "#FBF7EF", name: "Cream", use: "page background, warmer than white", ink: true },
      { hex: "#FFB21C", name: "“Cheese” yellow", use: "buttons and the key word in each headline", ink: true },
      { hex: "#5D3DB6", name: "Violet", use: "kept from the old brand, as an accent", ink: false },
      { hex: "#F2542D", name: "Orange", use: "a rare accent, from the mascot's star", ink: false },
    ],
    headlinesLabel: "Headlines", headlinesNote: "ExtraBold, condensed, capitals. Before: Alfa Slab One.",
    textLabel: "Text", textSample: "Inter, easy to read", textNote: "Short paragraphs, airy lines, high contrast on a cream background.",
    design: [
      ["Headlines you read at a glance", "Bricolage Grotesque ExtraBold, condensed, in capitals, instead of Alfa Slab One. One key word in yellow on every page."],
      ["Contrast instead of violet everywhere", "The old site was violet from top to bottom. The new one uses black and cream bands, and violet stays only as an accent so the brand is still recognisable."],
      ["The mascot stays the star", "The cheese with speakers appears in the logo and on the pages. I didn't invent a new identity, I made the most of the existing one."],
      ["Big images, in frames", "Services have large images with thick borders and rounded corners, instead of blocks of text."],
      ["One next step, always visible", "The yellow “Cere ofertă” (Get a quote) button is in the menu on every page, and WhatsApp is one tap away on a phone."],
    ],
    pagesEyebrow: "The new pages", pagesH2: "Every service has its own page.",
    pagesLead: "The one long page became separate pages for services, each individual service, the process, the portfolio, about and contact. The same visual system on all of them.",
    pages: [
      { name: "after-servicii", label: "Services", alt: "The Services page of the new Cheesy Media site, with a big headline" },
      { name: "after-foto", label: "Service: photography", alt: "The dedicated photography service page" },
      { name: "after-proces", label: "A 4-step process", alt: "The Process page with four steps: analysis, production, editing, management" },
      { name: "after-portofoliu", label: "Portfolio", alt: "The Portfolio page, with filters for photo, video, social and web" },
    ],
    phones: [
      { name: "site-mobile", label: "Home", alt: "The home page on a phone" },
      { name: "m-after-servicii", label: "Services", alt: "The Services page on a phone" },
      { name: "m-after-proces", label: "Process", alt: "The Process page on a phone" },
    ],
    aiEyebrow: "Google and AI", aiH2: "What I did so the site gets found and cited.",
    aiLead: "An AI assistant recommends what it can understand and verify. These are the technical steps taken on Cheesy Media. You can check them any time in the pages' code.",
    aiSteps: [
      { t: "The right language", before: "The page was marked as English (lang=\"en\"), although the text was in Romanian.", after: "lang=\"ro\" on every page, so Google and AI assistants know which market it's for." },
      { t: "A page for every question", before: "One long page with every service.", after: `${pagesAfter} addresses in the sitemap, including a page each for photo, video, social media and web design. An AI assistant can cite exactly the right page.` },
      { t: "Structured data", before: "No structured data at all.", after: "ProfessionalService on every page, FAQPage on the home page and BreadcrumbList on inner pages." },
      { t: "Titles with service and city", before: "One generic title: “Agenție Modernă de Marketing în Cluj-Napoca”.", after: "Its own title and description on every page, for example “Agenție marketing Cluj: foto, video, social”." },
      { t: "Open access for crawlers", before: "No robots.txt and no sitemap.", after: "robots.txt allows every crawler (including AI assistants') and points to the sitemap. Only the thank-you page is excluded." },
      { t: "Direct answers", before: "Generic wording about the services.", after: "An FAQ with short answers and a 4-step process: the format AI can easily pick up." },
      { t: "Sharing previews", before: "No image for sharing.", after: "A preview image (og:image) on every page, for WhatsApp, Facebook and LinkedIn." },
      { t: "Mobile speed", before: `Performance ${perf.before} in Lighthouse.`, after: "100 in all four Lighthouse categories." },
    ],
    dontClaimLabel: "What I don't claim:",
    dontClaim: "I don't publish Google rankings or ChatGPT mentions for Cheesy Media, because we haven't measured them with the client yet. When we have them, I'll add them here.",
    resultEyebrow: "Measured result", resultH2: "Mobile Lighthouse scores",
    resultLead: "Measured with Google PageSpeed Insights (Lighthouse), on mobile, on 18 November 2026. Scores are estimates and can vary slightly between runs.",
    lhBeforeAlt: `Lighthouse report for the old site: performance ${perf.before}, accessibility ${a11y.before}, best practices 100, SEO 100`,
    lhBeforeCaption: `Before: performance ${perf.before}, accessibility ${a11y.before}.`,
    lhAfterAlt: "Lighthouse report for the new site: 100 for performance, accessibility, best practices and SEO",
    lhAfterCaption: "After: 100 in all four categories.",
    noTraffic: "I don't publish traffic or enquiry numbers, because I don't have figures confirmed by the client. Stack: Next.js, hosted on Netlify.",
    redesignCta: "See the redesign service", auditCta: "Free audit for your site",
  },
};

export function caseStudyMetadata(lang: Lang): Metadata {
  return { title: copy[lang].title, description: copy[lang].description, alternates: alternates("cheesy", lang) };
}

export function CaseStudyPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const path = href("cheesy", lang);
  const crumbs = [{ name: pageName("home", lang), path: href("home", lang) }, { name: pageName("work", lang), path: href("work", lang) }, { name: "Cheesy Media", path }];
  return (
    <>
      <JsonLd data={[breadcrumb(crumbs),
        { "@context": "https://schema.org", "@type": "Article", headline: c.ldHeadline, description: c.ldDescription, url: abs(path), image: abs("/lucrari/cheesy-media/site-desktop-1440.webp"), inLanguage: c.ldLang, author: { "@id": `${site.url}/#person` }, datePublished: c.published, dateModified: "2026-11-19" }]} />

      <Section id="studiu-de-caz-redesign">
        <Breadcrumbs lang={lang} items={[{ name: crumbs[0].name, href: crumbs[0].path }, { name: crumbs[1].name, href: crumbs[1].path }, { name: "Cheesy Media" }]} />
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="max-w-4xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">{c.h1}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{c.lead}</p>
        <ul className="mt-6 flex flex-wrap gap-2 text-sm font-semibold">
          {c.tags.map((t) => <li key={t} className="rounded-full border-2 border-ink px-3 py-1">{t}</li>)}
        </ul>
        <div className="relative mt-12 pb-10 pr-10 sm:pb-12 sm:pr-24">
          <Shot name="site-desktop" alt={c.desktopAlt} sizes="(min-width: 1152px) 1000px, 92vw" eager />
          <Shot name="site-mobile" phone alt={c.phoneAlt} sizes="200px" className="absolute bottom-0 right-0 w-[26%] max-w-[200px]" />
        </div>
        <p className="mt-6 text-sm text-muted">
          {c.before}: <a className="underline underline-offset-4" href="https://cheesymedia.netlify.app" target="_blank" rel="noopener noreferrer">cheesymedia.netlify.app</a> · {c.after}:{" "}
          <a className="underline underline-offset-4" href="https://cheesy-media.netlify.app" target="_blank" rel="noopener noreferrer">cheesy-media.netlify.app</a>{c.liveNote}
        </p>
      </Section>

      <Section id="inainte-si-dupa" white>
        <Eyebrow>{c.baEyebrow}</Eyebrow>
        <H2>{c.baH2}</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{c.baLead}</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <figure>
            <Shot name="before-home" alt={c.beforeAlt} sizes="(min-width: 1024px) 540px, 92vw" />
            <figcaption className="mt-4 flex items-center gap-2 text-[15px] text-muted"><span className="rounded-full bg-ink/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-ink">{c.beforeTag}</span> {c.beforeCaption}</figcaption>
          </figure>
          <figure>
            <Shot name="site-desktop" alt={c.afterAlt} sizes="(min-width: 1024px) 540px, 92vw" />
            <figcaption className="mt-4 flex items-center gap-2 text-[15px] text-muted"><span className="rounded-full bg-orange px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-ink">{c.afterTag}</span> {c.afterCaption}</figcaption>
          </figure>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-8 md:mx-auto md:max-w-xl">
          <figure>
            <Shot name="m-before-home" phone alt={c.phoneBeforeAlt} sizes="(min-width: 768px) 260px, 45vw" />
            <figcaption className="mt-3 text-center text-sm font-semibold text-muted">{c.phoneBefore}</figcaption>
          </figure>
          <figure>
            <Shot name="site-mobile" phone alt={c.phoneAfterAlt} sizes="(min-width: 768px) 260px, 45vw" />
            <figcaption className="mt-3 text-center text-sm font-semibold text-muted">{c.phoneAfter}</figcaption>
          </figure>
        </div>
      </Section>

      <Section id="design" dark>
        <Eyebrow dark>{c.designEyebrow}</Eyebrow>
        <H2 dark>{c.designH2a} <span className="text-orange">{c.designH2b}</span></H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-paper/85">{c.designLead}</p>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {c.palette.map((p) => (
            <li key={p.hex} className="overflow-hidden rounded-2xl border-2 border-paper/15">
              <div className="flex h-24 items-end p-3" style={{ background: p.hex }}>
                <span className={`font-mono text-sm font-semibold ${p.ink ? "text-ink" : "text-paper"}`}>{p.hex}</span>
              </div>
              <div className="bg-paper/5 p-3">
                <p className="font-semibold text-paper">{p.name}</p>
                <p className="mt-0.5 text-sm leading-snug text-paper/70">{p.use}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-paper/15 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-paper/60">{c.headlinesLabel}</p>
            <p className="mt-2 font-serif text-4xl font-extrabold uppercase leading-none tracking-tight text-paper">Bricolage <span className="text-[#FFB21C]">Grotesque</span></p>
            <p className="mt-2 text-sm text-paper/70">{c.headlinesNote}</p>
          </div>
          <div className="rounded-2xl border-2 border-paper/15 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-paper/60">{c.textLabel}</p>
            <p className="mt-2 text-3xl font-medium text-paper">{c.textSample}</p>
            <p className="mt-2 text-sm text-paper/70">{c.textNote}</p>
          </div>
        </div>
        <ol className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {c.design.map(([t, d], i) => (
            <li key={t} className="flex gap-4">
              <span className="font-serif text-3xl font-extrabold leading-none text-orange">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-serif text-xl font-extrabold text-paper">{t}</h3>
                <p className="mt-1.5 text-[16px] leading-relaxed text-paper/80">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="pagini">
        <Eyebrow>{c.pagesEyebrow}</Eyebrow>
        <H2>{c.pagesH2}</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{c.pagesLead}</p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {c.pages.map((p) => (
            <figure key={p.name}>
              <Shot name={p.name} alt={p.alt} sizes="(min-width: 1152px) 540px, (min-width: 768px) 45vw, 92vw" />
              <figcaption className="mt-4 font-serif text-lg font-extrabold">{p.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-8">
          {c.phones.map((p, i) => (
            <figure key={p.name} className={i === 2 ? "col-span-2 mx-auto w-1/2 sm:col-span-1 sm:w-full" : undefined}>
              <Shot name={p.name} phone alt={p.alt} sizes="(min-width: 640px) 30vw, 45vw" />
              <figcaption className="mt-3 text-center text-sm font-semibold text-muted">{p.label}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section id="google-si-ai" white>
        <Eyebrow>{c.aiEyebrow}</Eyebrow>
        <H2>{c.aiH2}</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{c.aiLead}</p>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {c.aiSteps.map((s, i) => (
            <li key={s.t} className="flex flex-col rounded-3xl border-2 border-ink bg-paper p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-serif text-sm font-extrabold text-paper">{i + 1}</span>
                <h3 className="font-serif text-xl font-extrabold">{s.t}</h3>
              </div>
              <dl className="mt-4 space-y-3 text-[16px] leading-relaxed">
                <div><dt className="text-xs font-bold uppercase tracking-wider text-muted">{c.beforeTag}</dt><dd className="text-muted">{s.before}</dd></div>
                <div className="flex gap-2"><Check aria-hidden className="mt-1 h-5 w-5 shrink-0 text-orange-ink" /><div><dt className="text-xs font-bold uppercase tracking-wider text-orange-ink">{c.afterTag}</dt><dd className="text-ink">{s.after}</dd></div></div>
              </dl>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl rounded-2xl bg-paper p-5 text-[16px] leading-relaxed text-muted">
          <strong className="text-ink">{c.dontClaimLabel}</strong> {c.dontClaim}
        </p>
      </Section>

      <Section id="rezultat-masurat">
        <Eyebrow>{c.resultEyebrow}</Eyebrow>
        <H2>{c.resultH2}</H2>
        <p className="mt-3 max-w-3xl text-muted">{c.resultLead}</p>
        <dl className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {proof.cheesy.lighthouse.map((s) => (
            <div key={s.name.en} className="rounded-2xl border-2 border-ink bg-canvas p-5">
              <dt className="text-[15px] font-semibold text-muted">{s.name[lang]}</dt>
              <dd className="mt-1 font-serif text-4xl font-extrabold">{s.before === s.after ? <>{s.after}</> : <><span className="text-muted">{s.before}</span> <span className="text-orange-ink">→ {s.after}</span></>}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <LighthouseReport which="inainte" alt={c.lhBeforeAlt} caption={c.lhBeforeCaption} />
          <LighthouseReport which="dupa" alt={c.lhAfterAlt} caption={c.lhAfterCaption} />
        </div>
        <p className="mt-6 max-w-3xl text-muted">{c.noTraffic}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={href("redesign", lang)} arrow>{c.redesignCta}</Button>
          <Button href={href("audit", lang)} variant="ghost">{c.auditCta}</Button>
        </div>
      </Section>
      <CtaBand lang={lang} />
    </>
  );
}
