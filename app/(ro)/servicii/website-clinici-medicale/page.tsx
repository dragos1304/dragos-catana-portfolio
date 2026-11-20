import { VerticalPage, verticalMetadata } from "@/components/pages/VerticalPages";

export const metadata = verticalMetadata("clinics", "ro");
export default function Page() {
  return <VerticalPage k="clinics" lang="ro" />;
}
