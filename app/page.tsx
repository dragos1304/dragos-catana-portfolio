import Link from "next/link";
import type { Metadata } from "next";
import { Button, Container, Eyebrow, FAQ, H2, Section, CtaBand } from "@/components/ui";
import { AnswerCard } from "@/components/AnswerCard";
import { Reveal } from "@/components/Reveal";
import { services, site } from "@/lib/site-config";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Web design și SEO pentru căutare AI în România | Dragoș Cătană" },
  description:
    "Redesign și creare de website-uri, SEO și optimizare pentru ChatGPT, Gemini și Perplexity. Pentru clinici, cabinete de avocatură și afaceri locale. Audit gratuit în 24 de ore.",
  alternates: { canonical: "/" },
};

const faq = [
  {
    q: "Ce înseamnă să fii „recomandat de AI”?",
    a: "Mulți clienți întreabă acum ChatGPT, Gemini sau Perplexity „cine e un bun avocat sau o bună clinică în orașul meu?”. Asistentul alege dintre sursele pe care le înțelege și în care are încredere. Optimizarea pentru AI (GEO) înseamnă că site-ul și prezența ta online sunt clare, consecvente și ușor de citat.",
  },
  {
    q: "Poți garanta locul 1 în ChatGPT?",
    a: "Nu, și nimeni nu poate. Răspunsurile AI variază, iar modelele se actualizează în ritmul lor. Promit un proces măsurabil: testez întrebările reale ale clienților tăi înainte și după, iar tu vezi exact ce s-a schimbat.",
  },
  {
    q: "Cât costă?",
    a: "Depinde de proiect, așa că nu afișez prețuri fixe. Auditul inițial e gratuit. Pentru un redesign, un website nou sau o colaborare lunară de SEO și GEO, îți trimit o ofertă clară după o discuție scurtă.",
  },
  {
    q: "Lucrezi doar în Cluj?",
    a: "Locuiesc în Cluj-Napoca, dar lucrez online cu clienți din toată România. Serviciile pot fi oferite și în engleză, franceză sau germană, ca opțiune suplimentară.",
  },
  {
    q: "Cât durează până primesc auditul gratuit?",
    a: "Maximum 24 de ore de la cerere. Îl fac manual, nu cu un raport generat automat.",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-navy text-white">
        <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <Eyebrow dark>Web design · SEO · Vizibilitate în AI</Eyebrow>
            <h1 className="font-serif text-4xl font-semibold leading-[1.1] sm:text-6xl">
              Fii afacerea pe care o recomandă <span className="text-brass">AI-ul</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Site-uri moderne și SEO construite să apară în Google și să fie citate de ChatGPT, Gemini și Perplexity.
              Pentru clinici, cabinete de avocatură și afaceri locale din România.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/audit-gratuit-vizibilitate-ai">Audit gratuit AI</Button>
              <Button href="/servicii" variant="ghost-dark">Vezi serviciile</Button>
            </div>
            <p className="mt-5 text-sm text-white/60">Audit manual, gratuit, livrat în maximum 24 de ore.</p>
          </div>
          <AnswerCard />
        </Container>
      </section>

      <Section>
        <div className="max-w-3xl">
          <Eyebrow>De ce acum</Eyebrow>
          <H2>Clienții tăi întreabă din ce în ce mai des un asistent AI, nu doar Google.</H2>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            ["Alegerea se face în răspuns", "Un pacient sau un client poate primi un singur nume, direct în conversație. Dacă nu ești acolo, nu ești luat în calcul."],
            ["AI-ul citează ce înțelege", "Asistenții se bazează pe pagini clare, date structurate și informații consecvente despre tine în mai multe locuri."],
            ["Majoritatea site-urilor nu sunt pregătite", "Multe site-uri locale sunt vechi, lente sau vagi. Acolo e avantajul tău, dacă acționezi primul."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <h3 className="font-serif text-xl font-semibold">{t}</h3>
              <p className="mt-3 leading-relaxed text-slate-ink">{d}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tint>
        <Eyebrow>Servicii</Eyebrow>
        <H2>Trei servicii, o singură poveste: să fii găsit.</H2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/servicii/${s.slug}`}
              className={`group flex flex-col rounded-2xl border p-7 transition-shadow hover:shadow-lg ${
                "flagship" in s ? "border-brass bg-white ring-1 ring-brass" : "border-line bg-white"
              }`}
            >
              {"flagship" in s && <span className="mb-3 w-fit rounded-full bg-brass px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy">Serviciul principal</span>}
              <h3 className="font-serif text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-ink">{s.short}</p>
              <ul className="mt-5 space-y-2 text-sm text-navy/80">
                {s.points.map((p) => (<li key={p} className="flex gap-2"><span aria-hidden className="text-brass-dark">✓</span>{p}</li>))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brass-dark">
                Află mai multe <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Pentru cine lucrez</Eyebrow>
        <H2>Practici și afaceri locale unde încrederea decide.</H2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            ["Clinici și cabinete medicale", "Pacienții caută și compară înainte să sune. Site-ul și prezența ta trebuie să inspire calm și încredere."],
            ["Cabinete de avocatură", "Clienții caută un specialist pe o problemă concretă. Paginile pe domenii de practică clare fac diferența."],
            ["Afaceri locale de servicii", "Dacă oamenii te caută „în zona mea”, vizibilitatea locală în Google și în AI aduce direct clienți."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-line p-6">
              <h3 className="font-serif text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-slate-ink leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tint>
        <Eyebrow>Cum lucrăm</Eyebrow>
        <H2>Patru pași, fără surprize.</H2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Audit", "Văd cum apari acum în Google și în răspunsurile AI. Gratuit, în 24 de ore."],
            ["02", "Plan", "Stabilim obiectivele și ce schimbăm, în ordinea impactului. Primești o ofertă clară."],
            ["03", "Construire / optimizare", "Design, cod, conținut și date structurate. Tu vezi progresul la fiecare etapă."],
            ["04", "Măsurare", "Retestez întrebările clienților tăi și îți arăt ce s-a schimbat, în limbaj simplu."],
          ].map(([n, t, d]) => (
            <li key={n}>
              <span className="font-serif text-4xl font-semibold text-brass-dark">{n}</span>
              <h3 className="mt-2 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-slate-ink leading-relaxed">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Lucrare recentă</Eyebrow>
            <H2>Cheesy Media: de la o pagină lungă la un site complet.</H2>
            <p className="mt-4 text-lg leading-relaxed text-slate-ink">
              Am refăcut site-ul unei agenții foto-video din Cluj-Napoca. Rezultatul măsurat pe mobil: scorul de performanță
              de la 82 la 100 și cel de accesibilitate de la 96 la 100, în Lighthouse.
            </p>
            <div className="mt-6"><Button href="/lucrari/cheesy-media" variant="ghost">Vezi studiul de caz</Button></div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="rounded-2xl border border-line p-6"><p className="text-sm text-slate-ink">Înainte</p><p className="font-serif text-5xl font-semibold text-navy/70">82</p><p className="text-sm text-slate-ink">performanță</p></div>
            <div className="rounded-2xl border border-brass bg-white p-6 ring-1 ring-brass"><p className="text-sm text-slate-ink">După</p><p className="font-serif text-5xl font-semibold text-brass-dark">100</p><p className="text-sm text-slate-ink">performanță</p></div>
          </div>
        </div>
      </Section>

      <Section tint>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <Eyebrow>Cine e în spatele site-ului</Eyebrow>
            <H2>Un economist care construiește site-uri.</H2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-slate-ink">
              Sunt Dragoș, student la Economie (media 4.0) și antreprenor din adolescență. Am rulat afaceri de e-commerce și
              marketing, așa că judec un website după ce aduce proprietarului, nu doar după cum arată.
            </p>
            <div className="mt-6"><Button href="/despre" variant="ghost">Citește povestea completă</Button></div>
          </div>
        </div>
      </Section>

      <Section><FAQ items={faq} /></Section>
      <CtaBand />
    </>
  );
}
