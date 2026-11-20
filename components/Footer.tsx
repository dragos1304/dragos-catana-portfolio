import Link from "next/link";
import { brand, site, social } from "@/lib/site-config";
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
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, SVG logo */}
          <img src={brand.wordmarkWhite.src} width={brand.wordmarkWhite.width} height={brand.wordmarkWhite.height} alt={site.name} className="h-10 w-auto" />
          <p className="mt-3 max-w-xs text-[15px] leading-relaxed">{t.footerAbout}</p>
          <p className="mt-3 text-[15px]">{t.footerWhere}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={t.socialLabel}>
            {Object.values(social).map((s) => (
              <li key={s.name}>
                <a href={s.url} target="_blank" rel="me noopener noreferrer"
                  className="inline-flex min-h-10 items-center rounded-full border border-paper/25 px-4 text-sm font-semibold text-paper hover:border-orange hover:text-orange">{s.name}</a>
              </li>
            ))}
          </ul>
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
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 py-5 text-center text-sm text-paper/60">
        © {new Date().getFullYear()} {site.legalName}
      </div>
    </footer>
  );
}
