export interface TranslationDictionary {
  [key: string]: string;
}

export type TranslationKey =
  | "nav_home"
  | "nav_services"
  | "nav_transformations"
  | "nav_equipments"
  | "nav_about"
  | "nav_work"
  | "nav_contact"
  | "top_bar_location"
  | "top_bar_guarantee"
  | "quick_whatsapp"
  | "call_us"
  | "book_via_whatsapp"
  | "menu"
  | "hero_badge_location"
  | "hero_badge_slogan"
  | "hero_title_line1"
  | "hero_title_line2"
  | "hero_subtitle"
  | "hero_cta_whatsapp"
  | "hero_cta_services"
  | "hero_guarantee_text"
  | "hero_guarantee_sub"
  | "services_badge"
  | "services_title"
  | "services_subtitle"
  | "tab_all"
  | "tab_packers"
  | "tab_residential"
  | "tab_deep"
  | "tab_commercial"
  | "custom_requirement_title"
  | "custom_requirement_sub"
  | "discuss_custom_scope"
  | "transformations_badge"
  | "transformations_title"
  | "transformations_subtitle"
  | "before"
  | "after"
  | "drag_slider_instruction"
  | "equipments_badge"
  | "equipments_title"
  | "equipments_subtitle"
  | "equipment_1_title"
  | "equipment_1_desc"
  | "equipment_2_title"
  | "equipment_2_desc"
  | "equipment_3_title"
  | "equipment_3_desc"
  | "equipment_4_title"
  | "equipment_4_desc"
  | "why_cleanora_badge"
  | "why_cleanora_title"
  | "why_cleanora_subtitle"
  | "why_1_title"
  | "why_1_desc"
  | "why_2_title"
  | "why_2_desc"
  | "why_3_title"
  | "why_3_desc"
  | "why_4_title"
  | "why_4_desc"
  | "how_it_works_badge"
  | "how_it_works_title"
  | "how_it_works_subtitle"
  | "step_1_num"
  | "step_1_title"
  | "step_1_desc"
  | "step_2_num"
  | "step_2_title"
  | "step_2_desc"
  | "step_3_num"
  | "step_3_title"
  | "step_3_desc"
  | "about_badge"
  | "about_title"
  | "about_p1"
  | "about_p2"
  | "about_btn"
  | "coverage_badge"
  | "coverage_title"
  | "coverage_subtitle"
  | "faq_badge"
  | "faq_title"
  | "faq_subtitle"
  | "final_cta_badge"
  | "final_cta_title"
  | "final_cta_subtitle"
  | "final_cta_whatsapp"
  | "final_cta_call"
  | "footer_bio"
  | "footer_nav_title"
  | "footer_services_title"
  | "footer_contact_title"
  | "footer_rights"
  | "mobile_call_now"
  | "mobile_whatsapp_us"
  | "chat_header_title"
  | "chat_header_sub"
  | "chat_intro"
  | "chat_guarantee"
  | "view_all_services"
  | "enquire_whatsapp"
  | "get_quote";

