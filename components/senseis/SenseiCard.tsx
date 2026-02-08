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
    return (
        <article className="group relative w-full max-w-sm overflow-hidden rounded-2xl shadow-lg transition">
            {/* Foto a pantalla completa */}
            <div className="relative aspect-3/4 w-full overflow-hidden bg-zinc-100">
                <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                    className="transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 200px, 300px"
                />

                <div
                    className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-4 pt-16 bg-gradient-to-t from-black/100 via-black/80 to-transparent"
                    aria-hidden
                >
                    <h2 className="mb-1 text-xl font-semibold tracking-tight text-white line-clamp-1">
                        {name}
                    </h2>
                    <span className="mb-2 inline-flex w-fit rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-white ">
                        {badgeLabel}
                    </span>
                    <p className="line-clamp-3 text-sm leading-relaxed text-zinc-200 ">
                        {shortDescription}
                    </p>
                    <Link
                        href={`/${locale}/senseis/${slug}`}
                        className="mt-2 md:mt-3 py-2 rounded-full bg-primary text-center text-md font-medium text-white transition hover:opacity-80 focus:outline-none"
                    >
                        {seeMoreLabel}
                    </Link>
                </div>
            </div>
        </article>
    );
}
