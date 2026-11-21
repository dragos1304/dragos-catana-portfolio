import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PocketHeading, PocketRow, type PocketItem } from "@/components/PocketRow";
import { SaveContactBar } from "@/components/SaveContactBar";
import { ShareButton } from "@/components/ShareButton";
import { abs, personSchema } from "@/lib/schema";
import { brand, phone, place, site, social } from "@/lib/site-config";
import { vcardPath } from "@/lib/vcard";

const title = `Carte de vizită: ${site.name}`;
const description = "Cartea de vizită a lui Dragoș Catană, web design și SEO pentru căutare AI în Cluj-Napoca: telefon, e-mail, WhatsApp și contactul salvat în telefon dintr-un buton.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/carte-de-vizita/" },
  openGraph: { type: "profile", locale: "ro_RO", siteName: site.name, url: "/carte-de-vizita/", title, description, images: [{ url: brand.og.ro, width: 1200, height: 630 }] },
};

const talk: PocketItem[] = [
  { emoji: "📞", label: "Sună-mă", note: phone.display, href: `tel:${phone.e164}` },
  { emoji: "💬", label: "Scrie-mi pe WhatsApp", note: "Un mesaj, când îți este comod", href: social.whatsapp.url, external: true },
  { emoji: "✉️", label: "Trimite-mi un e-mail", note: site.email, href: `mailto:${site.email}` },
  { emoji: "📅", label: "Programează o discuție", note: "30 de minute online, gratuit. Alegi tu ora.", href: site.calendly, external: true },
];

const more: PocketItem[] = [
  { emoji: "🔍", label: "Cere un audit gratuit", note: "Îți spun ce lipsește ca să te găsească Google și AI. Scris de mine, în 24 de ore.", href: "/audit-gratuit-vizibilitate-ai/", primary: true, badge: "Gratuit" },
  { emoji: "🌐", label: "Vezi site-ul meu", note: "Servicii, lucrări și articole", href: "/" },
  { emoji: "📍", label: "Unde lucrez", note: `${site.city}, pe Google Maps`, href: place.mapsUrl, external: true },
];

export default function BusinessCard() {
  const host = site.url.replace(/^https?:\/\//, "");
  return (
    <>
      {/* pb leaves room for the pinned save button */}
      <main className="mx-auto w-full max-w-md px-4 pb-44 pt-8 sm:pt-14">
        <JsonLd data={{
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "ContactPage", "@id": `${abs("/carte-de-vizita/")}#page`, url: abs("/carte-de-vizita/"), name: title, description, inLanguage: "ro-RO", isPartOf: { "@id": `${site.url}/#website` }, mainEntity: { "@id": `${site.url}/#person` } },
            personSchema,
          ],
        }} />

        {/* The card face */}
        <section aria-label="Carte de vizită" className="relative overflow-hidden rounded-3xl border-2 border-ink bg-ink p-6 text-paper shadow-[6px_6px_0_#f1501b] sm:p-8">
          <span aria-hidden="true" className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-orange" />
          <span aria-hidden="true" className="absolute right-5 top-5 text-4xl">👋</span>
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, SVG logo */}
          <img src={brand.wordmarkWhite.src} width={brand.wordmarkWhite.width} height={brand.wordmarkWhite.height} alt="" className="relative h-7 w-auto" />
          <p className="relative mt-8 text-[15px] text-paper/75">Salut, eu sunt</p>
          <h1 className="relative font-serif text-[2.4rem] font-extrabold leading-none">{site.name}</h1>
          <p className="relative mt-3 text-[15px] font-semibold text-paper/90">Web design și SEO pentru căutare AI</p>
          <p className="relative mt-1 font-accent text-xl italic text-orange">{brand.tagline.ro}</p>
          <ul className="relative mt-6 flex flex-wrap gap-2 text-[13px] font-semibold">
            <li className="rounded-full bg-paper/10 px-3 py-1">📍 {site.city}</li>
            <li className="rounded-full bg-paper/10 px-3 py-1">🏥 Clinici</li>
            <li className="rounded-full bg-paper/10 px-3 py-1">⚖️ Avocați</li>
            <li className="rounded-full bg-paper/10 px-3 py-1">🏪 Afaceri locale</li>
          </ul>
        </section>

        {/* What to do here, in one line */}
        <p className="mt-6 rounded-2xl bg-white p-4 text-[15px] leading-relaxed">
          <span aria-hidden="true">👇 </span>
          Apasă butonul portocaliu de jos ca să-mi <strong>salvezi numărul în telefon</strong>. Sau alege mai jos cum vrei să vorbim.
        </p>

        <PocketHeading emoji="🤝">Cum vrei să vorbim?</PocketHeading>
        <ul className="space-y-3">{talk.map((i) => <li key={i.label}><PocketRow item={i} /></li>)}</ul>

        <PocketHeading emoji="🚀">Vrei mai mulți clienți din Google și AI?</PocketHeading>
        <ul className="space-y-3">{more.map((i) => <li key={i.label}><PocketRow item={i} /></li>)}</ul>

        <ShareButton
          url={`${site.url}/carte-de-vizita/`}
          title={title}
          text={`${site.name}, web design și SEO pentru căutare AI`}
          label="Trimite cartea de vizită cuiva"
          className="mt-8 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-ink/40 px-4 text-[15px] font-semibold text-ink hover:border-ink"
        />

        <p className="mt-8 text-center text-sm text-muted">
          <Link href="/linkuri/" className="font-semibold text-orange-ink underline underline-offset-4">Toate linkurile</Link>
          <span aria-hidden="true"> · </span>
          <Link href="/" className="font-semibold text-orange-ink underline underline-offset-4">{host}</Link>
        </p>
      </main>

      <SaveContactBar href={vcardPath} />
    </>
  );
}
