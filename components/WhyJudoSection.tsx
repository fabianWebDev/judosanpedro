import { i18n, Locale } from "@/data/i18n";
import { GiBlackBelt, GiStrong, GiThreeFriends } from "react-icons/gi";

const icons = {
    disciplina: GiBlackBelt,
    confianza: GiStrong,
    comunidad: GiThreeFriends,
};

type Props = {
    params: Promise<{ locale: string }>;
};

const cardKeys = ["disciplina", "confianza", "comunidad"] as const;

export default async function WhyJudoSection({ params }: Props) {
    const { locale } = await params;
    const t = i18n[locale as Locale];
    const cards = t.whyJudoCards;

    return (
        <section
            id="why-judo"
            className="w-full max-w-7xl mx-auto px-4 py-6 mt-3 sm:px-6 sm:py-8 md:px-8 md:py-10 md:mt-10"
        >
            <h2 className="text-4xl font-bold mb-2 md:mb-10 text-center">{t.whyJudo}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
                {cardKeys.map((key) => {
                    const Icon = icons[key];

                    return (
                        <article
                            key={key}
                            className="px-4 py-2"
                        >
                            <div className="mb-4">
                                <Icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110 mx-auto mb-4" />
                            </div>

                            <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                                {cards[key].title}
                            </h3>

                            <p className="text-zinc-600 leading-relaxed flex-1 text-center">
                                {cards[key].description}
                            </p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}