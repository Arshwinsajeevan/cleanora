"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { servicesData } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { InstagramIcon } from "@/components/ui/Icons";
import { trackEvent } from "@/lib/analytics";

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const mainNav = [
    { href: "/", label: t("nav_home") },
    { href: "/services", label: t("nav_services") },
    { href: "/results", label: language === "ml" ? "റിസൾട്ടുകൾ" : "Results" },
    { href: "/machinery", label: language === "ml" ? "മെഷീനുകൾ" : "Machinery" },
    { href: "/about", label: t("nav_about") },
    { href: "/gallery", label: t("nav_work") },
    { href: "/contact", label: t("nav_contact") },
  ];

  return (
    <footer
      style={{
        backgroundColor: "var(--color-primary)",
        color: "#ffffff",
        paddingTop: "68px",
        paddingBottom: "36px",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 0.9fr 1fr 1.1fr",
            gap: "48px",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >
          {/* Column 1: Brand & Ethos */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                  backgroundColor: "#ffffff",
                  border: "1.5px solid rgba(255, 255, 255, 0.2)",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/images/cleanora-logo.jpg"
                  alt="Cleanora Official Logo"
                  fill
                  sizes="44px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "1.35rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
                  CLEANORA
                </span>
                <div style={{ fontSize: "0.75rem", color: "#34d399", fontWeight: 700, textTransform: "uppercase" }}>
                  {language === "ml" ? "മട്ടന്നൂർ • കണ്ണൂർ, കേരളം" : "Mattanur • Kannur, Kerala"}
                </div>
              </div>
            </div>

            <p style={{ color: "#94a3b8", fontSize: "0.9375rem", lineHeight: 1.65 }}>
              {t("footer_bio")}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "4px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 10px #10b981",
                }}
              />
              <span style={{ fontSize: "0.8125rem", color: "#cbd5e1", fontWeight: 600 }}>
                {language === "ml" ? "കണ്ണൂർ ജില്ല മുഴുവൻ സർവീസ് ലഭ്യമാണ്" : "Serving all localities across Kannur district"}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (All Dedicated Pages) */}
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
              {t("footer_nav_title")}
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: "#94a3b8",
                      fontSize: "0.9375rem",
                      transition: "color 0.2s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
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
                      textDecoration: "none",
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
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    textDecoration: "none",
                    marginTop: "4px",
                  }}
                >
                  <span>{t("view_all_services")}</span>
                  <ArrowRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#e2e8f0",
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                <Phone size={16} color="#34d399" />
                <span>{siteConfig.contact.primaryPhone}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.secondaryPhoneRaw}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#e2e8f0",
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                <Phone size={16} color="#34d399" />
                <span>{siteConfig.contact.secondaryPhone}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
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
                <Mail size={16} color="#34d399" />
                <span>{siteConfig.contact.email}</span>
              </a>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#94a3b8", fontSize: "0.9375rem" }}>
                <MapPin size={16} color="#34d399" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span>{siteConfig.location.display}</span>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "6px" }}>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Cleanora on WhatsApp"
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(37, 211, 102, 0.15)",
                    border: "1px solid rgba(37, 211, 102, 0.3)",
                    color: "#25D366",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MessageCircle size={18} />
                </a>

                <a
                  href={siteConfig.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Cleanora on Instagram"
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(225, 48, 108, 0.15)",
                    border: "1px solid rgba(225, 48, 108, 0.3)",
                    color: "#f43f5e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <InstagramIcon size={18} color="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
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
            color: "#94a3b8",
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