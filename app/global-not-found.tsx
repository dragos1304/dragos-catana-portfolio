import type { Metadata } from "next";
import { brand, site } from "@/lib/site-config";
import "./globals.css";
import { fontClasses } from "@/lib/fonts";
import { Button, Section } from "@/components/ui";

export const metadata: Metadata = { title: "Pagina nu a fost găsită · Page not found", robots: { index: false }, icons: brand.icons, description: "Pagina căutată nu există. This page does not exist." };

/** One 404 for both languages (the site has two root layouts: Romanian and /en/). */
export default function GlobalNotFound() {
  return (
    <html lang="ro" className={fontClasses}>
      <body>
        <main id="continut">
          <Section>
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, SVG logo */}
            <a href="/" className="mb-10 inline-block"><img src={brand.wordmark.src} width={brand.wordmark.width} height={brand.wordmark.height} alt={site.name} className="h-10 w-auto" /></a>
            <h1 className="font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">Pagina nu există (sau s-a mutat).</h1>
            <p className="mt-4 max-w-xl text-lg text-muted">Verifică adresa sau pornește de la prima pagină.</p>
            <p lang="en" className="mt-6 max-w-xl text-lg text-muted">This page doesn&apos;t exist (or has moved). Start from the home page.</p>
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
