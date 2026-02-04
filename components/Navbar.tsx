"use client";

import { useState } from "react";
import Link from "next/link";
import { i18n, Locale } from "@/data/i18n";

type Props = {
  locale: Locale;
};

export default function Navbar({ locale }: Props) {
  const t = i18n[locale];
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: t.home },
    { href: `/${locale}/about`, label: t.about },
    { href: `/${locale}/senseis`, label: t.senseis },
    { href: `/${locale}#horarios`, label: t.horarios },
    { href: `/${locale}#ubicacion`, label: t.ubicacion },
  ];

  return (
    <nav className="bg-zinc-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <span className="font-semibold text-zinc-900">Judo San Pedro</span>

        <div className="hidden md:flex gap-6">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-900 hover:text-zinc-600 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-900"
          aria-label="Abrir menú"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-zinc-100">
          <div className="flex flex-col p-4 gap-4">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-zinc-900 hover:text-zinc-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
