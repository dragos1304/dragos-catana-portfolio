import { describe, expect, it } from "vitest";
import { phone, sameAs, social } from "@/lib/site-config";
import { personSchema, siteSchema } from "@/lib/schema";
import { faqs, aiQuestions } from "@/lib/faqs";

describe("social links (one source)", () => {
  it("feeds the schema sameAs from the social config, profiles only", () => {
    expect(personSchema.sameAs).toEqual(sameAs);
    expect(sameAs).toContain(social.linkedin.url);
    expect(sameAs).toContain(social.instagram.url);
    expect(sameAs).not.toContain(social.whatsapp.url);
    const service = siteSchema["@graph"].find((n) => n["@type"] === "ProfessionalService") as { sameAs: string[] };
    expect(service.sameAs).toEqual(sameAs);
  });

  it("builds the WhatsApp link from the one phone number", () => {
    expect(social.whatsapp.url).toBe(`https://wa.me/${phone.e164.slice(1)}`);
  });
});

describe("FAQ content", () => {
  it("keeps Romanian and English FAQ lists the same length", () => {
    for (const set of [faqs, aiQuestions]) for (const [k, v] of Object.entries(set)) expect(v.ro.length, k).toBe(v.en.length);
  });
});
