# Dragoș Cătană: Services Portfolio — Structure & Branding Blueprint

> Status: planning document, v2 (decisions locked). Replaces the earlier "academic journey" concept (see `Gemini.md`) with a **services-first** site.
> Source of truth for biography: `dragos_catana_profile.txt`. Nothing here invents metrics, clients, prices or testimonials. Items still missing live in `TODO.md`.

---

## 0. Decisions locked

| Topic | Decision |
|-------|----------|
| **Market** | Romania only. Site is **Romanian-first**. |
| **Languages** | RO (default). Services also offered in **EN, FR, DE** as an add-on. (German confirmed.) |
| **Ideal clients** | Local service businesses, **medical clinics, law firms**, and similar professional practices. |
| **Brand** | Personal brand, **Dragoș Cătană**. No studio name. |
| **Pricing** | **Request a quote.** No prices shown anywhere. |
| **Offers** | 1) **Free** one-off AI visibility audit · 2) One-off website design / redesign · 3) Monthly collaboration for SEO/GEO. |
| **Platforms** | Custom Next.js (default), Webflow, Shopify, Medusa (see §5.4). |
| **Case study #1** | **Cheesy Media** redesign (friend's agency site). OSE is **not** featured. |
| **Audit** | Free, **manual**, delivered **within 24h**. |
| **Response time** | **24h** for everything. |
| **Booking** | Calendly: `https://calendly.com/dragoscatana/consultanta-1-la-1` |
| **Hosting / domain** | Netlify, `dragoscatana.com`, DNS on Cloudflare. |
| **Forms** | Netlify Forms (free tier) + spam protection. |
| **Analytics** | Google Tag Manager container `GTM-K7RPGZSV` (GA4 runs inside it). |
| **AI crawlers** | **Allow all reputable ones.** |
| **Reference quote** | Prof. Lungescu's recommendation is cleared for public use. |
| **About page** | Includes the goal: a top European business school, then a career in finance and teaching. |
| **Google Business Profile** | Later. Tracked in `TODO.md`. |

---

## 1. What I learned from the repo

### Who Dragoș is (from `dragos_catana_profile.txt`)
- **Dragoș-Mihai Cătană**, BSc Economics (English-taught), Babeș-Bolyai University (UBB FSEGA), Cluj-Napoca. 4.0/4.0 GPA; ranked top student across all English-taught programs (per Prof. Dan C. Lungescu, PhD).
- **International track:** EUTOPIA Alliance / Ecotopia (Paris, Year 2) with 84 ECTS passed in one year at a 4.0 GPA; SUNY Cortland exchange (USA, Year 3).
- **Builder since 16:** 5+ years of venture building across two incubators. Ventures: apparel and DTC e-commerce, **digital marketing & agency work** (growth campaigns, client acquisition), solar feasibility consulting, Web3 advisory. 2nd place, UBB i-Lab Startup Competition.
- **Other:** peer mentor who runs study cohorts, organized the FSEGA International Week concert, First Ascent Business Edition applicant.
- **Mindset:** unit economics, cash-flow discipline, risk management, "theory vs. market reality."
- **Long-term vision:** a top European business school (Finance / Supply Chain), then a career that combines finance with teaching.

### Existing technical rules (`Gemini.md`)
Next.js 15 (App Router), TypeScript, Tailwind, Framer Motion, Lucide; mobile-first; semantic HTML; palette Canvas White `#FFFFFF`, Deep Navy `#0F172A`, Brass `#D97706`; no placeholder text or mock numbers. **All kept**, as they already fit a premium services brand.

> `Gemini.md` and `dragos_catana_profile.txt` are RTF files saved with `.md`/`.txt` extensions (they start with `{\rtf1…`). Convert them to plain text before other tooling reads them.

---

## 2. Strategic positioning

### The one-line promise
> **Websites that look current, load fast, and get recommended, by Google and by AI assistants.**
>
> Romanian: **„Site-uri moderne, rapide, recomandate de Google și de asistenții AI."**

