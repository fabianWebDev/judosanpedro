import { i18n, Locale } from "@/data/i18n";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Senseis({ params }: Props) {
    const { locale } = await params;
    const t = i18n[locale as Locale];

    return (
        <div>
            <h1>{t.senseis}</h1>
        </div>
    )
}