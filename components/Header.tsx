"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="font-serif text-xl font-semibold text-navy" onClick={() => setOpen(false)}>
          Dragoș Cătană
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-[15px] font-medium text-navy/80 hover:text-navy">
              {n.label}
            </Link>
          ))}
          <Link
            href="/audit-gratuit-vizibilitate-ai"
            className="rounded-full bg-brass px-5 py-2.5 text-[15px] font-semibold text-navy hover:bg-[#f59e0b]"
          >
            Audit gratuit AI
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Principal mobil" className="border-t border-line bg-white px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="block border-b border-line py-4 text-lg font-medium">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/audit-gratuit-vizibilitate-ai"
            onClick={() => setOpen(false)}
            className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-brass px-5 font-semibold text-navy"
          >
            Audit gratuit AI
          </Link>
        </nav>
      )}
    </header>
  );
}
