# 48 SEO tricks: status and plan

Source: slides 02–07 of "48 SEO Tricks" (six slides of 8). Checked 25 Nov 2026 against the live site, this repo and public profiles.
**Done** = checked. **Auto** = a script or the weekly task does it. **Auto weekly** items need the weekly task, which is **not created yet** (instructions: `seo/WEEKLY_CHECK.md`). **You** = needs your account. **Skip** = wrong for this business. **?** = could not be checked.

Commands: `npm run seo:health` · `npm run seo:gsc -- seo/exports/Queries.csv` · `npm run seo:competitors` · `npm run seo:syndicate -- <slug>`

## 02 Free backlinks
| # | Trick | Status | Plan |
|---|---|---|---|
| 1 | Chrome Web Store | Skip | Costs $5 and needs a real extension. |
| 2 | GitHub profile and READMEs | Profile link done; repo README added now | You: create public repo `dragos1304/dragos1304` from `seo/github-profile-README.md`; set this repo's website field. |
| 3 | Crunchbase | ? (blocks checks) | You: text in `PROFILES.md`. |
| 4 | G2 / Capterra | Skip | For software. Clutch and GoodFirms are the service equivalents (`PROFILES.md`). |
| 5 | Product Hunt | Skip now | Needs a product. A free AI-visibility checker would qualify later. |
| 6 | Medium / dev.to / Hashnode + canonical | Missing (dev.to not found, Medium blocked, Hashnode unclear) | Auto: `seo:syndicate` writes the copy. You post on Medium only, using its import tool so the canonical is set. Skip dev.to/Hashnode: developers, English. |
| 7 | Substack | Missing | Optional; only if you will post monthly. |
| 8 | about.me / Carrd / Linktree | Linktree done | Skip the other two: nothing new for a reader. |

## 03 Search Console
| # | Trick | Status | Plan |
|---|---|---|---|
| 1 | 8+ word queries | Auto | `seo:gsc`. Direct regex: `^(?:\S+\s+){7,}\S+$` |
| 2 | 16 months | Auto | Export with that range. The site is new, so there is little history. |
| 3 | High impressions, low clicks | Auto | `seo:gsc` |
| 4 | Answer in first lines | Partial | Applied to the pages 3 and 6 turn up. |
| 5 | How / what / why | Auto | `seo:gsc`, Romanian and English |
| 6 | Positions 8–15 | Auto | `seo:gsc` |
| 7 | Brand searches | Auto | `seo:gsc` |
| 8 | Request indexing | You | No general free API: Google's Indexing API is only for job and livestream pages. Two minutes per new page. The sitemap covers the rest. |

## 04 Borrowed authority
| # | Trick | Status | Plan |
|---|---|---|---|
| 1 | LinkedIn article | Missing | Auto weekly (monthly draft); you post. No promise of "38 minutes". |
| 2 | Interview transcript | Missing | You: record 30 min (phone, free). Best source of things only you know. |
| 3 | One keyword on 7 platforms | Skip | Near-duplicates with no added value. Use 2: LinkedIn and Medium. |
| 4 | Gist / NotebookLM / Apps Script pages | Skip | Doorway-style pages, gone quickly. |
| 5 | Expect them to fade | Noted | The site stays the main copy. |
| 6 | Rewrite top Reddit thread | Auto weekly | Answer the same question with own experience and sources; never reword the thread. |
| 7 | Own subreddit | Later | Test demand first (idea: "does AI recommend your business?"). |
| 8 | Link back | Auto | In every syndicated draft. |

## 05 Reddit
| # | Trick | Status | Plan |
|---|---|---|---|
| 1 | Find ranking threads | Auto | Weekly task lists up to 5. |
| 2 | 10k–50k+ communities | Auto weekly | Size matters less than whether owners are there. |
| 3 | Read the rules | Auto weekly, you confirm | |
| 4 | Warm up 1–3 weeks | You | Can't and shouldn't be automated. |
| 5 | 4–5 helpful comments per mention | Auto weekly | You write and post. |
| 6 | Say you're biased | Auto | "Fac site-uri, deci sunt subiectiv." |
| 7 | Link in profile | You | Add dragoscatana.com to your Reddit profile. |
| 8 | Top → All time formats | Auto weekly | |

## 06 Get cited by ChatGPT
| # | Trick | Status | Plan |
|---|---|---|---|
| 1 | llms.txt | Done, monitored | Harmless, but no proof it earns citations. |
| 2 | Anthropic's structure | Done | Same basics: title, summary, sections of links. |
| 3 | What GPTBot sees | Done, monitored | Six crawler user agents get 200; text is in the HTML of all 41 pages. Tests the user agent, not OpenAI's own IPs. |
| 4 | robots.txt | Done, monitored | |
| 5 | About page | Fixed now, needs deploy | What you do and for whom is now the first sentence. |
| 6 | Track one AI Overview for a week | Auto weekly | Weekly snapshots rather than daily. Question: "cum apar în ChatGPT cu afacerea mea". |
| 7 | Page better than cited sources | Auto input | Patterns go into the report; the article task owns publishing. |
| 8 | Who ChatGPT names | Auto weekly if it opens signed out | Otherwise you paste the answer. |

## 07 Competitors
| # | Trick | Status | Plan |
|---|---|---|---|
| 1–4 | GTM ID → container → `__awct` → funnel | Auto | `seo:competitors`, monthly. First run: 8 sites, 2 with GTM in the HTML, 1 Google Ads conversion tag (onedigital.ro, plus a `click_tel` event). Containers show labels, not conversion names. |
| 5 | Commercial keywords | Done | `KEYWORD_PLAN.md` |
| 6 | Match the #1 format | Done per article | rankenstein's SERP check |
| 7 | Internal links on publish day | Done, monitored | Every article has 2+ links from page content. |
| 8 | Weekly rankings | Auto | Search Console average positions (free). |

## Your part, about 90 minutes in total
1. GitHub profile README and repo website field (10 min).
2. Reddit profile link; start commenting (10 min).
3. Clutch, GoodFirms, Crunchbase from `PROFILES.md` (45 min).
4. First Medium import and LinkedIn article from a draft (20 min).
5. Record the 30-minute interview when you can.

## Free tools
Google Search Console, Bing Webmaster Tools (includes IndexNow and AI performance data), Looker Studio for charts. No paid tool is needed.
