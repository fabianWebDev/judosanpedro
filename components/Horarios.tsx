"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock, FiUsers, FiBarChart2, FiUser } from "react-icons/fi";
import { horarios } from "@/data/horarios/horarios";

export default function Horarios() {
    const [diaActivo, setDiaActivo] = useState(horarios[0].dia);

    const dia = horarios.find(d => d.dia === diaActivo);

    if (!dia) return null;

    return (
        <main
            id="horarios"
            className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10"
        >
            <h1 className="text-4xl font-bold mb-4">Horarios</h1>

            <div className="flex gap-2 overflow-x-auto pb-2 mb-2 ">
                {horarios.map(d => (
                    <button
                        key={d.dia}
                        onClick={() => setDiaActivo(d.dia)}
                        className={`
              px-8 py-2 rounded-sm whitespace-nowrap text-md font-medium
              transition cursor-pointer
              ${diaActivo === d.dia
                                ? "bg-zinc-900 text-white"
                                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                            }
            `}
                    >
                        {d.dia}
                    </button>
                ))}
            </div>

            <section className="space-y-4">
                <AnimatePresence mode="wait">
                    <motion.section
                        key={diaActivo}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        {dia.bloques.map((bloque, i) => (
                            <article
                                key={i}
                                className="border border-zinc-200 rounded-sm p-4 grid gap-2 sm:grid-cols-4 "
                            >
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <FiClock className="text-zinc-500 shrink-0" size={16} aria-hidden />
                                        <span className="text-md font-light text-zinc-500">Horario</span>
                                    </div>
                                    <span className="block font-semibold mt-0.5">{bloque.hora}</span>
                                </div>

                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <FiUsers className="text-zinc-500 shrink-0" size={16} aria-hidden />
                                        <span className="text-md font-light text-zinc-500">Grupo</span>
                                    </div>
                                    <span className="block font-semibold mt-0.5">{bloque.grupo}</span>
                                </div>

                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <FiBarChart2 className="text-zinc-500 shrink-0" size={16} aria-hidden />
                                        <span className="text-md font-light text-zinc-500">Nivel</span>
                                    </div>
                                    <span className="block font-semibold mt-0.5">{bloque.nivel}</span>
                                </div>
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <FiUser className="text-zinc-500 shrink-0" size={16} aria-hidden />
                                        <span className="text-md font-light text-zinc-500">Instructor</span>
                                    </div>
                                    <span className="block font-semibold mt-0.5">{bloque.instructor}</span>
                                </div>
                            </article>
                        ))}
                    </motion.section>
                </AnimatePresence>
            </section>
        </main>
    );
}
