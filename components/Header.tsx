"use client";
import Link from "next/link";
import { useRef } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site-config";

export function Header() {
  // The mobile menu is a native <details>, so it opens without JavaScript.
  // JS only closes it after a client-side navigation.
  const menu = useRef<HTMLDetailsElement>(null);
  const close = () => { if (menu.current) menu.current.open = false; };
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="font-serif text-xl font-extrabold text-ink" onClick={close}>
          Dragoș Cătană<span aria-hidden className="text-orange">.</span>
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-[15px] font-medium text-ink/80 underline-offset-4 hover:text-ink hover:underline">
              {n.label}
            </Link>
          ))}
          <Link
            href="/audit-gratuit-vizibilitate-ai"
            className="rounded-full bg-ink px-5 py-2.5 text-[15px] font-semibold text-paper transition-colors hover:bg-orange hover:text-ink"
          >
            Audit gratuit AI
          </Link>
        </nav>
        <details ref={menu} className="group md:hidden">
          <summary
            className="menu-toggle inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full"
            aria-label="Meniu"
          >
            <Menu className="group-open:hidden" aria-hidden />
            <X className="hidden group-open:block" aria-hidden />
          </summary>
          <nav
            aria-label="Principal mobil"
            className="absolute inset-x-0 top-16 hidden border-y border-line bg-paper px-5 pb-6 pt-2 shadow-lg group-open:block"
          >
            <ul className="flex flex-col">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} onClick={close} className="block border-b border-line py-4 text-lg font-medium">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/audit-gratuit-vizibilitate-ai"
              onClick={close}
              className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-ink px-5 font-semibold text-paper"
            >
              Audit gratuit AI
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
