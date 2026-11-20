import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Scale, Stethoscope, Store } from "lucide-react";
import { Accent, Button, Container, Eyebrow, FAQ, H2, Mark, Section, CtaBand } from "@/components/ui";
import { AnswerCard } from "@/components/AnswerCard";
import { Shot } from "@/components/Shot";
import { Journey, JourneyEnds } from "@/components/Journey";
import { site } from "@/lib/site-config";
import { servicesEn } from "@/lib/site-config-en";
import { alternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { absolute: "Web designer in Romania: websites, SEO & AI visibility | Dragoș Cătană" },
  description:
    "Web designer in Cluj-Napoca, Romania: websites, redesign and SEO for clinics, law firms and local businesses, so ChatGPT and Google can find you. Free audit in 24h.",
  alternates: alternates("/en/", "en"),
};

const faq = [
  {
    q: "What does it mean to be \"recommended by AI\"?",
    a: "Many clients now ask ChatGPT, Gemini or Perplexity \"who is a good lawyer or clinic in my city?\". The assistant picks from sources it understands and trusts. Optimising for AI (GEO) means your website and your presence online are clear, consistent and easy to quote.",
  },
  {
    q: "Can you guarantee first place on Google or in ChatGPT?",
    a: "No, and nobody can. Results vary and the models update on their own schedule. What I promise is a measurable process: I test your clients' real questions before and after, and you see exactly what changed.",
  },
  {
    q: "How much does a website or SEO cost?",
    a: "It depends on the project, so I don't publish fixed prices. The first audit is free. For a new website, a redesign or monthly SEO, you get a clear offer after a short call.",
  },
  {
    q: "Do you work in English?",
    a: "Yes. I build sites in Romanian and English, and French or German as an add-on. Each language gets its own content and SEO, not just a machine translation. I work online with businesses across Romania.",
  },
  {
    q: "Who will I actually talk to?",
    a: "Me, Dragoș. I'm not an agency: I do the audit, I build the website and I'm the one who replies to your messages, within 24 hours.",
  },
];

const promises = [
  { t: "Close", d: "You always talk to the person doing the work. No salespeople, no middlemen." },
  { t: "Expert, in plain words", d: "I know what Google and AI assistants look for, and I explain it simply. You decide knowing what you're deciding." },
  { t: "Honest", d: "I tell you what works, what's missing and what nobody can guarantee. No inflated numbers, no invented reviews." },
  { t: "Careful", d: "Nothing irreversible happens without your yes. In a redesign I keep what already works on Google, and I stay around after launch." },
];

const tileStyle = ["bg-ink text-paper", "bg-teal text-ink", "bg-orange text-ink"] as const;

const audiences = [
  { Icon: Stethoscope, t: "Clinics and medical practices", d: "Patients compare before they call. The site has to feel calm, show the team and make booking easy.", href: "/en/services/clinic-websites" },
  { Icon: Scale, t: "Law firms", d: "Clients look for a specialist for one specific problem. Clear practice-area pages and a complete Google profile make the difference.", href: "/en/services/law-firm-websites" },
  { Icon: Store, t: "Local service businesses", d: "If people search for you \"near me\", local SEO and AI visibility bring clients straight to you.", href: "/en/services/seo-ai-visibility" },
];

