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
            { label: "Títulos internacionales", value: "2" },
            { label: "Grado", value: "6º Dan" },
        ],
    },
    {
        slug: "toshihiko-koga",
        name: "Toshihiko Koga",
        shortDescription: "Toshihiko Koga es un judoka japonés que ha sido campeón nacional en varias categorías.",
        fullDescription: "Toshihiko Koga es un judoka japonés que ha sido campeón nacional en varias categorías. Ha representado a Japón en varios torneos internacionales y ha sido un referente para la juventud japonesa en el deporte.\n\nSu participación olímpica, respaldada por la Federación Internacional de Judo, refleja una trayectoria marcada por la disciplina, la perseverancia y el compromiso con la excelencia. Más allá del resultado competitivo, su presencia en el máximo escenario del deporte mundial representa el espíritu del judo: respeto, coraje y superación constante.\n\nHoy, su experiencia y legado inspiran a nuevas generaciones de judocas, transmitiendo no solo técnica, sino también los valores que hacen del judo un camino de formación integral.",
        image: "/koga.png",
        badgeLabel: "Sensei Secundario",
        stats: [
            { label: "Años de experiencia", value: "10" },
            { label: "Títulos nacionales", value: "5" },
            { label: "Títulos internacionales", value: "3" },
            { label: "Grado", value: "4º Dan" }
        ],
    },
    {
        slug: "teddy-riner",
        name: "Teddy Riner",
        shortDescription: "Omar Vasconcelos es un judoka costarricense que ha sido campeón nacional en varias categorías.",
        fullDescription: "Omar Vasconcelos es un judoka costarricense que ha sido campeón nacional en varias categorías. Ha representado a Costa Rica en varios torneos internacionales y ha sido un referente para la juventud costarricense en el deporte.\n\nSu participación olímpica, respaldada por la Federación Internacional de Judo, refleja una trayectoria marcada por la disciplina, la perseverancia y el compromiso con la excelencia. Más allá del resultado competitivo, su presencia en el máximo escenario del deporte mundial representa el espíritu del judo: respeto, coraje y superación constante.\n\nHoy, su experiencia y legado inspiran a nuevas generaciones de judocas, transmitiendo no solo técnica, sino también los valores que hacen del judo un camino de formación integral.",
        image: "/teddy1.png",
        badgeLabel: "Sensei Secundario",
        stats: [
            { label: "Años de experiencia", value: "10" },
            { label: "Títulos nacionales", value: "5" },
            { label: "Títulos internacionales", value: "3" },
            { label: "Grado", value: "4º Dan" }
        ],
    },
    {
        slug: "barbara-matic",
        name: "Barbara Matic",
        shortDescription: "Barbara Matic es una judoka croata que ha sido campeón nacional en varias categorías.",
        fullDescription: "Barbara Matic es una judoka croata que ha sido campeón nacional en varias categorías. Ha representado a Croacia en varios torneos internacionales y ha sido un referente para la juventud croata en el deporte.\n\nSu participación olímpica, respaldada por la Federación Internacional de Judo, refleja una trayectoria marcada por la disciplina, la perseverancia y el compromiso con la excelencia. Más allá del resultado competitivo, su presencia en el máximo escenario del deporte mundial representa el espíritu del judo: respeto, coraje y superación constante.\n\nHoy, su experiencia y legado inspiran a nuevas generaciones de judocas, transmitiendo no solo técnica, sino también los valores que hacen del judo un camino de formación integral.",
        image: "/matic.jpg",
        badgeLabel: "Sensei Secundario",
        stats: [
            { label: "Años de experiencia", value: "20" },
            { label: "Títulos nacionales", value: "10" },
            { label: "Títulos internacionales", value: "5" },
            { label: "Grado", value: "6º Dan" }
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