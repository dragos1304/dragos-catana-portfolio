import { VerticalPage, verticalMetadata } from "@/components/pages/VerticalPages";

export const metadata = verticalMetadata("clinics", "en");
export default function Page() {
  return <VerticalPage k="clinics" lang="en" />;
}
