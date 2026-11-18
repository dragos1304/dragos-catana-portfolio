import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs, Button, CtaBand, Eyebrow, H2, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { abs, breadcrumb } from "@/lib/schema";
import { site } from "@/lib/site-config";

const path = "/lucrari/cheesy-media";
export const metadata: Metadata = {
  title: "Studiu de caz: redesign website Cheesy Media",
  description:
    "Redesign pentru o agenție foto-video din Cluj-Napoca: de la o pagină lungă la un site complet. Lighthouse mobil: performanță 82 → 100, accesibilitate 96 → 100.",
  alternates: { canonical: `${path}/` },
};

const scores = [
  ["Performanță", 82, 100],
  ["Accesibilitate", 96, 100],
  ["Bune practici", 100, 100],
  ["SEO", 100, 100],
] as const;

const changes = [
  ["Structură", "O singură pagină lungă, cu formular Google pentru cereri personalizate", "Pagini dedicate: servicii (foto, video, social media, web), portofoliu, proces, contact"],
  ["Claritatea ofertei", "Blocuri de servicii cu formulări generale", "Proces în 4 pași, trei pachete (Start, Growth, Full Content, cu ofertă personalizată), FAQ"],
  ["Cum te contactează clienții", "Telefon și formular Google", "Cerere de ofertă, telefon și WhatsApp"],
  ["Bază SEO și partajare", "Metadate generale", "Titluri și descrieri axate pe servicii și Cluj-Napoca, imagini pentru partajare, limba setată pe română"],
  ["Vizual", "Fotografii stoc", "Imagini și identitate proprii, cu mascota brandului"],
];

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: "Acasă", path: "/" }, { name: "Lucrări", path: "/lucrari" }, { name: "Cheesy Media", path }]),
        { "@context": "https://schema.org", "@type": "Article", headline: "Studiu de caz: redesign website Cheesy Media", description: "Redesign pentru o agenție foto-video din Cluj-Napoca, cu rezultate măsurate în Lighthouse.", url: abs(path), inLanguage: "ro-RO", author: { "@id": `${site.url}/#person` }, datePublished: "2026-11-18", dateModified: "2026-11-18" }]} />
      <Section>
        <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: "Lucrări", href: "/lucrari" }, { name: "Cheesy Media" }]} />
        <Eyebrow>Studiu de caz · Redesign</Eyebrow>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">Cheesy Media: de la o pagină lungă la un site complet.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">
          Cheesy Media este o agenție de foto, video și social media din Cluj-Napoca. Am refăcut site-ul ei, împreună cu proprietarii, pentru a explica mai clar ce oferă și a-i ajuta pe clienți să ceară o ofertă mai ușor.
        </p>
        <p className="mt-3 text-sm text-slate-ink">
          Înainte: <a className="underline underline-offset-4" href="https://cheesymedia.netlify.app" target="_blank" rel="noopener noreferrer">cheesymedia.netlify.app</a> · După:{" "}
          <a className="underline underline-offset-4" href="https://cheesy-media.netlify.app" target="_blank" rel="noopener noreferrer">cheesy-media.netlify.app</a>
        </p>
      </Section>

      <Section tint>
        <H2>Problema</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-ink">
          Site-ul inițial funcționa, dar punea toată oferta pe o singură pagină lungă și nu avea pagini separate pentru servicii, portofoliu sau proces. Cererile personalizate treceau printr-un formular Google, iar imaginile erau fotografii stoc.
        </p>
      </Section>

      <Section>
        <H2>Ce am schimbat</H2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left align-top">
            <caption className="sr-only">Comparație între site-ul vechi și cel nou</caption>
            <thead><tr className="border-b border-navy/20 text-sm uppercase tracking-wider text-slate-ink">
              <th scope="col" className="py-3 pr-4"> </th><th scope="col" className="py-3 pr-4">Înainte</th><th scope="col" className="py-3">După</th></tr></thead>
            <tbody className="divide-y divide-line">
              {changes.map(([a, b, c]) => (
                <tr key={a}><th scope="row" className="py-4 pr-4 font-semibold">{a}</th><td className="py-4 pr-4 text-slate-ink">{b}</td><td className="py-4 text-slate-ink">{c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tint>
        <Eyebrow>Rezultat măsurat</Eyebrow>
        <H2>Scoruri Lighthouse pe mobil</H2>
        <p className="mt-3 max-w-3xl text-slate-ink">
          Măsurat cu Google PageSpeed Insights (Lighthouse), pe mobil, pe 18 noiembrie 2026. Scorurile sunt estimări și pot varia ușor de la o rulare la alta.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <caption className="sr-only">Scoruri Lighthouse înainte și după</caption>
            <thead><tr className="border-b border-navy/20 text-sm uppercase tracking-wider text-slate-ink">
              <th scope="col" className="py-3 pr-4">Categorie</th><th scope="col" className="py-3 pr-4">Înainte</th><th scope="col" className="py-3">După</th></tr></thead>
            <tbody className="divide-y divide-line">
              {scores.map(([n, a, b]) => (
                <tr key={n}><th scope="row" className="py-4 pr-4 font-semibold">{n}</th><td className="py-4 pr-4 text-xl">{a}</td><td className="py-4 text-xl font-semibold text-brass-dark">{b}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <figure>
            <Image src="/lucrari/cheesy-media/lighthouse-inainte.webp" width={1600} height={980} alt="Raport Lighthouse pentru site-ul vechi: performanță 82, accesibilitate 96, bune practici 100, SEO 100" sizes="(min-width: 1152px) 560px, (min-width: 768px) 45vw, 92vw" className="rounded-2xl border border-line" />
            <figcaption className="mt-2 text-sm text-slate-ink">Înainte: performanță 82, accesibilitate 96.</figcaption>
          </figure>
          <figure>
            <Image src="/lucrari/cheesy-media/lighthouse-dupa.webp" width={1600} height={953} alt="Raport Lighthouse pentru site-ul nou: 100 la performanță, accesibilitate, bune practici și SEO" sizes="(min-width: 1152px) 560px, (min-width: 768px) 45vw, 92vw" className="rounded-2xl border border-line" />
            <figcaption className="mt-2 text-sm text-slate-ink">După: 100 la toate cele patru categorii.</figcaption>
          </figure>
        </div>
        <p className="mt-6 max-w-3xl text-slate-ink">
          Nu public cifre de trafic sau de cereri, pentru că nu am date confirmate de client. Când le avem, le adaug aici.
        </p>
      </Section>

      <Section>
        <H2>Stack</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-ink">Next.js, găzduit pe Netlify.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/servicii/redesign-website">Vezi serviciul de redesign</Button>
          <Button href="/contact" variant="ghost">Cere o ofertă</Button>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
