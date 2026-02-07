export const senseis = [
    {
        slug: "david-fernandez",
        name: "David Fernández",
        shortDescription: "David Fernández Tercero es un referente del judo costarricense. Representó a Costa Rica en los Juegos Olímpicos de Atenas 2004.",
        fullDescription: "David Fernández Tercero es un referente del judo costarricense. Representó a Costa Rica en los Juegos Olímpicos de Atenas 2004, donde además tuvo el honor de portar la bandera nacional durante la ceremonia de inauguración.\n\nEn el plano internacional ha competido en Copas del Mundo (La Habana, Budapest, París), Grand Prix y Campeonatos Panamericanos. Obtuvo medalla de bronce en los Juegos Panamericanos de Río 2007 y plata en el Abierto Panamericano de Miami 2006. A nivel regional es múltiple campeón centroamericano y ha sido nueve veces campeón nacional absoluto.\n\nCinturón negro 5º dan desde 2018, hoy dedica su experiencia a la formación de jóvenes judocas en el dojo.",
        image: "/sensei_david.jpg",
        badgeLabel: "Sensei Principal",
        stats: [
            { label: "Años de experiencia", value: "22" },
            { label: "Títulos nacionales", value: "9" },
            { label: "Medallas panamericanas", value: "2" },
        ],
    },
    {
        slug: "omar-vasconcelos",
        name: "Omar Vasconcelos",
        shortDescription: "Omar Vasconcelos es un judoka costarricense que ha sido campeón nacional en varias categorías.",
        fullDescription: "Omar Vasconcelos es un judoka costarricense que ha sido campeón nacional en varias categorías. Ha representado a Costa Rica en varios torneos internacionales y ha sido un referente para la juventud costarricense en el deporte.\n\nSu participación olímpica, respaldada por la Federación Internacional de Judo, refleja una trayectoria marcada por la disciplina, la perseverancia y el compromiso con la excelencia. Más allá del resultado competitivo, su presencia en el máximo escenario del deporte mundial representa el espíritu del judo: respeto, coraje y superación constante.\n\nHoy, su experiencia y legado inspiran a nuevas generaciones de judocas, transmitiendo no solo técnica, sino también los valores que hacen del judo un camino de formación integral.",
        image: "/sensei_david.jpg",
        badgeLabel: "Sensei Secundario",
        stats: [
            { label: "Años de experiencia", value: "10" },
            { label: "Títulos nacionales", value: "5" },
            { label: "Títulos internacionales", value: "3" },
        ],
    },
];

export type Sensei = {
    slug: string;
    name: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    badgeLabel: string;
    stats: { label: string; value: string }[];
};

export function getSenseiBySlug(slug: string): Sensei | undefined {
    return senseis.filter((s): s is Sensei => s != null && "slug" in s).find((s) => s.slug === slug);
}