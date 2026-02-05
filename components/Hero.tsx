import Image from "next/image";
import Link from "next/link";
import { i18n, Locale } from "@/data/i18n";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Hero({ params }: Props) {
    const { locale } = await params;
    const t = i18n[locale as Locale];

    return (
        <section className="relative w-full overflow-x-hidden bg-neutral-950">
            <div className="relative aspect-[21/9] min-h-[280px] w-full sm:aspect-[3/1] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px]">
                <Image
                    src="/hero.jpeg"
                    alt="Judo San Pedro - Dojo"
                    width={1400}
                    height={500}
                    className="h-full w-full object-cover object-center"
                    priority
                    sizes="100vw"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/50 to-neutral-950/20"
                    aria-hidden
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 lg:py-16">
                    <div className="flex w-[calc(100vw-2rem)] max-w-2xl flex-1 flex-col items-center justify-center text-center sm:w-full sm:px-10 md:px-12 lg:px-16">
                        <h1 className="font-serif text-2xl font-light leading-tight tracking-[0.08em] text-white sm:text-5xl sm:tracking-[0.2em] md:text-6xl lg:text-7xl">
                            Judo San Pedro
                        </h1>
                        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-neutral-300 sm:text-base md:text-lg">
                            {t.heroText}
                        </p>
                        <Link
                            href={`/${locale}/about`}
                            className="mt-8 inline-flex items-center justify-center rounded-sm border border-neutral-500/60 bg-transparent px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-neutral-200 transition hover:border-amber-600/80 hover:bg-amber-950/30 hover:text-white sm:text-sm sm:tracking-[0.15em]"
                        >
                            Sobre nosotros
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
