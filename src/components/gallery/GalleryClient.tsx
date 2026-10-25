"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Video,
  Layers,
  ArrowRight,
  Clock,
  Sparkle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { createWhatsAppUrl } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { trackWhatsAppConversion, trackEvent } from "@/lib/analytics";

export const GalleryClient: React.FC = () => {
  const { language, t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      trackEvent("gallery_video_pause");
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      trackEvent("gallery_video_play");
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const getWhatsAppBookingLink = () => {
    const msg =
      language === "ml"
        ? "നമസ്കാരം ക്ലീനോറ, നിങ്ങളുടെ ഇന്റർലോക്ക് & വീട് ക്ലീനിംഗ് ഗ്യാലറി വീഡിയോ കണ്ടു. എനിക്കും സമാനമായ സർവീസ് ബുക്ക് ചെയ്യാൻ ആഗ്രഹമുണ്ട്."
        : "Hello Cleanora, I saw your Interlock & House Deep Cleaning gallery video. I would like to book a similar service in Kannur.";
    return createWhatsAppUrl(msg);
  };

  return (
    <>
      {/* 1. Hero Header */}
      <section
        style={{
          backgroundColor: "#071426",
          color: "#ffffff",
          padding: "clamp(48px, 6vw, 72px) 0 clamp(36px, 5vw, 54px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-40%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(7, 20, 38, 0) 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ maxWidth: "860px", position: "relative", zIndex: 10, padding: "0 16px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.35)",
              color: "#34d399",
              fontSize: "0.78rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "16px",
            }}
          >
            <Video size={14} color="#34d399" />
            <span>{t("gallery_badge")}</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: language === "ml" ? "clamp(1.75rem, 4vw, 2.5rem)" : "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 800,
              marginBottom: "14px",
              lineHeight: language === "ml" ? 1.3 : 1.18,
              letterSpacing: language === "ml" ? "normal" : "-0.02em",
            }}
          >
            {t("gallery_title")}
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#cbd5e1",
              lineHeight: 1.7,
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            {t("gallery_subtitle")}
          </p>
        </div>
      </section>

      {/* 2. Main Video Showcase Section */}
      <section style={{ padding: "clamp(36px, 5vw, 64px) 0", backgroundColor: "#f8fafc" }}>
        <div className="container" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 16px" }}>
          
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "24px",
              border: "1px solid var(--border-light)",
              boxShadow: "0 20px 40px -15px rgba(7, 30, 61, 0.08)",
              overflow: "hidden",
            }}
          >
            {/* Top Bar of Video Card */}
            <div
              style={{
                padding: "16px 22px",
                backgroundColor: "#ffffff",
                borderBottom: "1px solid var(--border-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "var(--color-accent-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-accent)",
                  }}
                >
                  <Video size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--color-primary)" }}>
                    {t("gallery_video_title")}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                    <MapPin size={12} color="var(--color-accent)" />
                    <span>{language === "ml" ? "മട്ടന്നൂർ • കണ്ണൂർ സൈറ്റ് പ്രൂഫ്" : "Mattanur • Kannur Site Proof"}</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 12px",
                  borderRadius: "9999px",
                  backgroundColor: "#ecfdf5",
                  border: "1px solid #a7f3d0",
                  color: "#059669",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                }}
              >
                <CheckCircle2 size={13} color="#059669" />
                <span>{language === "ml" ? "100% യഥാർത്ഥ വീഡിയോ" : "100% Verified Real Footage"}</span>
              </div>
            </div>

            {/* Video Player Container */}
            <div
              style={{
                position: "relative",
                backgroundColor: "#000000",
                width: "100%",
                aspectRatio: "16/9",
                maxHeight: "620px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <video
                ref={videoRef}
                playsInline
                preload="metadata"
                poster="/images/interlock.png"
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  backgroundColor: "#000000",
                }}
              >
                <source src="/videos/cleanora-interlock-house-cleaning-kannur.mp4" type="video/mp4" />
                Your browser does not support HTML5 video playback.
              </video>

              {/* Big Floating Play Button Overlay when paused */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  aria-label="Play Gallery Video"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(5, 150, 105, 0.92)",
                    color: "#ffffff",
                    border: "3px solid #ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                    transition: "transform 0.2s ease, background-color 0.2s ease",
                    zIndex: 20,
                  }}
                >
                  <Play size={30} fill="#ffffff" style={{ marginLeft: "4px" }} />
                </button>
              )}
            </div>

            {/* Video Details & WhatsApp Booking Action Bar */}
            <div
              style={{
                padding: "clamp(20px, 3vw, 32px)",
                backgroundColor: "#ffffff",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                gap: "24px",
                alignItems: "center",
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "var(--color-primary)",
                    marginBottom: "8px",
                  }}
                >
                  {t("gallery_video_title")}
                </h2>
                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.65,
                    color: "var(--text-secondary)",
                    marginBottom: "16px",
                  }}
                >
                  {t("gallery_video_desc")}
                </p>

                {/* Proof Highlights */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "var(--text-primary)" }}>
                    <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0 }} />
                    <span>
                      {language === "ml"
                        ? "ഇന്റർലോക്കിലെ പായലും എണ്ണക്കറകളും ഹൈ-പ്രഷർ പ്രൊഫഷണൽ വാഷിംഗ് വഴി പൂർണ്ണമായും മാറ്റി"
                        : "High-pressure jet washing to remove hardened moss & deep grime"}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "var(--text-primary)" }}>
                    <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0 }} />
                    <span>
                      {language === "ml"
                        ? "വീടിന്റെ തറയും മുറികളും മെഷീൻ സ്ക്രബ്ബിംഗ് വഴി പുത്തൻപോലെയാക്കി"
                        : "Floor scrubbing and spotless room sanitization throughout the house"}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "var(--text-primary)" }}>
                    <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0 }} />
                    <span>
                      {language === "ml"
                        ? "മട്ടന്നൂർ മലബാർ പ്ലാസ ഓഫീസിൽ നിന്നുള്ള നേരിട്ടുള്ള ടീം സർവീസ്"
                        : "Directly executed by verified staff from Malabar Plaza, Mattanur"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Box */}
              <div
                style={{
                  backgroundColor: "#f8fafc",
                  borderRadius: "18px",
                  padding: "20px",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.05em" }}>
                  {language === "ml" ? "വേഗത്തിലുള്ള ബുക്കിംഗ്" : "Direct Site Booking"}
                </div>
                <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--color-primary)", lineHeight: 1.3 }}>
                  {language === "ml"
                    ? "നിങ്ങളുടെ വീടും ഇന്റർലോക്കും ഇതുപോലെ വൃത്തിയാക്കണോ?"
                    : "Need your house or interlock transformed like this?"}
                </div>

                <a
                  href={getWhatsAppBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppConversion("gallery_video_cta")}
                  className="btn btn-whatsapp"
                  style={{
                    padding: "12px 18px",
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <WhatsAppIcon size={18} style={{ flexShrink: 0 }} />
                  <span>{t("gallery_book_service")}</span>
                </a>

                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "center" }}>
                  {language === "ml"
                    ? "ഫോട്ടോകളോ അളവുകളോ അയച്ച് തത്സമയം റേറ്റ് അറിയാം"
                    : "Share photos/sqft on WhatsApp for upfront estimate"}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Transparency & Upcoming Videos Notice */}
          <div
            style={{
              marginTop: "32px",
              padding: "20px 24px",
              borderRadius: "16px",
              backgroundColor: "#ffffff",
              border: "1px dashed #cbd5e1",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                backgroundColor: "var(--color-accent-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-accent)",
                flexShrink: 0,
              }}
            >
              <Clock size={22} />
            </div>
            <div style={{ flex: 1, minWidth: "240px" }}>
              <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "3px" }}>
                {language === "ml" ? "100% യഥാർത്ഥ വീഡിയോകൾ മാത്രം" : "Strictly 100% Real Site Footage"}
              </div>
              <div style={{ fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                {t("gallery_upcoming_notice")}
              </div>
            </div>
            <Link
              href="/services"
              className="btn btn-outline btn-sm"
              style={{
                borderRadius: "10px",
                padding: "8px 14px",
                fontSize: "0.8125rem",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                whiteSpace: "nowrap",
              }}
            >
              <span>{t("view_all_services")}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Final CTA Section */}
      <FinalCTA />
    </>
  );
};
