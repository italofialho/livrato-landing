import { Header } from "@/components/header";
import { HomePageHeroSection } from "@/views/home/HeroSection";
import { HomePagePhraseSection } from "@/views/home/PhraseSection";

export default function Home() {
  return (
    <>
      <Header />
      <HomePageHeroSection />
      <HomePagePhraseSection />
    </>
  );
}
