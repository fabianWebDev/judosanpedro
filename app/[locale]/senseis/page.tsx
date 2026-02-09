import { i18n, Locale } from "@/data/i18n";
import SenseiCard from "@/components/senseis/SenseiCard";
import { senseis } from "@/data/senseis/senseis";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Senseis({ params }: Props) {
    const { locale } = await params;
    const t = i18n[locale as Locale];

    return (
        <>
            <div className="w-full max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-4 md:mb-10 md:mt-4">{t.ourSenseisTitle}</h1>
                <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 sm:justify-items-start md:gap-6 lg:grid-cols-3">
                    {senseis.filter((s): s is NonNullable<typeof s> & { slug: string } => s != null && "slug" in s).map((sensei, index) => (
                        <SenseiCard
                            key={sensei.slug}
                            name={sensei.name}
                            shortDescription={sensei.shortDescription}
                            image={sensei.image}
                            badgeLabel={sensei.badgeLabel}
                            stats={sensei.stats}
                            seeMoreLabel={t.commom?.seeMore ?? ""}
                            slug={sensei.slug}
                            locale={locale}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}