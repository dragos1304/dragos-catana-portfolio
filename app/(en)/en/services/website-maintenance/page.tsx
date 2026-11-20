import { MaintenancePage, maintenanceMetadata } from "@/components/pages/ServicePages";

export const metadata = maintenanceMetadata("en");
export default function Page() {
  return <MaintenancePage lang="en" />;
}
