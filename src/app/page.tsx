import type { Metadata } from "next";
﻿import React from "react";
import { Hero } from "@/components/hero/Hero";
import { TrustStrip } from "@/components/trust/TrustStrip";
import { Introduction } from "@/components/about/Introduction";
import { ServicesSection } from "@/components/services/ServicesSection";
import { TransformationsSection } from "@/components/transformations/TransformationsSection";
import { WhyCleanora } from "@/components/trust/WhyCleanora";
import { HowItWorks } from "@/components/trust/HowItWorks";
import { ServiceAreas } from "@/components/local/ServiceAreas";
import { FAQSection } from "@/components/faq/FAQSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { FinalCTA } from "@/components/cta/FinalCTA";


export const metadata: Metadata = {
  title: "Cleanora | Professional Deep Cleaning & Packers and Movers in Kannur",
  description:
    "Premier residential and commercial deep cleaning and Packers & Movers relocation services based in Mattanur, Kannur, Kerala. House deep cleaning, water tank cleaning, solar panel wash, sofa shampooing, interlock jet washing, and zero-damage shifting across Kannur district. 100% Satisfaction Guaranteed.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cleanora | Professional Deep Cleaning & Packers and Movers in Kannur",
    description:
      "Expert deep cleaning and Packers & Movers shifting for homes, offices, water tanks, sofas, interlocks, and solar panels in Mattanur and across Kannur, Kerala. 100% Satisfaction Guaranteed.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with hero.png */}
      <Hero />

      {/* 2. Quick Trust Strip */}
      <TrustStrip />

      {/* 3. Meet Cleanora Introduction with about-us.png */}
      <Introduction />

      {/* 4. Core Services Grid (9 Services including Packers & Movers) */}
      <ServicesSection />

      {/* 5. Real Transformations Showcase (Before & After Visuals) */}
      <TransformationsSection />

      {/* 6. Why Cleanora & 100% Satisfaction with happycustomer.png */}
      <WhyCleanora />

      {/* 7. How It Works (Simple 3-Step Process) */}
      <HowItWorks />

      {/* 8. Service Coverage with location_kerala.png */}
      <ServiceAreas />

      {/* 9. Frequently Asked Questions */}
      <FAQSection />

      {/* 10. Contact & Booking Form */}
      <ContactSection />

      {/* 11. Final Call to Action */}
      <FinalCTA />
    </>
  );
}
