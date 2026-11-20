import type { Metadata } from "next";
import { Breadcrumbs, Button, CtaBand, Eyebrow, FAQ, H2, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, serviceSchema } from "@/lib/schema";
import { alternates } from "@/lib/i18n";

const path = "/en/services/website-redesign";
export const metadata: Metadata = {
  title: "Website redesign without losing your Google rankings",
  description:
    "Modern redesign for clinics, law firms and local businesses in Romania: new design, speed, safe migration with 301 redirects and AI-ready content. Get a quote.",
  alternates: alternates(`${path}/`, "en"),
};

const faq = [
  { q: "Will I lose my Google rankings after a redesign?", a: "Not if the migration is done right. I keep the addresses that bring traffic or redirect them with 301s to the new pages, check titles and key content, and watch indexing after launch." },
  { q: "How long does a redesign take?", a: "It depends on the number of pages and the content. You get a concrete timeline in the offer, once I've seen your current site and what you want to change." },
  { q: "Can I edit the site myself afterwards?", a: "Yes. We pick the right setup together: a coded site with pages that are easy to update, or Webflow if you want to edit visually. I show you how at handover." },
  { q: "My current site is on WordPress. Is that a problem?", a: "No. Many sites in Romania run on WordPress. I move the content and the important addresses to the new platform without losing what works." },
  { q: "How much does it cost?", a: "I don't publish fixed prices, because every site is different. You get a clear offer after a short call." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: "Home", path: "/en/" }, { name: "Services", path: "/en/services" }, { name: "Website redesign", path }]),
        serviceSchema("Website redesign", "Modern website redesign with a safe migration and content ready for AI engines.", path)]} />
      <Section id="website-redesign">
        <Breadcrumbs lang="en" items={[{ name: "Home", href: "/en/" }, { name: "Services", href: "/en/services" }, { name: "Website redesign" }]} />
        <Eyebrow>Website redesign</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">
          A website redesign for the way people (and AI) search today.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">
          An outdated site costs you trust and clients. I rebuild it modern, fast and clear, without losing what you&apos;ve already earned on Google.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/en/contact">Get a quote</Button>
          <Button href="/en/free-ai-visibility-audit" variant="ghost">Free AI audit</Button>
        </div>
      </Section>

      <Section id="signs" tint>
        <H2>Signs your website is outdated</H2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {["It doesn't look right on a phone", "It loads slowly", "It's not clear what you offer or how to contact you", "The design looks dated", "It's hard to update", "It has no structured data for Google and AI", "It misses the basics of accessibility"].map((t) => (
            <li key={t} className="flex gap-3 rounded-md border border-line bg-white p-4"><span aria-hidden className="text-brass-dark">✓</span>{t}</li>
          ))}
        </ul>
      </Section>

      <Section id="included">
        <H2>What&apos;s included</H2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            ["UX and content audit", "I see what works, what doesn't and what visitors are actually looking for."],
            ["A new design", "Consistent, calm and credible, right for your field."],
            ["A modern rebuild", "Fast, responsive, accessible, with clean code."],
            ["AI-ready content", "Pages with clear answers to your clients' questions, and structured data."],
            ["A safe migration", "301 redirects, title checks and monitoring after launch."],
            ["Handover and training", "You know how to update the site and who to ask if you need help."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-md border border-line p-6"><h3 className="font-serif text-xl font-bold">{t}</h3><p className="mt-2 text-slate-ink leading-relaxed">{d}</p></div>
          ))}
        </div>
      </Section>

      <Section id="keep-your-seo" tint>
        <H2>A redesign that keeps your SEO</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-ink">
          The biggest fear with a redesign is that your Google rankings disappear. That usually happens when addresses change without redirects, or when the content that brought traffic is removed.
          I take stock of the important pages first, map them to the new ones and check everything after launch.
        </p>
      </Section>

      <Section id="a-real-example">
        <H2>A real example</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-ink">
          I rebuilt the site of Cheesy Media, a photo and video agency in Cluj-Napoca: from one long page to a site with dedicated pages, packages, an FAQ and a Lighthouse score of 100.
        </p>
        <div className="mt-6"><Button href="/en/work/cheesy-media" variant="ghost">See before and after</Button></div>
      </Section>

      <Section id="faq" tint><FAQ items={faq} lang="en" /></Section>
      <CtaBand lang="en" title="Want to see what could change on your site?" text="Start with a free audit: I'll tell you what would make the biggest difference, with no obligation." />
    </>
  );
}
