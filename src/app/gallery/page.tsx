import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { GalleryClient } from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Real Work Videos & Official Service Flyer Gallery",
  description: "Explore Cleanora's real on-site work gallery featuring video proof of house deep cleaning, floor scrubbing, and interlock pressure washing in Mattanur and Kannur, Kerala.",
  keywords: [
    "Cleanora gallery",
    "Cleanora work proof",
    "house cleaning video Kannur",
    "floor scrubbing video Mattannur",
    "interlock cleaning Mattanur",
    "interlock jet wash video Kerala",
    "deep cleaning proof Kannur",
    "cleaning before after video Kannur",
    "real cleaning video Mattannur",
    "Cleanora service flyer",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Cleanora Real On-Site Work Videos & Service Showcase | Kannur",
    description:
      "Watch authentic on-site video proof of Cleanora's deep cleaning, floor scrubbing, and high-pressure interlock jet washing in Mattanur and Kannur, Kerala.",
    url: `${siteConfig.url}/gallery`,
    siteName: "Cleanora",
    type: "video.other",
    videos: [
      {
        url: `${siteConfig.url}/videos/cleanora-interlock-house-cleaning-kannur.mp4`,
        width: 480,
        height: 848,
        type: "video/mp4",
      },
      {
        url: `${siteConfig.url}/videos/cleanora-deep-cleaning-site-work-kannur.mp4`,
        width: 464,
        height: 832,
        type: "video/mp4",
      },
    ],
  },
};

export default function GalleryPage() {
  const videoSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "Cleanora Real On-Site Work: Interlock Jet Washing in Kannur",
      description:
        "Real on-site video footage showcasing Cleanora's professional interlock pressure washing and moss extraction in Mattanur, Kannur, Kerala.",
      thumbnailUrl: `${siteConfig.url}/images/interlock.png`,
      uploadDate: "2026-10-05T21:47:00+05:30",
      contentUrl: `${siteConfig.url}/videos/cleanora-interlock-house-cleaning-kannur.mp4`,
      embedUrl: `${siteConfig.url}/gallery`,
      publisher: {
        "@type": "Organization",
        name: "Cleanora Deep Cleaning & Relocations",
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/images/logo.png`,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "Cleanora Real On-Site Work: Residential Deep Cleaning & Floor Scrubbing in Kannur",
      description:
        "Authentic footage demonstrating mechanical single-disc floor scrubbing and complete room sanitization inside a customer home in Kannur district, Kerala.",
      thumbnailUrl: `${siteConfig.url}/images/housecleaning.png`,
      uploadDate: "2026-10-25T18:15:00+05:30",
      contentUrl: `${siteConfig.url}/videos/cleanora-deep-cleaning-site-work-kannur.mp4`,
      embedUrl: `${siteConfig.url}/gallery`,
      publisher: {
        "@type": "Organization",
        name: "Cleanora Deep Cleaning & Relocations",
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/images/logo.png`,
        },
      },
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gallery",
        item: `${siteConfig.url}/gallery`,
      },
    ],
  };

  return (
    <>
      {videoSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GalleryClient />
    </>
  );
}
