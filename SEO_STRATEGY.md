# SEO strategy: dragoscatana.com

Made 19 Nov 2026 with all 17 searchfit-seo skills:
- **Audit:** seo-audit, technical-seo, broken-links, seo-check.
- **Keywords and planning:** keyword-cluster, keyword-clustering, content-strategy, create-topic, content-brief.
- **Content and pages:** create-content, on-page-seo, internal-linking.
- **Schema:** schema-markup, generate-schema.
- **AI and languages:** ai-visibility, content-translation, translate-content.

All keyword data comes from Semrush, database `ro` unless stated. Volume is monthly searches; KD is difficulty from 0 to 100. Nothing here is a ranking promise.

## 1. Where the site stands

**Audit of 23 indexable pages (seo-audit, seo-check)**
- **Passing:** one H1 per page, canonicals everywhere, alt text on every image, unique titles, and JSON-LD on every page. All 31 internal links resolve (broken-links), and every external link returns 200.
- **Fixed in this pass:**
  - **Social preview:** no Open Graph image existed; there is now a site-wide `og.png`.
  - **Article metadata:** articles had no `og:url`, and their titles ran over 60 characters with the suffix.
  - **404 page:** it pointed its canonical at `/_not-found/` and had no H1.

**Technical (technical-seo)**
- **Passing:**
  - **Redirects:** HTTPS and `www` → apex take one 301.
  - **Headers:** HSTS, nosniff, frame options and permissions policy are set.
  - **Delivery:** assets are gzipped and cached for a year (immutable); HTML is never stale; HTTP/3 is on.
  - **Crawling:** the sitemap lists every page, and robots allows all reputable search and AI crawlers.
- **Fixed:** a URL without its trailing slash (for example `/servicii`) went `301 → http://…/servicii/ → https`, a two-hop chain through plain HTTP. `.htaccess` now sends it straight to `https://…/servicii/`.
- **Open:**
  - **Cloudflare SSL:** Full (strict) is blocked until the origin has a valid certificate for dragoscatana.com (it serves `*.hostingplatform.com`, expiring July 2026). See `TODO.md`.
  - **Security header:** a Content-Security-Policy header is optional and low priority.

## 2. The competitive reality
- **"creare site" (2,900, KD 8):** the results are dominated by DIY site builders (Webnode, Site123, WebWave) and established agencies (scdesign, webdesignersalley, pretsite).
- **"optimizare seo" (1,900, KD 30):** the results are informational guides (The Markers, Wikipedia, Startarium, Smarters).
- **Takeaway:** a new, solo domain will not win head terms quickly. It wins on **niche plus intent**:
  1. Clinics, law firms and local businesses.
  2. Plain-language guides that rank for informational searches and lead to the services.
  3. AI visibility (GEO), where few Romanian competitors publish.
  4. A real person with real proof (the Cheesy Media case, the professor quote).

## 3. Keyword map (one cluster per page)
| Page | Primary | Supporting |
|---|---|---|
| `/` | web designer freelancer, web design cluj (110) | web designer (1,300), freelancer web design (110) |
| `/servicii/creare-website` | creare site web (2,900) | realizare site (480), creare site de prezentare (390), cât costă un site (320), preț site web (260) |
| `/servicii/seo-vizibilitate-ai` | optimizare seo (1,900) | servicii seo (2,900), consultant seo (140), optimizare site (880), seo local (90), geo seo (40) |
| `/audit-gratuit-vizibilitate-ai` | audit seo gratuit (140) | audit seo (260) |
| `/servicii/website-clinici-medicale` | site clinică / cabinet medical | marketing medical (50) |
| `/servicii/website-cabinete-avocatura` | site avocat | |
| `/articole/ce-este-seo` **(new pillar)** | ce înseamnă seo (320, KD 23), ce este seo (210, KD 27) | ce este optimizarea seo (40) |
| `/articole/google-business-profile-ghid` **(new)** | google business profile (2,400, KD 55) | recenzii google (320, KD 35), seo local |

