import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Button, CtaBand, Eyebrow, FAQ, H2, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, serviceSchema } from "@/lib/schema";
import { alternates } from "@/lib/site-map";

const path = "/en/services/website-maintenance";
export const metadata: Metadata = {
  title: "Website maintenance for local businesses",
  description:
    "Website maintenance for clinics, law firms and local businesses in Romania: updates, backups, security, monthly checks and content edits. Get a quote.",
  alternates: alternates("maintenance", "en"),
};

const includes = [
  ["Updates", "The platform, themes and plugins (WordPress, for example) or a coded site's dependencies, tested first so nothing breaks."],
  ["Backups", "Regular copies kept separately from the site, so you can always go back to a version that worked."],
  ["Security", "Valid HTTPS, access only for the right people, and fixing issues Google reports."],
  ["Monthly check", "Mobile speed, contact and booking forms, broken links and indexing in Google Search Console."],
  ["Small content edits", "Opening hours, price ranges, team, new copy and images. You send me what changed, I update it."],
  ["A short report, in plain words", "What I checked, what I fixed and what I recommend next. Optionally, the monthly AI visibility test too."],
];

const faq = [
  { q: "What does website maintenance mean?", a: "The care after launch: updates, backups, security and regular checks, so the site stays fast, safe and correct. A site left alone breaks slowly: old plugins, forms that stop sending, pages that get slower." },
  { q: "Do you maintain sites you didn't build?", a: "Yes, after an initial check. I look at the platform, the hosting and the state of the site, and tell you honestly what can be maintained and what should be fixed first." },
  { q: "Do you work with WordPress?", a: "Yes. Many sites in Romania run on WordPress, and that's where updates and backups matter most. I also maintain coded sites (Next.js), Webflow and Shopify." },
  { q: "How fast do you respond to a problem?", a: "I reply to every message within 24 hours. For urgent issues we agree in the offer how you reach me." },
  { q: "How much does maintenance cost?", a: "It depends on the platform, the size of the site and how often the content changes. I don't publish fixed prices: you get a clear offer after a short call." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: "Home", path: "/en/" }, { name: "Services", path: "/en/services" }, { name: "Website maintenance", path }]),
        serviceSchema("Website maintenance", "Website maintenance: updates, backups, security, monthly checks and content edits for local businesses.", path)]} />
      <Section id="website-maintenance">
        <Breadcrumbs lang="en" items={[{ name: "Home", href: "/en/" }, { name: "Services", href: "/en/services" }, { name: "Website maintenance" }]} />
        <Eyebrow>Website maintenance</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">
          Website maintenance: fast, safe and up to date, <em className="font-accent font-normal tracking-normal text-orange-ink">without the worry.</em>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">
          A website isn&apos;t finished at launch. I look after updates, backups and monthly checks, and you only send me what you want changed.
          For clinics, law firms and local businesses in Romania.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/en/contact" arrow>Get a quote</Button>
          <Button href="/en/free-ai-visibility-audit" variant="ghost">Free website audit</Button>
        </div>
      </Section>

      <Section id="included" tint>
        <H2>What maintenance includes</H2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {includes.map(([t, d]) => (
            <div key={t} className="rounded-3xl border-2 border-ink bg-canvas p-6">
              <h3 className="font-serif text-xl font-extrabold">{t}</h3>
              <p className="mt-2 text-[17px] leading-relaxed text-slate-ink">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="why-it-matters">
        <H2>Why maintenance matters</H2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-ink">
          <p>Most problems I see on local websites don&apos;t come from bad design, but from neglect: a booking form that hasn&apos;t sent an email in months, outdated plugins, expired certificates or pages that slowed down over time.</p>
          <p>Regular maintenance catches these early, before they cost bookings, clients or Google rankings. And it keeps the site ready for the way people search now, including in AI assistants.</p>
          <p>If the site already has big problems, I start with a fix or, when it&apos;s worth it, a <Link className="font-semibold text-brass-dark underline underline-offset-4" href="/en/services/website-redesign">redesign</Link>. If you&apos;re only now getting a site, maintenance can follow straight after <Link className="font-semibold text-brass-dark underline underline-offset-4" href="/en/services/website-design">building it</Link>.</p>
        </div>
      </Section>

      <Section id="faq" tint><FAQ items={faq} lang="en" /></Section>
      <CtaBand lang="en" title="Want your site looked after without the hassle?" text="Start with a free check: I'll tell you what state the site is in and what to do first." />
    </>
  );
}
