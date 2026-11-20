import { VerticalPage, verticalMetadata } from "@/components/pages/VerticalPages";

export const metadata = verticalMetadata("lawFirms", "en");
export default function Page() {
  return <VerticalPage k="lawFirms" lang="en" />;
}
