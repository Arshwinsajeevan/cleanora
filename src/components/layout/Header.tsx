"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, MapPin } from "lucide-react";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { language, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: t("nav_home"), href: "/" },
    { label: t("nav_services"), href: "/services" },
    { label: t("nav_transformations"), href: "/#transformations" },
    { label: t("nav_equipments"), href: "/#machinery" },
    { label: t("nav_about"), href: "/about" },
    { label: t("nav_work"), href: "/gallery" },
    { label: t("nav_contact"), href: "/contact" },
  ];

  const handleWhatsAppClick = (source: string) => {
    trackEvent("whatsapp_click", { location: `header_${source}` });
  };

  const handlePhoneClick = () => {
    trackEvent("phone_call_click", { location: "header" });
  };

  return (
    <>
      {/* Top Micro Bar */}
      <div
        style={{
          backgroundColor: "#071426",
          color: "#94a3b8",
          fontSize: "0.8125rem",
          padding: "6px 0",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#e2e8f0" }}>
              <MapPin size={13} color="#10b981" />
              <span>{t("top_bar_location")}</span>
            </span>
            <span style={{ color: "rgba(255,255,255,0.2)" }} className="hide-mobile">|</span>
            <span style={{ color: "#34d399", fontWeight: 600 }} className="hide-mobile">
              {t("top_bar_guarantee")}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
              onClick={handlePhoneClick}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "#e2e8f0",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              <Phone size={13} color="#60a5fa" />
              <span>{siteConfig.contact.primaryPhone}</span>
            </a>
            <span style={{ color: "rgba(255,255,255,0.2)" }} className="hide-mobile">|</span>
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("top_bar")}
              className="hide-mobile"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "#34d399",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <MessageCircle size={13} />
              <span>{t("quick_whatsapp")}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.98)" : "#ffffff",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled ? "1px solid #e2e8f0" : "1px solid #f1f5f9",
          boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.06)" : "none",
          transition: "all 0.25s ease",
          height: "var(--header-height)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && link.href !== "/";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "var(--color-primary)" : "var(--text-secondary)",
                    position: "relative",
                    padding: "6px 0",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        backgroundColor: "var(--color-primary)",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons & Language Switcher */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
            className="desktop-actions"
          >
            {/* Desktop Language Switcher */}
            <LanguageToggle variant="header" />

            <a
              href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
              onClick={handlePhoneClick}
              className="btn btn-outline btn-sm"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                backgroundColor: "#ffffff",
                color: "var(--color-primary)",
                fontWeight: 600,
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              <Phone size={14} />
              <span>{t("call_us")}</span>
            </a>

            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("navbar_btn")}
              className="btn btn-whatsapp btn-sm"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                borderRadius: "8px",
                backgroundColor: "#25D366",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.875rem",
                textDecoration: "none",
                boxShadow: "0 3px 10px rgba(37, 211, 102, 0.3)",
              }}
            >
              <MessageCircle size={15} />
              <span>{t("book_via_whatsapp")}</span>
            </a>
          </div>

          {/* Mobile Actions Container (Language Switcher + Hamburger Menu) */}
          <div style={{ display: "none", alignItems: "center", gap: "8px" }} className="mobile-toggle">
            <LanguageToggle variant="header" />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                padding: "8px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                color: "var(--text-primary)",
                backgroundColor: "#f8fafc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "calc(var(--header-height) + 33px)",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#ffffff",
            zIndex: 99,
            padding: "20px 18px calc(24px + env(safe-area-inset-bottom, 0px))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {/* Mobile Language Switcher Highlight */}
            <LanguageToggle variant="mobile" />

            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginBottom: "4px",
              }}
            >
              {t("menu")}
            </p>
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && link.href !== "/";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: "12px 14px",
                    borderRadius: "8px",
                    backgroundColor: isActive ? "var(--color-primary-subtle)" : "transparent",
                    color: isActive ? "var(--color-primary)" : "var(--text-primary)",
                    fontWeight: isActive ? 700 : 500,
                    fontSize: "1.05rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textDecoration: "none",
                  }}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-primary)",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div
            style={{
              paddingTop: "20px",
              borderTop: "1px solid #f1f5f9",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("mobile_drawer")}
              className="btn btn-whatsapp"
              style={{
                width: "100%",
                backgroundColor: "#25D366",
                color: "#ffffff",
                padding: "13px 0",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(37, 211, 102, 0.3)",
              }}
            >
              <MessageCircle size={18} />
              <span>{t("book_via_whatsapp")}</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
              onClick={handlePhoneClick}
              className="btn btn-outline"
              style={{
                width: "100%",
                border: "1px solid #cbd5e1",
                backgroundColor: "#ffffff",
                color: "var(--color-primary)",
                padding: "12px 0",
                borderRadius: "10px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                textDecoration: "none",
              }}
            >
              <Phone size={18} />
              <span>{siteConfig.contact.primaryPhone}</span>
            </a>

            <div
              style={{
                textAlign: "center",
                fontSize: "0.8125rem",
                color: "var(--text-muted)",
                marginTop: "4px",
              }}
            >
              മട്ടന്നൂർ • Mattanur, Kannur • 100% Satisfaction
            </div>
          </div>
        </div>
      )}
    </>
  );
};
