"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, MapPin, Sparkles, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Introduction: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="section" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "56px",
            alignItems: "center",
          }}
          className="intro-grid"
        >
          {/* Left Column: Detail Visual using about us.png */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.15)",
                aspectRatio: "4/3",
                backgroundColor: "#0d1e36",
                border: "1px solid #e2e8f0",
              }}
            >
              <Image
                src="/images/about us.png"
                alt="Meet Cleanora Professional Cleaning Team Mattanur Kannur"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Bottom floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                backgroundColor: "#ffffff",
                padding: "14px 18px",
                borderRadius: "14px",
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.1)",
                border: "1px solid #e2e8f0",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
              className="hide-mobile"
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  backgroundColor: "#ecfdf5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#059669",
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 600 }}>
                  {language === "ml" ? "ഗുണനിലവാര ഉറപ്പ്" : "Quality Standard"}
                </div>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  {language === "ml" ? "100% സംതൃപ്തി" : "100% Verified Care"}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <div className="section-badge">
                <MapPin size={13} />
                <span>{t("about_badge")}</span>
              </div>
              <h2 className="section-title">
                {t("about_title")}
              </h2>
            </div>

            <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              {t("about_p1")}
            </p>

            <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
              {t("about_p2")}
            </p>

            {/* Key Focus Points */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "8px" }} className="focus-grid">
              {[
                language === "ml" ? "100% സംതൃപ്തി പരിശോധന" : "100% Satisfaction Checked",
                language === "ml" ? "അത്യാധുനിക മെഷീനുകൾ" : "Advanced Scrubbing & Extraction",
                language === "ml" ? "പരിശീലനം ലഭിച്ച ലോക്കൽ ടീം" : "Trained Mattanur & Kannur Team",
                language === "ml" ? "മുൻകൂട്ടി വ്യക്തമായ ചാർജുകൾ" : "Transparent, Upfront Estimates",
              ].map((point, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#ecfdf5",
                      color: "#059669",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={13} />
                  </div>
                  <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ paddingTop: "12px" }}>
              <Link href="/about" prefetch={true} className="btn btn-outline">
                <span>{t("about_btn")}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
