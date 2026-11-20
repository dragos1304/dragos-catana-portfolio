/**
 * The lead form contract: everything the form (components/LeadForm.tsx) and the PHP handler
 * (public/api/contact.php) must agree on. The build writes it to /api/form-contract.json, which the
 * PHP handler reads, so a renamed field or a changed consent token can no longer drift between the two.
 */
import { site } from "./site-config";
import { serviceOptions } from "./site-map";

export type LeadKind = "audit" | "contact";
type Field = { name: string; label: string; max: number; options?: Record<string, string> };

/** Need options: the form sends the stable value; the email shows the Romanian label. */
const needLabels = Object.fromEntries(serviceOptions("ro").map((o) => [o.value, o.label]));

export const leadForm = {
  version: 1,
  /** Names of the hidden and control fields. */
  meta: { kind: "form-name", lang: "lang", honeypot: "bot-field", openedAt: "ts", consent: "consent" },
  /** The consent checkbox value the server accepts. */
  consentToken: "da",
  /** `ts` is the time the form was opened, in milliseconds since the epoch. Faster than this = a bot. */
  minSecondsToFill: 3,
  langs: ["ro", "en"],
  replyHours: site.reply.hours,
  kinds: {
    audit: {
      subject: "Cerere audit gratuit AI",
      fields: [
        { name: "name", label: "Nume", max: 120 },
        { name: "email", label: "E-mail", max: 160 },
        { name: "website", label: "Website", max: 3000 },
        { name: "business", label: "Tip afacere", max: 3000 },
        { name: "city", label: "Oraș", max: 3000 },
        { name: "competitors", label: "Concurenți", max: 3000 },
      ] as Field[],
    },
    contact: {
      subject: "Mesaj nou din contact",
      fields: [
        { name: "name", label: "Nume", max: 120 },
        { name: "email", label: "E-mail", max: 160 },
        { name: "website", label: "Website", max: 3000 },
        { name: "need", label: "Nevoie", max: 200, options: needLabels },
        { name: "message", label: "Mesaj", max: 3000 },
      ] as Field[],
    },
  },
} as const;

/** Every field name a form of this kind must send (user fields plus control fields). */
export function expectedFieldNames(kind: LeadKind): string[] {
  return [...leadForm.kinds[kind].fields.map((f) => f.name), ...Object.values(leadForm.meta)];
}
