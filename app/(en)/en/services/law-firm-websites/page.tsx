import type { Metadata } from "next";
import { VerticalPage } from "@/components/VerticalPage";
import { alternates } from "@/lib/site-map";

const path = "/en/services/law-firm-websites";
export const metadata: Metadata = {
  title: "Websites for law firms and lawyers in Romania",
  description:
    "Websites for law firms: practice-area pages, lawyer profiles, useful articles and discreet contact, built to be found on Google and cited by AI. Get a quote.",
  alternates: alternates("lawFirms", "en"),
};

export default function Page() {
  return (
    <VerticalPage
      lang="en"
      path={path}
      crumb="Websites for law firms"
      eyebrow="Law firms"
      h1="A sober, clear website that brings you the right clients."
      lead="A client looks for a specialist for one specific problem and chooses on clarity and trust. I build or rebuild your firm's website so it explains simply what you do, gets found on Google and gets cited by AI assistants."
      schemaName="Websites for law firms"
      schemaDescription="Website design and redesign for lawyers and law firms, with SEO and optimisation for AI engines."
      needs={[
        { t: "Whether you handle their problem", d: "A clear page for each practice area, in words a non-lawyer understands." },
        { t: "Who the lawyers are", d: "Profiles with background, practice areas and how you work. Trust comes from transparency." },
        { t: "How to start", d: "A short, discreet path to a first conversation: phone, form or booking." },
      ]}
      structure={[
        { t: "A home page built around problems", d: "Which areas you cover and how to get in touch, without jargon." },
        { t: "A page for every practice area", d: "Answers to frequent questions, written or approved by the lawyer." },
        { t: "Pages for the lawyers", d: "Profile, background and structured data for each person (Attorney), so search engines understand you." },
        { t: "Useful articles", d: "Short guides to clients' common problems. These are what AI assistants quote most." },
        { t: "Discreet contact", d: "A short form that doesn't ask about the case, and an option to book a consultation." },
        { t: "Speed and accessibility", d: "A fast site on mobile, with details identical to the firm's Google profile." },
      ]}
      schemaTypes="LegalService, Attorney, Service, FAQPage, Article, BreadcrumbList"
      caution={{
        title: "Confidentiality and professional rules",
        text: "Forms don't ask about the case: only the details needed for a first conversation, with consent for processing. You write or approve the legal content, and I make no promises of results on your behalf. Before launch, we check together the professional rules that apply to communication and advertising.",
      }}
      faq={[
        { q: "Can I appear in ChatGPT answers when someone looks for a lawyer?", a: "I can raise your chances with clear, consistent information, practice-area pages, useful articles, structured data and real reviews. I can't guarantee a specific position, but we measure before and after." },
        { q: "Who writes the legal content?", a: "You or your team. I structure it, edit it for clarity and optimise it for search, and you approve everything that's published." },
        { q: "Can I keep my current page addresses?", a: "Usually yes. If addresses change, we use 301 redirects so you don't lose your Google rankings." },
        { q: "How much does it cost?", a: "It depends on the number of pages and features. You get a clear offer after a short call. The first audit is free." },
      ]}
      ctaTitle="Want to see how your firm shows up on Google and in AI today?"
    />
  );
}
