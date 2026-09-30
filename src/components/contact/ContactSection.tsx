"use client";

import React from "react";
import { Phone, Mail, MessageCircle, MapPin, ShieldCheck } from "lucide-react";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { InstagramIcon } from "@/components/ui/Icons";
import { WhatsAppBookingForm } from "./WhatsAppBookingForm";
import { trackEvent } from "@/lib/analytics";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section section-bg-subtle">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Phone size={14} />
            <span>Contact & Bookings</span>
          </div>
          <h2 className="section-title">
            Get your space cleaned with Cleanora
          </h2>
          <p className="section-subtitle">
            Reach out via WhatsApp, phone, or fill our quick form to receive an upfront estimate and book your preferred date in Kannur.
          </p>
        </div>

        {/* Contact Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "40px",
            alignItems: "start",
          }}
          className="contact-layout"
        >
          {/* Form */}
          <WhatsAppBookingForm />

          {/* Right Direct Contact Card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "32px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 14px rgba(15, 23, 42, 0.04)",
              }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "20px",
                }}
              >
                Direct Contact Channels
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {/* Primary Phone */}
                <a
                  href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                  onClick={() => trackEvent("phone_call_click", { location: "contact_page_primary" })}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #f1f5f9",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "#eef4fc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-primary)",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
                      Primary Phone
                    </div>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                      {siteConfig.contact.primaryPhone}
                    </div>
                  </div>
                </a>

                {/* Secondary Phone */}
                <a
                  href={`tel:${siteConfig.contact.secondaryPhoneRaw}`}
                  onClick={() => trackEvent("phone_call_click", { location: "contact_page_secondary" })}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #f1f5f9",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "#eef4fc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-primary)",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
                      Secondary Contact
                    </div>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                      {siteConfig.contact.secondaryPhone}
                    </div>
                  </div>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "contact_page_direct" })}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    backgroundColor: "#ecfdf5",
                    border: "1px solid #a7f3d0",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "#25D366",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      flexShrink: 0,
                    }}
                  >
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#047857", fontWeight: 700, textTransform: "uppercase" }}>
                      Instant WhatsApp
                    </div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#065f46" }}>
                      Chat Directly with Cleanora
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  onClick={() => trackEvent("email_click", { location: "contact_page" })}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #f1f5f9",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "#f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#64748b",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
                      Email Address
                    </div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)", wordBreak: "break-all" }}>
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={siteConfig.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("instagram_click", { location: "contact_page" })}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    backgroundColor: "#fdf2f8",
                    border: "1px solid #fbcfe8",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "#e1306c",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      flexShrink: 0,
                    }}
                  >
                    <InstagramIcon size={18} color="#ffffff" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#9d174d", fontWeight: 700, textTransform: "uppercase" }}>
                      Instagram Profile
                    </div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#831843" }}>
                      {siteConfig.social.instagramHandle}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Satisfaction Guarantee card */}
            <div
              style={{
                backgroundColor: "var(--color-primary)",
                color: "#ffffff",
                padding: "24px",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <ShieldCheck size={36} color="#34d399" style={{ flexShrink: 0 }} />
              <div>
                <h5 style={{ fontWeight: 700, fontSize: "1rem" }}>
                  100% Satisfaction Guaranteed
                </h5>
                <p style={{ fontSize: "0.8125rem", color: "#cbd5e1", marginTop: "2px" }}>
                  We ensure an inspection walkthrough before completing the project to guarantee your absolute satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
