import type { Metadata } from "next";
import { ResultsClient } from "@/components/results/ResultsClient";

export const metadata: Metadata = {
  title: "Before & After Real Cleaning Proof",
  description: "View real site transformations achieved by Cleanora in Mattanur, Kannur, Thalassery, and Payyanur. Interlock jet wash, floor scrubbing, and tile descaling proof.",
  keywords: [
    "Cleaning Before and After Kannur",
    "Interlock Cleaning Proof Kerala",
    "House Cleaning Results Mattannur",
    "Real Cleaning Proof Kannur"
],
  alternates: {
    canonical: "/results",
  },
  openGraph: {
    title: "Verified Cleaning Results & Transformations | Cleanora Kannur",
    description: "Compare real before-and-after results of deep cleaning and high-pressure jet washing across Kannur.",
    url: "/results",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verified Cleaning Results & Transformations | Cleanora Kannur",
    description: "Compare real before-and-after results of deep cleaning and high-pressure jet washing across Kannur.",
  },
};

export default function ResultsPage() {
  return <ResultsClient />;
}
