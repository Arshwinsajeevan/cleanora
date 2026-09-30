"use client";

import React from "react";
import Image from "next/image";
import { Wrench, Shield, CheckCircle2, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const EquipmentSection: React.FC = () => {
  const { t } = useLanguage();

  const equipmentList = [
    {
      title: t("equipment_1_title"),
      desc: t("equipment_1_desc"),
      icon: <Zap size={20} color="#34d399" />,
    },
    {
      title: t("equipment_2_title"),
      desc: t("equipment_2_desc"),
      icon: <Wrench size={20} color="#60a5fa" />,
    },
    {
      title: t("equipment_3_title"),
      desc: t("equipment_3_desc"),
      icon: <Shield size={20} color="#34d399" />,
    },
    {
      title: t("equipment_4_title"),
      desc: t("equipment_4_desc"),
      icon: <CheckCircle2 size={20} color="#60a5fa" />,
    },
  ];

  return (
    <section id="machinery" className="section section-bg-subtle">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge blue">
            <Wrench size={14} />
            <span>{t("equipments_badge")}</span>
          </div>
          <h2 className="section-title">
            {t("equipments_title")}
          </h2>
          <p className="section-subtitle">
            {t("equipments_subtitle")}
          </p>
        </div>

        {/* 2-Column Grid: Visual Equipment Showcase + Feature Points */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="equipment-grid"
        >
          {/* Visual: equipments.png */}
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
              src="/images/equipments.png"
              alt="Cleanora Professional Cleaning Machinery Kit"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* 4 Feature Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
            {equipmentList.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#ffffff",
                  padding: "20px 24px",
                  borderRadius: "14px",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  boxShadow: "0 2px 8px rgba(15, 23, 42, 0.03)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#cbd5e1";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    backgroundColor: idx % 2 === 0 ? "#ecfdf5" : "#eff6ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
