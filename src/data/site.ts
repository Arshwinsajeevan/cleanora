export interface SiteConfig {
  name: string;
  fullName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  location: {
    city: string;
    localName: string;
    state: string;
    country: string;
    display: string;
    badgeText: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    mapsUrl: string;
  };
  contact: {
    primaryPhone: string;
    primaryPhoneRaw: string;
    secondaryPhone: string;
    secondaryPhoneRaw: string;
    email: string;
    whatsappNumber: string;
    whatsappNumberRaw: string;
  };
  social: {
    instagramHandle: string;
    instagramUrl: string;
  };
  trustPillars: {
    title: string;
    description: string;
  }[];
  guarantee: string;
  url: string;
}

export const siteConfig: SiteConfig = {
  name: "Cleanora",
  fullName: "Cleanora Deep Cleaning & Relocations",
  tagline: "Clean Spaces... Healthy Lives...",
  heroHeadline: "Clean Spaces. Healthy Lives.",
  heroSubheadline:
    "Professional deep cleaning and Packers & Movers shifting services for homes, offices, water tanks, sofas, interlocks, and solar panels in Mattanur and across Kannur, Kerala.",
  description:
    "Cleanora provides premier residential and commercial deep cleaning plus Packers & Movers shifting services based in Mattanur, Kannur, Kerala. Specialized in Packers & Movers, House Cleaning, Office Cleaning, Sofa & Carpet Cleaning, Water Tank Cleaning, Interlock Cleaning, and Solar Panel Cleaning.",
  location: {
    city: "Mattanur, Kannur",
    localName: "മട്ടന്നൂർ",
    state: "Kerala",
    country: "India",
    display: "Mattanur, Kannur, Kerala",
    badgeText: "മട്ടന്നൂർ • MATTANUR, KANNUR",
    coordinates: {
      latitude: 11.9333,
      longitude: 75.5667,
    },
    mapsUrl: "https://maps.google.com/?q=Mattannur,+Kannur,+Kerala,+India",
  },
  contact: {
    primaryPhone: "+91 94968 40540",
    primaryPhoneRaw: "919496840540",
    secondaryPhone: "+91 80754 79552",
    secondaryPhoneRaw: "918075479552",
    email: "cleanorakannur@gmail.com",
    whatsappNumber: "+91 94968 40540",
    whatsappNumberRaw: "919496840540",
  },
  social: {
    instagramHandle: "@cleanora.deepcleaning",
    instagramUrl: "https://www.instagram.com/cleanora.deepcleaning/",
  },
  guarantee: "100% Satisfaction Guaranteed",
  trustPillars: [
    {
      title: "100% Satisfaction Guaranteed",
      description: "Our team ensures every corner is cleaned or shifted to flawless perfection.",
    },
    {
      title: "Professional Machinery & Vehicles",
      description: "Equipped with single-disc scrubbers, high-pressure washers, extractors & dedicated moving transport.",
    },
    {
      title: "Clean Spaces... Healthy Lives...",
      description: "Safe, non-toxic sanitizing formulations and zero-damage shifting care.",
    },
    {
      title: "Local Service in Mattanur & Kannur",
      description: "Prompt, trustworthy scheduling across Kannur district and Kerala.",
    },
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://cleanora.com",
};

export const createWhatsAppUrl = (message?: string, customPhone?: string) => {
  const phone = customPhone || siteConfig.contact.whatsappNumberRaw;
  const text = encodeURIComponent(
    message ||
      "Hi Cleanora, I found your website and would like to enquire about your cleaning / shifting services in Mattanur, Kannur."
  );
  return `https://wa.me/${phone}?text=${text}`;
};
