import type { Metadata } from "next";
import { Breadcrumbs, Eyebrow, H2, Section } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site-config";
import { alternates } from "@/lib/site-map";

const path = "/en/free-ai-visibility-audit";
export const metadata: Metadata = {
  title: "Free SEO audit and AI visibility audit",
  description:
    "A free SEO audit, done by hand: see how you show up on Google and whether ChatGPT, Gemini and Perplexity recommend you. You get the result within 24 hours.",
  alternates: alternates("audit", "en"),
};

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: "Home", path: "/en/" }, { name: "Free AI audit", path }]),
        serviceSchema("Free AI visibility and SEO audit", "A manual audit of how you show up on Google and in AI assistants' answers.", path)]} />
      <Section>
        <Breadcrumbs lang="en" items={[{ name: "Home", href: "/en/" }, { name: "Free AI audit" }]} />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Free · Manual · Within 24 hours</Eyebrow>
            <h1 className="font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">
              Free SEO audit: do Google and <em className="font-accent font-normal tracking-normal text-orange-ink">ChatGPT</em> recommend you?
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-ink">
              I show you how your business shows up today on Google and in AI assistants&apos; answers, and what you can do if it doesn&apos;t.
            </p>
            <H2 className="mt-10 !text-3xl">What the free audit covers</H2>
            <ul className="mt-4 space-y-3 text-slate-ink leading-relaxed">
              <li>✓ Your clients&apos; real questions, tested in several AI assistants</li>
              <li>✓ Whether you&apos;re mentioned, where, and how you&apos;re described</li>
              <li>✓ Which competitors appear instead of you</li>
              <li>✓ A short list of steps, in order of impact</li>
            </ul>
            <p className="mt-6 text-sm text-slate-ink">
              I reply within 24 hours. You don&apos;t have to continue with me after the audit. Rather talk directly?{" "}
              <a className="font-semibold text-navy underline underline-offset-4" href={site.calendly} target="_blank" rel="noopener noreferrer">Book a call</a>.
            </p>
          </div>
          <div className="rounded-md border border-line bg-white p-6 shadow-sm sm:p-8">
            <LeadForm kind="audit" lang="en" />
          </div>
        </div>
      </Section>
    </>
  );
}
