"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Sparkles,
  MapPin,
  Award,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";
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
        paddingTop: "clamp(28px, 5vw, 56px)",
        paddingBottom: "clamp(36px, 6vw, 64px)",
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
              className="hero-badges"
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
                  gap: "6px",
                  padding: "5px 12px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(16, 185, 129, 0.08)",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  color: "#059669",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}
              >
                <MapPin size={13} />
                <span>{t("hero_badge_location")}</span>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 12px",
                  borderRadius: "9999px",
                  backgroundColor: "#ffffff",
                  border: "1px solid var(--border-light)",
                  color: "var(--text-secondary)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
                }}
              >
                <Sparkles size={13} color="#059669" />
                <span>{t("hero_badge_slogan")}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: language === "ml" ? "clamp(1.5rem, 4.5vw, 2.3rem)" : "clamp(1.95rem, 5.2vw, 3.1rem)",
                fontWeight: 800,
                lineHeight: language === "ml" ? 1.3 : 1.16,
                letterSpacing: language === "ml" ? "normal" : "-0.03em",
                color: "var(--text-primary)",
                wordBreak: "normal",
                overflowWrap: "break-word",
              }}
            >
              {t("hero_title_line1")}{" "}
              <span
                style={{
                  color: "var(--color-accent)",
                  display: "inline",
                  backgroundImage: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t("hero_title_line2")}
              </span>
            </h1>

            {/* Supporting Subheadline */}
            <p
              style={{
                fontSize: language === "ml" ? "0.92rem" : "1rem",
                lineHeight: 1.68,
                color: "var(--text-secondary)",
                maxWidth: "540px",
                wordBreak: "normal",
                overflowWrap: "break-word",
              }}
            >
              {t("hero_subtitle")}
            </p>

            {/* Call to Actions */}
            <div
              className="hero-ctas"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
                paddingTop: "4px",
              }}
            >
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="btn btn-whatsapp hero-cta-btn"
                style={{
                  padding: "10px 18px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  width: "230px",
                  height: "44px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                  boxSizing: "border-box",
                }}
              >
                <WhatsAppIcon size={17} />
                <span>{t("hero_cta_whatsapp")}</span>
              </a>

              <Link
                href="/services"
                prefetch={true}
                className="btn btn-outline hero-cta-btn"
                style={{
                  padding: "10px 18px",
                  borderRadius: "12px",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  width: "230px",
                  height: "44px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                  boxSizing: "border-box",
                }}
              >
                <span>{t("hero_cta_services")}</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Trust Points Pill Bar (Desktop only, hidden on mobile) */}
            <div
              className="hide-mobile"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                flexWrap: "wrap",
                padding: "10px 14px",
                borderRadius: "12px",
                backgroundColor: "#ffffff",
                border: "1px solid var(--border-light)",
                marginTop: "6px",
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={15} color="#059669" />
                <span style={{ fontWeight: 600 }}>{language === "ml" ? "100% സംതൃപ്തി ഉറപ്പ്" : "100% Guaranteed"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Truck size={15} color="var(--color-primary)" />
                <span style={{ fontWeight: 600 }}>{language === "ml" ? "പാക്കേഴ്‌സ് & മൂവേഴ്‌സ്" : "Packers & Movers"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <ShieldCheck size={15} color="#059669" />
                <span style={{ fontWeight: 600 }}>{language === "ml" ? "വ്യക്തമായ ചാർജുകൾ" : "Upfront Pricing"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Modern Photography Card */}
          <div style={{ position: "relative", minWidth: 0 }}>
            <div
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 18px 40px -10px rgba(7, 30, 61, 0.14)",
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
                  bottom: "12px",
                  left: "12px",
                  right: "12px",
                  backgroundColor: "rgba(255, 255, 255, 0.94)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  padding: "12px 16px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "0.65rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.05em" }}>
                    {language === "ml" ? "മട്ടന്നൂർ • കണ്ണൂർ" : "Mattanur • Kannur, Kerala"}
                  </div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 800, color: "var(--text-primary)" }}>
                    Cleanora Cleaning & Shifting
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "var(--color-accent-subtle)",
                    color: "var(--color-accent)",
                    border: "1px solid var(--color-accent-border)",
                    padding: "4px 10px",
                    borderRadius: "8px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    flexShrink: 0,
                  }}
                >
                  <Award size={14} />
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
