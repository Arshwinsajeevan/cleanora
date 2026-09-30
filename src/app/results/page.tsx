"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { createWhatsAppUrl } from "@/data/site";
import { FinalCTA } from "@/components/cta/FinalCTA";

export default function ResultsPage() {
  const { language, t } = useLanguage();

  const transformations = [
    {
      id: "interlock",
      titleEn: "Interlock Pavers Pressure Jet Washing",
      titleMl: "മുറ്റത്തെ ഇന്റർലോക്ക് പ്രഷർ ജെറ്റ് വാഷിംഗ്",
      categoryEn: "Outdoor Pavers & Courtyards",
      categoryMl: "മുറ്റവും ഡ്രൈവ്‌വേയും",
      descEn: "Complete eradication of slippery green moss, dark algae, and deep mud stains from interlocking pavers using 140+ bar high-pressure rotary surface jet cleaner.",
      descMl: "വർഷങ്ങളായി അടിഞ്ഞുകൂടിയ കറുത്ത പായലും ചെളിയും വഴുക്കലും 140+ ബാർ പ്രഷർ വാഷറിലൂടെ പൂർണ്ണമായി കഴുകി പുതിയതുപോലെയാക്കുന്നു.",
      image: "/images/interlock_beforeafter.png",
      badgeEn: "Jet Wash Restoration",
      badgeMl: "പ്രഷർ ജെറ്റ് റിസൾട്ട്",
      highlightsEn: [
        "100% elimination of slippery monsoon moss for family safety",
        "Restores vibrant original paver color without disturbing sand base",
        "Clears drainage edges, curb joints, and compound borders",
      ],
      highlightsMl: [
        "വഴുക്കലുണ്ടാക്കുന്ന പായലുകൾ പൂർണ്ണമായി നീക്കി സുരക്ഷിതമാക്കുന്നു",
        "ഇന്റർലോക്കിന്റെ പഴയ നിറവും ഭംഗിയും തിരികെ നൽകുന്നു",
        "ഡ്രെയിനേജ് ഭാഗങ്ങളും അരികുകളും വൃത്തിയാക്കുന്നു",
      ],
      whatsappMsgEn: "Hi Cleanora, I saw your Interlock Cleaning results and would like a quote for my house in Kannur.",
      whatsappMsgMl: "നമസ്കാരം ക്ലീനോറ, ഇന്റർലോക്ക് ക്ലീനിംഗ് റിസൾട്ട് കണ്ടു. എന്റെ വീടിന്റെ ഇന്റർലോക്ക് കഴുകുന്നതിനുള്ള വിവരങ്ങൾ അറിയാൻ ആഗ്രഹിക്കുന്നു.",
    },
    {
      id: "kitchen",
      titleEn: "Kitchen Chimney & Cooking Hob Deep Degreasing",
      titleMl: "അടുക്കള ചിമ്മിനി & ഹോബ് ഡീഗ്രീസിംഗ്",
      categoryEn: "Kitchen & Modular Cabinets",
      categoryMl: "അടുക്കള & മോഡുലാർ കാബിനറ്റുകൾ",
      descEn: "Dissolving hardened cooking oil residue, carbon soot, and grease from chimney baffle filters, exhaust fan blades, and stainless steel backsplash.",
      descMl: "ചിമ്മിനി ഫിൽട്ടറുകൾ, എക്‌സ്‌ഹോസ്റ്റ് ഫാൻ, സ്റ്റൗ സ്ലാബ് എന്നിവയിലെ കടുത്ത എണ്ണക്കറകളും കരിയും പ്രത്യേക ഡീഗ്രീസിംഗ് ലോഷനിലൂടെ മാറ്റുന്നു.",
      image: "/images/kitchen_beforeafter.png",
      badgeEn: "Oil & Carbon Clearance",
      badgeMl: "എണ്ണക്കറ നീക്കൽ",
      highlightsEn: [
        "Complete removal of sticky burnt grease from exhaust fans and filters",
        "Non-corrosive, certified food-safe degreasing formulations",
        "Wall tile grout descaling and sink sanitization",
      ],
      highlightsMl: [
        "ചിമ്മിനിയിലെയും ഫാനിലെയും കരിയും എണ്ണക്കറയും നീക്കൽ",
        "ഫുഡ്-ഗ്രേഡ് സുരക്ഷിതമായ ക്ലീനിംഗ് ലോഷനുകൾ",
        "ടൈലുകളും സിങ്കും അണുവിമുക്തമാക്കൽ",
      ],
      whatsappMsgEn: "Hi Cleanora, I would like to book Kitchen Deep Degreasing service in Kannur.",
      whatsappMsgMl: "നമസ്കാരം ക്ലീനോറ, കിച്ചൻ ഡീപ് ക്ലീനിംഗ് സർവീസ് ബുക്ക് ചെയ്യാൻ ആഗ്രഹിക്കുന്നു.",
    },
    {
      id: "bathroom",
      titleEn: "Bathroom Hard-Water Descaling & Tile Care",
      titleMl: "ബാത്ത്റൂം ടൈൽ ഉപ്പുവെള്ളക്കറ നീക്കൽ",
      categoryEn: "Bathroom & Sanitary Ware",
      categoryMl: "ബാത്ത്റൂം & സാനിറ്ററി",
      descEn: "Eliminating stubborn yellow mineral crusts, calcium limescale from glass shower partitions, wall/floor tiles, and chrome tap fittings.",
      descMl: "ഉപ്പുവെള്ളം കൊണ്ട് ടൈലുകളിലും ഗ്ലാസ് പാർട്ടീഷനുകളിലും ടാപ്പുകളിലും ഉണ്ടാകുന്ന കഠിനമായ വെള്ളപ്പാടുകളും മഞ്ഞക്കറകളും നീക്കം ചെയ്യുന്നു.",
      image: "/images/batroom_beforeafter.png",
      badgeEn: "Limescale Descaling",
      badgeMl: "ഉപ്പുവെള്ളക്കറ നീക്കൽ",
      highlightsEn: [
        "Restores sparkling mirror shine to chrome fittings and glass shower doors",
        "Removes hard water crust without acid erosion on ceramic tiles",
        "Intensive commode and wash basin sanitization protocol",
      ],
      highlightsMl: [
        "ടാപ്പുകൾക്കും ഗ്ലാസുകൾക്കും പുത്തൻ തിളക്കം നൽകുന്നു",
        "ടൈലുകൾക്ക് കേടുപാടുകൾ വരുത്താത്ത ഡെസ്കെയിലിംഗ് ട്രീറ്റ്‌മെന്റ്",
        "ക്ലോസറ്റും വാഷ് ബേസിനും അണുവിമുക്തമാക്കൽ",
      ],
      whatsappMsgEn: "Hi Cleanora, I would like to book Bathroom Deep Cleaning & Descaling service.",
      whatsappMsgMl: "നമസ്കാരം ക്ലീനോറ, ബാത്ത്റൂം ഡീപ് ക്ലീനിംഗ് & ഡെസ്കെയിലിംഗ് സർവീസ് അറിയാൻ ആഗ്രഹിക്കുന്നു.",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "60px",
          paddingBottom: "48px",
          borderBottom: "1px solid var(--border-light)",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="section-badge">
            <Sparkles size={14} />
            <span>{language === "ml" ? "യഥാർത്ഥ റിസൾട്ടുകൾ" : "Real Before & After Results"}</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: language === "ml" ? "clamp(1.9rem, 3.5vw, 2.7rem)" : "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "14px",
              lineHeight: 1.25,
            }}
          >
            {language === "ml"
              ? "ക്ലീനിംഗിന് മുൻപും ശേഷവുമുള്ള മാറ്റങ്ങൾ"
              : "Proven Transformations Across Kannur"}
          </h1>

          <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            {language === "ml"
              ? "കണ്ണൂരിലെ വീടുകളിലും സ്ഥാപനങ്ങളിലും ക്ലീനോറ ടീം പൂർത്തിയാക്കിയ യഥാർത്ഥ ക്ലീനിംഗ് റിസൾട്ടുകൾ താഴെ കാണാം."
              : "Witness all the visible deep cleaning standards delivered by Cleanora’s equipped professionals across Mattanur, Kannur, and Thalassery."}
          </p>
        </div>
      </section>

      {/* Main Showcase: ALL Results Displayed Continuously */}
      <section className="section" style={{ backgroundColor: "var(--bg-page)" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {transformations.map((item, index) => {
            const isReversed = index % 2 === 1;
            const title = language === "ml" ? item.titleMl : item.titleEn;
            const category = language === "ml" ? item.categoryMl : item.categoryEn;
            const desc = language === "ml" ? item.descMl : item.descEn;
            const badge = language === "ml" ? item.badgeMl : item.badgeEn;
            const highlights = language === "ml" ? item.highlightsMl : item.highlightsEn;
            const whatsappMsg = language === "ml" ? item.whatsappMsgMl : item.whatsappMsgEn;

            return (
              <div
                key={item.id}
                id={item.id}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-card)",
                  padding: "clamp(20px, 3.5vw, 40px)",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isReversed ? "0.85fr 1.15fr" : "1.15fr 0.85fr",
                    gap: "clamp(24px, 4vw, 44px)",
                    alignItems: "center",
                  }}
                  className="transformation-grid"
                >
                  {/* Visual Column */}
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "18px",
                      overflow: "hidden",
                      aspectRatio: "16/10",
                      backgroundColor: "#071426",
                      border: "1px solid var(--border-light)",
                      order: isReversed ? 2 : 1,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
                    }}
                    className="service-img-col"
                  >
                    <Image
                      src={item.image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, 650px"
                      style={{ objectFit: "contain" }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        backgroundColor: "rgba(7, 30, 61, 0.9)",
                        backdropFilter: "blur(8px)",
                        color: "#34d399",
                        padding: "5px 12px",
                        borderRadius: "8px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        border: "1px solid rgba(52, 211, 153, 0.3)",
                      }}
                    >
                      {badge}
                    </div>
                  </div>

                  {/* Information Column */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "18px",
                      order: isReversed ? 1 : 2,
                    }}
                  >
                    <div>
                      <span
                        style={{
                          color: "var(--color-accent)",
                          fontSize: "0.8125rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {category}
                      </span>
                      <h2
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: language === "ml" ? "1.45rem" : "1.65rem",
                          fontWeight: 800,
                          color: "var(--text-primary)",
                          marginTop: "4px",
                          lineHeight: 1.3,
                        }}
                      >
                        {title}
                      </h2>
                    </div>

                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.65 }}>
                      {desc}
                    </p>

                    {/* Highlights */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase" }}>
                        {language === "ml" ? "പ്രത്യേകതകൾ:" : "Key Results Delivered:"}
                      </div>
                      {highlights.map((point, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                          <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
                          <span style={{ fontSize: "0.875rem", color: "#334155", lineHeight: 1.45 }}>
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Direct Booking Actions */}
                    <div style={{ paddingTop: "8px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                      <a
                        href={createWhatsAppUrl(whatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp btn-sm"
                      >
                        <MessageCircle size={16} />
                        <span>{language === "ml" ? "ഈ സർവീസ് ബുക്ക് ചെയ്യാം" : "Get Quote for this Service"}</span>
                      </a>

                      <Link href="/services" className="btn btn-outline btn-sm">
                        <span>{t("view_all_services")}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Guarantee Pill */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px 28px",
              borderRadius: "16px",
              border: "1px solid var(--border-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "#ecfdf5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#059669",
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  {language === "ml" ? "100% സംതൃപ്തി ഉറപ്പ്" : "100% On-Site Satisfaction Guarantee"}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "2px" }}>
                  {language === "ml"
                    ? "ജോലി പൂർത്തിയായ ശേഷം നിങ്ങളുടെ നേരിട്ടുള്ള പരിശോധന. സംതൃപ്തി തോന്നിയ ശേഷം മാത്രം പേയ്‌മെന്റ്."
                    : "Inspect every corner with our team before concluding. Pay only when fully satisfied."}
                </p>
              </div>
            </div>

            <Link href="/contact" className="btn btn-primary btn-sm">
              <span>{language === "ml" ? "ബുക്കിംഗിനായി ബന്ധപ്പെടുക" : "Book Your Slot Now"}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}