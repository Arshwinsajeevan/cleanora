"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { faqsData } from "@/data/faqs";
import { createWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqsData[0]?.id || null);
  const { language, t } = useLanguage();

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section" style={{ backgroundColor: "#ffffff" }}>
      <div className="container" style={{ maxWidth: "880px" }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={14} />
            <span>{t("faq_badge")}</span>
          </div>
          <h2 className="section-title">
            {t("faq_title")}
          </h2>
          <p className="section-subtitle">
            {t("faq_subtitle")}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            const question = language === "ml" ? faq.questionMl : faq.questionEn;
            const answer = language === "ml" ? faq.answerMl : faq.answerEn;

            return (
              <div
                key={faq.id}
                style={{
                  borderRadius: "14px",
                  border: isOpen ? "1px solid #93c5fd" : "1px solid #e2e8f0",
                  backgroundColor: isOpen ? "#f8fbff" : "#ffffff",
                  transition: "all 0.2s ease",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                    textAlign: "left",
                    color: "var(--text-primary)",
                    fontWeight: 700,
                    fontSize: "1.0625rem",
                  }}
                >
                  <span>{question}</span>
                  <div
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                      color: isOpen ? "var(--color-primary)" : "var(--text-muted)",
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 22px 24px",
                      color: "var(--text-secondary)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      borderTop: "1px solid rgba(147, 197, 253, 0.3)",
                      paddingTop: "16px",
                    }}
                  >
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div
          style={{
            marginTop: "40px",
            backgroundColor: "#f8fafc",
            borderRadius: "14px",
            padding: "20px 24px",
            border: "1px solid #e2e8f0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "14px",
          }}
        >
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
              {language === "ml" ? "à´®à´±àµà´±àµ à´¸à´‚à´¶à´¯à´™àµà´™à´³àµà´£àµà´Ÿàµ‹?" : "Have another question not listed here?"}
            </h4>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "2px" }}>
              {language === "ml" ? "à´žà´™àµà´™à´³àµà´Ÿàµ† à´®à´Ÿàµà´Ÿà´¨àµà´¨àµ‚àµ¼ à´Ÿàµ€à´‚ à´¨à´¿à´™àµà´™à´³àµ† à´¸à´¹à´¾à´¯à´¿à´•àµà´•à´¾àµ» à´¤à´¯àµà´¯à´¾à´±à´¾à´£àµ." : "Our Mattanur team is happy to assist you directly."}
            </p>
          </div>

          <a
            href={createWhatsAppUrl(
              language === "ml"
                ? "à´¨à´®à´¸àµà´•à´¾à´°à´‚ à´•àµà´²àµ€à´¨àµ‹à´±, à´•àµà´²àµ€à´¨à´¿à´‚à´—àµ à´¸àµ¼à´µàµ€à´¸à´¿à´¨àµ†à´•àµà´•àµà´±à´¿à´šàµà´šàµ à´Žà´¨à´¿à´•àµà´•àµ à´’à´°àµ à´šàµ‹à´¦àµà´¯à´®àµà´£àµà´Ÿàµ:"
                : "Hi Cleanora, I have a question regarding your cleaning services:"
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "faq_bottom" })}
            className="btn btn-whatsapp btn-sm"
          >
            <WhatsAppIcon size={15} />
            <span>{language === "ml" ? "à´µà´¾à´Ÿàµà´¸à´¾à´ªàµà´ªà´¿àµ½ à´šàµ‹à´¦à´¿à´•àµà´•à´¾à´‚" : "Ask on WhatsApp"}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

