# Dragoș Cătană: Services Portfolio — Structure & Branding Blueprint

> Status: planning document. Replaces the earlier "academic journey" concept (see `Gemini.md`) with a **services-first** site.
> Source of truth for biography: `dragos_catana_profile.txt`. Nothing below invents metrics, clients, prices or testimonials. Anything not in the profile is marked **[TO FILL]**.

---

## 1. What I learned from the repo

### Who Dragoș is (from `dragos_catana_profile.txt`)
- **Dragoș-Mihai Cătană**, BSc Economics (English-taught), Babeș-Bolyai University (UBB FSEGA), Cluj-Napoca. 4.0/4.0 GPA; ranked top student across all English-taught programs (per Prof. Dan C. Lungescu, PhD).
- **International track:** EUTOPIA Alliance / Ecotopia (Paris, Year 2) with 84 ECTS passed in one year at a 4.0 GPA; SUNY Cortland exchange (USA, Year 3).
- **Builder since 16:** 5+ years of venture building across two incubators. Ventures: apparel and DTC e-commerce, **digital marketing & agency work** (growth campaigns, client acquisition), solar feasibility consulting, Web3 advisory. 2nd place, UBB i-Lab Startup Competition.
- **Hands-on web proof:** designed, coded and deployed the full official web platform of the OSE student club from scratch.
- **Other:** peer mentor who runs study cohorts, organized the FSEGA International Week concert, First Ascent Business Edition applicant.
- **Mindset:** unit economics, cash-flow discipline, risk management, "theory vs. market reality."

### Existing technical rules (`Gemini.md`)
Next.js 15 (App Router), TypeScript, Tailwind, Framer Motion, Lucide; mobile-first; semantic HTML; palette Canvas White `#FFFFFF`, Deep Navy `#0F172A`, Brass `#D97706`; no placeholder text or mock numbers. **All of this is kept**, because it already fits a premium services brand.

> Note: `Gemini.md` and `dragos_catana_profile.txt` are RTF files saved with `.md`/`.txt` extensions (they start with `{\rtf1…`). Worth converting to plain text before any tooling reads them.

---

## 2. Strategic positioning

### The one-line promise
> **Websites that look current, load fast, and get recommended, by Google and by AI assistants.**

### Why this wedge works
People increasingly ask ChatGPT, Gemini, Perplexity, Claude and Google's AI answers *"who should I hire / buy from?"* instead of scrolling ten blue links. If a business isn't understood and cited by those systems, it's invisible at the exact moment of choice. Most web agencies still sell "SEO" as keyword rankings only. Dragoș sells **visibility in both worlds**: classic search and AI answers.

### Three services, one story
| # | Service | Role in the funnel | Client's problem |
|---|---------|--------------------|------------------|
| 1 | **Web Redesign** | Entry point (most clients already have a dated site) | "My site looks and feels like 2015." |
| 2 | **Website Creation** | For new businesses and projects | "I have nothing online, or only a social page." |
| 3 | **SEO & AI Search Optimization** *(flagship)* | Attached to 1 and 2, or sold standalone | "People can't find me, and AI never mentions me." |

**Key structural decision:** AI visibility is not a footnote inside "SEO." It is the headline of the brand and has its own dedicated page, and it is built into Services 1 and 2 by default (every redesign/build ships "AI-ready").

### Differentiator vs. a generic freelancer (grounded in the profile)
1. **Business-first, not pixel-first.** Economics training plus real ventures means he talks about conversion, cost per lead and payback, not just layouts.
2. **Has built and run businesses** (e-commerce, agency, consulting), so he understands what a site must *do* for the owner.
3. **Rigor.** 4.0 GPA and 84 ECTS in a year signal reliability and process discipline. Use this lightly, as an About-page fact, not a homepage brag.
4. **Writes the code himself.** Shipped a full platform (OSE) from scratch. No agency hand-offs.
5. **Bilingual-market ready** (Romanian + English; lived in France and the US). **[TO FILL: confirm languages offered, e.g. RO/EN/FR]**

---

## 3. Brand

### Name & identity
- **Working brand:** `Dragoș Cătană` (personal brand, already the domain/repo name). Descriptor line: *Web Design & AI Search Optimization.*
- Personal-brand-led is right for a solo service: trust comes from the person. **[TO FILL: decide whether a studio name is wanted later]**
- Keep diacritics in display text; use ASCII in URLs (`dragos-catana`). Use **one consistent spelling everywhere** (site, LinkedIn, GitHub, directories). Entity consistency matters for AI systems.

