import { AuditPage, auditMetadata } from "@/components/pages/LeadPages";

export const metadata = auditMetadata("en");
export default function Page() {
  return <AuditPage lang="en" />;
}
