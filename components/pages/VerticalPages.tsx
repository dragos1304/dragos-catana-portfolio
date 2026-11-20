import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Button, CtaBand, Eyebrow, FAQ, H2, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Guides } from "@/components/Guides";
import { breadcrumb, serviceSchema } from "@/lib/schema";
import { alternates, href, pageName, type Lang } from "@/lib/site-map";

/** The two vertical pages (clinics, law firms), once each, in either language. Guides are Romanian-only. */

type Vertical = "clinics" | "lawFirms";
type Copy = {
  meta: { title: string; description: string };
  eyebrow: string; h1: string; lead: string; schemaName: string; schemaDescription: string;
  needs: { t: string; d: string }[]; structure: { t: string; d: string }[]; schemaTypes: string;
  caution: { title: string; text: string }; faq: { q: string; a: string }[]; ctaTitle: string; guides: string[] | null;
};

const text = {
  ro: { home: "Acasă", services: "Servicii", audit: "Audit gratuit AI", quote: "Cere o ofertă", needs: "Ce caută clienții tăi înainte să te contacteze", structure: "Cum structurez site-ul", vis: "Vizibilitate în Google și în AI", visA: "Fiecare pagină are date structurate potrivite", visB: "titluri formulate ca întrebări reale și răspunsuri scurte, ușor de citat. Informațiile de contact și identitatea rămân identice pe site, în profilul Google al afacerii și în directoare, ca asistenții AI să te poată verifica. Detalii în", visLink: "serviciul de SEO și vizibilitate în AI" },
  en: { home: "Home", services: "Services", audit: "Free AI audit", quote: "Get a quote", needs: "What your clients look for before they contact you", structure: "How I structure the site", vis: "Visibility on Google and in AI", visA: "Every page has the right structured data", visB: "headings phrased as real questions and short answers that are easy to quote. Your contact details and identity stay identical on the site, in your Google Business Profile and in directories, so AI assistants can verify you. More in the", visLink: "SEO and AI visibility service" },
} as const;