### Voice
- **Plain, confident, specific.** Short sentences. No agency buzzwords ("synergy", "cutting-edge", "world-class").
- Explain AI/SEO in business terms: *"When someone asks an AI for the best dentist in Cluj, is your name in the answer?"*
- Honest about uncertainty: AI recommendation is influenced, not guaranteed. Never promise "#1 in ChatGPT." Promise a measurable process.
- Tone anchor: *the sharp young economist who also ships code.*

### Visual system (extends `Gemini.md`)
| Token | Value | Use |
|-------|-------|-----|
| Canvas | `#FFFFFF` | Backgrounds |
| Deep Navy | `#0F172A` | Text, hero/dark sections, footer |
| Brass | `#D97706` | CTAs, key accents, "AI" highlights (use sparingly) |
| Slate tints | `#F8FAFC`, `#E2E8F0`, `#64748B` | Cards, borders, secondary text **(proposed)** |

- **Type:** editorial serif for headlines (keeps the existing academic/editorial DNA) + clean sans for body/UI. **[TO FILL: pick fonts, e.g. a serif display + Inter]**
- **Layout:** generous whitespace, strong grid, thin rules, large numerals for process steps. Feels like a well-set journal, which reads as premium and trustworthy.
- **Signature motif:** a **before → after** slider/split on redesign work, and an **"answer card"** component styled like an AI chat reply showing a business being recommended (illustrative, clearly labelled as an example, never as a real screenshot unless real).
- **Motion:** Framer Motion, transform/opacity only, `viewport={{ once: true }}` (per `Gemini.md`). Respect `prefers-reduced-motion`.
- **Accessibility:** WCAG AA contrast. Note Brass `#D97706` on white is **below 4.5:1 for small text**; use it for large text, buttons with navy text, or borders, never small body copy.

---

## 4. Sitemap

```
/                              Home
/services                      Services hub
  /services/web-redesign
  /services/website-creation
  /services/seo-ai-search      ← flagship (AI ranking)
/work                          Selected work / case studies
  /work/[slug]                 One page per project
/ai-visibility-audit           Lead-magnet landing (free audit offer)
/insights                      Guides / articles (SEO + AI search)
  /insights/[slug]
/about                         ← single page: ALL journey + studies live here
/contact                       Contact + project brief form
/faq                           (optional; FAQs also live on service pages)
/privacy  /terms               Legal
/llms.txt  /sitemap.xml  /robots.txt   Machine-readable files (see §7)
```

Primary nav (max 5): **Services · Work · Insights · About · Contact (button: "Get a free AI visibility audit")**

---

## 5. Page-by-page blueprint

### 5.1 Home `/`
Goal: in 10 seconds, say what he does, why AI matters, and what to do next.

1. **Hero** — H1: *"Be the business AI recommends."* Sub: *"Modern websites and SEO built to rank on Google and get cited by ChatGPT, Gemini and Perplexity."* CTAs: **Free AI visibility audit** (primary) · See services (secondary).
2. **The shift (why now)** — 3 short points: customers ask AI for recommendations; AI picks from sources it understands and trusts; most sites aren't built for that. *No invented statistics. If citing a stat, link a primary source.*
3. **Three services** — cards linking to each service page, flagship card visually emphasized.
4. **How it works** — 4 steps: Audit → Plan → Build/Optimize → Measure.
5. **Proof** — featured work (before/after) or, until real client work exists, the OSE platform + honest "now taking first clients" framing. **[TO FILL]**
6. **Short "who's behind this"** — 2-3 lines + photo + link to About.
7. **FAQ (4-5 questions)** — mirrored in FAQPage schema.
8. **Final CTA** — audit form or booking link.

### 5.2 Services hub `/services`
- Intro paragraph defining the three services and how they combine.
- Three cards + a **"which one do I need?"** mini-decision table (old site → Redesign; no site → Creation; site exists but invisible → SEO & AI).
- **Bundles:** "Redesign + AI-ready" and "New site + AI-ready."
- Pricing stance: **[TO FILL: fixed packages, starting-from prices, or "request a quote"]**. Never display made-up prices.

### 5.3 Web Redesign `/services/web-redesign`
- **H1:** *"Redesign your website for how people (and AI) browse today."*
- Signs your site is outdated (checklist): not mobile-friendly, slow, unclear offer, old visual style, hard to edit, no structured data, weak accessibility.
- What's included: UX/content audit, new design, rebuild in a modern stack, performance, accessibility, **content restructured so AI can quote it**, **safe migration (301 redirects, keep existing rankings)**.
- **Redesign without losing your SEO** — an explicit trust section (a major fear for site owners).
- Process timeline, before/after gallery, FAQ, CTA.

