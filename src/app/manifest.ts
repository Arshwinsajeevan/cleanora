import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cleanora Deep Cleaning & Relocations",
    short_name: "Cleanora",
    description:
      "Premier residential and commercial deep cleaning plus Packers & Movers relocation services in Mattanur and Kannur, Kerala.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#071e3d",
    icons: [
      {
        src: "/images/cleanora-logo.jpg",
        sizes: "800x800",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/images/logo.png",
        sizes: "800x800",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
