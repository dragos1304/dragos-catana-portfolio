import { describe, expect, it } from "vitest";
import { proof, site } from "@/lib/site-config";
import { ui } from "@/lib/i18n";

describe("site facts", () => {
  it("phrases the reply promise from one number in both languages", () => {
    expect(site.reply.ro).toContain(String(site.reply.hours));
    expect(site.reply.en).toContain(String(site.reply.hours));
    expect(ui.ro.ctaText).toContain(site.reply.ro);
    expect(ui.en.ctaText).toContain(site.reply.en);
  });

  it("keeps the Cheesy Media proof internally consistent", () => {
    for (const s of proof.cheesy.lighthouse) {
      expect(s.after).toBeGreaterThanOrEqual(s.before);
      expect(s.after).toBeLessThanOrEqual(100);
    }
    expect(proof.cheesy.lighthouse.map((s) => s.name.en)).toEqual(["Performance", "Accessibility", "Best practices", "SEO"]);
  });
});
