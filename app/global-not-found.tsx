import type { Metadata } from "next";
import "./globals.css";
import { fontClasses } from "@/lib/fonts";
import { Button, Section } from "@/components/ui";

export const metadata: Metadata = { title: "Pagina nu a fost găsită · Page not found", robots: { index: false } };

/** One 404 for both languages (the site has two root layouts: Romanian and /en/). */
export default function GlobalNotFound() {
  return (
    <html lang="ro" className={fontClasses}>
      <body>
        <main id="continut">
          <Section>
            <h1 className="font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">Pagina nu există (sau s-a mutat).</h1>
            <p className="mt-4 max-w-xl text-lg text-slate-ink">Verifică adresa sau pornește de la prima pagină.</p>
            <p lang="en" className="mt-6 max-w-xl text-lg text-slate-ink">This page doesn&apos;t exist (or has moved). Start from the home page.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/">Înapoi acasă</Button>
              <Button href="/en/" variant="ghost">English home</Button>
            </div>
          </Section>
        </main>
      </body>
    </html>
  );
}
