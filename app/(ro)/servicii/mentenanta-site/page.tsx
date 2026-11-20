import { MaintenancePage, maintenanceMetadata } from "@/components/pages/ServicePages";

export const metadata = maintenanceMetadata("ro");
export default function Page() {
  return <MaintenancePage lang="ro" />;
}
