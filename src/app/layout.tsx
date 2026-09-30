import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppLauncher } from "@/components/whatsapp/WhatsAppLauncher";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { PageTransition } from "@/components/providers/PageTransition";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Cleanora | Professional Cleaning Services in Mattannur, Kannur",
    template: "%s | Cleanora Cleaning Mattannur Kannur",
  },
  description:
    "Cleanora provides premier residential and commercial deep cleaning services based in Mattannur, Kannur, Kerala. Home deep cleaning, kitchen degreasing, bathroom descaling, sofa shampooing & machine floor scrubbing. 100% Satisfaction Guaranteed.",
  keywords: [
    "Cleanora",
    "Cleaning Services Mattannur",
    "Cleaning Services in Mattannur",
    "Cleaning Services Kannur",
    "Cleaning Services in Kannur",
    "Professional Cleaning Services Mattannur",
    "Deep Cleaning Services Mattannur Kannur",
    "Home Cleaning Mattannur",
    "Kitchen Deep Cleaning Kannur",
    "Bathroom Cleaning Mattannur",
    "Sofa Cleaning Kannur",
    "Floor Cleaning Mattannur",
    "Office Cleaning Kannur",
    "Commercial Cleaning Mattannur",
    "Post Construction Cleaning Kannur",
  ],
  icons: {
    icon: "/images/cleanora-logo.jpg",
    shortcut: "/images/cleanora-logo.jpg",
    apple: "/images/cleanora-logo.jpg",
  },
  authors: [{ name: "Cleanora" }],
  creator: "Cleanora",
  publisher: "Cleanora",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Cleanora | Professional Cleaning Services in Mattannur, Kannur",
    description:
      "Expert deep cleaning for homes, kitchens, bathrooms, sofas, and commercial spaces based in Mattannur, Kannur, Kerala. 100% Satisfaction Guaranteed.",
    url: siteConfig.url,
    siteName: "Cleanora",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/cleanora-logo.jpg",
        width: 800,
        height: 800,
        alt: "Cleanora Professional Cleaning Services Mattannur Kannur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleanora | Professional Cleaning Services in Mattannur, Kannur",
    description:
      "Expert deep cleaning for homes, kitchens, bathrooms, sofas, and commercial spaces in Mattannur, Kannur.",
    images: ["/images/cleanora-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable}`}>
      <body className={plusJakarta.className}>
        <LanguageProvider>
          <SmoothScrollProvider>
            <LocalBusinessSchema />
            <Header />
            <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <WhatsAppLauncher />
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

