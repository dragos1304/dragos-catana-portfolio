import type { Metadata } from "next";
import { VerticalPage } from "@/components/VerticalPage";

const path = "/servicii/website-cabinete-avocatura";
export const metadata: Metadata = {
  title: "Site pentru avocați și cabinete de avocatură",
  description:
    "Site pentru avocați și cabinete de avocatură: sobru, rapid, cu pagini pe domenii de practică și vizibilitate în Google și în răspunsurile AI. Cere o ofertă.",
  alternates: { canonical: `${path}/` },
};

export default function Page() {
  return (
    <VerticalPage
      guides={["google-business-profile-ghid", "ce-este-seo", "ce-este-geo-optimizare-pentru-motoare-ai", "schema-markup-pentru-clinici-si-cabinete"]}
      path={path}
      crumb="Website pentru cabinete de avocatură"
      eyebrow="Cabinete de avocatură"
      h1="Un website sobru și clar, care îți aduce clienții potriviți."
      lead="Un client caută un specialist pentru o problemă concretă și alege după claritate și încredere. Construiesc sau refac site-ul cabinetului tău ca să explice simplu ce faci, să fie găsit în Google și să fie citat de asistenții AI."
      schemaName="Website pentru cabinete de avocatură"
      schemaDescription="Creare și redesign de website pentru avocați și cabinete de avocatură, cu SEO și optimizare pentru motoare AI."
      needs={[
        { t: "Dacă te ocupi de problema lor", d: "O pagină clară pe fiecare domeniu de practică, cu un limbaj pe înțelesul unui om care nu e jurist." },
        { t: "Cine sunt avocații", d: "Profiluri cu pregătire, domenii și modul de lucru. Încrederea se construiește prin transparență." },
        { t: "Cum încep", d: "Un drum scurt și discret spre o primă discuție: telefon, formular sau programare." },
      ]}
      structure={[
        { t: "Prima pagină orientată pe probleme", d: "Ce domenii acoperi și cum se ia legătura, fără jargon." },
        { t: "Pagină pentru fiecare domeniu de practică", d: "Răspunsuri la întrebările frecvente, scrise sau aprobate de avocat." },
        { t: "Pagini pentru avocați", d: "Profil, pregătire și date structurate pentru persoană (Attorney), ca motoarele să te înțeleagă." },
        { t: "Articole utile", d: "Ghiduri scurte pentru problemele comune ale clienților. Sunt cele mai citate de asistenții AI." },
        { t: "Contact discret", d: "Formular scurt, fără cerere de detalii despre dosar, și opțiune de programare a unei consultații." },
        { t: "Viteză și accesibilitate", d: "Site rapid pe mobil, cu date identice cu profilul Google al cabinetului." },
      ]}
      schemaTypes="LegalService, Attorney, Service, FAQPage, Article, BreadcrumbList"
      caution={{
        title: "Confidențialitate și reguli profesionale",
        text: "Formularele nu cer detalii despre caz: doar datele necesare unei prime discuții, cu consimțământ pentru prelucrare. Conținutul juridic îl scrii sau îl aprobi tu, iar eu nu fac promisiuni de rezultat în numele tău. Verificăm împreună regulile profesionale aplicabile comunicării și publicității înainte de lansare.",
      }}
      faq={[
        { q: "Pot apărea în răspunsurile ChatGPT când cineva caută un avocat?", a: "Pot crește șansele prin informații clare și consecvente, pagini pe domenii de practică, articole utile, date structurate și recenzii reale. Nu pot garanta o poziție anume, dar măsurăm înainte și după." },
        { q: "Cine scrie conținutul juridic?", a: "Tu sau echipa ta. Eu structurez, editez pentru claritate și optimizez pentru căutare, iar tu aprobi tot ce se publică." },
        { q: "Pot păstra adresele paginilor actuale?", a: "De obicei da. Dacă schimbăm adrese, folosim redirecturi 301 ca să nu pierzi poziții în Google." },
        { q: "Cât costă?", a: "Depinde de numărul de pagini și de funcționalități. Primești o ofertă clară după o discuție scurtă. Auditul inițial e gratuit." },
      ]}
      ctaTitle="Vrei să vezi cum apare cabinetul tău acum în Google și în AI?"
    />
  );
}
