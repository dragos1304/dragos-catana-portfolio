import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, Button, CtaBand, Eyebrow, H2, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { servicesEn } from "@/lib/site-config-en";
import { alternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Services: new website, redesign, SEO and maintenance",
  description:
    "Website redesign, new websites and SEO focused on visibility in ChatGPT, Gemini and Perplexity, for businesses in Romania. Get a quote or a free audit.",
  alternates: alternates("/en/services/", "en"),
};

const link = "font-semibold text-brass-dark underline underline-offset-4";

export default function Services() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Home", path: "/en/" }, { name: "Services", path: "/en/services" }])} />
      <Section id="services">
        <Breadcrumbs lang="en" items={[{ name: "Home", href: "/en/" }, { name: "Services" }]} />
        <Eyebrow>Services</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">
          A modern website, found on Google and recommended by AI.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">
          Every redesign and every new website I deliver is &ldquo;AI-ready&rdquo; from the start: clear content, structured data and a clean
          technical base. Prices depend on the project, so you get an offer after a short call.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {servicesEn.map((s) => (
            <Link key={s.slug} href={`/en/services/${s.slug}`}
              className={`rounded-md border p-7 hover:shadow-lg ${s.flagship ? "border-brass-dark" : "border-line"}`}>
              <h2 className="font-serif text-2xl font-bold">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-slate-ink">{s.short}</p>
              <span className="mt-5 inline-block font-semibold text-brass-dark">Details →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="what-you-need" tint>
        <H2>What do you need?</H2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <caption className="sr-only">Guide to choosing the right service</caption>
            <thead>
              <tr className="border-b border-navy/20 text-sm uppercase tracking-wider text-slate-ink">
                <th scope="col" className="py-3 pr-4">Your situation</th>
                <th scope="col" className="py-3">The right service</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              <tr><th scope="row" className="py-4 pr-4 font-medium">I have a site, but it&apos;s old or slow</th><td><Link className={link} href="/en/services/website-redesign">Website redesign</Link></td></tr>
              <tr><th scope="row" className="py-4 pr-4 font-medium">I have no site, or only a social media page</th><td><Link className={link} href="/en/services/website-design">New website</Link></td></tr>
              <tr><th scope="row" className="py-4 pr-4 font-medium">I have a site, but nobody finds me, not even AI</th><td><Link className={link} href="/en/services/seo-ai-visibility">SEO and AI visibility</Link></td></tr>
              <tr><th scope="row" className="py-4 pr-4 font-medium">My site is good, but I have no time to look after it</th><td><Link className={link} href="/en/services/website-maintenance">Website maintenance</Link></td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="mt-12 font-serif text-2xl font-bold">For your field</h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          <li className="rounded-md border border-line bg-white p-6"><Link className={link} href="/en/services/clinic-websites">Websites for clinics and medical practices</Link><p className="mt-2 text-slate-ink">Specialty pages, doctors, booking and local SEO.</p></li>
          <li className="rounded-md border border-line bg-white p-6"><Link className={link} href="/en/services/law-firm-websites">Websites for law firms</Link><p className="mt-2 text-slate-ink">Practice areas, lawyers, articles and discreet contact.</p></li>
        </ul>
        <h3 className="mt-12 font-serif text-2xl font-bold">Combined packages</h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          <li className="rounded-md border border-line bg-white p-6"><strong>Redesign + AI-ready.</strong> A new site, a safe migration, and content and structured data designed for AI engines.</li>
          <li className="rounded-md border border-line bg-white p-6"><strong>New website + AI-ready.</strong> From scratch, with SEO, schema and analytics from day one.</li>
        </ul>
        <h3 className="mt-12 font-serif text-2xl font-bold">Other languages</h3>
        <p className="mt-3 max-w-2xl text-slate-ink leading-relaxed">
          Sites can be delivered in Romanian and English, and in French or German as an add-on, with the same attention to SEO in every language.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/en/contact">Get a quote</Button>
          <Button href="/en/free-ai-visibility-audit" variant="ghost">Free AI audit</Button>
        </div>
      </Section>
      <CtaBand lang="en" />
    </>
  );
}
