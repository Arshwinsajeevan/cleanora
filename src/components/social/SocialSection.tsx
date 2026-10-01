"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { InstagramIcon } from "@/components/ui/Icons";
import { trackEvent } from "@/lib/analytics";

export const SocialSection: React.FC = () => {
  const instagramPreviews = [
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
      title: "Cleanora Deep Cleaning Excellence | Kannur",
    },
    {
      img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop",
      title: "Kitchen Deep Degreasing & Hob Detailing",
    },
    {
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
      title: "Bathroom Descaling & Sanitization",
    },
    {
      img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=600&auto=format&fit=crop",
      title: "Rotary Single-Disc Floor Scrubbing",
    },
  ];

  return (
    <section className="section section-bg-subtle">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge blue">
            <InstagramIcon size={14} color="#0f3b74" />
            <span>Follow Cleanora</span>
          </div>
          <h2 className="section-title">
            Stay updated with our latest work in Kannur, Kerala
          </h2>
          <p className="section-subtitle">
            Follow <strong style={{ color: "var(--color-primary)" }}>{siteConfig.social.instagramHandle}</strong> for cleaning transformations, updates, and hygiene tips.
          </p>
        </div>

        {/* Instagram Visual Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginBottom: "36px",
          }}
          className="insta-grid"
        >
          {instagramPreviews.map((post, idx) => (
            <a
              key={idx}
              href={siteConfig.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("instagram_click", { location: `post_${idx}` })}
              style={{
                position: "relative",
                aspectRatio: "1/1",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(15, 23, 42, 0.08)",
                display: "block",
                border: "1px solid #e2e8f0",
                backgroundColor: "#0d223f",
              }}
              className="insta-card"
            >
              <Image
                src={post.img}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 50vw, 280px"
                style={{ objectFit: "cover" }}
              />

              {/* Hover overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(15, 35, 65, 0.75)",
                  opacity: 0,
                  transition: "opacity 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  color: "#ffffff",
                  padding: "16px",
                  textAlign: "center",
                }}
                className="insta-overlay"
              >
                <InstagramIcon size={28} color="#ffffff" />
                <span style={{ fontSize: "0.8125rem", fontWeight: 600 }}>
                  {post.title}
                </span>
                <span style={{ fontSize: "0.75rem", color: "#93c5fd" }}>
                  View on Instagram â†—
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href={siteConfig.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("instagram_click", { location: "social_cta" })}
            className="btn btn-outline"
            style={{ borderColor: "#cbd5e1" }}
          >
            <InstagramIcon size={18} color="#e1306c" />
            <span>Follow on Instagram</span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "social_cta" })}
            className="btn btn-whatsapp"
          >
            <WhatsAppIcon size={18} />
            <span>Contact on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};


