import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Breadcrumbs, Button, CtaBand, Eyebrow, H2, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Shot } from "@/components/Shot";
import { abs, breadcrumb } from "@/lib/schema";
import { site } from "@/lib/site-config";
import { alternates } from "@/lib/i18n";

const path = "/lucrari/cheesy-media";
export const metadata: Metadata = {
  title: "Studiu de caz: redesign website Cheesy Media",
  description:
    "Redesign pentru o agenție foto-video din Cluj-Napoca: design nou, 11 pagini, date structurate și pregătire pentru Google și AI. Lighthouse mobil: performanță 82 → 100.",
  alternates: alternates(`${path}/`, "ro"),
};

const scores = [
  ["Performanță", 82, 100],
  ["Accesibilitate", 96, 100],
  ["Bune practici", 100, 100],
  ["SEO", 100, 100],
] as const;

/** Colours and type measured on the live sites (computed styles), 19 Nov 2026. */
const palette = [
  { hex: "#121016", name: "Negru cald", use: "fundal pentru titluri mari și meniu", ink: false },
  { hex: "#FBF7EF", name: "Crem", use: "fundalul paginilor, mai cald decât albul", ink: true },
  { hex: "#FFB21C", name: "Galben „brânză”", use: "butoane și cuvântul-cheie din titlu", ink: true },
  { hex: "#5D3DB6", name: "Violet", use: "păstrat din vechiul brand, ca accent", ink: false },
  { hex: "#F2542D", name: "Portocaliu", use: "accent rar, din steaua mascotei", ink: false },
];

const design = [
  ["Titluri care se citesc dintr-o privire", "Bricolage Grotesque ExtraBold, comprimat, cu majuscule, în loc de Alfa Slab One. Câte un cuvânt important în galben, pe fiecare pagină."],
  ["Contrast în loc de violet peste tot", "Vechiul site era violet de sus până jos. Noul folosește benzi negre și crem, iar violetul a rămas doar ca accent, ca brandul să fie recognoscibil."],
  ["Mascota rămâne vedeta", "Brânza cu difuzoare apare în logo și pe pagini. Nu am inventat o identitate nouă, am pus-o în valoare."],
  ["Imagini mari, în cadre", "Serviciile au imagini mari, cu margini groase și colțuri rotunjite, în loc de blocuri de text."],
  ["Un singur pas următor, mereu vizibil", "Butonul galben „Cere ofertă” e în meniu pe fiecare pagină, iar WhatsApp e la un deget distanță pe telefon."],
];

/** Checked on the live pages (HTML, robots.txt, sitemap.xml), 19 Nov 2026. */
const aiSteps = [
  { t: "Limba corectă", before: "Pagina era declarată în engleză (lang=\"en\"), deși textul era în română.", after: "lang=\"ro\" pe toate paginile, ca Google și asistenții AI să știe pentru ce piață e." },
  { t: "O pagină pentru fiecare întrebare", before: "O singură pagină lungă cu toate serviciile.", after: "11 adrese în sitemap, inclusiv câte o pagină pentru foto, video, social media și web design. Un asistent AI poate cita exact pagina potrivită." },
  { t: "Date structurate", before: "Niciun bloc de date structurate.", after: "ProfessionalService pe fiecare pagină, FAQPage pe prima pagină și BreadcrumbList pe paginile interioare." },
  { t: "Titluri cu serviciu și oraș", before: "Un titlu general: „Agenție Modernă de Marketing în Cluj-Napoca”.", after: "Titlu și descriere proprii pe fiecare pagină, de exemplu „Agenție marketing Cluj: foto, video, social”." },
  { t: "Acces deschis pentru roboți", before: "Fără robots.txt și fără sitemap.", after: "robots.txt permite toți roboții (inclusiv cei ai asistenților AI) și indică sitemap-ul. Doar pagina de mulțumire e exclusă." },
  { t: "Răspunsuri directe", before: "Formulări generale despre servicii.", after: "Întrebări frecvente cu răspunsuri scurte și un proces în 4 pași: formatul pe care AI-ul îl poate prelua ușor." },
  { t: "Previzualizare la distribuire", before: "Nicio imagine pentru distribuire.", after: "Imagine de previzualizare (og:image) pe fiecare pagină, pentru WhatsApp, Facebook și LinkedIn." },
  { t: "Viteză pe mobil", before: "Performanță 82 în Lighthouse.", after: "100 la toate cele patru categorii Lighthouse." },
];

