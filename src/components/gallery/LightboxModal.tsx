"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MessageCircle, MapPin } from "lucide-react";
import { GalleryItem } from "@/data/gallery";
import { createWhatsAppUrl } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

interface LightboxModalProps {
  item: GalleryItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(7, 20, 38, 0.94)",
        backdropFilter: "blur(12px)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        style={{
          position: "absolute",
          top: "24px",
          right: "24px",
          color: "#ffffff",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 210,
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.3)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)")}
      >
        <X size={22} />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous Image"
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#ffffff",
          backgroundColor: "rgba(255, 255, 255, 0.12)",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 210,
        }}
      >
        <ChevronLeft size={26} />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next Image"
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#ffffff",
          backgroundColor: "rgba(255, 255, 255, 0.12)",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 210,
        }}
      >
        <ChevronRight size={26} />
      </button>

      {/* Content wrapper */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "960px",
          width: "100%",
          backgroundColor: "#0d1e36",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Main Media Area */}
        <div style={{ position: "relative", width: "100%", height: "65vh", maxHeight: "560px", backgroundColor: "#000000" }}>
          <Image
            src={item.afterImageUrl || item.imageUrl}
            alt={item.title}
            fill
            sizes="100vw"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* Footer Meta */}
        <div
          style={{
            padding: "20px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            backgroundColor: "#0a192f",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#34d399",
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  padding: "3px 8px",
                  borderRadius: "4px",
                }}
              >
                {item.category}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.8125rem", color: "#94a3b8" }}>
                <MapPin size={13} color="#60a5fa" />
                <span>{item.location}</span>
              </span>
            </div>
            <h3 style={{ color: "#ffffff", fontSize: "1.1875rem", fontWeight: 700, fontFamily: "var(--font-heading)" }}>
              {item.title}
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.875rem", marginTop: "4px" }}>
              {item.description}
            </p>
          </div>

          <a
            href={createWhatsAppUrl(`Hi Cleanora, I saw your work on "${item.title}" in ${item.location} and would like a quote for a similar cleaning.`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "gallery_lightbox", item_id: item.id })}
            className="btn btn-whatsapp btn-sm"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <MessageCircle size={16} />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