export default function HomeEn() {
  return (
    <>
      <section id="home" aria-labelledby="home-title" className="relative overflow-hidden bg-paper">
        <Container className="grid gap-12 pb-14 pt-12 sm:pb-20 sm:pt-20 lg:grid-cols-[1.7fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-muted">Web designer · Cluj-Napoca</p>
            <h1 id="home-title" className="font-serif text-[2.9rem] font-extrabold leading-[0.95] text-ink sm:text-7xl lg:text-[5rem]">
              Clients are searching.<br />
              Make sure they <span className="whitespace-nowrap"><Mark draw>find you</Mark>.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink sm:text-xl">
              I&apos;m Dragoș Cătană. I build{" "}
              <Link href="/en/services/website-design" className="font-semibold underline decoration-orange decoration-2 underline-offset-4 hover:decoration-ink">websites</Link> and do{" "}
              <Link href="/en/services/seo-ai-visibility" className="font-semibold underline decoration-orange decoration-2 underline-offset-4 hover:decoration-ink">SEO</Link>{" "}
              for clinics, law firms and local businesses in Romania, so you show up on Google and in ChatGPT&apos;s answers.
              {" "}I work alone: I do the audit, I build the site and I&apos;m the one who replies.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/en/free-ai-visibility-audit" arrow>Get the free audit</Button>
              <Button href="#journey" variant="ghost">See how we work</Button>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            <div aria-hidden className="absolute inset-[6%] rounded-full bg-orange" />
            <div aria-hidden className="absolute right-[2%] top-[4%] h-[24%] w-[24%] rounded-full bg-teal" />
            <div aria-hidden className="absolute inset-[16%] grid place-items-center rounded-full bg-ink">
              <span className="font-serif text-[5.5rem] font-extrabold leading-none text-paper sm:text-[7rem]">DC</span>
            </div>
            <div className="absolute bottom-[4%] left-0 rotate-[-4deg] rounded-2xl border-2 border-ink bg-canvas px-4 py-3 shadow-[5px_5px_0_0_var(--color-ink)]">
              <p className="text-sm font-semibold text-ink">I reply personally</p>
              <p className="font-serif text-2xl font-extrabold text-ink">within 24 hours</p>
            </div>
          </div>
        </Container>

        <Container>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border-2 border-ink bg-ink md:grid-cols-4">
            {[
              ["AI-ready & instant", "fast for people, clear for ChatGPT, easy to find on Google", "col-span-2"],
              ["Trust", "a design that convinces patients and clients before they call", ""],
              ["Clear", "visitors understand in 5 seconds what you do and how to reach you", ""],
            ].map(([a, b, span]) => (
              <div key={a} className={`bg-paper px-5 py-5 ${span}`}>
                <dt className="font-serif text-2xl font-extrabold text-ink sm:text-3xl">{a}</dt>
                <dd className="mt-1 text-[15px] text-muted">{b}</dd>
              </div>
            ))}
          </dl>
        </Container>
        <div className="h-14 sm:h-20" />
      </section>

      <Section id="the-moment" white>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Eyebrow>The moment you notice</Eyebrow>
            <H2>A patient tells you they asked ChatGPT. And it recommended <span className="whitespace-nowrap"><Mark kind="underline">someone else</Mark>.</span></H2>
            <p className="mt-6 text-lg leading-relaxed text-ink">
              Your clients don&apos;t only search on Google anymore. They ask an AI assistant and get a single name, right in the conversation.
              The assistant picks the businesses it can understand and verify.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Most local websites aren&apos;t ready for this yet. That&apos;s your advantage, if you move first.
            </p>
          </div>
          <AnswerCard lang="en" />
        </div>
      </Section>

      <Section id="journey">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>Our path, step by step</Eyebrow>
            <H2>From &ldquo;nobody finds me&rdquo; to <Accent>&ldquo;ChatGPT recommended me&rdquo;.</Accent></H2>
            <p className="mt-5 text-lg leading-relaxed text-muted">Five steps, no surprises and no middlemen. At every step you know what you do and what I do.</p>
            <JourneyEnds lang="en" />
            <div className="mt-8"><Button href="/en/free-ai-visibility-audit" arrow>Start with step 1</Button></div>
          </div>
          <Journey lang="en" />
        </div>
      </Section>

      <Section id="services" white>
        <Eyebrow>Services</Eyebrow>
        <H2>Four services. One goal: <span className="whitespace-nowrap"><Mark kind="underline">being chosen</Mark>.</span></H2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {servicesEn.map((s, i) => (
            <Link key={s.slug} href={`/en/services/${s.slug}`}
              className={`group relative flex min-h-[340px] flex-col rounded-3xl p-7 transition-transform duration-200 hover:-translate-y-1 ${tileStyle[i % 3]}`}>
              {s.flagship && <span className="mb-4 w-fit rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-wider text-paper">Main service</span>}
              <h3 className="font-serif text-3xl font-extrabold leading-[1.05]">{s.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed">{s.short}</p>
              <ul className="mt-5 space-y-1.5 text-[15px] font-medium">
                {s.points.map((p) => (<li key={p}>→ {p}</li>))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-1 pt-6 font-semibold">
                Learn more <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="work" dark>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-center">
          <div>
            <Eyebrow dark>Recent work</Eyebrow>
            <H2 dark>Cheesy Media: from one long page to a <Accent className="text-orange">complete website.</Accent></H2>
            <p className="mt-5 text-lg leading-relaxed text-paper/85">
              I rebuilt the website of a photo and video agency in Cluj-Napoca: a new design, a page for every service and a technical base for Google and AI.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-paper/10 p-5"><dt className="text-[15px] text-paper/75">Mobile performance</dt><dd className="font-serif text-4xl font-extrabold text-paper">82 <span className="text-orange">→ 100</span></dd></div>
              <div className="rounded-2xl bg-paper/10 p-5"><dt className="text-[15px] text-paper/75">Pages in the sitemap</dt><dd className="font-serif text-4xl font-extrabold text-paper">0 <span className="text-orange">→ 11</span></dd></div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3"><Button href="/en/work/cheesy-media" variant="light" arrow>Read the case study</Button><Button href="/en/work" variant="ghost-dark">All work</Button></div>
          </div>
          <div className="relative pb-6 pr-4 sm:pr-8">
            <Shot name="site-desktop" alt="The new Cheesy Media home page on desktop" sizes="(min-width: 1024px) 620px, 92vw" />
            <Shot name="site-mobile" phone alt="The same Cheesy Media site on a phone" sizes="170px" className="absolute bottom-0 right-0 w-[28%] max-w-[170px]" />
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <figure className="rounded-3xl bg-paper/5 p-4">
            <Shot name="before-home" alt="The old Cheesy Media site: a single purple page" sizes="(min-width: 768px) 340px, 92vw" />
            <figcaption className="mt-4 px-1"><span className="text-xs font-bold uppercase tracking-wider text-paper/60">Before</span><p className="mt-1 text-[16px] text-paper/85">One purple page, no structured data, marked as English though written in Romanian.</p></figcaption>
          </figure>
          <figure className="rounded-3xl bg-paper/5 p-4">
            <Shot name="after-servicii" alt="The Services page of the new Cheesy Media site" sizes="(min-width: 768px) 340px, 92vw" />
            <figcaption className="mt-4 px-1"><span className="text-xs font-bold uppercase tracking-wider text-orange">Design</span><p className="mt-1 text-[16px] text-paper/85">Big headlines in black, cream and yellow. The mascot kept, &ldquo;Get a quote&rdquo; always in view.</p></figcaption>
          </figure>
          <figure className="rounded-3xl bg-paper/5 p-4">
            <Shot name="after-proces" alt="The Process page of the new Cheesy Media site" sizes="(min-width: 768px) 340px, 92vw" />
            <figcaption className="mt-4 px-1"><span className="text-xs font-bold uppercase tracking-wider text-orange">Google and AI</span><p className="mt-1 text-[16px] text-paper/85">Correct language, structured data on every page, FAQ, sitemap and access for AI crawlers.</p></figcaption>
          </figure>
        </div>
      </Section>

      <Section id="who-for">
        <Eyebrow>Who I work with</Eyebrow>
        <H2>Local businesses and practices where <Accent>trust decides.</Accent></H2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {audiences.map(({ Icon, t, d, href }) => (
            <Link key={t} href={href} className="group rounded-3xl border-2 border-ink bg-canvas p-6 transition-shadow duration-200 hover:shadow-[6px_6px_0_0_var(--color-ink)]">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-orange"><Icon aria-hidden className="h-6 w-6 text-ink" /></span>
              <h3 className="mt-5 font-serif text-2xl font-extrabold text-ink">{t}</h3>
              <p className="mt-2 text-[17px] leading-relaxed text-muted">{d}</p>
              <span className="mt-4 inline-block font-semibold text-ink underline decoration-orange decoration-2 underline-offset-4">See how I work</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="promises" white>
        <Eyebrow>How I work with you</Eyebrow>
        <H2>What I promise. And what I <Accent>don&apos;t.</Accent></H2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p) => (
            <div key={p.t} className="rounded-3xl border-2 border-ink bg-paper p-6">
              <h3 className="font-serif text-2xl font-extrabold text-ink">{p.t}</h3>
              <p className="mt-2 text-[17px] leading-relaxed text-ink">{p.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl bg-ink p-7 text-paper">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange">I promise</p>
            <ul className="mt-4 space-y-3 text-[17px] leading-relaxed">
              <li>→ I reply to every message within 24 hours.</li>
              <li>→ You see every stage, and nothing moves on without your approval.</li>
              <li>→ I show you the results &ldquo;before and after&rdquo; on the same Google and ChatGPT questions.</li>
            </ul>
          </div>
          <div className="rounded-3xl border-2 border-ink bg-canvas p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-ink">I don&apos;t promise</p>
            <p className="mt-4 text-[17px] leading-relaxed text-ink">
              First place on Google or a guaranteed recommendation in ChatGPT. Nobody can guarantee that, and anyone who does isn&apos;t telling the truth.
              I promise a measurable, transparent process.
            </p>
          </div>
        </div>
      </Section>

      <Section id="about" white>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <Eyebrow>A letter from me</Eyebrow>
            <H2>Why I <Mark kind="underline">do this.</Mark></H2>
          </div>
          <div>
            <div className="space-y-5 text-xl leading-relaxed text-ink">
              <p>I started building businesses at 16: online shops, then marketing for others. I learned one uncomfortable thing early: a good product goes nowhere if people can&apos;t find it and don&apos;t trust it.</p>
              <p>I study Economics at Babeș-Bolyai University in Cluj, with exchanges in Paris and New York State. I think in costs, risk and results, so I judge a website by what it brings your business, not by how flashy it looks.</p>
              <p>I work alone, on purpose. The person you speak to on the first call is the one who does your audit, builds your site and answers your messages.</p>
              <p className="font-accent text-3xl italic">— Dragoș</p>
            </div>
            <figure className="mt-10 rounded-3xl bg-paper p-6 sm:p-8">
              <blockquote className="font-serif text-xl font-bold leading-snug text-ink">
                &ldquo;He was one of the few students I have worked with who managed to engage the majority of the audience… making him the person his peers would turn to when they felt stuck.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-[15px] text-muted">Dan C. Lungescu, PhD, lecturer, Babeș-Bolyai University</figcaption>
            </figure>
            <div className="mt-8"><Button href="/en/about" variant="ghost">Read the full story</Button></div>
          </div>
        </div>
      </Section>

      <Section id="faq"><FAQ items={faq} lang="en" /></Section>
      <CtaBand id="contact" lang="en" />
    </>
  );
}
