import Link from "next/link";
import Image from "next/image";
import { i18n, Locale } from "@/data/i18n";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function AboutSenseis({ params }: Props) {
    const { locale } = await params;
    const t = i18n[locale as Locale];

    return (
        <section id="about-senseis" className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
                <div className="w-fit shrink-0">
                    <div className="relative overflow-hidden">
                        <Image
                            src="/sensei_david.jpg"
                            alt="Sensei"
                            width={300}
                            height={300}
                            className="aspect-square object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 300px"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:w-2/3">
                    <h1 className="text-2xl font-bold mb-3 sm:text-3xl sm:mb-4 md:text-4xl text-center">
                        {t.aboutSenseis}
                    </h1>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-5 leading-relaxed text-center">
                        {t.aboutSenseisDescription}
                    </p>
                    <Link
                        href={`/${locale}/senseis`}
                        className="inline-flex items-center justify-center rounded-md px-4 py-2 bg-zinc-900 text-zinc-100 hover:opacity-90 transition w-fit mx-auto"
                    >
                        {t.commom.moreInfo}
                    </Link>
                </div>
            </div>
        </section>
    );
}