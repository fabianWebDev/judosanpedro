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
        <section className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-zinc-200/50 sm:rounded-3xl">
                <div className="relative aspect-[21/9] min-h-[200px] sm:aspect-[3/1] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px]">

                    {/* Image */}
                    <Image
                        src="/hero.jpeg"
                        alt="Judo San Pedro - Dojo"
                        width={1200}
                        height={400}
                        className="h-full w-full object-cover object-center"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />

                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
                        aria-hidden
                    />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-end justify-center p-6 sm:p-8 md:p-10 lg:p-12">
                        <div className="max-w-xl rounded-2xl px-6 py-5 text-center shadow-lg">
                            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                                Judo San Pedro
                            </h1>

                            <p className="mt-2 text-sm font-medium text-zinc-200 sm:text-base md:text-lg">
                                {t.heroText}
                            </p>

                            <Link
                                href={`/${locale}/about`}
                                className="mt-4 inline-block rounded-full border border-white/80 px-6 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                            >
                                Sobre nosotros
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
