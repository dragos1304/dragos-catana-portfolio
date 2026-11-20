import { ServicesPage, servicesMetadata } from "@/components/pages/HubPages";

export const metadata = servicesMetadata("en");
export default function Page() {
  return <ServicesPage lang="en" />;
}
