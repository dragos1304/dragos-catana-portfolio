# Article publishing plan: dragoscatana.com/articole

Run by the scheduled task `dragoscatana-articles` every other Monday at 06:00. Each run picks the **highest-scoring open item in `KEYWORD_PLAN.md`** (the decision engine: keywords, volumes, scores, duplicate guards), or updates an existing page instead when that page already owns the keyword cluster. Each run writes the article with the **rankenstein** skill (`.claude/skills/rankenstein`, brand config `content-state/BRAND.md`, drafts in `content-state/drafts/`). Made 21 Nov 2026.

## One owner per job
Decided 21 Nov 2026 after checking where rankenstein overlapped the existing pipeline. The scheduled task follows this table.

| Job | Kept | Dropped | Why |
|---|---|---|---|
| Topic and keyword choice | `KEYWORD_PLAN.md` engine | rankenstein keyword discovery/choice | Our engine knows which page owns which keyword and weights business value; rankenstein would pick from generic SERP data and could pull toward high-volume terms with no buyers. |
| Keyword data | DataForSEO (current Romanian volumes) | rankenstein's provider probe / web estimates | Same data every run, measured rather than estimated. |
| Winnability | rankenstein SERP-ownership check | — | Nothing else did this; it sets a realistic word target and flags unwinnable SERPs. |
| Duplicates | `lib/articles.ts` + `KEYWORD_PLAN.md` §2 | rankenstein history CSV | One source of truth; a second tracker would drift out of sync. |
| Angle, outline critic, prose | rankenstein | `searchfit-seo:create-content` | Rankenstein adds a 4-lens angle panel and an outline critic that must pass before writing; create-content is a single pass. |
| Source checks | rankenstein citation gate + our two-source/primary rule | a separate manual pass | Its gate checks every link in parallel; our rule sets the bar for what counts as trustworthy. |
| Romanian | `romana` skill | — | Rankenstein doesn't know Romanian norms. |
| Schema and images | site template | rankenstein JSON-LD and image blocks | The template already generates Article, FAQPage and breadcrumb schema; the site shows no article images. |
| Refreshes and log | `KEYWORD_PLAN.md` + this file | rankenstein refresh queue/CSV | One queue, one log. |

## Rules every run follows
1. **No duplicates.** Before writing, compare the topic with every article in `lib/articles.ts` (slug, title, primary keyword, search intent) and with the service pages in `components/pages/`. If an existing page already answers the same intent, **update that page** with the new facts instead of creating a new one, and mark the queue item `→ merged into <slug>`.
2. **Current and sourced.** Research the news of the last 3 months on the topic. Every factual claim needs **at least two trustworthy sources, one of them primary** (Google Search Central / Google help centers / Search Status Dashboard, schema.org, W3C, EU and Romanian official sources such as eur-lex.europa.eu and legislatie.just.ro, professional bodies like UNBR or CMR, the AI companies' own docs, peer-reviewed research). Industry blogs (Search Engine Roundtable, Search Engine Land, Semrush) may confirm, never stand alone. Drop any claim that can't be confirmed. Never invent numbers, quotes, reviews or prices.
3. **Format.** Write with the rankenstein skill (its outline critic and citation gate are mandatory), then edit with the `romana` skill. Romanian, written with the `romana` skill: „este”, not „e”; „e-mail”; „tu”; first person as Dragoș. Inline `[cuvinte](url)` links beside each claim plus a `sources` list (the article template renders „Surse”). `seoTitle` must differ from the H1. Set 1–3 `tags` from `KEYWORD_PLAN.md` §6. Set `date` (new) or `updated` (refresh) to the run date. 7 FAQs. Link the pillar `/articole/ce-este-seo`, 1–2 sibling guides, one service page and `/audit-gratuit-vizibilitate-ai`.
4. **Never:** prices, guarantees of rankings, link buying, review tactics that break Google's policy.

## Queue
The ranked queue, scores and duplicate guards live in `KEYWORD_PLAN.md` §4. Statuses are kept there; this file keeps the rules and the run log.

## Refresh rotation
After publishing, each run re-checks the existing article with the oldest `updated` date for facts that changed (policies, product names, dates). If anything changed, update it with sources and bump `updated`. If nothing changed, leave it alone (do not bump the date).

## Run log
<!-- The task appends one line per run: date, item, action (published / updated / merged / skipped + reason), commit hash. -->
