import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Button, CtaBand, Eyebrow, FAQ, H2, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, serviceSchema } from "@/lib/schema";
import { alternates } from "@/lib/i18n";

const path = "/en/services/seo-ai-visibility";
export const metadata: Metadata = {
  title: "SEO in Romania and visibility in ChatGPT (GEO)",
  description:
    "SEO for local businesses in Romania: search optimisation, local SEO and visibility in ChatGPT, Gemini and Perplexity. Free SEO audit within 24 hours.",
  alternates: alternates(`${path}/`, "en"),
};

const faq = [
  { q: "What does an SEO consultant actually do?", a: "I check how people find you now, fix what's blocking the site technically, structure pages around clients' real questions, look after your Google profile and measure every month what changed. All explained in plain words." },
  { q: "What is GEO or AEO?", a: "Generative Engine Optimization (GEO) or Answer Engine Optimization (AEO) means making a business easy to understand and quote for AI assistants like ChatGPT, Gemini, Claude or Perplexity. It builds on SEO, with more weight on clear answers, structured data and consistent information across sources." },
  { q: "Can you guarantee ChatGPT will recommend me?", a: "No. AI answers vary, and the models update on their own schedule. I can measure where you are now, improve what influences recommendations and show you the change over time." },
  { q: "How long until I see results?", a: "Usually weeks or months. Technical improvements show faster; authority (reviews, mentions, content) builds over time." },
  { q: "Is the free audit really free?", a: "Yes. It's a manual audit, delivered within 24 hours, with no obligation to continue with me." },
  { q: "Do I need a new website for this?", a: "Not necessarily. Sometimes targeted fixes are enough. If the site is too old or technically stuck, I'll tell you honestly and suggest a redesign." },
  { q: "Do you work with clinics and law firms?", a: "Yes, those are my main fields. I make no medical or legal promises on your behalf: you approve the specialist content." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: "Home", path: "/en/" }, { name: "Services", path: "/en/services" }, { name: "SEO and AI visibility", path }]),
        serviceSchema("SEO and optimisation for AI engines", "Audit, technical and content optimisation and monthly work for visibility on Google and in ChatGPT, Gemini, Claude and Perplexity answers.", path)]} />

      <section className="border-b border-line bg-mist">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Breadcrumbs lang="en" items={[{ name: "Home", href: "/en/" }, { name: "Services", href: "/en/services" }, { name: "SEO and AI visibility" }]} />
          <Eyebrow>Main service</Eyebrow>
          <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">
            SEO: get found on Google and recommended by <em className="font-accent font-normal tracking-normal text-orange-ink">AI</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-ink">
            More and more clients ask an AI assistant &ldquo;who should I go to?&rdquo;. As an SEO consultant in Romania, I help you show up in those answers and on Google, with a process you can measure, from site optimisation to local SEO.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/en/free-ai-visibility-audit">Get the free audit</Button>
            <Button href="/en/contact" variant="ghost">Get a quote</Button>
          </div>
        </div>
      </section>

      <Section id="what-changed">
        <H2>What has changed</H2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-ink">
          <p>Until recently, a client searched on Google and compared ten results. Now they can ask ChatGPT, Gemini or Perplexity directly and get a few names, with reasons. If those systems don&apos;t understand and cite your business, you&apos;re invisible at the exact moment the decision is made.</p>
          <p><strong className="text-navy">GEO / AEO</strong> (Generative / Answer Engine Optimization) means making your business easy for AI assistants to understand and quote. It builds on classic SEO and adds clarity, structured data and consistent information about you.</p>
        </div>
      </Section>

      <Section id="seo-vs-geo" tint>
        <H2>Classic SEO and AI visibility</H2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left align-top">
            <caption className="sr-only">Differences between classic SEO and AI optimisation</caption>
            <thead><tr className="border-b border-navy/20 text-sm uppercase tracking-wider text-slate-ink">
              <th scope="col" className="py-3 pr-4"> </th><th scope="col" className="py-3 pr-4">Classic SEO</th><th scope="col" className="py-3">AI visibility (GEO)</th></tr></thead>
            <tbody className="divide-y divide-line text-slate-ink">
              <tr><th scope="row" className="py-4 pr-4 text-navy">The goal</th><td className="py-4 pr-4">Rankings in the results list</td><td className="py-4">Being mentioned, and described correctly, in the answer</td></tr>
              <tr><th scope="row" className="py-4 pr-4 text-navy">What matters</th><td className="py-4 pr-4">Keywords, links, speed, experience</td><td className="py-4">Clear answers, structured data, consistent information, reviews and mentions</td></tr>
              <tr><th scope="row" className="py-4 pr-4 text-navy">How it&apos;s measured</th><td className="py-4 pr-4">Rankings, clicks, traffic</td><td className="py-4">Regular tests of real questions: do you appear? where? how are you described?</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="what-i-do">
        <H2>SEO services: what I actually do</H2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            ["AI visibility audit", "I test your clients' real questions in ChatGPT, Gemini, Claude, Perplexity and Google's AI answers. I note whether you're mentioned, where, how you're described, whether the details are correct and which competitors appear."],
            ["A clear identity", "The same name, description and contact details on the site, in directories, on LinkedIn and on your Google Business Profile."],
            ["Structured data", "Schema for the organisation, services, FAQ, articles and people (JSON-LD), so search engines understand exactly who you are and what you do."],
            ["Content that answers", "Pages that answer your patients' or clients' questions directly, in clear language that's easy to quote."],
            ["Technical optimisation", "Indexing, speed, Core Web Vitals, sitemap, a robots.txt that lets the relevant AI crawlers in, and an llms.txt file."],
            ["Authority and mentions", "Reviews, directories, presence in trusted sources. This is where you win in the long run."],
            ["Local SEO", "Your Google Business Profile, local citations in directories and a simple process for reviews, so you show up when people search \"near me\"."],
            ["Monthly monitoring", "I re-test the questions and send you a report in plain words: what changed and what comes next."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-md border border-line p-6"><h3 className="font-serif text-xl font-bold">{t}</h3><p className="mt-2 leading-relaxed text-slate-ink">{d}</p></div>
          ))}
        </div>
      </Section>

      <Section id="realistic" tint>
        <H2>Realistic expectations</H2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-ink">
          <p>AI answers aren&apos;t the same for everyone and can change from one day to the next. The models update on their own schedule, and results come in weeks or months. Nobody serious can guarantee a specific spot.</p>
          <p>What I promise: we measure where you start, change what influences recommendations, and I show you the progress, with data.</p>
        </div>
      </Section>

      <Section id="working-together">
        <H2>How we can work together</H2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Free audit", "One-off, manual, delivered within 24 hours. No obligation."],
            ["Implementation project", "I apply the fixes from the audit, on their own or as part of a redesign or a new site."],
            ["Monthly SEO/GEO", "Content, technical upkeep, monitoring and a monthly report."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-md border border-line p-6"><h3 className="font-serif text-xl font-bold">{t}</h3><p className="mt-2 text-slate-ink leading-relaxed">{d}</p></div>
          ))}
        </div>
        <p className="mt-6 text-slate-ink">For implementation and monthly work you get a clear offer, not fixed prices. <Link className="font-semibold text-brass-dark underline underline-offset-4" href="/en/contact">Get a quote</Link>.</p>
      </Section>

      <Section id="faq" tint><FAQ items={faq} lang="en" /></Section>
      <CtaBand lang="en" />
    </>
  );
}
