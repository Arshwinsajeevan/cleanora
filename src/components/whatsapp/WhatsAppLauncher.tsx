"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Sparkles, Send, PhoneCall, Calendar, HelpCircle, CheckCircle2, Truck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export const WhatsAppLauncher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, t } = useLanguage();

  const quickActions = [
    {
      id: "packers_movers",
      labelEn: "Packers & Movers Shifting",
      labelMl: "പാക്കേഴ്‌സ് & മൂവേഴ്‌സ് (ഷിഫ്റ്റിംഗ്)",
      icon: <Truck size={16} color="#059669" />,
      msgEn: "Hi Cleanora, I would like to enquire about Packers and Movers / Shifting service in and around Kannur.",
      msgMl: "നമസ്കാരം ക്ലീനോറ, കണ്ണൂരിലെ പാക്കേഴ്‌സ് & മൂവേഴ്‌സ് / ഷിഫ്റ്റിംഗ് സർവീസിനെക്കുറിച്ച് അറിയാൻ ആഗ്രഹിക്കുന്നു.",
    },
    {
      id: "house_office",
      labelEn: "House or Office Deep Cleaning",
      labelMl: "വീട് / ഓഫീസ് ഡീപ് ക്ലീനിംഗ്",
      icon: <Sparkles size={16} color="#10b981" />,
      msgEn: "Hi Cleanora, I would like to book House / Office Deep Cleaning in Mattanur, Kannur.",
      msgMl: "നമസ്കാരം ക്ലീനോറ, വീട് / ഓഫീസ് ഡീപ് ക്ലീനിംഗ് ബുക്ക് ചെയ്യാൻ ആഗ്രഹിക്കുന്നു.",
    },
    {
      id: "tank_solar",
      labelEn: "Water Tank / Solar Panel Cleaning",
      labelMl: "വാട്ടർ ടാങ്ക് / സോളാർ ക്ലീനിംഗ്",
      icon: <Calendar size={16} color="#3b82f6" />,
      msgEn: "Hi Cleanora, I would like to enquire about Water Tank Cleaning / Solar Panel Cleaning in Kannur.",
      msgMl: "നമസ്കാരം ക്ലീനോറ, വാട്ടർ ടാങ്ക് / സോളാർ പാനൽ ക്ലീനിംഗ് സർവീസിനെക്കുറിച്ച് അറിയാൻ ആഗ്രഹിക്കുന്നു.",
    },
    {
      id: "sofa_interlock",
      labelEn: "Sofa, Carpet & Interlock Wash",
      labelMl: "സോഫ & ഇന്റർലോക്ക് പ്രഷർ വാഷ്",
      icon: <HelpCircle size={16} color="#8b5cf6" />,
      msgEn: "Hi Cleanora, I would like to get a quote for Sofa, Carpet Shampooing or Interlock Jet Washing in Kannur.",
      msgMl: "നമസ്കാരം ക്ലീനോറ, സോഫ ഷാംപൂ വാഷിംഗ് / ഇന്റർലോക്ക് ജെറ്റ് വാഷിംഗ് എന്നിവയുടെ വിവരങ്ങൾ അറിയാൻ ആഗ്രഹിക്കുന്നു.",
    },
    {
      id: "direct",
      labelEn: "Chat Directly with Cleanora",
      labelMl: "നേരിട്ട് സംസാരിക്കാം",
      icon: <PhoneCall size={16} color="#0284c7" />,
      msgEn: "Hi Cleanora (Mattanur, Kannur), I found your website and have an enquiry regarding your services.",
      msgMl: "നമസ്കാരം ക്ലീനോറ, നിങ്ങളുടെ സർവീസുകളെക്കുറിച്ചുള്ള അന്വേഷണങ്ങൾക്കായി ബന്ധപ്പെടുന്നു.",
    },
  ];

  const handleActionClick = (msg: string, actionId: string) => {
    trackEvent("whatsapp_quick_action", { action_id: actionId });
    const url = createWhatsAppUrl(msg);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 990,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
        className="whatsapp-launcher-wrapper hide-mobile"
      >
        {/* Expanded Quick Action Dialog */}
        {isOpen && (
          <div
            style={{
              width: "320px",
              maxWidth: "calc(100vw - 32px)",
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              boxShadow: "0 12px 36px -4px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(15, 23, 42, 0.06)",
              marginBottom: "14px",
              overflow: "hidden",
              animation: "slideUpFade 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Header */}
            <div
              style={{
                backgroundColor: "var(--color-primary)",
                padding: "18px",
                color: "#ffffff",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      position: "relative",
                      border: "2px solid #10b981",
                      backgroundColor: "#ffffff",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src="/images/cleanora-logo.jpg"
                      alt="Cleanora Official Logo"
                      fill
                      sizes="44px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#10b981",
                          boxShadow: "0 0 8px #10b981",
                        }}
                      />
                      <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#93c5fd", textTransform: "uppercase" }}>
                        Online & Responsive
                      </span>
                    </div>
                    <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.0625rem", fontWeight: 700 }}>
                      {t("chat_header_title")}
                    </h4>
                    <p style={{ fontSize: "0.75rem", color: "#cbd5e1" }}>
                      {t("chat_header_sub")}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: "#94a3b8",
                    padding: "4px",
                    borderRadius: "6px",
                  }}
                  aria-label="Close dialog"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Intro statement */}
            <div style={{ padding: "16px 18px 10px 18px", backgroundColor: "#f8fafc", borderBottom: "1px solid #f1f5f9" }}>
              <p style={{ fontSize: "0.875rem", color: "#334155", lineHeight: "1.4" }}>
                {t("chat_intro")}
              </p>
            </div>

            {/* Quick Action Options */}
            <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {quickActions.map((action) => {
                const label = language === "ml" ? action.labelMl : action.labelEn;
                const msg = language === "ml" ? action.msgMl : action.msgEn;
                return (
                  <button
                    key={action.id}
                    onClick={() => handleActionClick(msg, action.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "10px 12px",
                      borderRadius: "10px",
                      border: "1px solid #e2e8f0",
                      backgroundColor: "#ffffff",
                      textAlign: "left",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        backgroundColor: "#f1f5f9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {action.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)" }}>
                        {label}
                      </div>
                    </div>
                    <Send size={14} color="#94a3b8" />
                  </button>
                );
              })}
            </div>

            {/* Micro footer guarantee */}
            <div
              style={{
                padding: "10px 18px",
                borderTop: "1px solid #f1f5f9",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.75rem",
                color: "#64748b",
                backgroundColor: "#fcfcfc",
              }}
            >
              <CheckCircle2 size={13} color="#10b981" />
              <span>{t("chat_guarantee")}</span>
            </div>
          </div>
        )}

        {/* Floating Trigger Pill */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Cleanora WhatsApp actions"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 20px",
            borderRadius: "9999px",
            backgroundColor: "#25D366",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "0.9375rem",
            boxShadow: "0 8px 24px rgba(37, 211, 102, 0.4)",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div style={{ position: "relative" }}>
            <WhatsAppIcon size={22} />
            <span
              style={{
                position: "absolute",
                top: "-2px",
                right: "-2px",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
              }}
            />
          </div>
          <span>{language === "ml" ? "വാട്സാപ്പ് ചെയ്യാം" : "WhatsApp Cleanora"}</span>
        </button>
      </div>
    </>
  );
};
