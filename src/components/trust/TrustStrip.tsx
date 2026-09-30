"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const TrustStrip: React.FC = () => {
  const { language } = useLanguage();

  const pillars = [
    {
      titleEn: "100% Satisfaction Guaranteed",
      titleMl: "100% സംതൃപ്തി ഉറപ്പ്",
      descEn: "Inspection walkthrough before final handover",
      descMl: "നേരിട്ടുള്ള ഗുണനിലവാര പരിശോധന",
      icon: <ShieldCheck size={22} color="#10b981" />,
    },
    {
      titleEn: "Advanced Machinery",
      titleMl: "അത്യാധുനിക മെഷീനുകൾ",
      descEn: "Single-disc scrubbers, extractors & jet washers",
      descMl: "റോട്ടറി സ്ക്രബ്ബറുകൾ, പ്രഷർ ജെറ്റ് വാഷറുകൾ",
      icon: <Sparkles size={22} color="#0f3b74" />,
    },
    {
      titleEn: "Clean Spaces... Healthy Lives...",
      titleMl: "വൃത്തിയുള്ള ഇടങ്ങൾ... ആരോഗ്യകരമായ ജീവിതം...",
      descEn: "Safe non-toxic cleaning formulations",
      descMl: "വിഷാംശമില്ലാത്ത സുരക്ഷിത ലോഷനുകൾ",
      icon: <CheckCircle2 size={22} color="#10b981" />,
    },
    {
      titleEn: "Mattanur & Kannur Service",
      titleMl: "മട്ടന്നൂർ & കണ്ണൂർ സർവീസ്",
      descEn: "Prompt scheduling across Kannur district",
      descMl: "കണ്ണൂർ ജില്ലയിൽ എവിടെയും കൃത്യസമയത്ത്",
      icon: <MapPin size={22} color="#0f3b74" />,
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e2e8f0",
        padding: "20px 0",
        position: "relative",
        zIndex: 20,
        boxShadow: "0 4px 20px -4px rgba(15, 23, 42, 0.05)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
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
                gap: "14px",
                padding: "6px 0",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: idx % 2 === 0 ? "#ecfdf5" : "#eef4fc",
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
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    lineHeight: 1.25,
                  }}
                >
                  {language === "ml" ? pillar.titleMl : pillar.titleEn}
                </h4>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-muted)",
                    marginTop: "2px",
                    lineHeight: 1.35,
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
