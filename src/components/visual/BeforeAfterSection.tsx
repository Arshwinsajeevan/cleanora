"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { galleryItems } from "@/data/gallery";
import { createWhatsAppUrl } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

export const BeforeAfterSection: React.FC = () => {
  const beforeAfterItems = galleryItems.filter(
    (item) => item.type === "before-after" && item.beforeImageUrl && item.afterImageUrl
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const currentItem = beforeAfterItems[activeIndex] || beforeAfterItems[0];

  return (
    <section className="section" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Our Quality Standards</span>
          </div>
          <h2 className="section-title">
            The Cleanora Transformation Standard
          </h2>
          <p className="section-subtitle">
            Slide across our cleaning benchmarks to see how our trained team and modern equipment tackle heavy kitchen grease, mineral limescale, and deep dirt.
          </p>
        </div>

        {/* Tab Selection for Before/After items */}
        {beforeAfterItems.length > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "32px",
              flexWrap: "wrap",
            }}
          >
            {beforeAfterItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  backgroundColor: activeIndex === idx ? "var(--color-primary)" : "#f1f5f9",
                  color: activeIndex === idx ? "#ffffff" : "var(--text-secondary)",
                  border: "none",
                  transition: "all 0.15s ease",
                  cursor: "pointer",
                }}
              >
                {item.category} Transformation
              </button>
            ))}
          </div>
        )}

        {/* Slider Container */}
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          {currentItem && (
            <BeforeAfterSlider
              beforeImage={currentItem.beforeImageUrl!}
              afterImage={currentItem.afterImageUrl!}
              title={currentItem.title}
              serviceName={currentItem.category}
              location={currentItem.location}
              description={currentItem.description}
            />
          )}

          {/* Direct CTA */}
          <div
            style={{
              marginTop: "28px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", fontWeight: 500 }}>
              Need a similar spotless result for your space?
            </span>
            <a
              href={createWhatsAppUrl(
                `Hi Cleanora, I would like to book a cleaning service from Malabar Plaza, Mattanur.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "before_after_section" })}
              className="btn btn-whatsapp btn-sm"
              style={{
                backgroundColor: "#25D366",
                color: "#ffffff",
                padding: "10px 18px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "0.875rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(37, 211, 102, 0.25)",
              }}
            >
              <WhatsAppIcon size={15} />
              <span>Book via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

