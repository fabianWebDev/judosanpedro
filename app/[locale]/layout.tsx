import type { Metadata } from "next";
import { Inter, Playfair_Display  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import { Locale, locales } from "@/data/i18n";
import MainFrame from "@/components/layout/MainFrame";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair-display",
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
};

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
    <html lang={locale} className={`scroll-smooth`} suppressHydrationWarning>
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        <Navbar locale={locale as Locale} />
        <MainFrame>
          {children}
        </MainFrame>
        <Footer locale={locale as Locale} />
        <WhatsAppButton />
      </body>
    </html>
  );
}