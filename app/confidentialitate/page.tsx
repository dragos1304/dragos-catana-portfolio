import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: "Cum sunt folosite datele personale transmise prin formularele de pe dragoscatana.com.",
  alternates: { canonical: "/confidentialitate" },
};

export default function Page() {
  return (
    <LegalPage title="Politica de confidențialitate">
      <p>Această politică explică ce date personale colectez prin acest site, de ce și ce drepturi ai, conform Regulamentului (UE) 2016/679 (GDPR).</p>
      <h2>Cine este operatorul datelor</h2>
      <p>{site.legalName}, {site.city}, România. Pentru orice solicitare legată de datele tale, folosește <Link href="/contact">formularul de contact</Link> și menționează că e vorba de date personale.</p>
      <h2>Ce date colectez și de ce</h2>
      <ul>
        <li><strong>Formularul de audit gratuit:</strong> nume, email, adresa site-ului, tipul afacerii, orașul, eventualii concurenți. Scop: să realizez auditul și să ți-l trimit.</li>
        <li><strong>Formularul de contact:</strong> nume, email, adresa site-ului (opțional), tipul nevoii și mesajul. Scop: să-ți răspund și să-ți pregătesc o ofertă.</li>
        <li><strong>Programarea unei discuții:</strong> se face prin Calendly, care își prelucrează propriile date conform politicii sale.</li>
        <li><strong>Statistici de utilizare:</strong> doar dacă ești de acord prin bannerul de cookie-uri. Detalii în <Link href="/cookie">politica de cookie-uri</Link>.</li>
      </ul>
      <h2>Temeiul legal</h2>
      <p>Consimțământul tău (bifat în formular) și, după caz, demersurile premergătoare unui contract, la cererea ta. Pentru statistici, temeiul este consimțământul exprimat prin banner.</p>
      <h2>Cine mai are acces la date</h2>
      <p>Folosesc servicii care prelucrează date în numele meu: Netlify (găzduire și primirea formularelor), Calendly (programări) și, doar cu consimțământul tău, Google (Tag Manager și Analytics). Nu vând și nu închiriez datele tale. Unii dintre acești furnizori pot prelucra date și în afara Spațiului Economic European; în acest caz se aplică garanțiile prevăzute de GDPR.</p>
      <h2>Cât păstrez datele</h2>
      <p>Cât este necesar pentru a-ți răspunde și, dacă lucrăm împreună, pe durata colaborării și a obligațiilor legale aplicabile. Poți cere oricând ștergerea datelor.</p>
      <h2>Drepturile tale</h2>
      <p>Ai dreptul de acces, rectificare, ștergere, restricționare, portabilitate și opoziție, precum și dreptul de a-ți retrage consimțământul în orice moment. Ai și dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).</p>
      <h2>Modificări</h2>
      <p>Pot actualiza această politică. Data ultimei actualizări apare la începutul paginii.</p>
    </LegalPage>
  );
}
