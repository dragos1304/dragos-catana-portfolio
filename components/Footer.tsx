import Link from "next/link";
import { site, nav } from "@/lib/site-config";
import { CookieSettingsButton } from "./CookieBanner";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80" aria-label="Subsol site">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl font-semibold text-white">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">{site.tagline}. Pentru clinici, cabinete de avocatură și afaceri locale din România.</p>
          <p className="mt-3 text-sm">{site.city}, România · răspuns în {site.responseTime}</p>
        </div>
        <nav aria-label="Subsol">
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Pagini</p>
          <ul className="mt-3 space-y-1 text-sm">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="inline-block py-1.5 hover:text-white">{n.label}</Link></li>
            ))}
            <li><Link href="/audit-gratuit-vizibilitate-ai" className="inline-block py-1.5 hover:text-white">Audit gratuit AI</Link></li>
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Legal și contact</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><Link href="/confidentialitate" className="inline-block py-1.5 hover:text-white">Politica de confidențialitate</Link></li>
            <li><Link href="/cookie" className="inline-block py-1.5 hover:text-white">Politica de cookie-uri</Link></li>
            <li><Link href="/termeni" className="inline-block py-1.5 hover:text-white">Termeni și condiții</Link></li>
            <li><CookieSettingsButton /></li>
            <li><a href={site.calendly} target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 hover:text-white">Programează o discuție</a></li>
            <li><a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 hover:text-white">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {site.legalName}
      </div>
    </footer>
  );
}
