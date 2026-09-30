"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export const ServiceAreas: React.FC = () => {
  const { language, t } = useLanguage();

  const areas = [
    { name: "Mattanur (മട്ടന്നൂർ)", highlight: true },
    { name: "Kannur Town (കണ്ണൂർ)", highlight: true },
    { name: "Thalassery (തലശ്ശേരി)", highlight: false },
    { name: "Payyanur (പയ്യന്നൂർ)", highlight: false },
    { name: "Taliparamba (തളിപ്പറമ്പ്)", highlight: false },
    { name: "Iritty (ഇരിട്ടി)", highlight: true },
    { name: "Kuthuparamba (കൂത്തുപറമ്പ്)", highlight: true },
    { name: "Anjarakandy (അഞ്ചരക്കണ്ടി)", highlight: false },
    { name: "Chakkarakkal (ചക്കരക്കൽ)", highlight: false },
    { name: "Panoor (പാനൂർ)", highlight: false },
    { name: "Pinarayi (പിണറായി)", highlight: false },
    { name: "Across Kannur District (കണ്ണൂർ ജില്ല മുഴുവൻ)", highlight: true },
  ];

  return (
    <section className="section section-bg-subtle">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MapPin size={14} />
            <span>{t("coverage_badge")}</span>
          </div>
          <h2 className="section-title">
            {t("coverage_title")}
          </h2>
          <p className="section-subtitle">
            {t("coverage_subtitle")}
          </p>
        </div>

        {/* 2-Column Grid: Location Landscape Visual + Areas List & Direct Contacts */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
          }}
          className="coverage-grid"
        >
          {/* Location Landscape Image using location_kerala.png */}
          <div
            style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 40px -10px rgba(11, 27, 43, 0.15)",
              aspectRatio: "4/3",
              backgroundColor: "#0b1b2b",
              border: "1px solid #e2e8f0",
            }}
          >
            <Image
              src="/images/location_kerala.png"
              alt="Cleanora Service Coverage in Mattanur Kannur Kerala"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              style={{ objectFit: "cover" }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                right: "16px",
                backgroundColor: "rgba(11, 27, 43, 0.9)",
                backdropFilter: "blur(10px)",
                padding: "12px 18px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#ffffff",
              }}
            >
              <div>
                <div style={{ fontSize: "0.75rem", color: "#34d399", fontWeight: 700, textTransform: "uppercase" }}>
                  {language === "ml" ? "മട്ടന്നൂർ • കണ്ണൂർ" : "Mattanur • Kannur"}
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700 }}>
                  {language === "ml" ? "സമ്പൂർണ്ണ സർവീസ് കവറേജ്" : "District-Wide Coverage"}
                </div>
              </div>
              <CheckCircle2 size={22} color="#34d399" />
            </div>
          </div>

          {/* Area Tags & Direct Call Box */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {areas.map((area) => (
                <div
                  key={area.name}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 14px",
                    borderRadius: "10px",
                    backgroundColor: area.highlight ? "var(--color-primary-subtle)" : "#ffffff",
                    border: area.highlight ? "1px solid #cbdcf2" : "1px solid #e2e8f0",
                    color: area.highlight ? "var(--color-primary)" : "#334155",
                    fontSize: "0.875rem",
                    fontWeight: area.highlight ? 700 : 500,
                  }}
                >
                  <MapPin size={13} color={area.highlight ? "var(--color-primary)" : "#94a3b8"} />
                  <span>{area.name}</span>
                </div>
              ))}
            </div>

            {/* Quick Direct Contacts Card */}
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 12px rgba(15, 23, 42, 0.04)",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700 }}>
                {language === "ml" ? "സർവീസ് ബുക്കിംഗിനായി ബന്ധപ്പെടാം" : "Direct Service Booking & Inquiries"}
              </h4>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                  onClick={() => trackEvent("phone_call_click", { location: "service_areas" })}
                  className="btn btn-outline btn-sm"
                  style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px" }}
                >
                  <Phone size={15} color="var(--color-primary)" />
                  <span>{siteConfig.contact.primaryPhone}</span>
                </a>

                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "service_areas" })}
                  className="btn btn-whatsapp btn-sm"
                  style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px" }}
                >
                  <MessageCircle size={15} />
                  <span>{t("book_via_whatsapp")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
