import Link from "next/link";
import { Breadcrumbs, Button, CtaBand, Eyebrow, FAQ, H2, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Guides } from "@/components/Guides";
import { breadcrumb, serviceSchema } from "@/lib/schema";
import { href, type Lang } from "@/lib/site-map";

const text = {
  ro: { home: "Acasă", services: "Servicii", audit: "Audit gratuit AI", quote: "Cere o ofertă", needs: "Ce caută clienții tăi înainte să te contacteze", structure: "Cum structurez site-ul", vis: "Vizibilitate în Google și în AI", visA: "Fiecare pagină are date structurate potrivite", visB: "titluri formulate ca întrebări reale și răspunsuri scurte, ușor de citat. Informațiile de contact și identitatea rămân identice pe site, în profilul Google al afacerii și în directoare, ca asistenții AI să te poată verifica. Detalii în", visLink: "serviciul de SEO și vizibilitate în AI" },
  en: { home: "Home", services: "Services", audit: "Free AI audit", quote: "Get a quote", needs: "What your clients look for before they contact you", structure: "How I structure the site", vis: "Visibility on Google and in AI", visA: "Every page has the right structured data", visB: "headings phrased as real questions and short answers that are easy to quote. Your contact details and identity stay identical on the site, in your Google Business Profile and in directories, so AI assistants can verify you. More in the", visLink: "SEO and AI visibility service" },
} as const;

export type VerticalProps = {
  path: string;
  crumb: string;
  eyebrow: string;
  h1: string;
  lead: string;
  schemaName: string;
  schemaDescription: string;
  needs: { t: string; d: string }[];
  structure: { t: string; d: string }[];
  schemaTypes: string;
  caution: { title: string; text: string };
  faq: { q: string; a: string }[];
  ctaTitle: string;
  guides?: string[];
  lang?: Lang;
};

export function VerticalPage(p: VerticalProps) {
  const lang = p.lang ?? "ro";
  const t = text[lang];
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: t.home, path: href("home", lang) }, { name: t.services, path: href("services", lang) }, { name: p.crumb, path: p.path }]),
        serviceSchema(p.schemaName, p.schemaDescription, p.path)]} />
      <Section id="intro">
        <Breadcrumbs lang={lang} items={[{ name: t.home, href: href("home", lang) }, { name: t.services, href: href("services", lang) }, { name: p.crumb }]} />
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">{p.h1}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">{p.lead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={href("audit", lang)}>{t.audit}</Button>
          <Button href={href("contact", lang)} variant="ghost">{t.quote}</Button>
        </div>
      </Section>

      <Section id="ce-cauta-clientii" tint>
        <H2>{t.needs}</H2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {p.needs.map((n) => (
            <div key={n.t} className="rounded-md border border-line bg-white p-6"><h3 className="font-serif text-xl font-bold">{n.t}</h3><p className="mt-2 leading-relaxed text-slate-ink">{n.d}</p></div>
          ))}
        </div>
      </Section>

      <Section id="structura">
        <H2>{t.structure}</H2>
        <ol className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {p.structure.map((n, i) => (
            <li key={n.t} className="flex gap-4">
              <span className="font-serif text-3xl font-bold text-brass-dark" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
              <div><h3 className="text-lg font-semibold">{n.t}</h3><p className="mt-1 leading-relaxed text-slate-ink">{n.d}</p></div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="vizibilitate" tint>
        <H2>{t.vis}</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-ink">
          {t.visA} ({p.schemaTypes}), {t.visB}{" "}
          <Link className="font-semibold text-brass-dark underline underline-offset-4" href={href("seo", lang)}>{t.visLink}</Link>.
        </p>
      </Section>

      <Section id="de-retinut">
        <div className="max-w-3xl rounded-md border border-brass-dark bg-canvas p-7">
          <h2 className="font-serif text-2xl font-bold">{p.caution.title}</h2>
          <p className="mt-3 leading-relaxed text-slate-ink">{p.caution.text}</p>
        </div>
      </Section>

      {p.guides && <Section id="ghiduri"><Guides slugs={p.guides} /></Section>}
      <Section id="intrebari" tint><FAQ items={p.faq} lang={lang} /></Section>
      <CtaBand title={p.ctaTitle} lang={lang} />
    </>
  );
}
