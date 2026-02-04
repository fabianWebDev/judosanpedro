import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getSenseiBySlug } from "@/data/senseis/senseis";
import { i18n, Locale } from "@/data/i18n";

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
    const [mainStat, ...secondaryStats] = sensei.stats;

    return (
        <article className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6">
            <Link
                href={`/${locale}/senseis`}
                className="mb-6 inline-flex text-sm font-medium text-zinc-600 underline-offset-2 hover:underline"
            >
                ← {t.senseis}
            </Link>

            <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-zinc-200/80">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 sm:aspect-video">
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-zinc-900/90 px-3 py-1 text-xs font-medium text-zinc-100 backdrop-blur">
                        {sensei.badgeLabel}
                    </span>
                    <Image
                        src={sensei.image}
                        alt={sensei.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, 672px"
                        priority
                    />
                </div>

                <div className="p-6 sm:p-8">
                    <h1 className="mb-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                        {sensei.name}
                    </h1>

                    {mainStat && (
                        <p className="mb-4 flex items-center gap-2 text-sm font-medium text-zinc-900">
                            <span className="text-base">🥋</span>
                            {mainStat.value} {mainStat.label.toLowerCase()}
                        </p>
                    )}

                    {secondaryStats.length > 0 && (
                        <div className="mb-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-600">
                            {secondaryStats.map((stat) => (
                                <span key={stat.label}>
                                    {stat.value} {stat.label.toLowerCase()}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="whitespace-pre-line text-sm leading-relaxed text-zinc-600 sm:text-base">
                        {sensei.fullDescription}
                    </div>
                </div>
            </div>
        </article>
    );
}
