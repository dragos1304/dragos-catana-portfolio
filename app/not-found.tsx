import { Button, Section, H2 } from "@/components/ui";

export const metadata = { title: "Pagina nu a fost găsită", robots: { index: false } };

export default function NotFound() {
  return (
    <Section>
      <H2>Pagina nu există (sau s-a mutat).</H2>
      <p className="mt-4 max-w-xl text-lg text-slate-ink">Verifică adresa sau pornește de la prima pagină.</p>
      <div className="mt-8"><Button href="/">Înapoi acasă</Button></div>
    </Section>
  );
}