### 5.4 Website Creation `/services/website-creation`
- **H1:** *"A fast, clear website built to be found from day one."*
- For: new businesses, local services, freelancers, small e-commerce, project launches.
- Included: strategy and structure, design, build (Next.js), responsive, SEO foundations, schema markup, analytics, contact/booking flows, handover/training.
- Mention e-commerce experience (from real ventures) where relevant. **[TO FILL: which platforms offered, e.g. custom Next.js, Shopify, WordPress]**
- Process, FAQ, CTA.

### 5.5 SEO & AI Search Optimization `/services/seo-ai-search` ⭐ flagship
Longest, strongest page. Structure:
1. **H1:** *"Get found on Google. Get recommended by AI."*
2. **What changed** — people now ask assistants "who's the best X near me?" and often act on the single answer. Define **GEO / AEO** (generative / answer engine optimization) in plain English.
3. **Classic SEO vs. AI visibility** — comparison table (what each rewards, how it's measured, what I do about it).
4. **What I do** (the deliverables):
   - **AI visibility audit** — test real prompts customers use across ChatGPT, Gemini, Perplexity, Claude and Google AI answers; record whether you're mentioned, in what position, sentiment, accuracy, and which competitors appear instead.
   - **Entity & brand clarity** — one consistent name/description/NAP across site, Google Business Profile, directories, LinkedIn.
   - **Structured data** — Organization, LocalBusiness, Service, FAQPage, Article, Person (JSON-LD).
   - **Answer-ready content** — pages that directly answer buyer questions in clear, quotable language (question headings, definitions, comparison tables).
   - **Technical foundations** — crawlability, speed/Core Web Vitals, clean sitemap, `robots.txt` that deliberately allows/blocks AI crawlers, `llms.txt`.
   - **Authority & third-party mentions** — reviews, directories, community presence, "best of" and comparison coverage.
   - **Local SEO** where relevant.
   - **Monthly tracking & report** — prompt panel re-tested monthly; plain-English report.
5. **Honest expectations** — AI answers vary and models update on their own schedule; improvements take weeks to months; no one can guarantee a position. Position as *measured improvement*, not guarantees. This builds trust and avoids false promises.
6. **Packages:** One-off Audit · Implementation project · Monthly retainer. **[TO FILL: scope and pricing]**
7. **Sample audit output** (clearly labelled *example format*): prompt / mentioned? / position / sentiment / accurate?.
8. FAQ + CTA to the free audit.

### 5.6 Work `/work` and `/work/[slug]`
Honest approach, since the profile lists no client sites except OSE:
- **Now:** feature the **OSE student-club platform** (designed, coded, deployed from scratch) as Case Study #1. **[TO FILL: URL, screenshots, your role, tech, outcome]**
- **Next:** add 1-2 **self-initiated redesigns** (e.g., redesign a real local business site as a clearly labelled concept) and, importantly, **this site's own AI-visibility results** as a live case study.
- **Then:** real client cases.
- **Case-study template:** Context → Problem → What I did → Before/After → Result (only real, verifiable numbers) → Stack → Client quote (only if real).
- Rule inherited from `Gemini.md`: **no mock numbers, no fake testimonials.**

### 5.7 AI Visibility Audit `/ai-visibility-audit`
Single-purpose lead-gen page.
- Promise: *"See whether ChatGPT, Gemini and Perplexity recommend your business, and what to do if they don't."*
- Form: name, email, website, business category, city/region, 2-3 competitors. **[TO FILL: free manual audit vs. automated report; delivery time]**
- What they receive, how long it takes, privacy note.
- Doubles as the site's primary conversion goal.

### 5.8 Insights `/insights`
Publishing is both a lead engine and the strongest signal to AI systems (see §8). Index with categories: *AI Search*, *SEO*, *Web Design*, *Case Notes*.

### 5.9 About `/about` — the single "journey" page
**Everything biographical lives here and only here**, so the rest of the site stays focused on services. Structure:

1. **Intro** — who he is in 3 sentences; photo. **[TO FILL: photo]**
2. **Why I do this** — how building ventures from age 16 led to web + search: *every business I touched needed to be found.*
3. **Ventures & execution** — 5+ years across two incubators; apparel & DTC e-commerce, digital marketing/agency, solar feasibility consulting, Web3 advisory; UBB i-Lab 2nd place; the OSE web platform.
4. **Studies** — UBB FSEGA BSc Economics (4.0/4.0, top of English-taught programs); EUTOPIA/Ecotopia year in Paris (84 ECTS, 4.0); SUNY Cortland exchange.
5. **How I work** — unit economics, cash-flow discipline, risk management, "theory vs. market reality" → applied to web projects (scope clarity, measurable goals, no surprises).
6. **Beyond work** — mentoring study cohorts, FSEGA International Week concert, leadership programs.
7. **Recommendation** — Prof. Lungescu's quote(s) from the profile, attributed exactly. *(Confirm permission to publish.)*
8. **CTA** — contact.

> Positioning note: the profile's current focus is MSc Finance / Supply Chain admissions and finance internships. Decide how openly the About page mentions this. **[TO FILL: keep it as a "long-term vision" line, or omit]**

### 5.10 Contact `/contact`
Short form (name, email, what you need, website URL, budget range optional), email, LinkedIn, booking link **[TO FILL]**, response-time promise **[TO FILL]**, location/time zone (Cluj-Napoca, Romania; remote-first). Also an alternative path to the free audit.

---

## 6. Conversion architecture
- **Primary CTA everywhere:** Free AI visibility audit.
- **Secondary CTA:** Start a project (contact form).
- Sticky header CTA; one CTA block per page section end; no more than two competing actions per screen.
- Trust elements, in order of strength: real case studies → real client quotes → process transparency → About credentials.
- Measure: form submissions, audit requests, CTA clicks, scroll depth on service pages. Privacy-friendly analytics **[TO FILL: Plausible / GA4]**.

---

## 7. Making *this* site rank in AI (practise what I sell)

The portfolio itself is the best proof. Treat it as the first client.

**Technical**
- Server-rendered/static pages (Next.js App Router) so content is in the HTML for crawlers that don't run JS.
- Unique `<title>`, meta description, canonical, OG tags on every page; clean URLs; one H1 per page.
- `sitemap.xml`, `robots.txt` that **explicitly allows** reputable search and AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, etc.). Decide deliberately, as a services business wants to be cited. **[TO FILL: confirm policy]**
- `/llms.txt` — concise map of the site's key pages for LLMs (emerging convention; low cost, unproven benefit, so don't oversell it).
- Core Web Vitals green, image optimisation, accessible markup.

