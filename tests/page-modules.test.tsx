import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import type { ReactElement } from "react";
import { HomePage } from "@/components/pages/HomePage";
import { CaseStudyPage } from "@/components/pages/CaseStudyPage";
import { AboutPage } from "@/components/pages/AboutPage";
import { ContactPage, AuditPage } from "@/components/pages/LeadPages";
import { WorkPage, ServicesPage } from "@/components/pages/HubPages";
import { RedesignPage, NewSitePage, SeoPage, MaintenancePage } from "@/components/pages/ServicePages";
import { VerticalPage } from "@/components/pages/VerticalPages";
import type { Lang } from "@/lib/site-map";

const modules: Record<string, (lang: Lang) => ReactElement> = {
  home: (l) => <HomePage lang={l} />,
  caseStudy: (l) => <CaseStudyPage lang={l} />,
  about: (l) => <AboutPage lang={l} />,
  contact: (l) => <ContactPage lang={l} />,
  audit: (l) => <AuditPage lang={l} />,
  work: (l) => <WorkPage lang={l} />,
  services: (l) => <ServicesPage lang={l} />,
  redesign: (l) => <RedesignPage lang={l} />,
  newSite: (l) => <NewSitePage lang={l} />,
  seo: (l) => <SeoPage lang={l} />,
  maintenance: (l) => <MaintenancePage lang={l} />,
  clinics: (l) => <VerticalPage k="clinics" lang={l} />,
  lawFirms: (l) => <VerticalPage k="lawFirms" lang={l} />,
};

/** The page's tag skeleton, without text and without the Romanian-only article guides. */
function skeleton(html: string) {
  const noGuides = html.replace(/<section id="ghiduri"[\s\S]*?<\/section>/g, "").replace(/<p[^>]*>(?:(?!<\/p>)[\s\S])*?\/articole\/[\s\S]*?<\/p>/g, "");
  return (noGuides.match(/<\/?[a-z0-9]+/g) ?? []).join(" ");
}

describe("page modules", () => {
  for (const [name, render] of Object.entries(modules)) {
    it(`${name}: renders in both languages with the same layout and exactly one h1`, () => {
      const ro = renderToStaticMarkup(render("ro"));
      const en = renderToStaticMarkup(render("en"));
      expect(ro.match(/<h1/g)).toHaveLength(1);
      expect(en.match(/<h1/g)).toHaveLength(1);
      expect(skeleton(en)).toBe(skeleton(ro));
      expect(en).not.toMatch(/href="\/(servicii|lucrari|despre|contact|audit-gratuit)/);
    });
  }
});
