import React from "react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { Home, ArrowLeft } from "lucide-react";
import { createWhatsAppUrl } from "@/data/site";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "560px" }}>
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "5rem",
            fontWeight: 800,
            color: "var(--color-primary)",
            lineHeight: 1,
            marginBottom: "16px",
          }}
        >
          404
        </div>

        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.875rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "12px",
          }}
        >
          Page Not Found
        </h1>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            marginBottom: "32px",
          }}
        >
          The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let's get you back to the right place.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" className="btn btn-primary">
            <Home size={18} />
            <span>Return to Homepage</span>
          </Link>

          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <WhatsAppIcon size={18} />
            <span>WhatsApp Cleanora</span>
          </a>
        </div>
      </div>
    </div>
  );
}

