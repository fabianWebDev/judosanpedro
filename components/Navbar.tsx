"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n, Locale } from "@/data/i18n";
import Image from "next/image";

type Props = {
  locale: Locale;
};

export default function Navbar({ locale }: Props) {
  const t = i18n[locale];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: t.home },
    { href: `/${locale}/about`, label: t.about },
    { href: `/${locale}/senseis`, label: t.senseis },
    { href: `/${locale}#horarios`, label: t.horarios },
    { href: `/${locale}#ubicacion`, label: t.ubicacion },
  ];

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    return pathname === href;
  };

  return (
    <nav className="bg-zinc-100 border-b border-zinc-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Judo San Pedro"
            width={56}
            height={56}
            priority
          />
          <span className="text-zinc-900 font-semibold text-lg tracking-tight">
            Judo San Pedro
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8">
          {links.map(link => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative text-sm font-semibold tracking-wide
                  transition-colors
                  ${active
                    ? "text-zinc-900"
                    : "text-zinc-600 hover:text-zinc-900"
                  }
                `}
              >
                {link.label}

                {active && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-zinc-900 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile button */}
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-zinc-100">
          <div className="flex flex-col p-4 gap-4">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-zinc-800 font-semibold"
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
