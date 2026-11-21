import type { Metadata } from "next";
import { seo } from "@/lib/meta";
import { LegalPage } from "@/components/LegalPage";
import { faqsRo } from "@/lib/faqs";

export const metadata: Metadata = seo({
  title: "Politica de cookie-uri",
  description: "Ce cookie-uri folosește dragoscatana.com: doar statistici Google Analytics, numai cu acordul tău, fără publicitate. Cum îți schimbi alegerea oricând.",
  lang: "ro",
  canonical: "/cookie/",
});

export default function Page() {
  return (
    <LegalPage title="Politica de cookie-uri" faq={faqsRo.cookies}>
      <p>Acest site folosește cât mai puține cookie-uri. Statisticile sunt pornite doar dacă ești de acord, iar alegerea ta poate fi schimbată oricând din linkul „Setări cookie-uri” din subsol.</p>
      <h2>Necesare</h2>
      <p>Site-ul reține în browser (stocare locală) alegerea ta privind cookie-urile, ca să nu te întrebe la fiecare vizită. Nu conține date personale și nu este folosită în scop publicitar.</p>
      <h2>Statistici (doar cu acordul tău)</h2>
      <p>Folosesc Google Tag Manager și Google Analytics 4 pentru a înțelege ce pagini sunt vizitate și cum ajung oamenii la formulare. Dacă accepți, Google poate seta cookie-uri precum <code>_ga</code> și <code>_ga_*</code>. Dacă refuzi, Analytics nu stochează date de identificare în browser.</p>
      <h2>Harta Google (doar dacă o afișezi)</h2>
      <p>Pe pagina de contact, harta Google Maps se încarcă numai după ce apeși „Afișează harta”. Abia atunci Google poate seta propriile cookie-uri, conform politicii sale. Dacă nu afișezi harta, nu se încarcă nimic de la Google Maps.</p>
      <h2>Publicitate</h2>
      <p>Nu folosesc cookie-uri de publicitate sau de urmărire pentru reclame. Semnalele de consimțământ pentru publicitate sunt setate pe „refuzat”.</p>
      <h2>Cum îți schimbi alegerea</h2>
      <p>Folosește linkul „Setări cookie-uri” din subsolul site-ului, sau șterge datele site-ului din setările browserului.</p>
    </LegalPage>
  );
}
