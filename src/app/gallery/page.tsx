"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, MapPin, CheckCircle2, MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "@/data/site";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPage() {
  const { language, t } = useLanguage();

  const bookingWhatsAppUrl =
    language === "ml"
      ? "https://wa.me/919496840540?text=നമസ്കാരം%20ക്ലീനോറ%2C%20മലബാർ%20പ്ലാസ%20മട്ടന്നൂർ%20ഓഫീസിൽ%20നിന്നുള്ള%20ക്ലീനിംഗ്%20/%20ഷിഫ്റ്റിംഗ്%20സർവീസിനായി%20ബന്ധപ്പെടുന്നു."
      : "https://wa.me/919496840540?text=Hi%20Cleanora%2C%20I%20would%20like%20to%20book%20a%20cleaning%20or%20shifting%20service%20from%20your%20Malabar%20Plaza%20Mattanur%20branch.";

  return (
    <>
      {/* Page Header */}
      <section
        style={{
          backgroundColor: "#071426",
          color: "#ffffff",
          padding: "56px 0 44px",
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
              padding: "5px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              color: "#34d399",
              fontSize: "0.78rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "14px",
            }}
          >
            <Sparkles size={14} />
            <span>{t("nav_work")} • Cleanora</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.85rem, 3.5vw, 2.65rem)",
              fontWeight: 800,
              marginBottom: "12px",
              lineHeight: 1.2,
            }}
          >
            {language === "ml"
              ? "ഞങ്ങളുടെ വർക്കുകൾ & സർവീസുകൾ"
              : "Our Work & Completed Projects"}
          </h1>

          <p style={{ fontSize: "1rem", color: "#cbd5e1", lineHeight: 1.65 }}>
            {language === "ml"
              ? "മലബാർ പ്ലാസ, മട്ടന്നൂർ കേന്ദ്രീകരിച്ച് കണ്ണൂർ ജില്ലയിലുടനീളം വീടുകൾക്കും സ്ഥാപനങ്ങൾക്കും നൽകിയ പ്രൊഫഷണൽ ക്ലീനിംഗ് സേവനങ്ങൾ."
              : "Delivering premier residential and commercial deep cleaning and relocation services across Kannur from our headquarters at Malabar Plaza, Mattanur."}
          </p>
        </div>
      </section>

      {/* Active Service & Location Card */}
      <section className="section" style={{ backgroundColor: "#f8fafc", padding: "50px 0 70px" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div
            style={{
              backgroundColor: "#0b1b2b",
              color: "#ffffff",
              borderRadius: "24px",
              padding: "44px 36px",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              boxShadow: "0 20px 45px rgba(11, 27, 43, 0.15)",
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
              {/* Location & Active Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  color: "#34d399",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "18px",
                }}
              >
                <MapPin size={14} />
                <span>
                  {language === "ml"
                    ? "മലബാർ പ്ലാസ, മട്ടന്നൂർ • കണ്ണൂർ"
                    : "Malabar Plaza, Mattanur • Kannur"}
                </span>
              </div>

              {/* Title */}
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)",
                  fontWeight: 800,
                  marginBottom: "14px",
                  lineHeight: 1.25,
                  color: "#ffffff",
                }}
              >
                {language === "ml"
                  ? "മലബാർ പ്ലാസ, മട്ടന്നൂർ ആസ്ഥാനമായി വിശ്വസ്ത സേവനം"
                  : "Now Actively Serving Across Kannur District"}
              </h2>

              {/* Subtitle / Description */}
              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                }}
              >
                {language === "ml"
                  ? "ക്ലീനോറ മലബാർ പ്ലാസ, മട്ടന്നൂർ ആസ്ഥാനമായി കണ്ണൂർ ജില്ലയിലുടനീളം വീടുകൾ, ഓഫീസുകൾ, വാട്ടർ ടാങ്ക്, സോഫ, ഇന്റർലോക്ക് ഡീപ് ക്ലീനിംഗും പാക്കേഴ്സ് & മൂവേഴ്സ് ഷിഫ്റ്റിംഗ് സർവീസുകളും സജീവമായി നൽകിവരുന്നു. വേഗത്തിലുള്ള സർവീസിനായി ഇപ്പോൾ തന്നെ ബന്ധപ്പെടാം."
                  : "Operating from Malabar Plaza, Mattanur, Cleanora is actively delivering professional deep cleaning and damage-free household relocation services across all areas of Kannur. Contact our team for instant scheduling and upfront quotes."}
              </p>

              {/* Pre-Book CTA Button */}
              <div>
                <a
                  href={bookingWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                  style={{
                    backgroundColor: "#25D366",
                    color: "#ffffff",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    padding: "13px 26px",
                    borderRadius: "12px",
                    boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4)",
                  }}
                >
                  <MessageCircle size={18} />
                  <span>
                    {language === "ml"
                      ? "വാട്സാപ്പിൽ സർവീസ് ബുക്ക് ചെയ്യാം"
                      : "Book Service via WhatsApp"}
                  </span>
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
