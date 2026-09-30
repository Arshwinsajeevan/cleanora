"use client";

import React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface LanguageToggleProps {
  variant?: "header" | "mobile" | "pill";
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ variant = "header" }) => {
  const { language, setLanguage } = useLanguage();

  if (variant === "mobile") {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          backgroundColor: "#f8fafc",
          borderRadius: "12px",
          border: "1px solid var(--border-light)",
          marginBottom: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-secondary)" }}>
          <Globe size={18} color="var(--color-primary)" />
          <span style={{ fontSize: "0.875rem", fontWeight: 700 }}>Language / ഭാഷ</span>
        </div>

        <div style={{ display: "flex", gap: "4px", backgroundColor: "#ffffff", padding: "3px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
          <button
            onClick={() => setLanguage("en")}
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              fontSize: "0.8125rem",
              fontWeight: 700,
              backgroundColor: language === "en" ? "var(--color-primary)" : "transparent",
              color: language === "en" ? "#ffffff" : "var(--text-secondary)",
              transition: "all 0.2s ease",
            }}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("ml")}
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              fontSize: "0.8125rem",
              fontWeight: 700,
              backgroundColor: language === "ml" ? "var(--color-primary)" : "transparent",
              color: language === "ml" ? "#ffffff" : "var(--text-secondary)",
              transition: "all 0.2s ease",
            }}
          >
            മലയാളം
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: "var(--bg-subtle)",
        borderRadius: "9999px",
        padding: "2px",
        border: "1px solid var(--border-light)",
        flexShrink: 0,
      }}
      className="lang-toggle-container"
    >
      <button
        onClick={() => setLanguage("en")}
        aria-label="Switch to English"
        style={{
          padding: "4px 8px",
          borderRadius: "9999px",
          fontSize: "0.72rem",
          fontWeight: 700,
          backgroundColor: language === "en" ? "var(--color-primary)" : "transparent",
          color: language === "en" ? "#ffffff" : "var(--text-secondary)",
          transition: "all 0.2s ease",
          cursor: "pointer",
          border: "none",
        }}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ml")}
        aria-label="Switch to Malayalam"
        style={{
          padding: "4px 8px",
          borderRadius: "9999px",
          fontSize: "0.72rem",
          fontWeight: 700,
          backgroundColor: language === "ml" ? "var(--color-primary)" : "transparent",
          color: language === "ml" ? "#ffffff" : "var(--text-secondary)",
          transition: "all 0.2s ease",
          cursor: "pointer",
          border: "none",
        }}
      >
        മലയാളം
      </button>
    </div>
  );
};
