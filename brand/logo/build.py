"""Builds the Dragoș Catană logo (option 3, "Cercul desenat") as SVG with the lettering outlined.

Fonts (not committed): Bricolage Grotesque ExtraBold for the name, Inter SemiBold for the subtitle,
both from github.com/google/fonts (OFL). Usage:
    python build.py <fonts-dir> <out-dir>
Needs: pip install fonttools uharfbuzz
"""
import os
import sys

import uharfbuzz as hb
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

FONTS, OUT = sys.argv[1], sys.argv[2]
INK, PAPER, ORANGE, MUTED, MUTED_DARK = "#131313", "#f6f5f1", "#f1501b", "#59594f", "#c9c7bd"

SUBTITLE = {
    "ro": "Web design și SEO · Cluj-Napoca",
    "en": "Web design and SEO · Cluj-Napoca, Romania",
}

# The hand-drawn ring from the site (components/ui.tsx, Mark), as absolute cubic curves in a 200 x 80 box.
RING = [(150, 9), [(112, 1), (40, 3), (14, 22)], [(-6, 37), (12, 66), (62, 74)],
        [(110, 81), (175, 75), (192, 52)], [(207, 31), (172, 10), (118, 7)]]


def load(name, **axes):
    font = hb.Font(hb.Face(hb.Blob.from_file_path(os.path.join(FONTS, name))))
    if axes:
        font.set_variations(axes)
    return font


DISPLAY = load("Bricolage.ttf", wght=800, opsz=96, wdth=100)
SANS = load("Inter.ttf", wght=600, opsz=14)


def run(font, text, size, x, baseline, tracking=0.0):
    """Shape text with HarfBuzz and return (svg path d, ink box, per-cluster x ranges)."""
    upem = font.face.upem
    s = size / upem
    buf = hb.Buffer()
    buf.add_str(text)
    buf.guess_segment_properties()
    hb.shape(font, buf, {"kern": True, "liga": True})
    pen = SVGPathPen(None)
    pen_x = x
    xs, ys, clusters = [], [], []
    for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
        gx = pen_x + pos.x_offset * s
        gy = baseline - pos.y_offset * s
        font.draw_glyph_with_pen(info.codepoint, TransformPen(pen, (s, 0, 0, -s, gx, gy)))
        ext = font.get_glyph_extents(info.codepoint)
        if ext and ext.width:
            x0, x1 = gx + ext.x_bearing * s, gx + (ext.x_bearing + ext.width) * s
            y0, y1 = gy - ext.y_bearing * s, gy - (ext.y_bearing + ext.height) * s
            xs += [x0, x1]
            ys += [y0, y1]
            clusters.append((info.cluster, x0, x1, y0, y1))
        pen_x += pos.x_advance * s + tracking * size
    return pen.getCommands(), (min(xs), min(ys), max(xs), max(ys)), clusters, pen_x


def ring(box, pad_x, pad_y, stroke, color=ORANGE):
    x0, y0, x1, y1 = box
    bx, by, bw, bh = x0 - pad_x, y0 - pad_y, (x1 - x0) + 2 * pad_x, (y1 - y0) + 2 * pad_y
    t = lambda p: f"{bx + p[0] / 200 * bw:.1f} {by + p[1] / 80 * bh:.1f}"
    d = f"M{t(RING[0])}" + "".join("C" + " ".join(t(p) for p in seg) for seg in RING[1:])
    return f'<path d="{d}" fill="none" stroke="{color}" stroke-width="{stroke:.1f}" stroke-linecap="round" stroke-linejoin="round"/>'


def svg(w, h, body, bg=None, title="Dragoș Catană"):
    rect = f'<rect width="{w}" height="{h}" fill="{bg}"/>' if bg else ""
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img">'
            f"<title>{title}</title>{rect}{body}</svg>\n")


def mark(text_color, bg=None, small=False):
    """Square mark: DC inside the drawn ring. 1024 x 1024, safe for circular crops.
    small=True: bigger letters and a thicker ring, for favicons and icons under 64 px."""
    size = 1024
    d, box, _, _ = run(DISPLAY, "DC", 470 if small else 400, 0, 0, tracking=0.0)
    w, hgt = box[2] - box[0], box[3] - box[1]
    dx, dy = (size - w) / 2 - box[0], (size - hgt) / 2 - box[1] + 6
    moved = (box[0] + dx, box[1] + dy, box[2] + dx, box[3] + dy)
    pad = (0.30, 0.40) if small else (0.42, 0.52)
    body = (ring(moved, pad[0] * hgt, pad[1] * hgt, 64 if small else 30)
            + f'<path transform="translate({dx:.1f} {dy:.1f})" d="{d}" fill="{text_color}"/>')
    return svg(size, size, body, bg)


def lockup(lang, name_color, sub_color):
    """Horizontal logo: Dragoș [Catană in the ring], subtitle underneath."""
    size, margin = 120, 40
    first, b1, _, end1 = run(DISPLAY, "Dragoș ", size, margin, 0, tracking=-0.03)
    last, b2, _, _ = run(DISPLAY, "Catană", size, end1 + 0.40 * size, 0, tracking=-0.03)
    cap_h = b2[3] - b2[1]
    pad_x, pad_y = 0.62 * cap_h, 0.42 * cap_h
    top = margin + pad_y - b2[1]                      # shift so the ring's top sits on the margin
    sub_size = 40
    sub, b3, _, _ = run(SANS, SUBTITLE[lang], sub_size, margin + 4, 0)
    sub_base = top + b2[3] + pad_y + 1.05 * sub_size  # below the ring
    width = max(b2[2] + pad_x + 12, b3[2] + 4) + margin
    height = sub_base + 12 + margin
    ringed = (b2[0], b2[1] + top, b2[2], b2[3] + top)
    body = (ring(ringed, pad_x, pad_y, 11)
            + f'<path transform="translate(0 {top:.1f})" d="{first} {last}" fill="{name_color}"/>'
            + f'<path transform="translate(0 {sub_base:.1f})" d="{sub}" fill="{sub_color}"/>')
    return svg(round(width), round(height), body)


os.makedirs(OUT, exist_ok=True)
files = {
    "mark-light.svg": mark(INK, PAPER),            # profile photo, light
    "mark-dark.svg": mark(PAPER, INK),             # profile photo, dark
    "mark-transparent.svg": mark(INK),             # on light surfaces
    "mark-transparent-white.svg": mark(PAPER),     # on dark surfaces
    "mark-small.svg": mark(INK, PAPER, small=True),  # favicon and icons under 64 px
}
for lang in ("ro", "en"):
    files[f"logo-{lang}.svg"] = lockup(lang, INK, MUTED)               # for light backgrounds
    files[f"logo-{lang}-white.svg"] = lockup(lang, PAPER, MUTED_DARK)  # for dark backgrounds
for name, content in files.items():
    with open(os.path.join(OUT, name), "w") as fh:
        fh.write(content)
print("\n".join(sorted(files)))
