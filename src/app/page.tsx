/* eslint-disable */
import dynamic from "next/dynamic";

import { Header } from "@/components/header";
import HomePageHeroSection from "@/views/home/HeroSection";

const HomePagePhraseSection = dynamic(
  () => import("@/views/home/PhraseSection")
);

const HomePageSolutionsSection = dynamic(
  () => import("@/views/home/SolutionsSection")
);

const HomePageBenefitsSection = dynamic(
  () => import("@/views/home/BenefitsSection")
);

const IndependentConsultancySection = dynamic(
  () => import("@/views/home/IndependentConsultancy")
);

export default function Home() {
  return (
    <>
      <Header />
      <HomePageHeroSection />
      <HomePagePhraseSection />
      <HomePageSolutionsSection />
      <HomePageBenefitsSection />
      <IndependentConsultancySection />
    </>
  );
}