**Structured data (JSON-LD)**
| Page | Schema |
|------|--------|
| Site-wide | `Organization` / `ProfessionalService`, `WebSite`, `Person` (Dragoș, `sameAs` to LinkedIn/GitHub) |
| Services | `Service` (+ `provider`, `areaServed`) |
| FAQs | `FAQPage` |
| Insights | `Article` / `BlogPosting` with author = Person |
| Navigation | `BreadcrumbList` |
| About | `Person` with `alumniOf` (UBB), etc. |

**Entity consistency (off-site)**
Same name, bio and links on LinkedIn, GitHub, Google Business Profile **[TO FILL: if applicable]**, Clutch/directories, Behance/Dribbble if used, and any student/club pages that link to the OSE project.

**Answer-ready writing rules**
- Question-style H2/H3s that match real prompts; the direct answer in the first 1-2 sentences, then detail.
- Definitions, comparison tables, step lists, and "who it's for / not for."
- Visible author, last-updated dates, and cited primary sources.
- Specific, factual claims only. Vague marketing copy is rarely quoted.

**Target prompts to win** (to test monthly, before and after launch)
- "Who is a good freelance web designer in Cluj-Napoca / Romania?"
- "How do I get my business recommended by ChatGPT?"
- "What is generative engine optimization (GEO)?"
- "Should I redesign my website or just update it?"
- "Best SEO and AI-search freelancer for small businesses in Romania"
- "How much does a website redesign cost?"
**[TO FILL: confirm target geographies and languages. Romanian-language pages would be a real edge in a less-saturated market.]**

---

## 8. Content plan (Insights)

**Pillar → clusters** (topical authority):

```
PILLAR: AI Search Optimization (GEO/AEO) — the complete guide
├── What is GEO/AEO and how does it differ from SEO?
├── How AI assistants pick which businesses to recommend
├── How to check if ChatGPT/Gemini/Perplexity mentions your business (DIY prompt test)
├── Schema markup for small businesses: a plain-English guide
├── llms.txt and robots.txt for AI crawlers: what to allow
└── Local business + AI search: how to get recommended in your city

PILLAR: Website Redesign
├── 10 signs your website is outdated
├── How to redesign without losing your Google rankings
├── Redesign vs. rebuild: how to decide
└── Website redesign checklist (downloadable)

PILLAR: Website Creation / SEO foundations
├── What a new business website actually needs
├── Core Web Vitals explained for non-technical owners
└── Website cost: what drives price (no invented numbers)
```

