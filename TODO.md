# TODO

Source plan: `PORTFOLIO_STRUCTURE.md`. Status as of 18 Nov 2026.

## Done
- [x] Confirmed "GR" = German (DE).
- [x] Cheesy Media gave permission to publish the case study.
- [x] Cheesy Media Lighthouse (mobile, PageSpeed Insights): performance 82 → 100, accessibility 96 → 100, best practices 100 → 100, SEO 100 → 100. Screenshots and the case-study page are in the site.
- [x] `Gemini.md` and `dragos_catana_profile.txt` converted from RTF to plain text.
- [x] Netlify project `dragoscatana` was created earlier. **Now unused** (hosting moved to Network Solutions). Delete it in Netlify when you are ready; I did not touch it.
- [x] Next.js 15 site built (Romanian): home, services hub + 3 service pages, work + Cheesy Media case study, free-audit page, 5 articles, about, contact, legal pages, 404.
- [x] Cookie consent built in-house (no third-party tool): Consent Mode v2, everything denied by default, choice stored in the browser, reopen link in the footer.
- [x] Google Tag Manager installed the standard way (`GTM-K7RPGZSV`) behind consent. GA4 itself must still be configured inside GTM (see below).
- [x] `robots.txt` (allows all reputable search and AI crawlers), `sitemap.xml`, `llms.txt`, JSON-LD (Person, ProfessionalService, WebSite, Service, FAQPage, Article, BreadcrumbList).
- [x] Forms (`audit`, `contact`) now use a PHP handler (`public/api/contact.php`) with honeypot, time trap, rate limit and consent. Tested locally: validation and spam traps pass; real email sending still needs the host.
- [x] Keywords validated with Semrush (see §7 of the plan).
- [x] Draft Romanian copy for services, About, audit page and first 5 articles.
- [x] Sample audit table (labelled as an example) on the SEO page.
- [x] Legal pages drafted (privacy, cookies, terms).

## Awwwards MCP (installed, see plan §12)
- [x] Installed `awwwards-mcp@1.20.0` (project `.mcp.json`) and the 9 skills in `.claude/skills/`.
- [x] Ran the local-evidence tools on the site, fixed contrast, tap targets and image sizes, added two vertical pages and a proof strip.
- [x] Inspiration loop run (18 Nov 2026): `search_sites` and `create_design_brief` work now. Findings are in `DESIGN.md`. Optional next step: apply the statement hero / process section ideas.
- [x] Structure pass with every applicable tool (18 Nov 2026), see plan §12 "Round 2". Local index built.
- [ ] **On your own computer (required now):** `.mcp.json` uses the installed `awwwards-mcp` command. Run `npm install -g awwwards-mcp@1.20.0 playwright ffmpeg-static` and `npm exec --global -- playwright install chromium`, then restart Claude Code. Without the install, the `awwwards` server will not start on your machine. Cloud sessions install it through the environment's setup script.
- [ ] After the site is live: run the `awwwards-design-md` skill on the public URL, and `verify_build` / `audit_url` for evidence.

## Architecture and technical SEO (20 Nov 2026)
- [x] **Architecture review, all 6 candidates done:** site map module (`lib/site-map.ts`), site facts (`lib/site-config.ts`), one page module per bilingual page (`components/pages/`), lead form contract (`lib/lead-form.ts` → `api/form-contract.json`, read by `contact.php`), image manifest (`scripts/image-manifest.mjs`), leftovers deleted (colour aliases, `Reveal`). 28 tests (`npm test`).
- [x] **Technical SEO:** shorter titles and descriptions, `/index.html` → `/` redirect, WebSite schema in RO + EN, short title tags for two long articles, referrer meta tag, Cloudflare HTML cache rule (TTFB 0.1–0.2 s). See `DEPLOY.md` §3b: purge the cache after every deploy.
- [ ] **Form end-to-end:** `contact.php` now reads the contract; verified live with requests that send no email. Send one real test from each form (RO and EN) and check both emails arrive.
- [ ] **Core Web Vitals:** Google's PageSpeed API quota was used up on 19–20 Nov; re-run PageSpeed Insights on `/` and `/en/` now that HTML is cached.
- [x] Section labels no longer have the orange dot.

## AI visibility: FAQs and social profiles (20 Nov 2026)
- [x] **FAQ on every page** (RO + EN, except the 404): `lib/faqs.ts`. Real client questions plus AI-style prompts ("Cine face site-uri pentru clinici în România?"). Each page emits exactly one FAQPage (tested).
- [x] **Social links in one place:** `social` and `phone` in `lib/site-config.ts`. Footer, contact pages, llms.txt and schema `sameAs`/`telephone` all read from it. To add or change a profile, edit that one entry; `sameAs: true` puts it in the schema.
- [x] Privacy page: processors corrected (Network Solutions, Cloudflare, iCloud Mail, Calendly, Google with consent). **Still needs the legal review.**
- [ ] **Profiles to create, then add to `social`** (copy-paste kit: `PROFILES.md`; priority order): Google Business Profile Maps URL (after verification), Facebook page, Clutch, DesignRush/GoodFirms, Bing Places, YouTube (short audit walk-throughs), Behance or Dribbble, Crunchbase. Use the same name, photo and one-line description everywhere.
- [ ] **Community presence:** answer real questions on Reddit (r/Romania, r/cluj, r/webdev) and Quora under your name, no link spam.