const verticals: Record<Vertical, Record<Lang, Copy>> = {
  clinics: {
    ro: {
      meta: { title: "Site pentru clinici și cabinete medicale", description: "Site pentru clinici și cabinete medicale: rapid, credibil, cu programare online, pagini pe specialități și vizibilitate în Google și AI. Cere o ofertă." },
      eyebrow: "Clinici și cabinete medicale",
      h1: "Un website care inspiră încredere pacienților, înainte de prima vizită.",
      lead: "Pacienții compară și citesc înainte să sune. Construiesc sau refac site-ul clinicii tale ca să fie calm, clar și ușor de folosit, și ca să fie găsit în Google și recomandat în răspunsurile asistenților AI.",
      schemaName: "Website pentru clinici și cabinete medicale",
      schemaDescription: "Creare și redesign de website pentru clinici și cabinete medicale, cu SEO local și optimizare pentru motoare AI.",
      needs: [
        { t: "Cine sunt medicii", d: "Profiluri clare, cu specialitate și experiență. Oamenii vor să știe cui se adresează." },
        { t: "Ce servicii se oferă și cum programez", d: "Pagini pe specialități și un drum scurt spre programare, pe telefon sau online." },
        { t: "Unde și când", d: "Adresă, program, parcare, acces și hartă, vizibile din prima pagină și actualizate peste tot." },
      ],
      structure: [
        { t: "Prima pagină orientată spre programare", d: "Ce tratezi, unde ești și cum programezi, în câteva secunde, pe telefon." },
        { t: "Pagini pe specialități și servicii", d: "Fiecare cu răspunsuri la întrebările frecvente ale pacienților, scrise de specialistul tău." },
        { t: "Pagini pentru medici", d: "Profil, specializări și date structurate pentru persoană (Physician), ca motoarele să te înțeleagă." },
        { t: "Locații și contact", d: "Date identice cu profilul Google al clinicii, pentru SEO local și pentru încrederea asistenților AI." },
        { t: "Recenzii reale", d: "Se afișează doar ce există cu adevărat. Nu inventez și nu cumpăr recenzii." },
        { t: "Viteză și accesibilitate", d: "Site rapid pe mobil și utilizabil de toți pacienții, inclusiv de cei cu dificultăți de vedere." },
      ],
      schemaTypes: "MedicalClinic, Physician, Service, FAQPage, BreadcrumbList",
      caution: {
        title: "Date medicale și reguli de comunicare",
        text: "Conținutul medical îl scrie și îl aprobă medicul sau clinica ta; eu nu fac promisiuni medicale în numele tău. Formularele nu cer detalii despre afecțiuni, ci doar datele necesare unei programări, cu consimțământ pentru prelucrare. Verificăm împreună regulile aplicabile comunicării și publicității în domeniul tău înainte de lansare.",
      },
      faq: [
        { q: "Pot să primesc programări direct din site?", a: "Da. Putem adăuga un formular de cerere de programare sau o integrare cu un sistem de programări, în funcție de ce folosești deja. Stabilim soluția după o discuție scurtă." },
        { q: "Cum apare clinica mea în răspunsurile ChatGPT sau Gemini?", a: "Prin informații clare și consecvente despre clinică, date structurate, pagini care răspund la întrebările pacienților și recenzii reale. Nu pot garanta o poziție anume, dar măsurăm înainte și după și îți arăt schimbarea." },
        { q: "Pot păstra adresa actuală a site-ului?", a: "De obicei da. Dacă schimbăm adrese, folosim redirecturi 301 ca să nu pierzi poziții în Google." },
        { q: "Cât costă?", a: "Depinde de numărul de pagini și de funcționalități. Primești o ofertă clară după o discuție scurtă. Auditul inițial e gratuit." },
      ],
      ctaTitle: "Vrei să vezi cum apare clinica ta acum în Google și în AI?",
      guides: ["schema-markup-pentru-clinici-si-cabinete", "google-business-profile-ghid", "cum-verifici-daca-ai-iti-mentioneaza-afacerea", "ce-este-seo"],
    },
    en: {
      meta: { title: "Websites for clinics in Romania", description: "Websites for clinics and medical practices: fast, credible, with online booking, specialty pages and visibility on Google and in AI. Get a quote." },
      eyebrow: "Clinics and medical practices",
      h1: "A website that earns patients' trust before their first visit.",
      lead: "Patients compare and read before they call. I build or rebuild your clinic's website so it feels calm, clear and easy to use, and so it's found on Google and recommended in AI assistants' answers.",
      schemaName: "Websites for clinics and medical practices",
      schemaDescription: "Website design and redesign for clinics and medical practices, with local SEO and optimisation for AI engines.",
      needs: [
        { t: "Who the doctors are", d: "Clear profiles with specialty and experience. People want to know who they're seeing." },
        { t: "What you offer and how to book", d: "Pages per specialty and a short path to booking, by phone or online." },
        { t: "Where and when", d: "Address, opening hours, parking, access and a map, visible from the first page and up to date everywhere." },
      ],
      structure: [
        { t: "A home page built around booking", d: "What you treat, where you are and how to book, in a few seconds, on a phone." },
        { t: "Pages per specialty and service", d: "Each one answers patients' frequent questions, written by your specialist." },
        { t: "Pages for the doctors", d: "Profile, specialisations and structured data for each person (Physician), so search engines understand you." },
        { t: "Locations and contact", d: "Details identical to the clinic's Google profile, for local SEO and for AI assistants' trust." },
        { t: "Real reviews", d: "Only what really exists is shown. I don't invent or buy reviews." },
        { t: "Speed and accessibility", d: "A fast site on mobile that every patient can use, including people with poor eyesight." },
      ],
      schemaTypes: "MedicalClinic, Physician, Service, FAQPage, BreadcrumbList",
      caution: {
        title: "Medical data and communication rules",
        text: "Your doctor or clinic writes and approves the medical content; I make no medical promises on your behalf. Forms don't ask about conditions, only the details needed for an appointment, with consent for processing. Before launch, we check together the rules that apply to communication and advertising in your field.",
      },
      faq: [
        { q: "Can patients book directly from the website?", a: "Yes. We can add a booking request form or connect the booking system you already use. We choose after a short call." },
        { q: "How does my clinic show up in ChatGPT or Gemini answers?", a: "Through clear, consistent information about the clinic, structured data, pages that answer patients' questions and real reviews. I can't guarantee a specific position, but we measure before and after and I show you the change." },
        { q: "Can I keep my current web address?", a: "Usually yes. If addresses change, we use 301 redirects so you don't lose your Google rankings." },
        { q: "How much does it cost?", a: "It depends on the number of pages and features. You get a clear offer after a short call. The first audit is free." },
      ],
      ctaTitle: "Want to see how your clinic shows up on Google and in AI today?",
      guides: null,
    },
  },
  lawFirms: {
    ro: {
      meta: { title: "Site pentru avocați și cabinete de avocatură", description: "Site pentru avocați și cabinete de avocatură: sobru, rapid, cu pagini pe domenii de practică și vizibilitate în Google și în răspunsurile AI. Cere o ofertă." },
      eyebrow: "Cabinete de avocatură",
      h1: "Un website sobru și clar, care îți aduce clienții potriviți.",
      lead: "Un client caută un specialist pentru o problemă concretă și alege după claritate și încredere. Construiesc sau refac site-ul cabinetului tău ca să explice simplu ce faci, să fie găsit în Google și să fie citat de asistenții AI.",
      schemaName: "Website pentru cabinete de avocatură",
      schemaDescription: "Creare și redesign de website pentru avocați și cabinete de avocatură, cu SEO și optimizare pentru motoare AI.",
      needs: [
        { t: "Dacă te ocupi de problema lor", d: "O pagină clară pe fiecare domeniu de practică, cu un limbaj pe înțelesul unui om care nu e jurist." },
        { t: "Cine sunt avocații", d: "Profiluri cu pregătire, domenii și modul de lucru. Încrederea se construiește prin transparență." },
        { t: "Cum încep", d: "Un drum scurt și discret spre o primă discuție: telefon, formular sau programare." },
      ],
      structure: [
        { t: "Prima pagină orientată pe probleme", d: "Ce domenii acoperi și cum se ia legătura, fără jargon." },
        { t: "Pagină pentru fiecare domeniu de practică", d: "Răspunsuri la întrebările frecvente, scrise sau aprobate de avocat." },
        { t: "Pagini pentru avocați", d: "Profil, pregătire și date structurate pentru persoană (Attorney), ca motoarele să te înțeleagă." },
        { t: "Articole utile", d: "Ghiduri scurte pentru problemele comune ale clienților. Sunt cele mai citate de asistenții AI." },
        { t: "Contact discret", d: "Formular scurt, fără cerere de detalii despre dosar, și opțiune de programare a unei consultații." },
        { t: "Viteză și accesibilitate", d: "Site rapid pe mobil, cu date identice cu profilul Google al cabinetului." },
      ],
      schemaTypes: "LegalService, Attorney, Service, FAQPage, Article, BreadcrumbList",
      caution: {
        title: "Confidențialitate și reguli profesionale",
        text: "Formularele nu cer detalii despre caz: doar datele necesare unei prime discuții, cu consimțământ pentru prelucrare. Conținutul juridic îl scrii sau îl aprobi tu, iar eu nu fac promisiuni de rezultat în numele tău. Verificăm împreună regulile profesionale aplicabile comunicării și publicității înainte de lansare.",
      },
      faq: [
        { q: "Pot apărea în răspunsurile ChatGPT când cineva caută un avocat?", a: "Pot crește șansele prin informații clare și consecvente, pagini pe domenii de practică, articole utile, date structurate și recenzii reale. Nu pot garanta o poziție anume, dar măsurăm înainte și după." },
        { q: "Cine scrie conținutul juridic?", a: "Tu sau echipa ta. Eu structurez, editez pentru claritate și optimizez pentru căutare, iar tu aprobi tot ce se publică." },
        { q: "Pot păstra adresele paginilor actuale?", a: "De obicei da. Dacă schimbăm adrese, folosim redirecturi 301 ca să nu pierzi poziții în Google." },
        { q: "Cât costă?", a: "Depinde de numărul de pagini și de funcționalități. Primești o ofertă clară după o discuție scurtă. Auditul inițial e gratuit." },
      ],
      ctaTitle: "Vrei să vezi cum apare cabinetul tău acum în Google și în AI?",
      guides: ["google-business-profile-ghid", "ce-este-seo", "ce-este-geo-optimizare-pentru-motoare-ai", "schema-markup-pentru-clinici-si-cabinete"],
    },
    en: {
      meta: { title: "Websites for law firms and lawyers in Romania", description: "Websites for law firms: practice-area pages, lawyer profiles, useful articles and discreet contact, built to be found on Google and cited by AI. Get a quote." },
      eyebrow: "Law firms",
      h1: "A sober, clear website that brings you the right clients.",
      lead: "A client looks for a specialist for one specific problem and chooses on clarity and trust. I build or rebuild your firm's website so it explains simply what you do, gets found on Google and gets cited by AI assistants.",
      schemaName: "Websites for law firms",
      schemaDescription: "Website design and redesign for lawyers and law firms, with SEO and optimisation for AI engines.",
      needs: [
        { t: "Whether you handle their problem", d: "A clear page for each practice area, in words a non-lawyer understands." },
        { t: "Who the lawyers are", d: "Profiles with background, practice areas and how you work. Trust comes from transparency." },
        { t: "How to start", d: "A short, discreet path to a first conversation: phone, form or booking." },
      ],
      structure: [
        { t: "A home page built around problems", d: "Which areas you cover and how to get in touch, without jargon." },
        { t: "A page for every practice area", d: "Answers to frequent questions, written or approved by the lawyer." },
        { t: "Pages for the lawyers", d: "Profile, background and structured data for each person (Attorney), so search engines understand you." },
        { t: "Useful articles", d: "Short guides to clients' common problems. These are what AI assistants quote most." },
        { t: "Discreet contact", d: "A short form that doesn't ask about the case, and an option to book a consultation." },
        { t: "Speed and accessibility", d: "A fast site on mobile, with details identical to the firm's Google profile." },
      ],
      schemaTypes: "LegalService, Attorney, Service, FAQPage, Article, BreadcrumbList",
      caution: {
        title: "Confidentiality and professional rules",
        text: "Forms don't ask about the case: only the details needed for a first conversation, with consent for processing. You write or approve the legal content, and I make no promises of results on your behalf. Before launch, we check together the professional rules that apply to communication and advertising.",
      },
      faq: [
        { q: "Can I appear in ChatGPT answers when someone looks for a lawyer?", a: "I can raise your chances with clear, consistent information, practice-area pages, useful articles, structured data and real reviews. I can't guarantee a specific position, but we measure before and after." },
        { q: "Who writes the legal content?", a: "You or your team. I structure it, edit it for clarity and optimise it for search, and you approve everything that's published." },
        { q: "Can I keep my current page addresses?", a: "Usually yes. If addresses change, we use 301 redirects so you don't lose your Google rankings." },
        { q: "How much does it cost?", a: "It depends on the number of pages and features. You get a clear offer after a short call. The first audit is free." },
      ],
      ctaTitle: "Want to see how your firm shows up on Google and in AI today?",
      guides: null,
    },
  },
};

