import Image from "next/image";
import Link from "next/link";

export default function SenseiCard({
    name,
    shortDescription,
    image,
    badgeLabel,
    stats,
    seeMoreLabel,
    slug,
    locale,
}: {
    name: string;
    shortDescription: string;
    image: string;
    badgeLabel: string;
    stats: { label: string; value: string }[];
    seeMoreLabel: string;
    slug: string;
    locale: string;
}) {
    const [mainStat, ...secondaryStats] = stats;

    return (
        <article className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-zinc-200/80 transition hover:shadow-xl hover:ring-zinc-300">

            {/* Imagen + Badge */}
            <div className="relative aspect-square w-full overflow-hidden bg-zinc-100">
                <span className="absolute left-3 top-3 z-10 rounded-full bg-zinc-900/90 px-3 py-1 text-xs font-medium text-zinc-100 backdrop-blur">
                    {badgeLabel}
                </span>

                <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                    className="object-cover object-top transition duration-300 hover:scale-105"
                />
            </div>

            {/* Texto */}
            <div className="p-5">
                <h2 className="mb-1 text-xl font-semibold tracking-tight text-zinc-900">
                    {name}
                </h2>

                {/* Stat principal */}
                {mainStat && (
                    <p className="mb-3 flex items-center gap-2 text-sm font-medium text-zinc-900">
                        <span className="text-base">🥋</span>
                        {mainStat.value} {mainStat.label.toLowerCase()}
                    </p>
                )}

                {/* Stats secundarios */}
                {secondaryStats.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-600">
                        {secondaryStats.map((stat) => (
                            <span key={stat.label}>
                                {stat.value} {stat.label.toLowerCase()}
                            </span>
                        ))}
                    </div>
                )}

                <p className="text-sm leading-relaxed text-zinc-600">
                    {shortDescription}
                </p>

                <Link
                    href={`/${locale}/senseis/${slug}`}
                    className="mt-3 inline-block text-sm font-medium text-zinc-900 underline underline-offset-2 hover:no-underline focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 rounded"
                >
                    {seeMoreLabel}
                </Link>
            </div>
        </article>
    );
}
