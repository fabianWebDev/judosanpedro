import Image from "next/image";
import { i18n, Locale } from "@/data/i18n";
import HeroContent from "./HeroContent";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Hero({ params }: Props) {
    const { locale } = await params;
    const t = i18n[locale as Locale];

    return (
        <section className="relative w-full overflow-x-hidden bg-neutral-950">
            <div className="relative aspect-[21/9] min-h-[220px] w-full sm:aspect-[3/1] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] ">
                <Image
                    src="/hero.jpeg"
                    alt="Judo San Pedro - Dojo"
                    width={1400}
                    height={500}
                    className="h-full w-full object-cover object-center grayscale-[75%] contrast-110 brightness-95"
                    priority
                    sizes="100vw"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/50 to-neutral-950/20"
                    aria-hidden
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 lg:py-16">
                    <HeroContent heroText={t.heroText} />
                </div>
            </div>
        </section>
    );
}
