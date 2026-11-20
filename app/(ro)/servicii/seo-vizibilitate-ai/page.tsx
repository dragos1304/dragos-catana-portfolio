import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Button, CtaBand, Eyebrow, FAQ, H2, Section } from "@/components/ui";
import { Guides } from "@/components/Guides";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, serviceSchema } from "@/lib/schema";
import { alternates } from "@/lib/site-map";

const path = "/servicii/seo-vizibilitate-ai";
export const metadata: Metadata = {
  title: "Optimizare SEO și vizibilitate în ChatGPT (GEO)",
  description:
    "Servicii SEO pentru afaceri locale din România: optimizare SEO, SEO local și vizibilitate în ChatGPT, Gemini și Perplexity. Audit SEO gratuit în 24 de ore.",
  alternates: alternates("seo", "ro"),
};

const faq = [
  { q: "Ce face un consultant SEO, concret?", a: "Verific cum te găsesc oamenii acum, repar ce blochează site-ul tehnic, structurez paginile pe întrebările reale ale clienților, îngrijesc profilul Google și măsor lunar ce s-a schimbat. Totul explicat în limbaj simplu." },
  { q: "Ce este GEO sau AEO?", a: "Generative Engine Optimization (GEO) sau Answer Engine Optimization (AEO) înseamnă să faci o afacere ușor de înțeles și de citat pentru asistenții AI, ca ChatGPT, Gemini, Claude sau Perplexity. Se bazează pe SEO, dar pune accent pe răspunsuri clare, date structurate și informații consecvente în mai multe surse." },
  { q: "Poți garanta că ChatGPT mă va recomanda?", a: "Nu. Răspunsurile AI variază, iar modelele se actualizează în ritmul lor. Pot măsura unde ești acum, îmbunătăți ce influențează recomandările și arăta schimbarea în timp." },
  { q: "După cât timp se văd rezultatele?", a: "De obicei în săptămâni sau luni. Îmbunătățirile tehnice se văd mai repede, iar autoritatea (recenzii, mențiuni, conținut) se construiește în timp." },
  { q: "Auditul gratuit chiar e gratuit?", a: "Da. E un audit manual, livrat în maximum 24 de ore, fără obligația de a continua cu mine." },
  { q: "Trebuie să am site nou pentru asta?", a: "Nu neapărat. Uneori ajung corecturi punctuale. Dacă site-ul e prea vechi sau blocat tehnic, îți spun cinstit și propun un redesign." },
  { q: "Lucrezi și cu clinici și cabinete de avocatură?", a: "Da, acestea sunt domeniile mele principale. Pentru ele nu fac promisiuni medicale sau juridice în numele tău: conținutul de specialitate îl aprobi tu." },
];

