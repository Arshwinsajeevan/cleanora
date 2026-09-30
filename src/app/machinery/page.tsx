"use client";

import React from "react";
import Image from "next/image";
import {
  Wrench,
  CheckCircle2,
  Cpu,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { createWhatsAppUrl } from "@/data/site";
import { FinalCTA } from "@/components/cta/FinalCTA";

export default function MachineryPage() {
  const { language, t } = useLanguage();

  return (
    <>
      {/* Machinery Hero Header */}
      <section
        style={{
          paddingTop: "60px",
          paddingBottom: "40px",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid var(--border-light)",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="section-badge">
            <Wrench size={13} />
            <span>{t("nav_machinery")}</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "14px",
              lineHeight: 1.25,
            }}
          >
            {language === "ml"
              ? "അത്യാധുനിക ക്ലീനിംഗ് ഉപകരണങ്ങൾ"
              : "Advanced Professional Equipment"}
          </h1>

          <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            {language === "ml"
              ? "മികച്ച ക്ലീനിംഗ് ഫലം ഉറപ്പാക്കാൻ ക്ലീനോറ അത്യാധുനികവും പ്രൊഫഷണലുമായ ഉപകരണങ്ങൾ ഉപയോഗിക്കുന്നു."
              : "We utilize modern, high-grade cleaning equipment and professional tools to deliver spotless, reliable results across Kannur."}
          </p>
        </div>
      </section>

      {/* Featured Overview Banner */}
      <section className="section" style={{ backgroundColor: "var(--bg-page)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
              backgroundColor: "#ffffff",
              padding: "clamp(24px, 4vw, 44px)",
              borderRadius: "24px",
              border: "1px solid var(--border-light)",
              boxShadow: "var(--shadow-card)",
            }}
            className="machinery-hero-grid"
          >
            <div
              style={{
                position: "relative",
                borderRadius: "18px",
                overflow: "hidden",
                aspectRatio: "4/3",
                backgroundColor: "#0b1b2b",
                border: "1px solid var(--border-light)",
              }}
            >
              <Image
                src="/images/equipments.png"
                alt="Cleanora Professional Equipment Gear"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                style={{ objectFit: "contain" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div className="section-badge">
                <Cpu size={13} />
                <span>{language === "ml" ? "100% സജ്ജമായ ടീം" : "Fully Equipped Team"}</span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  lineHeight: 1.25,
                }}
              >
                {language === "ml"
                  ? "മികച്ച ഉപകരണങ്ങൾ, വിശ്വസനീയമായ സർവീസ്"
                  : "Modern Equipment for Spotless Results"}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                {language === "ml"
                  ? "വീടുകൾ, വില്ലകൾ, ഓഫീസുകൾ എന്നിവ ഏറ്റവും മികച്ച രീതിയിൽ വൃത്തിയാക്കാൻ അത്യാധുനിക പ്രൊഫഷണൽ ഉപകരണങ്ങളും പരിശീലനം ലഭിച്ച തൊഴിലാളികളുമാണ് ക്ലീനോറയുടെ കരുത്ത്."
                  : "Cleanora is fully equipped with high-grade professional machinery and tools, ensuring thorough, spotless, and damage-free deep cleaning for homes and workplaces."}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={16} color="#059669" />
                  <span style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 600 }}>
                    {language === "ml" ? "ആധുനികവും മികച്ചതുമായ ക്ലീനിംഗ് മെഷീനുകൾ" : "High-grade commercial cleaning equipment"}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={16} color="#059669" />
                  <span style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 600 }}>
                    {language === "ml" ? "എല്ലാ പ്രതലങ്ങൾക്കും തികച്ചും സുരക്ഷിതം" : "Safe, high-efficiency tools for all surfaces"}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={16} color="#059669" />
                  <span style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 600 }}>
                    {language === "ml" ? "പരിശീലനം ലഭിച്ച വിദഗ്ദ്ധ തൊഴിലാളികൾ" : "Trained professionals for careful execution"}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={16} color="#059669" />
                  <span style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 600 }}>
                    {language === "ml" ? "വേഗത്തിലും കൃത്യതയോടും കൂടിയ സേവനം" : "Faster turnaround with guaranteed quality"}
                  </span>
                </div>
              </div>

              <div style={{ paddingTop: "10px" }}>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                  style={{ borderRadius: "12px" }}
                >
                  <MessageCircle size={18} />
                  <span>{t("book_via_whatsapp")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
