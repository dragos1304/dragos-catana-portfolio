# Article publishing plan: dragoscatana.com/articole

Run by the scheduled task `dragoscatana-articles` on the 1st and 15th of each month at 09:00. Each run takes the **first open item** in the queue, or updates an existing article instead when the topic is already covered. Made 21 Nov 2026; keyword data is Semrush, database `ro` (volume/KD).

## Rules every run follows
1. **No duplicates.** Before writing, compare the topic with every article in `lib/articles.ts` (slug, title, primary keyword, search intent) and with the service pages in `components/pages/`. If an existing page already answers the same intent, **update that page** with the new facts instead of creating a new one, and mark the queue item `→ merged into <slug>`.
2. **Current and sourced.** Research the news of the last 3 months on the topic. Every factual claim needs **at least two trustworthy sources, one of them primary** (Google Search Central / Google help centers / Search Status Dashboard, schema.org, W3C, EU and Romanian official sources such as eur-lex.europa.eu and legislatie.just.ro, professional bodies like UNBR or CMR, the AI companies' own docs, peer-reviewed research). Industry blogs (Search Engine Roundtable, Search Engine Land, Semrush) may confirm, never stand alone. Drop any claim that can't be confirmed. Never invent numbers, quotes, reviews or prices.
3. **Format.** Romanian, written with the `romana` skill: „este”, not „e”; „e-mail”; „tu”; first person as Dragoș. Inline `[cuvinte](url)` links beside each claim plus a `sources` list (the article template renders „Surse”). `seoTitle` must differ from the H1. Set `date` (new) or `updated` (refresh) to the run date. 7 FAQs. Link the pillar `/articole/ce-este-seo`, 1–2 sibling guides, one service page and `/audit-gratuit-vizibilitate-ai`.
4. **Never:** prices, guarantees of rankings, link buying, review tactics that break Google's policy.

## Queue
| # | Working title | Primary keyword (vol/KD) | Why now / angle | Duplicate check | Status |
|---|---|---|---|---|---|
| 1 | AI Mode în Google, în română: ce înseamnă pentru afacerile locale | google ai mode, ai overviews | AI Mode is live in Romania in Romanian; Google's May 2026 guide for generative AI search; Search Console AI report (Aug 2026) | GEO article covers AI assistants broadly: this one is Google-specific and practical; link both ways | open |
| 2 | Cum obții recenzii Google corect, după regulile din 2026 | recenzii google (320/35) | Google's 2026 review policy clauses (no staff quotas, no requested content) | GBP guide has a short reviews section: this goes deeper (asking flow, replies, fake reviews, clinics and lawyers); shorten nothing, cross-link | open |
| 3 | Accesibilitatea site-ului: ce cere Legea 232/2022 | accesibilitate site, european accessibility act | EAA applies since 28 Jun 2025; who is covered, microenterprise exemption, what to check | „10 semne” mentions accessibility in one line only | open |
| 4 | Ce trebuie să conțină site-ul unei clinici medicale | site clinică, ce trebuie să conțină un site (30) | Verify the Romanian medical advertising rules (CMR, CMSR) before writing | Clinic service page sells the service: article is the checklist; link to it | open |
| 5 | Google Search Console pentru începători | google search console | Includes the Generative AI performance report and core-update reading | Redesign and ce-este-seo mention it in passing | open |
| 6 | Site pentru avocați: ce permit regulile profesiei | site avocat | Verify the UNBR statute rules on publicity before publishing | Law-firm service page: same split as #4 | open |
| 7 | SEO local: cum apari pe hartă „în zona mea” | seo local (90/28) | Local ranking factors as Google documents them, citations, reviews | Overlaps ce-este-seo §SEO local and GBP guide: if the run finds no new angle, merge into those | open |
| 8 | Ce influențează costul unui site (fără listă de prețuri) | cât costă un site (320/20) | Factors only, no figures | none | open |
| 9 | Actualizările Google (core updates): ce faci când scad pozițiile | google core update | November 2026 core update (started 10 Nov); Google's guidance on core updates | none | open |

## Refresh rotation
After publishing, each run re-checks the existing article with the oldest `updated` date for facts that changed (policies, product names, dates). If anything changed, update it with sources and bump `updated`. If nothing changed, leave it alone (do not bump the date).

## Run log
<!-- The task appends one line per run: date, item, action (published / updated / merged / skipped + reason), commit hash. -->
