export const senseis = [
    {
        slug: "david-fernandez",
        name: "David Fernández",
        shortDescription: "Referente del judo costarricense y representante olímpico en Atenas 2004, con amplia trayectoria nacional e internacional.",
        fullDescription: "David Fernández Tercero es un referente del judo costarricense. Representó a Costa Rica en los Juegos Olímpicos de Atenas 2004, donde además tuvo el honor de portar la bandera nacional durante la ceremonia de inauguración.\n\nEn el plano internacional ha competido en Copas del Mundo (La Habana, Budapest, París), Grand Prix y Campeonatos Panamericanos. Obtuvo medalla de bronce en los Juegos Panamericanos de Río 2007 y plata en el Abierto Panamericano de Miami 2006. A nivel regional es múltiple campeón centroamericano y ha sido nueve veces campeón nacional absoluto.\n\nCinturón negro 5º dan desde 2018, hoy dedica su experiencia y liderazgo a la formación integral de jóvenes judocas, promoviendo la excelencia técnica, el respeto y los valores propios del judo.",
        is_active: true,
        image_1: "/sensei_david.jpg",
        badgeLabel: "Sensei Principal",
        stats: [
            { label: "Años de experiencia", value: "22" },
            { label: "Títulos nacionales", value: "9" },
            { label: "Títulos internacionales", value: "2" },
            { label: "Grado", value: "6º Dan" },
        ],
    },
    {
        slug: "carlos-calderon-vargas",
        name: "Carlos Calderón Vargas",
        shortDescription: "Especialista en fundamentos y formación técnica, con enfoque en bases sólidas y desarrollo progresivo del practicante.",
        fullDescription: "Inició su camino en el judo en 2009 bajo la guía de la profesora Kenia Rodríguez. Cuenta con más de una década de experiencia competitiva y 12 años como árbitro nacional, además de formación continua mediante seminarios con maestros internacionales como Moacir Mendez, Carlos Montero y Joshiro Maruyama.\n\nSu enfoque pedagógico se fundamenta en una convicción clara: todo proceso sólido requiere bases firmes. Por ello, prioriza la enseñanza estructurada de fundamentos técnicos y la construcción progresiva del aprendizaje, especialmente en etapas formativas.\n\nPromueve un entrenamiento seguro, disciplinado y respetuoso, donde el desarrollo técnico se equilibra con el bienestar físico y humano del practicante, fortaleciendo no solo habilidades deportivas, sino también valores esenciales del judo.",
        is_active: true,
        image_1: "/doratti_1.jpeg",
        image_2: "/doratti_2.jpeg",
        badgeLabel: "Sensei de fundamentos",
        stats: [
            { label: "Años de experiencia", value: "17" },
            { label: "Grado", value: "1º Dan" },
        ],
    },
    {
        slug: "ronald-castro",
        name: "Ronald Castro",
        shortDescription: "Sensei con amplia trayectoria en judo, orientado a la formación técnica estructurada y al fortalecimiento de bases sólidas.",
        fullDescription: "Cuenta con más de cuatro décadas de práctica ininterrumpida del judo, disciplina que inició en 1979. Actualmente ostenta el grado de tercer Dan y se mantiene en constante capacitación, participando activamente en cursos y procesos de actualización organizados por la Federación Costarricense de Judo.\n\nSe desempeña como sensei sustituto y formador de nuevos estudiantes, priorizando una enseñanza estructurada de las técnicas fundamentales que garantice bases sólidas para el desarrollo técnico y formativo de cada judoka.\n\nA nivel profesional es graduado en Administración Pública y laboró durante 36 años en la Universidad de Costa Rica, tanto en el área administrativa como en docencia. Su experiencia profesional complementa su labor en el dojo, aportando liderazgo, organización y compromiso institucional.",
        is_active: true,
        image_1: "/ronald_1.jpeg",
        badgeLabel: "Sensei asistente",
        stats: [
            { label: "Grado", value: "3º Dan" },
            { label: "Años de experiencia", value: "46" },
            { label: "Títulos nacionales", value: "3" },
        ],
    },
    {
        slug: "omar-vasconcelos",
        name: "Omar Vasconcelos",
        shortDescription: "Sensei con vocación formativa y experiencia competitiva, enfocado en la transmisión de valores y disciplina.",
        fullDescription: "Cinturón negro en judo y jiu jitsu, cuenta con más de una década de experiencia como practicante de judo y otras artes marciales. Ha participado en numerosos torneos y continúa compitiendo en la categoría Máster, demostrando constancia y compromiso con la disciplina.\n\nSu labor como sensei se centra en la formación integral dentro y fuera del tatami. Fuera del dojo se desempeña como oficial de policía, lo que refuerza su visión del judo como una herramienta de disciplina, respeto y responsabilidad.\n\nEn el ámbito competitivo del jiu jitsu tradicional obtuvo el 5.º lugar en el Panamericano de Panamá 2016, además de lograr segundos y terceros lugares en competencias de BJJ. En el dojo colabora activamente en la conducción de clases para niños y adultos.",
        is_active: true,
        image_1: "/omar_1.png",
        badgeLabel: "Sensei asistente",
        stats: [
            { label: "Años de experiencia", value: "12" },
            { label: "Grado", value: "1º Dan" },
            { label: "Títulos nacionales", value: "7" },
            { label: "Títulos internacionales", value: "1" },
        ],
    },

];

export type Sensei = {
    slug: string;
    name: string;
    shortDescription: string;
    fullDescription: string;
    is_active: boolean;
    image_1: string;
    image_2: string;
    badgeLabel: string;
    stats: { label: string; value: string }[];
};

export function getSenseiBySlug(slug: string): Sensei | undefined {
    return senseis.filter((s): s is Sensei => s != null && "slug" in s).find((s) => s.slug === slug);
}