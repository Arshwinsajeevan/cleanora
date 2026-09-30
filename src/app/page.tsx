import React from "react";
import { Hero } from "@/components/hero/Hero";
import { TrustStrip } from "@/components/trust/TrustStrip";
import { Introduction } from "@/components/about/Introduction";
import { ServicesSection } from "@/components/services/ServicesSection";
import { TransformationsSection } from "@/components/transformations/TransformationsSection";
import { EquipmentSection } from "@/components/equipment/EquipmentSection";
import { WhyCleanora } from "@/components/trust/WhyCleanora";
import { HowItWorks } from "@/components/trust/HowItWorks";
import { ServiceAreas } from "@/components/local/ServiceAreas";
import { FAQSection } from "@/components/faq/FAQSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { FinalCTA } from "@/components/cta/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with hero.png */}
      <Hero />

      {/* 2. Quick Trust Strip */}
      <TrustStrip />

      {/* 3. Meet Cleanora Introduction with about us.png */}
      <Introduction />

      {/* 4. Core Services Grid (8 Services with custom PNGs) */}
      <ServicesSection />

      {/* 5. Real Transformations Showcase (Before & After PNGs) */}
      <TransformationsSection />

      {/* 6. Advanced Equipment & Machinery with equipments.png */}
      <EquipmentSection />

      {/* 7. Why Cleanora & 100% Satisfaction with happycustomer.png */}
      <WhyCleanora />

      {/* 8. How It Works (Simple 3-Step Process) */}
      <HowItWorks />

      {/* 9. Service Coverage with location_kerala.png */}
      <ServiceAreas />

      {/* 10. Frequently Asked Questions */}
      <FAQSection />

      {/* 11. Contact & Booking Form */}
      <ContactSection />

      {/* 12. Final Call to Action */}
      <FinalCTA />
    </>
  );
}
