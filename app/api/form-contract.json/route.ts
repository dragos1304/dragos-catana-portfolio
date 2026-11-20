import { leadForm } from "@/lib/lead-form";

export const dynamic = "force-static";

/** The lead form contract as JSON, read by public/api/contact.php on the server. */
export function GET() {
  return new Response(JSON.stringify(leadForm, null, 2), { headers: { "Content-Type": "application/json; charset=utf-8" } });
}