- **First 5 to publish (quick wins):** GEO/AEO explainer · DIY AI visibility test · 10 signs your site is outdated · Redesign without losing rankings · Schema for small business.
- **Cadence:** 2 articles/month minimum, sustained. Consistency beats bursts.
- **Format per article:** answer-first intro, comparison table or checklist, FAQ block with schema, internal links to the relevant service page.
- **Internal linking:** every article → its service page + audit CTA; each service page → 2-3 relevant articles; Work cases ↔ services.

---

## 9. Technical structure (proposed)

```
app/
  layout.tsx            fonts, metadata base, JSON-LD (Organization/Person/WebSite)
  page.tsx              Home
  services/
    page.tsx
    web-redesign/page.tsx
    website-creation/page.tsx
    seo-ai-search/page.tsx
  work/
    page.tsx
    [slug]/page.tsx
  ai-visibility-audit/page.tsx
  insights/
    page.tsx
    [slug]/page.tsx      content from MDX files
  about/page.tsx
  contact/page.tsx
  sitemap.ts  robots.ts
  llms.txt/route.ts
components/
  ui/ (Button, Card, Section, Container)
  sections/ (Hero, ServiceCards, Process, FAQ, CTA, BeforeAfter, AnswerCard)
  seo/ (JsonLd helpers)
content/
  insights/*.mdx
  work/*.mdx
lib/
  site-config.ts        single source of truth: name, bio facts, links
```

- **Forms:** server action or a form service **[TO FILL]**, with spam protection and a GDPR-friendly consent line.
- **Hosting:** Netlify or Vercel **[TO FILL]**.
- **i18n:** plan routes for `/ro` from day one if Romanian is targeted. Hreflang when added.
- **Verification (from `Gemini.md` rules):** produce a build log and Lighthouse (performance, accessibility, SEO) report before marking each milestone done.

---

## 10. Build roadmap

| Phase | Deliverables |
|-------|--------------|
| **0 — Decisions** | Resolve the **[TO FILL]** items below; convert RTF source files to clean text |
| **1 — Foundation** | Next.js project, design tokens, layout, nav/footer, `site-config`, SEO/JSON-LD helpers |
| **2 — Core pages** | Home, Services hub, the three service pages, About, Contact |
| **3 — Conversion** | AI Visibility Audit page and form, analytics |
| **4 — Proof & content** | OSE case study, first 3-5 Insights articles, FAQ schema |
| **5 — Launch QA** | Lighthouse, accessibility pass, sitemap/robots/llms.txt, Search Console + Bing Webmaster, baseline AI-prompt test |
| **6 — Growth** | Monthly content, monthly AI-prompt tracking, directory/profile building, first client case studies |

---

## 11. Open questions (needed from Dragoș)

1. **Target market:** Romania only, EU, or global? Which languages (RO / EN / other)?
2. **Ideal clients:** local service businesses, e-commerce, startups, professionals?
3. **Pricing model:** fixed packages, "from" prices, or quote-only?
4. **Proof:** any live sites besides OSE (own ventures' stores/agency sites)? Any permission to show them? Any real client results or quotes?
5. **Tech offered:** custom Next.js only, or also WordPress/Shopify/Webflow?
6. **Availability:** freelance alongside studies, or full-time? (Affects retainer promises and the SUNY exchange timing.) How openly to mention the MSc/finance goals on About?
7. **Domain & email**, photo, social links, preferred contact method and booking tool.
8. **Brand name:** personal name only, or a studio name later?
9. **AI crawler policy:** allow all reputable AI bots (recommended for visibility)?
10. **Reference quote:** is Prof. Lungescu's recommendation cleared for public use?

---

## 12. Fact map: what comes from where

| Claim on site | Source |
|---------------|--------|
| 4.0/4.0 GPA; top English-taught student | Profile §1-2 (+ Prof. Lungescu quote, §5) |
| EUTOPIA/Paris, 84 ECTS in one year | Profile §2 |
| SUNY Cortland exchange | Profile §2 |
| 5+ years building ventures since 16; two incubators | Profile §3 |
| i-Lab 2nd place | Profile §3 |
| E-commerce, digital marketing/agency, solar feasibility, Web3 advisory | Profile §3 |
| Built OSE web platform from scratch | Profile §4 |
| Study cohorts, International Week concert, First Ascent applicant | Profile §4 |
| Services, pricing, client results, locations served, languages | **Not in profile. [TO FILL]** |
