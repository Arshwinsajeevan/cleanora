"use client";

import React from "react";
import { Phone, Mail, MapPin, ShieldCheck, Clock } from "lucide-react";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { WhatsAppBookingForm } from "./WhatsAppBookingForm";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="contact" className="section section-bg-subtle">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Phone size={14} />
            <span>{language === "ml" ? "കോൺടാക്റ്റ് & ബുക്കിംഗ്" : "Contact & Bookings"}</span>
          </div>
          <h2 className="section-title">
            {language === "ml"
              ? "നിങ്ങളുടെ സ്ഥലം ക്ലീനോറയിലൂടെ തിളങ്ങട്ടെ"
              : "Get your space cleaned with Cleanora"}
          </h2>
          <p className="section-subtitle">
            {language === "ml"
              ? "വാട്സാപ്പ് വഴിയോ ഫോൺ കോളിലൂടെയോ ഞങ്ങളുമായി ബന്ധപ്പെടാം. മികച്ച സർവീസും വ്യക്തമായ ചാർജുകളും ഉറപ്പ് നൽകുന്നു."
              : "Reach out via WhatsApp, phone, or fill our quick form to receive an upfront estimate and book your preferred date in Kannur."}
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "32px",
            alignItems: "start",
            width: "100%",
          }}
          className="contact-layout"
        >
          {/* Form Column */}
          <WhatsAppBookingForm />

          {/* Direct Contact & Info Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "clamp(20px, 4vw, 32px)",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 14px rgba(15, 23, 42, 0.04)",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <h4
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  marginBottom: "6px",
                }}
              >
                {language === "ml" ? "നേരിട്ട് ബന്ധപ്പെടാം" : "Direct Contact Channels"}
              </h4>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--text-muted)",
                  marginBottom: "20px",
                  lineHeight: 1.5,
                }}
              >
                {language === "ml"
                  ? "കണ്ണൂർ ജില്ലയിലെവിടെയും വേഗത്തിലുള്ള സേവനത്തിനായി വിളിക്കാം അല്ലെങ്കിൽ മെസ്സേജ് അയക്കാം."
                  : "Call or message us anytime for rapid deep cleaning bookings across Kannur district."}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {/* Instant WhatsApp Button */}
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "contact_page_direct" })}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    backgroundColor: "#ecfdf5",
                    border: "1px solid #a7f3d0",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      backgroundColor: "#25D366",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      flexShrink: 0,
                    }}
                  >
                    <WhatsAppIcon size={22} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: "0.75rem", color: "#047857", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.02em" }}>
                      {language === "ml" ? "തത്സമയ വാട്സാപ്പ്" : "Instant WhatsApp"}
                    </div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#065f46" }}>
                      {language === "ml" ? "ക്ലീനോറയുമായി ചാറ്റ് ചെയ്യാം" : "Chat Directly with Cleanora"}
                    </div>
                  </div>
                </a>

                {/* Primary Phone */}
                <a
                  href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                  onClick={() => trackEvent("phone_call_click", { location: "contact_page_primary" })}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "#eef4fc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-primary)",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
                      {language === "ml" ? "പ്രധാന ഫോൺ നമ്പർ" : "Primary Phone"}
                    </div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)" }}>
                      {siteConfig.contact.primaryPhone}
                    </div>
                  </div>
                </a>

                {/* Secondary Phone */}
                <a
                  href={`tel:${siteConfig.contact.secondaryPhoneRaw}`}
                  onClick={() => trackEvent("phone_call_click", { location: "contact_page_secondary" })}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "#eef4fc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-primary)",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
                      {language === "ml" ? "മറ്റൊരു നമ്പർ" : "Secondary Contact"}
                    </div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)" }}>
                      {siteConfig.contact.secondaryPhone}
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  onClick={() => trackEvent("email_click", { location: "contact_page" })}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "#f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#64748b",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div style={{ minWidth: 0, overflow: "hidden" }}>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
                      {language === "ml" ? "ഇമെയിൽ വിലാസം" : "Email Address"}
                    </div>
                    <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)", wordBreak: "break-all" }}>
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </a>

                {/* Facebook */}
                <a
                  href={siteConfig.social.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("facebook_click", { location: "contact_page" })}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    backgroundColor: "#eff6ff",
                    border: "1px solid #bfdbfe",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "#1877F2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      flexShrink: 0,
                    }}
                  >
                    <FacebookIcon size={18} color="#ffffff" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#1e40af", fontWeight: 700, textTransform: "uppercase" }}>
                      Facebook Page
                    </div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1e3a8a" }}>
                      {siteConfig.social.facebookHandle}
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={siteConfig.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("instagram_click", { location: "contact_page" })}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    backgroundColor: "#fdf2f8",
                    border: "1px solid #fbcfe8",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "#e1306c",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      flexShrink: 0,
                    }}
                  >
                    <InstagramIcon size={18} color="#ffffff" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#9d174d", fontWeight: 700, textTransform: "uppercase" }}>
                      Instagram
                    </div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#831843" }}>
                      {siteConfig.social.instagramHandle}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Satisfaction Guarantee Card */}
            <div
              style={{
                backgroundColor: "var(--color-primary)",
                color: "#ffffff",
                padding: "20px 24px",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                boxSizing: "border-box",
                width: "100%",
              }}
            >
              <ShieldCheck size={32} color="#34d399" style={{ flexShrink: 0 }} />
              <div>
                <h5 style={{ fontWeight: 700, fontSize: "0.9375rem" }}>
                  {language === "ml" ? "100% സംതൃപ്തി ഉറപ്പ്" : "100% Satisfaction Guaranteed"}
                </h5>
                <p style={{ fontSize: "0.8125rem", color: "#cbd5e1", marginTop: "2px", lineHeight: 1.45 }}>
                  {language === "ml"
                    ? "വർക്ക് പൂർത്തിയായ ശേഷം ഉപഭോക്താവിന്റെ പൂർണ്ണ സംതൃപ്തി ഉറപ്പുവരുത്തുന്നു."
                    : "We ensure an inspection walkthrough before completing the project to guarantee your absolute satisfaction."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


