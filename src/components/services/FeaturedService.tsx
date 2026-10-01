"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { createWhatsAppUrl } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

export const FeaturedService: React.FC = () => {
  const handleWhatsAppClick = () => {
    trackEvent("featured_service_enquiry", { service: "Full Home & Kitchen Deep Cleaning" });
  };

  const checklistItems = [
    "Machine floor scrubbing for vitrified tiles, marble & granite",
    "Degreasing of kitchen hobs, chimneys, exhaust & wall tiles",
    "Limescale & hard-water stain removal from bathrooms",
    "Ceiling fan, window track, switchboard & balcony detailing",
    "Fabric vacuuming and upholstery sanitization",
    "100% Satisfaction walkthrough before handover",
  ];

  return (
    <section className="section section-bg-dark" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background Accent */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(8, 22, 43, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div
          style={{
            backgroundColor: "#0d223f",
            borderRadius: "24px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            padding: "48px 40px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
          }}
          className="featured-box"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
            className="featured-grid"
          >
            {/* Left Column: Visual with Badge */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "18px",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  backgroundColor: "#08162b",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                  alt="Full Home & Villa Deep Cleaning in Kannur, Kerala"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  style={{ objectFit: "cover" }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(13, 34, 63, 0.85) 0%, rgba(13, 34, 63, 0.2) 50%)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    right: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(16, 185, 129, 0.95)",
                      color: "#ffffff",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      letterSpacing: "0.05em",
                      padding: "6px 14px",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Sparkles size={14} />
                    <span>SIGNATURE DEEP CLEAN PACKAGE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Benefits */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#34d399",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "10px",
                  }}
                >
                  <span>Kannur & Kerala Service</span>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1.25,
                  }}
                >
                  Full Home & Villa Deep Cleaning
                </h2>
              </div>

              <p style={{ color: "#94a3b8", fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Our premier deep cleaning service delivers a transformative renewal for residences across Kannur and Kerala. Every inch is systematically addressedâ€”from deep tile restoration to intricate fan and window detailing.
              </p>

              {/* Checklist */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {checklistItems.map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                        color: "#34d399",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <CheckCircle2 size={13} />
                    </div>
                    <span style={{ fontSize: "0.875rem", color: "#e2e8f0", lineHeight: 1.45 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  paddingTop: "12px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={createWhatsAppUrl(
                    "Hi Cleanora, I would like to get a quote and details for your Full Home & Villa Deep Cleaning package in Mattannur, Kannur."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="btn btn-whatsapp btn-lg"
                >
                  <WhatsAppIcon size={18} />
                  <span>Enquire on WhatsApp</span>
                </a>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#94a3b8",
                    fontSize: "0.8125rem",
                  }}
                >
                  <ShieldCheck size={16} color="#34d399" />
                  <span>100% Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


