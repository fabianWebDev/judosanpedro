import { i18n, Locale } from "@/data/i18n";
import SenseiCard from "@/components/senseis/SenseiCard";
import { senseis } from "@/data/senseis/senseis";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Senseis({ params }: Props) {
    const { locale } = await params;
    const t = i18n[locale as Locale];

    return (
        <>
            <h1>{t.senseis}</h1>
            <div className="flex flex-wrap gap-6 justify-center">  
                {senseis.map((sensei) => (
                    <SenseiCard key={sensei.name} name={sensei.name} description={sensei.description} image={sensei.image} />
                ))}
            </div>
        </>
    )
}