export function verticalMetadata(k: Vertical, lang: Lang): Metadata {
  const m = verticals[k][lang].meta;
  return { title: m.title, description: m.description, alternates: alternates(k, lang) };
}

export function VerticalPage({ k, lang }: { k: Vertical; lang: Lang }) {
  const t = text[lang];
  const p = verticals[k][lang];
  const path = href(k, lang);
  const crumb = pageName(k, lang);
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: t.home, path: href("home", lang) }, { name: t.services, path: href("services", lang) }, { name: crumb, path }]),
        serviceSchema(p.schemaName, p.schemaDescription, path)]} />
      <Section id="intro">
        <Breadcrumbs lang={lang} items={[{ name: t.home, href: href("home", lang) }, { name: t.services, href: href("services", lang) }, { name: crumb }]} />
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">{p.h1}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{p.lead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={href("audit", lang)}>{t.audit}</Button>
          <Button href={href("contact", lang)} variant="ghost">{t.quote}</Button>
        </div>
      </Section>

      <Section id="ce-cauta-clientii" tint>
        <H2>{t.needs}</H2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {p.needs.map((n) => (
            <div key={n.t} className="rounded-md border border-line bg-white p-6"><h3 className="font-serif text-xl font-bold">{n.t}</h3><p className="mt-2 leading-relaxed text-muted">{n.d}</p></div>
          ))}
        </div>
      </Section>

      <Section id="structura">
        <H2>{t.structure}</H2>
        <ol className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {p.structure.map((n, i) => (
            <li key={n.t} className="flex gap-4">
              <span className="font-serif text-3xl font-bold text-orange-ink" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
              <div><h3 className="text-lg font-semibold">{n.t}</h3><p className="mt-1 leading-relaxed text-muted">{n.d}</p></div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="vizibilitate" tint>
        <H2>{t.vis}</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          {t.visA} ({p.schemaTypes}), {t.visB}{" "}
          <Link className="font-semibold text-orange-ink underline underline-offset-4" href={href("seo", lang)}>{t.visLink}</Link>.
        </p>
      </Section>

      <Section id="de-retinut">
        <div className="max-w-3xl rounded-md border border-orange-ink bg-canvas p-7">
          <h2 className="font-serif text-2xl font-bold">{p.caution.title}</h2>
          <p className="mt-3 leading-relaxed text-muted">{p.caution.text}</p>
        </div>
      </Section>

      {p.guides && <Section id="ghiduri"><Guides slugs={p.guides} /></Section>}
      <Section id="intrebari" tint><FAQ items={p.faq} lang={lang} /></Section>
      <CtaBand title={p.ctaTitle} lang={lang} />
    </>
  );
}
