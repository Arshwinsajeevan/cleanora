import type { Metadata } from "next";
import { ContactClient } from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Phone & WhatsApp Booking",
  description: "Contact Cleanora at Malabar Plaza, Mattanur, Kannur. Call +91 94968 40540 or message on WhatsApp for instant estimates on house cleaning, tank washing, or shifting.",
  keywords: [
    "Cleanora Phone Number",
    "Cleanora WhatsApp",
    "Cleaning Services Contact Kannur",
    "Packers and Movers Contact Number Kannur",
    "Malabar Plaza Mattanur Cleanora Office"
],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Cleanora | Instant Quotes & Booking in Kannur",
    description: "Direct contact with our Mattanur headquarters. Open Monday to Friday 8:30 AM to 6:30 PM. Transparent pricing.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Cleanora | Instant Quotes & Booking in Kannur",
    description: "Direct contact with our Mattanur headquarters. Open Monday to Friday 8:30 AM to 6:30 PM. Transparent pricing.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
