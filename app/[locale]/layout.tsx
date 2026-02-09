import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import { Locale, locales } from "@/data/i18n";
import MainFrame from "@/components/layout/MainFrame";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://judosanpedro.com";

export const metadata: Metadata = {
  title: {
    default: "Judo San Pedro - Dojo de Judo Tradicional en Costa Rica",
    template: "%s | Judo San Pedro",
  },
  description:
    "Clases de judo para niños y adultos en Costa Rica. Disciplina, respeto y comunidad.",
  authors: [{ name: "Judo San Pedro" }],
  openGraph: {
    title: "Judo San Pedro",
    description: "Judo San Pedro - Dojo de Judo Tradicional en Costa Rica.",
    url: baseUrl,
    siteName: "Judo San Pedro",
    images: [
      {
        url: `${baseUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Judo San Pedro",
      },
    ],
    locale: "es_CR",
    type: "website",
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      es: `${baseUrl}/es`,
      en: `${baseUrl}/en`,
    },
  },
};

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