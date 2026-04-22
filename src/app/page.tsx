import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ModulesSection from "@/components/landing/ModulesSection";
import MetricsSection from "@/components/landing/MetricsSection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import WhoIsItForSection from "@/components/landing/WhoIsItForSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import TrialSection from "@/components/landing/TrialSection";
import LeadFormSection from "@/components/landing/LeadFormSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemsSection />
        <FeaturesSection />
        <ModulesSection />
        <MetricsSection />
        <TestimonialSection />
        <WhoIsItForSection />
        <PricingSection />
        <FAQSection />
        <TrialSection />
        <LeadFormSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
