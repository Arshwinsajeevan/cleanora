"use client";

import React from "react";
import { MessageCircle, Phone, Globe } from "lucide-react";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export const MobileActionDock: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleWhatsApp = () => {
    trackEvent("mobile_dock_whatsapp", { location: "dock" });
    const msg =
      language === "ml"
        ? "നമസ്കാരം ക്ലീനോറ, കണ്ണൂരിലെ സർവീസുകളെക്കുറിച്ച് അന്വേഷിക്കാൻ ആഗ്രഹിക്കുന്നു."
        : "Hi Cleanora, I would like to enquire about your cleaning and relocation services in Kannur.";
    window.open(createWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  };

  const handleCall = () => {
    trackEvent("mobile_dock_call", { location: "dock" });
    window.location.href = `tel:${siteConfig.contact.primaryPhoneRaw}`;
  };

  const toggleLanguage = () => {
    const next = language === "en" ? "ml" : "en";
    trackEvent("mobile_dock_language_toggle", { to: next });
    setLanguage(next);
  };

  return (
    <div className="mobile-action-dock">
      {/* 1-Tap Language Toggle */}
      <button
        onClick={toggleLanguage}
        aria-label="Toggle language"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "4px 8px",
          borderRadius: "10px",
          backgroundColor: "#f1f5f9",
          border: "1px solid #cbd5e1",
          color: "var(--text-primary)",
          fontSize: "0.6875rem",
          fontWeight: 800,
          width: "44px",
          height: "44px",
          flexShrink: 0,
        }}
      >
        <Globe size={15} color="var(--color-primary)" />
        <span style={{ marginTop: "1px", textTransform: "uppercase" }}>
          {language === "en" ? "മല" : "EN"}
        </span>
      </button>

      {/* 1-Tap Direct Call */}
      <button
        onClick={handleCall}
        aria-label="Call Cleanora"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          padding: "8px 12px",
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          color: "var(--color-primary)",
          border: "1.5px solid #cbd5e1",
          fontWeight: 700,
          fontSize: "0.8125rem",
          height: "44px",
        }}
      >
        <Phone size={15} />
        <span>{language === "ml" ? "വിളിക്കാം" : "Call Now"}</span>
      </button>

      {/* 1-Tap WhatsApp Booking */}
      <button
        onClick={handleWhatsApp}
        aria-label="Book on WhatsApp"
        style={{
          flex: 1.3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          padding: "8px 14px",
          borderRadius: "10px",
          backgroundColor: "#25D366",
          color: "#ffffff",
          fontWeight: 700,
          fontSize: "0.8125rem",
          boxShadow: "0 3px 12px rgba(37, 211, 102, 0.35)",
          height: "44px",
        }}
      >
        <MessageCircle size={17} />
        <span>{language === "ml" ? "വാട്സാപ്പ്" : "WhatsApp"}</span>
      </button>
    </div>
  );
};