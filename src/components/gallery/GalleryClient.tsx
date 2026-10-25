"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Video,
  Layers,
  ArrowRight,
  Clock,
  X,
  ZoomIn,
  FileText,
  PhoneCall,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { createWhatsAppUrl, siteConfig } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { trackWhatsAppConversion, trackEvent } from "@/lib/analytics";

interface GalleryVideoItem {
  id: "interlock-video" | "house-video";
  type: "video";
  videoSrc: string;
  posterSrc: string;
  badgeEn: string;
  badgeMl: string;
  titleEn: string;
  titleMl: string;
  locationEn: string;
  locationMl: string;
  descEn: string;
  descMl: string;
  highlightsEn: string[];
  highlightsMl: string[];
  whatsappMsgEn: string;
  whatsappMsgMl: string;
}

interface GalleryImageItem {
  id: "official-showcase";
  type: "image";
  imageSrc: string;
  badgeEn: string;
  badgeMl: string;
  titleEn: string;
  titleMl: string;
  locationEn: string;
  locationMl: string;
  descEn: string;
  descMl: string;
  highlightsEn: string[];
  highlightsMl: string[];
  whatsappMsgEn: string;
  whatsappMsgMl: string;
}

type GalleryItem = GalleryVideoItem | GalleryImageItem;

