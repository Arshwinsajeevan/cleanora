"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { servicesData } from "@/data/services";
import { Logo } from "@/components/ui/Logo";
import { InstagramIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer
      style={{
        backgroundColor: "#071426",
        color: "#cbd5e1",
        paddingTop: "64px",
        paddingBottom: "36px",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Column 1: Brand & Bio */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <Logo variant="footer" />
            <p style={{ fontSize: "0.9375rem", lineHeight: "1.65", color: "#94a3b8" }}>
              {t("footer_bio")}
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 14px",
                borderRadius: "8px",
                backgroundColor: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                color: "#34d399",
                fontSize: "0.8125rem",
                fontWeight: 600,
                width: "fit-content",
              }}
            >
              <CheckCircle2 size={16} />
              <span>{t("hero_guarantee_text")}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-heading)",
                fontSize: "1.0625rem",
                fontWeight: 700,
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {t("footer_nav_title")}
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: t("nav_home"), href: "/" },
                { label: t("nav_services"), href: "/services" },
                { label: t("nav_transformations"), href: "/#transformations" },
                { label: t("nav_equipments"), href: "/#machinery" },
                { label: t("nav_about"), href: "/about" },
                { label: t("nav_work"), href: "/gallery" },
                { label: t("nav_contact"), href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      color: "#94a3b8",
                      fontSize: "0.9375rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    <ArrowRight size={14} color="#10b981" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Showcase */}
          <div>
            <h4
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-heading)",
                fontSize: "1.0625rem",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              {t("footer_services_title")}
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    style={{
                      color: "#94a3b8",
                      fontSize: "0.9375rem",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    {language === "ml" ? service.nameMl : service.nameEn}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  style={{
                    color: "#34d399",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span>{t("view_all_services")}</span>
                  <ArrowRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h4
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-heading)",
                fontSize: "1.0625rem",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              {t("footer_contact_title")}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <a
                href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                onClick={() => trackEvent("phone_call_click", { location: "footer_primary" })}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#e2e8f0",
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                <Phone size={16} color="#60a5fa" />
                <span>{siteConfig.contact.primaryPhone}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.secondaryPhoneRaw}`}
                onClick={() => trackEvent("phone_call_click", { location: "footer_secondary" })}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#e2e8f0",
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                <Phone size={16} color="#60a5fa" />
                <span>{siteConfig.contact.secondaryPhone}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                onClick={() => trackEvent("email_click", { location: "footer" })}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#e2e8f0",
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  wordBreak: "break-all",
                }}
              >
                <Mail size={16} color="#60a5fa" />
                <span>{siteConfig.contact.email}</span>
              </a>

              <a
                href={siteConfig.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("maps_click", { location: "footer" })}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  color: "#94a3b8",
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                <MapPin size={16} color="#10b981" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span>{siteConfig.location.display}</span>
              </a>

              <div style={{ display: "flex", gap: "10px", marginTop: "6px" }}>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "footer_icon" })}
                  aria-label="Cleanora on WhatsApp"
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(37, 211, 102, 0.15)",
                    border: "1px solid rgba(37, 211, 102, 0.3)",
                    color: "#25D366",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#25D366";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(37, 211, 102, 0.15)";
                    e.currentTarget.style.color = "#25D366";
                  }}
                >
                  <MessageCircle size={18} />
                </a>

                <a
                  href={siteConfig.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("instagram_click", { location: "footer_icon" })}
                  aria-label="Cleanora on Instagram"
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(225, 48, 108, 0.15)",
                    border: "1px solid rgba(225, 48, 108, 0.3)",
                    color: "#f43f5e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#e1306c";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(225, 48, 108, 0.15)";
                    e.currentTarget.style.color = "#f43f5e";
                  }}
                >
                  <InstagramIcon size={18} color="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "0.8125rem",
            color: "#64748b",
          }}
        >
          <div>
            © {new Date().getFullYear()} {t("footer_rights")}
          </div>

          <div style={{ display: "flex", gap: "16px" }}>
            <span>{t("top_bar_guarantee")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
