# Keyword targeting plan: dragoscatana.com

Made 21 Nov 2026 with `searchfit-seo:keyword-clustering` (clusters, one page per cluster) and `searchfit-seo:content-strategy` (intent, prioritisation, calendar). This file is the **decision engine** for the scheduled article task: the task always picks the highest-scoring open item below, then re-checks its data.

**Data:** DataForSEO (Google Ads volumes), Romania, Romanian, average of Nov 2025–Oct 2026, pulled 21 Nov 2026; KD where noted comes from Semrush (18–19 Nov 2026). Volumes are estimates, not traffic promises. "Trend" compares Oct 2026 with Nov 2025.

## 1. Why these keywords
Dragoș is a solo web designer in Cluj selling websites, redesign, SEO and AI visibility to clinics, law firms and local businesses. A new domain cannot win head terms like „creare site” (2,400, dominated by site builders and agencies) quickly, so the plan targets:
1. **Problems the buyer googles before hiring someone** (Google Business Profile, reviews, AI search): informational searches with real volume whose readers are the target client.
2. **Fast-rising AI-search topics** where few Romanian pages exist yet („google ai mode” went from 720 to 5,400 a month in a year).
3. **Niche, high-intent pages** (clinics, law firms) with tiny volume but direct buyers: worth having for conversions and for AI assistants answering „cine face site-uri pentru clinici”.
Navigational searches (people looking for a tool's login, such as „google search console” 27,100 or „pagespeed insights” 2,400) are counted at a fraction of their volume.

## 2. Existing pages: who owns which keywords (do not create competing pages)
| Page | Owns these keywords (vol, trend) | Action |
|---|---|---|
| `/` | web designer (260), web design cluj (90), seo cluj (70), creare site cluj (50), web designer freelancer (50) | keep |
| `/servicii/creare-website` | creare site / creare site web (2,400), creare site de prezentare (390), realizare site (320), site de prezentare (210), cat costa un site (210), pret site web (170) | owns "cost" intent: **no separate cost article** |
| `/servicii/seo-vizibilitate-ai` | servicii seo (2,900), optimizare seo (1,900), optimizare site (720), consultant seo (140), ai seo (140), geo seo (70) | keep |
| `/servicii/mentenanta-site` | mentenanta site (260) | keep |
| `/audit-gratuit-vizibilitate-ai` | audit seo (260), audit seo gratuit (110) | keep |
| `/articole/google-business-profile-ghid` | **google business profile (6,600, ↑ from 4,400)**, google my business (4,400, KD 87) | **refresh first** (volume grew most) |
| `/articole/ce-este-seo` | ce inseamna seo (260), ce este seo (170) | keep, refresh yearly |
| `/articole/ce-este-geo-optimizare-pentru-motoare-ai` | geo seo (70), ai seo (shared, informational side) | keep |
| `/articole/schema-markup-pentru-clinici-si-cabinete` | schema markup (90), date structurate (10) | keep |
| `/articole/cum-verifici-daca-ai-iti-mentioneaza-afacerea`, `/articole/10-semne…`, `/articole/redesign…` | long tail; redesign site (20) | keep |

## 3. Scoring formula
`Score = 3×Business + 2×Volume + Trend + 2×Gap + Ease + News` (max 50), each factor 0–5:
- **Business:** how likely the reader is a buyer (5 = clinic/law firm/local business owner with a problem Dragoș solves).
- **Volume:** 0 <30 · 1 30–89 · 2 90–259 · 3 260–899 · 4 900–2,999 · 5 ≥3,000 (navigational keywords count one level lower).
- **Trend:** 0 falling … 5 more than doubled in 12 months.
- **Gap:** 5 no page covers it · 3 an existing page covers it briefly · 0 already covered (→ update that page instead).
- **Ease:** 5 weak results (forums, thin pages) · 0 dominated by Google/big brands.
- **News:** 5 a policy or product change in the last 3 months · 0 nothing new.

## 4. Ranked queue (clusters → articles)
| Rank | Cluster → working title | Primary · supporting keywords (vol) | B V T G E N | Score | Duplicate guard |
|---|---|---|---|---|---|
| 1 | **AI Mode și AI Overviews în română: ce înseamnă pentru afacerea ta** | google ai mode (2,900 ↑↑) · ai overviews (880 ↑) · ai mode (33,100, mostly navigational) · chatgpt search (110) | 4 4 5 5 3 5 | 43 | GEO article is about assistants in general: this one is Google-specific; link both ways |
| 2 | **Recenzii Google: cum le obții corect (regulile din 2026)** | recenzii google (320, stable) | 5 3 2 3 3 4 | 36 | GBP guide has a short reviews step: go deeper (asking flow, replies, fake reviews, clinics/lawyers); cross-link |
| 3 | **Google Search Console pe înțeles: ce urmărești lunar** | google search console (27,100, navigational) · search console (8,100) · core update google (10) | 3 4 4 5 2 3 | 36 | Covers core updates and the AI report too, so there is no separate core-update article |
| 4 | **SEO local: cum apari pe hartă când clientul caută „lângă mine”** | seo local (140) | 5 2 3 2 4 2 | 32 | Only if it adds new ground beyond ce-este-seo §SEO local and the GBP guide; otherwise merge into them |
| 5 | **Ce trebuie să conțină site-ul unei clinici** | marketing medical (70) · site cabinet medical (10) · site cabinet stomatologic (10) | 5 1 2 3 5 1 | 31 | Clinic service page sells; article is the checklist. Verify medical advertising rules (CMR/CMSR) first |
| 6 | **Site lent? Cum citești PageSpeed Insights și ce repari** | pagespeed insights (2,400, navigational) · viteza site (90) | 3 3 2 4 3 2 | 30 | „10 semne” mentions speed in one line only |
| 7 | **Domeniu și găzduire: ce alegi pentru site-ul firmei** | domeniu site (390) · hosting site (210) | 3 3 2 5 2 1 | 30 | No prices; links to creare-website |
| 8 | **Accesibilitatea site-ului: ce cere Legea 232/2022** | legea 232/2022 (40) · european accessibility act (30) | 3 1 1 5 4 3 | 29 | „10 semne” mentions accessibility in one line only. Verify on legislatie.just.ro |
| 9 | **llms.txt: ce este și ce face (și ce nu face)** | llms.txt (140) | 2 2 2 4 4 4 | 28 | GEO article mentions it in one paragraph |
| 10 | **Site pentru avocați: ce permit regulile profesiei** | site avocat (20) · publicitate avocati (10) | 5 0 1 3 5 1 | 28 | Law-firm service page sells; verify the UNBR statute first |
| – | ~~Cât costă un site~~ | cat costa un site (210), pret site web (170) | — | — | **Merged:** owned by `/servicii/creare-website` (no prices, factors only) |
| – | ~~Core updates~~ | core update google (10) | — | — | **Merged into #3** |

**Refresh queue** (run when a refresh is due or before a new article if its owner page lost ground): 1) GBP guide (volume up 50%), 2) ce-este-seo, 3) GEO article (AI Mode facts), 4) schema guide.

