"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Calendar, Rocket } from "lucide-react";
import { createWhatsAppUrl } from "@/data/site";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPage() {
  const { language, t } = useLanguage();

  const prebookWhatsAppUrl =
    language === "ml"
      ? "https://wa.me/919496840540?text=നമസ്കാരം%20ക്ലീനോറ%2C%20ഉദ്ഘാടനത്തോടനുബന്ധിച്ചുള്ള%20സ്പെഷ്യൽ%20ക്ലീനിംഗ്%20സ്ലോട്ട്%20മുൻകൂട്ടി%20ബുക്ക്%20ചെയ്യാൻ%20ആഗ്രഹിക്കുന്നു!"
      : "https://wa.me/919496840540?text=Hi%20Cleanora%2C%20I%20would%20like%20to%20pre-book%20a%20priority%20cleaning%20slot%20for%20your%20inaugural%20launch%20week%20in%20Kannur!";

  return (
    <>
      {/* Page Header */}
      <section
        style={{
          backgroundColor: "#071426",
          color: "#ffffff",
          padding: "64px 0 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ maxWidth: "780px", position: "relative", zIndex: 10 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              color: "#34d399",
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "16px",
            }}
          >
            <Sparkles size={14} />
            <span>{t("nav_work")} • Cleanora</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              fontWeight: 800,
              marginBottom: "14px",
              lineHeight: 1.2,
            }}
          >
            {language === "ml" ? "ഞങ്ങളുടെ യാത്ര & ഉദ്ഘാടനം" : "Our Journey & Inauguration"}
          </h1>

          <p style={{ fontSize: "1.0625rem", color: "#cbd5e1", lineHeight: 1.65 }}>
            {language === "ml"
              ? "കണ്ണൂരിലെ വീടുകൾക്കും സ്ഥാപനങ്ങൾക്കും പുതിയൊരു ക്ലീനിംഗ് അനുഭവം നൽകാൻ ക്ലീനോറ അടുത്ത ആഴ്ച തുടക്കം കുറിക്കുന്നു."
              : "Setting a new standard for home, water tank, solar panel, and commercial deep cleaning across Kannur, Kerala."}
          </p>
        </div>
      </section>

      {/* Grand Opening & Journey Card */}
      <section className="section" style={{ backgroundColor: "#f8fafc", padding: "60px 0 80px" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div
            style={{
              backgroundColor: "#0b1b2b",
              color: "#ffffff",
              borderRadius: "24px",
              padding: "48px 40px",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              boxShadow: "0 20px 45px rgba(11, 27, 43, 0.2)",
              position: "relative",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            {/* Ambient Background Glow */}
            <div
              style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                filter: "blur(50px)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 10, maxWidth: "720px", margin: "0 auto" }}>
              {/* Grand Opening Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 16px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  color: "#34d399",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "20px",
                }}
              >
                <Rocket size={15} />
                <span>{language === "ml" ? "ഉദ്ഘാടനം ഉടൻ • മട്ടന്നൂർ, കണ്ണൂർ" : "Grand Opening Soon • Mattanur, Kannur"}</span>
              </div>

              {/* Title */}
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.35rem)",
                  fontWeight: 800,
                  marginBottom: "16px",
                  lineHeight: 1.25,
                  color: "#ffffff",
                }}
              >
                {language === "ml" ? "കണ്ണൂരിൽ ഞങ്ങളുടെ യാത്ര ആരംഭിക്കുന്നു" : "Starting Our Journey in Kannur"}
              </h2>

              {/* Subtitle / Description */}
              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "1.0625rem",
                  lineHeight: 1.75,
                  marginBottom: "32px",
                }}
              >
                {language === "ml"
                  ? "ക്ലീനോറ ഡീപ് ക്ലീനിംഗ് സർവീസുകൾ അടുത്ത ആഴ്ച മുതൽ മട്ടന്നൂരിലും കണ്ണൂർ ജില്ലയിലും ഔദ്യോഗികമായി ആരംഭിക്കുന്നു! നിങ്ങളുടെ വീടും സ്ഥാപനങ്ങളും പുത്തൻപോലെ വൃത്തിയാക്കാൻ ഇപ്പോൾ തന്നെ മുൻകൂട്ടി ബുക്ക് ചെയ്യാം."
                  : "Cleanora Deep Cleaning is officially launching its specialized services across Mattanur and Kannur district next week! We are dedicated to providing pure, hygienic living spaces with professional equipment and transparent service."}
              </p>

              {/* Pre-Book CTA Button */}
              <div>
                <a
                  href={prebookWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                  style={{
                    backgroundColor: "#25D366",
                    color: "#ffffff",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    fontWeight: 700,
                    fontSize: "1.0625rem",
                    padding: "16px 32px",
                    borderRadius: "12px",
                    boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4)",
                  }}
                >
                  <Calendar size={20} />
                  <span>{language === "ml" ? "ഉദ്ഘാടന സ്ലോട്ട് വാട്സാപ്പിൽ ബുക്ക് ചെയ്യാം" : "Pre-Book Inaugural Slot via WhatsApp"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
