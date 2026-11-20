import { ContactPage, contactMetadata } from "@/components/pages/LeadPages";

export const metadata = contactMetadata("en");
export default function Page() {
  return <ContactPage lang="en" />;
}
