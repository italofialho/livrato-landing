import dynamic from "next/dynamic";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import HeroSection from "@/views/home/HeroSection";
import PhraseSection from "@/views/home/PhraseSection";

export const isProduction = process.env.NODE_ENV === "production";

const SolutionsSection = dynamic(
  () => import("@/views/home/SolutionsSection"),
  {
    ssr: !isProduction,
  }
);

const BenefitsSection = dynamic(() => import("@/views/home/BenefitsSection"), {
  ssr: !isProduction,
});

const IndependentConsultancySection = dynamic(
  () => import("@/views/home/IndependentConsultancy"),
  {
    ssr: !isProduction,
  }
);

const TestimonialsSection = dynamic(
  () => import("@/views/home/TestimonialsSection"),
  {
    ssr: !isProduction,
  }
);

const SimulatorSection = dynamic(
  () => import("@/views/home/SimulatorSection"),
  {
    ssr: !isProduction,
  }
);

const MarqueeSection = dynamic(() => import("@/views/home/MarqueeSection"), {
  ssr: !isProduction,
});

const JourneySection = dynamic(() => import("@/views/home/JourneySection"), {
  ssr: !isProduction,
});

const ContactSection = dynamic(() => import("@/views/home/ContactSection"), {
  ssr: !isProduction,
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
      <Footer />
    </>
  );
}
