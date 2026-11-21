import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
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

const action =
  "flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-ink bg-white px-4 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-paper";

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const icons = {
  addContact: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 8v6M22 11h-6",
  phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z",
  chat: "M21 11.5a8.4 8.4 0 0 1-12.5 7.4L3 21l2.1-5.5A8.4 8.4 0 1 1 21 11.5z",
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  globe: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6",
  pin: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
};

export default function BusinessCard() {
  const host = site.url.replace(/^https?:\/\//, "");
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-4 py-8 sm:py-14">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "ContactPage", "@id": `${abs("/carte-de-vizita/")}#page`, url: abs("/carte-de-vizita/"), name: title, description, inLanguage: "ro-RO", isPartOf: { "@id": `${site.url}/#website` }, mainEntity: { "@id": `${site.url}/#person` } },
          personSchema,
        ],
      }} />
      {/* The card face */}
      <section aria-label="Carte de vizită" className="relative overflow-hidden rounded-2xl bg-ink p-6 text-paper shadow-xl sm:p-8">
        <span aria-hidden="true" className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange" />
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, SVG logo */}
        <img src={brand.wordmarkWhite.src} width={brand.wordmarkWhite.width} height={brand.wordmarkWhite.height} alt="" className="relative h-7 w-auto" />
        <h1 className="relative mt-10 font-serif text-[2.4rem] font-extrabold leading-none">{site.name}</h1>
        <p className="relative mt-3 text-[15px] font-semibold text-paper/85">Web design și SEO pentru căutare AI</p>
        <p className="relative mt-1 font-accent text-xl italic text-orange">{brand.tagline.ro}</p>
        <dl className="relative mt-8 space-y-1.5 text-[15px] text-paper/85">
          <div className="flex gap-3"><dt className="sr-only">Telefon</dt><dd><a href={`tel:${phone.e164}`} className="hover:text-orange">{phone.display}</a></dd></div>
          <div className="flex gap-3"><dt className="sr-only">E-mail</dt><dd><a href={`mailto:${site.email}`} className="hover:text-orange">{site.email}</a></dd></div>
          <div className="flex gap-3"><dt className="sr-only">Site</dt><dd><Link href="/" className="hover:text-orange">{host}</Link></dd></div>
          <div className="flex gap-3"><dt className="sr-only">Adresă</dt><dd>{site.city}, România</dd></div>
        </dl>
      </section>

      {/* The main action */}
      <a href={vcardPath} className="mt-6 flex min-h-16 items-center justify-center gap-3 rounded-xl bg-orange px-5 text-lg font-bold text-ink shadow-md transition-transform hover:-translate-y-0.5">
        <Icon d={icons.addContact} /> Salvează contactul în telefon
      </a>
      <p className="mt-2 text-center text-sm text-muted">Pe iPhone se deschide direct în Contacte. Pe Android, deschide fișierul descărcat și alege Contacte.</p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <a href={`tel:${phone.e164}`} className={action}><Icon d={icons.phone} /> Sună</a>
        <a href={social.whatsapp.url} target="_blank" rel="noopener noreferrer" className={action}><Icon d={icons.chat} /> WhatsApp</a>
        <a href={site.calendly} target="_blank" rel="noopener noreferrer" className={action}><Icon d={icons.calendar} /> Programează</a>
        <a href={`mailto:${site.email}`} className={action}><Icon d={icons.mail} /> E-mail</a>
        <a href={place.mapsUrl} target="_blank" rel="noopener noreferrer" className={action}><Icon d={icons.pin} /> Pe hartă</a>
        <Link href="/audit-gratuit-vizibilitate-ai/" className={action}><Icon d={icons.globe} /> Audit gratuit</Link>
      </div>

      <ShareButton
        url={`${site.url}/carte-de-vizita/`}
        title={title}
        text={`${site.name}, web design și SEO pentru căutare AI`}
        className="mt-3 flex min-h-14 w-full items-center justify-center rounded-xl border-2 border-dashed border-ink/30 px-4 text-[15px] font-semibold text-ink hover:border-ink"
      />

      <p className="mt-auto pt-10 text-center text-sm text-muted">
        <Link href="/linkuri/" className="font-semibold text-orange-ink underline underline-offset-4">Toate linkurile</Link>
        <span aria-hidden="true"> · </span>
        <Link href="/" className="font-semibold text-orange-ink underline underline-offset-4">{host}</Link>
      </p>
    </main>
  );
}
