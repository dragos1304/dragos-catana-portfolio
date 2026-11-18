---
version: alpha
name: Dragoș Cătană
description: Services portfolio for web design and AI-search optimization, Romanian-first. Editorial, calm, credible.
colors:
  canvas: "#ffffff"
  navy: "#0f172a"
  brass: "#d97706"
  brass-dark: "#92400e"
  mist: "#f8fafc"
  line: "#e2e8f0"
  slate-ink: "#475569"
typography:
  display:
    fontFamily: Source Serif 4
    fontWeight: 600
  body:
    fontFamily: Inter
    fontWeight: 400
rounded:
  card: 16px
  pill: 9999px
---

> Authored by hand from this project's own tokens (`app/globals.css`), not extracted from a third-party site. Source of truth is the code.

## Principles
1. **Calm and credible over flashy.** The audience is clinics, law firms and local businesses. Motion is minimal (fade/rise on a few blocks, transform and opacity only, `prefers-reduced-motion` respected).
2. **Structure first.** Alternating white / mist / navy bands give each section a clear job; one idea per band.
3. **Content stays in the HTML.** No content depends on JavaScript to be readable by search engines and AI crawlers.
4. **Performance and accessibility are features.** Targets: Lighthouse 100 on mobile, WCAG AA contrast, tap targets of at least 24px.

## Colors
| Token | Value | Use |
|-------|-------|-----|
| canvas | `#ffffff` | Page background |
| navy | `#0f172a` | Text, hero and CTA bands, footer |
| brass | `#d97706` | Buttons (with navy text, contrast 5.6:1), accents on navy |
| brass-dark | `#92400e` | Brass text on light backgrounds (contrast at least 5.6:1) |
| mist | `#f8fafc` | Alternating section background |
| line | `#e2e8f0` | Borders and dividers |
| slate-ink | `#475569` | Secondary text |

Rule: never use `brass` for small text on white. Use `brass-dark`.

## Typography
- Display: Source Serif 4, weight 600, headings from 24px to 60px.
- Body and UI: Inter, 400/500/600/700, 14-18px. Both fonts are loaded with the `latin-ext` subset so Romanian diacritics (ă â î ș ț) render correctly.
- Eyebrows: 14px, bold, uppercase, tracking 0.14em.

## Components
- **Button (primary):** pill, brass fill, navy text, min height 48px. Ghost variants for light and dark backgrounds.
- **Section:** `py-16 sm:py-24`, max width 6xl, 20/32px gutters; `tint` (mist) and `dark` (navy) variants.
- **Card:** 16px radius, 1px `line` border; the flagship card adds a brass ring.
- **FAQ:** native `<details>`, with matching FAQPage JSON-LD.
- **AnswerCard:** illustrative AI chat reply, always labelled as an example.
- **Tables:** real `<table>` with caption (screen-reader only) and `scope` attributes.
- **Cookie banner:** non-modal dialog, bottom of screen, two equal-weight choices.

## Do / Don't
- Do keep one primary CTA per band ("Audit gratuit AI").
- Do label illustrative content as an example.
- Don't invent numbers, reviews or testimonials.
- Don't add heavy scroll-driven animation: it hurts Core Web Vitals and gives the audience nothing.
