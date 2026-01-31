import Link from "next/link";
import { i18n, Locale } from "@/data/i18n";

type Props = {
  locale: Locale;
};

export default function Navbar({ locale }: Props) {
  const t = i18n[locale];

  return (
    <nav className="flex justify-center items-center gap-4 p-4 bg-zinc-100 dark:bg-zinc-900">
      <Link href={`/${locale}`} className="text-zinc-900 dark:text-zinc-100">{t.home}</Link>
      <Link href={`/${locale}/about`} className="text-zinc-900 dark:text-zinc-100">{t.about}</Link>
      <Link href={`/${locale}/senseis`} className="text-zinc-900 dark:text-zinc-100">{t.senseis}</Link>
      <Link href={`/${locale}#horarios`} className="text-zinc-900 dark:text-zinc-100">{t.horarios}</Link>
      <Link href={`/${locale}#ubicacion`} className="text-zinc-900 dark:text-zinc-100">{t.ubicacion}</Link>
    </nav>
  );
}