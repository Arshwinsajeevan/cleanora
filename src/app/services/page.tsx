import type { Metadata } from "next";
import { ServicesClient } from "@/components/services/ServicesClient";

export const metadata: Metadata = {
  title: "Cleaning Services & Packers Movers",
  description: "Specialized deep cleaning and household shifting services in Mattanur and Kannur, Kerala. Full house cleaning, sofa shampooing, water tank cleaning, and interlock pressure wash.",
  keywords: [
    "Cleaning Services Kannur",
    "Packers and Movers Kannur",
    "Household Shifting Kannur",
    "Deep Cleaning Services Mattannur",
    "House Deep Cleaning Kannur",
    "Water Tank Cleaning Kannur",
    "Sofa Shampooing Kannur",
    "Interlock Cleaning Kannur",
    "Solar Panel Cleaning Kerala"
],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Professional Deep Cleaning & Relocation Services in Kannur | Cleanora",
    description: "From full residential villa cleaning to zero-damage household shifting across Kannur district. 100% Satisfaction Guaranteed.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Deep Cleaning & Relocation Services in Kannur | Cleanora",
    description: "From full residential villa cleaning to zero-damage household shifting across Kannur district. 100% Satisfaction Guaranteed.",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
