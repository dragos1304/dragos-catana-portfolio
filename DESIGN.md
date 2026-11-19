---
version: gamma
name: Dragoș Cătană
description: Personal-brand services site for web design, SEO and AI-search visibility, Romanian-first. Direction A, "Clar și curajos" (bold and clear).
colors:
  paper: "#f6f5f1"
  ink: "#131313"
  muted: "#59594f"
  orange: "#f1501b"
  orange-ink: "#b93a0e"
  teal: "#07bcb4"
  canvas: "#ffffff"
  line: "#e2dfd6"
typography:
  display:
    fontFamily: Bricolage Grotesque
    fontWeight: 700-800
  accent:
    fontFamily: Instrument Serif
    fontStyle: italic
  body:
    fontFamily: Inter
    fontSize: 17-20px
rounded:
  button: 999px
  card: 24px
---

> The source of truth is the code (`app/globals.css`, `components/ui.tsx`). Old token names in the code (`navy`, `mist`, `brass`, `brass-dark`, `slate-ink`) are aliases of `ink`, `paper`, `orange`, `orange-ink` and `muted`.

## Why this direction
Dragoș chose direction A from three Awwwards mood boards (19 Nov 2026; `moodboards/moodboards.html`, local only). The brief was creative and engaging, very easy to understand, premium, modern and simple, with no long animations. It replaced the previous warm-editorial design, which he found hard to read, bland and without pictures.

## Principles
1. **Understood in one second.** Huge, heavy headlines; one idea per band; 17–20px body text with strong contrast (lowest measured 5.22:1).
2. **One loud colour, used with intent.** Orange marks the important word, the primary band and the last journey step. Teal is a second, rarer accent.
3. **Real pictures, no stock.** Real project screenshots (Cheesy Media on desktop and phone). A portrait slot (monogram on an orange circle) waits for a real photo.
4. **Short motion only.** One hand-drawn circle on the hero word, drawn once in 0.6 s. Hover states take 200 ms. No preloaders, scroll effects or parallax. `prefers-reduced-motion` removes the draw.
5. **Content stays in the HTML.** Marks are decorative SVG next to plain text.

## Colors
| Token | Value | Use | Contrast |
|---|---|---|---|
| paper | `#f6f5f1` | page background, cards on white | |
| ink | `#131313` | text, primary buttons, dark bands, footer | 17:1 on paper |
| muted | `#59594f` | secondary text | 6.5:1 on paper |
| orange | `#f1501b` | marks, CTA band, icon discs, accents on ink | ink on orange 5.2:1 |
| orange-ink | `#b93a0e` | orange for small text and links on light | 5.2:1 |
| teal | `#07bcb4` | second accent fill | ink on teal 7.8:1 |
| line | `#e2dfd6` | dividers | |

Never put white text on orange (3.6:1). Ink text goes on orange and teal fills.

## Typography
- **Display:** Bricolage Grotesque 700–800, tracking −0.025em. H1 46–80px, H2 34–48px.
- **Accent:** Instrument Serif italic, used for one phrase in a heading ("m-a recomandat ChatGPT", "încrederea decide", "ușor de găsit").
- **Body:** Inter, 17px base, 18–20px for lead paragraphs.
- All three fonts load the `latin-ext` subset for ă â î ș ț.

## Components
- **Button:** pill, ink fill, paper text, optional arrow; hover turns orange with ink text. Variants: ghost (2px ink border), light (on ink), ghost-dark.
- **Mark:** a hand-drawn orange circle or underline around a word (`<Mark>`). `draw` animates once.
- **Eyebrow:** orange dot plus uppercase muted label.
- **Fact strip:** a 4-cell grid with an ink border and big numbers.
- **Journey cards:** 5 bordered cards ("Tu" / "Eu"); the last one is orange.
- **Service tiles:** ink, teal and orange tiles that lift 4px on hover.
- **Work band:** an ink band with real desktop and phone screenshots plus Lighthouse numbers.
- **Audience cards:** a bordered card with an orange icon disc and an offset ink shadow on hover.
- **AnswerCard:** a bordered card with an offset ink shadow, always labelled as an example.
- **FAQ:** rounded bordered `<details>` with an orange "+" button.
- **CTA band:** a full orange band with an ink headline.
- **Footer:** ink, with a closing "Hai să te facem ușor de găsit." headline.

## Awwwards evidence (awwwards-mcp 1.20.0, 19 Nov 2026)
Skills: `awwwards-inspiration` (search, shortlist, details, live capture, tokens, design brief), `awwwards-motion-study` (motion recording before writing motion), `awwwards-section-loop` (band maps, per-section build, accessibility, mobile compare), and `awwwards-design-md` (earlier, on the live site).

- **Search:**
  - Colour cuts (`#1981C8`, `#F57327`, `#819526`, `#FABC0F`, `#7B19C8`), plus colorful+clean, big-background-images+clean, the SOTD/SOTM cuts and the portfolio award.
  - 15 candidates judged from their screenshots; 6 captured live.
- **Direction A references:**
  - **Super 8 Studio** (`supereightstudio.com`): paper `#f6f5f1`, ink `#131313`, accents `#f1501b` and `#07bcb4`. Instrument Sans and Serif with a condensed display face. Dark work bands alternate with cream.
  - **Altnota** (`altnota.com`): heavy Work Sans headlines; blue hand-drawn circles and underlines on key words.
- **Motion study (Altnota):** 40 CSS keyframes, no GSAP, no scrub or pin. Text staggers by about 210–220 ms; SVG mark paths draw with about 850 ms between them. We kept one mark, 0.6 s, and no staggers, per the "no long animations" brief.
- **`create_design_brief`:** thin for these nominees (no shared signals), so live tokens and captures are the evidence.

## Verification (local build)
- **`analyze_accessibility`** on home, despre, audit and the Cheesy Media case study: worst contrast 5.22:1, one H1 each, no skipped heading levels, 0 unlabelled controls.
- **`analyze_page_structure` mobile compare:** no section removed; extra bands come from stacked columns.
- **`audit_url` (mobile):** 0 high or medium anti-patterns, 0 long tasks.
- **Real Chrome:** the hero circle draws as intended. The in-app preview pane does not advance CSS animations, so its screenshots show the mark undrawn.
