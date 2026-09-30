import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit, Noto_Sans_Malayalam } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionDock } from "@/components/layout/MobileActionDock";
import { WhatsAppLauncher } from "@/components/whatsapp/WhatsAppLauncher";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { PageTransition } from "@/components/providers/PageTransition";
import { LanguageProvider } from "@/context/LanguageContext";

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

const notoSansMl = Noto_Sans_Malayalam({
  subsets: ["malayalam"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-ml",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#071e3d",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Cleanora | Professional Deep Cleaning & Packers and Movers in Kannur",
    template: "%s | Cleanora Cleaning & Shifting Kannur",
  },
  description:
    "Cleanora provides premier residential and commercial deep cleaning and Packers & Movers relocation services based in Mattanur, Kannur, Kerala. House deep cleaning, water tank cleaning, solar panel wash, sofa shampooing, interlock jet washing, and zero-damage shifting across Kannur district. 100% Satisfaction Guaranteed.",
  keywords: [
    "Cleanora",
    "Packers and Movers Kannur",
    "Packers and Movers in Kannur",
    "Household Shifting Kannur",
    "Cleaning Services Mattannur",
    "Cleaning Services in Mattannur",
    "Cleaning Services Kannur",
    "Cleaning Services in Kannur",
    "Deep Cleaning Services Kannur",
    "Water Tank Cleaning Kannur",
    "Solar Panel Cleaning Kerala",
    "Sofa Shampooing Kannur",
    "Interlock Cleaning Kannur",
    "House Deep Cleaning Mattannur",
    "Kitchen Deep Cleaning Kannur",
    "Bathroom Cleaning Kannur",
    "Office Cleaning Kannur",
    "Commercial Cleaning Mattannur",
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
    title: "Cleanora | Professional Deep Cleaning & Packers and Movers in Kannur",
    description:
      "Expert deep cleaning and Packers & Movers shifting for homes, offices, water tanks, sofas, interlocks, and solar panels in Mattanur and across Kannur, Kerala. 100% Satisfaction Guaranteed.",
    url: siteConfig.url,
    siteName: "Cleanora",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/cleanora-logo.jpg",
        width: 800,
        height: 800,
        alt: "Cleanora Professional Deep Cleaning & Relocations Kannur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleanora | Professional Deep Cleaning & Relocations Kannur",
    description:
      "Expert deep cleaning and Packers & Movers shifting services across Kannur district, Kerala.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable} ${notoSansMl.variable}`}>
      <body className={plusJakarta.className}>
        <LanguageProvider>
          <SmoothScrollProvider>
            <LocalBusinessSchema />
            <Header />
            <main style={{ flex: 1, display: "flex", flexDirection: "column", width: "100%" }}>
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <WhatsAppLauncher />
            <MobileActionDock />
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}