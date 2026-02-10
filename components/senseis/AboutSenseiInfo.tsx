"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
    title: string;
    description: string;
    linkLabel: string;
    locale: string;
};

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" as const },
    },
};

export default function AboutSenseiInfo({
    title,
    description,
    linkLabel,
    locale,
}: Props) {
    return (
        <motion.div
            className="flex flex-col md:w-2/3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.h1
                variants={item}
                className="text-5xl font-serif font-bold mb-4 md:mb-6 text-center tracking-tight md:tracking-normal"
            >
                {title}
            </motion.h1>
            <motion.p
                variants={item}
                className="text-zinc-600 mb-2 leading-relaxed text-center md:mb-4"
            >
                {description}
            </motion.p>
            <motion.div variants={item} className="flex justify-center">
                <Link
                    href={`/${locale}/senseis`}
                    className="inline-flex items-center justify-center rounded-full px-8 py-2 text-primary font-bold border border-primary border-2 hover:bg-primary hover:text-white transition w-fit"
                >
                    {linkLabel}
                </Link>
            </motion.div>
        </motion.div>
    );
}
