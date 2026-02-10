import type { Metadata } from "next";
import { i18n, Locale, locales } from "@/data/i18n";
import SenseiCard from "@/components/senseis/SenseiCard";
import { senseis } from "@/data/senseis/senseis";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://judosanpedro.com";

interface MetadataProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
    const { locale: rawLocale } = await params;
    const locale = locales.includes(rawLocale as Locale) ? (rawLocale as Locale) : "es";

    const t = i18n[locale];
    const title = `${t.ourSenseisTitle}`;
    const description = t.aboutSenseisDescription;
    const canonicalPath = `/${locale}/senseis`;
    const canonicalUrl = `${baseUrl}${canonicalPath}`;

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
            languages: {
                es: `${baseUrl}/es/senseis`,
                en: `${baseUrl}/en/senseis`,
            },
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: "Judo San Pedro",
            images: [
                {
                    url: `${baseUrl}/og-senseis.jpg`,
                    width: 1200,
                    height: 630,
                    alt: t.ogSenseisAlt,
                },
            ],
            locale: locale === "es" ? "es_CR" : "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [`${baseUrl}/og-senseis.jpg`],
        },
    };
}

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Senseis({ params }: Props) {
    const { locale } = await params;
    const t = i18n[locale as Locale];

    return (
        <>
            <div className="w-full max-w-7xl mx-auto px-4 mt-4">
                <h1 className="text-5xl font-serif font-bold mb-4 md:mb-6 text-center tracking-tight md:tracking-normal">{t.ourSenseisTitle}</h1>
                <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 sm:justify-items-start md:gap-6 lg:grid-cols-3">
                    {senseis.filter((s): s is NonNullable<typeof s> & { slug: string } => s != null && "slug" in s).map((sensei, index) => (
                        <SenseiCard
                            key={sensei.slug}
                            name={sensei.name}
                            shortDescription={sensei.shortDescription}
                            image={sensei.image}
                            badgeLabel={sensei.badgeLabel}
                            stats={sensei.stats}
                            seeMoreLabel={t.commom?.seeMore ?? ""}
                            slug={sensei.slug}
                            locale={locale}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}