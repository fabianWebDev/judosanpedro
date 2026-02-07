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
        <section id="about-senseis" className="w-full bg-zinc-100 md:mt-10 py-6">
            <div className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 ">
                <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-stretch">
                    <div className="w-fit shrink-0 mx-auto md:mx-0 max-w-[200px] md:max-w-none">
                        <div className="relative overflow-hidden">
                            <Image
                                src="/sensei_david.jpg"
                                alt="Sensei"
                                width={300}
                                height={300}
                                className="aspect-square object-cover object-top w-full rounded-lg grayscale-[75%] contrast-110 brightness-95"
                                sizes="(max-width: 768px) 200px, 300px"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:w-2/3">
                        <h1 className="text-4xl font-bold mb-2 sm:text-2xl md:mb-10 md:text-3xl text-center">
                            {t.aboutSenseis}
                        </h1>
                        <p className="text-zinc-600 mb-2 leading-relaxed text-center md:mb-4">
                            {t.aboutSenseisDescription}
                        </p>
                        <Link
                            href={`/${locale}/senseis`}
                            className="inline-flex items-center justify-center rounded-full px-8 py-2 text-primary font-bold border border-primary border-2 hover:bg-primary hover:text-white transition w-fit mx-auto"
                        >
                            {t.commom.moreInfo}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}