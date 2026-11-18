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

## Needs you
- [ ] **Optional automatic deploys:** add GitHub secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_DIR` for `.github/workflows/deploy.yml` (untested, needs your credentials).
- [ ] **Deploy to Network Solutions:** follow `DEPLOY.md` (build `out/`, upload its contents, create `api/config.php` from `config.example.php`). Tell me your plan type if it has no PHP or no FTP/SFTP, and I will adapt it.
- [ ] **Form email:** create the sender mailbox/alias on the domain, add SPF (and DKIM if offered) in Cloudflare DNS, then send a test from each form and check spam.
- [ ] **GA4 inside GTM:** in container `GTM-K7RPGZSV`, add a GA4 configuration tag (your `G-XXXXXXX` measurement ID) with consent type *analytics_storage*, and a GA4 event tag for the `generate_lead` event the forms already push. Publish the container.
- [ ] **Legal review:** the privacy, cookie and terms pages are drafts. Add your legal identity (PFA/CUI if you have one), a contact email for data requests, and have them reviewed before collecting real leads.
- [ ] **Professional photo** for Home and About (the layout works without one).
- [ ] **Public contact details:** a contact email, LinkedIn URL, optional phone/WhatsApp. They are intentionally not on the site yet.
- [ ] **Domain:** add `dragoscatana.com` to Cloudflare, switch the nameservers at the registrar, add the A/CNAME records from your hosting, SSL/TLS **Full (strict)**. HTTPS and `www` → apex are handled by `.htaccess`.
- [ ] **Cloudflare:** keep records **DNS-only** (grey cloud) to start. If you proxy, make sure no AI-bot blocking or bot-fight rule is on, otherwise `robots.txt` says "welcome" while the firewall says "no".
- [ ] Professional email on the domain.
- [ ] **Google Business Profile** *(deferred)*. Keep name, address, phone and website identical to the site.
- [ ] Register the site in **Google Search Console** and **Bing Webmaster Tools**, submit `sitemap.xml`.
- [ ] **Baseline AI-prompt test** before launch (ChatGPT, Gemini, Claude, Perplexity), then monthly. See the DIY article on the site for the method. I can't query those assistants from here.
- [ ] Directories and profiles with an identical name and bio (LinkedIn, GitHub, Romanian business directories).
- [ ] Open Graph share image (not built yet).
- [ ] Re-check AI crawler names in `robots.txt` every quarter. Re-run the keyword check in 3 months.

## Later
- [ ] English version (`/en`, hreflang) after the Romanian site is live. FR/DE as per-project add-ons.
- [ ] Ask each future client for a real review/quote and permission to publish a case study.
- [ ] Cheesy Media: add real traffic or lead numbers if they share them.
- [ ] Add the portfolio's own AI-visibility progress as a live case study.
- [ ] Publish more articles (2 per month): local SEO, clinic and law-firm website guides, Core Web Vitals.
- [ ] Known dev note: `npm audit` reports a PostCSS advisory bundled inside Next 15 (build-time only). Upgrade Next when you want to move to a newer major.
