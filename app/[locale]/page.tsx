import Hero from "@/components/Hero";
import InfoBanner from "@/components/InfoBanner";
import Horarios from "@/components/Horarios";
import Location from "@/components/Locations";
import AboutSenseis from "@/components/senseis/AboutSenseis";
import WhyJudoSection from "@/components/WhyJudoSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <InfoBanner
        imageSrc="/banner-moacir.png"
        imageAlt="Banner Moacir"
        cta={{ label: "Ver más", href: `https://tamo-junto-lime.vercel.app/` }}
      />
      <Hero params={params} />
      <WhyJudoSection params={params} />
      <AboutSenseis params={params} />
      <Horarios />
      <Location />
    </>
  );
}