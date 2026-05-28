import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ClinicalCapabilitiesSection from "@/components/landing/ClinicalCapabilitiesSection";
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
import { faqs } from "@/lib/faq-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.rovexca.ai/",
  },
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Rovexca Health",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "799",
    priceCurrency: "MXN",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemsSection />
        <FeaturesSection />
        <ClinicalCapabilitiesSection />
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
