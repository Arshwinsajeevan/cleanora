"use client";

import React from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export const MobileActionDock: React.FC = () => {
  const { language } = useLanguage();

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

  return (
    <div className="mobile-action-dock">
      {/* 1-Tap Direct Call */}
      <button
        onClick={handleCall}
        aria-label="Call Cleanora"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "10px 16px",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
          color: "var(--color-primary)",
          border: "1.5px solid #cbd5e1",
          fontWeight: 700,
          fontSize: "0.875rem",
          height: "46px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
        }}
      >
        <Phone size={17} color="var(--color-primary)" />
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
          gap: "8px",
          padding: "10px 18px",
          borderRadius: "12px",
          backgroundColor: "#25D366",
          color: "#ffffff",
          fontWeight: 700,
          fontSize: "0.875rem",
          boxShadow: "0 4px 14px rgba(37, 211, 102, 0.35)",
          height: "46px",
        }}
      >
        <WhatsAppIcon size={18} />
        <span>{language === "ml" ? "വാട്സാപ്പ് ചെയ്യാം" : "WhatsApp"}</span>
      </button>
    </div>
  );
};