Not targeted, on purpose:
- **agenție seo:** Dragoș is not an agency.
- **google my business (KD 87):** too hard; it's covered by the guide above.
- **Location pages without real local proof:** they would be doorway pages.

## 4. Content roadmap (content-strategy, create-topic)
Pillar **"Ce este SEO"** (live in code) links to the clusters below. Cadence: 2 articles a month. Every article links to its service page and to the free audit.

| # | Article | Keyword (vol/KD) | Intent | Priority |
|---|---|---|---|---|
| 1 | ✅ Ce este SEO? Ghid simplu pentru afaceri locale | ce înseamnă seo 320/23 | Info | Done |
| 2 | ✅ Google Business Profile: ghid pas cu pas | google business profile 2,400/55 | Info | Done |
| 3 | Cât costă un site în România și ce influențează prețul (factors only, no prices) | cât costă un site 320/20, preț site web 260/18 | Commercial | Quick win |
| 4 | Cum obții recenzii Google, legal și fără să plătești | recenzii google 320/35 | Info | Quick win |
| 5 | Ce trebuie să conțină site-ul unei clinici | ce trebuie să conțină un site 30, site clinică | Commercial | Niche |
| 6 | Site pentru avocați: ce permit regulile profesiei (verify UNBR rules before publishing) | site avocat | Commercial | Niche |
| 7 | SEO local: cum apari „în zona mea” | seo local 90/28 | Info | Fill-in |
| 8 | ✅ Mentenanță site (service page `/servicii/mentenanta-site/`) | mentenanță site 260/22 | Commercial | Done |
| 9 | Magazin online: Shopify, Medusa sau WooCommerce? | creare magazin online 1,300/40 | Commercial | Not now (your decision) |

**Decisions for you:**
- **Online stores:** not now (decided 19 Nov 2026). Demand exists if you revisit: creare magazin online 1,300, magazin online 1,600, shopify romania 480.
- **Maintenance:** yes, live as a service page (19 Nov 2026).
- **City pages:** București, with creare site 480 / KD 10, web design 260 and seo 260. Build them only once you have a real client or local proof there.

**Brief for #3 (content-brief):**
- **Title:** "Cât costă un site în 2026? Ce influențează prețul".
- **Outline:**
  1. Ce primești, de fapt.
  2. Factorii: pagini, conținut, funcționalități, platformă.
  3. Site de prezentare vs magazin online.
  4. Costuri după lansare: domeniu, găzduire, mentenanță.
  5. Semnale de alarmă la oferte foarte ieftine.
  6. FAQ.
- **Rules:** no price list, honest ranges only if you decide to publish them. Link to `/servicii/creare-website` and to the audit.

## 5. Internal linking (internal-linking)
- **Hub and spoke:** `/servicii/seo-vizibilitate-ai` is the hub and lists all five SEO and AI guides. The clinic, law-firm and creare-website pages list their relevant guides in a new "Ghiduri utile" block. Articles link back to the service and vertical pages.
- **Result:** inbound links to the weak pages rose (main content only):

| Page | Before | After |
|---|---|---|
| Schema guide | 1 | 4 |
| Clinic page | 2 | 4 |
| Law-firm page | 2 | 3 |
| Creare website | 3 | 4 |
| Lucrări | 1 | 2 |

  The two new guides have 6 each. No generic anchors like "click aici" are used.
- **Rule for new articles:** each one links to the pillar, to 1 or 2 sibling guides, to one service page and to the audit.

## 6. Structured data (schema-markup, generate-schema)
- **Already present:** a linked `@graph` connecting Person, ProfessionalService and WebSite; Service on the service pages; Article, FAQPage and BreadcrumbList on articles.
- **Added in this pass:**
  - **ProfessionalService:** `image`, `serviceType` and an `OfferCatalog` of the 3 services (no prices).
  - **Person:** `knowsAbout`.
  - **WebSite:** `publisher`.
  - **Service:** `serviceType`.
  - **Article:** `image`.
- **Validation:** all JSON-LD blocks parse, and Article has every required property.
- **Not used:**
  - **HowTo:** Google retired the rich result.
  - **Review / AggregateRating:** there are no real reviews yet, and we never invent them.
