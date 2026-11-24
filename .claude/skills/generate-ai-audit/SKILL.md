---
name: generate-ai-audit
description: "Generate AI Audit: turn a request from the free audit form on dragoscatana.com (/audit-gratuit-vizibilitate-ai/) into Dragoș Catană's branded PDF report on a business's visibility in Google, Google Maps and AI assistants (ChatGPT, Gemini, Claude), plus a reply e-mail draft for him to send. Use this skill whenever Dragoș pastes a form submission (Nume, E-mail, Website, Tip afacere, Oraș, Concurenți, Limba formularului), asks for an audit, SEO audit, AI visibility check, \"audit gratuit\", a report for a lead or prospect, or a dry run of the audit on any public site, even if he doesn't say the word skill. Also use it to re-run or fix an existing report in audits/clients/."
---

# Generate AI Audit

You are producing the free visibility audit that Dragoș Catană (web design, SEO and AI visibility, Cluj-Napoca)
promises to everyone who fills in the form on his site, delivered within 24 hours. The output is a client-ready PDF
in his brand, in Romanian or English, built from measured data only, plus an e-mail draft. **He sends it; you never do.**

Everything lives in `audits/` in this repo. The scripts do the measuring, scoring and layout; your job is the
part a script can't do: the Google, Maps and AI checks, the judgement in `findings.json`, and the final read-through.
The human playbook in Romanian is `audits/AUDIT_PLAYBOOK.md`; this skill is the same workflow, written for you.

## Ground rules (and why)

- **No invented numbers, rankings, reviews or quotes.** Every figure in the report must trace to `data.json`
  (measured by `collect.mjs`) or to a tool result you got in this session, with source and date. If you didn't
  check something, it says "not checked" and stays out of the score. The report carries Dragoș's name; one
  wrong claim costs more than any missing section. Before writing a sentence in `findings.json`, check it
  against the data. Earlier runs caught two real errors this way (claiming no hreflang when there were 6; a
  competitor median taken from only the biggest names).
- **Never send anything to the client**: no e-mail, no message, no upload. Draft, show, stop.
- **Ask before anything paid** beyond normal Firecrawl credits (~25–35 per audit). Semrush, Ahrefs, the Claude
  API and other paid services need his explicit OK first.
- **Don't read, copy or upload `public/api/config.php`** (it holds secrets).
- **Spelling:** his surname is **Catană**, never Cătană. Romanian text always has full diacritics (ș, ț with comma).
- Client data stays in `audits/clients/<slug>/`, which is gitignored. Never commit it.
- If the form's e-mail is Dragoș's own address or the site is dragoscatana.com, it's a self-test: run it normally,
  but say so.

## Skills this workflow uses

Load these with the Skill tool at the step where they're named; each one does a job the scripts can't.

| Skill | When | What for |
|---|---|---|
| `romana` | Before writing any Romanian text (findings, summary, e-mail) | Catches calques, wrong agreement and diacritics. Romanian reports and e-mails go through it, always. |
| `anthropic-skills:built-in-browser` | Before the AI checks (step 4) | How to drive the in-app browser where ChatGPT, Gemini and Claude are used. |
| `searchfit-seo:ai-visibility` | Step 4, when choosing the three questions | Prompt categories that mirror how real customers ask AI assistants. |
| `searchfit-seo:seo-audit`, `searchfit-seo:technical-seo`, `marketing:seo-audit` | Step 5, when an `extraIssues` item goes beyond what `checks.mjs` scores | Checklists for things worth flagging by hand (thin service pages, wrong-language titles, NAP mismatches). The fixed scoring already encodes their basics, so don't let them add a second score. |
| `searchfit-seo:schema-markup` | Step 5, if the schema section needs a concrete fix | Correct JSON-LD types and properties. |
| `design:accessibility-review` | Step 5, only if Lighthouse accessibility < 90 | Turning Lighthouse failures into plain-language fixes. |

## Step 0: Read the submission

