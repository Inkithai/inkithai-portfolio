import { HeroSection } from "@/components/sections/hero";
import { SelectedWorkSection } from "@/components/sections/selected-work";
import { EngineeringExpertiseSection } from "@/components/sections/engineering-expertise";
import { ExperienceSection } from "@/components/sections/experience";
import { AcademicFoundationSection } from "@/components/sections/academic-foundation";
import { ResearchSection } from "@/components/sections/research";
import { EntrepreneurshipSection } from "@/components/sections/entrepreneurship";
import { CertificationsPreviewSection } from "@/components/sections/certifications-preview";
import { AboutSection } from "@/components/sections/about";
import { FinalCTASection } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SelectedWorkSection />
      <EngineeringExpertiseSection />
      <ExperienceSection />
      <AcademicFoundationSection />
      <ResearchSection />
      <EntrepreneurshipSection />
      <CertificationsPreviewSection />
      <AboutSection />
      <FinalCTASection />
    </>
  );
}
