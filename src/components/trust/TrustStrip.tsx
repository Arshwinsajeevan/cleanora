"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const TrustStrip: React.FC = () => {
  const { language } = useLanguage();

  const pillars = [
    {
      titleEn: "100% Satisfaction",
      titleMl: "100% സംതൃപ്തി ഉറപ്പ്",
      descEn: "Inspection before final handover",
      descMl: "നേരിട്ടുള്ള പരിശോധന",
      icon: <ShieldCheck size={20} color="#059669" />,
    },
    {
      titleEn: "Modern Machinery",
      titleMl: "ആധുനിക മെഷീനുകൾ",
      descEn: "Floor scrubbers & jet washers",
      descMl: "റോട്ടറി സ്ക്രബ്ബറുകൾ",
      icon: <Sparkles size={20} color="#071e3d" />,
    },
    {
      titleEn: "Safe Relocations",
      titleMl: "സുരക്ഷിത ഷിഫ്റ്റിംഗ്",
      descEn: "Packers & Movers across Kannur",
      descMl: "പാക്കേഴ്‌സ് & മൂവേഴ്‌സ്",
      icon: <Truck size={20} color="#059669" />,
    },
    {
      titleEn: "Safe & Non-Toxic",
      titleMl: "സുരക്ഷിത ലോഷനുകൾ",
      descEn: "Certified eco-friendly agents",
      descMl: "വിഷാംശമില്ലാത്ത ക്ലീനിംഗ്",
      icon: <CheckCircle2 size={20} color="#071e3d" />,
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e2e8f0",
        padding: "16px 0",
        position: "relative",
        zIndex: 20,
        boxShadow: "0 4px 20px -4px rgba(15, 23, 42, 0.04)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
            alignItems: "center",
          }}
          className="trust-strip-grid"
        >
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "4px 8px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: idx % 2 === 0 ? "#ecfdf5" : "#f1f5f9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {pillar.icon}
              </div>

              <div>
                <h4
                  style={{
                    fontSize: "0.9125rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    lineHeight: 1.25,
                  }}
                >
                  {language === "ml" ? pillar.titleMl : pillar.titleEn}
                </h4>
                <p
                  style={{
                    fontSize: "0.7875rem",
                    color: "var(--text-muted)",
                    marginTop: "2px",
                    lineHeight: 1.3,
                  }}
                >
                  {language === "ml" ? pillar.descMl : pillar.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};