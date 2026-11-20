import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, Eyebrow, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Shot } from "@/components/Shot";
import { breadcrumb } from "@/lib/schema";
import { alternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Web design portfolio and case studies",
  description: "Website redesign and new-website projects with measured results. Starting with Cheesy Media, a photo and video agency in Cluj-Napoca.",
  alternates: alternates("/en/work/", "en"),
};

export default function Work() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Home", path: "/en/" }, { name: "Work", path: "/en/work" }])} />
      <Section>
        <Breadcrumbs lang="en" items={[{ name: "Home", href: "/en/" }, { name: "Work" }]} />
        <Eyebrow>Work</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">Projects, with results you can check.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">
          I only publish what&apos;s real and measurable. As new projects come in, I add them here.
        </p>
        <div className="mt-10">
          <Link href="/en/work/cheesy-media" className="group grid overflow-hidden rounded-3xl border-2 border-ink bg-canvas transition-shadow duration-200 hover:shadow-[8px_8px_0_0_var(--color-ink)] lg:grid-cols-[1.3fr_1fr]">
            <div className="relative bg-ink p-5 pb-8 pr-10 sm:p-8 sm:pb-10 sm:pr-16">
              <Shot name="site-desktop" alt="The new Cheesy Media site on desktop" sizes="(min-width: 1024px) 560px, 92vw" eager />
              <Shot name="site-mobile" phone alt="The new Cheesy Media site on a phone" sizes="140px" className="absolute bottom-3 right-3 w-[24%] max-w-[140px]" />
            </div>
            <div className="flex flex-col p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-wider text-brass-dark">Redesign · Cluj-Napoca</p>
              <h2 className="mt-2 font-serif text-3xl font-extrabold">Cheesy Media</h2>
              <p className="mt-3 text-[17px] leading-relaxed text-slate-ink">
                A photo, video and social media agency. From one long page to a complete site: a new design, a page for every service and a technical base for Google and AI.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
                {["Performance 82 → 100", "11 pages", "Structured data", "AI-ready"].map((t) => <li key={t} className="rounded-full bg-paper px-3 py-1">{t}</li>)}
              </ul>
              <span className="mt-auto inline-block pt-6 font-semibold text-ink underline decoration-orange decoration-2 underline-offset-4">Read the case study →</span>
            </div>
          </Link>
        </div>
      </Section>
      <CtaBand lang="en" title="Want to be the next project?" text="Start with a free audit of your website, delivered within 24 hours." />
    </>
  );
}
