"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Sparkles, CheckCircle2, MessageCircle, MapPin, Wrench, HeartHandshake } from "lucide-react";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { language, t } = useLanguage();

  return (
    <>
      {/* Banner */}
      <section
        style={{
          backgroundColor: "#071426",
          color: "#ffffff",
          padding: "64px 0",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "780px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              color: "#34d399",
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "16px",
            }}
          >
            <Sparkles size={14} />
            <span>{t("about_badge")}</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              fontWeight: 800,
              marginBottom: "16px",
            }}
          >
            {t("about_title")}
          </h1>

          <p style={{ fontSize: "1.0625rem", color: "#cbd5e1", lineHeight: 1.65 }}>
            {t("about_p1")}
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
              gap: "56px",
              alignItems: "center",
              marginBottom: "72px",
            }}
            className="about-split"
          >
            <div>
              <div className="section-badge">
                <MapPin size={13} />
                <span>{language === "ml" ? "ഞങ്ങളുടെ ദൗത്യം" : "Our Mission"}</span>
              </div>
              <h2 className="section-title">
                {language === "ml"
                  ? "ശുദ്ധവും ആരോഗ്യകരവുമായ വീടുകൾക്കായി ഞങ്ങൾ പ്രതിജ്ഞാബദ്ധരാണ്."
                  : "Born out of a genuine passion for spotless living spaces."}
              </h2>
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "16px" }}>
                {t("about_p1")}
              </p>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "24px" }}>
                {t("about_p2")}
              </p>

              <div
                style={{
                  padding: "18px 22px",
                  borderRadius: "14px",
                  backgroundColor: "#ecfdf5",
                  border: "1px solid #a7f3d0",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <ShieldCheck size={28} color="#059669" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#065f46" }}>
                    {t("hero_guarantee_text")}
                  </div>
                  <div style={{ fontSize: "0.8125rem", color: "#047857" }}>
                    {language === "ml"
                      ? "വർക്ക് പൂർത്തിയായ ശേഷം നിങ്ങളുടെ നേരിട്ടുള്ള പരിശോധന. എന്തെങ്കിലും കുറവുണ്ടെങ്കിൽ ഉടൻ ശരിയാക്കി നൽകുന്നു."
                      : "We inspect every detail with you. If any spot needs extra attention, we re-clean it on the spot."}
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                aspectRatio: "4/3",
                boxShadow: "0 20px 40px -10px rgba(15,23,42,0.15)",
                backgroundColor: "#071426",
                border: "1px solid #e2e8f0",
              }}
            >
              <Image
                src="/images/about us.png"
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
              gap: "28px",
            }}
            className="pillars-grid"
          >
            {[
              {
                icon: <Wrench size={26} color="#0f3b74" />,
                title: language === "ml" ? "പ്രൊഫഷണൽ മെഷീനുകൾ" : "Professional Machinery",
                desc: language === "ml"
                  ? "റോട്ടറി സിംഗിൾ-ഡിസ്ക് സ്ക്രബ്ബറുകൾ, ഹൈ-പ്രഷർ വാഷറുകൾ, വാക്വം എക്സ്ട്രാക്ടറുകൾ."
                  : "We utilize rotary single-disc floor scrubbers, wet/dry extraction vacuums, and high-pressure jet gear.",
              },
              {
                icon: <Sparkles size={26} color="#059669" />,
                title: language === "ml" ? "സുരക്ഷിത ലോഷനുകൾ" : "Safe Cleaning Agents",
                desc: language === "ml"
                  ? "വിഷാംശമില്ലാത്തതും പ്രതലങ്ങൾക്ക് കേടുപാടുകൾ വരുത്താത്തതുമായ ക്ലീനിംഗ് ലോഷനുകൾ."
                  : "Eco-safe degreasers and tile descalers that remove tough stains without damaging surfaces.",
              },
              {
                icon: <HeartHandshake size={26} color="#10b981" />,
                title: language === "ml" ? "ലോക്കൽ ഉത്തരവാദിത്തം" : "Local Accountability",
                desc: language === "ml"
                  ? "മട്ടന്നൂർ കേന്ദ്രമായി കൃത്യസമയത്ത് എത്തിച്ചേരുന്ന വിശ്വസ്തരായ ജോലിക്കാർ."
                  : "Based in Mattanur, Kannur, we provide punctual local staff and personalized accountability.",
              },
            ].map((p, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#f8fafc",
                  borderRadius: "16px",
                  padding: "32px 28px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "18px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                  }}
                >
                  {p.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1875rem", fontWeight: 700, marginBottom: "8px" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
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
