import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { abs, personSchema } from "@/lib/schema";
import { brand, phone, site, social } from "@/lib/site-config";
import { vcardPath } from "@/lib/vcard";

const title = `Linkuri: ${site.name}`;
const description = "Toate linkurile lui Dragoș Catană, web designer și specialist SEO din Cluj-Napoca: audit gratuit, programare, WhatsApp, e-mail și profiluri.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/linkuri/" },
  openGraph: { type: "profile", locale: "ro_RO", siteName: site.name, url: "/linkuri/", title, description, images: [{ url: brand.og.ro, width: 1200, height: 630 }] },
};

type Item = { label: string; note?: string; href: string; external?: boolean; primary?: boolean };

/** The big buttons, in the order a new client needs them. */
const main: Item[] = [
  { label: "Audit gratuit de vizibilitate", note: "Scris de mine, în 24 de ore", href: "/audit-gratuit-vizibilitate-ai/", primary: true },
  { label: "Programează o discuție de 30 de minute", href: site.calendly, external: true },
  { label: "Scrie-mi pe WhatsApp", note: phone.display, href: social.whatsapp.url, external: true },
  { label: "Trimite-mi un e-mail", note: site.email, href: `mailto:${site.email}` },
  { label: "Salvează contactul în telefon", href: vcardPath },
  { label: "Site-ul meu", note: "Servicii, lucrări și contact", href: "/" },
  { label: "Articole", note: "SEO, Google și căutare AI, explicate simplu", href: "/articole/" },
];

/** Profiles: same entity as the site (they are also in the schema sameAs). */
const profiles = [social.linkedin, social.instagram, social.trustpilot, social.googleMaps, social.github, social.behance, social.dribbble];

const row = "flex min-h-16 w-full items-center justify-between gap-4 rounded-xl border-2 px-5 py-3 text-left transition-transform hover:-translate-y-0.5";

function Row({ item }: { item: Item }) {
  const cls = `${row} ${item.primary ? "border-ink bg-orange text-ink" : "border-ink bg-white text-ink hover:bg-ink hover:text-paper"}`;
  const body = (
    <>
      <span>
        <span className="block text-[16px] font-bold leading-snug">{item.label}</span>
        {item.note && <span className="mt-0.5 block text-sm opacity-75">{item.note}</span>}
      </span>
      <span aria-hidden="true" className="text-xl">{item.external ? "↗" : "→"}</span>
    </>
  );
  if (item.external) return <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>{body}</a>;
  if (item.href.endsWith(".vcf") || item.href.startsWith("mailto:")) return <a href={item.href} className={cls}>{body}</a>;
  return <Link href={item.href} className={cls}>{body}</Link>;
}

export default function Links() {
  return (
    <main className="mx-auto w-full max-w-md px-4 py-10 sm:py-14">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "ProfilePage", "@id": `${abs("/linkuri/")}#page`, url: abs("/linkuri/"), name: title, description, inLanguage: "ro-RO", isPartOf: { "@id": `${site.url}/#website` }, mainEntity: { "@id": `${site.url}/#person` } },
          personSchema,
        ],
      }} />
      <header className="text-center">
        <span className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-ink shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, SVG mark */}
          <img src={brand.markWhite} width="48" height="48" alt="" className="h-12 w-12" />
        </span>
        <h1 className="mt-5 font-serif text-4xl font-extrabold">{site.name}</h1>
        <p className="mt-2 text-[15px] font-semibold">Web design și SEO pentru căutare AI · <span className="whitespace-nowrap">{site.city}</span></p>
        <p className="mt-1 font-accent text-xl italic text-orange-ink">{brand.tagline.ro}</p>
      </header>

      <ul className="mt-8 space-y-3">
        {main.map((item) => <li key={item.label}><Row item={item} /></li>)}
      </ul>

      <h2 className="mt-10 text-center text-sm font-semibold uppercase tracking-wider text-muted">Mă găsești și pe</h2>
      <ul className="mt-4 flex flex-wrap justify-center gap-2">
        {profiles.map((p) => (
          <li key={p.name}>
            <a href={p.url} target="_blank" rel="me noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border-2 border-ink/20 bg-white px-4 text-[15px] font-semibold hover:border-ink">{p.name}</a>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-center text-sm text-muted">
        <Link href="/carte-de-vizita/" className="font-semibold text-orange-ink underline underline-offset-4">Carte de vizită</Link>
        <span aria-hidden="true"> · </span>© {new Date().getFullYear()} {site.legalName}
      </p>
    </main>
  );
}
