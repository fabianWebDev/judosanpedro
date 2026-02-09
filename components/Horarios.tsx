"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock, FiUsers, FiBarChart2, FiUser } from "react-icons/fi";
import { horarios } from "@/data/horarios/horarios";
import Link from "next/link";

export default function Horarios() {
    const [diaActivo, setDiaActivo] = useState(horarios[0].dia);

    const dia = horarios.find(d => d.dia === diaActivo);
    const phone = "50662819536";
    const message = "Hola, me gustaría más información sobre las clases de judo.";

    if (!dia) return null;

    return (
        <main
            id="horarios"
            className="w-full max-w-7xl mx-auto px-4 py-6 mt-3 sm:px-6 sm:py-8 md:px-8 md:py-10 md:mt-10"
        >
            <h1 className="text-4xl font-bold mb-2 md:mb-4">Horarios</h1>
            <p className="text-zinc-600 mb-2 md:mb-4 text-sm md:text-base">
                Contamos con clases todos los días de la semana y con distintos niveles, para que puedas entrenar a tu ritmo y según tu experiencia. No todos los niveles se imparten todos los días, lo que nos permite mantener grupos equilibrados y una enseñanza más personalizada.
            </p>
            <hr className="h-px my-2 md:my-6 bg-zinc-200 border-0" />
            <div className="flex gap-2 overflow-x-auto pb-2 mb-2 ">
                {horarios.map(d => (
                    <button
                        key={d.dia}
                        onClick={() => setDiaActivo(d.dia)}
                        className={`
              px-8 py-2 rounded-full whitespace-nowrap text-md 
              transition cursor-pointer 
              ${diaActivo === d.dia
                                ? "bg-primary text-white"
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
                                className="border border-primary rounded-xl md:rounded-full p-4 grid gap-2 sm:grid-cols-4 shadow-md"
                            >
                                <div className="flex flex-col gap-1 md:items-center">
                                    <div className="flex items-baseline gap-2">
                                        <FiClock className="text-primary shrink-0" size={16} aria-hidden />
                                        <span className="text-md font-light text-primary">Horario</span>
                                    </div>
                                    <span className="block font-semibold mt-0.5">{bloque.hora}</span>
                                </div>

                                <div className="flex flex-col gap-1 md:items-center">
                                    <div className="flex items-baseline gap-2">
                                        <FiUsers className="text-primary shrink-0" size={16} aria-hidden />
                                        <span className="text-md font-light text-primary">Grupo</span>
                                    </div>
                                    <span className="block font-semibold mt-0.5">{bloque.grupo}</span>
                                </div>

                                <div className="flex flex-col gap-1 md:items-center">
                                    <div className="flex items-baseline gap-2">
                                        <FiBarChart2 className="text-primary shrink-0" size={16} aria-hidden />
                                        <span className="text-md font-light text-primary">Nivel</span>
                                    </div>
                                    <span className="block font-semibold mt-0.5">{bloque.nivel}</span>
                                </div>
                                <div className="flex flex-col gap-1 md:items-center">
                                    <div className="flex items-baseline gap-2">
                                        <FiUser className="text-primary shrink-0" size={16} aria-hidden />
                                        <span className="text-md font-light text-primary">Instructor</span>
                                    </div>
                                    <span className="block font-semibold mt-0.5">{bloque.instructor}</span>
                                </div>
                            </article>
                        ))}
                    </motion.section>
                </AnimatePresence>
            </section>
            <p className="text-zinc-600 mt-2 md:mt-4 text-xs">
                Los horarios son sugeridos, y pueden ser modificados según la disponibilidad de los alumnos.
                <br />
                Si tienes alguna pregunta, no dudes en&nbsp;
                <Link href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    contactarnos
                </Link>.
                <br />
            </p>
        </main>
    );
}