const rows = [
  ["„Clinică stomatologică bună în [oraș]”", "Da / Nu", "Poziția în răspuns", "+ / 0 / −", "Da / Nu"],
  ["„Avocat pentru [domeniu] în [oraș]”", "Da / Nu", "Poziția în răspuns", "+ / 0 / −", "Da / Nu"],
];

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: "Acasă", path: "/" }, { name: "Servicii", path: "/servicii" }, { name: "SEO și vizibilitate în AI", path }]),
        serviceSchema("SEO și optimizare pentru motoare AI", "Audit, optimizare tehnică și de conținut și colaborare lunară pentru vizibilitate în Google și în răspunsurile ChatGPT, Gemini, Claude și Perplexity.", path)]} />

      <section className="border-b border-line bg-mist">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: "Servicii", href: "/servicii" }, { name: "SEO și vizibilitate în AI" }]} />
          <Eyebrow>Serviciul principal</Eyebrow>
          <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">
            Optimizare SEO: fii găsit pe Google și recomandat de <em className="font-accent font-normal tracking-normal text-orange-ink">AI</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-ink">
            Tot mai mulți clienți întreabă un asistent AI „cui să mă adresez?”. Ca consultant SEO, te ajut să apari în acele răspunsuri și în Google, cu un proces pe care îl poți măsura, de la optimizarea site-ului la SEO local.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/audit-gratuit-vizibilitate-ai">Cere auditul gratuit</Button>
            <Button href="/contact" variant="ghost">Cere o ofertă</Button>
          </div>
        </div>
      </section>

      <Section id="ce-s-a-schimbat">
        <H2>Ce s-a schimbat</H2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-ink">
          <p>Până acum, un client căuta în Google și compara zece rezultate. Acum poate întreba direct ChatGPT, Gemini sau Perplexity și primi câteva nume, cu explicații. Dacă afacerea ta nu e înțeleasă și citată de acele sisteme, e invizibilă exact când se ia decizia.</p>
          <p><strong className="text-navy">GEO / AEO</strong> (Generative / Answer Engine Optimization) înseamnă să faci afacerea ușor de înțeles și de citat pentru asistenții AI. Se sprijină pe SEO clasic, dar adaugă claritate, date structurate și consecvență a informațiilor despre tine.</p>
        </div>
      </Section>

      <Section id="seo-clasic-si-vizibilitate" tint>
        <H2>SEO clasic și vizibilitate în AI</H2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left align-top">
            <caption className="sr-only">Diferențe între SEO clasic și optimizarea pentru AI</caption>
            <thead><tr className="border-b border-navy/20 text-sm uppercase tracking-wider text-slate-ink">
              <th scope="col" className="py-3 pr-4"> </th><th scope="col" className="py-3 pr-4">SEO clasic</th><th scope="col" className="py-3">Vizibilitate în AI (GEO)</th></tr></thead>
            <tbody className="divide-y divide-line text-slate-ink">
              <tr><th scope="row" className="py-4 pr-4 text-navy">Ce urmărește</th><td className="py-4 pr-4">Poziții în lista de rezultate</td><td className="py-4">Să fii menționat și descris corect în răspuns</td></tr>
              <tr><th scope="row" className="py-4 pr-4 text-navy">Ce contează</th><td className="py-4 pr-4">Cuvinte-cheie, linkuri, viteză, experiență</td><td className="py-4">Răspunsuri clare, date structurate, informații consecvente, recenzii și mențiuni</td></tr>
              <tr><th scope="row" className="py-4 pr-4 text-navy">Cum se măsoară</th><td className="py-4 pr-4">Poziții, clickuri, trafic</td><td className="py-4">Test periodic al întrebărilor reale: apari? pe ce loc? cum ești descris?</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="ce-fac-concret">
        <H2>Servicii SEO: ce fac concret</H2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            ["Audit de vizibilitate AI", "Testez întrebările reale ale clienților tăi în ChatGPT, Gemini, Claude, Perplexity și răspunsurile AI din Google. Notez dacă ești menționat, pe ce loc, cum ești descris, dacă informațiile sunt corecte și ce concurenți apar."],
            ["Claritatea identității", "Același nume, descriere și date de contact pe site, în directoare, pe LinkedIn și pe profilul Google al afacerii."],
            ["Date structurate", "Schema pentru organizație, serviciu, FAQ, articole și persoană (JSON-LD), pentru ca motoarele să înțeleagă exact cine ești și ce faci."],
            ["Conținut care răspunde", "Pagini care răspund direct la întrebările pacienților sau clienților, în limbaj clar și ușor de citat."],
            ["Optimizare site (tehnic)", "Indexare, viteză, Core Web Vitals, sitemap, robots.txt care permite crawlerele AI relevante și fișier llms.txt."],
            ["Autoritate și mențiuni", "Recenzii, directoare, prezență în surse de încredere. Aici se câștigă pe termen lung."],
            ["SEO local", "Profilul Google al afacerii (Google Business Profile), citări locale în directoare și un proces simplu pentru recenzii, ca să apari când oamenii caută „în zona mea”."],
            ["Monitorizare lunară", "Retestez întrebările și îți trimit un raport în limbaj simplu: ce s-a schimbat și ce urmează."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-md border border-line p-6"><h3 className="font-serif text-xl font-bold">{t}</h3><p className="mt-2 leading-relaxed text-slate-ink">{d}</p></div>
          ))}
        </div>
      </Section>

      <Section id="asteptari-realiste" tint>
        <H2>Așteptări realiste</H2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-ink">
          <p>Răspunsurile AI nu sunt la fel pentru toată lumea și se pot schimba de la o zi la alta. Modelele se actualizează în ritmul lor, iar rezultatele apar în săptămâni sau luni. Nimeni serios nu poate garanta un loc anume.</p>
          <p>Ce promit: măsurăm de unde pornești, schimbăm ce influențează recomandările și îți arăt progresul, cu date.</p>
        </div>
      </Section>

      <Section id="cum-putem-lucra-impreuna">
        <H2>Cum putem lucra împreună</H2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Audit gratuit", "Unic, manual, livrat în maximum 24 de ore. Fără obligații."],
            ["Proiect de implementare", "Aplic corecturile din audit, singur sau ca parte dintr-un redesign sau un site nou."],
            ["Colaborare lunară SEO/GEO", "Conținut, întreținere tehnică, monitorizare și raport lunar."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-md border border-line p-6"><h3 className="font-serif text-xl font-bold">{t}</h3><p className="mt-2 text-slate-ink leading-relaxed">{d}</p></div>
          ))}
        </div>
        <p className="mt-6 text-slate-ink">Pentru implementare și colaborare lunară primești o ofertă clară, nu prețuri fixe. <Link className="font-semibold text-brass-dark underline underline-offset-4" href="/contact">Cere o ofertă</Link>.</p>
      </Section>

      <Section id="cum-arata-un-audit" tint>
        <H2>Cum arată un audit</H2>
        <p className="mt-3 max-w-3xl text-slate-ink">Format orientativ. Tabelul de mai jos este un <strong>exemplu ilustrativ</strong>, nu date reale despre vreo afacere.</p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">Exemplu de format al unui audit de vizibilitate AI</caption>
            <thead><tr className="border-b border-navy/20 text-sm uppercase tracking-wider text-slate-ink">
              {["Întrebare testată", "Menționat?", "Poziție", "Ton", "Corect?"].map((h) => (<th key={h} scope="col" className="py-3 pr-4">{h}</th>))}</tr></thead>
            <tbody className="divide-y divide-line text-slate-ink">
              {rows.map((r) => (<tr key={r[0]}>{r.map((c, i) => (i === 0 ? <th key={i} scope="row" className="py-4 pr-4 font-medium text-navy">{c}</th> : <td key={i} className="py-4 pr-4">{c}</td>))}</tr>))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="ghiduri">
        <Guides title="Ghiduri SEO și vizibilitate în AI" slugs={["ce-este-seo", "google-business-profile-ghid", "ce-este-geo-optimizare-pentru-motoare-ai", "cum-verifici-daca-ai-iti-mentioneaza-afacerea", "schema-markup-pentru-clinici-si-cabinete"]} />
      </Section>

      <Section id="intrebari" tint>
        <FAQ items={faq} />
        <p className="mt-8 text-slate-ink">Vrei să citești mai mult? <Link className="font-semibold text-brass-dark underline underline-offset-4" href="/articole/ce-este-geo-optimizare-pentru-motoare-ai">Ce este GEO și cum diferă de SEO</Link>.</p>
      </Section>
      <CtaBand />
    </>
  );
}