### Why this wedge works
People increasingly ask ChatGPT, Gemini, Perplexity, Claude and Google's AI answers *"who should I go to?"* instead of scrolling ten blue links. For a clinic or a law firm, that moment of choice is exactly where a new patient or client appears. If the practice isn't understood and cited by those systems, it's invisible there. Most agencies still sell SEO as keyword rankings only. Dragoș sells **visibility in both worlds**: classic search and AI answers.

### Three services, one story
| # | Service | Role in the funnel | Client's problem |
|---|---------|--------------------|------------------|
| 1 | **Web Redesign** | Entry point (most clients already have a dated site) | "My site looks and feels like 2015." |
| 2 | **Website Creation** | New practices and businesses | "I have nothing online, or only a social page." |
| 3 | **SEO & AI Search Optimization** *(flagship)* | Attached to 1 and 2, or sold standalone as a monthly collaboration | "People can't find me, and AI never mentions me." |

**Structural decision:** AI visibility is the headline of the brand, not a footnote inside "SEO." It has its own page, and every redesign/build ships "AI-ready" by default.

### Differentiators (all grounded in the profile)
1. **Business-first, not pixel-first.** Economics training plus real ventures means he talks about patients/clients gained, cost per lead and payback, not just layouts.
2. **Has built and run businesses** (e-commerce, agency, consulting), so he knows what a site must *do* for the owner.
3. **Rigor.** 4.0 GPA and 84 ECTS in one year signal reliability and process discipline. Keep it as an About-page fact, not a homepage brag.
4. **Custom code, not templates.** Sites are built in code (Next.js) with AI-assisted development that Dragoș reviews, so clients get custom work at a sensible turnaround. *(No speed claims until measured.)*
5. **Multilingual.** Romanian-first, with EN/FR/DE versions as an add-on. Lived in France and the US.

---

## 3. Brand

### Name & identity
- **Brand:** `Dragoș Cătană`. Descriptor: *Web Design & AI Search Optimization* / RO: *Web design și optimizare pentru căutare AI*.
- Keep diacritics in display text; ASCII in URLs and the domain (`dragoscatana.com`). Use **one consistent spelling everywhere** (site, LinkedIn, GitHub, directories). Entity consistency matters for AI systems.

### Voice
- **Plain, confident, specific.** Short sentences. No buzzwords.
- Explain AI/SEO in the client's terms: *„Când cineva întreabă un asistent AI care e cea mai bună clinică din Cluj, apare numele tău în răspuns?"*
- Honest about uncertainty: AI recommendations are influenced, not guaranteed. Never promise "#1 în ChatGPT." Promise a measurable process.
- Tone anchor: *the sharp young economist who also ships code.*
- **Sector sensitivity:** medical and legal clients need a calm, credible, non-hype tone. No claims about the client's own services that they haven't approved (medical and legal advertising has professional rules; the client stays responsible for compliance, and the site never writes medical or legal promises for them).

### Visual system (extends `Gemini.md`)
| Token | Value | Use |
|-------|-------|-----|
| Canvas | `#FFFFFF` | Backgrounds |
| Deep Navy | `#0F172A` | Text, hero/dark sections, footer |
| Brass | `#D97706` | CTAs, key accents, "AI" highlights (sparingly) |
| Slate tints | `#F8FAFC`, `#E2E8F0`, `#64748B` | Cards, borders, secondary text *(proposed)* |

- **Type:** editorial serif for headlines + clean sans for body. Must support Romanian diacritics (ă â î ș ț) fully. Test them before choosing. **[fonts: see `TODO.md`]**
- **Layout:** generous whitespace, strong grid, thin rules, large numerals for process steps.
- **Signature motifs:** a **before → after** comparison on redesign work, and an **"answer card"** styled like an AI chat reply showing a business being recommended (clearly labelled as an illustrative example).
- **Motion:** Framer Motion, transform/opacity only, `viewport={{ once: true }}`; respect `prefers-reduced-motion`.
- **Accessibility:** WCAG AA. Brass `#D97706` on white is **below 4.5:1 for small text**; use it for large text, as button fill with navy/white-bold text checked for contrast, or as borders.

---

## 4. Sitemap (Romanian-first URLs)

Romanian slugs help local search and read naturally to Romanian users and AI systems.

