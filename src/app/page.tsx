import dynamic from "next/dynamic";

import { Header } from "@/components/header";
import HeroSection from "@/views/home/HeroSection";
import PhraseSection from "@/views/home/PhraseSection";

const SolutionsSection = dynamic(
  () => import("@/views/home/SolutionsSection"),
  {
    ssr: false,
  }
);

const BenefitsSection = dynamic(() => import("@/views/home/BenefitsSection"), {
  ssr: false,
});

const IndependentConsultancySection = dynamic(
  () => import("@/views/home/IndependentConsultancy"),
  {
    ssr: false,
  }
);

const TestimonialsSection = dynamic(
  () => import("@/views/home/TestimonialsSection"),
  {
    ssr: false,
  }
);

const SimulatorSection = dynamic(
  () => import("@/views/home/SimulatorSection"),
  {
    ssr: false,
  }
);

const MarqueeSection = dynamic(() => import("@/views/home/MarqueeSection"), {
  ssr: false,
});

const JourneySection = dynamic(() => import("@/views/home/JourneySection"), {
  ssr: false,
});

const ContactSection = dynamic(() => import("@/views/home/ContactSection"), {
  ssr: false,
});

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
      <JourneySection />
      <ContactSection />
    </>
  );
}
