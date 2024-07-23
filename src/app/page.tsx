import { Header } from "@/components/header";
import { HomePageHeroSection } from "@/views/home/HeroSection";
import { HomePagePhraseSection } from "@/views/home/PhraseSection";
import { HomePageSolutionsSection } from "@/views/home/SolutionsSection";

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