```
/                                         Acasă (Home)
/servicii                                 Services hub
  /servicii/redesign-website              Web Redesign
  /servicii/creare-website                Website Creation
  /servicii/seo-vizibilitate-ai           SEO & AI Search Optimization  ← flagship
/lucrari                                  Work / case studies
  /lucrari/cheesy-media                   Case study #1
/audit-gratuit-vizibilitate-ai            Free AI visibility audit (lead page)
/articole                                 Insights (guides)
  /articole/[slug]
/despre                                   About: the ONE page with the whole journey
/contact                                  Contact + project brief
/confidentialitate  /termeni  /cookie     Legal (GDPR privacy, terms, cookies)
/sitemap.xml  /robots.txt  /llms.txt      Machine-readable files
/en/...                                   English version (phase 2, with hreflang)
```

Primary nav (max 5): **Servicii · Lucrări · Articole · Despre · Contact** (button: **„Audit gratuit AI"**).

---

## 5. Page-by-page blueprint

### 5.1 Home `/`
Goal: in 10 seconds, say what he does, why AI matters, and what to do next.

1. **Hero** — H1: *„Fii afacerea pe care o recomandă AI-ul."* Sub: *„Site-uri moderne și SEO construite să apară în Google și să fie citate de ChatGPT, Gemini și Perplexity."* CTAs: **Audit gratuit** (primary) · Vezi serviciile (secondary).
2. **The shift** — 3 short points: clients ask AI for recommendations; AI picks sources it understands and trusts; most local sites aren't built for that. *No invented statistics. Any stat needs a linked primary source.*
3. **Who I work with** — clinics, law firms, local service businesses (short, recognisable).
4. **Three services** — cards, flagship emphasised.
5. **How it works** — Audit → Plan → Build/Optimize → Measure.
6. **Proof** — Cheesy Media before/after (§5.6).
7. **Short "who's behind this"** — 2-3 lines + photo + link to `/despre`.
8. **FAQ (4-5 questions)** — mirrored in FAQPage schema.
9. **Final CTA** — free audit form + Calendly.

### 5.2 Services hub `/servicii`
- Short definition of the three services and how they combine.
- **"Ce ai nevoie?"** decision table: old site → Redesign; no site → Creation; site exists but invisible → SEO & AI.
- **Bundles:** "Redesign + AI-ready", "Site nou + AI-ready".
- **Pricing stance:** every service ends with **„Cere o ofertă"**. No prices published.
- **Multilingual add-on:** EN / FR / DE versions of any site, quoted on request.

### 5.3 Web Redesign `/servicii/redesign-website`
- **H1:** *„Redesign de website pentru felul în care caută oamenii (și AI-ul) astăzi."*
- Signs your site is outdated: not mobile-friendly, slow, unclear offer, dated visual style, hard to edit, no structured data, weak accessibility.
- Included: UX/content audit, new design, rebuild, performance, accessibility, **content restructured so AI can quote it**, **safe migration (301 redirects, keep existing rankings)**.
- **Redesign without losing your SEO** — explicit trust section.
- Process timeline, Cheesy Media before/after, FAQ, CTA.

### 5.4 Website Creation `/servicii/creare-website`
- **H1:** *„Un website rapid și clar, construit să fie găsit din prima zi."*
- For: new practices, clinics, law firms, local services, small online shops.
- Included: structure and content strategy, design, build, responsive, SEO foundations, schema markup, analytics, contact/booking flows, handover and training.

**Platforms, and when to pick each** (chosen for the Romanian market and for working well with AI-assisted development):

| Platform | Best for | Why |
|----------|----------|-----|
| **Custom Next.js** *(default)* | Clinics, law firms, local services, any site where speed, SEO and AI-readiness are the point | Full control of HTML, structured data and performance; hosts free on Netlify; code-first, so AI-assisted development is strongest here. |
| **Webflow** | Clients who want to edit visually themselves | Good visual CMS, clean output, no code upkeep for the client. Check hosting cost and Romanian-language/SEO limits before quoting. |
| **Shopify** | Standard online shops that want to launch fast | Mature checkout, apps and payments. Scope Romanian specifics early (local payment providers, invoicing, couriers). |
| **Medusa** (headless commerce) | Custom or B2B shops with unusual logic | Open-source and fully customisable; pairs with a Next.js storefront. More engineering, so it suits larger or non-standard needs. |

- **Romanian-market scoping checklist for shops** (confirm per client, don't assume): payment processor, invoicing software, courier integration, GDPR cookie consent, consumer-information pages required by Romanian law.
- **Existing WordPress sites** are common in Romania. They're not a build target, but they are a frequent *redesign/migration source* (preserve URLs and rankings when moving).
- Process, FAQ, CTA.

### 5.5 SEO & AI Search Optimization `/servicii/seo-vizibilitate-ai` ⭐ flagship
The longest, strongest page.

1. **H1:** *„Fii găsit pe Google. Fii recomandat de AI."*
2. **What changed** — people ask assistants "which clinic / lawyer / service is best near me?" and often act on the answer. Define **GEO / AEO** (generative / answer engine optimization) in plain Romanian.
3. **Classic SEO vs. AI visibility** — comparison table (what each rewards, how it's measured, what I do).
4. **What I do:**
   - **AI visibility audit** — test the real questions your clients ask across ChatGPT, Gemini, Claude, Perplexity and Google AI answers; record whether you're mentioned, position, sentiment, accuracy, and which competitors appear instead.
   - **Entity & brand clarity** — one consistent name, description and contact data across site, directories, LinkedIn, Google Business Profile.
   - **Structured data** — Organization, LocalBusiness/MedicalBusiness/LegalService, Service, FAQPage, Article, Person.
   - **Answer-ready content** — pages that answer patient/client questions in clear, quotable language.
   - **Technical foundations** — crawlability, speed/Core Web Vitals, clean sitemap, crawler-friendly `robots.txt`, `llms.txt`.
   - **Authority & third-party mentions** — reviews, directories, community presence.
   - **Local SEO** — Google Business Profile, local citations, reviews process.
   - **Monthly tracking & report** — the prompt panel is re-tested monthly; plain-language report.
5. **Honest expectations** — AI answers vary and models update on their own schedule; improvement takes weeks to months; no one can guarantee a position. Position as *measured improvement*.
6. **How we can work together** (no prices):
   - **Audit gratuit** — one-off, free, manual, delivered within 24h.
   - **Proiect de implementare** — fixes from the audit, as part of a design/redesign or standalone.
   - **Colaborare lunară SEO/GEO** — ongoing content, technical care, monitoring and reporting.
   - Every option: **„Cere o ofertă."**
7. **Sample audit output** (labelled *example format*): prompt / mentioned? / position / sentiment / accurate?.
8. FAQ + CTA to the free audit.

### 5.6 Work `/lucrari` and `/lucrari/cheesy-media`
**Case study #1 — Cheesy Media** (a Cluj-Napoca photo/video and social-media agency; a friend's business). Old site `cheesymedia.netlify.app` → new site `cheesy-media.netlify.app`.

What I could verify from the two live sites (use only what's true and showable):
| | Before | After |
|---|---|---|
| Structure | One long landing page, with a Google Form for custom requests | Dedicated pages: services (one each for foto, video, social, web), portfolio, process, contact |
| Offer clarity | Service blocks with generic wording | Clear 4-step process, three packages (Start / Growth / Full Content, quote-based), FAQ |
| Conversion paths | Phone + Google Form | Quote request form, phone, WhatsApp |
| Search/share basics | Generic metadata | Keyword-led titles and descriptions (Cluj-Napoca + services), Open Graph/Twitter images, Romanian locale set |
| Visuals | Stock photography | Custom imagery and branding (mascot, identity) |

Rules for the page:
- **Results = only real, verifiable numbers.** Best option: run Lighthouse/PageSpeed on both versions and show the measured scores. Don't claim traffic or lead gains without client data.
- Get **written OK from Cheesy Media** to publish the case study, their name and screenshots. Add a quote only if they give a real one.
- Their portfolio items are marked "Proiect demonstrativ" on the new site, so don't present those as client results.
- Template: Context → Problem → What I did → Before/After → Result → Stack → Client quote (if real).

Later: add real client cases as they come, plus this site's own AI-visibility progress as a live case study.

### 5.7 Free AI Visibility Audit `/audit-gratuit-vizibilitate-ai`
Single-purpose lead page and the site's main conversion goal.
- Promise: *„Află dacă ChatGPT, Gemini și Perplexity îți recomandă afacerea, și ce poți face dacă nu."*
- **Free, manual audit, delivered within 24h.**
- Form: name, email, website, business type, city, 2-3 competitors, consent checkbox.
- Shows what they receive, how it works, privacy note. Alternative path: book on Calendly.

### 5.8 Insights `/articole`
Both a lead engine and the strongest signal to AI systems (see §8). Categories: *Căutare AI*, *SEO*, *Web design*, *Sănătate și juridic* (sector guides).

### 5.9 About `/despre` — the single "journey" page
**All biography lives here and only here**, keeping the rest of the site about services.

1. **Intro** — who he is in 3 sentences; photo.
2. **Why I do this** — building ventures from age 16 taught him that every business needs to be found; that's why web + search.
3. **Ventures & execution** — 5+ years across two incubators; apparel & DTC e-commerce, digital marketing/agency, solar feasibility consulting, Web3 advisory; UBB i-Lab 2nd place.
4. **Studies** — UBB FSEGA BSc Economics (4.0/4.0, top of English-taught programs); EUTOPIA/Ecotopia in Paris (84 ECTS in a year, 4.0); SUNY Cortland exchange.
5. **How I work** — unit economics, cash-flow discipline, risk management, "theory vs. market reality," applied to web projects: clear scope, measurable goals, no surprises.
6. **Where I'm headed** — the goal of getting into a top European business school and building a career in finance and teaching. Framed as part of who he is: structured, ambitious, and committed to teaching others (study cohorts, mentoring). *(Reassure clients: the work is run properly now; the goal explains the long-term thinking, not a lack of focus. Keep the wording honest about availability.)*
7. **Beyond work** — mentoring study cohorts, FSEGA International Week concert, leadership programs.
8. **Recommendation** — Prof. Dan C. Lungescu's quotes from the profile, attributed exactly (cleared for use).
9. **CTA** — free audit / Calendly.

### 5.10 Contact `/contact`
- Short form: name, email, what you need, website URL, budget range optional, GDPR consent.
- Email, LinkedIn, **Calendly: `https://calendly.com/dragoscatana/consultanta-1-la-1`**.
- **Promise: reply within 24h.**
- Location: Cluj-Napoca, Romania; remote-first, working with clients across Romania.
- Alternative path to the free audit.

---

## 6. Conversion architecture
- **Primary CTA everywhere:** Audit gratuit.
- **Secondary CTAs:** Cere o ofertă; Programează o discuție (Calendly).
- Sticky header CTA; one CTA block at the end of each major section; at most two competing actions per screen.
- Trust, in order of strength: real case studies → real client quotes → transparent process → About credentials.
- **Measure** (via GTM → GA4): form submissions, audit requests, Calendly clicks, phone/WhatsApp clicks, scroll depth on service pages.
- **GTM setup note:** the snippet you sent loads `gtm.js` for `GTM-K7RPGZSV` but is missing the standard `gtm.start` push and the `<noscript>` iframe, and the `gtag(...)` lines don't belong with a GTM container. Install GTM the standard way in Next.js (e.g. `@next/third-parties` `GoogleTagManager`, or the official snippet through `next/script`), with GA4 configured *inside* GTM.
- **GDPR / ePrivacy:** Romania is in the EU, so analytics cookies need consent. Add a cookie banner and use **Consent Mode** so GTM/GA4 only fire fully after consent. Keep the privacy page current.

---

## 7. Making *this* site rank in AI (practise what I sell)

The portfolio is the best proof. Treat it as the first client.

**Technical**
- Static/server-rendered pages (Next.js App Router) so content is in the HTML for crawlers that don't run JS.
- Unique `<title>`, meta description, canonical, Open Graph on every page; clean Romanian URLs; one H1 per page; `lang="ro"`.
- `sitemap.xml`, `robots.txt`, `llms.txt` (a short map of key pages for LLMs; emerging convention, low cost, unproven benefit, so don't oversell).
- Core Web Vitals green; optimised images; accessible markup.

**Which AI assistants can find the site (`robots.txt` policy: allow all of them)**

| Where people ask | Bot names to allow |
|------------------|--------------------|
| **ChatGPT** (OpenAI) | `OAI-SearchBot` (search results), `GPTBot` (training), `ChatGPT-User` (when a user's chat opens your page) |
| **Claude** (Anthropic) | `ClaudeBot`, `Claude-User`, `Claude-SearchBot` |
| **Gemini & Google AI answers** | `Googlebot` (search + AI Overviews), `Google-Extended` (Gemini training/grounding control) |
| **Perplexity** | `PerplexityBot`, `Perplexity-User` |
| **Microsoft Copilot / Bing** | `Bingbot` |
| **Others (Apple, DuckDuckGo, etc.)** | `Applebot`, `DuckDuckBot` |

Bot names change over time; recheck them each quarter against each vendor's documentation.

> ⚠️ **Cloudflare watch-out:** Cloudflare can block AI crawlers by default on some plans/settings (a "block AI bots" switch and a managed robots.txt). With Cloudflare as your DNS, keep Netlify records as **DNS-only** (grey cloud) if possible, and make sure no AI-bot blocking or bot-fight rule is turned on for this domain. Otherwise `robots.txt` says "welcome" while the firewall says "no".

**Structured data (JSON-LD)**
| Page | Schema |
|------|--------|
| Site-wide | `ProfessionalService`, `WebSite`, `Person` (Dragoș, with `sameAs` to LinkedIn/GitHub) |
| Services | `Service` (provider, `areaServed: Romania`) |
| FAQs | `FAQPage` |
| Articles | `Article` with author = Person |
| Navigation | `BreadcrumbList` |
| About | `Person` with `alumniOf` |

**Entity consistency (off-site)**
Same name, bio and links on LinkedIn, GitHub, directories and any partner pages. Google Business Profile comes later (`TODO.md`). Cheesy Media's case study should link back to the site.

**Answer-ready writing rules**
- Question-style H2/H3s matching real prompts; answer in the first 1-2 sentences, then detail.
- Definitions, comparison tables, step lists, "for whom / not for whom."
- Visible author and last-updated date; cite primary sources.
- Specific, factual claims. Vague marketing copy is rarely quoted.

### Keywords: what to realistically rank for

Honest premise: a new domain won't beat established agencies on broad terms like "creare website" or "agenție SEO" in the near term. The plan is to **win narrow, specific searches first**, build proof, then expand. *(Volumes below are not yet validated. A keyword-tool pass is in `TODO.md`.)*

| Tier | Target (Romanian) | Intent | Why it's realistic |
|------|-------------------|--------|--------------------|
| **1. Brand/entity** | „Dragoș Cătană web design", „Dragoș Cătană SEO" | Navigational | Nobody competes; this is how AI and Google learn who you are. Rank #1 fast. |
| **2. Niche + service** | „creare website clinică medicală", „redesign site cabinet medical", „website pentru avocați / cabinet de avocatură", „SEO pentru clinici medicale", „SEO pentru avocați" | Commercial | Specific audience, lower competition, high-value buyers. Main revenue targets. |
| **3. AI/GEO topic (low competition in Romanian)** | „optimizare pentru ChatGPT", „cum apar în ChatGPT", „GEO optimizare motoare de căutare AI", „vizibilitate în răspunsuri AI" | Informational → commercial | Few Romanian pages cover this well. Chance to become the reference. |
| **4. Local** | „freelancer web design Cluj-Napoca", „creare site Cluj-Napoca", „SEO Cluj-Napoca" | Commercial | Local intent, moderate competition. Strengthens with Google Business Profile and reviews. |
| **Avoid for now** | „creare website", „agenție SEO", „SEO România" | | Dominated by large agencies; slow payoff. |

Notes: many Romanians search **without diacritics** ("dragos catana", "clinica"). Write naturally with diacritics but make sure titles/URLs and a few body mentions cover the plain forms. Never keyword-stuff.

#### Validated with Semrush (Romania database, 18 Nov 2026)

Monthly search volume and keyword difficulty (KD, 0-100). Terms not listed returned no data, meaning too little volume to measure.

| Keyword | Volume | KD | Use on the site |
|---------|-------:|---:|-----------------|
| creare site web | 2,900 | 32 | Secondary term on the website-creation page (competitive) |
| creare site | 2,900 | 8* | Same page; *Semrush shows a very low KD here, treat as unreliable |
| realizare site / site web | 480 | 26–34 | Synonym for the creation page |
| agenție seo | 2,400 | 41 | Skip (agencies own it) |
| optimizare seo | 1,900 | 30 | Main term of the SEO page |
| optimizare site | 880 | 19 | Main term of the SEO page, easier |
| audit seo | 260 | 67 | Too hard |
| **audit seo gratuit** | 140 | 21 | **Primary term of the free-audit page** |
| consultant seo | 140 | 29 | Secondary on the SEO page |
| seo local | 90 | 28 | Local SEO section / article |
| seo ai | 140 | 71 | Too hard for now |
| **aeo** | 260 | 15 | **Article and SEO page (GEO/AEO)** |
| **geo seo** | 40 | 19 | **Article and SEO page** |
| web design cluj | 110 | 32 | Local term, supports Home and creation page |
| freelancer web design | 110 | 40 | Secondary |
| seo cluj | 70 | 13 | Local term |
| marketing medical | 50 | 11 | Clinics angle (article later) |
| redesign website / site | 10–20 | 0 | Tiny volume, still the core service, keep the page |
| site avocat / creare site avocat | 10–20 | 0 | Tiny volume |

What this tells us:
- **Romanian search volume for the niche is small.** Clinic and law-firm website terms barely register. That does not mean no demand: people ask AI and Google in full sentences, and the same people are high-value. Treat niche pages as **conversion and AI-citation pages**, not traffic pages.
- **Best realistic traffic targets:** "audit seo gratuit" (140, KD 21), "optimizare site" (880, KD 19), "aeo" (260, KD 15), "geo seo" (40, KD 19), plus local terms ("seo cluj", "web design cluj").
- **Broad terms** ("creare site web", "optimizare seo") have volume but strong competition. Use them naturally on service pages and win them through content and authority over time.
- The site already includes these terms in titles, headings and article text. Re-run the check in 3 months.

**Target prompts to test monthly** (before and after launch, across ChatGPT, Gemini, Claude, Perplexity):
- „Cine face website-uri pentru clinici medicale în Cluj?"
- „Cum fac să apară clinica mea în ChatGPT?"
- „Ce este GEO (optimizare pentru motoare AI)?"
- „Merită să fac redesign la site sau doar să-l actualizez?"
- „Freelancer web design și SEO în Cluj-Napoca"
- „Cât costă un website pentru cabinet de avocatură?" *(answer-style article without publishing his own prices)*

Realistic expectation: tier 3 and tier 1 prompts can show results first; "best freelancer in Cluj" style recommendations need reviews, case studies and third-party mentions, so they take longer.

---

## 8. Content plan (Articole)

All in Romanian first. **Pillar → clusters** for topical authority:

```
PILLAR: Optimizare pentru AI (GEO/AEO) — ghidul complet
├── Ce este GEO/AEO și cum diferă de SEO
├── Cum aleg asistenții AI ce afaceri să recomande
├── Cum verifici dacă ChatGPT/Gemini îți menționează afacerea (test DIY)
├── Schema markup pentru clinici și cabinete: ghid simplu
├── robots.txt și llms.txt pentru crawlerele AI: ce permiți
└── AI și afaceri locale: cum ajungi recomandat în orașul tău

PILLAR: Redesign de website
├── 10 semne că site-ul tău e depășit
├── Cum faci redesign fără să pierzi pozițiile din Google
├── Redesign sau reconstrucție: cum decizi
└── Checklist de redesign (descărcabil)

PILLAR: Website pentru clinici și cabinete de avocatură
├── Ce trebuie să conțină site-ul unei clinici medicale
├── Ce trebuie să conțină site-ul unui cabinet de avocatură
└── Core Web Vitals explicat pe înțelesul proprietarilor
```

- **First 5 (quick wins):** Ce este GEO/AEO · Test DIY AI visibility · 10 semne site depășit · Redesign fără pierderi SEO · Schema pentru clinici.
- **Cadence:** at least 2 articles/month, sustained.
- **Format:** answer-first intro, table or checklist, FAQ block with schema, internal links to the service page and the audit.
- **Internal linking:** every article → its service page + audit CTA; each service page → 2-3 related articles; case study ↔ services.
- **Languages later:** EN version after RO is solid (hreflang); FR/DE only for specific client projects.

---

## 9. Technical structure (proposed)

```
app/
  layout.tsx             fonts, metadata base, JSON-LD (site-wide), GTM, consent banner
  page.tsx               Acasă
  servicii/
    page.tsx
    redesign-website/page.tsx
    creare-website/page.tsx
    seo-vizibilitate-ai/page.tsx
  lucrari/
    page.tsx
    [slug]/page.tsx
  audit-gratuit-vizibilitate-ai/page.tsx
  articole/
    page.tsx
    [slug]/page.tsx      content from MDX
  despre/page.tsx
  contact/page.tsx
  sitemap.ts  robots.ts
  llms.txt/route.ts
components/
  ui/        Button, Card, Section, Container
  sections/  Hero, ServiceCards, Process, FAQ, CTA, BeforeAfter, AnswerCard
  seo/       JsonLd helpers
  consent/   CookieBanner
content/
  articole/*.mdx
  lucrari/*.mdx
lib/
  site-config.ts         single source of truth: name, bio facts, links, Calendly URL
```

- **Hosting:** Netlify, domain `dragoscatana.com`, **DNS on Cloudflare** (see watch-out in §7). Add the domain in Netlify, then set the Cloudflare records Netlify specifies. Redirect `www` ↔ apex and force HTTPS.
- **Forms (my pick): Netlify Forms**, since you're already on Netlify and it's free to start. Notes: free-tier submission limits apply (check current limits); Next.js needs a static hidden form so Netlify detects it; add a honeypot field plus optional reCAPTCHA for spam; email notifications to you; a consent checkbox with a link to the privacy page. If limits become a problem, switch to a server action + email API.
- **i18n:** Romanian at root; `/en` as phase 2 with `hreflang`. FR/DE are quoted add-ons, built per project.
- **Verification (from `Gemini.md`):** produce a build log and Lighthouse (performance, accessibility, SEO) report before marking each milestone done.

---

## 10. Build roadmap

| Phase | Deliverables |
|-------|--------------|
| **0 — Prep** | Clear the `TODO.md` blockers (photo, fonts, links, Cheesy Media permission); convert RTF files to text |
| **1 — Foundation** | Next.js project, tokens, layout, nav/footer, `site-config`, SEO/JSON-LD helpers, consent banner + GTM |
| **2 — Core pages (RO)** | Acasă, Servicii hub + 3 service pages, Despre, Contact |
| **3 — Conversion** | Audit page + Netlify Form, Calendly, event tracking |
| **4 — Proof & content** | Cheesy Media case study (with measured Lighthouse before/after), first 5 articles, FAQ schema |
| **5 — Launch QA** | Lighthouse, accessibility, sitemap/robots/llms.txt, Cloudflare/AI-bot check, Search Console + Bing Webmaster, baseline AI-prompt test |
| **6 — Growth** | 2 articles/month, monthly AI-prompt tracking, Google Business Profile, directories, first client cases, `/en` version |

---

## 11. Fact map: what comes from where

| Claim on site | Source |
|---------------|--------|
| 4.0/4.0 GPA; top English-taught student | Profile §1-2 (+ Prof. Lungescu quote, §5) |
| EUTOPIA/Paris, 84 ECTS in one year | Profile §2 |
| SUNY Cortland exchange | Profile §2 |
| 5+ years building ventures since 16; two incubators | Profile §3 |
| i-Lab 2nd place | Profile §3 |
| E-commerce, digital marketing/agency, solar feasibility, Web3 advisory | Profile §3 |
| Study cohorts, International Week concert, First Ascent applicant | Profile §4 |
| Goal: top European business school, finance + teaching career | Profile §1 + your confirmation |
| Cheesy Media before/after details | Live sites (`cheesymedia.netlify.app`, `cheesy-media.netlify.app`) |
| Languages, platforms, offers, response time, Calendly, GTM ID | Your confirmation (this conversation) |
| Prices, client results, third-party testimonials | **None. Do not publish until real.** |
