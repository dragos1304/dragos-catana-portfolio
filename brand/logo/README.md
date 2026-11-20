# Logo: „Cercul desenat”

The hand-drawn orange ring from the website's headings, around "DC" (the mark) and around "Catană" (the full logo). Colours: ink `#131313`, paper `#f6f5f1`, orange `#f1501b`. Lettering: Bricolage Grotesque ExtraBold; subtitle Inter SemiBold. The lettering is converted to outlines, so the files look identical without the fonts installed.

## Which file where

| Where | File |
|---|---|
| Overview of every version | `preview.png` |
| Profile photo: Google Business Profile, LinkedIn, Facebook, Instagram, WhatsApp Business, YouTube, Clutch, GoodFirms, DesignRush, Crunchbase, Dribbble, Behance, GitHub | `png/profile-1024.png` (or `profile-400.png` where the upload is limited) |
| Profile photo on a dark theme | `png/profile-dark-1024.png` |
| Romanian logo, light background (site, offers, invoices, Romanian directories) | `svg/logo-ro.svg` · `png/logo-ro.png` |
| Romanian logo, dark background | `svg/logo-ro-white.svg` · `png/logo-ro-white.png` |
| English logo, light background (Clutch, GoodFirms, DesignRush, Crunchbase) | `svg/logo-en.svg` · `png/logo-en.png` |
| English logo, dark background | `svg/logo-en-white.svg` · `png/logo-en-white.png` |
| Mark without background (stickers, overlays, presentations) | `svg/mark-transparent.svg` · `png/mark-transparent-1024.png`, white: `*-white` |
| Website header and footer (name only) | `svg/wordmark.svg` · `svg/wordmark-white.svg` |
| Website favicon and app icons | `svg/mark-small.svg`, `png/favicon-16/32/48.png`, `png/apple-touch-icon-180.png`, `png/icon-192.png`, `png/icon-512.png` |

Rules: keep clear space around the logo of at least the height of the letter "C"; do not stretch, recolour or redraw the ring; on photos, use the mark on its paper or ink square.

## Rebuilding

`build.py` generates every SVG from the fonts (OFL, from github.com/google/fonts; not committed):

```bash
python build.py <fonts-dir> svg
```

`options-ro.html` / `options-ro.png` are the four options presented on 20 Nov 2026; option 3 was chosen.

## On the website

Copies live in `public/` (`favicon.ico`, `icon.svg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `site.webmanifest`) and `public/brand/` (wordmarks, `logo-ro.png` for the schema `logo`). Links are set in `brand` in `lib/site-config.ts`. Images are cached for a year, so after replacing any of these files, bump `brandVersion` there.