## Redesign, journey and SEO (18 Nov 2026)
- [x] **English version (19 Nov 2026):** 13 pages under `/en/` with their own root layout (`<html lang="en">`), reciprocal hreflang (ro, en, x-default = ro), a RO/EN switch in the header, English sitemap entries and an English section in llms.txt. Articles and legal pages stay Romanian-only (linked as "(Romanian)"). The form sends `lang`, and `api/contact.php` sends an English confirmation for English forms. Page map: `lib/i18n.ts`.
- [ ] **English copy review:** have a native English speaker read `/en/` once.
- [x] **Homepage language (19 Nov 2026):** "Ce promit și ce nu promit" section from `BRAND.md` / `PROPOSAL.md`; hero label without the dot and "freelancer"; Cheesy Media screenshots replaced with the client-supplied ones.
- [x] **Journey and work redesign (19 Nov 2026):** the homepage journey is now a timeline. The Cheesy Media case study has before/after screenshots, design decisions and 8 Google/AI steps, all checked on the live sites. Deployed and verified.
- [ ] **Cheesy Media:** ask the client for Search Console data or permission to test AI prompts about them, so the case study can show results, not only steps.
- [ ] **Cloudflare SSL:** keep "Full" (decided 19 Nov 2026; "Always Use HTTPS" is on). Move to Full (strict) only if the host offers a free certificate for dragoscatana.com.
- [x] **SEO strategy (19 Nov 2026):** all 17 searchfit-seo skills applied; see `SEO_STRATEGY.md`. Code changes (redirect fix, OG image, titles, 2 new guides, guide hubs, schema) were deployed 19 Nov 2026 and verified live (redirect fix: 1 hop; og.png; 23 URLs in the sitemap).
- [x] **SEO decisions (19 Nov 2026):** maintenance is a service (`/servicii/mentenanta-site/`, live, in sitemap and llms.txt). Online stores: not now. City pages only with real local proof.
- [~] **Off-site AI signals (19 Nov 2026):** LinkedIn updated (headline, About first paragraph, website dragoscatana.com, which previously pointed to dragoscatana.ro) and added to `sameAs`. Google Business Profile updated (see below); add its public Maps URL to `sameAs` once verified. Still open: 2-3 Romanian business directories.
- [ ] **Monthly:** the 5-prompt AI mention test in `SEO_STRATEGY.md` §7; Search Console review.
- [x] **Redesign v3 live (19 Nov 2026):** direction A "Clar și curajos" chosen from Awwwards mood boards; deployed via File Manager zip upload. See `DESIGN.md`.
- [ ] Replace the "DC" monogram in the hero with a real professional photo (portrait, ideally black and white on the orange circle).
- [x] Redesign from Awwwards evidence: warm paper and ink palette, Cormorant Garamond display, square buttons, journey-led homepage. Evidence and skills used are in `DESIGN.md`.
- [x] User journey and personal story: `USER_JOURNEY.md`; homepage chapters (trigger, 5 steps with "Tu / Eu, Dragoș", letter).
- [x] SEO pass on Romanian keywords (Semrush ro): `SEO_KEYWORDS.md`; home, creare-website, SEO and audit pages optimised.
- [x] **Deployed 19 Nov 2026** via File Manager (zip upload and extract; `config.php` untouched). All key pages return 200.
- [x] Live checks done: `awwwards-design-md` output in `docs/design-evidence/` (validator PASS), `audit_url` mobile (0 high/medium), `analyze_images` on the case study (WebP, srcset, lazy, alt, dimensions all OK).
- [x] **Form emails verified (19 Nov 2026):** the lead reaches me@ and the visitor confirmation reached test@ in test mode. Test mode is now off (`confirm_to` removed from the server `api/config.php`), so real visitors get their confirmation.
- [x] **Cloudflare for AI visibility (19 Nov 2026):** Browser Integrity Check OFF (it challenged headless clients), Email Address Obfuscation OFF, Crawler Hints (IndexNow) ON. Bot Fight Mode and AI Labyrinth OFF; every AI crawler in AI Crawl Control is Allow. DDoS protection and the managed ruleset stay on. The 404s in AI Crawl Control are vulnerability scanners probing `.env`/config paths, which is correct. Markdown for Agents needs the Pro plan (skipped).
- [ ] Add a professional photo to the hero card (it currently shows the initials "DC").
- [ ] Validate `USER_JOURNEY.md` with 5 short calls with clinic, law-firm or local-business owners (interview guide inside).
- [ ] Awwwards MCP in Claude Code: start Claude Code from the `dragos-catana-portfolio` folder so `.mcp.json` loads the `awwwards` server natively (this session used a stdio client because it started one folder up).

