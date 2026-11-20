import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs, Button, CtaBand, Eyebrow, FAQ, H2, Section } from "@/components/ui";
import { Guides } from "@/components/Guides";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site-config";
import { alternates, href, pageName, type Lang, type PageKey } from "@/lib/site-map";

/**
 * The four service pages (redesign, new website, SEO and AI visibility, maintenance), once each, in either language.
 * Article guides and article links are Romanian-only, because the articles are.
 */

const linkCls = "font-semibold text-brass-dark underline underline-offset-4";
const ui = {
  ro: { quote: "Cere o ofertă", audit: "Audit gratuit AI", auditLong: "Cere auditul gratuit" },
  en: { quote: "Get a quote", audit: "Free AI audit", auditLong: "Get the free audit" },
} as const;

type Meta = { title: string; description: string };
const meta = (key: PageKey, lang: Lang, m: Meta): Metadata => ({ title: m.title, description: m.description, alternates: alternates(key, lang) });

/** Breadcrumb + Service schema + the breadcrumb trail, shared by every service page. */
function ServiceHead({ k, lang, schemaName, schemaDescription }: { k: PageKey; lang: Lang; schemaName: string; schemaDescription: string }) {
  const crumbs = [
    { name: pageName("home", lang), path: href("home", lang) },
    { name: pageName("services", lang), path: href("services", lang) },
    { name: pageName(k, lang), path: href(k, lang) },
  ];
  return (
    <>
      <JsonLd data={[breadcrumb(crumbs), serviceSchema(schemaName, schemaDescription, href(k, lang))]} />
      <Breadcrumbs lang={lang} items={[{ name: crumbs[0].name, href: crumbs[0].path }, { name: crumbs[1].name, href: crumbs[1].path }, { name: crumbs[2].name }]} />
    </>
  );
}

const Check = ({ items }: { items: readonly string[] }) => (
  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
    {items.map((t) => <li key={t} className="flex gap-3 rounded-md border border-line bg-white p-4"><span aria-hidden className="text-brass-dark">✓</span>{t}</li>)}
  </ul>
);
const Cards = ({ items, cols = "md:grid-cols-2" }: { items: readonly (readonly [string, string])[]; cols?: string }) => (
  <div className={`mt-8 grid gap-6 ${cols}`}>
    {items.map(([t, d]) => <div key={t} className="rounded-md border border-line p-6"><h3 className="font-serif text-xl font-bold">{t}</h3><p className="mt-2 leading-relaxed text-slate-ink">{d}</p></div>)}
  </div>
);

/* ---------------- Redesign ---------------- */

const redesign = {
  ro: {
    meta: { title: "Redesign website fără pierderi în Google", description: "Redesign modern pentru clinici, cabinete și afaceri locale: design nou, viteză, migrare sigură cu redirecturi 301 și conținut pregătit pentru AI. Cere o ofertă." },
    schemaName: "Redesign de website", schemaDescription: "Redesign modern de website, cu migrare sigură și conținut pregătit pentru motoare AI.",
    h1: "Redesign de website pentru felul în care caută oamenii (și AI-ul) astăzi.",
    lead: "Un site vechi te costă încredere și clienți. Îl refac modern, rapid și clar, fără să pierzi ce ai câștigat deja în Google.",
    signsH2: "Semne că site-ul tău e depășit",
    signs: ["Nu arată bine pe telefon", "Se încarcă greu", "Nu e clar ce oferi sau cum te contactează cineva", "Designul pare vechi", "E greu de actualizat", "Nu are date structurate pentru Google și AI", "Nu respectă bazele accesibilității"],
    signsMore: <>Mai multe detalii în articolul <Link className={linkCls} href="/articole/10-semne-ca-site-ul-tau-este-depasit">10 semne că site-ul tău e depășit</Link>.</> as ReactNode,
    includedH2: "Ce include",
    included: [
      ["Audit de UX și de conținut", "Văd ce funcționează, ce nu și ce caută de fapt vizitatorii."],
      ["Design nou", "Coerent, calm și credibil, potrivit domeniului tău."],
      ["Reconstruire modernă", "Rapid, responsive, accesibil, cu cod curat."],
      ["Conținut pregătit pentru AI", "Pagini cu răspunsuri clare la întrebările clienților și date structurate."],
      ["Migrare sigură", "Redirecturi 301, verificarea titlurilor și monitorizare după lansare."],
      ["Predare și instruire", "Știi cum actualizezi site-ul și cui te adresezi dacă ai nevoie de ajutor."],
    ] as [string, string][],
    seoH2: "Redesign fără să-ți pierzi SEO-ul",
    seo: "Cea mai mare teamă la un redesign e că pozițiile din Google dispar. Se întâmplă de obicei când adresele se schimbă fără redirecturi sau când conținutul care aducea trafic dispare. Fac un inventar al paginilor importante înainte, le mapez pe cele noi și verific totul după lansare.",
    seoMore: <Link className={linkCls} href="/articole/redesign-site-fara-sa-pierzi-pozitiile-din-google">Citește ghidul complet →</Link> as ReactNode,
    exampleH2: "Un exemplu real",
    example: "Am refăcut site-ul Cheesy Media, o agenție foto-video din Cluj-Napoca: de la o singură pagină lungă la un site cu pagini dedicate, pachete, FAQ și scor 100 în Lighthouse.",
    exampleCta: "Vezi înainte și după",
    faq: [
      { q: "Voi pierde pozițiile din Google după redesign?", a: "Nu, dacă migrarea e făcută corect. Păstrez adresele care aduc trafic sau le redirecționez cu 301 către paginile noi, verific titlurile și conținutul important și urmăresc indexarea după lansare." },
      { q: "Cât durează un redesign?", a: "Depinde de numărul de pagini și de conținut. Îți dau un calendar concret în ofertă, după ce văd site-ul actual și ce vrei să schimbi." },
      { q: "Pot edita singur site-ul după aceea?", a: "Da. Alegem împreună soluția: un site în cod cu pagini ușor de actualizat sau Webflow, dacă vrei să editezi vizual. Îți arăt cum se face la predare." },
      { q: "Site-ul meu actual e pe WordPress. Se poate?", a: "Da. Multe site-uri din România sunt pe WordPress. Mut conținutul și adresele importante pe noua platformă, fără să pierzi ce funcționează." },
      { q: "Cât costă?", a: "Nu afișez prețuri fixe, pentru că fiecare site e diferit. Primești o ofertă clară după o discuție scurtă." },
    ],
    ctaTitle: "Vrei să vezi ce se poate schimba la site-ul tău?", ctaText: "Începe cu un audit gratuit: îți spun ce ar aduce cel mai mult impact, fără obligații.",
  },
  en: {
    meta: { title: "Website redesign without losing rankings", description: "Modern redesign for clinics, law firms and local businesses in Romania: new design, speed, safe migration with 301 redirects and AI-ready content. Get a quote." },
    schemaName: "Website redesign", schemaDescription: "Modern website redesign with a safe migration and content ready for AI engines.",
    h1: "A website redesign for the way people (and AI) search today.",
    lead: "An outdated site costs you trust and clients. I rebuild it modern, fast and clear, without losing what you've already earned on Google.",
    signsH2: "Signs your website is outdated",
    signs: ["It doesn't look right on a phone", "It loads slowly", "It's not clear what you offer or how to contact you", "The design looks dated", "It's hard to update", "It has no structured data for Google and AI", "It misses the basics of accessibility"],
    signsMore: null as ReactNode,
    includedH2: "What's included",
    included: [
      ["UX and content audit", "I see what works, what doesn't and what visitors are actually looking for."],
      ["A new design", "Consistent, calm and credible, right for your field."],
      ["A modern rebuild", "Fast, responsive, accessible, with clean code."],
      ["AI-ready content", "Pages with clear answers to your clients' questions, and structured data."],
      ["A safe migration", "301 redirects, title checks and monitoring after launch."],
      ["Handover and training", "You know how to update the site and who to ask if you need help."],
    ] as [string, string][],
    seoH2: "A redesign that keeps your SEO",
    seo: "The biggest fear with a redesign is that your Google rankings disappear. That usually happens when addresses change without redirects, or when the content that brought traffic is removed. I take stock of the important pages first, map them to the new ones and check everything after launch.",
    seoMore: null as ReactNode,
    exampleH2: "A real example",
    example: "I rebuilt the site of Cheesy Media, a photo and video agency in Cluj-Napoca: from one long page to a site with dedicated pages, packages, an FAQ and a Lighthouse score of 100.",
    exampleCta: "See before and after",
    faq: [
      { q: "Will I lose my Google rankings after a redesign?", a: "Not if the migration is done right. I keep the addresses that bring traffic or redirect them with 301s to the new pages, check titles and key content, and watch indexing after launch." },
      { q: "How long does a redesign take?", a: "It depends on the number of pages and the content. You get a concrete timeline in the offer, once I've seen your current site and what you want to change." },
      { q: "Can I edit the site myself afterwards?", a: "Yes. We pick the right setup together: a coded site with pages that are easy to update, or Webflow if you want to edit visually. I show you how at handover." },
      { q: "My current site is on WordPress. Is that a problem?", a: "No. Many sites in Romania run on WordPress. I move the content and the important addresses to the new platform without losing what works." },
      { q: "How much does it cost?", a: "I don't publish fixed prices, because every site is different. You get a clear offer after a short call." },
    ],
    ctaTitle: "Want to see what could change on your site?", ctaText: "Start with a free audit: I'll tell you what would make the biggest difference, with no obligation.",
  },
};

