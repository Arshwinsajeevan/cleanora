"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles, ArrowLeftRight, CheckCircle2 } from "lucide-react";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  serviceName: string;
  location?: string;
  description?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({
  beforeImage,
  afterImage,
  title,
  serviceName,
  location,
  description,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #e2e8f0",
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
      }}
    >
      {/* Visual Comparison Area */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
        style={{
          position: "relative",
          width: "100%",
          height: "420px",
          overflow: "hidden",
          cursor: "ew-resize",
          userSelect: "none",
          backgroundColor: "#0f172a",
        }}
      >
        {/* AFTER Image (Full background) */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src={afterImage}
            alt={`${title} - After Cleaning`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            style={{ objectFit: "cover" }}
            priority={false}
          />
          <div
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              backgroundColor: "rgba(16, 185, 129, 0.9)",
              backdropFilter: "blur(6px)",
              color: "#ffffff",
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              padding: "6px 12px",
              borderRadius: "6px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Sparkles size={12} />
            <span>AFTER CLEANORA</span>
          </div>
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: `${sliderPosition}%`,
            overflow: "hidden",
            borderRight: "2px solid #ffffff",
            boxShadow: "4px 0 15px rgba(0,0,0,0.3)",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%", minWidth: "100%" }}>
            {/* Inner image has container's full dimensions to prevent distortion */}
            <div style={{ position: "absolute", inset: 0, width: containerRef.current?.offsetWidth || "100%", height: "100%" }}>
              <Image
                src={beforeImage}
                alt={`${title} - Before Cleaning`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                style={{ objectFit: "cover" }}
                priority={false}
              />
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              backdropFilter: "blur(6px)",
              color: "#e2e8f0",
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              padding: "6px 12px",
              borderRadius: "6px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            BEFORE
          </div>
        </div>

        {/* Slider Divider Handle */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${sliderPosition}%`,
            transform: "translateX(-50%)",
            width: "4px",
            backgroundColor: "#ffffff",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#0f3b74",
              border: "3px solid #ffffff",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.35)",
            }}
          >
            <ArrowLeftRight size={18} />
          </div>
        </div>

        {/* Hint banner at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            backdropFilter: "blur(4px)",
            color: "#ffffff",
            fontSize: "0.75rem",
            fontWeight: 600,
            padding: "4px 12px",
            borderRadius: "9999px",
            pointerEvents: "none",
          }}
        >
          Drag slider to compare
        </div>
      </div>

      {/* Meta details */}
      <div style={{ padding: "20px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--color-primary)",
                  backgroundColor: "var(--color-primary-subtle)",
                  padding: "3px 8px",
                  borderRadius: "4px",
                }}
              >
                {serviceName}
              </span>
              {location && (
                <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 500 }}>
                  • {location}
                </span>
              )}
            </div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.1875rem",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              {title}
            </h4>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "var(--color-accent)",
              fontSize: "0.8125rem",
              fontWeight: 600,
            }}
          >
            <CheckCircle2 size={15} />
            <span>Spotless Result</span>
          </div>
        </div>

        {description && (
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--text-secondary)",
              marginTop: "8px",
              lineHeight: 1.5,
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
