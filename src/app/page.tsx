import dynamic from "next/dynamic";

import { Header } from "@/components/header";
import HeroSection from "@/views/home/HeroSection";
import MarqueeSection from "@/views/home/MarqueeSection";
import SimulatorSection from "@/views/home/SimulatorSection";

const PhraseSection = dynamic(() => import("@/views/home/PhraseSection"));

const SolutionsSection = dynamic(() => import("@/views/home/SolutionsSection"));

const BenefitsSection = dynamic(() => import("@/views/home/BenefitsSection"));

const IndependentConsultancySection = dynamic(
  () => import("@/views/home/IndependentConsultancy")
);

const TestimonialsSection = dynamic(
  () => import("@/views/home/TestimonialsSection")
);

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <PhraseSection />
      <SolutionsSection />
      <BenefitsSection />
      <IndependentConsultancySection />
      <TestimonialsSection />
      <SimulatorSection />
      <MarqueeSection />
    </>
  );
}
