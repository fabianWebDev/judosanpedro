import "./globals.css";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import { Locale, locales } from "@/data/i18n";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <Navbar locale={locale as Locale} />
        {children}
      </body>
    </html>
  );
}