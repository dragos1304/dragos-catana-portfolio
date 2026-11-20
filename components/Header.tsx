"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { Menu, X } from "lucide-react";
import { otherLangPath, ui, type Lang } from "@/lib/i18n";

export function Header({ lang }: { lang: Lang }) {
  // The mobile menu is a native <details>, so it opens without JavaScript.
  // JS only closes it after a client-side navigation.
  const menu = useRef<HTMLDetailsElement>(null);
  const close = () => { if (menu.current) menu.current.open = false; };
  const t = ui[lang];
  const path = usePathname() ?? "/";
  const other: Lang = lang === "ro" ? "en" : "ro";
  const switchHref = otherLangPath(path, lang);
  const Switch = ({ big = false }: { big?: boolean }) => (
    <a href={switchHref} hrefLang={other} lang={other} onClick={close}
      aria-label={t.switchLabel}
      className={big
        ? "mt-3 flex min-h-12 items-center justify-center rounded-full border-2 border-ink px-5 font-semibold text-ink"
        : "inline-flex min-h-10 items-center rounded-full border-2 border-ink/20 px-3 text-sm font-bold text-ink hover:border-ink"}>
      {big ? t.switchLabel : t.switchShort}
    </a>
  );
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href={t.home} className="font-serif text-xl font-extrabold text-ink" onClick={close}>
          Dragoș Cătană<span aria-hidden className="text-orange">.</span>
        </Link>
        <nav aria-label={t.navLabel} className="hidden items-center gap-7 md:flex">
          {t.nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-[15px] font-medium text-ink/80 underline-offset-4 hover:text-ink hover:underline">
              {n.label}
            </Link>
          ))}
          <Switch />
          <Link
            href={t.auditHref}
            className="rounded-full bg-ink px-5 py-2.5 text-[15px] font-semibold text-paper transition-colors hover:bg-orange hover:text-ink"
          >
            {t.auditCta}
          </Link>
        </nav>
        <details ref={menu} className="group md:hidden">
          <summary
            className="menu-toggle inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full"
            aria-label={t.menu}
          >
            <Menu className="group-open:hidden" aria-hidden />
            <X className="hidden group-open:block" aria-hidden />
          </summary>
          <nav
            aria-label={t.navMobileLabel}
            className="absolute inset-x-0 top-16 hidden border-y border-line bg-paper px-5 pb-6 pt-2 shadow-lg group-open:block"
          >
            <ul className="flex flex-col">
              {t.nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} onClick={close} className="block border-b border-line py-4 text-lg font-medium">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={t.auditHref}
              onClick={close}
              className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-ink px-5 font-semibold text-paper"
            >
              {t.auditCta}
            </Link>
            <Switch big />
          </nav>
        </details>
      </div>
    </header>
  );
}
