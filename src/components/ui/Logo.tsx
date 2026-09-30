import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "default" | "light" | "footer";
  className?: string;
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  variant = "default",
  className = "",
  showSubtitle = true,
  size = "md",
}) => {
  const isLight = variant === "light" || variant === "footer";

  const dimension = size === "sm" ? 38 : size === "lg" ? 54 : 46;

  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none ${className}`}
      style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Real Round Business Logo Emblem */}
        <div
          style={{
            width: `${dimension}px`,
            height: `${dimension}px`,
            borderRadius: "50%",
            overflow: "hidden",
            position: "relative",
            flexShrink: 0,
            border: isLight
              ? "2px solid rgba(16, 185, 129, 0.6)"
              : "2px solid #0f3b74",
            boxShadow: isLight
              ? "0 4px 14px rgba(16, 185, 129, 0.3)"
              : "0 4px 14px rgba(15, 59, 116, 0.2)",
            backgroundColor: "#ffffff",
          }}
        >
          <Image
            src="/images/cleanora-logo.jpg"
            alt="Cleanora Official Business Logo"
            fill
            sizes="80px"
            style={{
              objectFit: "cover",
            }}
            priority
          />
        </div>

        {/* Wordmark */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: size === "lg" ? "1.65rem" : "1.45rem",
              fontWeight: 800,
              letterSpacing: "0.02em",
              lineHeight: 1.1,
              color: isLight ? "#ffffff" : "var(--color-primary)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>CLEAN</span>
            <span style={{ color: isLight ? "#34d399" : "var(--color-accent)" }}>ORA</span>
          </div>
          {showSubtitle && (
            <span
              style={{
                fontSize: "0.675rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: isLight ? "#94a3b8" : "#64748b",
                marginTop: "2px",
              }}
            >
              Professional Cleaning • Kannur
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
