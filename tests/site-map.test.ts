import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { alternates, href, nav, serviceOptions, services, sitemapEntries, twinOf } from "@/lib/site-map";

/** A path in the site map must be a real route file in the matching root layout. */
function routeFileExists(path: string) {
  // Romanian pages live in app/(ro); the standalone pocket pages (links, business card) in app/(card).
  const groups = path.startsWith("/en/") ? ["(en)"] : ["(ro)", "(card)"];
  return groups.some((g) => existsSync(`app/${g}${path}page.tsx`));
}

describe("site map", () => {
  const entries = sitemapEntries();

  it("lists every page once", () => {
    const paths = entries.map((e) => e.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("points every listed path at a real page", () => {
    for (const e of entries) expect(routeFileExists(e.path), e.path).toBe(true);
  });

  it("gives twins reciprocal hreflang", () => {
    for (const e of entries.filter((x) => x.languages)) {
      const { ro, en } = e.languages!;
      expect(twinOf(ro, "ro")).toBe(en);
      expect(twinOf(en, "en")).toBe(ro);
      expect(e.languages!["x-default"]).toBe(ro);
    }
  });

  it("sends a Romanian-only page's language switch to the English home", () => {
    expect(twinOf("/articole/", "ro")).toBe("/en/");
    expect(twinOf("/articole/ce-este-seo/", "ro")).toBe("/en/");
  });

  it("builds canonical + alternates from one key", () => {
    expect(alternates("seo", "en")).toEqual({
      canonical: "/en/services/seo-ai-visibility/",
      languages: { ro: "/servicii/seo-vizibilitate-ai/", en: "/en/services/seo-ai-visibility/", "x-default": "/servicii/seo-vizibilitate-ai/" },
    });
    expect(alternates("articles", "ro")).toEqual({ canonical: "/articole/" });
  });

  it("only links navigation to real pages, and English nav stays in English", () => {
    for (const lang of ["ro", "en"] as const) for (const n of nav(lang)) expect(routeFileExists(n.href), n.href).toBe(true);
    expect(nav("en").every((n) => n.href.startsWith("/en/"))).toBe(true);
  });

  it("keeps the two service lists aligned (same keys, same order, real pages)", () => {
    const ro = services("ro"), en = services("en");
    expect(ro.map((s) => s.key)).toEqual(en.map((s) => s.key));
    for (const s of [...ro, ...en]) expect(routeFileExists(s.href), s.href).toBe(true);
    expect(ro.filter((s) => s.flagship)).toHaveLength(1);
  });

  it("gives the form stable option values in both languages", () => {
    expect(serviceOptions("ro").map((o) => o.value)).toEqual(serviceOptions("en").map((o) => o.value));
    expect(href("audit", "en")).toBe("/en/free-ai-visibility-audit/");
  });
});
