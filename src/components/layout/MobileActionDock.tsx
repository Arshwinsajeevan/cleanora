"use client";

import React, { useState } from "react";
import { Phone, Share2, Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export const MobileActionDock: React.FC = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

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

  const handleShare = async () => {
    trackEvent("mobile_dock_share", { location: "dock" });
    const shareUrl = typeof window !== "undefined" ? window.location.href : "https://www.cleanorakannur.com";
    const shareTitle = "Cleanora - Deep Cleaning & Relocations Kannur";
    const shareText =
      language === "ml"
        ? "ക്ലീനോറ ഡീപ് ക്ലീനിംഗ് & പാക്കേഴ്സ് മൂവേഴ്സ് കണ്ണൂർ - വീട്, ഓഫീസ് സർവീസുകൾ"
        : "Cleanora Deep Cleaning & Relocations - Mattanur & Kannur Kerala";

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } catch (err: any) {
        if (err?.name !== "AbortError") {
          fallbackCopy(shareUrl);
        }
      }
    } else {
      fallbackCopy(shareUrl);
    }
  };

  const fallbackCopy = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="mobile-action-dock" role="navigation" aria-label="Mobile quick actions">
      {/* 1. Direct Phone Call */}
      <button
        onClick={handleCall}
        aria-label="Call Cleanora"
        style={{
          flex: 1,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          padding: "0 6px",
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          color: "var(--color-primary)",
          border: "1px solid #cbd5e1",
          fontWeight: 700,
          fontSize: language === "ml" ? "0.72rem" : "0.75rem",
          height: "38px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          whiteSpace: "nowrap",
          cursor: "pointer",
        }}
      >
        <Phone size={14} color="var(--color-primary)" style={{ flexShrink: 0 }} />
        <span>{language === "ml" ? "വിളിക്കാം" : "Call Now"}</span>
      </button>

      {/* 2. Share Website Button with Text */}
      <button
        onClick={handleShare}
        aria-label="Share Cleanora website"
        style={{
          flex: 1,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          padding: "0 6px",
          borderRadius: "10px",
          backgroundColor: copied ? "var(--color-accent-subtle)" : "#ffffff",
          color: copied ? "var(--color-accent)" : "var(--color-primary)",
          border: copied ? "1px solid var(--color-accent)" : "1px solid #cbd5e1",
          fontWeight: 700,
          fontSize: language === "ml" ? "0.72rem" : "0.75rem",
          height: "38px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          whiteSpace: "nowrap",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        {copied ? (
          <Check size={14} color="var(--color-accent)" style={{ flexShrink: 0 }} />
        ) : (
          <Share2 size={14} color="var(--color-primary)" style={{ flexShrink: 0 }} />
        )}
        <span>{copied ? (language === "ml" ? "പകർത്തി" : "Copied!") : (language === "ml" ? "ഷെയർ" : "Share")}</span>
      </button>

      {/* 3. WhatsApp Direct Booking */}
      <button
        onClick={handleWhatsApp}
        aria-label="Book on WhatsApp"
        style={{
          flex: 1.15,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          padding: "0 8px",
          borderRadius: "10px",
          backgroundColor: "#25D366",
          color: "#ffffff",
          fontWeight: 700,
          fontSize: language === "ml" ? "0.72rem" : "0.75rem",
          boxShadow: "0 2px 8px rgba(37, 211, 102, 0.3)",
          height: "38px",
          border: "none",
          whiteSpace: "nowrap",
          cursor: "pointer",
        }}
      >
        <WhatsAppIcon size={15} style={{ flexShrink: 0 }} />
        <span>{language === "ml" ? "വാട്സാപ്പ്" : "WhatsApp"}</span>
      </button>
    </div>
  );
};
