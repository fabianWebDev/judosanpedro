import Image from "next/image";
import AboutSenseiInfo from "./AboutSenseiInfo";
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
                    <AboutSenseiInfo
                        title={t.ourSenseisTitle}
                        description={t.aboutSenseisDescription}
                        linkLabel={t.commom.moreInfo}
                        locale={locale}
                    />
                </div>
            </div>
        </section>
    );
}