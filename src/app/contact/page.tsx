"use client";

import React from "react";
import { Phone, Sparkles } from "lucide-react";
import { ContactSection } from "@/components/contact/ContactSection";
import { ServiceAreas } from "@/components/local/ServiceAreas";
import { FAQSection } from "@/components/faq/FAQSection";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { language, t } = useLanguage();

  return (
    <>
      {/* Page Header */}
      <section
        style={{
          backgroundColor: "#071426",
          color: "#ffffff",
          padding: "64px 0",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "780px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              color: "#34d399",
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "16px",
            }}
          >
            <Phone size={14} />
            <span>{t("nav_contact")} • Cleanora</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              fontWeight: 800,
              marginBottom: "16px",
            }}
          >
            {language === "ml" ? "ക്ലീനോറയുമായി ബന്ധപ്പെടാം & ബുക്കിംഗ്" : "Contact & Service Booking"}
          </h1>

          <p style={{ fontSize: "1.0625rem", color: "#cbd5e1", lineHeight: 1.65 }}>
            {language === "ml"
              ? "കണ്ണൂരിലെ നിങ്ങളുടെ വീടും സ്ഥാപനങ്ങളും വൃത്തിയാക്കാനുള്ള ആവശ്യങ്ങൾക്കായി ഞങ്ങളുടെ മട്ടന്നൂർ ഓഫീസുമായി വാട്സാപ്പിലോ ഫോണിലോ നേരിട്ട് സംസാരിക്കാം."
              : "Ready for a spotless home, water tank, or workplace in Kannur? Contact our friendly local team for prompt scheduling and customized cleaning quotes."}
          </p>
        </div>
      </section>

      {/* Main Contact & Booking Component */}
      <ContactSection />

      {/* Local Coverage Areas */}
      <ServiceAreas />

      {/* FAQ */}
      <FAQSection />
    </>
  );
}
