import { Button, Section } from "@/components/ui";

export const metadata = { title: "Pagina nu a fost găsită", robots: { index: false }, alternates: { canonical: null } };

export default function NotFound() {
  return (
    <Section>
      <h1 className="font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">Pagina nu există (sau s-a mutat).</h1>
      <p className="mt-4 max-w-xl text-lg text-slate-ink">Verifică adresa sau pornește de la prima pagină.</p>
      <div className="mt-8"><Button href="/">Înapoi acasă</Button></div>
    </Section>
  );
}
