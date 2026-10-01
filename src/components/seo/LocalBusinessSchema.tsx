import React from "react";
import { siteConfig } from "@/data/site";
import { servicesData } from "@/data/services";
import { faqsData } from "@/data/faqs";

export const LocalBusinessSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#business`,
        name: "Cleanora",
        alternateName: "Cleanora Professional Cleaning Services",
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.contact.primaryPhone,
        email: siteConfig.contact.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mattannur, Kannur",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.location.coordinates.latitude,
          longitude: siteConfig.location.coordinates.longitude,
        },
        areaServed: [
          "Kannur",
          "Thana",
          "South Bazaar",
          "Payyambalam",
          "Talap",
          "Chalad",
          "Mele Chovva",
          "Thottada",
          "Edakkad",
          "Dharmadam",
          "Thalassery",
          "Mattannur",
          "Payyanur",
        ],
        sameAs: [siteConfig.social.instagramUrl, siteConfig.social.facebookUrl],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cleaning Services in Kannur",
          itemListElement: servicesData.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.nameEn,
              description: s.shortDescriptionEn,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: faqsData.map((faq) => ({
          "@type": "Question",
          name: faq.questionEn,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answerEn,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

