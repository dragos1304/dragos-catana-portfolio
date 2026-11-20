import { VerticalPage, verticalMetadata } from "@/components/pages/VerticalPages";

export const metadata = verticalMetadata("lawFirms", "ro");
export default function Page() {
  return <VerticalPage k="lawFirms" lang="ro" />;
}