- **sameAs:** GitHub and LinkedIn (added 19 Nov 2026). Add the Google Business Profile Maps URL once it is verified and public.
- **Testing:** use https://search.google.com/test/rich-results after deploy.

## 7. AI visibility (ai-visibility)
- **Crawlers:** robots and Cloudflare allow GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended and the rest. Cloudflare (19 Nov 2026): Browser Integrity Check off, Crawler Hints (IndexNow) on, Bot Fight Mode and AI Labyrinth off.
- **llms.txt:** lists the services, the case study (now with both Lighthouse results) and every article, generated from the site data.
- **Entity consistency:** the same name, city, services and languages appear on the site, in schema and in llms.txt.
- **Biggest gaps:** off-site signals.
  - Google Business Profile: updated 19 Nov 2026, verification pending.
  - LinkedIn: headline, About and website aligned with the site (19 Nov 2026).
  - Get listed in 2–3 Romanian business directories.
  - Ask Cheesy Media for a public mention or review.
- **Tracking:** the Semrush AI prompt tracking needs an Enterprise subscription your account doesn't have, so test manually once a month. Use the method in `/articole/cum-verifici-daca-ai-iti-mentioneaza-afacerea`. Ask the same prompts in ChatGPT, Gemini, Claude and Perplexity, and log whether you're mentioned, where, how you're described, and which sources are cited. Baseline prompts:
  1. „Cine face site-uri pentru clinici în Cluj?”
  2. „Recomandă un web designer freelancer în România pentru un cabinet de avocatură.”
  3. „Cum apare o afacere locală în răspunsurile ChatGPT? Cine oferă servicii de GEO în România?”
  4. „Ce este GEO și cine se ocupă de asta în România?”
  5. „Dragoș Cătană web designer” (entity check: is the description accurate?)

## 8. International (content-translation, translate-content)
- **Data:** inside Romania, English searches exist and are easy: seo romania 210/KD 38, web design romania 170/16, web designer romania 170/16, web design cluj 110/32. French and German searches are about 0, and UK demand is negligible.
- **Decision support:** `/en` is now built (19 Nov 2026), aimed at expats and foreign-owned firms in Romania. Keep FR/DE as client add-ons only, with no site versions.
- **Setup:**
  - **Structure:** subdirectory `/en/…`, with `<html lang="en">` on those pages.
  - **Canonicals:** each language is its own canonical.
  - **hreflang, reciprocal on every page:**
    ```html
    <link rel="alternate" hreflang="ro" href="https://dragoscatana.com/" />
    <link rel="alternate" hreflang="en" href="https://dragoscatana.com/en/" />
    <link rel="alternate" hreflang="x-default" href="https://dragoscatana.com/" />
    ```
  - **Sitemap:** add the `/en` URLs with alternates.
- **Localised homepage draft (not built):**
  - **Title (≈52 chars):** Web designer in Romania: websites & SEO | Dragoș Cătană
  - **Meta (≈150 chars):** Freelance web designer in Cluj-Napoca. Websites, SEO and AI visibility for clinics, law firms and local businesses in Romania. Free audit in 24h.
  - **H1:** Clients are searching. *Make sure they find you.*
  - **Lead:** I'm Dragoș Cătană, a freelance web designer in Cluj-Napoca. I build websites and do SEO in Romania for clinics, law firms and local businesses, so you show up on Google and in ChatGPT's answers.
  - **CTA:** Get your free audit
  - **Notes:**
    - "Cluj-Napoca" and "Romania" are kept for the local keywords.
    - "AI-ul" becomes "ChatGPT" because English readers name the tool.
    - The tone stays first person.
    - It needs a native-level read before publishing.

## 9. How we measure (monthly)
- **Google Search Console:** impressions, clicks and average position for the keyword map above.
- **Leads:** form submissions (the `generate_lead` event in GTM/GA4, once GA4 is set up) and calls.
- **AI mentions:** the 5-prompt log above.
- **Check-in:** re-run the Semrush keyword check every 3 months, and see `TODO.md` for the rest.
