---
version: beta
name: Dragoș Cătană
description: Personal-brand services site for web design, SEO and AI-search visibility, Romanian-first. Warm, editorial, calm, credible.
colors:
  canvas: "#ffffff"
  paper: "#f4efe9"      # token name in code: mist
  ink: "#1a1a1a"        # token name in code: navy
  accent: "#c2702a"     # token name in code: brass (focus rings, dark-band accents)
  accent-text: "#8a3f12" # token name in code: brass-dark (text and borders on light)
  line: "#e4ddd3"
  muted-ink: "#4a4a4a"  # token name in code: slate-ink
typography:
  display:
    fontFamily: Cormorant Garamond
    fontWeight: 500
    sizeAdjust: 0.46
  body:
    fontFamily: Inter
    fontWeight: 400
rounded:
  button: 2px
  card: 6px
---

> Authored by hand from this project's own tokens (`app/globals.css`). Direction came from Awwwards references (see below); nothing was copied. Token names in code are historical (`navy`, `mist`, `brass`) and hold the values above.

## Principles
1. **A real person, not an agency.** The homepage is a story: the client's trigger moment, the journey step by step with "you" and "me" in each step, real proof, and a personal letter (see `USER_JOURNEY.md`).
2. **Calm and credible over flashy.** Warm paper and white bands alternate; one idea per band; generous white space.
3. **Content stays in the HTML.** Key content (journey steps, the letter) is never behind an animation. The CSS reveal is only decoration.
4. **Performance and accessibility are features.** Lighthouse 100 on mobile, WCAG AA contrast (worst measured pair 6.56:1), tap targets at least 24px.

## Colors
| Token (code) | Value | Use |
|---|---|---|
| canvas | `#ffffff` | Content bands |
| mist (paper) | `#f4efe9` | Hero, journey, letter and CTA bands, cards on white |
| navy (ink) | `#1a1a1a` | Text, primary buttons, footer |
| brass-dark | `#8a3f12` | Eyebrows, italic accent words, links, flagship borders (6.56:1 on paper, 7.5:1 on white) |
| brass | `#c2702a` | Focus outline; accents on the dark footer |
| line | `#e4ddd3` | Borders and dividers |
| slate-ink | `#4a4a4a` | Secondary text (7.75:1 on paper) |

## Typography
- **Display:** Cormorant Garamond 500 (italic for one accent phrase per heading). `font-size-adjust: 0.46` scales its small x-height to read like a text serif. H1 40–60px, H2 36–48px.
- **Body and UI:** Inter 400–600, 15–18px. Both fonts load the `latin-ext` subset for ă â î ș ț.
- **Labels and buttons:** 14px, semibold, uppercase, tracking 0.08–0.14em.

## Components
- **Button:** square (2px radius), ink fill, white tracked uppercase label, min height 48px; hover turns accent-text. A ghost variant is outlined in ink.
- **Personal card (hero):** initials monogram (replace with a photo when available), name, city, three facts.
- **Journey list:** numbered steps; each row shows when, step title, "Tu" and "Eu, Dragoș".
- **Letter:** first-person serif paragraphs plus the professor quote with an accent rule.
- **CTA band:** warm paper "Primul pas" band before the dark footer.
- **AnswerCard:** an illustrative AI answer, always labelled as an example.
- **FAQ:** native `<details>` plus FAQPage JSON-LD.

## Do / Don't
- Do keep one primary CTA ("Cere auditul gratuit").
- Do label illustrative content as an example.
- Don't invent numbers, reviews or testimonials. The reference used Google reviews; we only use real, sourced proof (Cheesy Media scores, the professor quote).
- Don't put key content inside scroll-driven animation.

## Awwwards evidence (18 Nov 2026, awwwards-mcp 1.20.0)
Skills used, in their recommended order:
1. `awwwards-setup`: preferences saved (compact results, desktop + mobile, captures on, index on).
2. `awwwards-inspiration`: search, shortlist, design brief, live captures.
3. `awwwards-motion-study`: motion recording before deciding motion.
4. `awwwards-section-loop`: band map, accessibility, mobile compare, `verify_build`.
5. `awwwards-design-md`: to run on the public URL once this version is deployed.

`awwwards-doctor`, `awwwards-atlas`, `recreate` and `motion-authoring` were not applicable: no tool failures, Atlas is opt-in, and we are not cloning or converting a site.

- **Search:**
  - `businessServices` winners, `#F3F2F2` + typography/clean, storytelling + business-corporate.
  - Shortlist: **Dr Shabri** (practitioner personal brand), **DC Carpentry & Construction** (local business, projects "told stage by stage"), **Weiss & Lameraner** (calm black-and-white type), **Con.Creta Ceramics** (story-led craft), **MONOLOG** (statement hero, process, footer CTA).
  - Rejected: art-directed WebGL and agency pieces (Santal, Obys, Why Zero).
- **`create_design_brief`** (5 slugs, `includeStructure: true`): no shared signals and no motion or structure evidence for the nominees, so live captures were needed.
- **Dr Shabri live evidence:**
  - `export_design_tokens`: ink `#1a1a1a`/`#333`, muted `#4a4a4a`, paper `#f4efe9`; Cormorant Garamond display + DM Sans tracked labels; no button radii.
  - `analyze_page_structure`: warm paper bands for hero, CTA and enquiry; white content bands between.
  - `analyze_scroll_map`: 24 CSS keyframes, 0 GSAP, 0 scrub, 0 pin.
  - `record_site_motion`: static entrance; the only motion is the nav mega-menu fade on hover.
- **DC Carpentry:** behind a security-verification page, so it was not captured. Only its listing description was used (the stage-by-stage idea, which became the journey list).
- **What we adapted:**
  - Warm paper and white rhythm.
  - Light editorial serif with an italic accent.
  - Square ink buttons with tracked labels.
  - "Begin a conversation" CTA band.
  - Stage-by-stage storytelling.
- **What is our own:** the accent colour, Inter for text, the journey ("Tu / Eu") structure, the letter, the content.
- **Build checks (local static export):**
  - `analyze_accessibility`: worst contrast 6.56:1, one H1, no skipped heading levels.
  - `analyze_page_structure` with mobile compare: same section order on mobile.
  - `audit_url` (mobile): 0 high or medium anti-patterns, 0 long tasks.
  - `verify_build` against Dr Shabri: band score 9. That is expected and intended, because we took direction, not structure.
