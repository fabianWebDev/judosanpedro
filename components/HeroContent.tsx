"use client";

import { motion } from "framer-motion";

type Props = {
    heroText: string;
};

export default function HeroContent({ heroText }: Props) {
    return (
        <div className="flex w-[calc(100vw-2rem)] max-w-2xl flex-1 flex-col items-center justify-center text-center sm:w-full sm:px-10 md:px-12 lg:px-16">
            <motion.h1
                className="font-serif text-4xl font-semibold leading-tight tracking-[0.08em] text-white whitespace-nowrap sm:text-5xl sm:tracking-[0.2em] md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                Judo San Pedro
            </motion.h1>
            <motion.p
                className="font-serif mx-auto mt-2 max-w-md text-lg leading-relaxed text-neutral-300 md:text-4xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
                {heroText}
            </motion.p>
        </div>
    );
}
