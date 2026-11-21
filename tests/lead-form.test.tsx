import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { LeadForm } from "@/components/LeadForm";
import { expectedFieldNames, leadForm, type LeadKind } from "@/lib/lead-form";

const names = (html: string) => [...new Set([...html.matchAll(/name="([^"]+)"/g)].map((m) => m[1]))].filter((n) => n !== "audit" && n !== "contact");

describe("lead form contract", () => {
  for (const kind of ["audit", "contact"] as LeadKind[]) {
    for (const lang of ["ro", "en"] as const) {
      it(`${kind}/${lang}: the form sends exactly the fields the server expects`, () => {
        const html = renderToStaticMarkup(<LeadForm kind={kind} lang={lang} />);
        // `ts` (openedAt) is added at submit time, not rendered.
        const expected = expectedFieldNames(kind).filter((n) => n !== leadForm.meta.openedAt).sort();
        expect(names(html).sort()).toEqual(expected);
        expect(html).toContain(`value="${leadForm.consentToken}"`);
        expect(html).toContain(`name="${leadForm.meta.lang}" value="${lang}"`);
      });
    }
  }

  it("contact form need options all map to a Romanian label for the email", () => {
    const html = renderToStaticMarkup(<LeadForm kind="contact" lang="en" />);
    // The need field is a group of radio "pills" (name="need").
    const options = [...html.matchAll(/<input[^>]*name="need"[^>]*value="([^"]+)"/g)].map((m) => m[1]);
    const need = leadForm.kinds.contact.fields.find((f) => f.name === "need")!;
    expect(options.length).toBeGreaterThan(0);
    for (const o of options) expect(need.options?.[o], o).toBeTruthy();
  });
});
