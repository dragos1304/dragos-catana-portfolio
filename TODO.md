# TODO

Things that still need an owner or a decision before or after launch. Source plan: `PORTFOLIO_STRUCTURE.md`.

## Blockers before build
- [ ] **Confirm "GR"** means German (DE) rather than Greek. The plan assumes German.
- [ ] **Cheesy Media**: get written OK to publish the case study, name and screenshots. Ask for a real quote if they're happy to give one.
- [ ] **Cheesy Media**: run Lighthouse/PageSpeed on the old and new sites and save the scores (this is the only "result" we can show honestly right now).
- [ ] **Professional photo** for Home and About.
- [ ] **Fonts**: pick a serif display + sans body, and confirm Romanian diacritics (ă â î ș ț) render correctly.
- [ ] **Contact details**: public email address, LinkedIn URL, GitHub URL, optional phone/WhatsApp.
- [ ] **Convert** `Gemini.md` and `dragos_catana_profile.txt` from RTF to plain text.
- [ ] **GTM**: use the standard GTM install (the pasted snippet is incomplete: no `gtm.start` push, no `<noscript>`, stray `gtag`). Configure GA4 inside container `GTM-K7RPGZSV`.
- [ ] **Cookie consent**: choose a consent tool and set up Consent Mode (GDPR/ePrivacy).
- [ ] **Legal pages** (privacy, terms, cookies): draft and have them reviewed. Check any wording about processing form data.

## Domain & hosting
- [ ] Add `dragoscatana.com` to Netlify; set records in Cloudflare.
- [ ] Set Netlify-pointing records to **DNS-only** (grey cloud) if possible.
- [ ] Check Cloudflare has **no AI-bot blocking** or bot-fight rules active for this domain.
- [ ] Redirect `www` to apex (or the reverse); force HTTPS.
- [ ] Set up a professional email on the domain.

## SEO / AI visibility
- [ ] **Google Business Profile**: create and verify it *(deferred by Dragoș)*. Keep name, address, phone and website identical to the site.
- [ ] Validate the target keywords with a keyword tool (volume, difficulty) before writing content. Semrush access is available in this workspace.
- [ ] Register the site in Google Search Console and Bing Webmaster Tools; submit `sitemap.xml`.
- [ ] Take a **baseline AI-prompt test** before launch (ChatGPT, Gemini, Claude, Perplexity), then repeat monthly.
- [ ] Recheck the AI crawler bot names in `robots.txt` every quarter.
- [ ] Create profiles/directories with identical name and bio (LinkedIn, GitHub, relevant Romanian business directories).

## Content
- [ ] Write the first 5 articles (see §8 of the plan).
- [ ] Draft the Romanian copy for the three service pages and the About page.
- [ ] Prepare a sample audit output (clearly labelled as an example).
- [ ] Prepare an EN version after the RO site is live; scope FR/DE as add-ons per project.

## Later / nice to have
- [ ] Ask each future client for a real review/quote and permission to publish a case study.
- [ ] Add the portfolio's own AI-visibility progress as a live case study.
- [ ] Decide whether to publish a short public statement about availability next to the About page goals.
