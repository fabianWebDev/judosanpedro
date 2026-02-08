"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
    name: string;
    badgeLabel: string;
    shortDescription: string;
    seeMoreLabel: string;
    slug: string;
    locale: string;
};

export default function SenseiCardInfo({
    name,
    badgeLabel,
    shortDescription,
    seeMoreLabel,
    slug,
    locale,
}: Props) {
    return (
        <motion.div
            className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-4 pt-16 bg-gradient-to-t from-black/100 via-black/80 to-transparent"
            aria-hidden
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
        </motion.div>
    );
}
