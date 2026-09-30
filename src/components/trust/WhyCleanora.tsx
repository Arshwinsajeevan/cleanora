"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Sparkles, MapPin, BadgePercent, ThumbsUp, Wrench, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const WhyCleanora: React.FC = () => {
  const { language, t } = useLanguage();

  const reasons = [
    {
      icon: <ShieldCheck size={24} color="#10b981" />,
      title: t("why_1_title"),
      description: t("why_1_desc"),
    },
    {
      icon: <Wrench size={24} color="#0f3b74" />,
      title: t("why_2_title"),
      description: t("why_2_desc"),
    },
    {
      icon: <MapPin size={24} color="#059669" />,
      title: t("why_3_title"),
      description: t("why_3_desc"),
    },
    {
      icon: <BadgePercent size={24} color="#0f3b74" />,
      title: t("why_4_title"),
      description: t("why_4_desc"),
    },
  ];

  return (
    <section className="section section-bg-subtle">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <ThumbsUp size={14} />
            <span>{t("why_cleanora_badge")}</span>
          </div>
          <h2 className="section-title">
            {t("why_cleanora_title")}
          </h2>
          <p className="section-subtitle">
            {t("why_cleanora_subtitle")}
          </p>
        </div>

        {/* 2-Column Showcase: Customer Guarantee Visual + 4 Reason Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.95fr 1.05fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="why-grid"
        >
          {/* Customer Guarantee Visual */}
          <div
            style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 40px -10px rgba(11, 27, 43, 0.15)",
              aspectRatio: "4/3",
              backgroundColor: "#071426",
              border: "1px solid #e2e8f0",
            }}
          >
            <Image
              src="/images/happycustomer.png"
              alt="Cleanora 100% Satisfaction Guarantee Mattanur Kannur"
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
                padding: "12px 16px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#ffffff",
              }}
            >
              <CheckCircle2 size={20} color="#34d399" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.875rem", fontWeight: 700 }}>
                  {language === "ml" ? "100% സംതൃപ്തി ഉറപ്പ് നൽകുന്നു" : "100% Satisfaction Guaranteed"}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
                  {language === "ml" ? "നേരിട്ടുള്ള ക്വാളിറ്റി ചെക്ക് & ഹാൻഡ്ഓവർ" : "On-the-spot walkthrough & handover check"}
                </div>
              </div>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
            className="why-cards-grid"
          >
            {reasons.map((reason, idx) => (
              <div
                key={reason.title}
                style={{
                  backgroundColor: "#ffffff",
                  padding: "24px 20px",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
                  transition: "all 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#cbd5e1";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(15, 23, 42, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(15, 23, 42, 0.04)";
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    backgroundColor: idx % 2 === 0 ? "#ecfdf5" : "#eef4fc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                  }}
                >
                  {reason.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "6px",
                    lineHeight: 1.3,
                  }}
                >
                  {reason.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                  }}
                >
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
