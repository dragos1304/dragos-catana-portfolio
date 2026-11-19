---
version: alpha
name: dragoscatana.com
description: Romanian-language homepage of a freelance web designer offering websites, SEO and AI-search visibility.
colors:
  ink: "#1a1a1a"
  muted-ink: "#4a4a4a"
  accent: "#8a3f12"
  canvas: "#ffffff"
  paper: "#f4efe9"
typography:
  display:
    fontFamily: Cormorant Garamond
  body:
    fontFamily: Inter
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "24px"
components: {}
---

## Overview

Observed on https://dragoscatana.com/ (desktop, 1440px) on 19 Nov 2026 after the redesign deploy. The page alternates warm paper and white bands from a sticky header to a dark footer [S2]. Text uses a near-black ink, a mid-grey secondary ink and one rust accent [S1]. Headings use an editorial serif and body copy a sans-serif [S1]. The group names (ink, paper, accent) are **inferred** labels, not source token names.

## Colors

| Inferred name | Value | Samples | Source |
|---|---|---|---|
| ink | `#1a1a1a` | 212 | [S1] /tokens/colors/0 |
| muted-ink | `#4a4a4a` | 50 | [S1] /tokens/colors/1 |
| accent | `#8a3f12` | 45 | [S1] /tokens/colors/2 |
| canvas | `#ffffff` | 26 | [S1] /tokens/colors/3 |
| paper | `#f4efe9` | 8 | [S1] /tokens/colors/4 |

Band backgrounds [S2]: rgb(244, 239, 233), rgb(255, 255, 255), rgb(26, 26, 26).

## Typography

- **Inter**: weights 400, 500, 600, 700; sizes 12px, 14px, 15px, 16px, 18px; letter spacing 0.6px, 0.7px, 1.12px, 1.68px, 1.96px, normal (323 samples) [S1].
- **"Cormorant Garamond"**: weights 400, 500, 600; sizes 18px, 20px, 24px, 30px, 48px, 60px; letter spacing -1.5px, normal (39 samples) [S1].

These are independent aggregates. A component capture confirms the hero H1 uses Cormorant Garamond at 60px [S4]; other heading tuples are not proven.

## Layout

11 bands, total height 7210px [S2]:

1. `body`: rgb(255, 255, 255), 72px
2. `#acasa.border-b`: rgb(244, 239, 233), 616px
3. `#momentul.bg-canvas`: rgb(255, 255, 255), 680px
4. `#drumul.bg-mist`: rgb(244, 239, 233), 1488px
5. `#servicii.bg-canvas`: rgb(255, 255, 255), 704px
6. `#pentru-cine.bg-mist`: rgb(244, 239, 233), 600px
7. `#lucrari.bg-canvas`: rgb(255, 255, 255), 560px
8. `#despre.bg-mist`: rgb(244, 239, 233), 984px
9. `#intrebari.bg-canvas`: rgb(255, 255, 255), 640px
10. `#contact.bg-mist`: rgb(244, 239, 233), 456px
11. `.bg-navy`: rgb(26, 26, 26), 410px

The most frequent spacing values are 12px, 4px, 8px, 24px, 16px, 20px [S1].

## Elevation & Depth

No box shadows were observed [S1: shadows = 2]. Depth comes from 1px borders and background contrast between bands.

## Shapes

Observed radii: 6px (18), 4px (12), 8px (1) [S1]. Buttons and badges use the smallest radius, cards the medium one. That role mapping is inferred.

## Components

- **Hero** `#acasa` [S4]: 1440×620px, background rgb(244, 239, 233), text rgb(26, 26, 26), 23 nodes.
- **Journey** `#drumul` [S5]: 1440×1490.84375px, background rgb(244, 239, 233), 64 nodes.
- **CTA band** `#contact` [S6]: 1440×454.59375px, background rgb(244, 239, 233), 9 nodes.

Only the default state was captured. Hover and focus states were not observed.

## Do's and Don'ts

- Do keep text on paper or white in ink or muted ink. The observed pairs are within the palette above.
- Do keep the accent for small emphasis (eyebrows, links). It is the third most frequent colour [S1].
- (Proposed) Don't add shadows; none exist in the observed system.

## Sources

- [S1] `export_design_tokens`: https://dragoscatana.com/, selector `body`, artifact `tokens.json`
- [S2] `analyze_page_structure`: artifact `structure.json`
- [S3] `capture_live_site`: saved locally as `capture-bb0875bda199-desktop.png` in the awwwards-mcp image cache (not committed)
- [S4] `capture_component`: `#acasa`, artifact `comp-hero.json`
- [S5] `capture_component`: `#drumul`, artifact `comp-journey.json`
- [S6] `capture_component`: `#contact`, artifact `comp-cta.json`

## Coverage and limitations

Desktop only; no mobile, dark-mode, hover or focus states. The first token capture hit an intermittent Cloudflare browser check and was discarded; this document uses the clean retry. The colour list is capped by the tool's sampling of 800 nodes.

## Unresolved details

Exact heading sizes per level, button padding and footer colours were not captured as component tuples and are not stated here.
