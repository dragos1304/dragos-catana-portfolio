import { NewSitePage, newSiteMetadata } from "@/components/pages/ServicePages";

export const metadata = newSiteMetadata("en");
export default function Page() {
  return <NewSitePage lang="en" />;
}
