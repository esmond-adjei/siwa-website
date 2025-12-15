import HeroSection from "@/components/layout/HeroSection";
import PartnerSection from "@/components/layout/PartnerSection";
import OurTeam from "@/components/layout/OurTeamSection";
import BackgroundSection from "@/components/layout/BackgroundSection";
import HowItWorksSection from "@/components/layout/HowItWorks";
import ActivitiesSection from "@/components/layout/ActivitiesSection";
import FAQSection from "@/components/layout/FAQSection";
import ContactUs from "@/components/layout/ContactUsSection";

export default function Home() {
  return (
  <>
    <HeroSection />
    <BackgroundSection />
    <ActivitiesSection />
    <HowItWorksSection />
    {/* <OurTeam /> -> AI Tech, Mission/Vision */}
    <FAQSection />
    <PartnerSection />
    {/* contact, download */}
    <ContactUs />


    {/* 
     - get play store logo
     - get app screenshots and mockups
     - get logo and brand colors
     - review content
     - resize image
     - section navs
     */}
  </>
  );
}