export const translations: Record<"en" | "ml", TranslationDictionary> = {
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_transformations: "Results",
    nav_equipments: "Machinery",
    nav_about: "About Us",
    nav_work: "Work",
    nav_contact: "Contact",

    top_bar_location: "Mattanur • Kannur, Kerala",
    top_bar_guarantee: "100% Satisfaction Guaranteed",
    quick_whatsapp: "WhatsApp Booking",
    call_us: "Call +91 94968 40540",
    book_via_whatsapp: "Book via WhatsApp",
    menu: "Menu",

    hero_badge_location: "MATTANUR • KANNUR, KERALA",
    hero_badge_slogan: "Clean Spaces. Healthy Lives.",
    hero_title_line1: "Spotless Clean Spaces.",
    hero_title_line2: "Safe Packers & Movers.",
    hero_subtitle:
      "Premier deep cleaning and hassle-free household shifting services for homes, offices, water tanks, sofas, interlocks, and solar panels in Mattanur and across Kannur, Kerala.",
    hero_cta_whatsapp: "Book Instant via WhatsApp",
    hero_cta_services: "Explore All Services",
    hero_guarantee_text: "100% Satisfaction Guaranteed",
    hero_guarantee_sub: "Pay only when you are fully satisfied with our work",

    services_badge: "Our Specialized Services",
    services_title: "Professional Services Tailored for Kannur",
    services_subtitle:
      "From residential deep cleaning and safe packers & movers shifting to solar panel care and water tank sanitization across Kannur district.",
    tab_all: "All Services",
    tab_packers: "Packers & Movers",
    tab_residential: "Residential",
    tab_deep: "Deep Sanitization",
    tab_commercial: "Commercial & Solar",

    custom_requirement_title: "Have a Custom Shifting or Cleaning Requirement?",
    custom_requirement_sub:
      "We provide tailored packages for large villas, commercial properties, and customized relocation scopes.",
    discuss_custom_scope: "Discuss Your Custom Scope",

    transformations_badge: "Real Results",
    transformations_title: "Before & After Transformations",
    transformations_subtitle:
      "Drag the slider horizontally to see the visible difference our professional deep cleaning delivers.",
    before: "BEFORE",
    after: "AFTER CLEANORA",
    drag_slider_instruction: "Drag slider left/right to compare before and after results",

    equipments_badge: "Modern Technology",
    equipments_title: "Equipped with Professional Machinery",
    equipments_subtitle:
      "We utilize industrial-grade cleaning technology and safe eco-friendly solutions to deliver spotless, hygienic spaces.",
    equipment_1_title: "Single-Disc Rotary Floor Scrubbers",
    equipment_1_desc: "Heavy-duty mechanical scrubbing that removes ground-in dirt, yellow stains, and restores floor shine.",
    equipment_2_title: "Industrial Vacuum & Foam Extractors",
    equipment_2_desc: "High-suction wet & dry extraction extracting embedded allergens, dust mites, and stains from sofas.",
    equipment_3_title: "High-Pressure Jet Rotary Washers",
    equipment_3_desc: "Powerful 140+ bar pressure washing clearing slippery moss, algae, and grime from interlock pavers.",
    equipment_4_title: "Telescopic Water-Fed Solar Brushes",
    equipment_4_desc: "Non-abrasive soft-bristle poles designed for safe rooftop solar panel cleaning without scratching glass.",

    why_cleanora_badge: "Why Choose Us",
    why_cleanora_title: "Why Families & Businesses Trust Cleanora",
    why_cleanora_subtitle:
      "Reliable local professionals delivering pristine cleanliness, careful shifting, and complete peace of mind.",
    why_1_title: "100% Satisfaction Guarantee",
    why_1_desc: "We inspect every detail with you upon completion. If anything is missed, we re-clean it immediately.",
    why_2_title: "Professional Machinery & Safe Chemicals",
    why_2_desc: "Equipped with industrial scrubbers, steam, high-pressure washers, and non-hazardous eco-friendly agents.",
    why_3_title: "Prompt Local Service in Mattanur & Kannur",
    why_3_desc: "A trustworthy local team that arrives punctually anywhere across Kannur district.",
    why_4_title: "Transparent, Upfront Pricing",
    why_4_desc: "Clear upfront quotes with no hidden charges or post-work surprises.",

    how_it_works_badge: "Simple 3-Step Process",
    how_it_works_title: "How to Book Cleanora Service",
    how_it_works_subtitle: "Book your service in under a minute via WhatsApp or phone call.",
    step_1_num: "01",
    step_1_title: "Share Your Requirements",
    step_1_desc: "Send us a quick WhatsApp message describing your house, shifting, tank, sofa, solar, or interlock needs.",
    step_2_num: "02",
    step_2_title: "Get Free Quote & Slot Confirmation",
    step_2_desc: "Receive an upfront, transparent estimate and confirm your preferred date and time.",
    step_3_num: "03",
    step_3_title: "Enjoy Pristine Results",
    step_3_desc: "Our equipped crew arrives punctually to deliver immaculate results. Pay only after your satisfaction.",

    about_badge: "About Cleanora",
    about_title: "Creating Spotless, Healthy Spaces in Kannur",
    about_p1:
      "Based in Mattanur, Cleanora is dedicated to providing superior deep cleaning, sanitization, and reliable Packers & Movers services for homes and commercial establishments across Kannur, Kerala.",
    about_p2:
      "Using industrial-grade machinery, certified safe cleaning agents, and trained staff, we elevate the standard of cleanliness and provide trustworthy shifting care for your home.",
    about_btn: "Read More About Us",

    coverage_badge: "Service Coverage",
    coverage_title: "Serving Mattanur & All Across Kannur District",
    coverage_subtitle: "Prompt, trustworthy scheduling across Kannur, Thalassery, Iritty, and surrounding areas.",

    faq_badge: "Common Questions",
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Answers to common queries about our deep cleaning and relocation services in Kannur.",

    final_cta_badge: "Priority Booking Open",
    final_cta_title: "Ready for a Spotless Space or Hassle-Free Shifting?",
    final_cta_subtitle: "Contact our Mattanur team today via WhatsApp or phone for instant scheduling and transparent quotes.",
    final_cta_whatsapp: "Book Instant via WhatsApp",
    final_cta_call: "Call Us +91 94968 40540",

    footer_bio:
      "Professional deep cleaning, sanitization, and Packers & Movers relocation services based in Mattanur, Kannur, Kerala.",
    footer_nav_title: "Quick Navigation",
    footer_services_title: "Services Catalog",
    footer_contact_title: "Contact Cleanora",
    footer_rights: "Cleanora Deep Cleaning & Relocations. All rights reserved. Mattanur, Kannur, Kerala.",

    mobile_call_now: "Call Now",
    mobile_whatsapp_us: "WhatsApp Us",

    chat_header_title: "Chat with Cleanora",
    chat_header_sub: "Mattanur, Kannur • Fast Response",
    chat_intro: "Hello! How can we assist with your cleaning or shifting needs today?",
    chat_guarantee: "Direct communication with Cleanora team",

    view_all_services: "View All Services",
    enquire_whatsapp: "Enquire on WhatsApp",
    get_quote: "Get Custom Quote",
  },
  ml: {
    nav_home: "ഹോം",
    nav_services: "സർവീസുകൾ",
    nav_transformations: "റിസൾട്ടുകൾ",
    nav_equipments: "മെഷീനുകൾ",
    nav_about: "ഞങ്ങളെക്കുറിച്ച്",
    nav_work: "വർക്കുകൾ",
    nav_contact: "ബന്ധപ്പെടുക",

    top_bar_location: "മട്ടന്നൂർ • കണ്ണൂർ, കേരളം",
    top_bar_guarantee: "100% സംതൃപ്തി ഉറപ്പ്",
    quick_whatsapp: "വാട്സാപ്പ് ബുക്കിംഗ്",
    call_us: "വിളിക്കാം +91 94968 40540",
    book_via_whatsapp: "വാട്സാപ്പിൽ ബുക്ക് ചെയ്യാം",
    menu: "മെനു",

    hero_badge_location: "മട്ടന്നൂർ • കണ്ണൂർ, കേരളം",
    hero_badge_slogan: "ക്ലീൻ സ്പേസസ് • ഹെൽത്തി ലൈവ്സ്",
    hero_title_line1: "വൃത്തിയുള്ള സുരക്ഷിത ഇടങ്ങൾ.",
    hero_title_line2: "വിശ്വസ്ത പാക്കേഴ്‌സ് & മൂവേഴ്‌സ്.",
    hero_subtitle:
      "മട്ടന്നൂരിലും കണ്ണൂർ ജില്ലയിലെവിടെയും വീട്, ഓഫീസ്, വാട്ടർ ടാങ്ക്, സോഫ, ഇന്റർലോക്ക്, സോളാർ പാനൽ ഡീപ് ക്ലീനിംഗും പാക്കേഴ്‌സ് & മൂവേഴ്‌സ് ഷിഫ്റ്റിംഗ് സർവീസും.",
    hero_cta_whatsapp: "വാട്സാപ്പിൽ വേഗത്തിൽ ബുക്ക് ചെയ്യാം",
    hero_cta_services: "എല്ലാ സർവീസുകളും കാണാം",
    hero_guarantee_text: "100% സംതൃപ്തി ഉറപ്പ്",
    hero_guarantee_sub: "ഞങ്ങളുടെ ജോലിയിൽ പൂർണ്ണ സംതൃപ്തി തോന്നിയ ശേഷം മാത്രം പണം നൽകിയാൽ മതിയാകും",

    services_badge: "ഞങ്ങളുടെ സർവീസുകൾ",
    services_title: "കണ്ണൂരിൽ ലഭ്യമാകുന്ന പ്രൊഫഷണൽ സർവീസുകൾ",
    services_subtitle:
      "വീട്, വാട്ടർ ടാങ്ക്, സോഫ, ഇന്റർലോക്ക്, സോളാർ പാനൽ ക്ലീനിംഗ് മുതൽ പാക്കേഴ്‌സ് & മൂവേഴ്‌സ് വരെയുള്ള സമഗ്രമായ സർവീസുകൾ.",
    tab_all: "എല്ലാ സർവീസുകളും",
    tab_packers: "പാക്കേഴ്‌സ് & മൂവേഴ്‌സ്",
    tab_residential: "റസിഡൻഷ്യൽ",
    tab_deep: "ഡീപ് സാനിറ്റൈസേഷൻ",
    tab_commercial: "ഓഫീസ് & സോളാർ",

    custom_requirement_title: "പ്രത്യേക ഷിഫ്റ്റിംഗ് / ക്ലീനിംഗ് ആവശ്യങ്ങളുണ്ടോ?",
    custom_requirement_sub:
      "വലിയ വില്ലകൾ, സ്ഥാപനങ്ങൾ, പ്രത്യേക ഷിഫ്റ്റിംഗ് ആവശ്യങ്ങൾ എന്നിവയ്ക്കായി കസ്റ്റം പാക്കേജുകൾ ലഭ്യമാണ്.",
    discuss_custom_scope: "വിവരങ്ങൾ സംസാരിക്കാം",

    transformations_badge: "നേരിട്ടുള്ള റിസൾട്ട്",
    transformations_title: "ക്ലീനിംഗിന് മുൻപും ശേഷവുമുള്ള മാറ്റങ്ങൾ",
    transformations_subtitle:
      "സ്ലൈഡർ നീക്കി ക്ലീനോറ ക്ലീനിംഗിലൂടെ ഉണ്ടാകുന്ന പ്രകടമായ വ്യത്യാസം കാണുക.",
    before: "മുമ്പ്",
    after: "ക്ലീനോറക്ക് ശേഷം",
    drag_slider_instruction: "വ്യത്യാസം കാണാൻ സ്ലൈഡർ ഇടത്തോട്ടും വലത്തോട്ടും നീക്കുക",

    equipments_badge: "ആധുനിക മെഷീനുകൾ",
    equipments_title: "പ്രൊഫഷണൽ മെഷീനുകൾ ഉപയോഗിച്ചുള്ള ക്ലീനിംഗ്",
    equipments_subtitle:
      "ഏറ്റവും മികച്ച യന്ത്രങ്ങളും പ്രകൃതിസൗഹൃദ ലോഷനുകളും ഉപയോഗിച്ച് കൃത്യതയുള്ള ക്ലീനിംഗ് ഉറപ്പാക്കുന്നു.",
    equipment_1_title: "സിംഗിൾ-ഡിസ്ക് റോട്ടറി ഫ്ലോർ സ്ക്രബ്ബർ",
    equipment_1_desc: "ടൈലുകളിലും മാർബിളിലുമുള്ള കറകൾ മാറ്റി പുത്തൻ തിളക്കം നൽകുന്ന ഹെവി ഡ്യൂട്ടി മെഷീൻ.",
    equipment_2_title: "ഇൻഡസ്ട്രിയൽ വാക്വം & ഫോം എക്‌സ്ട്രാക്റ്റർ",
    equipment_2_desc: "സോഫ, കാർപെറ്റ്, മെത്ത എന്നിവയിലെ പൊടിയും അലർജികളും വലിച്ചെടുക്കുന്ന ഹൈ-സക്ഷൻ മെഷീൻ.",
    equipment_3_title: "ഹൈ-പ്രഷർ ജെറ്റ് റോട്ടറി വാഷർ",
    equipment_3_desc: "ഇന്റർലോക്കിലെ വഴുവഴുപ്പുള്ള പായലും ചെളിയും വേഗത്തിൽ കഴുകി കളയുന്ന 140+ ബാർ പ്രഷർ വാഷർ.",
    equipment_4_title: "ടെലിസ്കോപ്പിക് വാട്ടർ-ഫെഡ് സോളാർ ബ്രഷ്",
    equipment_4_desc: "സോളാർ പാനലുകൾക്ക് പോറലുകൾ വീഴാതെ വൃത്തിയാക്കുന്ന പ്രത്യേക സോഫ്റ്റ് ബ്രഷ് സംവിധാനം.",

    why_cleanora_badge: "പ്രത്യേകതകൾ",
    why_cleanora_title: "എന്തുകൊണ്ട് ക്ലീനോറ തിരഞ്ഞെടുക്കണം?",
    why_cleanora_subtitle: "വിശ്വസ്തതയും ഉത്തരവാദിത്തവുമുള്ള ജീവനക്കാരും മികച്ച റിസൾട്ടും നൽകുന്ന നിങ്ങളുടെ ലോക്കൽ ടീം.",
    why_1_title: "100% സംതൃപ്തി ഉറപ്പ്",
    why_1_desc: "വർക്ക് പൂർത്തിയായ ശേഷം നിങ്ങളുടെ നേരിട്ടുള്ള പരിശോധന. എന്തെങ്കിലും കുറവുണ്ടെങ്കിൽ ഉടൻ ശരിയാക്കി നൽകുന്നു.",
    why_2_title: "പ്രൊഫഷണൽ മെഷീനുകൾ & സുരക്ഷിത ലോഷനുകൾ",
    why_2_desc: "ഉയർന്ന നിലവാരമുള്ള യന്ത്രങ്ങളും വിഷാംശമില്ലാത്ത ക്ലീനിംഗ് ലോഷനുകളും മാത്രം ഉപയോഗിക്കുന്നു.",
    why_3_title: "മട്ടന്നൂരിലും കണ്ണൂരിലും വേഗത്തിലുള്ള സർവീസ്",
    why_3_desc: "കണ്ണൂർ ജില്ലയിൽ എവിടെയും കൃത്യസമയത്ത് എത്തിച്ചേരുന്ന ഉത്തരവാദിത്തമുള്ള ലോക്കൽ ടീം.",
    why_4_title: "വ്യക്തവും സത്യസന്ധവുമായ ചാർജുകൾ",
    why_4_desc: "മറഞ്ഞിരിക്കുന്ന ചാർജുകളില്ലാതെ മുൻകൂട്ടി കൃത്യമായ എസ്റ്റിമേറ്റ് നൽകുന്നു.",

    how_it_works_badge: "ലളിതമായ 3 പടികൾ",
    how_it_works_title: "ക്ലീനോറ സർവീസ് എങ്ങനെ ബുക്ക് ചെയ്യാം?",
    how_it_works_subtitle: "വാട്സാപ്പ് വഴിയോ ഫോൺ കോളിലൂടെയോ എളുപ്പത്തിൽ ബുക്കിംഗ് നടത്താം.",
    step_1_num: "01",
    step_1_title: "ആവശ്യങ്ങൾ അറിയിക്കുക",
    step_1_desc: "നിങ്ങളുടെ വീട്, ഷിഫ്റ്റിംഗ്, ഓഫീസ്, ടാങ്ക്, സോഫ, സോളാർ അല്ലെങ്കിൽ ഇന്റർലോക്ക് എന്നിവയെക്കുറിച്ചുള്ള വിവരങ്ങൾ വാട്സാപ്പിൽ അയക്കുക.",
    step_2_num: "02",
    step_2_title: "എസ്റ്റിമേറ്റും സമയവും ഉറപ്പാക്കുക",
    step_2_desc: "നിങ്ങൾക്ക് അനുയോജ്യമായ തീയതിയും സമയവും കൃത്യമായ തുകയും ഉറപ്പാക്കുന്നു.",
    step_3_num: "03",
    step_3_title: "നിങ്ങളുടെ സ്ഥലം തിളങ്ങുന്നു",
    step_3_desc: "ഞങ്ങളുടെ വിദഗ്ദ്ധ സംഘം ആധുനിക മെഷീനുകളുമായി എത്തി മികച്ച രീതിയിൽ പൂർത്തിയാക്കി നൽകുന്നു.",

    about_badge: "ക്ലീനോറയെക്കുറിച്ച്",
    about_title: "കണ്ണൂരിൽ വൃത്തിയുള്ളതും ആരോഗ്യകരവുമായ ഇടങ്ങൾ സൃഷ്ടിക്കുന്നു",
    about_p1:
      "മട്ടന്നൂർ കേന്ദ്രമായി പ്രവർത്തിക്കുന്ന ക്ലീനോറ, കേരളത്തിലെ വീടുകൾക്കും സ്ഥാപനങ്ങൾക്കും ഏറ്റവും മികച്ച പ്രൊഫഷണൽ ക്ലീനിംഗും വിശ്വസ്തമായ പാക്കേഴ്‌സ് & മൂവേഴ്‌സ് സേവനവും ലഭ്യമാക്കുന്നു.",
    about_p2:
      "അത്യാധുനിക ഉപകരണങ്ങളും പരിശീലനം ലഭിച്ച ജോലിക്കാരും സുരക്ഷിതമായ രീതികളും ഉപയോഗിച്ച് നിങ്ങളുടെ കുടുംബത്തിന്റെ ആരോഗ്യവും സുരക്ഷയും ഞങ്ങൾ സംരക്ഷിക്കുന്നു.",
    about_btn: "കൂടുതൽ വിവരങ്ങൾ വായിക്കുക",

    coverage_badge: "സർവീസ് ലഭിക്കുന്ന സ്ഥലങ്ങൾ",
    coverage_title: "മട്ടന്നൂർ, കണ്ണൂർ ജില്ല മുഴുവൻ സർവീസ് ലഭ്യമാണ്",
    coverage_subtitle: "കണ്ണൂർ ജില്ലയിലെവിടെയും വേഗത്തിലും വിശ്വസ്തതയോടെയും ക്ലീനോറ ടീം എത്തുന്നു.",

    faq_badge: "പതിവ് ചോദ്യങ്ങൾ",
    faq_title: "നിങ്ങളുടെ സംശയങ്ങൾക്കുള്ള ഉത്തരങ്ങൾ",
    faq_subtitle: "ക്ലീനിംഗ് സർവീസുകൾ, ഷിഫ്റ്റിംഗ്, ചാർജുകൾ, സുരക്ഷ എന്നിവയെക്കുറിച്ചുള്ള ചോദ്യങ്ങൾക്കുള്ള മറുപടി.",

    final_cta_badge: "വേഗത്തിലുള്ള ബുക്കിംഗ്",
    final_cta_title: "നിങ്ങളുടെ വീട് പുത്തൻപോലെ വൃത്തിയാക്കണോ ഷിഫ്റ്റ് ചെയ്യണോ?",
    final_cta_subtitle: "തത്സമയ വിവരങ്ങൾക്കും ബുക്കിംഗിനുമായി ഞങ്ങളുടെ മട്ടന്നൂർ ഓഫീസുമായി വാട്സാപ്പിലോ ഫോണിലോ ബന്ധപ്പെടുക.",
    final_cta_whatsapp: "വാട്സാപ്പിൽ ബുക്ക് ചെയ്യാം",
    final_cta_call: "ഇപ്പോൾ വിളിക്കാം +91 94968 40540",

    footer_bio:
      "മട്ടന്നൂർ, കണ്ണൂർ കേന്ദ്രീകരിച്ച് പ്രവർത്തിക്കുന്ന വീട്, ഓഫീസ്, വാട്ടർ ടാങ്ക്, സോഫ, ഇന്റർലോക്ക്, സോളാർ പാനൽ ഡീപ് ക്ലീനിംഗും പാക്കേഴ്‌സ് & മൂവേഴ്‌സ് ഷിഫ്റ്റിംഗ് സർവീസും.",
    footer_nav_title: "പ്രധാന ലിങ്കുകൾ",
    footer_services_title: "സർവീസുകൾ",
    footer_contact_title: "ക്ലീനോറയുമായി ബന്ധപ്പെടുക",
    footer_rights: "ക്ലീനോറ ഡീപ് ക്ലീനിംഗ് & റീലൊക്കേഷൻസ്. സർവ്വ അവകാശങ്ങളും നിക്ഷിപ്തം. മട്ടന്നൂർ, കണ്ണൂർ, കേരളം.",

    mobile_call_now: "വിളിക്കുക",
    mobile_whatsapp_us: "വാട്സാപ്പ് ചെയ്യാം",

    chat_header_title: "ക്ലീനോറയുമായി സംസാരിക്കുക",
    chat_header_sub: "മട്ടന്നൂർ, കണ്ണൂർ • വേഗത്തിലുള്ള മറുപടി",
    chat_intro: "നമസ്കാരം! നിങ്ങളുടെ ക്ലീനിംഗ് അല്ലെങ്കിൽ ഷിഫ്റ്റിംഗ് ആവശ്യങ്ങൾക്കായി ഞങ്ങളെ എങ്ങനെ സഹായിക്കാനാകും?",
    chat_guarantee: "ക്ലീനോറ ടീമുമായി നേരിട്ട് ബന്ധപ്പെടാം",

    view_all_services: "എല്ലാ സർവീസുകളും കാണുക",
    enquire_whatsapp: "വാട്സാപ്പിൽ ചോദിക്കാം",
    get_quote: "എസ്റ്റിമേറ്റ് ലഭിക്കാൻ",
  },
};
