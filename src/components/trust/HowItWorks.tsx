"use client";

import React from "react";
import { ClipboardCheck, MessageSquare, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { createWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export const HowItWorks: React.FC = () => {
  const { language, t } = useLanguage();

  const steps = [
    {
      num: t("step_1_num"),
      title: t("step_1_title"),
      description: t("step_1_desc"),
      icon: <MessageSquare size={22} color="#0f3b74" />,
    },
    {
      num: t("step_2_num"),
      title: t("step_2_title"),
      description: t("step_2_desc"),
      icon: <ClipboardCheck size={22} color="#10b981" />,
    },
    {
      num: t("step_3_num"),
      title: t("step_3_title"),
      description: t("step_3_desc"),
      icon: <Sparkles size={22} color="#059669" />,
    },
  ];

  return (
    <section className="section hide-mobile" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>{t("how_it_works_badge")}</span>
          </div>
          <h2 className="section-title">
            {t("how_it_works_title")}
          </h2>
          <p className="section-subtitle">
            {t("how_it_works_subtitle")}
          </p>
        </div>

        {/* Steps Grid: Stacks cleanly 1-column on mobile, 3-columns on desktop */}
        <div
          style={{
            display: "grid",
            gap: "24px",
            position: "relative",
            width: "100%",
          }}
          className="steps-grid"
        >
          {steps.map((step, idx) => (
            <div
              key={step.num}
              style={{
                backgroundColor: "#f8fafc",
                padding: "28px 24px",
                borderRadius: "18px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.03)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: idx === 1 ? "#ecfdf5" : "#eef4fc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {step.icon}
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "#cbd5e1",
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "8px",
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </p>
              </div>

              <div style={{ marginTop: "18px", paddingTop: "12px", borderTop: "1px solid #e2e8f0" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: idx === 1 ? "#059669" : "var(--color-primary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {language === "ml" ? `ഘട്ടം ${step.num}` : `Step ${step.num}`}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <a
            href={createWhatsAppUrl(language === "ml" ? "നമസ്കാരം ക്ലീനോറ, ക്ലീനിംഗ് / ഷിഫ്റ്റിംഗ് സർവീസ് ബുക്ക് ചെയ്യാൻ ആഗ്രഹിക്കുന്നു." : "Hi Cleanora, I would like to book a cleaning or shifting service.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "how_it_works" })}
            className="btn btn-whatsapp btn-lg"
          >
            <WhatsAppIcon size={18} />
            <span>{t("book_via_whatsapp")}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

