import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Button, CtaBand, Eyebrow, FAQ, H2, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, serviceSchema } from "@/lib/schema";

const path = "/servicii/redesign-website";
export const metadata: Metadata = {
  title: "Redesign de website fără să pierzi pozițiile din Google",
  description:
    "Redesign modern pentru clinici, cabinete și afaceri locale: design nou, viteză, migrare sigură cu redirecturi 301 și conținut pregătit pentru AI. Cere o ofertă.",
  alternates: { canonical: `${path}/` },
};

const faq = [
  { q: "Voi pierde pozițiile din Google după redesign?", a: "Nu, dacă migrarea e făcută corect. Păstrez adresele care aduc trafic sau le redirecționez cu 301 către paginile noi, verific titlurile și conținutul important și urmăresc indexarea după lansare." },
  { q: "Cât durează un redesign?", a: "Depinde de numărul de pagini și de conținut. Îți dau un calendar concret în ofertă, după ce văd site-ul actual și ce vrei să schimbi." },
  { q: "Pot edita singur site-ul după aceea?", a: "Da. Alegem împreună soluția: un site în cod cu pagini ușor de actualizat sau Webflow, dacă vrei să editezi vizual. Îți arăt cum se face la predare." },
  { q: "Site-ul meu actual e pe WordPress. Se poate?", a: "Da. Multe site-uri din România sunt pe WordPress. Mut conținutul și adresele importante pe noua platformă, fără să pierzi ce funcționează." },
  { q: "Cât costă?", a: "Nu afișez prețuri fixe, pentru că fiecare site e diferit. Primești o ofertă clară după o discuție scurtă." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: "Acasă", path: "/" }, { name: "Servicii", path: "/servicii" }, { name: "Redesign de website", path }]),
        serviceSchema("Redesign de website", "Redesign modern de website, cu migrare sigură și conținut pregătit pentru motoare AI.", path)]} />
      <Section id="redesign-de-website">
        <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: "Servicii", href: "/servicii" }, { name: "Redesign de website" }]} />
        <Eyebrow>Redesign de website</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-medium leading-[1.05] sm:text-6xl">
          Redesign de website pentru felul în care caută oamenii (și AI-ul) astăzi.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-ink">
          Un site vechi te costă încredere și clienți. Îl refac modern, rapid și clar, fără să pierzi ce ai câștigat deja în Google.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact">Cere o ofertă</Button>
          <Button href="/audit-gratuit-vizibilitate-ai" variant="ghost">Audit gratuit AI</Button>
        </div>
      </Section>

      <Section id="semne-ca-site-ul" tint>
        <H2>Semne că site-ul tău e depășit</H2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {["Nu arată bine pe telefon", "Se încarcă greu", "Nu e clar ce oferi sau cum te contactează cineva", "Designul pare vechi", "E greu de actualizat", "Nu are date structurate pentru Google și AI", "Nu respectă bazele accesibilității"].map((t) => (
            <li key={t} className="flex gap-3 rounded-md border border-line bg-white p-4"><span aria-hidden className="text-brass-dark">✓</span>{t}</li>
          ))}
        </ul>
        <p className="mt-6 text-slate-ink">Mai multe detalii în articolul <Link className="font-semibold text-brass-dark underline underline-offset-4" href="/articole/10-semne-ca-site-ul-tau-este-depasit">10 semne că site-ul tău e depășit</Link>.</p>
      </Section>

      <Section id="ce-include">
        <H2>Ce include</H2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            ["Audit de UX și de conținut", "Văd ce funcționează, ce nu și ce caută de fapt vizitatorii."],
            ["Design nou", "Coerent, calm și credibil, potrivit domeniului tău."],
            ["Reconstruire modernă", "Rapid, responsive, accesibil, cu cod curat."],
            ["Conținut pregătit pentru AI", "Pagini cu răspunsuri clare la întrebările clienților și date structurate."],
            ["Migrare sigură", "Redirecturi 301, verificarea titlurilor și monitorizare după lansare."],
            ["Predare și instruire", "Știi cum actualizezi site-ul și cui te adresezi dacă ai nevoie de ajutor."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-md border border-line p-6"><h3 className="font-serif text-xl font-semibold">{t}</h3><p className="mt-2 text-slate-ink leading-relaxed">{d}</p></div>
          ))}
        </div>
      </Section>

      <Section id="fara-pierderi-seo" tint>
        <H2>Redesign fără să-ți pierzi SEO-ul</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-ink">
          Cea mai mare teamă la un redesign e că pozițiile din Google dispar. Se întâmplă de obicei când adresele se schimbă fără redirecturi sau când conținutul care aducea trafic dispare.
          Fac un inventar al paginilor importante înainte, le mapez pe cele noi și verific totul după lansare.
        </p>
        <p className="mt-4"><Link className="font-semibold text-brass-dark underline underline-offset-4" href="/articole/redesign-site-fara-sa-pierzi-pozitiile-din-google">Citește ghidul complet →</Link></p>
      </Section>

      <Section id="un-exemplu-real">
        <H2>Un exemplu real</H2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-ink">
          Am refăcut site-ul Cheesy Media, o agenție foto-video din Cluj-Napoca: de la o singură pagină lungă la un site cu pagini dedicate, pachete, FAQ și scor 100 în Lighthouse.
        </p>
        <div className="mt-6"><Button href="/lucrari/cheesy-media" variant="ghost">Vezi înainte și după</Button></div>
      </Section>

      <Section id="intrebari" tint><FAQ items={faq} /></Section>
      <CtaBand title="Vrei să vezi ce se poate schimba la site-ul tău?" text="Începe cu un audit gratuit: îți spun ce ar aduce cel mai mult impact, fără obligații." />
    </>
  );
}