The form (`lib/lead-form.ts`) e-mails Dragoș with the subject "Cerere audit gratuit AI". Fields: `Nume`, `E-mail`,
`Website`, `Tip afacere`, `Oraș`, `Concurenți` (optional), `Limba formularului` (`ro`/`en`), `Consimțământ`.

- Report language = `Limba formularului`. If it's `en` or the person wrote in English, write the report in English.
- Slug: `<businessname>-<city>`, lowercase ASCII, e.g. `dentocalm-cluj`.
- Competitors from the form are a hint, not the benchmark. A global name (e.g. a famous coach) doesn't compete
  for local searches; compare with whoever Google and the AI assistants actually show, and say so in a note.
- Look at the homepage text first (`curl` + strip tags) so you know what the business sells, where, and under
  which name. That decides the search keywords and the AI questions.

Keep a task list: collect → Google → Maps → AI → findings → render → review → e-mail.

## Step 1: Automatic collection (background, 5–8 min)

```bash
cd audits && npm install   # first time only
mkdir -p clients/<slug> && node scripts/collect.mjs --url <site> --slug <slug> --lang <ro|en> > clients/<slug>/collect.log 2>&1
```

Run it in the background and do steps 2–4 while it runs. It measures redirects, HTTPS, robots.txt per AI bot,
llms.txt, sitemap, up to 10 pages (titles, descriptions, H1, alt text, canonical, hreflang, JSON-LD, tel links,
FAQ, address, prices), broken links, iPhone/desktop screenshots, mobile checks and mobile Lighthouse.
Options: `--pages 15`, `--no-lighthouse`, `--psi`, `--only-browser` (redo screenshots only).

## Step 2: Google rankings (Firecrawl → DataForSEO, ~1 credit per search)

Pick 4–5 searches a real customer in that city would type: 2–3 `service + city`, `business type + city`,
an urgent/high-margin service if relevant, plus **the business name** (brand search). Use the client's language;
add one English search if the business also targets English speakers.

Call `alexandria_library_read` with up to 5 calls of `provider: "dataforseo", capability: "serp/google-organic"`,
options `{keyword, location_name: "<City>,<County> County,Romania", language_code: "ro"}`. The result is usually
too big to return inline; read it with jq (see `references/data-sources.md` for the exact command and fields).

For each keyword record: map pack position (1–3 or null), organic position (or null if not in the top 10),
whether Google's AI Overview mentions the business (null if the overview was empty or loaded async), and who's
#1 on the map and in organic. For the brand search record where the homepage ranks (`brandHomepageRank`) and what
else shows up. Name collisions (a place, another person) are a finding in themselves.

## Step 3: Google Business Profile (Firecrawl Maps, 10 credits per search)

1. `firecrawl-maps / businesses/search` with `"<business name> <city>"`, `country: "ro"`, `language: "ro"`.
   Check `name_match`: "none" means it isn't their profile.
2. `businesses/search` with `"<business type> <city>"` for competitors: put every result that has reviews into
   `gbp.competitors` (the median is computed from all of them, not just the big names).
3. If the client has reviews, `businesses/rating_trend` with its `feature_id` only (passing `language` errors)
   for reply rate and reviews per month.

Three cases, all handled by the scripts: no profile → `gbp.exists: false` + `missingNote`; a profile with no
reviews → `rating: null, reviews: 0`; a normal profile → all fields. Compare the profile's categories with the
competitors': a primary category that differs from what everyone ranking for the service uses is a quick win.

## Step 4: AI assistants (in-app browser, free)

Load `anthropic-skills:built-in-browser` and `searchfit-seo:ai-visibility`. Ask three questions, in the client's
language, the way a customer would:
1. "What [business type] do you recommend in [city]?"
2. A question about the main service or a specific need.
3. A **business** question by name: "What services does [name], [type] in [city], offer, and is it worth working
   with them?" Don't ask "Who is [name]?": Claude treats that as a private person and won't search.

