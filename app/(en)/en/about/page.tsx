import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, Eyebrow, H2, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, personSchema } from "@/lib/schema";
import { alternates } from "@/lib/site-map";

export const metadata: Metadata = {
  title: "About me: economist and web designer",
  description:
    "Economics student (4.0 GPA) at Babeș-Bolyai University, with exchanges in Paris and the US, building businesses since 16. The story behind my work.",
  alternates: alternates("about", "en"),
};

const ventures = [
  ["E-commerce and retail", "I founded and ran clothing and direct-to-consumer businesses."],
  ["Digital marketing and agency work", "Growth campaigns and client-acquisition frameworks."],
  ["Solar feasibility consulting", "Financial and operational modelling, unit-cost analysis and capital allocation for a commercial solar installation."],
  ["Web3 consulting", "Economic feasibility, tokenomics reviews and protocol-level utility analysis."],
];

export default function About() {
  return (
    <>
      <JsonLd data={[{ "@context": "https://schema.org", ...personSchema, "@type": "Person" },
        breadcrumb([{ name: "Home", path: "/en/" }, { name: "About", path: "/en/about" }])]} />
      <Section id="about-me">
        <Breadcrumbs lang="en" items={[{ name: "Home", href: "/en/" }, { name: "About" }]} />
        <Eyebrow>About me</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">
          I&apos;m Dragoș, an economist who builds websites and helps you get found.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-ink">
          I live in Cluj-Napoca. I study Economics at Babeș-Bolyai University (taught in English), with a 4.0 GPA, and I&apos;ve been building businesses since I was 16. I combine academic rigour with an entrepreneur&apos;s execution, and that shows in how I work on a website: we start from what your business needs, not from what&apos;s fashionable.
        </p>
      </Section>

      <Section id="why" tint>
        <Eyebrow>Why I do this</Eyebrow>
        <H2>Every business I&apos;ve touched needed to be found.</H2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-ink">
          After more than 5 years of entrepreneurship, across two incubators, I kept seeing the same thing: a good product or service goes nowhere if people can&apos;t find it and don&apos;t trust it. That&apos;s why I work on websites, SEO and, now, on how AI assistants recommend your business.
        </p>
      </Section>

      <Section id="ventures">
        <Eyebrow>Entrepreneurship</Eyebrow>
        <H2>More than 5 years of execution, starting at 16.</H2>
        <p className="mt-4 max-w-3xl text-slate-ink leading-relaxed">
          I took 2nd place at the UBB i-Lab startup competition, against multidisciplinary teams from across the university.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {ventures.map(([t, d]) => (
            <div key={t} className="rounded-md border border-line p-6"><h3 className="font-serif text-xl font-bold">{t}</h3><p className="mt-2 leading-relaxed text-slate-ink">{d}</p></div>
          ))}
        </div>
      </Section>

      <Section id="education" tint>
        <Eyebrow>Education</Eyebrow>
        <H2>Academic rigour, at international level.</H2>
        <ul className="mt-8 space-y-6">
          <li className="max-w-3xl"><h3 className="font-serif text-xl font-bold">Babeș-Bolyai University, FSEGA, Cluj-Napoca</h3>
            <p className="mt-2 leading-relaxed text-slate-ink">BSc in Economics, taught in English. Cumulative GPA 4.0 / 4.0. Top marks in Management and Comparative Management.</p></li>
          <li className="max-w-3xl"><h3 className="font-serif text-xl font-bold">EUTOPIA / Ecotopia alliance, Paris (year 2)</h3>
            <p className="mt-2 leading-relaxed text-slate-ink">A year of international exchange in a consortium of 10 European universities. I passed 84 ECTS credits in one year (the European norm is 60), keeping a 4.0 GPA.</p></li>
          <li className="max-w-3xl"><h3 className="font-serif text-xl font-bold">State University of New York at Cortland, USA (year 3)</h3>
            <p className="mt-2 leading-relaxed text-slate-ink">An exchange semester focused on business economics, management and US financial markets.</p></li>
        </ul>
      </Section>

      <Section id="how-i-work">
        <Eyebrow>How I work</Eyebrow>
        <H2>I think like an economist.</H2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-ink">
          I understand unit costs, cash-flow discipline and risk, and I know the difference between a model on paper and the reality of a market. On a web project, that means a clear scope, measurable goals, a transparent process and no surprises.
        </p>
      </Section>

      <Section id="next" dark>
        <Eyebrow dark>Where I&apos;m heading</Eyebrow>
        <H2 dark>Business and teaching.</H2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
          My goal is a top business school in Europe and a career that combines finance with teaching. It&apos;s part of who I am: I run study groups for classmates before exams, and I&apos;m the person they come to when they&apos;re stuck. What I learn and apply in business I also want to explain, and that shows in how I talk about SEO and AI with you: in clear language, without jargon.
        </p>
      </Section>

      <Section id="beyond-work">
        <Eyebrow>Beyond work</Eyebrow>
        <H2>Community and leadership.</H2>
        <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-5 text-lg leading-relaxed text-slate-ink">
          <li>I run study groups for Economics and Management students.</li>
          <li>I organised the live concert of FSEGA International Week.</li>
          <li>I applied to First Ascent Business Edition, the leadership accelerator for founders and operators.</li>
        </ul>
      </Section>

      <Section id="recommendation" tint>
        <Eyebrow>Recommendation</Eyebrow>
        <H2>What a professor says.</H2>
        <figure className="mt-8 max-w-3xl">
          <blockquote className="font-serif text-2xl leading-relaxed text-navy">
            <p>&ldquo;I would place him as the top student, not only in his class, but also across the entire set of English-taught programs of our school.&rdquo;</p>
            <p className="mt-4">&ldquo;He was one of the few students I have worked with who managed to engage the majority of the audience… making him the person his peers would turn to when they felt stuck.&rdquo;</p>
          </blockquote>
          <figcaption className="mt-5 text-slate-ink">Dan C. Lungescu, PhD, Assistant Professor, Babeș-Bolyai University</figcaption>
        </figure>
      </Section>
      <CtaBand lang="en" title="Let's see what I can do for your business." />
    </>
  );
}
