import { horarios } from "@/data/horarios/horarios";

export default function Horarios() {
    return (
        <main id="horarios" className="w-full max-w-5xl mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
            <h1 className="text-3xl font-bold mb-6">Horarios</h1>

            <div className="overflow-x-auto">
                <table className="w-full border border-zinc-200">
                    <thead className="bg-zinc-100">
                        <tr>
                            <th className="p-3 text-left">Día</th>
                            <th className="p-3 text-left">Horario</th>
                            <th className="p-3 text-left">Grupo</th>
                            <th className="p-3 text-left">Nivel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {horarios.map((dia) =>
                            dia.bloques.map((bloque, i) => (
                                <tr key={`${dia.dia}-${i}`} className="border-t border-zinc-200">
                                    <td className="p-3 font-medium">
                                        {i === 0 ? dia.dia : ""}
                                    </td>
                                    <td className="p-3">{bloque.hora}</td>
                                    <td className="p-3">{bloque.grupo}</td>
                                    <td className="p-3">{bloque.nivel}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    )
}