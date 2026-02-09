import Hero from "@/components/Hero";
import Horarios from "@/components/Horarios";
import Location from "@/components/Locations";
import AboutSenseis from "@/components/senseis/AboutSenseis";
import WhyJudoSection from "@/components/WhyJudoSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
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