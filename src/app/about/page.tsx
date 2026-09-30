"use client";

import React from "react";
import Image from "next/image";
import { Info, ShieldCheck, Wrench, Sparkles, HeartHandshake, MapPin } from "lucide-react";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { language, t } = useLanguage();

  return (
    <>
      {/* Page Header */}
      <section
        style={{
          padding: "clamp(36px, 6vw, 60px) 16px clamp(32px, 5vw, 48px)",
          backgroundColor: "#071e3d",
          color: "#ffffff",
          textAlign: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <div className="container" style={{ maxWidth: "800px", padding: 0 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              color: "#34d399",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "14px",
            }}
          >
            <Info size={13} />
            <span>{t("about_badge")}</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.65rem)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "12px",
              lineHeight: 1.2,
              wordBreak: "normal",
              overflowWrap: "break-word",
            }}
          >
            {t("about_title")}
          </h1>

          <p
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              color: "#cbd5e1",
              lineHeight: 1.65,
              maxWidth: "680px",
              margin: "0 auto",
              wordBreak: "normal",
              overflowWrap: "break-word",
            }}
          >
            {t("about_subtitle")}
          </p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              alignItems: "center",
              marginBottom: "56px",
              width: "100%",
            }}
            className="about-split"
          >
            {/* Left Content */}
            <div style={{ width: "100%" }}>
              <div className="section-badge">
                <MapPin size={13} />
                <span>{language === "ml" ? "ഞങ്ങളുടെ ദൗത്യം" : "Our Mission"}</span>
              </div>
              <h2
                className="section-title"
                style={{
                  textAlign: "left",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  lineHeight: 1.25,
                  marginBottom: "16px",
                }}
              >
                {language === "ml"
                  ? "ശുദ്ധവും ആരോഗ്യകരവുമായ വീടുകൾക്കായി ഞങ്ങൾ പ്രതിജ്ഞാബദ്ധരാണ്."
                  : "Born out of a genuine passion for spotless living spaces."}
              </h2>

              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "14px" }}>
                {t("about_p1")}
              </p>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "22px" }}>
                {t("about_p2")}
              </p>

              {/* Quality Guarantee Box */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  backgroundColor: "#ecfdf5",
                  border: "1px solid #a7f3d0",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <ShieldCheck size={26} color="#059669" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#065f46" }}>
                    {t("hero_guarantee_text")}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#047857", lineHeight: 1.4, marginTop: "2px" }}>
                    {language === "ml"
                      ? "വർക്ക് പൂർത്തിയായ ശേഷം നിങ്ങളുടെ നേരിട്ടുള്ള പരിശോധന. എന്തെങ്കിലും കുറവുണ്ടെങ്കിൽ ഉടൻ ശരിയാക്കി നൽകുന്നു."
                      : "We inspect every detail with you. If any spot needs extra attention, we ensure complete satisfaction on the spot."}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div
              style={{
                position: "relative",
                borderRadius: "18px",
                overflow: "hidden",
                aspectRatio: "4/3",
                boxShadow: "0 16px 36px -8px rgba(15,23,42,0.12)",
                backgroundColor: "#071426",
                border: "1px solid #e2e8f0",
                width: "100%",
              }}
            >
              <Image
                src="/images/about-us.png"
                alt="Cleanora Team Cleanliness Standard Mattanur Kannur"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Pillars of Work */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              width: "100%",
            }}
            className="pillars-grid"
          >
            {[
              {
                icon: <Wrench size={24} color="#0f3b74" />,
                title: language === "ml" ? "ആധുനിക ഉപകരണങ്ങൾ" : "Modern Equipment",
                desc: language === "ml"
                  ? "വീടുകൾക്കും സ്ഥാപനങ്ങൾക്കും അനുയോജ്യമായ പ്രൊഫഷണൽ ഉപകരണങ്ങൾ ഞങ്ങൾക്കുണ്ട്."
                  : "Equipped with high-grade commercial machinery and specialized tools for all surfaces.",
              },
              {
                icon: <Sparkles size={24} color="#059669" />,
                title: language === "ml" ? "സുരക്ഷിത ലായനികൾ" : "Safe Cleaning Agents",
                desc: language === "ml"
                  ? "വിഷാംശമില്ലാത്തതും പ്രതലങ്ങൾക്ക് കേടുപാടുകൾ വരുത്താത്തതുമായ സുരക്ഷിത ക്ലീനിംഗ് ഉൽപന്നങ്ങൾ."
                  : "Eco-safe formulations that remove tough stains without damaging surfaces or indoor air.",
              },
              {
                icon: <HeartHandshake size={24} color="#10b981" />,
                title: language === "ml" ? "ലോക്കൽ ഉത്തരവാദിത്തം" : "Local Accountability",
                desc: language === "ml"
                  ? "മട്ടന്നൂർ കേന്ദ്രമായി കൃത്യസമയത്ത് എത്തിച്ചേരുന്ന വിശ്വസ്തരായ തൊഴിലാളികൾ."
                  : "Based locally in Mattanur, Kannur, we provide prompt response and reliable service.",
              },
            ].map((p, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#f8fafc",
                  borderRadius: "16px",
                  padding: "26px 22px",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "12px",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                  }}
                >
                  {p.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px", color: "var(--text-primary)" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
