import Link from "next/link";
import { i18n, Locale } from "@/data/i18n";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function AboutSenseis({ params }: Props) {
    const { locale } = await params;
    const t = i18n[locale as Locale];

    return (
        <section id="about-senseis" className="w-full max-w-5xl mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
            <h1 className="text-2xl font-bold mb-3 sm:text-3xl sm:mb-4 md:text-4xl">
                {t.aboutSenseis}
            </h1>
            <Link
                href={`/${locale}/senseis`}
                className="inline-flex items-center justify-center
             rounded-md px-4 py-2
             bg-zinc-900 text-zinc-100
             hover:opacity-90 transition"
            >
                {t.commom.moreInfo}
            </Link>
        </section>
    )
}