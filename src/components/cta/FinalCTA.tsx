"use client";

import React from "react";
import { Phone, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export const FinalCTA: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section
      style={{
        backgroundColor: "var(--color-primary)",
        color: "#ffffff",
        padding: "72px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          backgroundColor: "rgba(16, 185, 129, 0.18)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "760px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 14px",
            borderRadius: "9999px",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#34d399",
            fontSize: "0.8125rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "18px",
          }}
        >
          <Sparkles size={14} />
          <span>{t("final_cta_badge")}</span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: "16px",
            color: "#ffffff",
          }}
        >
          {t("final_cta_title")}
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            color: "#cbd5e1",
            lineHeight: 1.65,
            marginBottom: "32px",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {t("final_cta_subtitle")}
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href={createWhatsAppUrl(
              language === "ml"
                ? "à´¨à´®à´¸àµà´•à´¾à´°à´‚ à´•àµà´²àµ€à´¨àµ‹à´±, à´•àµà´²àµ€à´¨à´¿à´‚à´—àµ à´¸àµ¼à´µàµ€à´¸àµ à´¬àµà´•àµà´•àµ à´šàµ†à´¯àµà´¯à´¾àµ» à´†à´—àµà´°à´¹à´¿à´•àµà´•àµà´¨àµà´¨àµ."
                : "Hi Cleanora, I am ready to book a cleaning service for my space in Kannur."
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "final_cta" })}
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
            <WhatsAppIcon size={20} />
            <span>{t("final_cta_whatsapp")}</span>
          </a>

          <a
            href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
            onClick={() => trackEvent("phone_call_click", { location: "final_cta" })}
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
            <Phone size={18} />
            <span>{t("final_cta_call")}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

