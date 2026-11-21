import { readFileSync } from "node:fs";
import { join } from "node:path";
import { brand, phone, place, site, social } from "@/lib/site-config";

/** Where the contact file is served. The "Salvează contactul" buttons link here. */
export const vcardPath = "/dragos-catana.vcf";

/** Escapes a vCard text value (RFC 6350 §3.4). */
const esc = (v: string) => v.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");

/** Folds a content line at 75 octets, never splitting a UTF-8 character (RFC 6350 §3.2). */
function fold(line: string): string {
  const out: string[] = [];
  let cur = "";
  let bytes = 0;
  for (const ch of line) {
    const n = Buffer.byteLength(ch);
    const limit = out.length ? 74 : 75; // continuation lines start with a space
    if (bytes + n > limit) {
      out.push(cur);
      cur = "";
      bytes = 0;
    }
    cur += ch;
    bytes += n;
  }
  out.push(cur);
  return out.join("\r\n ");
}

/**
 * The contact card, built from site-config so the phone, address and profiles never drift.
 * vCard 3.0: the version iPhone Contacts and Android both import reliably.
 */
export function vcard(): string {
  const [last, first] = ["Catană", "Dragoș"];
  const a = place.address;
  const photo = readFileSync(join(process.cwd(), "public", "apple-touch-icon.png")).toString("base64");
  const profiles = [social.linkedin, social.instagram, social.github, social.behance, social.dribbble];
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${esc(last)};${esc(first)};;;`,
    `FN:${esc(site.name)}`,
    `TITLE:${esc("Web design și SEO pentru căutare AI")}`,
    `TEL;TYPE=CELL,VOICE:${phone.e164}`,
    `URL:${site.url}`,
    `ADR;TYPE=WORK:;;${esc(a.street)};${esc(a.city)};${esc(a.region)};${a.postalCode};România`,
    ...profiles.map((p) => `X-SOCIALPROFILE;TYPE=${p.name.toLowerCase()}:${p.url}`),
    `item1.URL:${social.whatsapp.url}`,
    "item1.X-ABLabel:WhatsApp",
    `item2.URL:${site.calendly}`,
    "item2.X-ABLabel:Programează o discuție",
    `NOTE:${esc(`${brand.tagline.ro}. Audit gratuit de vizibilitate în 24 de ore: ${site.url}/audit-gratuit-vizibilitate-ai/`)}`,
    `PHOTO;ENCODING=b;TYPE=PNG:${photo}`,
    "END:VCARD",
  ];
  return lines.map(fold).join("\r\n") + "\r\n";
}
