"use client";

import React, { useState } from "react";
import { MessageCircle, CheckCircle2, Sparkles, Send } from "lucide-react";
import { createWhatsAppUrl } from "@/data/site";
import { servicesData } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export const WhatsAppBookingForm: React.FC = () => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: servicesData[0]?.nameEn || "House Deep Cleaning",
    preferredDate: "",
    location: "Mattanur, Kannur",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = language === "ml"
      ? `നമസ്കാരം ക്ലീനോറ (മട്ടന്നൂർ, കണ്ണൂർ),
എനിക്ക് ക്ലീനിംഗ് സർവീസിനെക്കുറിച്ചുള്ള വിവരങ്ങൾ അറിയണം.

• പേര്: ${formData.name || "നൽകിയിട്ടില്ല"}
• ഫോൺ: ${formData.phone || "നൽകിയിട്ടില്ല"}
• ആവശ്യമുള്ള സർവീസ്: ${formData.service}
• തീയതി: ${formData.preferredDate || "കഴിയുന്നത്ര വേഗം"}
• സ്ഥലം: ${formData.location || "കണ്ണൂർ"}
• കൂടുതൽ വിവരങ്ങൾ: ${formData.message || "ഇല്ല"}`
      : `Hi Cleanora (Mattanur, Kannur),
I would like to enquire about your professional cleaning service.

• Name: ${formData.name || "Not specified"}
• Phone: ${formData.phone || "Not specified"}
• Service Required: ${formData.service}
• Preferred Date: ${formData.preferredDate || "As soon as possible"}
• Location in Kannur: ${formData.location || "Kannur"}
• Additional Notes: ${formData.message || "None"}`;

    trackEvent("booking_form_submit", {
      service: formData.service,
      location: formData.location,
    });

    setSubmitted(true);
    window.open(createWhatsAppUrl(formattedMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        padding: "clamp(20px, 4vw, 36px)",
        border: "1px solid #e2e8f0",
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
        width: "100%",
        boxSizing: "border-box",
      }}
      className="form-container"
    >
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "var(--color-accent)",
            fontSize: "0.8125rem",
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          <Sparkles size={14} />
          <span>{language === "ml" ? "തത്സമയ ബുക്കിംഗ്" : "Quick Booking Engine"}</span>
        </div>
        <h3
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
            fontWeight: 800,
            color: "var(--text-primary)",
            marginBottom: "8px",
          }}
        >
          {language === "ml" ? "സർവീസ് അന്വേഷണം അയക്കൂ" : "Send Service Enquiry"}
        </h3>
        <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
          {language === "ml"
            ? "വിവരങ്ങൾ പൂരിപ്പിച്ചാൽ നേരിട്ട് ഞങ്ങളുടെ വാട്സാപ്പിലേക്ക് ബുക്കിംഗ് സന്ദേശം അയക്കാം."
            : "Fill in your details below to instantly generate and send your booking request directly to our WhatsApp team."}
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* Row 1: Name & Phone */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="form-row">
          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "6px",
              }}
            >
              {language === "ml" ? "പേര് *" : "Your Name *"}
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={language === "ml" ? "ഉദാ: രാഹുൽ" : "e.g., Rahul K."}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "10px",
                border: "1px solid #cbd5e1",
                fontSize: "0.9375rem",
                outline: "none",
                fontFamily: "inherit",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "6px",
              }}
            >
              {language === "ml" ? "ഫോൺ നമ്പർ *" : "Phone Number *"}
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 94968 XXXXX"
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "10px",
                border: "1px solid #cbd5e1",
                fontSize: "0.9375rem",
                outline: "none",
                fontFamily: "inherit",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>

        {/* Row 2: Service Selection & Preferred Date */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="form-row">
          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "6px",
              }}
            >
              {language === "ml" ? "ആവശ്യമായ സർവീസ് *" : "Service Needed *"}
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "10px",
                border: "1px solid #cbd5e1",
                fontSize: "0.9375rem",
                outline: "none",
                backgroundColor: "#ffffff",
                fontFamily: "inherit",
                boxSizing: "border-box",
              }}
            >
              {servicesData.map((s) => (
                <option key={s.id} value={s.nameEn}>
                  {language === "ml" ? s.nameMl : s.nameEn}
                </option>
              ))}
              <option value="Custom Cleaning Requirement">
                {language === "ml" ? "മറ്റു ക്ലീനിംഗ് ആവശ്യങ്ങൾ" : "Custom Requirement / Other"}
              </option>
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "6px",
              }}
            >
              {language === "ml" ? "തീയതി" : "Preferred Date"}
            </label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "10px",
                border: "1px solid #cbd5e1",
                fontSize: "0.9375rem",
                outline: "none",
                backgroundColor: "#ffffff",
                fontFamily: "inherit",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>

        {/* Row 3: Location in Kannur */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.8125rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "6px",
            }}
          >
            {language === "ml" ? "കണ്ണൂരിലെ സ്ഥലം / ലൊക്കേഷൻ *" : "Location / Area in Kannur *"}
          </label>
          <input
            type="text"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            placeholder={language === "ml" ? "ഉദാ: മട്ടന്നൂർ, ഇരിട്ടി, കണ്ണൂർ ടൗൺ, തലശ്ശേരി..." : "e.g., Mattanur, Iritty, Kannur Town, Thalassery..."}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
              fontSize: "0.9375rem",
              outline: "none",
              fontFamily: "inherit",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Row 4: Message / Specific Needs */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.8125rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "6px",
            }}
          >
            {language === "ml" ? "കൂടുതൽ വിവരങ്ങൾ (ഓപ്ഷണൽ)" : "Describe your space / specific requirements"}
          </label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder={
              language === "ml"
                ? "ഉദാ: 3 BHK വില്ല ക്ലീനിംഗ്, വാട്ടർ ടാങ്ക് ചെളി മാറ്റൽ, 5-സീറ്റർ സോഫ ഷാംപൂ വാഷ്..."
                : "e.g., 3-BHK villa deep clean before housewarming, water tank sludge removal, 5-seater fabric sofa shampoo..."
            }
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
              fontSize: "0.9375rem",
              outline: "none",
              fontFamily: "inherit",
              resize: "vertical",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-whatsapp btn-lg"
          style={{
            width: "100%",
            marginTop: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "14px 20px",
            borderRadius: "12px",
            fontSize: "0.9375rem",
            fontWeight: 700,
          }}
        >
          <MessageCircle size={20} />
          <span>{language === "ml" ? "വാട്സാപ്പിൽ അയക്കാം" : "Send Booking Request on WhatsApp"}</span>
        </button>

        {submitted && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 14px",
              backgroundColor: "#ecfdf5",
              color: "#059669",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
          >
            <CheckCircle2 size={16} />
            <span>
              {language === "ml"
                ? "വാട്സാപ്പിലേക്ക് വിവരങ്ങൾ അയക്കുന്നു..."
                : "Opening WhatsApp with your filled enquiry..."}
            </span>
          </div>
        )}

        <div style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
          🔒 {language === "ml" ? "നിങ്ങളുടെ വിവരങ്ങൾ സുരക്ഷിതമായിരിക്കും." : "Your details are used strictly to coordinate your cleaning quotation."}
        </div>
      </form>
    </div>
  );
};
