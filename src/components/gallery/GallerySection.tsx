"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Eye, MapPin, ArrowRight, MessageCircle, Building2 } from "lucide-react";
import { galleryItems, inaugurationInfo } from "@/data/gallery";
import { createWhatsAppUrl } from "@/data/site";
import { LightboxModal } from "./LightboxModal";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export const GallerySection: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Full Home", "Kitchen", "Bathroom", "Floor", "Sofa", "Relocation"];

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    trackEvent("gallery_image_view", { image_id: galleryItems[index].id });
  };

  return (
    <>
      <section id="gallery" className="section section-bg-subtle">
        <div className="container">
          {/* Malabar Plaza Mattanur Banner */}
          <div
            style={{
              marginBottom: "48px",
              backgroundColor: "var(--color-primary)",
              color: "#ffffff",
              borderRadius: "20px",
              padding: "clamp(24px, 4vw, 36px)",
              display: "flex",
              flexDirection: "column",
              mdFlexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "24px",
              boxShadow: "0 16px 36px -8px rgba(7, 30, 61, 0.3)",
            }}
          >
            <div style={{ maxWidth: "650px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(52, 211, 153, 0.2)",
                  color: "#34d399",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  marginBottom: "12px",
                  border: "1px solid rgba(52, 211, 153, 0.3)",
                }}
              >
                <Building2 size={14} />
                <span>{inaugurationInfo.badge}</span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                  fontWeight: 800,
                  marginBottom: "8px",
                  lineHeight: 1.25,
                }}
              >
                {inaugurationInfo.title}
              </h3>

              <p style={{ color: "#cbd5e1", fontSize: "0.9375rem", lineHeight: 1.65 }}>
                {inaugurationInfo.subtitle}
              </p>
            </div>

            <div style={{ flexShrink: 0 }}>
              <a
                href={createWhatsAppUrl(
                  "Hi Cleanora, I would like to book a cleaning or shifting service from Malabar Plaza, Mattanur!"
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("gallery_booking_click", { location: "gallery_banner" })}
                className="btn btn-whatsapp btn-lg"
                style={{
                  borderRadius: "12px",
                  padding: "14px 28px",
                  fontWeight: 700,
                  boxShadow: "0 8px 24px -4px rgba(37, 211, 102, 0.4)",
                }}
              >
                <MessageCircle size={18} />
                <span>{t("book_via_whatsapp")}</span>
              </a>
            </div>
          </div>

          {/* Section Header */}
          <div className="section-header">
            <div className="section-badge">
              <Sparkles size={14} />
              <span>{t("nav_work")}</span>
            </div>
            <h2 className="section-title">
              {language === "ml"
                ? "കണ്ണൂരിലെ ഞങ്ങളുടെ വർക്കുകളുടെ ഗാലറി"
                : "Real Project Gallery Across Kannur"}
            </h2>
            <p className="section-subtitle">
              {language === "ml"
                ? "മട്ടന്നൂരിലും കണ്ണൂരിലും ഞങ്ങൾ ചെയ്ത വർക്കുകളുടെ ചിത്രങ്ങൾ."
                : "Explore our recent deep cleaning and shifting operations across Mattanur and Kannur."}
            </p>
          </div>

          {/* Category Filter Chips */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "36px",
              flexWrap: "wrap",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "7px 16px",
                  borderRadius: "9999px",
                  fontSize: "0.85rem",
                  fontWeight: selectedCategory === cat ? 700 : 500,
                  backgroundColor: selectedCategory === cat ? "var(--color-primary)" : "#ffffff",
                  color: selectedCategory === cat ? "#ffffff" : "var(--text-secondary)",
                  border: selectedCategory === cat ? "1px solid var(--color-primary)" : "1px solid var(--border-light)",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-subtle)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="bento-card"
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", backgroundColor: "#0b1b2b" }}>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    style={{ objectFit: "cover" }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(0,0,0,0.3)",
                      opacity: 0,
                      transition: "opacity 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                  >
                    <div
                      style={{
                        backgroundColor: "rgba(255,255,255,0.9)",
                        padding: "8px 16px",
                        borderRadius: "9999px",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "var(--color-primary)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Eye size={14} />
                      <span>View</span>
                    </div>
                  </div>
                </div>

                <div style={{ padding: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "var(--color-accent)", fontSize: "0.75rem", fontWeight: 700, marginBottom: "4px" }}>
                    <MapPin size={12} />
                    <span>{item.location}</span>
                  </div>
                  <h4 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.35 }}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          items={galleryItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </>
  );
};
