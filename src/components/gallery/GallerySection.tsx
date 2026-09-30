"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Eye, MapPin, ArrowRight, Calendar, MessageCircle, Rocket } from "lucide-react";
import { galleryItems, inaugurationInfo } from "@/data/gallery";
import { createWhatsAppUrl } from "@/data/site";
import { LightboxModal } from "./LightboxModal";
import { trackEvent } from "@/lib/analytics";

interface GallerySectionProps {
  limit?: number;
  showAllLink?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  limit = 6,
  showAllLink = true,
}) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = ["all", "Kitchen", "Living", "Bathroom", "Sofa", "Floor", "Commercial"];

  const filteredItems = galleryItems.filter((item) =>
    activeCategory === "all" ? true : item.category === activeCategory
  );

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handleNext = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex + 1) % displayItems.length);
  };

  const handlePrev = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex(
      (selectedItemIndex - 1 + displayItems.length) % displayItems.length
    );
  };

  return (
    <section id="gallery" className="section section-bg-subtle">
      <div className="container">
        {/* Inauguration Grand Banner */}
        <div
          style={{
            backgroundColor: "#0d223f",
            color: "#ffffff",
            borderRadius: "20px",
            padding: "36px 32px",
            marginBottom: "48px",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px",
              position: "relative",
              zIndex: 10,
            }}
          >
            <div style={{ maxWidth: "680px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 12px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  color: "#34d399",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "12px",
                }}
              >
                <Rocket size={14} />
                <span>{inaugurationInfo.badge}</span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 800,
                  marginBottom: "10px",
                  lineHeight: 1.25,
                }}
              >
                {inaugurationInfo.title}
              </h3>

              <p style={{ color: "#cbd5e1", fontSize: "0.9375rem", lineHeight: 1.65 }}>
                {inaugurationInfo.subtitle}
              </p>
            </div>

            <div>
              <a
                href={createWhatsAppUrl(
                  "Hi Cleanora, I would like to pre-book a priority cleaning slot for your inaugural launch week in Kannur!"
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("inauguration_prebook_click", { location: "gallery_banner" })}
                className="btn btn-whatsapp btn-lg"
                style={{
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: 700,
                  padding: "14px 26px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 16px rgba(37, 211, 102, 0.35)",
                }}
              >
                <Calendar size={18} />
                <span>Pre-Book Inaugural Slot</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Our Service Standards & Benchmarks</span>
          </div>
          <h2 className="section-title">
            Preview the quality you can expect from Cleanora
          </h2>
          <p className="section-subtitle">
            Take a look at the techniques, equipment benchmarks, and meticulous deep-cleaning standards our team is bringing to homes and businesses across Kannur.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "7px 16px",
                borderRadius: "9999px",
                fontSize: "0.8125rem",
                fontWeight: 600,
                backgroundColor: activeCategory === cat ? "var(--color-primary)" : "#ffffff",
                color: activeCategory === cat ? "#ffffff" : "var(--text-secondary)",
                border: activeCategory === cat ? "1px solid var(--color-primary)" : "1px solid #e2e8f0",
                transition: "all 0.15s ease",
                cursor: "pointer",
              }}
            >
              {cat === "all" ? "All Standards" : cat}
            </button>
          ))}
        </div>

        {/* Editorial Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
          className="gallery-grid"
        >
          {displayItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItemIndex(index)}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
                cursor: "pointer",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
                position: "relative",
                willChange: "transform",
              }}
              className="gallery-card"
            >
              {/* Image Container */}
              <div style={{ position: "relative", width: "100%", height: "230px", backgroundColor: "#0f172a" }}>
                <Image
                  src={item.afterImageUrl || item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(15, 35, 65, 0.65)",
                    opacity: 0,
                    transition: "opacity 0.15s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                  }}
                  className="gallery-overlay"
                >
                  <Eye size={18} />
                  <span>Inspect Benchmark Details</span>
                </div>

                {/* Category Pill */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    backgroundColor: "rgba(15, 23, 42, 0.85)",
                    backdropFilter: "blur(4px)",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "6px",
                  }}
                >
                  {item.category}
                </div>

                {/* Inaugural Pill */}
                {item.inauguralHighlight && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      right: "12px",
                      backgroundColor: "rgba(16, 185, 129, 0.9)",
                      color: "#ffffff",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      padding: "3px 8px",
                      borderRadius: "4px",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.inauguralHighlight}
                  </div>
                )}
              </div>

              {/* Card Meta */}
              <div style={{ padding: "18px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "var(--color-primary)", fontSize: "0.75rem", fontWeight: 700, marginBottom: "4px" }}>
                  <MapPin size={12} color="#059669" />
                  <span>{item.location}</span>
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.35 }}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        {showAllLink && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link
              href="/gallery"
              className="btn btn-outline"
              style={{
                border: "1px solid #cbd5e1",
                backgroundColor: "#ffffff",
                color: "var(--color-primary)",
                padding: "12px 24px",
                borderRadius: "10px",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>Explore All Service Benchmarks</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedItemIndex !== null && displayItems[selectedItemIndex] && (
        <LightboxModal
          item={displayItems[selectedItemIndex]}
          onClose={() => setSelectedItemIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};
