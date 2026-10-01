"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import { createWhatsAppUrl } from "@/data/site";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { useLanguage } from "@/context/LanguageContext";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function ServicesPage() {
  const { language, t } = useLanguage();

  return (
    <>
      {/* Page Header Banner */}
      <section
        style={{
          backgroundColor: "#071426",
          color: "#ffffff",
          padding: "64px 0",
          textAlign: "center",
          position: "relative",
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
            <span>{language === "ml" ? "à´•àµà´²àµ€à´¨àµ‹à´± à´¸àµ¼à´µàµ€à´¸àµ à´•à´¾à´±àµà´±à´²àµ‹à´—àµ" : "Official Service Catalog"}</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              fontWeight: 800,
              marginBottom: "16px",
            }}
          >
            {language === "ml" ? "à´•à´£àµà´£àµ‚à´°à´¿à´²àµ† à´ªàµà´°àµŠà´«à´·à´£àµ½ à´•àµà´²àµ€à´¨à´¿à´‚à´—àµ à´¸àµ¼à´µàµ€à´¸àµà´•àµ¾" : "Professional Cleaning Services in Kannur"}
          </h1>

          <p style={{ fontSize: "1.0625rem", color: "#cbd5e1", lineHeight: 1.65 }}>
            {language === "ml"
              ? "à´µàµ€à´Ÿàµà´•àµ¾, à´µà´¾à´Ÿàµà´Ÿàµ¼ à´Ÿà´¾à´™àµà´•àµà´•àµ¾, à´¸àµ‹à´³à´¾àµ¼ à´ªà´¾à´¨à´²àµà´•àµ¾, à´¸àµ‹à´«à´•àµ¾, à´‡à´¨àµà´±àµ¼à´²àµ‹à´•àµà´•àµ à´Žà´¨àµà´¨à´¿à´µà´¯àµà´•àµà´•àµà´³àµà´³ à´¸à´®àµà´ªàµ‚àµ¼à´£àµà´£ à´¡àµ€à´ªàµ à´•àµà´²àµ€à´¨à´¿à´‚à´—àµ. 100% à´¸à´‚à´¤àµƒà´ªàµà´¤à´¿ à´‰à´±à´ªàµà´ªàµ."
              : "From single-room targeted deep cleaning to full residential and commercial facility restoration. Every service is backed by our 100% Satisfaction Guarantee."}
          </p>
        </div>
      </section>

      {/* Services List Detailed */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
          {servicesData.map((service, idx) => {
            const isReversed = idx % 2 === 1;
            const name = language === "ml" ? service.nameMl : service.nameEn;
            const description = language === "ml" ? service.detailedDescriptionMl : service.detailedDescriptionEn;
            const checklist = language === "ml" ? service.checklistMl : service.checklistEn;
            const badge = language === "ml" ? service.badgeMl : service.badgeEn;
            const whatsappMsg = language === "ml" ? service.whatsappMessageMl : service.whatsappMessageEn;

            return (
              <div
                key={service.id}
                id={service.slug}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "48px",
                  alignItems: "center",
                  padding: "36px",
                  borderRadius: "20px",
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  scrollMarginTop: "100px",
                  boxShadow: "0 4px 14px rgba(15, 23, 42, 0.03)",
                }}
                className={`service-detail-row ${isReversed ? "reversed" : ""}`}
              >
                {/* Visual Column */}
                <div
                  style={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    aspectRatio: "4/3",
                    order: isReversed ? 2 : 1,
                    backgroundColor: "#071426",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  }}
                  className="service-img-col"
                >
                  <Image
                    src={service.image}
                    alt={`${name} in Kannur`}
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    style={{ objectFit: "cover" }}
                  />
                  {badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        backgroundColor: "rgba(11, 27, 43, 0.92)",
                        color: "#34d399",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: "6px",
                        border: "1px solid rgba(52, 211, 153, 0.3)",
                      }}
                    >
                      {badge}
                    </div>
                  )}
                </div>

                {/* Content Column */}
                <div style={{ display: "flex", flexDirection: "column", gap: "18px", order: isReversed ? 1 : 2 }}>
                  <div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "var(--color-accent)",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {language === "ml" ? "à´®à´Ÿàµà´Ÿà´¨àµà´¨àµ‚àµ¼ â€¢ à´•à´£àµà´£àµ‚àµ¼ à´¸àµ¼à´µàµ€à´¸àµ" : "Mattanur â€¢ Kannur Cleaning"}
                    </span>
                    <h2
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        color: "var(--text-primary)",
                        marginTop: "4px",
                      }}
                    >
                      {name}
                    </h2>
                  </div>

                  <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                    {description}
                  </p>

                  {/* Checklist */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase" }}>
                      {language === "ml" ? "à´ªàµà´°à´¤àµà´¯àµ‡à´•à´¤à´•à´³àµà´‚ à´¸àµ‡à´µà´¨à´™àµà´™à´³àµà´‚:" : "What We Clean & Deliver:"}
                    </div>
                    {checklist.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                        <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontSize: "0.875rem", color: "#334155", lineHeight: 1.4 }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div style={{ paddingTop: "12px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
                    <a
                      href={createWhatsAppUrl(whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                    >
                      <WhatsAppIcon size={16} />
                      <span>{t("enquire_whatsapp")}</span>
                    </a>

                    <Link href={`/contact?service=${encodeURIComponent(name)}`} className="btn btn-outline btn-sm">
                      <span>{t("get_quote")}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}

