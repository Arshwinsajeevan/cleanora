"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Sparkles,
  MapPin,
  Award,
} from "lucide-react";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { trackWhatsAppConversion } from "@/lib/analytics";

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  const handleWhatsAppClick = () => {
    trackWhatsAppConversion("hero_cta");
  };

  const getWhatsAppLink = () => {
    const message =
      language === "ml"
        ? "നമസ്കാരം ക്ലീനോറ, എനിക്ക് നിങ്ങളുടെ ക്ലീനിംഗ് & ഷിഫ്റ്റിംഗ് സർവീസുകളെക്കുറിച്ച് അറിയണം."
        : "Hello Cleanora, I would like to inquire about your deep cleaning & shifting services in Kannur.";
    return createWhatsAppUrl(message);
  };

  return (
    <section
      style={{
        position: "relative",
        paddingTop: "clamp(40px, 6vw, 68px)",
        paddingBottom: "clamp(44px, 6vw, 64px)",
        backgroundColor: "var(--bg-page)",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: "36px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Clean Typography & Quick Actions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", minWidth: 0 }}>
            {/* Top Micro Badges */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "4px 10px",
                  borderRadius: "9999px",
                  backgroundColor: "var(--color-accent-subtle)",
                  border: "1px solid var(--color-accent-border)",
                  color: "var(--color-accent)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    boxShadow: "0 0 6px #10b981",
                  }}
                />
                <MapPin size={11} />
                <span>{t("hero_badge_location")}</span>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "4px 10px",
                  borderRadius: "9999px",
                  backgroundColor: "var(--bg-subtle)",
                  border: "1px solid var(--border-light)",
                  color: "var(--text-secondary)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                }}
              >
                <Sparkles size={11} color="#059669" />
                <span>{t("hero_badge_slogan")}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: language === "ml" ? "clamp(1.35rem, 2.2vw, 1.95rem)" : "clamp(1.8rem, 3.2vw, 2.75rem)",
                fontWeight: language === "ml" ? 700 : 800,
                lineHeight: language === "ml" ? 1.35 : 1.18,
                letterSpacing: language === "ml" ? "normal" : "-0.025em",
                color: "var(--text-primary)",
                wordBreak: "normal",
                overflowWrap: "break-word",
              }}
            >
              {t("hero_title_line1")}{" "}
              <span style={{ color: "var(--color-accent)", display: "inline" }}>
                {t("hero_title_line2")}
              </span>
            </h1>

            {/* Supporting Subheadline */}
            <p
              style={{
                fontSize: language === "ml" ? "0.85rem" : "0.9375rem",
                lineHeight: 1.6,
                color: "var(--text-secondary)",
                maxWidth: "520px",
                wordBreak: "normal",
                overflowWrap: "break-word",
              }}
            >
              {t("hero_subtitle")}
            </p>

            {/* Call to Actions */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
                paddingTop: "2px",
              }}
            >
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="btn btn-whatsapp btn-lg"
                style={{
                  padding: "10px 18px",
                  borderRadius: "10px",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                }}
              >
                <MessageCircle size={16} />
                <span>{t("hero_cta_whatsapp")}</span>
              </a>

              <Link
                href="/services"
                prefetch={true}
                className="btn btn-outline btn-lg"
                style={{
                  padding: "10px 18px",
                  borderRadius: "10px",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                }}
              >
                <span>{t("hero_cta_services")}</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Trust Points */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
                paddingTop: "12px",
                borderTop: "1px solid var(--border-light)",
                marginTop: "2px",
                fontSize: "0.76rem",
                color: "var(--text-secondary)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <CheckCircle2 size={14} color="#059669" />
                <span style={{ fontWeight: 600 }}>{language === "ml" ? "100% സംതൃപ്തി ഉറപ്പ്" : "100% Guaranteed"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Truck size={14} color="var(--color-primary)" />
                <span style={{ fontWeight: 600 }}>{language === "ml" ? "പാക്കേഴ്‌സ് & മൂവേഴ്‌സ്" : "Packers & Movers"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <ShieldCheck size={14} color="#059669" />
                <span style={{ fontWeight: 600 }}>{language === "ml" ? "വ്യക്തമായ ചാർജുകൾ" : "Upfront Pricing"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Modern Photography Card */}
          <div style={{ position: "relative", minWidth: 0 }}>
            <div
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 25px -8px rgba(15, 23, 42, 0.08)",
                aspectRatio: "4/3",
                backgroundColor: "#f1f5f9",
                border: "1px solid var(--border-light)",
              }}
            >
              <Image
                src="/images/hero.png"
                alt="Cleanora Deep Cleaning & Relocations Mattanur Kannur"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                style={{ objectFit: "cover" }}
              />

              {/* Floating Glass Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  right: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(12px)",
                  padding: "10px 14px",
                  borderRadius: "12px",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "0.625rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em" }}>
                    {language === "ml" ? "മട്ടന്നൂർ • കണ്ണൂർ" : "Mattanur • Kannur, Kerala"}
                  </div>
                  <div style={{ fontSize: "0.8125rem", fontWeight: 800, color: "var(--text-primary)" }}>
                    Cleanora Cleaning & Shifting
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "var(--color-accent-subtle)",
                    color: "var(--color-accent)",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    flexShrink: 0,
                  }}
                >
                  <Award size={13} />
                  <span>{language === "ml" ? "100% ക്ലീൻ" : "100% Verified"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
