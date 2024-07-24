import { Header } from "@/components/header";
import HomePageHeroSection from "@/views/home/HeroSection";

import dynamic from "next/dynamic";

const HomePagePhraseSection = dynamic(
  () => import("@/views/home/PhraseSection")
);
const HomePageSolutionsSection = dynamic(
  () => import("@/views/home/SolutionsSection")
);

export default function Home() {
  return (
    <>
      <Header />
      <HomePageHeroSection />
      <HomePagePhraseSection />
      <HomePageSolutionsSection />
    </>
  );
}
