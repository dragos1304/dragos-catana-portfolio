import type { Metadata } from "next";
import { VerticalPage } from "@/components/VerticalPage";
import { alternates } from "@/lib/i18n";

const path = "/en/services/clinic-websites";
export const metadata: Metadata = {
  title: "Websites for clinics in Romania",
  description:
    "Websites for clinics and medical practices: fast, credible, with online booking, specialty pages and visibility on Google and in AI. Get a quote.",
  alternates: alternates(`${path}/`, "en"),
};

export default function Page() {
  return (
    <VerticalPage
      lang="en"
      path={path}
      crumb="Websites for clinics"
      eyebrow="Clinics and medical practices"
      h1="A website that earns patients' trust before their first visit."
      lead="Patients compare and read before they call. I build or rebuild your clinic's website so it feels calm, clear and easy to use, and so it's found on Google and recommended in AI assistants' answers."
      schemaName="Websites for clinics and medical practices"
      schemaDescription="Website design and redesign for clinics and medical practices, with local SEO and optimisation for AI engines."
      needs={[
        { t: "Who the doctors are", d: "Clear profiles with specialty and experience. People want to know who they're seeing." },
        { t: "What you offer and how to book", d: "Pages per specialty and a short path to booking, by phone or online." },
        { t: "Where and when", d: "Address, opening hours, parking, access and a map, visible from the first page and up to date everywhere." },
      ]}
      structure={[
        { t: "A home page built around booking", d: "What you treat, where you are and how to book, in a few seconds, on a phone." },
        { t: "Pages per specialty and service", d: "Each one answers patients' frequent questions, written by your specialist." },
        { t: "Pages for the doctors", d: "Profile, specialisations and structured data for each person (Physician), so search engines understand you." },
        { t: "Locations and contact", d: "Details identical to the clinic's Google profile, for local SEO and for AI assistants' trust." },
        { t: "Real reviews", d: "Only what really exists is shown. I don't invent or buy reviews." },
        { t: "Speed and accessibility", d: "A fast site on mobile that every patient can use, including people with poor eyesight." },
      ]}
      schemaTypes="MedicalClinic, Physician, Service, FAQPage, BreadcrumbList"
      caution={{
        title: "Medical data and communication rules",
        text: "Your doctor or clinic writes and approves the medical content; I make no medical promises on your behalf. Forms don't ask about conditions, only the details needed for an appointment, with consent for processing. Before launch, we check together the rules that apply to communication and advertising in your field.",
      }}
      faq={[
        { q: "Can patients book directly from the website?", a: "Yes. We can add a booking request form or connect the booking system you already use. We choose after a short call." },
        { q: "How does my clinic show up in ChatGPT or Gemini answers?", a: "Through clear, consistent information about the clinic, structured data, pages that answer patients' questions and real reviews. I can't guarantee a specific position, but we measure before and after and I show you the change." },
        { q: "Can I keep my current web address?", a: "Usually yes. If addresses change, we use 301 redirects so you don't lose your Google rankings." },
        { q: "How much does it cost?", a: "It depends on the number of pages and features. You get a clear offer after a short call. The first audit is free." },
      ]}
      ctaTitle="Want to see how your clinic shows up on Google and in AI today?"
    />
  );
}
