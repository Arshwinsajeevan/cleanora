import type { Metadata } from "next";
import { AboutClient } from "@/components/about/AboutClient";

export const metadata: Metadata = {
  title: "About Our Team & Malabar Plaza Office",
  description: "Learn about Cleanora based at Malabar Plaza, Mattanur. Dedicated cleaning technicians bringing organized hygiene and safe shifting standards to Kannur district.",
  keywords: [
    "About Cleanora",
    "Cleanora Mattanur",
    "Cleaning Company Kannur",
    "Deep Cleaning Team Mattannur",
    "Packers and Movers Malabar Plaza"
],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Cleanora | Dedicated Cleaning & Relocations in Kannur",
    description: "Mission-driven to create 'Clean Spaces... Healthy Lives...' across Kannur district, Kerala.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Cleanora | Dedicated Cleaning & Relocations in Kannur",
    description: "Mission-driven to create 'Clean Spaces... Healthy Lives...' across Kannur district, Kerala.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
