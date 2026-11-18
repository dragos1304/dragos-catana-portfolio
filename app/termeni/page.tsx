import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description: "Termenii de utilizare ai site-ului dragoscatana.com.",
  alternates: { canonical: "/termeni" },
};

export default function Page() {
  return (
    <LegalPage title="Termeni și condiții">
      <h2>Scopul site-ului</h2>
      <p>Acest site prezintă serviciile oferite de {site.legalName} (web design, SEO și optimizare pentru motoare AI) și permite solicitarea unui audit sau a unei oferte. Informațiile au caracter general.</p>
      <h2>Fără garanții de rezultat</h2>
      <p>Pozițiile în Google și mențiunile în răspunsurile asistenților AI depind de factori care nu pot fi controlați și pot varia în timp. Articolele și serviciile descrise nu garantează o anumită poziție sau recomandare.</p>
      <h2>Oferte și servicii</h2>
      <p>Serviciile se prestează pe baza unei oferte personalizate, acceptate de ambele părți. Auditul gratuit nu creează obligația de a comanda alte servicii.</p>
      <h2>Conținut și drepturi de autor</h2>
      <p>Conținutul acestui site (texte, design, cod) aparține autorului, dacă nu este indicat altfel. Nu poate fi copiat sau republicat fără acordul scris. Numele și materialele altor companii sunt folosite cu acordul acestora.</p>
      <h2>Linkuri externe</h2>
      <p>Site-ul poate conține linkuri către site-uri terțe. Nu răspund de conținutul sau politicile acestora.</p>
      <h2>Legea aplicabilă</h2>
      <p>Se aplică legea română.</p>
    </LegalPage>
  );
}
