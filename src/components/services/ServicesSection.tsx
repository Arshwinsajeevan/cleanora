"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { useLanguage } from "@/context/LanguageContext";

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: t("tab_all") },
    { id: "packers", label: t("tab_packers") },
    { id: "residential", label: t("tab_residential") },
    { id: "deep", label: t("tab_deep") },
    { id: "commercial", label: t("tab_commercial") },
  ];

  const filteredServices = servicesData.filter((service) => {
    if (activeFilter === "packers") {
      return ["packers-and-movers"].includes(service.id);
    }
    if (activeFilter === "residential") {
      return [
        "house-cleaning",
        "packers-and-movers",
        "sofa-carpet-cleaning",
        "kitchen-deep-cleaning",
        "bathroom-deep-cleaning",
      ].includes(service.id);
    }
    if (activeFilter === "deep") {
      return [
        "water-tank-cleaning",
        "solar-panel-cleaning",
        "interlock-cleaning",
        "kitchen-deep-cleaning",
        "bathroom-deep-cleaning",
      ].includes(service.id);
    }
    if (activeFilter === "commercial") {
      return [
        "office-cleaning",
        "packers-and-movers",
        "solar-panel-cleaning",
        "water-tank-cleaning",
        "interlock-cleaning",
      ].includes(service.id);
    }
    return true;
  });

  return (
    <section id="services" className="section section-bg-subtle">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>{t("services_badge")}</span>
          </div>
          <h2 className="section-title">
            {t("services_title")}
          </h2>
          <p className="section-subtitle">
            {t("services_subtitle")}
          </p>
        </div>

        {/* Mobile Swipeable / Desktop Centered Filter Chips */}
        <div
          className="scroll-chips"
          style={{
            justifyContent: "center",
            marginBottom: "40px",
            padding: "4px 0 12px 0",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              style={{
                padding: "8px 20px",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: 700,
                whiteSpace: "nowrap",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                backgroundColor: activeFilter === cat.id ? "var(--color-primary)" : "#ffffff",
                color: activeFilter === cat.id ? "#ffffff" : "var(--text-secondary)",
                border: activeFilter === cat.id ? "1px solid var(--color-primary)" : "1px solid var(--border-light)",
                boxShadow: activeFilter === cat.id ? "0 4px 14px rgba(7, 30, 61, 0.2)" : "var(--shadow-subtle)",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "28px",
          }}
          className="services-grid"
        >
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Section Bottom Banner */}
        <div
          style={{
            marginTop: "48px",
            backgroundColor: "#ffffff",
            padding: "24px 32px",
            borderRadius: "18px",
            border: "1px solid var(--border-light)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            boxShadow: "var(--shadow-subtle)",
          }}
        >
          <div style={{ textAlign: "left", maxWidth: "600px" }}>
            <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.125rem", fontWeight: 700, color: "var(--text-primary)" }}>
              {t("custom_requirement_title")}
            </h4>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "2px" }}>
              {t("custom_requirement_sub")}
            </p>
          </div>

          <Link href="/contact" className="btn btn-outline btn-sm">
            <span>{t("discuss_custom_scope")}</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};