import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getSenseiBySlug } from "@/data/senseis/senseis";
import { i18n, Locale } from "@/data/i18n";
import { FiChevronLeft } from "react-icons/fi"

export async function generateMetadata(
    { params }: { params: Promise<{ locale: string; slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const sensei = getSenseiBySlug(slug);

    if (!sensei) {
        return {
            title: "Sensei no encontrado",
        };
    }

    const title = `${sensei.name} | Judo San Pedro`;
    const rawDescription =
        sensei.shortDescription || sensei.fullDescription;
    const description = rawDescription
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 160);

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "profile",
            images: [
                {
                    url: sensei.image,
                    width: 1200,
                    height: 630,
                    alt: sensei.name,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [sensei.image],
        },
    };
}

type Props = {
    params: Promise<{ locale: string; slug: string }>;
};

export default async function SenseiPage({ params }: Props) {
    const { locale, slug } = await params;
    const sensei = getSenseiBySlug(slug);

    if (!sensei) notFound();

    const t = i18n[locale as Locale];

    return (
        <article className="mx-auto w-full max-w-4xl px-4 sm:px-4">
            <Link
                href={`/${locale}/senseis`}
                className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-zinc-500 transition-colors hover:text-primary"
            >
                <FiChevronLeft className="h-4 w-4" />
                <span>Senseis</span>
            </Link>

            <div className="overflow-hidden md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.2fr)] md:gap-8 md:items-stretch">
                <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[600px] overflow-hidden rounded-lg bg-zinc-100">
                    {/* <span className="absolute left-4 top-4 z-10 rounded-full bg-zinc-900/90 px-3 py-1 text-xs font-medium text-zinc-100 backdrop-blur">
                        {sensei.badgeLabel}
                    </span> */}
                    <Image
                        src={sensei.image}
                        alt={sensei.name}
                        fill
                        className="object-cover object-top rounded-lg"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>
                <div className="h-full w-px bg-zinc-200 " aria-hidden />
                <div className="flex flex-col md:px-0">
                    <h1 className="mt-2 md:mt-0 mb-2 md:mb-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                        {sensei.name}
                    </h1>

                    {sensei.stats.length > 0 && (
                        <div className="mb-4 flex flex-wrap gap-x-2 gap-y-2 text-xs md:text-sm">
                            {sensei.stats.map((stat) => (
                                <span key={stat.label} className="border-primary border-2 rounded-full text-primary font-bold py-2 px-4">
                                    {stat.value} {stat.label.toLowerCase()}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="whitespace-normal md:whitespace-pre-line text-sm leading-relaxed text-zinc-600 sm:text-base">
                        {sensei.fullDescription}
                    </div>
                </div>
            </div>
        </article>
    );
}