## Needs you
- [ ] **Optional automatic deploys:** add GitHub secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_DIR` for `.github/workflows/deploy.yml` (untested, needs your credentials).
- [x] **Deploy to Network Solutions:** done 18 Nov 2026. Plan is Starter (Unix) with PHP and SFTP; `out/` is live at https://dragoscatana.com (verified with a browser user agent: pages, robots.txt, sitemap.xml, llms.txt, 404, http and www redirects).
- [x] **`api/config.php`:** created on the server 18 Nov 2026 (to and from = me@dragoscatana.com; not committed; public access returns 403). Invalid POST now returns `invalid`, so the config loads.
- [x] **Deploy visitor confirmation email** (deployed with the redesign; now in test mode, see above). Old note: sign in to Network Solutions, upload `public/api/contact.php` to `htdocs/api/` (File Manager does not overwrite: upload, delete the old file, rename), add `'confirm_to' => 'test@dragoscatana.com'` to the server `api/config.php` (test mode), send one test from each form, then remove that line to go live. Live form mail today: one email per submission, form@ to me@, no confirmation to the visitor.
- [~] **Form deliverability (18 Nov 2026):** form mail now goes out through authenticated iCloud SMTP, from form@dragoscatana.com to me@dragoscatana.com (config in the server-only `api/config.php`). A real test arrived but landed in **spam**. Fixes done: DKIM CNAME `sig1._domainkey` set to DNS-only, DMARC `v=DMARC1; p=none; rua=mailto:me@dragoscatana.com` added. Still to do: mark the test as "not spam", resend a test from each form, check the DMARC reports after a few days, then consider `p=quarantine`. Also: A records are still proxied (TODO says DNS-only), and the old `apple-domain` TXT record can be removed.
- [ ] **Form email:** create the sender mailbox/alias on the domain, add SPF (and DKIM if offered) in Cloudflare DNS, then send a test from each form and check spam.
- [ ] **GA4 inside GTM:** in container `GTM-K7RPGZSV`, add a GA4 configuration tag (your `G-XXXXXXX` measurement ID) with consent type *analytics_storage*, and a GA4 event tag for the `generate_lead` event the forms already push. Publish the container.
- [ ] **Legal review:** the privacy, cookie and terms pages are drafts. Add your legal identity (PFA/CUI if you have one), a contact email for data requests, and have them reviewed before collecting real leads.
- [ ] **Professional photo** for Home and About (the layout works without one).
- [ ] **Public contact details:** a contact email, optional phone/WhatsApp. They are intentionally not on the site yet (LinkedIn is in the schema `sameAs` only).
- [ ] **Cloudflare SSL Full (strict) is blocked:** the origin serves a `*.hostingplatform.com` certificate that does not match the domain and expires July 2026, so strict mode would return 526 errors. Left unchanged. First install a valid origin certificate (Cloudflare Origin CA, or the host's SSL for dragoscatana.com), then switch to Full (strict).
- [ ] **Cloudflare:** the records are currently proxied. Keep them **DNS-only** (grey cloud) to start. If you proxy, make sure no AI-bot blocking or bot-fight rule is on, otherwise `robots.txt` says "welcome" while the firewall says "no".
- [ ] Professional email on the domain.
- [~] **Google Business Profile (19 Nov 2026):** profile 15813883419230568247 "Dragos Catana", verification pending (Google says up to 5 days). Updated: description, primary category Website designer, additional Internet marketing service and Marketing consultant, services (Creare site web, Redesign website, Mentenanță site, Optimizare SEO, SEO local și Google Business Profile, Audit SEO gratuit; the existing Website Development and GEO entries were kept). A duplicate profile (05296844541703078520) is suspended; leave it. After verification: check it is public, add photos, add the Maps URL to `sameAs`.
- [ ] Register the site in **Google Search Console** and **Bing Webmaster Tools**, submit `sitemap.xml`.
- [ ] **Baseline AI-prompt test** before launch (ChatGPT, Gemini, Claude, Perplexity), then monthly. See the DIY article on the site for the method. I can't query those assistants from here.
- [ ] Directories and profiles with an identical name and bio (LinkedIn, GitHub, Romanian business directories).
- [x] Open Graph share image (`public/og.png`, 19 Nov 2026).
- [ ] Re-check AI crawler names in `robots.txt` every quarter. Re-run the keyword check in 3 months.

## Later
- [ ] English version (`/en`, hreflang) after the Romanian site is live. FR/DE as per-project add-ons.
- [ ] Ask each future client for a real review/quote and permission to publish a case study.
- [ ] Cheesy Media: add real traffic or lead numbers if they share them.
- [ ] Add the portfolio's own AI-visibility progress as a live case study.
- [ ] Publish more articles (2 per month): local SEO, clinic and law-firm website guides, Core Web Vitals.
- [ ] Known dev note: `npm audit` reports a PostCSS advisory bundled inside Next 15 (build-time only). Upgrade Next when you want to move to a newer major.
