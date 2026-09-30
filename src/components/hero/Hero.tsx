"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, MapPin, Sparkles, Award } from "lucide-react";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", { location: "hero_primary" });
  };

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#071426",
        color: "#ffffff",
        overflow: "hidden",
        paddingTop: "56px",
        paddingBottom: "80px",
      }}
    >
      {/* Subtle Background Glows */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "15%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, rgba(15, 59, 116, 0) 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "10%",
          width: "600px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(15, 91, 176, 0.2) 0%, rgba(7, 20, 38, 0) 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Headlines & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ display: "flex", flexDirection: "column", gap: "22px" }}
          >
            {/* Location & Brand Pill */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid rgba(16, 185, 129, 0.35)",
                  color: "#34d399",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
              >
                <MapPin size={14} />
                <span>{t("hero_badge_location")}</span>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#cbd5e1",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                }}
              >
                <Sparkles size={14} color="#60a5fa" />
                <span>{t("hero_badge_slogan")}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.4rem, 4.4vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              {t("hero_title_line1")} <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #34d399 0%, #60a5fa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t("hero_title_line2")}
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: "#cbd5e1",
                maxWidth: "560px",
              }}
            >
              {t("hero_subtitle")}
            </p>

            {/* Call to Actions */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
                paddingTop: "6px",
              }}
            >
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="btn btn-whatsapp btn-lg"
                style={{
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "14px 28px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  fontSize: "1.0625rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4)",
                }}
              >
                <MessageCircle size={20} />
                <span>{t("hero_cta_whatsapp")}</span>
              </a>

              <Link
                href="/services"
                prefetch={true}
                className="btn btn-outline-white btn-lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  textDecoration: "none",
                  padding: "14px 26px",
                  borderRadius: "12px",
                  fontWeight: 600,
                  fontSize: "1.0625rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span>{t("hero_cta_services")}</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Trust Line */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                paddingTop: "14px",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#34d399",
                }}
              >
                <ShieldCheck size={18} />
              </div>
              <div>
                <span style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.9375rem" }}>
                  {t("hero_guarantee_text")}
                </span>
                <span style={{ color: "#94a3b8", fontSize: "0.875rem", marginLeft: "6px" }} className="hide-mobile">
                  {t("hero_guarantee_sub")}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: User's Custom Hero Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.12)",
                aspectRatio: "4/3",
                backgroundColor: "#0d203a",
              }}
            >
              <Image
                src="/images/hero.png"
                alt="Cleanora Deep Cleaning Mattanur Kannur"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                style={{ objectFit: "cover" }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(7, 20, 38, 0.75) 0%, rgba(7, 20, 38, 0.05) 50%)",
                }}
              />

              {/* Floating Bottom Card */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  right: "16px",
                  backgroundColor: "rgba(11, 27, 43, 0.92)",
                  backdropFilter: "blur(14px)",
                  padding: "14px 18px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#34d399", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.05em" }}>
                    മട്ടന്നൂർ • MATTANUR, KANNUR
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff" }}>
                    Cleanora Deep Cleaning
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    color: "#34d399",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Award size={15} />
                  <span>{language === "ml" ? "100% ക്ലീൻ" : "Spotless"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