export const GalleryClient: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"all" | "videos" | "showcase">("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Video playback states
  const interlockVideoRef = useRef<HTMLVideoElement>(null);
  const houseVideoRef = useRef<HTMLVideoElement>(null);

  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [isMutedInterlock, setIsMutedInterlock] = useState(false);
  const [isMutedHouse, setIsMutedHouse] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleVideoPlayback = (id: "interlock-video" | "house-video") => {
    if (id === "interlock-video") {
      const vid = interlockVideoRef.current;
      if (!vid) return;

      if (playingVideo === "interlock-video") {
        vid.pause();
        setPlayingVideo(null);
        trackEvent("gallery_video_pause", { video: "interlock" });
      } else {
        if (houseVideoRef.current) {
          houseVideoRef.current.pause();
        }
        vid.play();
        setPlayingVideo("interlock-video");
        trackEvent("gallery_video_play", { video: "interlock" });
      }
    } else {
      const vid = houseVideoRef.current;
      if (!vid) return;

      if (playingVideo === "house-video") {
        vid.pause();
        setPlayingVideo(null);
        trackEvent("gallery_video_pause", { video: "house_deep" });
      } else {
        if (interlockVideoRef.current) {
          interlockVideoRef.current.pause();
        }
        vid.play();
        setPlayingVideo("house-video");
        trackEvent("gallery_video_play", { video: "house_deep" });
      }
    }
  };

  const toggleMute = (id: "interlock-video" | "house-video") => {
    if (id === "interlock-video" && interlockVideoRef.current) {
      interlockVideoRef.current.muted = !isMutedInterlock;
      setIsMutedInterlock(!isMutedInterlock);
    } else if (id === "house-video" && houseVideoRef.current) {
      houseVideoRef.current.muted = !isMutedHouse;
      setIsMutedHouse(!isMutedHouse);
    }
  };

  const handleFullscreen = (id: "interlock-video" | "house-video") => {
    const vid = id === "interlock-video" ? interlockVideoRef.current : houseVideoRef.current;
    if (vid && vid.requestFullscreen) {
      vid.requestFullscreen();
    }
  };

  const items: GalleryItem[] = [
    {
      id: "interlock-video",
      type: "video",
      videoSrc: "/videos/cleanora-interlock-house-cleaning-kannur.mp4",
      posterSrc: "/images/interlock.png",
      badgeEn: "On-Site Jet Washing",
      badgeMl: "ഇന്റർലോക്ക് ജെറ്റ് വാഷിംഗ്",
      titleEn: "Interlock Jet Wash & Algae Removal",
      titleMl: "ഇന്റർലോക്ക് പ്രഷർ വാഷിംഗ് & പായൽ നീക്കം ചെയ്യൽ",
      locationEn: "Mattanur, Kannur Site Work",
      locationMl: "മട്ടന്നൂർ, കണ്ണൂർ ലൈവ് സൈറ്റ്",
      descEn:
        "Live on-site recording capturing the thorough removal of thick moss, stubborn mud, and slippery algae from courtyard pavers using our heavy-duty high-pressure jet washer.",
      descMl:
        "മുറ്റത്തെ ഇന്റർലോക്കിലെ കട്ടപിടിച്ച പായലും കറുത്ത അഴുക്കുകളും ഹൈ-പ്രഷർ ജെറ്റ് വാഷർ ഉപയോഗിച്ച് പൂർണ്ണമായി നീക്കം ചെയ്യുന്ന ലൈവ് സൈറ്റ് ദൃശ്യം.",
      highlightsEn: [
        "180+ bar high-pressure deep moss extraction",
        "Restores original interlock tile color & non-slip grip",
        "Directly executed by verified Mattanur site staff",
      ],
      highlightsMl: [
        "180+ ബാർ ഹൈ-പ്രഷർ പായൽ നീക്കം ചെയ്യൽ",
        "ഇന്റർലോക്കിന്റെ പഴയ നിറവും തെന്നാത്ത പ്രതലവും തിരികെ നൽകുന്നു",
        "മട്ടന്നൂർ ഓഫീസിലെ പ്രൊഫഷണൽ ടീമിന്റെ നേരിട്ടുള്ള സർവീസ്",
      ],
      whatsappMsgEn:
        "Hello Cleanora, I saw your Interlock Jet Washing video in the gallery. I want to book an interlock cleaning service in Kannur.",
      whatsappMsgMl:
        "നമസ്കാരം ക്ലീനോറ, നിങ്ങളുടെ ഇന്റർലോക്ക് ജെറ്റ് വാഷിംഗ് ഗ്യാലറി വീഡിയോ കണ്ടു. എന്റെ വീട്ടുപരിസരത്തെ ഇന്റർലോക്ക് വൃത്തിയാക്കാൻ സർവീസ് ബുക്ക് ചെയ്യാൻ ആഗ്രഹിക്കുന്നു.",
    },
    {
      id: "house-video",
      type: "video",
      videoSrc: "/videos/cleanora-deep-cleaning-site-work-kannur.mp4",
      posterSrc: "/images/housecleaning.png",
      badgeEn: "House Deep Scrubbing",
      badgeMl: "വീട് മെഷീൻ സ്ക്രബ്ബിംഗ്",
      titleEn: "Residential Deep Cleaning & Floor Scrubbing",
      titleMl: "റെസിഡൻഷ്യൽ ഡീപ് ക്ലീനിംഗ് & ഫ്ലോർ സ്ക്രബ്ബിംഗ്",
      locationEn: "Kannur District Residential Site",
      locationMl: "കണ്ണൂർ റെസിഡൻഷ്യൽ സൈറ്റ്",
      descEn:
        "Real on-site footage demonstrating mechanical single-disc floor scrubbing, corner grout dust extraction, and spotless room sanitization inside a customer home.",
      descMl:
        "വീടിന്റെ തറയും മുറികളും മെഷീൻ സ്ക്രബ്ബിംഗ് നടത്തി അഴുക്കുകൾ പൂർണ്ണമായും നീക്കം ചെയ്ത് പുതിയതുപോലെ തിളക്കമുള്ളതാക്കുന്ന തത്സമയ സൈറ്റ് ദൃശ്യം.",
      highlightsEn: [
        "Single-disc mechanical floor polishing & deep scrub",
        "Complete removal of tile stains, dust & sticky grime",
        "Safe, non-toxic eco-friendly sanitizing solutions",
      ],
      highlightsMl: [
        "സിംഗിൾ-ഡിസ്ക് മെഷീൻ ഉപയോഗിച്ചുള്ള ഫ്ലോർ സ്ക്രബ്ബിംഗ്",
        "തറയിലെ കറകളും ടൈൽ ജോയിന്റുകളിലെ അഴുക്കും പൂർണ്ണമായി നീക്കം ചെയ്യൽ",
        "വിഷാംശമില്ലാത്ത പ്രൊഫഷണൽ ക്ലീനിംഗ് ലായനികൾ",
      ],
      whatsappMsgEn:
        "Hello Cleanora, I saw your House Deep Cleaning & Floor Scrubbing video in the gallery. I want to book house deep cleaning in Kannur.",
      whatsappMsgMl:
        "നമസ്കാരം ക്ലീനോറ, നിങ്ങളുടെ വീട് ഡീപ് ക്ലീനിംഗ് & ഫ്ലോർ സ്ക്രബ്ബിംഗ് വീഡിയോ കണ്ടു. എനിക്ക് വീട് ക്ലീനിംഗ് സർവീസ് ബുക്ക് ചെയ്യാൻ താല്പര്യമുണ്ട്.",
    },
    {
      id: "official-showcase",
      type: "image",
      imageSrc: "/images/cleanora-official-services-showcase.jpeg",
      badgeEn: "Official Rate Card & Flyer",
      badgeMl: "ഒഫീഷ്യൽ സർവീസ് കാറ്റലോഗ്",
      titleEn: "Official Cleanora Services & Rates Showcase",
      titleMl: "ക്ലീനോറ ഒഫീഷ്യൽ സർവീസ് കാറ്റലോഗ് & നമ്പറുകൾ",
      locationEn: "Malabar Plaza, Mattanur (HQ)",
      locationMl: "മലബാർ പ്ലാസ, മട്ടന്നൂർ (ഹെഡ് ഓഫീസ്)",
      descEn:
        "Cleanora's verified service flyer highlighting all available deep cleaning packages, including House, Quarters, Office, Water Tank, Solar, Interlock, and our newly launched Doorstep Vehicle & Two-Wheeler Washing.",
      descMl:
        "വീട്, ക്വാർട്ടേഴ്സ്, ഓഫീസ്, മറ്റു സ്ഥാപനങ്ങൾ കൂടാതെ ഇന്റർലോക്ക്, വാട്ടർ ടാങ്ക്, സോളാർ പാനൽ, വാഹനം & ബൈക്ക് വാഷിംഗ് എന്നിവ പുത്തൻ മോഡിയിൽ വൃത്തിയാക്കുന്നതിനുള്ള ഒഫീഷ്യൽ സർവീസ് വിവരങ്ങൾ.",
      highlightsEn: [
        "Direct Hotline Numbers: +91 94968 40540 / +91 80754 79552",
        "Covers Cars, Two-Wheelers, Water Tanks & Full Houses",
        "Instant booking & quote verification across Kannur",
      ],
      highlightsMl: [
        "നേരിട്ട് വിളിക്കാം: 9496840540 / 8075479552",
        "കാർ & ബൈക്ക് വാഷിംഗ്, വാട്ടർ ടാങ്ക്, വീട്, ഓഫീസ് ക്ലീനിംഗ്",
        "കണ്ണൂർ ജില്ലയിലുടനീളം തത്സമയ ബുക്കിംഗും എസ്റ്റിമേറ്റും",
      ],
      whatsappMsgEn:
        "Hello Cleanora, I saw your Official Service Flyer in the gallery. I would like to enquire about your services and get a price estimate.",
      whatsappMsgMl:
        "നമസ്കാരം ക്ലീനോറ, നിങ്ങളുടെ ഒഫീഷ്യൽ സർവീസ് കാറ്റലോഗ് കണ്ടു. കൂടുതൽ വിവരങ്ങളും റേറ്റ് വിവരങ്ങളും അറിയാൻ ആഗ്രഹിക്കുന്നു.",
    },
  ];

  const filteredItems = items.filter((item) => {
    if (activeFilter === "videos") return item.type === "video";
    if (activeFilter === "showcase") return item.type === "image";
    return true;
  });

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

        <div className="container" style={{ maxWidth: "880px", position: "relative", zIndex: 10, padding: "0 16px" }}>
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
              maxWidth: "700px",
              margin: "0 auto 28px",
            }}
          >
            {t("gallery_subtitle")}
          </p>

          {/* Interactive Category Filter Pills */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "6px",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              borderRadius: "9999px",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setActiveFilter("all")}
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                backgroundColor: activeFilter === "all" ? "var(--color-accent)" : "transparent",
                color: activeFilter === "all" ? "#ffffff" : "#cbd5e1",
              }}
            >
              {t("gallery_tab_all")}
            </button>
            <button
              onClick={() => setActiveFilter("videos")}
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                backgroundColor: activeFilter === "videos" ? "var(--color-accent)" : "transparent",
                color: activeFilter === "videos" ? "#ffffff" : "#cbd5e1",
              }}
            >
              {t("gallery_tab_videos")}
            </button>
            <button
              onClick={() => setActiveFilter("showcase")}
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                backgroundColor: activeFilter === "showcase" ? "var(--color-accent)" : "transparent",
                color: activeFilter === "showcase" ? "#ffffff" : "#cbd5e1",
              }}
            >
              {t("gallery_tab_showcase")}
            </button>
          </div>
        </div>
      </section>

      {/* 2. Media Grid Section */}
      <section style={{ padding: "clamp(36px, 5vw, 64px) 0", backgroundColor: "#f8fafc" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
              gap: "32px",
              alignItems: "stretch",
            }}
          >
            {filteredItems.map((item) => {
              const isVideo = item.type === "video";
              const title = language === "ml" ? item.titleMl : item.titleEn;
              const badge = language === "ml" ? item.badgeMl : item.badgeEn;
              const location = language === "ml" ? item.locationMl : item.locationEn;
              const desc = language === "ml" ? item.descMl : item.descEn;
              const highlights = language === "ml" ? item.highlightsMl : item.highlightsEn;
              const whatsappMsg = language === "ml" ? item.whatsappMsgMl : item.whatsappMsgEn;

              if (isVideo) {
                const isThisPlaying = playingVideo === item.id;
                const isThisMuted = item.id === "interlock-video" ? isMutedInterlock : isMutedHouse;
                const videoRef = item.id === "interlock-video" ? interlockVideoRef : houseVideoRef;

                return (
                  <div
                    key={item.id}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "24px",
                      border: "1px solid var(--border-light)",
                      boxShadow: "0 15px 35px -10px rgba(7, 30, 61, 0.08)",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                  >
                    {/* Video Header Strip */}
                    <div
                      style={{
                        padding: "14px 18px",
                        backgroundColor: "#ffffff",
                        borderBottom: "1px solid var(--border-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "8px",
                            backgroundColor: "var(--color-accent-subtle)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--color-accent)",
                          }}
                        >
                          <Video size={16} />
                        </div>
                        <div>
                          <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-primary)" }}>
                            {badge}
                          </div>
                          <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "3px" }}>
                            <MapPin size={11} color="#059669" />
                            <span>{location}</span>
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          color: "#059669",
                          backgroundColor: "#ecfdf5",
                          padding: "3px 8px",
                          borderRadius: "9999px",
                          border: "1px solid #a7f3d0",
                        }}
                      >
                        <ShieldCheck size={12} />
                        <span>100% Real Site</span>
                      </div>
                    </div>

                    {/* Video Player Container */}
                    <div
                      style={{
                        position: "relative",
                        backgroundColor: "#020617",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "460px",
                        overflow: "hidden",
                      }}
                    >
                      <video
                        ref={videoRef}
                        src={item.videoSrc}
                        poster={item.posterSrc}
                        controls={false}
                        playsInline
                        preload="metadata"
                        onEnded={() => setPlayingVideo(null)}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />

                      {/* Floating Bottom Video Controls */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: "16px",
                          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          zIndex: 10,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <button
                            onClick={() => toggleVideoPlayback(item.id)}
                            aria-label={isThisPlaying ? "Pause Video" : "Play Video"}
                            style={{
                              width: "38px",
                              height: "38px",
                              borderRadius: "50%",
                              backgroundColor: "var(--color-accent)",
                              color: "#ffffff",
                              border: "none",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                              transition: "transform 0.15s ease",
                            }}
                          >
                            {isThisPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: "2px" }} />}
                          </button>

                          <button
                            onClick={() => toggleMute(item.id)}
                            aria-label={isThisMuted ? "Unmute Audio" : "Mute Audio"}
                            style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "50%",
                              backgroundColor: "rgba(255, 255, 255, 0.2)",
                              color: "#ffffff",
                              border: "none",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            {isThisMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                          </button>
                        </div>

                        <button
                          onClick={() => handleFullscreen(item.id)}
                          aria-label="View Fullscreen"
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            color: "#ffffff",
                            border: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                          }}
                        >
                          <Maximize2 size={16} />
                        </button>
                      </div>

                      {/* Center Play Button Overlay when paused */}
                      {!isThisPlaying && (
                        <button
                          onClick={() => toggleVideoPlayback(item.id)}
                          aria-label="Play Video"
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "64px",
                            height: "64px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(5, 150, 105, 0.9)",
                            color: "#ffffff",
                            border: "3px solid rgba(255, 255, 255, 0.9)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                            zIndex: 20,
                          }}
                        >
                          <Play size={28} fill="#ffffff" style={{ marginLeft: "3px" }} />
                        </button>
                      )}
                    </div>

                    {/* Video Description & Highlights */}
                    <div
                      style={{
                        padding: "24px 20px",
                        backgroundColor: "#ffffff",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        flex: 1,
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <h2
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1.15rem",
                            fontWeight: 800,
                            color: "var(--color-primary)",
                            marginBottom: "8px",
                            lineHeight: 1.35,
                          }}
                        >
                          {title}
                        </h2>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            lineHeight: 1.6,
                            color: "var(--text-secondary)",
                            marginBottom: "14px",
                          }}
                        >
                          {desc}
                        </p>

                        {/* Proof Highlights */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          {highlights.map((hl, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.82rem", color: "var(--text-primary)" }}>
                              <CheckCircle2 size={15} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
                              <span style={{ lineHeight: 1.4 }}>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* WhatsApp CTA */}
                      <div style={{ paddingTop: "12px", borderTop: "1px solid var(--border-light)" }}>
                        <a
                          href={createWhatsAppUrl(whatsappMsg)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackWhatsAppConversion(`gallery_${item.id}_cta`)}
                          className="btn btn-whatsapp"
                          style={{
                            padding: "11px 16px",
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
                          <WhatsAppIcon size={17} style={{ flexShrink: 0 }} />
                          <span>{t("gallery_book_service")}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }

              // Image Item: Official Cleanora Services Flyer
              return (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "24px",
                    border: "1px solid var(--border-light)",
                    boxShadow: "0 15px 35px -10px rgba(7, 30, 61, 0.08)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  {/* Image Header Strip */}
                  <div
                    style={{
                      padding: "14px 18px",
                      backgroundColor: "#ffffff",
                      borderBottom: "1px solid var(--border-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "8px",
                          backgroundColor: "#eff6ff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#2563eb",
                        }}
                      >
                        <FileText size={16} />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-primary)" }}>
                          {badge}
                        </div>
                        <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "3px" }}>
                          <MapPin size={11} color="#2563eb" />
                          <span>{location}</span>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#2563eb",
                        backgroundColor: "#eff6ff",
                        padding: "3px 8px",
                        borderRadius: "9999px",
                        border: "1px solid #bfdbfe",
                      }}
                    >
                      <Sparkles size={12} />
                      <span>Verified Brochure</span>
                    </div>
                  </div>

                  {/* Image Container with Zoom Trigger */}
                  <div
                    onClick={() => {
                      setLightboxOpen(true);
                      trackEvent("gallery_showcase_zoom");
                    }}
                    style={{
                      position: "relative",
                      backgroundColor: "#071426",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "460px",
                      cursor: "pointer",
                      overflow: "hidden",
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="Open full flyer"
                  >
                    <Image
                      src={item.imageSrc}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      style={{
                        objectFit: "contain",
                        display: "block",
                      }}
                      priority
                    />

                    {/* Hover Zoom Overlay Pill */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "16px",
                        right: "16px",
                        backgroundColor: "rgba(7, 20, 38, 0.85)",
                        color: "#ffffff",
                        padding: "6px 12px",
                        borderRadius: "9999px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                      }}
                    >
                      <ZoomIn size={14} />
                      <span>{t("gallery_view_full")}</span>
                    </div>
                  </div>

                  {/* Image Description & Highlights */}
                  <div
                    style={{
                      padding: "24px 20px",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      flex: 1,
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h2
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.15rem",
                          fontWeight: 800,
                          color: "var(--color-primary)",
                          marginBottom: "8px",
                          lineHeight: 1.35,
                        }}
                      >
                        {title}
                      </h2>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          lineHeight: 1.6,
                          color: "var(--text-secondary)",
                          marginBottom: "14px",
                        }}
                      >
                        {desc}
                      </p>

                      {/* Proof Highlights */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        {highlights.map((hl, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.82rem", color: "var(--text-primary)" }}>
                            <CheckCircle2 size={15} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
                            <span style={{ lineHeight: 1.4 }}>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Dual Action Buttons */}
                    <div style={{ paddingTop: "12px", borderTop: "1px solid var(--border-light)", display: "flex", gap: "10px" }}>
                      <button
                        onClick={() => setLightboxOpen(true)}
                        className="btn btn-outline"
                        style={{
                          flex: 1,
                          padding: "10px",
                          borderRadius: "12px",
                          fontWeight: 700,
                          fontSize: "0.82rem",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                        }}
                      >
                        <ZoomIn size={15} />
                        <span>{language === "ml" ? "വലുതാക്കുക" : "Zoom"}</span>
                      </button>

                      <a
                        href={createWhatsAppUrl(whatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsAppConversion("gallery_showcase_cta")}
                        className="btn btn-whatsapp"
                        style={{
                          flex: 2,
                          padding: "10px",
                          borderRadius: "12px",
                          fontWeight: 700,
                          fontSize: "0.82rem",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                        }}
                      >
                        <WhatsAppIcon size={16} />
                        <span>{language === "ml" ? "റേറ്റ് അറിയാം" : "Get Rates"}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. Transparency & Upcoming Videos Notice */}
          <div
            style={{
              marginTop: "40px",
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
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a
                href="tel:9496840540"
                className="btn btn-outline btn-sm"
                style={{
                  borderRadius: "10px",
                  padding: "8px 14px",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <PhoneCall size={14} />
                <span>9496840540</span>
              </a>

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
        </div>
      </section>

      {/* 4. Interactive Lightbox Modal for Flyer */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(7, 20, 38, 0.92)",
            backdropFilter: "blur(8px)",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close Preview"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
          >
            <X size={24} />
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "min(92vw, 680px)",
              maxHeight: "82vh",
              width: "100%",
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7)",
              backgroundColor: "#071426",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "min(70vh, 600px)",
              }}
            >
              <Image
                src="/images/cleanora-official-services-showcase.jpeg"
                alt="Official Cleanora Service Flyer"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>

            {/* Modal Bottom Action Bar */}
            <div
              style={{
                padding: "14px 20px",
                backgroundColor: "#0c1e36",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <div style={{ color: "#ffffff", fontSize: "0.85rem" }}>
                <span style={{ fontWeight: 800, color: "#34d399" }}>Cleanora Mattanur:</span> 9496840540 / 8075479552
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <a
                  href="tel:9496840540"
                  className="btn btn-outline btn-sm"
                  style={{
                    color: "#ffffff",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    padding: "6px 12px",
                    fontSize: "0.8rem",
                  }}
                >
                  <PhoneCall size={14} />
                  <span>Call</span>
                </a>

                <a
                  href={createWhatsAppUrl("Hello Cleanora, I am viewing your official service flyer and would like to book a service.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                  style={{
                    borderRadius: "8px",
                    padding: "6px 14px",
                    fontSize: "0.8rem",
                  }}
                >
                  <WhatsAppIcon size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Final CTA Section */}
      <FinalCTA />
    </>
  );
};
