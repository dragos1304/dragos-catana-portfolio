import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Eyebrow, Section } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { site } from "@/lib/site-config";
import { alternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contact: get a quote for a website or SEO",
  description: "Tell me about your project. I reply within 24 hours. You can also book a call on Calendly.",
  alternates: alternates("/en/contact/", "en"),
};

export default function Contact() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Home", path: "/en/" }, { name: "Contact", path: "/en/contact" }])} />
      <Section>
        <Breadcrumbs lang="en" items={[{ name: "Home", href: "/en/" }, { name: "Contact" }]} />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">Let&apos;s talk about your project.</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-ink">
              Fill in the form or book a call directly. I reply to every message within 24 hours.
            </p>
            <ul className="mt-8 space-y-4 text-slate-ink">
              <li><strong className="text-navy">Book a call:</strong>{" "}
                <a className="font-semibold text-brass-dark underline underline-offset-4" href={site.calendly} target="_blank" rel="noopener noreferrer">Calendly</a></li>
              <li><strong className="text-navy">Just want an audit?</strong>{" "}
                <Link className="font-semibold text-brass-dark underline underline-offset-4" href="/en/free-ai-visibility-audit">Get the free audit</Link></li>
              <li><strong className="text-navy">Where:</strong> {site.city}, Romania. I work online with clients across the country.</li>
              <li><strong className="text-navy">Languages:</strong> English and Romanian. French and German as an add-on.</li>
            </ul>
          </div>
          <div className="rounded-md border border-line bg-white p-6 shadow-sm sm:p-8">
            <LeadForm kind="contact" lang="en" />
          </div>
        </div>
      </Section>
    </>
  );
}
