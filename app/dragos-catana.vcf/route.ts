import { vcard } from "@/lib/vcard";

export const dynamic = "force-static";

/** The "add to contacts" file. Apache serves it as text/vcard (see public/.htaccess). */
export function GET() {
  return new Response(vcard(), { headers: { "Content-Type": "text/vcard; charset=utf-8" } });
}
