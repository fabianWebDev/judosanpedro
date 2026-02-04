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
            <div className="p-2 md:p-4">
                <h2 className="mb-1 text-xl font-semibold tracking-tight text-zinc-900 line-clamp-1">
                    {name}
                </h2>

                <p className="line-clamp-2 text-sm leading-relaxed text-zinc-600">
                    {shortDescription}
                </p>

                <Link
                    href={`/${locale}/senseis/${slug}`}
                    className="
                                mt-4 inline-flex w-full items-center justify-center
                                rounded-xl bg-zinc-900 px-4 py-2
                                text-sm font-medium text-white
                                transition
                                hover:bg-zinc-800
                                focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2
                                text-center"
                >
                    {seeMoreLabel}
                </Link>
            </div>
        </article>
    );
}
