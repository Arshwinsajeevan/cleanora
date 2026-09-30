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
          backgroundColor: "#f1f5f9",
          borderRadius: "12px",
          marginTop: "10px",
          marginBottom: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-secondary)" }}>
          <Globe size={18} color="var(--color-primary)" />
          <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>Language / ഭാഷ</span>
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
        backgroundColor: "#f1f5f9",
        borderRadius: "9999px",
        padding: "3px",
        border: "1px solid #e2e8f0",
      }}
      className="lang-toggle-container"
    >
      <button
        onClick={() => setLanguage("en")}
        aria-label="Switch to English"
        style={{
          padding: "4px 10px",
          borderRadius: "9999px",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.04em",
          backgroundColor: language === "en" ? "var(--color-primary)" : "transparent",
          color: language === "en" ? "#ffffff" : "var(--text-secondary)",
          transition: "all 0.2s ease",
          cursor: "pointer",
        }}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ml")}
        aria-label="Switch to Malayalam"
        style={{
          padding: "4px 10px",
          borderRadius: "9999px",
          fontSize: "0.75rem",
          fontWeight: 700,
          backgroundColor: language === "ml" ? "var(--color-primary)" : "transparent",
          color: language === "ml" ? "#ffffff" : "var(--text-secondary)",
          transition: "all 0.2s ease",
          cursor: "pointer",
        }}
      >
        മലയാളം
      </button>
    </div>
  );
};
