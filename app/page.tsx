import HeroSection from "@/components/layout/HeroSection";
import MissionSection from "@/components/layout/MissionSection";
import OurTeam from "@/components/layout/OurTeamSection";
import ImpactSection from "@/components/layout/ImpactSection";
import HowItWorksSection from "@/components/layout/HowItWorks";
import ActivitiesSection from "@/components/layout/ActivitiesSection";
import FAQSection from "@/components/layout/FAQSection";

export default function Home() {
  return (
  <>
    <HeroSection />
    <ImpactSection />
    <ActivitiesSection />
    <HowItWorksSection />
    {/* <MissionSection /> */}
    {/* <OurTeam /> */}
    <FAQSection />
    {/* partners (dipperlab, rail, iau, knust) */}
    {/* contact, download */}

    {/* 
     - get play store logo
     - get app screenshots and mockups
     - get logo and brand colors
     - review content
     */}
  </>
  );
}
