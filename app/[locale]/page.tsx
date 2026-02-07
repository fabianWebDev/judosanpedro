import { i18n, Locale } from "@/data/i18n";
import Hero from "@/components/Hero";
import Horarios from "@/components/Horarios";
import Location from "@/components/Locations";
import AboutSenseis from "@/components/senseis/AboutSenseis";
import WhyJudoSection from "@/components/WhyJudoSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const t = i18n[locale as Locale];

  return (
    <>
      <Hero params={params} />
      <WhyJudoSection params={params} />
      <AboutSenseis params={params} />
      
      <Horarios />
      <Location />
    </>
  );
}