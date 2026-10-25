import React from "react";
import { siteConfig } from "@/data/site";
import { servicesData } from "@/data/services";

export const LocalBusinessSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: "Cleanora",
    alternateName: "Cleanora Deep Cleaning & Relocations",
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.primaryPhone,
    email: siteConfig.contact.email,
    priceRange: "₹₹",
    image: `${siteConfig.url}/images/cleanora-logo.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Malabar Plaza, Mattanur",
      addressLocality: "Mattanur",
      addressRegion: "Kerala",
      postalCode: "670702",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.location.coordinates.latitude,
      longitude: siteConfig.location.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:30",
      },
    ],
    areaServed: [
      "Kannur",
      "Mattannur",
      "Thalassery",
      "Payyanur",
      "Thana",
      "South Bazaar",
      "Payyambalam",
      "Talap",
      "Chalad",
      "Mele Chovva",
      "Thottada",
      "Edakkad",
      "Dharmadam",
    ],
    sameAs: [siteConfig.social.instagramUrl, siteConfig.social.facebookUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Deep Cleaning & Relocation Services in Kannur",
      itemListElement: servicesData.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.nameEn,
          description: s.shortDescriptionEn,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
