import Link from "next/link";
import { site } from "@/lib/site-config";
import { ui } from "@/lib/i18n";
import { href, nav, type Lang } from "@/lib/site-map";
import { CookieSettingsButton } from "./CookieBanner";

export function Footer({ lang }: { lang: Lang }) {
  const t = ui[lang];
  return (
    <footer className="bg-ink text-paper/80" aria-label={t.footerLabel}>
      <div className="mx-auto w-full max-w-6xl px-5 pt-16 sm:px-8">
        <p className="font-serif text-[2.6rem] font-extrabold leading-[0.95] text-paper sm:text-7xl">
          {t.footerLine1}<br />
          <span className="font-accent font-normal italic tracking-normal text-orange">{t.footerLine2}</span>
        </p>
      </div>
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl font-extrabold text-paper">{site.name}<span aria-hidden className="text-orange">.</span></p>
          <p className="mt-3 max-w-xs text-[15px] leading-relaxed">{t.footerAbout}</p>
          <p className="mt-3 text-[15px]">{t.footerWhere}</p>
        </div>
        <nav aria-label={t.footerNav}>
          <p className="text-sm font-semibold uppercase tracking-wider text-paper">{t.pages}</p>
          <ul className="mt-3 space-y-1 text-[15px]">
            {nav(lang).map((n) => (
              <li key={n.href}><Link href={n.href} className="inline-block py-1.5 hover:text-paper hover:underline">{n.label}</Link></li>
            ))}
            <li><Link href={href("audit", lang)} className="inline-block py-1.5 hover:text-paper hover:underline">{t.auditCta}</Link></li>
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-paper">{t.legal}</p>
          <ul className="mt-3 space-y-1 text-[15px]">
            <li><Link href={href("privacy")} hrefLang="ro" className="inline-block py-1.5 hover:text-paper hover:underline">{t.privacy}</Link></li>
            <li><Link href={href("cookies")} hrefLang="ro" className="inline-block py-1.5 hover:text-paper hover:underline">{t.cookiesPolicy}</Link></li>
            <li><Link href={href("terms")} hrefLang="ro" className="inline-block py-1.5 hover:text-paper hover:underline">{t.terms}</Link></li>
            <li><CookieSettingsButton label={t.cookieSettings} /></li>
            <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 hover:text-paper hover:underline">LinkedIn</a></li>
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
