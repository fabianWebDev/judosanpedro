"use client";

import { motion } from "framer-motion";
import { GiBlackBelt, GiStrong, GiThreeFriends } from "react-icons/gi";

const icons = {
    disciplina: GiBlackBelt,
    confianza: GiStrong,
    comunidad: GiThreeFriends,
};

const cardKeys = ["disciplina", "confianza", "comunidad"] as const;

type CardData = {
    title: string;
    description: string;
};

type Cards = {
    disciplina: CardData;
    confianza: CardData;
    comunidad: CardData;
};

type Props = {
    title: string;
    cards: Cards;
};

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, x: -24 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" as const },
    },
};

export default function WhyJudoCards({ title, cards }: Props) {
    return (
        <section
            id="why-judo"
            className="w-full max-w-7xl mx-auto px-4 py-6 mt-3 sm:px-6 sm:py-8 md:px-8 md:py-10 md:mt-10"
        >
            <h2 className="text-4xl font-bold mb-2 md:mb-10 text-center">{title}</h2>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
            >
                {cardKeys.map((key) => {
                    const Icon = icons[key];
                    const card = cards[key];

                    return (
                        <motion.article
                            key={key}
                            className="px-4 py-2"
                            variants={item}
                        >
                            <motion.div
                                className="mb-2 md:mb-4 flex justify-center"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <Icon className="w-8 h-8 text-primary mx-auto" />
                            </motion.div>

                            <h3 className="text-xl font-semibold text-foreground mb-2 md:mb-3 text-center">
                                {card.title}
                            </h3>

                            <p className="text-zinc-600 leading-relaxed flex-1 text-center">
                                {card.description}
                            </p>
                        </motion.article>
                    );
                })}
            </motion.div>
        </section>
    );
}
