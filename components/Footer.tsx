import Link from "next/link";
import { site, nav } from "@/lib/site-config";
import { CookieSettingsButton } from "./CookieBanner";

export function Footer() {
  return (
    <footer className="bg-ink text-paper/80" aria-label="Subsol site">
      <div className="mx-auto w-full max-w-6xl px-5 pt-16 sm:px-8">
        <p className="font-serif text-[2.6rem] font-extrabold leading-[0.95] text-paper sm:text-7xl">
          Hai să te facem<br />
          <span className="font-accent font-normal italic tracking-normal text-orange">ușor de găsit.</span>
        </p>
      </div>
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl font-extrabold text-paper">{site.name}<span aria-hidden className="text-orange">.</span></p>
          <p className="mt-3 max-w-xs text-[15px] leading-relaxed">{site.tagline}. Pentru clinici, cabinete de avocatură și afaceri locale din România.</p>
          <p className="mt-3 text-[15px]">{site.city}, România · răspuns în {site.responseTime}</p>
        </div>
        <nav aria-label="Subsol">
          <p className="text-sm font-semibold uppercase tracking-wider text-paper">Pagini</p>
          <ul className="mt-3 space-y-1 text-[15px]">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="inline-block py-1.5 hover:text-paper hover:underline">{n.label}</Link></li>
            ))}
            <li><Link href="/audit-gratuit-vizibilitate-ai" className="inline-block py-1.5 hover:text-paper hover:underline">Audit gratuit AI</Link></li>
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-paper">Legal și contact</p>
          <ul className="mt-3 space-y-1 text-[15px]">
            <li><Link href="/confidentialitate" className="inline-block py-1.5 hover:text-paper hover:underline">Politica de confidențialitate</Link></li>
            <li><Link href="/cookie" className="inline-block py-1.5 hover:text-paper hover:underline">Politica de cookie-uri</Link></li>
            <li><Link href="/termeni" className="inline-block py-1.5 hover:text-paper hover:underline">Termeni și condiții</Link></li>
            <li><CookieSettingsButton /></li>
            <li><a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 hover:text-paper hover:underline">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 py-5 text-center text-sm text-paper/60">
        © {new Date().getFullYear()} {site.legalName}
      </div>
    </footer>
  );
}
