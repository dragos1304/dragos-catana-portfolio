import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PocketHeading, PocketRow, type PocketItem } from "@/components/PocketRow";
import { abs, personSchema } from "@/lib/schema";
import { brand, phone, site, social } from "@/lib/site-config";
import { vcardPath } from "@/lib/vcard";

const title = `Linkuri ${site.name}: web design și SEO în Cluj`;
const description = "Toate linkurile lui Dragoș Catană, web designer și specialist SEO din Cluj-Napoca: audit gratuit, programare, WhatsApp, e-mail și profiluri.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/linkuri/" },
  openGraph: { type: "profile", locale: "ro_RO", siteName: site.name, url: "/linkuri/", title, description, images: [{ url: brand.og.ro, width: 1200, height: 630 }] },
};

/** Three short groups, in the order a new client needs them. */
const start: PocketItem[] = [
  { emoji: "🔍", label: "Cere un audit gratuit", note: "Îți spun ce lipsește ca să te găsească Google și AI. Scris de mine, în 24 de ore.", href: "/audit-gratuit-vizibilitate-ai/", primary: true, badge: "Recomandat" },
  { emoji: "📅", label: "Programează o discuție", note: "30 de minute online, gratuit. Alegi tu ora.", href: site.calendly, external: true },
];
const contact: PocketItem[] = [
  { emoji: "💬", label: "Scrie-mi pe WhatsApp", note: phone.display, href: social.whatsapp.url, external: true },
  { emoji: "✉️", label: "Trimite-mi un e-mail", note: site.email, href: `mailto:${site.email}` },
  { emoji: "📲", label: "Salvează-mi contactul", note: "Numele, telefonul și e-mailul, direct în agenda ta", href: vcardPath },
];
const learn: PocketItem[] = [
  { emoji: "🌐", label: "Vezi site-ul meu", note: "Servicii pentru clinici, avocați și afaceri locale", href: "/" },
  { emoji: "📚", label: "Citește articolele", note: "SEO, Google și căutare AI, explicate simplu", href: "/articole/" },
  { emoji: "🏆", label: "Vezi un proiect real", note: "Cheesy Media: de la o pagină la un site complet", href: "/lucrari/cheesy-media/" },
];

/** Profiles: same entity as the site (they are also in the schema sameAs). */
const profiles = [
  { emoji: "💼", ...social.linkedin },
  { emoji: "📸", ...social.instagram },
  { emoji: "⭐", ...social.trustpilot },
  { emoji: "📍", ...social.googleMaps },
  { emoji: "💻", ...social.github },
  { emoji: "🎨", ...social.behance },
];

const group = (items: PocketItem[]) => <ul className="space-y-3">{items.map((i) => <li key={i.label}><PocketRow item={i} /></li>)}</ul>;

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
        <span className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-ink bg-ink shadow-[4px_4px_0_#f1501b]">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, SVG mark */}
          <img src={brand.markWhite} width="48" height="48" alt="" className="h-12 w-12" />
          <span aria-hidden="true" className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-paper text-lg">👋</span>
        </span>
        <h1 className="mt-5 font-serif text-4xl font-extrabold">{site.name}</h1>
        <p className="mt-2 text-[15px] font-semibold">Web design și SEO pentru căutare AI · <span className="whitespace-nowrap">📍 {site.city}</span></p>
        <p className="mx-auto mt-4 max-w-xs text-balance text-[17px] font-semibold leading-relaxed text-ink"><span className="box-decoration-clone rounded-md bg-orange/20 px-2 py-0.5">{brand.tagline.ro}</span></p>
      </header>

      <PocketHeading emoji="🚀">Începe de aici</PocketHeading>
      {group(start)}

      <PocketHeading emoji="💬">Vorbește cu mine</PocketHeading>
      {group(contact)}

      <PocketHeading emoji="👀">Află mai multe</PocketHeading>
      {group(learn)}

      <PocketHeading emoji="🌍">Mă găsești și pe</PocketHeading>
      <ul className="flex flex-wrap gap-2">
        {profiles.map((p) => (
          <li key={p.name}>
            <a href={p.url} target="_blank" rel="me noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-ink/20 bg-white px-4 text-[15px] font-semibold hover:border-ink">
              <span aria-hidden="true">{p.emoji}</span>{p.name}
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-center text-sm text-muted">
        <Link href="/carte-de-vizita/" className="font-semibold text-orange-ink underline underline-offset-4">📇 Carte de vizită</Link>
        <span aria-hidden="true"> · </span>© {new Date().getFullYear()} {site.legalName}
      </p>
    </main>
  );
}
