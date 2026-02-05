"use client";

import { useState } from "react";

type Bloque = {
    hora: string;
    grupo: string;
    nivel: string;
    instructor: string;
};

type Props = {
    dia: string;
    bloques: Bloque[];
};

export function HorarioDia({ dia, bloques }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <section className="border-l-2 border-stone-800 bg-stone-50/50 overflow-hidden">
            {/* Header — una línea, mínimo esfuerzo */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center py-3 px-4 sm:px-5 text-left hover:bg-stone-100/80 transition-colors duration-150"
                aria-expanded={open}
            >
                <span className="font-medium text-stone-800 tracking-wide">{dia}</span>
                <span
                    className={`text-stone-500 text-sm transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    aria-hidden
                >
                    ▼
                </span>
            </button>

            {/* Contenido — solo lo esencial */}
            {open && (
                <div className="border-t border-stone-200/80">
                    {bloques.map((bloque, i) => (
                        <div
                            key={i}
                            className="py-3 px-4 sm:px-5 grid grid-cols-3 gap-4 text-sm border-b border-stone-200/60 last:border-b-0"
                        >
                            <span className="text-stone-600 tabular-nums">{bloque.hora}</span>
                            <span className="text-stone-700">{bloque.grupo}</span>
                            <span className="text-stone-600">{bloque.nivel}</span>
                            <span className="text-stone-600">{bloque.instructor}</span>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