Ask each question in ChatGPT, Gemini and Claude, **each in a new private chat** so nothing lands in Dragoș's
history and his own history doesn't skew answers. Use mid-tier models, not flagships, to keep usage low.
Exact steps, URLs and model names are in `references/ai-checks.md`; read it before starting. Perplexity needs its
own sign-in; if it isn't signed in, list it under `ai.notChecked`. If a sign-in page shows up, ask Dragoș to sign
in himself. You never type passwords.

For each answer record: mentioned? position? who is recommended instead (up to 4)? Keep at most one short quote
(under 15 words) as `excerpt`, ideally the one that shows the problem best. Add the Google AI Overview rows from
step 2 as engine "Google AI Overviews".

## Step 5: findings.json

Copy `audits/template/findings.example.json` to `audits/clients/<slug>/findings.json` and fill it in.
`references/findings-guide.md` has the field-by-field rules and examples; read it. The essentials:

- `summary.headline`: one sentence, what works and what doesn't. `summary.intro`: 3–5 sentences, using only numbers
  that also appear in the sections.
- `top3`: the three most useful things to do, ids from `scripts/checks.mjs` or from your `extraIssues`. Prefer
  actions over symptoms: a quick fix that unlocks the map beats restating a low ranking.
- `extraIssues`: what the scripts can't see (wrong category, name collision, a page with another brand's title,
  city never mentioned, a dead profile listed in sameAs). Each has `section`, `severity` (critic/important/minor),
  `effort` (quick/big), `title`, `detail`, `fix`, verified in `data.json` or a tool result. No speculation about
  *why* an AI engine behaves as it does; state what it said and what to do.
- Before writing Romanian, load `romana`. Address the client formally ("dumneavoastră") in Romanian reports.
- Set `"dryRun": true` only for internal tests on sites that didn't ask (the cover then says "Test intern").

## Step 6: Render and read it back

```bash
node scripts/render.mjs --slug <slug>    # → report.html + report.pdf, prints the scores
node scripts/preview.mjs --slug <slug>   # → png/p0.png … for reading back, + PDF page count
```

Read **every** slice with the Read tool. Check: every number has a source; name, city and site are right;
diacritics; no wording from another industry (the scripts adapt to the business type, but check); the top 3 make
sense for this business; nothing sounds alarmist or salesy. Fix `findings.json` (or the scripts, if a text is
wrong for every client) and render again. Expect 12–15 pages.

If you change a script, keep it general: it serves every future client, so no client-specific text in code.
Commit script changes (never `clients/`) on the current branch with a clear message.

## Step 7: Deliver to Dragoș

1. Send the PDF with SendUserFile.
2. Copy it as `Audit-vizibilitate-<Name>.pdf` (EN: `AI-visibility-audit-<Name>.pdf`) in the client folder.
3. Draft the reply e-mail in `clients/<slug>/email.txt`, in the report's language (Romanian goes through `romana`):
   subject `Re: Cerere audit gratuit AI – raportul pentru <domain>`; thanks; the three priorities in one or two
   plain sentences; the booking link from `lib/site-config.ts` (Calendly, 30 minutes, no obligation); signature
   "Dragoș Catană · dragoscatana.com · <phone>". No price lists, no extra attachments.
4. Tell Dragoș: the score, the 3–5 findings that matter most, what wasn't checked and why, credits used, and any
   script changes (commit hash). Ask whether to draft the e-mail or change something. Don't send.

## Known pitfalls

- DataForSEO organic `domain` comes back as `google.com`; the real site is in `website_name` / `breadcrumb`.
- An AI Overview with `asynchronous_ai_overview: true` and no markdown was never read: use `null`, not "No".
- Gemini's temporary mode switches off with every new chat; Claude's model picker can fall back to Haiku.
  Check both before each question.
- External links answering 401/403 (Trustpilot, Cloudflare) are bot walls, not dead pages; the collector already
  reports them as unreachable.
- Lighthouse varies 10–20% between runs; the report says so. AI answers change daily; the report calls them a snapshot.
- Google may show a page title the site doesn't use (rewritten or stale). Mention it to Dragoș, don't put it in the report.
