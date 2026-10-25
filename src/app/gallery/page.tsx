import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { GalleryClient } from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Real Work & Site Video Gallery",
  description: "Explore Cleanora's real work gallery featuring on-site video proof of house deep cleaning and interlock pressure washing in Mattanur and Kannur, Kerala.",
  keywords: [
    "Cleanora gallery", "Cleanora work proof",
    "house cleaning video Kannur",
    "interlock cleaning Mattanur",
    "interlock jet wash video Kerala",
    "deep cleaning proof Kannur",
    "cleaning before after video Kannur",
    "real cleaning video Mattannur",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Cleanora Real On-Site Work Video | Interlock & House Cleaning Kannur",
    description:
      "Watch authentic on-site video proof of Cleanora's deep cleaning and high-pressure interlock jet washing in Mattanur and Kannur, Kerala.",
    url: `${siteConfig.url}/gallery`,
    siteName: "Cleanora",
    type: "video.other",
    videos: [
      {
        url: `${siteConfig.url}/videos/cleanora-interlock-house-cleaning-kannur.mp4`,
        width: 1280,
        height: 720,
        type: "video/mp4",
      },
    ],
  },
};

export default function GalleryPage() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Cleanora Real On-Site Work: Interlock Jet Washing & House Deep Cleaning in Kannur",
    description:
      "Real on-site video footage showcasing Cleanora's professional interlock pressure washing and house deep cleaning services in Mattanur, Kannur, Kerala.",
    thumbnailUrl: `${siteConfig.url}/images/cleanora-logo.jpg`,
    uploadDate: "2026-10-05T21:47:00+05:30",
    contentUrl: `${siteConfig.url}/videos/cleanora-interlock-house-cleaning-kannur.mp4`,
    embedUrl: `${siteConfig.url}/gallery`,
    publisher: {
      "@type": "Organization",
      "name": "Cleanora Deep Cleaning & Relocations",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/images/logo.png`
      }
    }
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GalleryClient />
    </>
  );
}
