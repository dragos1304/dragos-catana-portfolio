import Link from "next/link";
import type { Metadata } from "next";
import { Button, Container, Eyebrow, FAQ, H2, Section, CtaBand } from "@/components/ui";
import { AnswerCard } from "@/components/AnswerCard";
import { Journey } from "@/components/Journey";
import { services, site } from "@/lib/site-config";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Web designer freelancer din Cluj: site-uri și SEO | Dragoș Cătană" },
  description:
    "Web designer freelancer din Cluj-Napoca: creare site și optimizare SEO pentru clinici, avocați și afaceri locale. Audit SEO gratuit în 24 de ore.",
  alternates: { canonical: "/" },
};

const faq = [
  {
    q: "Ce înseamnă să fii „recomandat de AI”?",
    a: "Mulți clienți întreabă acum ChatGPT, Gemini sau Perplexity „cine e un bun avocat sau o bună clinică în orașul meu?”. Asistentul alege dintre sursele pe care le înțelege și în care are încredere. Optimizarea pentru AI (GEO) înseamnă că site-ul și prezența ta online sunt clare, consecvente și ușor de citat.",
  },
  {
    q: "Poți garanta locul 1 în Google sau în ChatGPT?",
    a: "Nu, și nimeni nu poate. Rezultatele variază, iar modelele se actualizează în ritmul lor. Promit un proces măsurabil: testez întrebările reale ale clienților tăi înainte și după, iar tu vezi exact ce s-a schimbat.",
  },
  {
    q: "Cât costă un site sau optimizarea SEO?",
    a: "Depinde de proiect, așa că nu afișez prețuri fixe. Auditul inițial e gratuit. Pentru creare site, redesign sau o colaborare lunară de SEO, îți trimit o ofertă clară după o discuție scurtă.",
  },
  {
    q: "Lucrezi doar în Cluj-Napoca?",
    a: "Locuiesc în Cluj-Napoca, dar lucrez online cu antreprenori din toată România. Serviciile pot fi oferite și în engleză, franceză sau germană, ca opțiune suplimentară.",
  },
  {
    q: "Cu cine vorbesc, de fapt?",
    a: "Cu mine, Dragoș. Nu sunt o agenție: eu fac auditul, eu construiesc site-ul și tot eu îți răspund la mesaje, în maximum 24 de ore.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero: one statement sentence plus the person behind it. */}
      <section id="acasa" aria-labelledby="acasa-titlu" className="border-b border-line bg-mist">
        <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.25fr_1fr] lg:items-end">
          <div>
            <Eyebrow>Web designer freelancer · SEO · Vizibilitate în AI</Eyebrow>
            <h1 id="acasa-titlu" className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-navy sm:text-6xl">
              Clienții te caută. <em className="text-brass-dark">Fă-i să te găsească.</em>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-ink">
              Sunt Dragoș Cătană, web designer freelancer din Cluj-Napoca. Fac{" "}
              <Link href="/servicii/creare-website" className="underline decoration-line underline-offset-4 hover:decoration-navy">creare de site-uri</Link> și{" "}
              <Link href="/servicii/seo-vizibilitate-ai" className="underline decoration-line underline-offset-4 hover:decoration-navy">optimizare SEO</Link>{" "}
              pentru clinici, cabinete de avocatură și afaceri locale din România, ca să apari în Google și în răspunsurile ChatGPT.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/audit-gratuit-vizibilitate-ai">Cere auditul gratuit</Button>
              <Button href="#drumul" variant="ghost">Vezi cum lucrăm</Button>
            </div>
            <p className="mt-5 text-sm text-slate-ink">Audit manual, gratuit, în maximum 24 de ore. Îl fac eu, nu un program.</p>
          </div>
          <aside aria-label="Pe scurt despre mine" className="rounded-md border border-line bg-canvas p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <span aria-hidden className="grid h-14 w-14 place-items-center rounded-full bg-navy font-serif text-xl text-mist">DC</span>
              <div>
                <p className="font-serif text-xl font-medium text-navy">Dragoș Cătană</p>
                <p className="text-sm text-slate-ink">{site.city} · lucrez cu toată România</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 border-t border-line pt-6 text-[15px] leading-relaxed text-slate-ink">
              <li>Economist (UBB Cluj, media 4.0) și antreprenor de la 16 ani.</li>
              <li>Construiesc site-uri rapide, clare și ușor de citat de AI.</li>
              <li>Răspund personal la orice mesaj în {site.responseTime}.</li>
            </ul>
          </aside>
        </Container>
      </section>

      {/* The trigger moment from the user journey. */}
      <Section id="momentul">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Momentul în care îți dai seama</Eyebrow>
            <H2>Un pacient îți spune că a întrebat ChatGPT. Și că i-a recomandat pe altcineva.</H2>
            <p className="mt-6 text-lg leading-relaxed text-slate-ink">
              Clienții tăi nu mai caută doar în Google. Întreabă un asistent AI și primesc un singur nume, direct în
              conversație. Asistentul alege afacerile pe care le înțelege și le poate verifica: un site clar, informații
              consecvente, un profil Google îngrijit.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-ink">
              Majoritatea site-urilor locale nu sunt pregătite pentru asta. Acolo e avantajul tău, dacă acționezi primul.
            </p>
          </div>
          <AnswerCard />
        </div>
      </Section>

      {/* The journey, stage by stage, with "you" and "me" in every step. */}
      <Section id="drumul" tint>
        <div className="max-w-3xl">
          <Eyebrow>Drumul nostru, pas cu pas</Eyebrow>
          <H2>De la „nu mă găsește nimeni” la „m-a recomandat ChatGPT”.</H2>
          <p className="mt-5 text-lg leading-relaxed text-slate-ink">
            Fără surprize și fără intermediari. La fiecare pas știi ce faci tu și ce fac eu.
          </p>
        </div>
        <Journey />
        <div className="mt-10"><Button href="/audit-gratuit-vizibilitate-ai">Începe cu pasul 1</Button></div>
      </Section>

      <Section id="servicii">
        <Eyebrow>Servicii</Eyebrow>
        <H2>Trei servicii, un singur scop: să fii găsit și ales.</H2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/servicii/${s.slug}`}
              className={`group flex flex-col rounded-md border bg-canvas p-7 transition-colors hover:border-navy ${
                "flagship" in s ? "border-brass-dark" : "border-line"
              }`}
            >
              {"flagship" in s && <span className="mb-3 w-fit rounded-sm bg-navy px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-mist">Serviciul principal</span>}
              <h3 className="font-serif text-2xl font-medium text-navy">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-ink">{s.short}</p>
              <ul className="mt-5 space-y-2 text-sm text-navy/85">
                {s.points.map((p) => (<li key={p} className="flex gap-2"><span aria-hidden className="text-brass-dark">—</span>{p}</li>))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-brass-dark">
                Află mai multe <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="pentru-cine" tint>
        <Eyebrow>Pentru cine lucrez</Eyebrow>
        <H2>Antreprenori și practici locale unde încrederea decide.</H2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            ["Clinici și cabinete medicale", "Pacienții caută și compară înainte să sune. Un site de clinică trebuie să inspire calm, să arate echipa și să facă programarea ușoară.", "/servicii/website-clinici-medicale"],
            ["Cabinete de avocatură", "Clienții caută un specialist pe o problemă concretă. Pagini clare pe domenii de practică și un profil Google complet fac diferența.", "/servicii/website-cabinete-avocatura"],
            ["Afaceri locale de servicii", "Dacă oamenii te caută „în zona mea”, SEO local în Google și vizibilitatea în AI aduc direct clienți.", "/servicii/seo-vizibilitate-ai"],
          ].map(([t, d, href]) => (
            <Link key={t} href={href} className="group rounded-md border border-line bg-canvas p-6 transition-colors hover:border-navy">
              <h3 className="font-serif text-xl font-medium text-navy">{t}</h3>
              <p className="mt-2 leading-relaxed text-slate-ink">{d}</p>
              <span className="mt-4 inline-block font-semibold text-brass-dark">Vezi cum lucrez →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="lucrari">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Lucrare recentă</Eyebrow>
            <H2>Cheesy Media: de la o pagină lungă la un site complet.</H2>
            <p className="mt-4 text-lg leading-relaxed text-slate-ink">
              Am refăcut site-ul unei agenții foto-video din Cluj-Napoca. Rezultatul măsurat pe mobil, în Lighthouse:
              performanța de la 82 la 100 și accesibilitatea de la 96 la 100.
            </p>
            <div className="mt-6"><Button href="/lucrari/cheesy-media" variant="ghost">Vezi studiul de caz</Button></div>
          </div>
          <dl className="grid grid-cols-2 gap-4 text-center">
            <div className="rounded-md border border-line p-6"><dt className="text-sm text-slate-ink">Performanță, înainte</dt><dd className="mt-1 font-serif text-5xl font-medium text-navy/70">82</dd></div>
            <div className="rounded-md border border-brass-dark p-6"><dt className="text-sm text-slate-ink">Performanță, după</dt><dd className="mt-1 font-serif text-5xl font-medium text-brass-dark">100</dd></div>
            <div className="rounded-md border border-line p-6"><dt className="text-sm text-slate-ink">Accesibilitate, înainte</dt><dd className="mt-1 font-serif text-5xl font-medium text-navy/70">96</dd></div>
            <div className="rounded-md border border-brass-dark p-6"><dt className="text-sm text-slate-ink">Accesibilitate, după</dt><dd className="mt-1 font-serif text-5xl font-medium text-brass-dark">100</dd></div>
          </dl>
        </div>
      </Section>

      {/* A personal letter: the "is he real?" moment of the journey. */}
      <Section id="despre" tint>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>O scrisoare de la mine</Eyebrow>
            <H2>De ce fac asta.</H2>
          </div>
          <div>
            <div className="space-y-5 font-serif text-2xl leading-relaxed text-navy">
              <p>Am început să construiesc afaceri la 16 ani: magazine online, apoi marketing pentru alții. Am învățat repede un lucru incomod: un produs bun nu ajunge nicăieri dacă oamenii nu îl găsesc și nu au încredere în el.</p>
              <p>Studiez Economia la Universitatea Babeș-Bolyai din Cluj, cu schimburi la Paris și în statul New York. Gândesc în costuri, riscuri și rezultate, așa că judec un site după ce aduce afacerii tale, nu după cât de spectaculos arată.</p>
              <p>Lucrez singur, cu bună știință. Omul cu care vorbești la prima discuție este cel care îți face auditul, îți construiește site-ul și îți răspunde la mesaje.</p>
              <p className="font-sans text-base text-slate-ink">— Dragoș Cătană, {site.city}</p>
            </div>
            <figure className="mt-10 border-l-2 border-brass-dark pl-5">
              <blockquote className="text-lg leading-relaxed text-navy">
                „He was one of the few students I have worked with who managed to engage the majority of the audience… making him the person his peers would turn to when they felt stuck.”
              </blockquote>
              <figcaption className="mt-3 text-sm text-slate-ink">Dan C. Lungescu, PhD, lector, Universitatea Babeș-Bolyai (citat original în engleză)</figcaption>
            </figure>
            <div className="mt-8"><Button href="/despre" variant="ghost">Citește povestea completă</Button></div>
          </div>
        </div>
      </Section>

      <Section id="intrebari"><FAQ items={faq} /></Section>
      <CtaBand id="contact" />
    </>
  );
}
