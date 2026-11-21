---
# Rankenstein brand config for dragoscatana.com (filled 21 Nov 2026 from the root BRAND.md brand image, the site, SEMRUSH_BRAND_PROFILE.md and KEYWORD_PLAN.md).
# Lives in state_dir on purpose: the root BRAND.md is the brand-image guide and must not be overwritten.
brand: "Dragoș Catană"
url: "dragoscatana.com"

facets:             # coverage tags = the article tags in lib/articles.ts (KEYWORD_PLAN.md §6)
  - Căutare AI
  - SEO
  - SEO local
  - SEO tehnic
  - Google Business Profile
  - Recenzii
  - Date structurate
  - Redesign
  - Clinici și cabinete
  - Legislație

competitors:        # Cluj web design and Romanian AI-visibility (GEO) competitors seen in Google Romania, 21 Nov 2026
  - uny.ro
  - compactstudio.ro
  - onedigital.ro
  - webdesign-cluj.ro
  - fivetn-development.ro
  - startweb.ro
  - agentieseobucuresti.ro
  - endtoend.ro

voice_hard_rules:
  banned_words:
    - "garantat"            # no ranking or result guarantees
    - "garantăm"
    - "locul 1 garantat"
    - "cel mai bun"         # no superlatives about Dragoș or any service
    - "lider"
    - "revoluționar"
    - "agenția noastră"     # Dragoș works alone (BRAND.md §6: never "agenție" about himself)
    - "echipa noastră"
    - "de ultimă generație"
    - "soluții integrate"
    - "ieftin"
    - "preț"                # never publish prices or price ranges
    - "lei"
    - "euro"
  em_dashes: false
  emojis_in_headings: false

state_dir: "content-state/"  # rankenstein_history.csv + drafts/ (HTML drafts kept for the record, never deployed)

notify: none                 # the scheduled task's own end-of-run report is the notification
---

## Audience
Owners and managers of small Romanian businesses who are not technical and have no marketing team: private medical and dental clinics, law firms and individual lawyers, and local service businesses, mostly in Cluj-Napoca and the rest of Romania. Typical reader: a clinic owner or lawyer in their 30s–50s whose site is several years old, who has noticed that patients or clients now ask ChatGPT or see Google's AI answers, and who worries about being invisible there or on Google Maps. They want to understand what to ask for and what is worth paying for, without becoming specialists. They read on a phone between appointments.

## Voice
Follow the voice in the root `BRAND.md` §6: personal, plain, honest, calm and sure. Terms we own: audit gratuit (manual, 24 h), vizibilitate în AI, „recomandat de ChatGPT”, un singur om. First person, as Dragoș, addressing the reader with „tu”. Calm, practical and honest, like a specialist explaining things to a client across the desk: short sentences, one idea per paragraph, every technical term explained the first time. Leads with the direct answer, then the steps. Never hype, never fear-mongering, never promises of positions or results. Correct Romanian (the `romana` skill): „este”, not „e”; „e-mail”; decimal comma; no calques or unnecessary English. The surname is Catană (never Cătană).

## Brand facts to weave in (honestly, never as a plug)
- Dragoș Catană (legal name Dragoș-Mihai Catană) is a freelance web designer in Cluj-Napoca who builds websites and does SEO and AI-search visibility (GEO) himself, without subcontractors. Address: Strada Jorj Voicu 2-4, 400482 Cluj-Napoca.
- Services: website creation, redesign, SEO and AI visibility, websites for clinics, websites for law firms, website maintenance. Sites can be delivered in Romanian and English, with French or German as an add-on.
- Free manual audit of how a business shows up on Google and in AI assistants, delivered within 24 hours: https://dragoscatana.com/audit-gratuit-vizibilitate-ai/
- Measured proof (the only numbers that may be quoted): the Cheesy Media redesign, Lighthouse performance 82 → 100, accessibility 96 → 100, sitemap 0 → 11 pages, measured 18 Nov 2026 (https://dragoscatana.com/lucrari/cheesy-media/).
- Professor quote (Dan C. Lungescu, PhD, UBB) exists but stays on the About page; don't use it in articles.
- No client reviews or testimonials exist yet: never invent or imply any. Never publish prices.
- Mention Dragoș at most once in the body (usually the closing paragraph, pointing to the free audit). Treat the services as one honest option, never as the only answer.

## Source material (inject when relevant)
- `KEYWORD_PLAN.md`: keyword clusters, volumes, scores, page ownership, duplicate guards. The keyword for each run comes from here.
- `SEO_STRATEGY.md` §11: claims already fact-checked against Google's documentation (what is true, unverified or against policy).
- `ARTICLE_PLAN.md`: writing rules and the run log.
- `lib/articles.ts`: every published article (the internal-link and dedup source of truth).
- `lib/site-config.ts`: name, address, phone, profiles and the measured proof.
