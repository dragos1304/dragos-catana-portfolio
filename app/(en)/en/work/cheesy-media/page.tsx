import { CaseStudyPage, caseStudyMetadata } from "@/components/pages/CaseStudyPage";

export const metadata = caseStudyMetadata("en");
export default function Page() {
  return <CaseStudyPage lang="en" />;
}
