"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Sparkles,
  ChevronRight,
  Home,
  CheckCircle2,
  Wrench,
  Info,
  Images,
} from "lucide-react";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { trackWhatsAppConversion } from "@/lib/analytics";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, t } = useLanguage();

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Blur & Shadow background when scrolled
      setIsScrolled(currentScrollPos > 10);

      // Never hide when mobile drawer is open
      if (mobileMenuOpen) {
        setIsVisible(true);
        return;
      }

      if (currentScrollPos <= 25) {
        // At top of page -> always show
        setIsVisible(true);
      } else if (currentScrollPos < prevScrollPos - 2) {
        // Scrolling UP -> show navbar smoothly
        setIsVisible(true);
      } else if (currentScrollPos > prevScrollPos + 4 && currentScrollPos > 70) {
        // Scrolling DOWN -> hide navbar
        setIsVisible(false);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: t("nav_home"), icon: <Home size={18} /> },
    { href: "/services", label: t("nav_services"), icon: <Sparkles size={18} /> },
    { href: "/results", label: t("nav_results"), icon: <CheckCircle2 size={18} /> },
    { href: "/machinery", label: t("nav_machinery"), icon: <Wrench size={18} /> },
    { href: "/about", label: t("nav_about"), icon: <Info size={18} /> },
    { href: "/gallery", label: t("nav_work"), icon: <Images size={18} /> },
    { href: "/contact", label: t("nav_contact"), icon: <Phone size={18} /> },
  ];

  const handleWhatsAppClick = (source: string) => {
    trackWhatsAppConversion(`header_${source}`);
  };

  const getWhatsAppLink = () => {
    const message =
      language === "ml"
        ? "നമസ്കാരം ക്ലീനോറ, എനിക്ക് നിങ്ങളുടെ ക്ലീനിംഗ് & ഷിഫ്റ്റിംഗ് സർവീസുകളെക്കുറിച്ച് അറിയണം."
        : "Hello Cleanora, I would like to inquire about your deep cleaning & shifting services in Kannur.";
    return createWhatsAppUrl(message);
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.96)"
            : "#ffffff",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: isScrolled
            ? "1px solid var(--border-light)"
            : "1px solid var(--border-subtle)",
          transform: isVisible || mobileMenuOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, box-shadow 0.2s ease",
          boxShadow: isScrolled && isVisible ? "0 4px 20px rgba(15, 23, 42, 0.07)" : "none",
          width: "100%",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "74px",
            maxWidth: "1320px",
            paddingLeft: "16px",
            paddingRight: "16px",
            gap: "10px",
          }}
        >
          {/* Logo Section */}
          <Link
            href="/"
            prefetch={true}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              flexShrink: 0,
              minWidth: "max-content",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                overflow: "hidden",
                flexShrink: 0,
                border: "1px solid var(--border-light)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
              }}
            >
              <Image
                src="/images/logo.png"
                alt="Cleanora Logo"
                fill
                sizes="42px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--color-primary)",
                  lineHeight: 1.1,
                  whiteSpace: "nowrap",
                }}
              >
                CLEANORA
              </div>
              <div
                style={{
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  color: "var(--color-accent)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {language === "ml" ? "ഡീപ് ക്ലീനിംഗ്" : "Deep Cleaning"}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              backgroundColor: "var(--bg-subtle)",
              padding: "3px 6px",
              borderRadius: "9999px",
              border: "1px solid var(--border-light)",
              flexShrink: 1,
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  style={{
                    padding: "6px 10px",
                    borderRadius: "9999px",
                    fontSize: language === "ml" ? "0.78rem" : "0.82rem",
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? "#ffffff" : "var(--text-secondary)",
                    backgroundColor: isActive ? "var(--color-primary)" : "transparent",
                    transition: "all 0.15s ease",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Language Switcher + WhatsApp CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexShrink: 0,
            }}
            className="desktop-actions"
          >
            <LanguageToggle variant="header" />

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("navbar_btn")}
              className="btn btn-whatsapp btn-sm"
              style={{
                borderRadius: "9999px",
                padding: "7px 14px",
                fontSize: "0.8125rem",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                whiteSpace: "nowrap",
              }}
            >
              <MessageCircle size={14} />
              <span>{language === "ml" ? "വാട്സാപ്പ്" : "WhatsApp"}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Language Switcher + Hamburger Menu Icon */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "8px",
              flexShrink: 0,
            }}
            className="mobile-toggle"
          >
            <LanguageToggle variant="header" />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                border: "1.5px solid var(--border-light)",
                color: "var(--color-primary)",
                backgroundColor: "var(--bg-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent fixed header from covering top content */}
      <div style={{ height: "74px" }} />

      {/* Mobile Slideout Drawer with All Navigation Links */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "74px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#ffffff",
            zIndex: 9999,
            padding: "20px 18px 85px 18px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflowY: "auto",
            animation: "slideUpFade 0.2s ease-out",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "var(--text-muted)",
                letterSpacing: "0.06em",
                marginBottom: "6px",
              }}
            >
              {language === "ml" ? "മെനു / നാവിഗേഷൻ" : "Menu Navigation"}
            </div>

            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: "13px 16px",
                    borderRadius: "12px",
                    backgroundColor: isActive ? "var(--color-primary)" : "#f8fafc",
                    color: isActive ? "#ffffff" : "var(--text-primary)",
                    border: isActive ? "1px solid var(--color-primary)" : "1px solid var(--border-light)",
                    fontWeight: isActive ? 700 : 600,
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textDecoration: "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: isActive ? "#34d399" : "var(--color-accent)", display: "flex" }}>
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight size={18} color={isActive ? "#ffffff" : "#94a3b8"} />
                </Link>
              );
            })}
          </div>

          <div
            style={{
              paddingTop: "18px",
              borderTop: "1px solid var(--border-light)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("mobile_drawer")}
              className="btn btn-whatsapp btn-lg"
              style={{ width: "100%", justifyContent: "center", borderRadius: "12px", padding: "14px" }}
            >
              <MessageCircle size={19} />
              <span>{t("book_via_whatsapp")}</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
              className="btn btn-outline btn-lg"
              style={{ width: "100%", justifyContent: "center", borderRadius: "12px", padding: "14px" }}
            >
              <Phone size={19} />
              <span>{siteConfig.contact.primaryPhone}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