export const redesignMetadata = (lang: Lang) => meta("redesign", lang, redesign[lang].meta);

export function RedesignPage({ lang }: { lang: Lang }) {
  const c = redesign[lang];
  return (
    <>
      <Section id="redesign-de-website">
        <ServiceHead k="redesign" lang={lang} schemaName={c.schemaName} schemaDescription={c.schemaDescription} />
        <Eyebrow>{pageName("redesign", lang)}</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">{c.h1}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">{c.lead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={href("contact", lang)}>{ui[lang].quote}</Button>
          <Button href={href("audit", lang)} variant="ghost">{ui[lang].audit}</Button>
        </div>
      </Section>
      <Section id="semne-ca-site-ul" tint>
        <H2>{c.signsH2}</H2>
        <Check items={c.signs} />
        {c.signsMore && <p className="mt-6 text-slate-ink">{c.signsMore}</p>}
      </Section>
      <Section id="ce-include">
        <H2>{c.includedH2}</H2>
        <Cards items={c.included} />
      </Section>
      <Section id="fara-pierderi-seo" tint>
        <H2>{c.seoH2}</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-ink">{c.seo}</p>
        {c.seoMore && <p className="mt-4">{c.seoMore}</p>}
      </Section>
      <Section id="un-exemplu-real">
        <H2>{c.exampleH2}</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-ink">{c.example}</p>
        <div className="mt-6"><Button href={href("cheesy", lang)} variant="ghost">{c.exampleCta}</Button></div>
      </Section>
      <Section id="intrebari" tint><FAQ items={c.faq} lang={lang} /></Section>
      <CtaBand lang={lang} title={c.ctaTitle} text={c.ctaText} />
    </>
  );
}

/* ---------------- New website ---------------- */

const newSite = {
  ro: {
    meta: { title: "Creare site web pentru clinici și afaceri locale", description: "Creare site web rapid pentru clinici, avocați și afaceri locale: site de prezentare sau magazin online, cu SEO inclus. Află cât costă un site." },
    schemaName: "Creare site web", schemaDescription: "Creare site de prezentare sau magazin online, rapid și pregătit pentru Google și motoare AI, în Next.js, Webflow, Shopify sau Medusa.",
    h1: <>Creare site web: rapid, clar și construit să fie <em className="font-accent font-normal tracking-normal text-orange-ink">găsit</em> din prima zi.</> as ReactNode,
    lead: "Realizare site de prezentare sau magazin online pentru clinici, cabinete de avocatură și afaceri locale din România. Fără șabloane generice: îl construiesc eu, de la structură la SEO.",
    includedH2: "Ce include crearea site-ului",
    included: ["Strategie și structura paginilor", "Design și construire", "Responsive pe orice ecran", "Bazele SEO și date structurate (schema)", "Analiză (Google Tag Manager / GA4) cu consimțământ cookie", "Formulare de contact, programări, integrări", "Predare și instruire", "Opțional: versiuni în engleză, franceză, germană"],
    platformsH2: "Platforme: ce aleg și când", platformsLead: "Aleg platforma după afacerea ta, nu după ce îmi place mie.",
    tableCaption: "Platforme disponibile și când se potrivesc", cols: ["Platformă", "Potrivită pentru", "De ce"],
    platforms: [
      ["Next.js (cod propriu)", "Clinici, cabinete de avocatură, servicii locale, orice site unde contează viteza, SEO-ul și pregătirea pentru AI.", "Control complet asupra codului, vitezei și datelor structurate. Cel mai flexibil."],
      ["Webflow", "Clienți care vor să-și editeze singuri site-ul, vizual.", "CMS vizual, rezultat curat, fără întreținere de cod. Verific costurile de găzduire și limitele pentru limba română înainte de ofertă."],
      ["Shopify", "Magazine online standard care vor să pornească repede.", "Checkout, plăți și aplicații mature. Stabilim din start particularitățile din România: plăți, facturare, curierat."],
      ["Medusa (comerț headless)", "Magazine personalizate sau B2B, cu logică aparte.", "Open-source și complet personalizabil, cu vitrină în Next.js. Cere mai multă inginerie, deci e pentru nevoi mai speciale."],
    ] as [string, string, string][],
    shops: "Dacă ai un magazin online, stabilim din start ce ține de piața din România: procesatorul de plăți, programul de facturare, curierii, consimțământul pentru cookie-uri și paginile de informare cerute consumatorilor. Verific fiecare punct cu tine, nu presupun.",
    costH2: "Cât costă un site? Ce influențează prețul",
    cost1: "Nu afișez un preț fix, pentru că un site de prezentare cu cinci pagini și un magazin online cu plăți și facturare sunt proiecte diferite. Prețul depinde de trei lucruri: numărul de pagini și cât conținut scriem împreună, funcționalitățile (programări online, formulare, mai multe limbi) și platforma aleasă.",
    cost2: (l: Lang) => <>Primești o ofertă clară după o discuție de 30 de minute. Dacă ai deja un site și vrei doar să-l modernizezi, vezi <a href={href("redesign", l)} className="font-semibold text-brass-dark underline-offset-4 hover:underline">redesign de website</a>. Dacă vrei să știi întâi unde ești acum, începe cu <a href={href("audit", l)} className="font-semibold text-brass-dark underline-offset-4 hover:underline">auditul SEO gratuit</a>. Iar ca să vezi un proiect real, citește <a href={href("cheesy", l)} className="font-semibold text-brass-dark underline-offset-4 hover:underline">studiul de caz Cheesy Media</a>.</>,
    guides: ["ce-este-seo", "10-semne-ca-site-ul-tau-este-depasit", "redesign-site-fara-sa-pierzi-pozitiile-din-google", "google-business-profile-ghid"] as string[] | null,
    faq: [
      { q: "Ce platformă să aleg?", a: "Pentru clinici, cabinete și servicii locale recomand de regulă un site în Next.js, pentru viteză și control. Dacă vrei să editezi singur vizual, Webflow. Pentru un magazin standard, Shopify. Alegem împreună, după nevoile tale." },
      { q: "Site-ul va fi găsit în Google?", a: "Îl construiesc cu bazele SEO făcute corect: structură, titluri, viteză, date structurate și sitemap. Pozițiile depind apoi de concurență și de timp, iar pentru ele există colaborarea lunară de SEO." },
      { q: "Cine deține site-ul?", a: "Tu. Domeniul, conținutul și contul de găzduire sunt pe numele tău. Stabilim clar asta în ofertă." },
      { q: "Se poate în engleză, franceză sau germană?", a: "Da, ca opțiune suplimentară. Fiecare limbă primește conținut și SEO propriu, nu doar traducere automată." },
      { q: "Cât costă un site web?", a: "Prețul unui site depinde de numărul de pagini, de funcționalități (programări, formulare, magazin) și de platformă. Nu afișez prețuri fixe: după o discuție scurtă primești o ofertă clară, cu tot ce include." },
      { q: "Cât durează realizarea unui site de prezentare?", a: "Depinde de câte pagini are și de cât de repede avem textele și imaginile. Îți dau un calendar pe etape în ofertă, iar tu vezi progresul la fiecare etapă." },
    ],
    ctaTitle: "Pornești un site nou?", ctaText: `Primești gratuit un audit al prezenței tale online actuale și o direcție clară, în maximum ${site.reply.ro}.`,
  },
  en: {
    meta: { title: "Website design for businesses in Romania", description: "A fast new website for clinics, law firms and local businesses in Romania: brochure site or online shop, with SEO built in. See what shapes the price." },
    schemaName: "Website design", schemaDescription: "A new brochure site or online shop, fast and ready for Google and AI engines, in Next.js, Webflow, Shopify or Medusa.",
    h1: <>A new website: fast, clear and built to be <em className="font-accent font-normal tracking-normal text-orange-ink">found</em> from day one.</> as ReactNode,
    lead: "A brochure site or an online shop for clinics, law firms and local businesses in Romania. No generic templates: I build it myself, from structure to SEO.",
    includedH2: "What's included",
    included: ["Strategy and page structure", "Design and build", "Responsive on every screen", "SEO basics and structured data (schema)", "Analytics (Google Tag Manager / GA4) with cookie consent", "Contact forms, booking, integrations", "Handover and training", "Optional: versions in English, French, German"],
    platformsH2: "Platforms: what I choose and when", platformsLead: "I choose the platform for your business, not for my taste.",
    tableCaption: "Available platforms and when they fit", cols: ["Platform", "Good for", "Why"],
    platforms: [
      ["Next.js (custom code)", "Clinics, law firms, local services: any site where speed, SEO and AI-readiness matter.", "Full control over code, speed and structured data. The most flexible option."],
      ["Webflow", "Clients who want to edit the site themselves, visually.", "A visual CMS, a clean result, no code to maintain. I check hosting costs and Romanian-language limits before the offer."],
      ["Shopify", "Standard online shops that want to start quickly.", "Mature checkout, payments and apps. We settle the Romanian specifics from the start: payments, invoicing, couriers."],
      ["Medusa (headless commerce)", "Custom or B2B shops with their own logic.", "Open-source and fully customisable, with a Next.js storefront. It needs more engineering, so it's for special needs."],
    ] as [string, string, string][],
    shops: "If you run an online shop, we settle the Romanian market specifics from the start: the payment processor, the invoicing software, couriers, cookie consent and the information pages consumers are entitled to. I check each point with you rather than assume.",
    costH2: "How much does a website cost? What shapes the price",
    cost1: "I don't publish a fixed price, because a five-page brochure site and an online shop with payments and invoicing are different projects. The price depends on three things: the number of pages and how much copy we write together, the features (online booking, forms, several languages) and the platform.",
    cost2: (l: Lang) => <>You get a clear offer after a 30-minute call. If you already have a site and only want to modernise it, see <a href={href("redesign", l)} className="font-semibold text-brass-dark underline-offset-4 hover:underline">website redesign</a>. To know where you stand first, start with the <a href={href("audit", l)} className="font-semibold text-brass-dark underline-offset-4 hover:underline">free audit</a>. And to see a real project, read the <a href={href("cheesy", l)} className="font-semibold text-brass-dark underline-offset-4 hover:underline">Cheesy Media case study</a>.</>,
    guides: null as string[] | null,
    faq: [
      { q: "Which platform should I choose?", a: "For clinics, law firms and local services I usually recommend a Next.js site, for speed and control. If you want to edit visually yourself, Webflow. For a standard shop, Shopify. We choose together, based on what you need." },
      { q: "Will the site be found on Google?", a: "I build it with the SEO basics done right: structure, titles, speed, structured data and a sitemap. Rankings then depend on competition and time, which is what monthly SEO is for." },
      { q: "Who owns the website?", a: "You do. The domain, the content and the hosting account are in your name. We state that clearly in the offer." },
      { q: "Can it be in English, French or German?", a: "Yes, as an add-on. Each language gets its own content and SEO, not just an automatic translation." },
      { q: "How much does a website cost?", a: "It depends on the number of pages, the features (booking, forms, a shop) and the platform. I don't publish fixed prices: after a short call you get a clear offer with everything it includes." },
      { q: "How long does a brochure site take?", a: "It depends on how many pages it has and how quickly we have the copy and images. You get a stage-by-stage timeline in the offer, and you see progress at every stage." },
    ],
    ctaTitle: "Starting a new website?", ctaText: `Get a free audit of your current online presence and a clear direction, within ${site.reply.en}.`,
  },
};

export const newSiteMetadata = (lang: Lang) => meta("newSite", lang, newSite[lang].meta);

export function NewSitePage({ lang }: { lang: Lang }) {
  const c = newSite[lang];
  return (
    <>
      <Section id="creare-de-website">
        <ServiceHead k="newSite" lang={lang} schemaName={c.schemaName} schemaDescription={c.schemaDescription} />
        <Eyebrow>{pageName("newSite", lang)}</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">{c.h1}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">{c.lead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={href("contact", lang)}>{ui[lang].quote}</Button>
          <Button href={href("audit", lang)} variant="ghost">{ui[lang].audit}</Button>
        </div>
      </Section>
      <Section id="ce-include" tint>
        <H2>{c.includedH2}</H2>
        <Check items={c.included} />
      </Section>
      <Section id="platforme-ce-aleg-si">
        <H2>{c.platformsH2}</H2>
        <p className="mt-4 max-w-3xl text-slate-ink leading-relaxed">{c.platformsLead}</p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left align-top">
            <caption className="sr-only">{c.tableCaption}</caption>
            <thead><tr className="border-b border-navy/20 text-sm uppercase tracking-wider text-slate-ink">
              {c.cols.map((col, i) => <th key={col} scope="col" className={i < 2 ? "py-3 pr-4" : "py-3"}>{col}</th>)}</tr></thead>
            <tbody className="divide-y divide-line">
              {c.platforms.map(([a, b, d]) => (
                <tr key={a}><th scope="row" className="py-4 pr-4 font-semibold">{a}</th><td className="py-4 pr-4 text-slate-ink">{b}</td><td className="py-4 text-slate-ink">{d}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-3xl text-slate-ink leading-relaxed">{c.shops}</p>
      </Section>
      <Section id="cat-costa-un-site" tint>
        <H2>{c.costH2}</H2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-ink">
          <p>{c.cost1}</p>
          <p>{c.cost2(lang)}</p>
        </div>
      </Section>
      {c.guides && <Section id="ghiduri" tint><Guides slugs={c.guides} /></Section>}
      <Section id="intrebari"><FAQ items={c.faq} lang={lang} /></Section>
      <CtaBand lang={lang} title={c.ctaTitle} text={c.ctaText} />
    </>
  );
}

/* ---------------- SEO and AI visibility ---------------- */

const seo = {
  ro: {
    meta: { title: "Optimizare SEO și vizibilitate în ChatGPT (GEO)", description: `Servicii SEO pentru afaceri locale din România: optimizare SEO, SEO local și vizibilitate în ChatGPT, Gemini și Perplexity. Audit SEO gratuit în ${site.reply.ro}.` },
    schemaName: "SEO și optimizare pentru motoare AI", schemaDescription: "Audit, optimizare tehnică și de conținut și colaborare lunară pentru vizibilitate în Google și în răspunsurile ChatGPT, Gemini, Claude și Perplexity.",
    eyebrow: "Serviciul principal",
    h1: <>Optimizare SEO: fii găsit pe Google și recomandat de <em className="font-accent font-normal tracking-normal text-orange-ink">AI</em>.</> as ReactNode,
    lead: "Tot mai mulți clienți întreabă un asistent AI „cui să mă adresez?”. Ca consultant SEO, te ajut să apari în acele răspunsuri și în Google, cu un proces pe care îl poți măsura, de la optimizarea site-ului la SEO local.",
    changedH2: "Ce s-a schimbat",
    changed1: "Până acum, un client căuta în Google și compara zece rezultate. Acum poate întreba direct ChatGPT, Gemini sau Perplexity și primi câteva nume, cu explicații. Dacă afacerea ta nu e înțeleasă și citată de acele sisteme, e invizibilă exact când se ia decizia.",
    changed2: <><strong className="text-navy">GEO / AEO</strong> (Generative / Answer Engine Optimization) înseamnă să faci afacerea ușor de înțeles și de citat pentru asistenții AI. Se sprijină pe SEO clasic, dar adaugă claritate, date structurate și consecvență a informațiilor despre tine.</> as ReactNode,
    vsH2: "SEO clasic și vizibilitate în AI", vsCaption: "Diferențe între SEO clasic și optimizarea pentru AI", vsCols: ["SEO clasic", "Vizibilitate în AI (GEO)"],
    vs: [
      ["Ce urmărește", "Poziții în lista de rezultate", "Să fii menționat și descris corect în răspuns"],
      ["Ce contează", "Cuvinte-cheie, linkuri, viteză, experiență", "Răspunsuri clare, date structurate, informații consecvente, recenzii și mențiuni"],
      ["Cum se măsoară", "Poziții, clickuri, trafic", "Test periodic al întrebărilor reale: apari? pe ce loc? cum ești descris?"],
    ] as [string, string, string][],
    doH2: "Servicii SEO: ce fac concret",
    do: [
      ["Audit de vizibilitate AI", "Testez întrebările reale ale clienților tăi în ChatGPT, Gemini, Claude, Perplexity și răspunsurile AI din Google. Notez dacă ești menționat, pe ce loc, cum ești descris, dacă informațiile sunt corecte și ce concurenți apar."],
      ["Claritatea identității", "Același nume, descriere și date de contact pe site, în directoare, pe LinkedIn și pe profilul Google al afacerii."],
      ["Date structurate", "Schema pentru organizație, serviciu, FAQ, articole și persoană (JSON-LD), pentru ca motoarele să înțeleagă exact cine ești și ce faci."],
      ["Conținut care răspunde", "Pagini care răspund direct la întrebările pacienților sau clienților, în limbaj clar și ușor de citat."],
      ["Optimizare site (tehnic)", "Indexare, viteză, Core Web Vitals, sitemap, robots.txt care permite crawlerele AI relevante și fișier llms.txt."],
      ["Autoritate și mențiuni", "Recenzii, directoare, prezență în surse de încredere. Aici se câștigă pe termen lung."],
      ["SEO local", "Profilul Google al afacerii (Google Business Profile), citări locale în directoare și un proces simplu pentru recenzii, ca să apari când oamenii caută „în zona mea”."],
      ["Monitorizare lunară", "Retestez întrebările și îți trimit un raport în limbaj simplu: ce s-a schimbat și ce urmează."],
    ] as [string, string][],
    realH2: "Așteptări realiste",
    real1: "Răspunsurile AI nu sunt la fel pentru toată lumea și se pot schimba de la o zi la alta. Modelele se actualizează în ritmul lor, iar rezultatele apar în săptămâni sau luni. Nimeni serios nu poate garanta un loc anume.",
    real2: "Ce promit: măsurăm de unde pornești, schimbăm ce influențează recomandările și îți arăt progresul, cu date.",
    togetherH2: "Cum putem lucra împreună",
    together: [
      ["Audit gratuit", `Unic, manual, livrat în maximum ${site.reply.ro}. Fără obligații.`],
      ["Proiect de implementare", "Aplic corecturile din audit, singur sau ca parte dintr-un redesign sau un site nou."],
      ["Colaborare lunară SEO/GEO", "Conținut, întreținere tehnică, monitorizare și raport lunar."],
    ] as [string, string][],
    togetherNote: "Pentru implementare și colaborare lunară primești o ofertă clară, nu prețuri fixe.",
    auditH2: "Cum arată un audit",
    auditLead: <>Format orientativ. Tabelul de mai jos este un <strong>exemplu ilustrativ</strong>, nu date reale despre vreo afacere.</> as ReactNode,
    auditCaption: "Exemplu de format al unui audit de vizibilitate AI",
    auditCols: ["Întrebare testată", "Menționat?", "Poziție", "Ton", "Corect?"],
    auditRows: [
      ["„Clinică stomatologică bună în [oraș]”", "Da / Nu", "Poziția în răspuns", "+ / 0 / −", "Da / Nu"],
      ["„Avocat pentru [domeniu] în [oraș]”", "Da / Nu", "Poziția în răspuns", "+ / 0 / −", "Da / Nu"],
    ],
    guidesTitle: "Ghiduri SEO și vizibilitate în AI",
    guides: ["ce-este-seo", "google-business-profile-ghid", "ce-este-geo-optimizare-pentru-motoare-ai", "cum-verifici-daca-ai-iti-mentioneaza-afacerea", "schema-markup-pentru-clinici-si-cabinete"] as string[] | null,
    faqMore: <>Vrei să citești mai mult? <Link className={linkCls} href="/articole/ce-este-geo-optimizare-pentru-motoare-ai">Ce este GEO și cum diferă de SEO</Link>.</> as ReactNode,
    faq: [
      { q: "Ce face un consultant SEO, concret?", a: "Verific cum te găsesc oamenii acum, repar ce blochează site-ul tehnic, structurez paginile pe întrebările reale ale clienților, îngrijesc profilul Google și măsor lunar ce s-a schimbat. Totul explicat în limbaj simplu." },
      { q: "Ce este GEO sau AEO?", a: "Generative Engine Optimization (GEO) sau Answer Engine Optimization (AEO) înseamnă să faci o afacere ușor de înțeles și de citat pentru asistenții AI, ca ChatGPT, Gemini, Claude sau Perplexity. Se bazează pe SEO, dar pune accent pe răspunsuri clare, date structurate și informații consecvente în mai multe surse." },
      { q: "Poți garanta că ChatGPT mă va recomanda?", a: "Nu. Răspunsurile AI variază, iar modelele se actualizează în ritmul lor. Pot măsura unde ești acum, îmbunătăți ce influențează recomandările și arăta schimbarea în timp." },
      { q: "După cât timp se văd rezultatele?", a: "De obicei în săptămâni sau luni. Îmbunătățirile tehnice se văd mai repede, iar autoritatea (recenzii, mențiuni, conținut) se construiește în timp." },
      { q: "Auditul gratuit chiar e gratuit?", a: `Da. E un audit manual, livrat în maximum ${site.reply.ro}, fără obligația de a continua cu mine.` },
      { q: "Trebuie să am site nou pentru asta?", a: "Nu neapărat. Uneori ajung corecturi punctuale. Dacă site-ul e prea vechi sau blocat tehnic, îți spun cinstit și propun un redesign." },
      { q: "Lucrezi și cu clinici și cabinete de avocatură?", a: "Da, acestea sunt domeniile mele principale. Pentru ele nu fac promisiuni medicale sau juridice în numele tău: conținutul de specialitate îl aprobi tu." },
    ],
  },
  en: {
    meta: { title: "SEO in Romania and visibility in ChatGPT (GEO)", description: `SEO for local businesses in Romania: search optimisation, local SEO and visibility in ChatGPT, Gemini and Perplexity. Free SEO audit within ${site.reply.en}.` },
    schemaName: "SEO and optimisation for AI engines", schemaDescription: "Audit, technical and content optimisation and monthly work for visibility on Google and in ChatGPT, Gemini, Claude and Perplexity answers.",
    eyebrow: "Main service",
    h1: <>SEO: get found on Google and recommended by <em className="font-accent font-normal tracking-normal text-orange-ink">AI</em>.</> as ReactNode,
    lead: "More and more clients ask an AI assistant “who should I go to?”. As an SEO consultant in Romania, I help you show up in those answers and on Google, with a process you can measure, from site optimisation to local SEO.",
    changedH2: "What has changed",
    changed1: "Until recently, a client searched on Google and compared ten results. Now they can ask ChatGPT, Gemini or Perplexity directly and get a few names, with reasons. If those systems don't understand and cite your business, you're invisible at the exact moment the decision is made.",
    changed2: <><strong className="text-navy">GEO / AEO</strong> (Generative / Answer Engine Optimization) means making your business easy for AI assistants to understand and quote. It builds on classic SEO and adds clarity, structured data and consistent information about you.</> as ReactNode,
    vsH2: "Classic SEO and AI visibility", vsCaption: "Differences between classic SEO and AI optimisation", vsCols: ["Classic SEO", "AI visibility (GEO)"],
    vs: [
      ["The goal", "Rankings in the results list", "Being mentioned, and described correctly, in the answer"],
      ["What matters", "Keywords, links, speed, experience", "Clear answers, structured data, consistent information, reviews and mentions"],
      ["How it's measured", "Rankings, clicks, traffic", "Regular tests of real questions: do you appear? where? how are you described?"],
    ] as [string, string, string][],
    doH2: "SEO services: what I actually do",
    do: [
      ["AI visibility audit", "I test your clients' real questions in ChatGPT, Gemini, Claude, Perplexity and Google's AI answers. I note whether you're mentioned, where, how you're described, whether the details are correct and which competitors appear."],
      ["A clear identity", "The same name, description and contact details on the site, in directories, on LinkedIn and on your Google Business Profile."],
      ["Structured data", "Schema for the organisation, services, FAQ, articles and people (JSON-LD), so search engines understand exactly who you are and what you do."],
      ["Content that answers", "Pages that answer your patients' or clients' questions directly, in clear language that's easy to quote."],
      ["Technical optimisation", "Indexing, speed, Core Web Vitals, sitemap, a robots.txt that lets the relevant AI crawlers in, and an llms.txt file."],
      ["Authority and mentions", "Reviews, directories, presence in trusted sources. This is where you win in the long run."],
      ["Local SEO", "Your Google Business Profile, local citations in directories and a simple process for reviews, so you show up when people search “near me”."],
      ["Monthly monitoring", "I re-test the questions and send you a report in plain words: what changed and what comes next."],
    ] as [string, string][],
    realH2: "Realistic expectations",
    real1: "AI answers aren't the same for everyone and can change from one day to the next. The models update on their own schedule, and results come in weeks or months. Nobody serious can guarantee a specific spot.",
    real2: "What I promise: we measure where you start, change what influences recommendations, and I show you the progress, with data.",
    togetherH2: "How we can work together",
    together: [
      ["Free audit", `One-off, manual, delivered within ${site.reply.en}. No obligation.`],
      ["Implementation project", "I apply the fixes from the audit, on their own or as part of a redesign or a new site."],
      ["Monthly SEO/GEO", "Content, technical upkeep, monitoring and a monthly report."],
    ] as [string, string][],
    togetherNote: "For implementation and monthly work you get a clear offer, not fixed prices.",
    auditH2: "What an audit looks like",
    auditLead: <>An indicative format. The table below is an <strong>illustrative example</strong>, not real data about any business.</> as ReactNode,
    auditCaption: "Example format of an AI visibility audit",
    auditCols: ["Question tested", "Mentioned?", "Position", "Tone", "Correct?"],
    auditRows: [
      ["“Good dental clinic in [city]”", "Yes / No", "Position in the answer", "+ / 0 / −", "Yes / No"],
      ["“Lawyer for [area] in [city]”", "Yes / No", "Position in the answer", "+ / 0 / −", "Yes / No"],
    ],
    guidesTitle: "",
    guides: null as string[] | null,
    faqMore: null as ReactNode,
    faq: [
      { q: "What does an SEO consultant actually do?", a: "I check how people find you now, fix what's blocking the site technically, structure pages around clients' real questions, look after your Google profile and measure every month what changed. All explained in plain words." },
      { q: "What is GEO or AEO?", a: "Generative Engine Optimization (GEO) or Answer Engine Optimization (AEO) means making a business easy to understand and quote for AI assistants like ChatGPT, Gemini, Claude or Perplexity. It builds on SEO, with more weight on clear answers, structured data and consistent information across sources." },
      { q: "Can you guarantee ChatGPT will recommend me?", a: "No. AI answers vary, and the models update on their own schedule. I can measure where you are now, improve what influences recommendations and show you the change over time." },
      { q: "How long until I see results?", a: "Usually weeks or months. Technical improvements show faster; authority (reviews, mentions, content) builds over time." },
      { q: "Is the free audit really free?", a: `Yes. It's a manual audit, delivered within ${site.reply.en}, with no obligation to continue with me.` },
      { q: "Do I need a new website for this?", a: "Not necessarily. Sometimes targeted fixes are enough. If the site is too old or technically stuck, I'll tell you honestly and suggest a redesign." },
      { q: "Do you work with clinics and law firms?", a: "Yes, those are my main fields. I make no medical or legal promises on your behalf: you approve the specialist content." },
    ],
  },
};

export const seoMetadata = (lang: Lang) => meta("seo", lang, seo[lang].meta);

export function SeoPage({ lang }: { lang: Lang }) {
  const c = seo[lang];
  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <ServiceHead k="seo" lang={lang} schemaName={c.schemaName} schemaDescription={c.schemaDescription} />
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">{c.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-ink">{c.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={href("audit", lang)}>{ui[lang].auditLong}</Button>
            <Button href={href("contact", lang)} variant="ghost">{ui[lang].quote}</Button>
          </div>
        </div>
      </section>

      <Section id="ce-s-a-schimbat">
        <H2>{c.changedH2}</H2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-ink">
          <p>{c.changed1}</p>
          <p>{c.changed2}</p>
        </div>
      </Section>

      <Section id="seo-clasic-si-vizibilitate" tint>
        <H2>{c.vsH2}</H2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left align-top">
            <caption className="sr-only">{c.vsCaption}</caption>
            <thead><tr className="border-b border-navy/20 text-sm uppercase tracking-wider text-slate-ink">
              <th scope="col" className="py-3 pr-4"> </th><th scope="col" className="py-3 pr-4">{c.vsCols[0]}</th><th scope="col" className="py-3">{c.vsCols[1]}</th></tr></thead>
            <tbody className="divide-y divide-line text-slate-ink">
              {c.vs.map(([h, a, b]) => <tr key={h}><th scope="row" className="py-4 pr-4 text-navy">{h}</th><td className="py-4 pr-4">{a}</td><td className="py-4">{b}</td></tr>)}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="ce-fac-concret">
        <H2>{c.doH2}</H2>
        <Cards items={c.do} />
      </Section>

      <Section id="asteptari-realiste" tint>
        <H2>{c.realH2}</H2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-ink">
          <p>{c.real1}</p>
          <p>{c.real2}</p>
        </div>
      </Section>

      <Section id="cum-putem-lucra-impreuna">
        <H2>{c.togetherH2}</H2>
        <Cards items={c.together} cols="md:grid-cols-3" />
        <p className="mt-6 text-slate-ink">{c.togetherNote} <Link className={linkCls} href={href("contact", lang)}>{ui[lang].quote}</Link>.</p>
      </Section>

      <Section id="cum-arata-un-audit" tint>
        <H2>{c.auditH2}</H2>
        <p className="mt-3 max-w-3xl text-slate-ink">{c.auditLead}</p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">{c.auditCaption}</caption>
            <thead><tr className="border-b border-navy/20 text-sm uppercase tracking-wider text-slate-ink">
              {c.auditCols.map((h) => (<th key={h} scope="col" className="py-3 pr-4">{h}</th>))}</tr></thead>
            <tbody className="divide-y divide-line text-slate-ink">
              {c.auditRows.map((r) => (<tr key={r[0]}>{r.map((cell, i) => (i === 0 ? <th key={i} scope="row" className="py-4 pr-4 font-medium text-navy">{cell}</th> : <td key={i} className="py-4 pr-4">{cell}</td>))}</tr>))}
            </tbody>
          </table>
        </div>
      </Section>

      {c.guides && <Section id="ghiduri"><Guides title={c.guidesTitle} slugs={c.guides} /></Section>}

      <Section id="intrebari" tint>
        <FAQ items={c.faq} lang={lang} />
        {c.faqMore && <p className="mt-8 text-slate-ink">{c.faqMore}</p>}
      </Section>
      <CtaBand lang={lang} />
    </>
  );
}

/* ---------------- Maintenance ---------------- */

const maintenance = {
  ro: {
    meta: { title: "Mentenanță site pentru afaceri locale", description: "Mentenanță site pentru clinici, cabinete și afaceri locale: actualizări, backup, securitate, verificări lunare și modificări de conținut. Cere o ofertă." },
    schemaName: "Mentenanță site", schemaDescription: "Mentenanță site: actualizări, backup, securitate, verificări lunare și modificări de conținut pentru afaceri locale.",
    h1: <>Mentenanță site: rapid, sigur și la zi, <em className="font-accent font-normal tracking-normal text-orange-ink">fără grija ta.</em></> as ReactNode,
    lead: "Un site nu se termină la lansare. Am grijă de actualizări, backup și verificări lunare, iar tu îmi trimiți doar ce vrei să schimbi. Pentru clinici, cabinete de avocatură și afaceri locale din România.",
    secondary: "Audit gratuit al site-ului",
    includesH2: "Ce include mentenanța",
    includes: [
      ["Actualizări", "Platforma, temele și modulele (de exemplu WordPress) sau dependențele unui site în cod, testate înainte, ca nimic să nu se strice."],
      ["Backup", "Copii de siguranță regulate, păstrate separat de site, ca să poți reveni oricând la o versiune care funcționa."],
      ["Securitate", "HTTPS valid, acces doar pentru cine trebuie și verificarea problemelor raportate de Google."],
      ["Verificare lunară", "Viteza pe mobil, formularele de contact și programare, linkurile stricate și indexarea în Google Search Console."],
      ["Modificări mici de conținut", "Program, prețuri orientative, echipă, texte și imagini noi. Îmi trimiți ce s-a schimbat, eu actualizez."],
      ["Raport scurt, în limbaj simplu", "Ce am verificat, ce am reparat și ce îți recomand mai departe. Opțional, și testul lunar al vizibilității în asistenții AI."],
    ] as [string, string][],
    whyH2: "De ce contează mentenanța site-ului",
    why1: "Cele mai multe probleme pe care le văd la site-urile locale nu vin dintr-un design prost, ci din lipsa de îngrijire: un formular de programare care nu mai trimite e-mailuri de luni de zile, module neactualizate, certificate expirate sau pagini care s-au încetinit în timp.",
    why2: "Mentenanța regulată le prinde devreme, înainte să coste programări, clienți sau poziții în Google. Și păstrează site-ul pregătit pentru felul în care caută oamenii acum, inclusiv în asistenții AI.",
    why3: (l: Lang) => <>Dacă site-ul are deja probleme mari, încep cu o reparație sau, când merită, cu un <Link className={linkCls} href={href("redesign", l)}>redesign</Link>. Dacă abia îți faci site, mentenanța poate continua direct după <Link className={linkCls} href={href("newSite", l)}>crearea site-ului</Link>.</>,
    guides: ["10-semne-ca-site-ul-tau-este-depasit", "ce-este-seo", "google-business-profile-ghid", "redesign-site-fara-sa-pierzi-pozitiile-din-google"] as string[] | null,
    faq: [
      { q: "Ce înseamnă mentenanța unui site?", a: "Grija de după lansare: actualizări, backup, securitate și verificări regulate, ca site-ul să rămână rapid, sigur și corect. Un site lăsat nesupravegheat se strică încet: module vechi, formulare care nu mai trimit, pagini lente." },
      { q: "Faceți mentenanță și pentru site-uri pe care nu le-ați construit voi?", a: "Da, după o verificare inițială. Mă uit la platformă, la găzduire și la starea site-ului și îți spun cinstit ce se poate întreține și ce ar trebui reparat întâi." },
      { q: "Lucrați cu WordPress?", a: "Da. Multe site-uri din România sunt pe WordPress, iar acolo actualizările și backup-ul contează cel mai mult. Întrețin și site-uri în cod (Next.js), Webflow sau Shopify." },
      { q: "Cât de repede răspundeți dacă e o problemă?", a: `Răspund la orice mesaj în maximum ${site.reply.ro}. Pentru probleme urgente stabilim în ofertă cum mă contactezi.` },
      { q: "Cât costă mentenanța?", a: "Depinde de platformă, de mărimea site-ului și de cât de des se schimbă conținutul. Nu afișez prețuri fixe: primești o ofertă clară după o discuție scurtă." },
    ],
    ctaTitle: "Vrei să ai grijă de site fără să-ți bați capul?", ctaText: "Începe cu o verificare gratuită: îți spun în ce stare e site-ul și ce ar trebui făcut întâi.",
  },
  en: {
    meta: { title: "Website maintenance for local businesses", description: "Website maintenance for clinics, law firms and local businesses in Romania: updates, backups, security, monthly checks and content edits. Get a quote." },
    schemaName: "Website maintenance", schemaDescription: "Website maintenance: updates, backups, security, monthly checks and content edits for local businesses.",
    h1: <>Website maintenance: fast, safe and up to date, <em className="font-accent font-normal tracking-normal text-orange-ink">without the worry.</em></> as ReactNode,
    lead: "A website isn't finished at launch. I look after updates, backups and monthly checks, and you only send me what you want changed. For clinics, law firms and local businesses in Romania.",
    secondary: "Free website audit",
    includesH2: "What maintenance includes",
    includes: [
      ["Updates", "The platform, themes and plugins (WordPress, for example) or a coded site's dependencies, tested first so nothing breaks."],
      ["Backups", "Regular copies kept separately from the site, so you can always go back to a version that worked."],
      ["Security", "Valid HTTPS, access only for the right people, and fixing issues Google reports."],
      ["Monthly check", "Mobile speed, contact and booking forms, broken links and indexing in Google Search Console."],
      ["Small content edits", "Opening hours, price ranges, team, new copy and images. You send me what changed, I update it."],
      ["A short report, in plain words", "What I checked, what I fixed and what I recommend next. Optionally, the monthly AI visibility test too."],
    ] as [string, string][],
    whyH2: "Why maintenance matters",
    why1: "Most problems I see on local websites don't come from bad design, but from neglect: a booking form that hasn't sent an email in months, outdated plugins, expired certificates or pages that slowed down over time.",
    why2: "Regular maintenance catches these early, before they cost bookings, clients or Google rankings. And it keeps the site ready for the way people search now, including in AI assistants.",
    why3: (l: Lang) => <>If the site already has big problems, I start with a fix or, when it&apos;s worth it, a <Link className={linkCls} href={href("redesign", l)}>redesign</Link>. If you&apos;re only now getting a site, maintenance can follow straight after <Link className={linkCls} href={href("newSite", l)}>building it</Link>.</>,
    guides: null as string[] | null,
    faq: [
      { q: "What does website maintenance mean?", a: "The care after launch: updates, backups, security and regular checks, so the site stays fast, safe and correct. A site left alone breaks slowly: old plugins, forms that stop sending, pages that get slower." },
      { q: "Do you maintain sites you didn't build?", a: "Yes, after an initial check. I look at the platform, the hosting and the state of the site, and tell you honestly what can be maintained and what should be fixed first." },
      { q: "Do you work with WordPress?", a: "Yes. Many sites in Romania run on WordPress, and that's where updates and backups matter most. I also maintain coded sites (Next.js), Webflow and Shopify." },
      { q: "How fast do you respond to a problem?", a: `I reply to every message within ${site.reply.en}. For urgent issues we agree in the offer how you reach me.` },
      { q: "How much does maintenance cost?", a: "It depends on the platform, the size of the site and how often the content changes. I don't publish fixed prices: you get a clear offer after a short call." },
    ],
    ctaTitle: "Want your site looked after without the hassle?", ctaText: "Start with a free check: I'll tell you what state the site is in and what to do first.",
  },
};

export const maintenanceMetadata = (lang: Lang) => meta("maintenance", lang, maintenance[lang].meta);

export function MaintenancePage({ lang }: { lang: Lang }) {
  const c = maintenance[lang];
  return (
    <>
      <Section id="mentenanta-site">
        <ServiceHead k="maintenance" lang={lang} schemaName={c.schemaName} schemaDescription={c.schemaDescription} />
        <Eyebrow>{pageName("maintenance", lang)}</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">{c.h1}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">{c.lead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={href("contact", lang)} arrow>{ui[lang].quote}</Button>
          <Button href={href("audit", lang)} variant="ghost">{c.secondary}</Button>
        </div>
      </Section>
      <Section id="ce-include" tint>
        <H2>{c.includesH2}</H2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {c.includes.map(([t, d]) => (
            <div key={t} className="rounded-3xl border-2 border-ink bg-canvas p-6">
              <h3 className="font-serif text-xl font-extrabold">{t}</h3>
              <p className="mt-2 text-[17px] leading-relaxed text-slate-ink">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section id="de-ce-conteaza">
        <H2>{c.whyH2}</H2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-ink">
          <p>{c.why1}</p>
          <p>{c.why2}</p>
          <p>{c.why3(lang)}</p>
        </div>
      </Section>
      {c.guides && <Section id="ghiduri" tint><Guides slugs={c.guides} /></Section>}
      <Section id="intrebari"><FAQ items={c.faq} lang={lang} /></Section>
      <CtaBand lang={lang} title={c.ctaTitle} text={c.ctaText} />
    </>
  );
}
