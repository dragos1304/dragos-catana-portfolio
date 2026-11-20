import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Button, CtaBand, Eyebrow, FAQ, H2, Section } from "@/components/ui";
import { Guides } from "@/components/Guides";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site-config";
import { alternates } from "@/lib/site-map";

const path = "/servicii/mentenanta-site";
export const metadata: Metadata = {
  title: "Mentenanță site pentru afaceri locale",
  description:
    "Mentenanță site pentru clinici, cabinete și afaceri locale: actualizări, backup, securitate, verificări lunare și modificări de conținut. Cere o ofertă.",
  alternates: alternates("maintenance", "ro"),
};

const includes = [
  ["Actualizări", "Platforma, temele și modulele (de exemplu WordPress) sau dependențele unui site în cod, testate înainte, ca nimic să nu se strice."],
  ["Backup", "Copii de siguranță regulate, păstrate separat de site, ca să poți reveni oricând la o versiune care funcționa."],
  ["Securitate", "HTTPS valid, acces doar pentru cine trebuie și verificarea problemelor raportate de Google."],
  ["Verificare lunară", "Viteza pe mobil, formularele de contact și programare, linkurile stricate și indexarea în Google Search Console."],
  ["Modificări mici de conținut", "Program, prețuri orientative, echipă, texte și imagini noi. Îmi trimiți ce s-a schimbat, eu actualizez."],
  ["Raport scurt, în limbaj simplu", "Ce am verificat, ce am reparat și ce îți recomand mai departe. Opțional, și testul lunar al vizibilității în asistenții AI."],
];

const faq = [
  { q: "Ce înseamnă mentenanța unui site?", a: "Grija de după lansare: actualizări, backup, securitate și verificări regulate, ca site-ul să rămână rapid, sigur și corect. Un site lăsat nesupravegheat se strică încet: module vechi, formulare care nu mai trimit, pagini lente." },
  { q: "Faceți mentenanță și pentru site-uri pe care nu le-ați construit voi?", a: "Da, după o verificare inițială. Mă uit la platformă, la găzduire și la starea site-ului și îți spun cinstit ce se poate întreține și ce ar trebui reparat întâi." },
  { q: "Lucrați cu WordPress?", a: "Da. Multe site-uri din România sunt pe WordPress, iar acolo actualizările și backup-ul contează cel mai mult. Întrețin și site-uri în cod (Next.js), Webflow sau Shopify." },
  { q: "Cât de repede răspundeți dacă e o problemă?", a: `Răspund la orice mesaj în maximum ${site.responseTime}. Pentru probleme urgente stabilim în ofertă cum mă contactezi.` },
  { q: "Cât costă mentenanța?", a: "Depinde de platformă, de mărimea site-ului și de cât de des se schimbă conținutul. Nu afișez prețuri fixe: primești o ofertă clară după o discuție scurtă." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: "Acasă", path: "/" }, { name: "Servicii", path: "/servicii" }, { name: "Mentenanță site", path }]),
        serviceSchema("Mentenanță site", "Mentenanță site: actualizări, backup, securitate, verificări lunare și modificări de conținut pentru afaceri locale.", path)]} />
      <Section id="mentenanta-site">
        <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: "Servicii", href: "/servicii" }, { name: "Mentenanță site" }]} />
        <Eyebrow>Mentenanță site</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">
          Mentenanță site: rapid, sigur și la zi, <em className="font-accent font-normal tracking-normal text-orange-ink">fără grija ta.</em>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">
          Un site nu se termină la lansare. Am grijă de actualizări, backup și verificări lunare, iar tu îmi trimiți doar ce vrei să schimbi.
          Pentru clinici, cabinete de avocatură și afaceri locale din România.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" arrow>Cere o ofertă</Button>
          <Button href="/audit-gratuit-vizibilitate-ai" variant="ghost">Audit gratuit al site-ului</Button>
        </div>
      </Section>

      <Section id="ce-include" tint>
        <H2>Ce include mentenanța</H2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {includes.map(([t, d]) => (
            <div key={t} className="rounded-3xl border-2 border-ink bg-canvas p-6">
              <h3 className="font-serif text-xl font-extrabold">{t}</h3>
              <p className="mt-2 text-[17px] leading-relaxed text-slate-ink">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="de-ce-conteaza">
        <H2>De ce contează mentenanța site-ului</H2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-ink">
          <p>Cele mai multe probleme pe care le văd la site-urile locale nu vin dintr-un design prost, ci din lipsa de îngrijire: un formular de programare care nu mai trimite e-mailuri de luni de zile, module neactualizate, certificate expirate sau pagini care s-au încetinit în timp.</p>
          <p>Mentenanța regulată le prinde devreme, înainte să coste programări, clienți sau poziții în Google. Și păstrează site-ul pregătit pentru felul în care caută oamenii acum, inclusiv în asistenții AI.</p>
          <p>Dacă site-ul are deja probleme mari, încep cu o reparație sau, când merită, cu un <Link className="font-semibold text-brass-dark underline underline-offset-4" href="/servicii/redesign-website">redesign</Link>. Dacă abia îți faci site, mentenanța poate continua direct după <Link className="font-semibold text-brass-dark underline underline-offset-4" href="/servicii/creare-website">crearea site-ului</Link>.</p>
        </div>
      </Section>

      <Section id="ghiduri" tint><Guides slugs={["10-semne-ca-site-ul-tau-este-depasit", "ce-este-seo", "google-business-profile-ghid", "redesign-site-fara-sa-pierzi-pozitiile-din-google"]} /></Section>
      <Section id="intrebari"><FAQ items={faq} /></Section>
      <CtaBand title="Vrei să ai grijă de site fără să-ți bați capul?" text="Începe cu o verificare gratuită: îți spun în ce stare e site-ul și ce ar trebui făcut întâi." />
    </>
  );
}
