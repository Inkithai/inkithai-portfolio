import { HeroSection } from "@/components/sections/hero";
import { SelectedWorkSection } from "@/components/sections/selected-work";
import { ExperienceSection } from "@/components/sections/experience";
import { EngineeringExpertiseSection } from "@/components/sections/engineering-expertise";
import { RecognitionSection } from "@/components/sections/recognition";
import { AboutSection } from "@/components/sections/about";
import { FinalCTASection } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SelectedWorkSection />
      <ExperienceSection />
      <EngineeringExpertiseSection />
      <RecognitionSection />
      <AboutSection />
      <FinalCTASection />
    </>
  );
}