const pages = [
  { name: "after-servicii", label: "Servicii", alt: "Pagina Servicii a noului site Cheesy Media, cu titlul mare „Tot ce-ți trebuie ca să crești online”" },
  { name: "after-foto", label: "Serviciu: foto", alt: "Pagina dedicată serviciului de fotografie, cu titlul „Imagini care vând înainte să spui un cuvânt”" },
  { name: "after-proces", label: "Proces în 4 pași", alt: "Pagina Proces, cu cei patru pași: analiză, producție, editare, administrare" },
  { name: "after-portofoliu", label: "Portofoliu", alt: "Pagina Portofoliu, cu filtre pentru foto, video, social și web" },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: "Acasă", path: "/" }, { name: "Lucrări", path: "/lucrari" }, { name: "Cheesy Media", path }]),
        { "@context": "https://schema.org", "@type": "Article", headline: "Studiu de caz: redesign website Cheesy Media", description: "Redesign pentru o agenție foto-video din Cluj-Napoca: design, structură, pregătire pentru Google și AI, rezultate măsurate în Lighthouse.", url: abs(path), image: abs("/lucrari/cheesy-media/site-desktop-1440.webp"), inLanguage: "ro-RO", author: { "@id": `${site.url}/#person` }, datePublished: "2026-11-18", dateModified: "2026-11-19" }]} />

      <Section id="studiu-de-caz-redesign">
        <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: "Lucrări", href: "/lucrari" }, { name: "Cheesy Media" }]} />
        <Eyebrow>Studiu de caz · Redesign</Eyebrow>
        <h1 className="max-w-4xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">Cheesy Media: de la o pagină lungă la un site complet.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">
          Cheesy Media este o agenție de foto, video și social media din Cluj-Napoca. Am refăcut site-ul împreună cu proprietarii: design nou, o pagină pentru fiecare serviciu și o bază tehnică pregătită pentru Google și asistenții AI.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2 text-sm font-semibold">
          {["Redesign", "Design vizual", "Structură și conținut", "SEO tehnic", "Pregătire pentru AI", "Next.js · Netlify"].map((t) => (
            <li key={t} className="rounded-full border-2 border-ink px-3 py-1">{t}</li>
          ))}
        </ul>
        <div className="relative mt-12 pb-10 pr-10 sm:pb-12 sm:pr-24">
          <Shot name="site-desktop" alt="Pagina principală a noului site Cheesy Media pe desktop" sizes="(min-width: 1152px) 1000px, 92vw" eager />
          <Shot name="site-mobile" phone alt="Același site Cheesy Media pe telefon" sizes="200px" className="absolute bottom-0 right-0 w-[26%] max-w-[200px]" />
        </div>
        <p className="mt-6 text-sm text-slate-ink">
          Înainte: <a className="underline underline-offset-4" href="https://cheesymedia.netlify.app" target="_blank" rel="noopener noreferrer">cheesymedia.netlify.app</a> · După:{" "}
          <a className="underline underline-offset-4" href="https://cheesy-media.netlify.app" target="_blank" rel="noopener noreferrer">cheesy-media.netlify.app</a>
        </p>
      </Section>

      {/* Before / after */}
      <Section id="inainte-si-dupa" white>
        <Eyebrow>Înainte și după</Eyebrow>
        <H2>Aceeași firmă, alt prim contact.</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-ink">
          Site-ul inițial funcționa, dar punea toată oferta pe o singură pagină violetă, iar cererile treceau printr-un formular Google. Noul site explică pe rând ce face agenția și duce vizitatorul spre o cerere de ofertă.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <figure>
            <Shot name="before-home" alt="Prima pagină a vechiului site Cheesy Media: fundal violet, titlu centrat și logo mare" sizes="(min-width: 1024px) 540px, 92vw" />
            <figcaption className="mt-4 flex items-center gap-2 text-[15px] text-slate-ink"><span className="rounded-full bg-ink/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-ink">Înainte</span> O pagină, totul violet, logo în locul unui mesaj.</figcaption>
          </figure>
          <figure>
            <Shot name="site-desktop" alt="Prima pagină a noului site Cheesy Media" sizes="(min-width: 1024px) 540px, 92vw" />
            <figcaption className="mt-4 flex items-center gap-2 text-[15px] text-slate-ink"><span className="rounded-full bg-orange px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-ink">După</span> Mesaj clar, contrast puternic, „Cere ofertă” mereu în meniu.</figcaption>
          </figure>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-8 md:mx-auto md:max-w-xl">
          <figure>
            <Shot name="m-before-home" phone alt="Vechiul site Cheesy Media pe telefon" sizes="(min-width: 768px) 260px, 45vw" />
            <figcaption className="mt-3 text-center text-sm font-semibold text-slate-ink">Telefon, înainte</figcaption>
          </figure>
          <figure>
            <Shot name="site-mobile" phone alt="Noul site Cheesy Media pe telefon" sizes="(min-width: 768px) 260px, 45vw" />
            <figcaption className="mt-3 text-center text-sm font-semibold text-slate-ink">Telefon, după</figcaption>
          </figure>
        </div>
      </Section>

      {/* Design */}
      <Section id="design" dark>
        <Eyebrow dark>Designul</Eyebrow>
        <H2 dark>Un brand jucăuș, <span className="text-orange">pus în ordine.</span></H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-paper/85">
          Am păstrat tonul jucăuș al mascotei, dar i-am dat site-ului ordinea unei agenții serioase. Culorile și fonturile de mai jos sunt cele măsurate pe site-ul live.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {palette.map((c) => (
            <li key={c.hex} className="overflow-hidden rounded-2xl border-2 border-paper/15">
              <div className="flex h-24 items-end p-3" style={{ background: c.hex }}>
                <span className={`font-mono text-sm font-semibold ${c.ink ? "text-ink" : "text-paper"}`}>{c.hex}</span>
              </div>
              <div className="bg-paper/5 p-3">
                <p className="font-semibold text-paper">{c.name}</p>
                <p className="mt-0.5 text-sm leading-snug text-paper/70">{c.use}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-paper/15 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-paper/60">Titluri</p>
            <p className="mt-2 font-serif text-4xl font-extrabold uppercase leading-none tracking-tight text-paper">Bricolage <span className="text-[#FFB21C]">Grotesque</span></p>
            <p className="mt-2 text-sm text-paper/70">ExtraBold, comprimat, majuscule. Înainte: Alfa Slab One.</p>
          </div>
          <div className="rounded-2xl border-2 border-paper/15 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-paper/60">Text</p>
            <p className="mt-2 text-3xl font-medium text-paper">Inter, ușor de citit</p>
            <p className="mt-2 text-sm text-paper/70">Paragrafe scurte, rânduri aerisite, contrast mare pe fundal crem.</p>
          </div>
        </div>
        <ol className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {design.map(([t, d], i) => (
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

      {/* Page gallery */}
      <Section id="pagini">
        <Eyebrow>Paginile noi</Eyebrow>
        <H2>Fiecare serviciu are pagina lui.</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-ink">
          Din aceeași pagină lungă au ieșit pagini separate pentru servicii, fiecare serviciu în parte, proces, portofoliu, despre și contact. Același sistem vizual, pe toate.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {pages.map((p) => (
            <figure key={p.name}>
              <Shot name={p.name} alt={p.alt} sizes="(min-width: 1152px) 540px, (min-width: 768px) 45vw, 92vw" />
              <figcaption className="mt-4 font-serif text-lg font-extrabold">{p.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-8">
          <figure><Shot name="site-mobile" phone alt="Prima pagină pe telefon" sizes="(min-width: 640px) 30vw, 45vw" /><figcaption className="mt-3 text-center text-sm font-semibold text-slate-ink">Acasă</figcaption></figure>
          <figure><Shot name="m-after-servicii" phone alt="Pagina Servicii pe telefon" sizes="(min-width: 640px) 30vw, 45vw" /><figcaption className="mt-3 text-center text-sm font-semibold text-slate-ink">Servicii</figcaption></figure>
          <figure className="col-span-2 mx-auto w-1/2 sm:col-span-1 sm:w-full"><Shot name="m-after-proces" phone alt="Pagina Proces pe telefon" sizes="(min-width: 640px) 30vw, 45vw" /><figcaption className="mt-3 text-center text-sm font-semibold text-slate-ink">Proces</figcaption></figure>
        </div>
      </Section>

      {/* Google and AI */}
      <Section id="google-si-ai" white>
        <Eyebrow>Google și AI</Eyebrow>
        <H2>Ce am făcut ca site-ul să fie găsit și citat.</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-ink">
          Un asistent AI recomandă ce poate înțelege și verifica. Acestea sunt pașii tehnici făcuți pe Cheesy Media. Îi poți verifica oricând în codul paginilor.
        </p>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {aiSteps.map((s, i) => (
            <li key={s.t} className="flex flex-col rounded-3xl border-2 border-ink bg-paper p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-serif text-sm font-extrabold text-paper">{i + 1}</span>
                <h3 className="font-serif text-xl font-extrabold">{s.t}</h3>
              </div>
              <dl className="mt-4 space-y-3 text-[16px] leading-relaxed">
                <div><dt className="text-xs font-bold uppercase tracking-wider text-muted">Înainte</dt><dd className="text-slate-ink">{s.before}</dd></div>
                <div className="flex gap-2"><Check aria-hidden className="mt-1 h-5 w-5 shrink-0 text-orange-ink" /><div><dt className="text-xs font-bold uppercase tracking-wider text-orange-ink">După</dt><dd className="text-ink">{s.after}</dd></div></div>
              </dl>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl rounded-2xl bg-paper p-5 text-[16px] leading-relaxed text-slate-ink">
          <strong className="text-ink">Ce nu afirm:</strong> nu public poziții în Google sau mențiuni în ChatGPT pentru Cheesy Media, pentru că nu le-am măsurat încă împreună cu clientul. Când le avem, le adaug aici.
        </p>
      </Section>

      <Section id="rezultat-masurat">
        <Eyebrow>Rezultat măsurat</Eyebrow>
        <H2>Scoruri Lighthouse pe mobil</H2>
        <p className="mt-3 max-w-3xl text-slate-ink">
          Măsurat cu Google PageSpeed Insights (Lighthouse), pe mobil, pe 18 noiembrie 2026. Scorurile sunt estimări și pot varia ușor de la o rulare la alta.
        </p>
        <dl className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {scores.map(([n, a, b]) => (
            <div key={n} className="rounded-2xl border-2 border-ink bg-canvas p-5">
              <dt className="text-[15px] font-semibold text-slate-ink">{n}</dt>
              <dd className="mt-1 font-serif text-4xl font-extrabold">{a === b ? <>{b}</> : <><span className="text-muted">{a}</span> <span className="text-orange-ink">→ {b}</span></>}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element -- static export: explicit srcset instead of next/image */}
            <img src="/lucrari/cheesy-media/lighthouse-inainte-960.webp" srcSet="/lucrari/cheesy-media/lighthouse-inainte-640.webp 640w, /lucrari/cheesy-media/lighthouse-inainte-960.webp 960w, /lucrari/cheesy-media/lighthouse-inainte.webp 1600w" width={1600} height={980} alt="Raport Lighthouse pentru site-ul vechi: performanță 82, accesibilitate 96, bune practici 100, SEO 100" sizes="(min-width: 1152px) 560px, (min-width: 768px) 45vw, 92vw" loading="lazy" decoding="async" className="h-auto w-full rounded-2xl border-2 border-ink" />
            <figcaption className="mt-2 text-sm text-slate-ink">Înainte: performanță 82, accesibilitate 96.</figcaption>
          </figure>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element -- static export: explicit srcset instead of next/image */}
            <img src="/lucrari/cheesy-media/lighthouse-dupa-960.webp" srcSet="/lucrari/cheesy-media/lighthouse-dupa-640.webp 640w, /lucrari/cheesy-media/lighthouse-dupa-960.webp 960w, /lucrari/cheesy-media/lighthouse-dupa.webp 1600w" width={1600} height={953} alt="Raport Lighthouse pentru site-ul nou: 100 la performanță, accesibilitate, bune practici și SEO" sizes="(min-width: 1152px) 560px, (min-width: 768px) 45vw, 92vw" loading="lazy" decoding="async" className="h-auto w-full rounded-2xl border-2 border-ink" />
            <figcaption className="mt-2 text-sm text-slate-ink">După: 100 la toate cele patru categorii.</figcaption>
          </figure>
        </div>
        <p className="mt-6 max-w-3xl text-slate-ink">
          Nu public cifre de trafic sau de cereri, pentru că nu am date confirmate de client. Stack: Next.js, găzduit pe Netlify.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/servicii/redesign-website" arrow>Vezi serviciul de redesign</Button>
          <Button href="/audit-gratuit-vizibilitate-ai" variant="ghost">Audit gratuit pentru site-ul tău</Button>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
