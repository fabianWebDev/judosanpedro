import "./globals.css";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import { Locale, locales } from "@/data/i18n";
import MainFrame from "@/components/layout/MainFrame";

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
    <html lang={locale} className="scroll-smooth light" suppressHydrationWarning>
      <body>
        <Navbar locale={locale as Locale} />
        <MainFrame>
          {children}
        </MainFrame>
      </body>
    </html>
  );
}