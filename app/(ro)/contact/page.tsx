import type { Metadata } from "next";
import { Breadcrumbs, Eyebrow, Section } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { site } from "@/lib/site-config";
import Link from "next/link";
import { alternates } from "@/lib/site-map";

export const metadata: Metadata = {
  title: "Contact: cere o ofertă pentru site sau SEO",
  description: "Spune-mi despre proiectul tău. Răspund în maximum 24 de ore. Poți programa și o discuție pe Calendly.",
  alternates: alternates("contact", "ro"),
};

export default function Contact() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Acasă", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <Section>
        <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: "Contact" }]} />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">Hai să vorbim despre proiectul tău.</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-ink">
              Completează formularul sau programează direct o discuție. Răspund la orice mesaj în maximum {site.responseTime}.
            </p>
            <ul className="mt-8 space-y-4 text-slate-ink">
              <li><strong className="text-navy">Programează o discuție:</strong>{" "}
                <a className="font-semibold text-brass-dark underline underline-offset-4" href={site.calendly} target="_blank" rel="noopener noreferrer">Calendly</a></li>
              <li><strong className="text-navy">Doar vrei un audit?</strong>{" "}
                <Link className="font-semibold text-brass-dark underline underline-offset-4" href="/audit-gratuit-vizibilitate-ai">Cere auditul gratuit</Link></li>
              <li><strong className="text-navy">Unde:</strong> {site.city}, România. Lucrez online cu clienți din toată țara.</li>
              <li><strong className="text-navy">Limbi:</strong> română. Engleză, franceză și germană ca opțiune suplimentară.</li>
            </ul>
          </div>
          <div className="rounded-md border border-line bg-white p-6 shadow-sm sm:p-8">
            <LeadForm kind="contact" />
          </div>
        </div>
      </Section>
    </>
  );
}