## 5. How the scheduled task uses this file
1. Re-pull volumes for the top 3 open items (DataForSEO through Firecrawl/Alexandria `dataforseo` `keywords/search-volume`, Romania, Romanian) and check the news for each; recompute their scores.
2. Pick the highest score. Run the duplicate guard against `lib/articles.ts` and the service pages; if an existing page owns the cluster, update that page and mark the item merged.
3. After publishing, update the row (status, date, slug) here and in `ARTICLE_PLAN.md`, and add the new page to section 2.
4. Every 3 months (or when fewer than 3 open items remain): re-run the keyword pull for all of section 2 and 4, add up to 5 new candidates with scores, and note what moved.

## 6. Tags (articles page filters)
Each article has 1–3 tags from this fixed list; the first tag is the main one: `Căutare AI`, `SEO`, `SEO local`, `SEO tehnic`, `Google Business Profile`, `Recenzii`, `Date structurate`, `Redesign`, `Clinici și cabinete`, `Legislație`. Add a new tag only when at least two articles would use it.

## 7. How we measure
Search Console (clicks, impressions, position) per primary keyword monthly; the Generative AI report for AI Overviews/AI Mode; the 5-prompt AI log in `SEO_STRATEGY.md` §7. Rankings worth checking first: google business profile, recenzii google, google ai mode, ce inseamna seo, optimizare seo.
