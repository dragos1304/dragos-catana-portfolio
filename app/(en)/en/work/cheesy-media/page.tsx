import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Breadcrumbs, Button, CtaBand, Eyebrow, H2, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Shot } from "@/components/Shot";
import { abs, breadcrumb } from "@/lib/schema";
import { site } from "@/lib/site-config";
import { alternates } from "@/lib/i18n";

const path = "/en/work/cheesy-media";
export const metadata: Metadata = {
  title: "Case study: Cheesy Media website redesign",
  description:
    "Redesign for a photo and video agency in Cluj: new design, 11 pages, structured data, ready for Google and AI. Mobile performance 82 → 100.",
  alternates: alternates(`${path}/`, "en"),
};

const scores = [
  ["Performance", 82, 100],
  ["Accessibility", 96, 100],
  ["Best practices", 100, 100],
  ["SEO", 100, 100],
] as const;

/** Colours and type measured on the live sites (computed styles), 19 Nov 2026. */
const palette = [
  { hex: "#121016", name: "Warm black", use: "background for big headlines and the menu", ink: false },
  { hex: "#FBF7EF", name: "Cream", use: "page background, warmer than white", ink: true },
  { hex: "#FFB21C", name: "\"Cheese\" yellow", use: "buttons and the key word in each headline", ink: true },
  { hex: "#5D3DB6", name: "Violet", use: "kept from the old brand, as an accent", ink: false },
  { hex: "#F2542D", name: "Orange", use: "a rare accent, from the mascot's star", ink: false },
];

const design = [
  ["Headlines you read at a glance", "Bricolage Grotesque ExtraBold, condensed, in capitals, instead of Alfa Slab One. One key word in yellow on every page."],
  ["Contrast instead of violet everywhere", "The old site was violet from top to bottom. The new one uses black and cream bands, and violet stays only as an accent so the brand is still recognisable."],
  ["The mascot stays the star", "The cheese with speakers appears in the logo and on the pages. I didn't invent a new identity, I made the most of the existing one."],
  ["Big images, in frames", "Services have large images with thick borders and rounded corners, instead of blocks of text."],
  ["One next step, always visible", "The yellow \"Cere ofertă\" (Get a quote) button is in the menu on every page, and WhatsApp is one tap away on a phone."],
];

/** Checked on the live pages (HTML, robots.txt, sitemap.xml), 19 Nov 2026. */
const aiSteps = [
  { t: "The right language", before: "The page was marked as English (lang=\"en\"), although the text was in Romanian.", after: "lang=\"ro\" on every page, so Google and AI assistants know which market it's for." },
  { t: "A page for every question", before: "One long page with every service.", after: "11 addresses in the sitemap, including a page each for photo, video, social media and web design. An AI assistant can cite exactly the right page." },
  { t: "Structured data", before: "No structured data at all.", after: "ProfessionalService on every page, FAQPage on the home page and BreadcrumbList on inner pages." },
  { t: "Titles with service and city", before: "One generic title: \"Agenție Modernă de Marketing în Cluj-Napoca\".", after: "Its own title and description on every page, for example \"Agenție marketing Cluj: foto, video, social\"." },
  { t: "Open access for crawlers", before: "No robots.txt and no sitemap.", after: "robots.txt allows every crawler (including AI assistants') and points to the sitemap. Only the thank-you page is excluded." },
  { t: "Direct answers", before: "Generic wording about the services.", after: "An FAQ with short answers and a 4-step process: the format AI can easily pick up." },
  { t: "Sharing previews", before: "No image for sharing.", after: "A preview image (og:image) on every page, for WhatsApp, Facebook and LinkedIn." },
  { t: "Mobile speed", before: "Performance 82 in Lighthouse.", after: "100 in all four Lighthouse categories." },
];

