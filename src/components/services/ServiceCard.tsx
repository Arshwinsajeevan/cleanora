"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { ServiceItem } from "@/data/services";
import { createWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { language, t } = useLanguage();

  const name = language === "ml" ? service.nameMl : service.nameEn;
  const description = language === "ml" ? service.shortDescriptionMl : service.shortDescriptionEn;
  const highlights = language === "ml" ? service.highlightsMl : service.highlightsEn;
  const badge = language === "ml" ? service.badgeMl : service.badgeEn;
  const whatsappMsg = language === "ml" ? service.whatsappMessageMl : service.whatsappMessageEn;

  const handleWhatsAppEnquiry = () => {
    trackEvent("service_enquiry_whatsapp", { service_id: service.id, service_name: service.nameEn });
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        overflow: "hidden",
        border: "1px solid #e2e8f0",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: "0 4px 14px rgba(15, 23, 42, 0.04)",
      }}
      className="service-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 16px 32px rgba(15, 23, 42, 0.09)";
        e.currentTarget.style.borderColor = "#cbd5e1";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 14px rgba(15, 23, 42, 0.04)";
        e.currentTarget.style.borderColor = "#e2e8f0";
      }}
    >
      {/* Card Image */}
      <div style={{ position: "relative", width: "100%", height: "230px", backgroundColor: "#0b1b2b" }}>
        <Image
          src={service.image}
          alt={`${name} - Cleanora Kannur`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
          style={{ objectFit: "cover" }}
        />

        {badge && (
          <div
            style={{
              position: "absolute",
              top: "14px",
              left: "14px",
              backgroundColor: "rgba(11, 27, 43, 0.92)",
              backdropFilter: "blur(6px)",
              color: "#34d399",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              padding: "4px 10px",
              borderRadius: "6px",
              border: "1px solid rgba(52, 211, 153, 0.3)",
            }}
          >
            {badge}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "8px",
              lineHeight: 1.3,
            }}
          >
            {name}
          </h3>

          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              lineHeight: 1.55,
              marginBottom: "16px",
            }}
          >
            {description}
          </p>

          {/* Highlights checklist */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {highlights.slice(0, 3).map((item, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <Check size={15} color="#059669" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span style={{ fontSize: "0.8125rem", color: "#334155", lineHeight: 1.4 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div style={{ paddingTop: "14px", borderTop: "1px solid #f1f5f9" }}>
          <a
            href={createWhatsAppUrl(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppEnquiry}
            className="btn btn-whatsapp btn-sm"
            style={{
              width: "100%",
              backgroundColor: "#25D366",
              color: "#ffffff",
              padding: "11px 14px",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "0.875rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              textDecoration: "none",
              boxShadow: "0 3px 10px rgba(37, 211, 102, 0.25)",
            }}
          >
            <WhatsAppIcon size={16} />
            <span>{t("enquire_whatsapp")}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

