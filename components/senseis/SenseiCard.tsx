import Image from "next/image";
import SenseiCardInfo from "./SenseiCardInfo";

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
        <article className="group relative w-full max-w-sm overflow-hidden rounded-2xl shadow-md transition">
            <div className="relative aspect-3/4 w-full overflow-hidden bg-zinc-100">
                <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                    className="transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 200px, 300px"
                />

                <SenseiCardInfo
                    name={name}
                    badgeLabel={badgeLabel}
                    shortDescription={shortDescription}
                    seeMoreLabel={seeMoreLabel}
                    slug={slug}
                    locale={locale}
                />
            </div>
        </article>
    );
}