const pages = [
  { name: "after-servicii", label: "Services", alt: "The Services page of the new Cheesy Media site, with a big headline" },
  { name: "after-foto", label: "Service: photography", alt: "The dedicated photography service page" },
  { name: "after-proces", label: "A 4-step process", alt: "The Process page with four steps: analysis, production, editing, management" },
  { name: "after-portofoliu", label: "Portfolio", alt: "The Portfolio page, with filters for photo, video, social and web" },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: "Home", path: "/en/" }, { name: "Work", path: "/en/work" }, { name: "Cheesy Media", path }]),
        { "@context": "https://schema.org", "@type": "Article", headline: "Case study: Cheesy Media website redesign", description: "Redesign for a photo and video agency in Cluj-Napoca: design, structure, readiness for Google and AI, results measured in Lighthouse.", url: abs(path), image: abs("/lucrari/cheesy-media/site-desktop-1440.webp"), inLanguage: "en", author: { "@id": `${site.url}/#person` }, datePublished: "2026-11-19", dateModified: "2026-11-19" }]} />

      <Section id="case-study">
        <Breadcrumbs lang="en" items={[{ name: "Home", href: "/en/" }, { name: "Work", href: "/en/work" }, { name: "Cheesy Media" }]} />
        <Eyebrow>Case study · Redesign</Eyebrow>
        <h1 className="max-w-4xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">Cheesy Media: from one long page to a complete website.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">
          Cheesy Media is a photo, video and social media agency in Cluj-Napoca. I rebuilt the site together with the owners: a new design, a page for every service and a technical base ready for Google and AI assistants.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2 text-sm font-semibold">
          {["Redesign", "Visual design", "Structure and content", "Technical SEO", "AI readiness", "Next.js · Netlify"].map((t) => (
            <li key={t} className="rounded-full border-2 border-ink px-3 py-1">{t}</li>
          ))}
        </ul>
        <div className="relative mt-12 pb-10 pr-10 sm:pb-12 sm:pr-24">
          <Shot name="site-desktop" alt="The new Cheesy Media home page on desktop" sizes="(min-width: 1152px) 1000px, 92vw" eager />
          <Shot name="site-mobile" phone alt="The same Cheesy Media site on a phone" sizes="200px" className="absolute bottom-0 right-0 w-[26%] max-w-[200px]" />
        </div>
        <p className="mt-6 text-sm text-slate-ink">
          Before: <a className="underline underline-offset-4" href="https://cheesymedia.netlify.app" target="_blank" rel="noopener noreferrer">cheesymedia.netlify.app</a> · After:{" "}
          <a className="underline underline-offset-4" href="https://cheesy-media.netlify.app" target="_blank" rel="noopener noreferrer">cheesy-media.netlify.app</a> (both in Romanian)
        </p>
      </Section>

      <Section id="before-after" white>
        <Eyebrow>Before and after</Eyebrow>
        <H2>Same business, a different first impression.</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-ink">
          The original site worked, but it put the whole offer on one violet page, and requests went through a Google form. The new site explains what the agency does, one topic at a time, and leads visitors to a quote request.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <figure>
            <Shot name="before-home" alt="The old Cheesy Media home page: violet background, centred headline and a big logo" sizes="(min-width: 1024px) 540px, 92vw" />
            <figcaption className="mt-4 flex items-center gap-2 text-[15px] text-slate-ink"><span className="rounded-full bg-ink/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-ink">Before</span> One page, all violet, a logo instead of a message.</figcaption>
          </figure>
          <figure>
            <Shot name="site-desktop" alt="The new Cheesy Media home page" sizes="(min-width: 1024px) 540px, 92vw" />
            <figcaption className="mt-4 flex items-center gap-2 text-[15px] text-slate-ink"><span className="rounded-full bg-orange px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-ink">After</span> A clear message, strong contrast, &ldquo;Get a quote&rdquo; always in the menu.</figcaption>
          </figure>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-8 md:mx-auto md:max-w-xl">
          <figure>
            <Shot name="m-before-home" phone alt="The old Cheesy Media site on a phone" sizes="(min-width: 768px) 260px, 45vw" />
            <figcaption className="mt-3 text-center text-sm font-semibold text-slate-ink">Phone, before</figcaption>
          </figure>
          <figure>
            <Shot name="site-mobile" phone alt="The new Cheesy Media site on a phone" sizes="(min-width: 768px) 260px, 45vw" />
            <figcaption className="mt-3 text-center text-sm font-semibold text-slate-ink">Phone, after</figcaption>
          </figure>
        </div>
      </Section>

      <Section id="design" dark>
        <Eyebrow dark>The design</Eyebrow>
        <H2 dark>A playful brand, <span className="text-orange">put in order.</span></H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-paper/85">
          I kept the mascot&apos;s playful tone, but gave the site the order of a serious agency. The colours and fonts below are the ones measured on the live site.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {palette.map((c) => (
            <li key={c.hex} className="overflow-hidden rounded-2xl border-2 border-paper/15">
              <div className="flex h-24 items-end p-3" style={{ background: c.hex }}>
                <span className={`font-mono text-sm font-semibold ${c.ink ? "text-ink" : "text-paper"}`}>{c.hex}</span>
              </div>
              <div className="bg-paper/5 p-3">
                <p className="font-semibold text-paper">{c.name}</p>
                <p className="mt-0.5 text-sm leading-snug text-paper/70">{c.use}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-paper/15 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-paper/60">Headlines</p>
            <p className="mt-2 font-serif text-4xl font-extrabold uppercase leading-none tracking-tight text-paper">Bricolage <span className="text-[#FFB21C]">Grotesque</span></p>
            <p className="mt-2 text-sm text-paper/70">ExtraBold, condensed, capitals. Before: Alfa Slab One.</p>
          </div>
          <div className="rounded-2xl border-2 border-paper/15 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-paper/60">Text</p>
            <p className="mt-2 text-3xl font-medium text-paper">Inter, easy to read</p>
            <p className="mt-2 text-sm text-paper/70">Short paragraphs, airy lines, high contrast on a cream background.</p>
          </div>
        </div>
        <ol className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {design.map(([t, d], i) => (
            <li key={t} className="flex gap-4">
              <span className="font-serif text-3xl font-extrabold leading-none text-orange">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-serif text-xl font-extrabold text-paper">{t}</h3>
                <p className="mt-1.5 text-[16px] leading-relaxed text-paper/80">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="pages">
        <Eyebrow>The new pages</Eyebrow>
        <H2>Every service has its own page.</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-ink">
          The one long page became separate pages for services, each individual service, the process, the portfolio, about and contact. The same visual system on all of them.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {pages.map((p) => (
            <figure key={p.name}>
              <Shot name={p.name} alt={p.alt} sizes="(min-width: 1152px) 540px, (min-width: 768px) 45vw, 92vw" />
              <figcaption className="mt-4 font-serif text-lg font-extrabold">{p.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-8">
          <figure><Shot name="site-mobile" phone alt="The home page on a phone" sizes="(min-width: 640px) 30vw, 45vw" /><figcaption className="mt-3 text-center text-sm font-semibold text-slate-ink">Home</figcaption></figure>
          <figure><Shot name="m-after-servicii" phone alt="The Services page on a phone" sizes="(min-width: 640px) 30vw, 45vw" /><figcaption className="mt-3 text-center text-sm font-semibold text-slate-ink">Services</figcaption></figure>
          <figure className="col-span-2 mx-auto w-1/2 sm:col-span-1 sm:w-full"><Shot name="m-after-proces" phone alt="The Process page on a phone" sizes="(min-width: 640px) 30vw, 45vw" /><figcaption className="mt-3 text-center text-sm font-semibold text-slate-ink">Process</figcaption></figure>
        </div>
      </Section>

      <Section id="google-and-ai" white>
        <Eyebrow>Google and AI</Eyebrow>
        <H2>What I did so the site gets found and cited.</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-ink">
          An AI assistant recommends what it can understand and verify. These are the technical steps taken on Cheesy Media. You can check them any time in the pages&apos; code.
        </p>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {aiSteps.map((s, i) => (
            <li key={s.t} className="flex flex-col rounded-3xl border-2 border-ink bg-paper p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-serif text-sm font-extrabold text-paper">{i + 1}</span>
                <h3 className="font-serif text-xl font-extrabold">{s.t}</h3>
              </div>
              <dl className="mt-4 space-y-3 text-[16px] leading-relaxed">
                <div><dt className="text-xs font-bold uppercase tracking-wider text-muted">Before</dt><dd className="text-slate-ink">{s.before}</dd></div>
                <div className="flex gap-2"><Check aria-hidden className="mt-1 h-5 w-5 shrink-0 text-orange-ink" /><div><dt className="text-xs font-bold uppercase tracking-wider text-orange-ink">After</dt><dd className="text-ink">{s.after}</dd></div></div>
              </dl>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl rounded-2xl bg-paper p-5 text-[16px] leading-relaxed text-slate-ink">
          <strong className="text-ink">What I don&apos;t claim:</strong> I don&apos;t publish Google rankings or ChatGPT mentions for Cheesy Media, because we haven&apos;t measured them with the client yet. When we have them, I&apos;ll add them here.
        </p>
      </Section>

      <Section id="measured-result">
        <Eyebrow>Measured result</Eyebrow>
        <H2>Mobile Lighthouse scores</H2>
        <p className="mt-3 max-w-3xl text-slate-ink">
          Measured with Google PageSpeed Insights (Lighthouse), on mobile, on 18 November 2026. Scores are estimates and can vary slightly between runs.
        </p>
        <dl className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {scores.map(([n, a, b]) => (
            <div key={n} className="rounded-2xl border-2 border-ink bg-canvas p-5">
              <dt className="text-[15px] font-semibold text-slate-ink">{n}</dt>
              <dd className="mt-1 font-serif text-4xl font-extrabold">{a === b ? <>{b}</> : <><span className="text-muted">{a}</span> <span className="text-orange-ink">→ {b}</span></>}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element -- static export: explicit srcset instead of next/image */}
            <img src="/lucrari/cheesy-media/lighthouse-inainte-960.webp" srcSet="/lucrari/cheesy-media/lighthouse-inainte-640.webp 640w, /lucrari/cheesy-media/lighthouse-inainte-960.webp 960w, /lucrari/cheesy-media/lighthouse-inainte.webp 1600w" width={1600} height={980} alt="Lighthouse report for the old site: performance 82, accessibility 96, best practices 100, SEO 100" sizes="(min-width: 1152px) 560px, (min-width: 768px) 45vw, 92vw" loading="lazy" decoding="async" className="h-auto w-full rounded-2xl border-2 border-ink" />
            <figcaption className="mt-2 text-sm text-slate-ink">Before: performance 82, accessibility 96.</figcaption>
          </figure>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element -- static export: explicit srcset instead of next/image */}
            <img src="/lucrari/cheesy-media/lighthouse-dupa-960.webp" srcSet="/lucrari/cheesy-media/lighthouse-dupa-640.webp 640w, /lucrari/cheesy-media/lighthouse-dupa-960.webp 960w, /lucrari/cheesy-media/lighthouse-dupa.webp 1600w" width={1600} height={953} alt="Lighthouse report for the new site: 100 for performance, accessibility, best practices and SEO" sizes="(min-width: 1152px) 560px, (min-width: 768px) 45vw, 92vw" loading="lazy" decoding="async" className="h-auto w-full rounded-2xl border-2 border-ink" />
            <figcaption className="mt-2 text-sm text-slate-ink">After: 100 in all four categories.</figcaption>
          </figure>
        </div>
        <p className="mt-6 max-w-3xl text-slate-ink">
          I don&apos;t publish traffic or enquiry numbers, because I don&apos;t have figures confirmed by the client. Stack: Next.js, hosted on Netlify.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/en/services/website-redesign" arrow>See the redesign service</Button>
          <Button href="/en/free-ai-visibility-audit" variant="ghost">Free audit for your site</Button>
        </div>
      </Section>
      <CtaBand lang="en" />
    </>
  );
}
