import Link from "next/link";
import { i18n, Locale } from "@/data/i18n";

type Props = {
  locale: Locale;
};

export default function Navbar({ locale }: Props) {
  const t = i18n[locale];

  return (
    <nav>
      <Link href={`/${locale}`}>{t.home}</Link>
      <Link href={`/${locale}/about`}>{t.about}</Link>
      <Link href={`/${locale}/senseis`}>{t.senseis}</Link>
    </nav>
  );
}