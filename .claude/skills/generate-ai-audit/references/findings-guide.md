# findings.json: field guide

Template: `audits/template/findings.example.json`. What you leave out is not scored and shows as "not checked".
The renderer reads `client.lang` to choose Romanian or English for every fixed text; your own texts must be in
the same language.

## client
`name` exactly as the business presents itself (with diacritics), `contact` from the form, `city`, `type` (it
drives the wording and the schema type: dental → Dentist, legal → LegalService, clinic → MedicalClinic,
coach/consultant/web design/SEO/marketing → ProfessionalService, otherwise LocalBusiness), `url`, `lang`,
`competitors` from the form.

## google
`source`, `checkedAt`, `brandKeyword`, `brandHomepageRank` (1, a number, or null if not in the top 10),
`brandNote` (only when the brand search goes wrong: what shows instead), `keywords[]`
(`kw`, `localPack`, `organic`, `aiOverviewMentions` true/false/null, `leaders` with up to 2 short strings),
`notes[]` (form competitors that aren't real local competitors, what "–" means, the brand map pack…).

## ai
`checkedAt`, `method`, `prompts[]` (see ai-checks.md), `notChecked[]`, `notCheckedReason`.

## gbp
- No profile: `{ "exists": false, "source": "…", "missingNote": "what the map shows instead, with numbers" }`.
- Profile without reviews: `rating: null, reviews: 0`, plus name, address, phone, `websiteLinked`, `categories`,
  `primaryCategory`, competitors.
- Normal: also `ownerResponseRate`, `responseSample`, `reviewsPerMonth`, `lastReviewMonth` from rating_trend.
- `competitors[]`: every business with reviews from the type + city search, minus the client. `competitorsSource`
  says which search.

## summary, top3, extraIssues
- `headline`: one sentence. EN example: "A fast, well-built site that ChatGPT already knows, but no visibility yet
  for the searches that bring clients."
- `intro`: 3–5 sentences, first what works (with numbers), then the gap (with numbers).
- `top3`: ids. Check ids in `audits/scripts/checks.mjs` (e.g. `speed`, `h1`, `localbusiness-schema`, `brand`,
  `rankings`, `ai-mentions`, `gbp-missing`, `gbp-volume`) or your own `extraIssues` ids.
- `extraIssues[]`: `{id, section: google|ai|gbp|technical|onpage|schema|mobile, severity: critic|important|minor,
  effort: quick|big, title, detail, fix}`. They don't change the score; they explain. Good examples from real runs:
  - GBP primary category differs from the one all ranking competitors use (quick, important).
  - The site never mentions the city, so it can't appear for "service + city" (quick, important).
  - A page whose title carries a different brand name (quick, important).
  - The name collides with a place or another person in Google and AI answers (big, critic).
  - A dead profile listed in the structured data's sameAs (quick, minor).

## Tone
A colleague who helps, not a salesperson. Plain words, no jargon without a short explanation, no "guaranteed #1",
no fear. Romanian: formal "dumneavoastră", full diacritics, checked with the `romana` skill.
