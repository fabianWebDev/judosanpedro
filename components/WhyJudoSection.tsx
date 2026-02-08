import { i18n, Locale } from "@/data/i18n";
import WhyJudoCards from "@/components/WhyJudoCards";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function WhyJudoSection({ params }: Props) {
    const { locale } = await params;
    const t = i18n[locale as Locale];

    return <WhyJudoCards title={t.whyJudo} cards={t.whyJudoCards} />;
}
