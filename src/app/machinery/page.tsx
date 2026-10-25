import type { Metadata } from "next";
import { MachineryClient } from "@/components/machinery/MachineryClient";

export const metadata: Metadata = {
  title: "Industrial Equipment & Jet Wash Fleet",
  description: "Discover our professional cleaning gear in Kannur: high-pressure jet washers, single-disc floor scrubbers, upholstery extractors, and telescopic solar brush sets.",
  keywords: [
    "Cleaning Equipment Kannur",
    "High Pressure Jet Washer Kerala",
    "Floor Scrubbing Machine Mattanur",
    "Upholstery Extractor Cleanora"
],
  alternates: {
    canonical: "/machinery",
  },
  openGraph: {
    title: "Commercial Cleaning Machinery Fleet | Cleanora Kannur",
    description: "Professional technology delivering 10x deeper cleaning without surface damage across Kannur.",
    url: "/machinery",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Cleaning Machinery Fleet | Cleanora Kannur",
    description: "Professional technology delivering 10x deeper cleaning without surface damage across Kannur.",
  },
};

export default function MachineryPage() {
  return <MachineryClient />;
}
