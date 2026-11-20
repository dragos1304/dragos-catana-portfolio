import type { Metadata } from "next";
import { VerticalPage } from "@/components/VerticalPage";
import { alternates } from "@/lib/i18n";

const path = "/servicii/website-clinici-medicale";
export const metadata: Metadata = {
  title: "Site pentru clinici și cabinete medicale",
  description:
    "Site pentru clinici și cabinete medicale: rapid, credibil, cu programare online, pagini pe specialități și vizibilitate în Google și AI. Cere o ofertă.",
  alternates: alternates(`${path}/`, "ro"),
};

export default function Page() {
  return (
    <VerticalPage
      guides={["schema-markup-pentru-clinici-si-cabinete", "google-business-profile-ghid", "cum-verifici-daca-ai-iti-mentioneaza-afacerea", "ce-este-seo"]}
      path={path}
      crumb="Website pentru clinici medicale"
      eyebrow="Clinici și cabinete medicale"
      h1="Un website care inspiră încredere pacienților, înainte de prima vizită."
      lead="Pacienții compară și citesc înainte să sune. Construiesc sau refac site-ul clinicii tale ca să fie calm, clar și ușor de folosit, și ca să fie găsit în Google și recomandat în răspunsurile asistenților AI."
      schemaName="Website pentru clinici și cabinete medicale"
      schemaDescription="Creare și redesign de website pentru clinici și cabinete medicale, cu SEO local și optimizare pentru motoare AI."
      needs={[
        { t: "Cine sunt medicii", d: "Profiluri clare, cu specialitate și experiență. Oamenii vor să știe cui se adresează." },
        { t: "Ce servicii se oferă și cum programez", d: "Pagini pe specialități și un drum scurt spre programare, pe telefon sau online." },
        { t: "Unde și când", d: "Adresă, program, parcare, acces și hartă, vizibile din prima pagină și actualizate peste tot." },
      ]}
      structure={[
        { t: "Prima pagină orientată spre programare", d: "Ce tratezi, unde ești și cum programezi, în câteva secunde, pe telefon." },
        { t: "Pagini pe specialități și servicii", d: "Fiecare cu răspunsuri la întrebările frecvente ale pacienților, scrise de specialistul tău." },
        { t: "Pagini pentru medici", d: "Profil, specializări și date structurate pentru persoană (Physician), ca motoarele să te înțeleagă." },
        { t: "Locații și contact", d: "Date identice cu profilul Google al clinicii, pentru SEO local și pentru încrederea asistenților AI." },
        { t: "Recenzii reale", d: "Se afișează doar ce există cu adevărat. Nu inventez și nu cumpăr recenzii." },
        { t: "Viteză și accesibilitate", d: "Site rapid pe mobil și utilizabil de toți pacienții, inclusiv de cei cu dificultăți de vedere." },
      ]}
      schemaTypes="MedicalClinic, Physician, Service, FAQPage, BreadcrumbList"
      caution={{
        title: "Date medicale și reguli de comunicare",
        text: "Conținutul medical îl scrie și îl aprobă medicul sau clinica ta; eu nu fac promisiuni medicale în numele tău. Formularele nu cer detalii despre afecțiuni, ci doar datele necesare unei programări, cu consimțământ pentru prelucrare. Verificăm împreună regulile aplicabile comunicării și publicității în domeniul tău înainte de lansare.",
      }}
      faq={[
        { q: "Pot să primesc programări direct din site?", a: "Da. Putem adăuga un formular de cerere de programare sau o integrare cu un sistem de programări, în funcție de ce folosești deja. Stabilim soluția după o discuție scurtă." },
        { q: "Cum apare clinica mea în răspunsurile ChatGPT sau Gemini?", a: "Prin informații clare și consecvente despre clinică, date structurate, pagini care răspund la întrebările pacienților și recenzii reale. Nu pot garanta o poziție anume, dar măsurăm înainte și după și îți arăt schimbarea." },
        { q: "Pot păstra adresa actuală a site-ului?", a: "De obicei da. Dacă schimbăm adrese, folosim redirecturi 301 ca să nu pierzi poziții în Google." },
        { q: "Cât costă?", a: "Depinde de numărul de pagini și de funcționalități. Primești o ofertă clară după o discuție scurtă. Auditul inițial e gratuit." },
      ]}
      ctaTitle="Vrei să vezi cum apare clinica ta acum în Google și în AI?"
    />
  );
}
