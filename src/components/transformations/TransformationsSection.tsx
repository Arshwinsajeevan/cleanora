"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const TransformationsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);

  const transformations = [
    {
      id: "interlock",
      titleEn: "Interlock Jet Washing & Moss Removal",
      titleMl: "ഇന്റർലോക്ക് പ്രഷർ വാഷിംഗും പായൽ മാറ്റലും",
      descEn: "Removing thick slippery green algae, dark mud lines, and restoring brand-new paver colors.",
      descMl: "ഇന്റർലോക്കിലെ വഴുക്കലുള്ള പായലും അഴുക്കുകളും മാറ്റി മുറ്റത്തിന് പുത്തൻ തിളക്കം നൽകുന്നു.",
      image: "/images/interlock_beforeafter.png",
      tagEn: "Outdoor Driveway",
      tagMl: "മുറ്റവും ഡ്രൈവ്‌വേയും",
    },
    {
      id: "kitchen",
      titleEn: "Kitchen Chimney & Hob Deep Degreasing",
      titleMl: "അടുക്കള ചിമ്മിനി & ഹോബ് ഡീഗ്രീസിംഗ്",
      descEn: "Dissolving heavy sticky oil residue, carbon soot, and polishing stainless steel surfaces.",
      descMl: "ചിമ്മിനിയിലെയും സ്റ്റൗവിലെയും കടുത്ത എണ്ണക്കറകളും കരിയും പൂർണ്ണമായി നീക്കുന്നു.",
      image: "/images/kitchen_beforeafter.png",
      tagEn: "Kitchen Degreasing",
      tagMl: "അടുക്കള ഡീഗ്രീസിംഗ്",
    },
    {
      id: "bathroom",
      titleEn: "Bathroom Hard-Water Descaling & Tile Care",
      titleMl: "ബാത്ത്റൂം ടൈൽ ഉപ്പുവെള്ളക്കറ നീക്കൽ",
      descEn: "Eliminating yellow limescale, mineral stains, and restoring sparkling chrome and tile gloss.",
      descMl: "ടൈലുകളിലെയും ടാപ്പുകളിലെയും ഉപ്പുവെള്ളക്കറകളും മഞ്ഞപ്പാടുകളും മാറ്റി തിളക്കം നൽകുന്നു.",
      image: "/images/batroom_beforeafter.png",
      tagEn: "Limescale Descaling",
      tagMl: "ഉപ്പുവെള്ളക്കറ നീക്കൽ",
    },
  ];

  const current = transformations[activeTab];

  return (
    <section id="transformations" className="section" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>{t("transformations_badge")}</span>
          </div>
          <h2 className="section-title">
            {t("transformations_title")}
          </h2>
          <p className="section-subtitle">
            {t("transformations_subtitle")}
          </p>
        </div>

        {/* Tab Selector */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
        >
          {transformations.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              style={{
                padding: "10px 20px",
                borderRadius: "12px",
                fontSize: "0.875rem",
                fontWeight: 700,
                transition: "all 0.2s ease",
                backgroundColor: activeTab === idx ? "var(--color-primary)" : "#f8fafc",
                color: activeTab === idx ? "#ffffff" : "var(--text-secondary)",
                border: activeTab === idx ? "1px solid var(--color-primary)" : "1px solid #e2e8f0",
                boxShadow: activeTab === idx ? "0 4px 14px rgba(11, 27, 43, 0.15)" : "none",
              }}
            >
              {language === "ml" ? item.titleMl : item.titleEn}
            </button>
          ))}
        </div>

        {/* Transformation Showcase Card */}
        <div
          style={{
            backgroundColor: "#0b1b2b",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 25px 50px -12px rgba(11, 27, 43, 0.25)",
            padding: "36px",
            color: "#ffffff",
          }}
          className="transformation-card"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "36px",
              alignItems: "center",
            }}
            className="transformation-grid"
          >
            {/* Visual Image Container */}
            <div
              style={{
                position: "relative",
                borderRadius: "18px",
                overflow: "hidden",
                aspectRatio: "16/10",
                backgroundColor: "#071426",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              }}
            >
              <Image
                src={current.image}
                alt={language === "ml" ? current.titleMl : current.titleEn}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                style={{ objectFit: "contain" }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  backgroundColor: "rgba(11, 27, 43, 0.85)",
                  backdropFilter: "blur(8px)",
                  color: "#34d399",
                  padding: "5px 12px",
                  borderRadius: "6px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  border: "1px solid rgba(52, 211, 153, 0.3)",
                }}
              >
                {language === "ml" ? current.tagMl : current.tagEn}
              </div>
            </div>

            {/* Narrative & Highlights */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <span
                  style={{
                    color: "#34d399",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {t("transformations_badge")}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginTop: "4px",
                    lineHeight: 1.3,
                  }}
                >
                  {language === "ml" ? current.titleMl : current.titleEn}
                </h3>
              </div>

              <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: 1.65 }}>
                {language === "ml" ? current.descMl : current.descEn}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
                {[
                  language === "ml" ? "കഠിനമായ അഴുക്കും കറകളും പൂർണ്ണമായി നീക്കം ചെയ്യുന്നു" : "Complete removal of deep-seated grime and mineral residue",
                  language === "ml" ? "ഉപരിതലങ്ങൾക്ക് കേടുപാടുകൾ വരുത്താതെ തിളക്കം നൽകുന്നു" : "Restores smooth hygienic finish without surface abrasion",
                  language === "ml" ? "100% നേരിട്ടുള്ള ഗുണനിലവാര പരിശോധന" : "100% verified customer walkthrough before job completion",
                ].map((point, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={16} color="#34d399" style={{ flexShrink: 0, marginTop: "3px" }} />
                    <span style={{ fontSize: "0.875rem", color: "#e2e8f0", lineHeight: 1.4 }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ paddingTop: "10px" }}>
                <a
                  href="/services"
                  className="btn btn-whatsapp btn-sm"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  <span>{t("view_all_services")}</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
