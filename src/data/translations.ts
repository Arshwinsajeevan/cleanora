export type TranslationKey =
  | "nav_home"
  | "nav_services"
  | "nav_results"
  | "nav_machinery"
  | "nav_transformations"
  | "nav_equipments"
  | "nav_about"
  | "nav_work"
  | "nav_contact"
  | "top_bar_location"
  | "top_bar_guarantee"
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
  | "badge_featured"
  | "btn_view_details"
  | "btn_whatsapp_quote"
  | "custom_requirement_title"
  | "custom_requirement_sub"
  | "discuss_custom_scope"
  | "transformations_badge"
  | "transformations_title"
  | "transformations_subtitle"
  | "slider_instruction"
  | "badge_real_case_study"
  | "label_location"
  | "label_challenge"
  | "label_solution"
  | "label_equipment"
  | "label_turnaround"
  | "btn_similar_quote"
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
  | "why_badge"
  | "why_title"
  | "why_subtitle"
  | "why_card1_title"
  | "why_card1_desc"
  | "why_card2_title"
  | "why_card2_desc"
  | "why_card3_title"
  | "why_card3_desc"
  | "why_card4_title"
  | "why_card4_desc"
  | "why_card5_title"
  | "why_card5_desc"
  | "why_card6_title"
  | "why_card6_desc"
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
  | "equipments_badge"
  | "equipments_title"
  | "equipments_subtitle"
  | "equipments_feat_badge"
  | "equipments_feat_title"
  | "equipments_feat_desc"
  | "equipment_1_title"
  | "equipment_1_desc"
  | "equipment_2_title"
  | "equipment_2_desc"
  | "equipment_3_title"
  | "equipment_3_desc"
  | "equipment_4_title"
  | "equipment_4_desc"
  | "about_badge"
  | "about_title"
  | "about_subtitle"
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

export type TranslationDictionary = Record<TranslationKey, string>;

export const translations: Record<"en" | "ml", TranslationDictionary> = {
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_results: "Results",
    nav_machinery: "Machinery",
    nav_transformations: "Results",
    nav_equipments: "Machinery",
    nav_about: "About Us",
    nav_work: "Work",
    nav_contact: "Contact",

    top_bar_location: "Mattanur • Kannur, Kerala",
    top_bar_guarantee: "100% Satisfaction Guarantee • Verified Quality Handover",
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
    hero_guarantee_sub: "Complete on-the-spot quality inspection for verified standards",

    services_badge: "Our Specialized Services",
    services_title: "Professional Cleaning & Shifting Services in Kannur",
    services_subtitle:
      "Expert solutions for homes, villas, corporate offices, and commercial establishments in Mattanur & Kannur.",
    tab_all: "All Services (9)",
    tab_packers: "Packers & Movers",
    tab_residential: "Residential",
    tab_deep: "Deep Cleaning",
    tab_commercial: "Commercial",
    badge_featured: "Popular Choice",
    btn_view_details: "View Details",
    btn_whatsapp_quote: "Get WhatsApp Quote",

    custom_requirement_title: "Have a Custom Requirement or Shifting Need?",
    custom_requirement_sub: "We offer tailored packages for large villas, commercial spaces, and whole-house relocations across Kannur.",
    discuss_custom_scope: "Discuss Your Requirement",

    transformations_badge: "Verified Work Results",
    transformations_title: "Real Before & After Proof Across Kannur",
    transformations_subtitle:
      "Slide through genuine transformations delivered by our specialized team using modern machinery in Mattanur & Kannur.",
    slider_instruction: "Drag the slider left and right to inspect the deep cleaning difference",
    badge_real_case_study: "Verified Transformation",
    label_location: "Location",
    label_challenge: "The Challenge",
    label_solution: "Cleanora Solution",
    label_equipment: "Machinery Used",
    label_turnaround: "Turnaround",
    btn_similar_quote: "Book Similar Transformation",

    why_cleanora_badge: "The Cleanora Advantage",
    why_cleanora_title: "Why Homeowners & Businesses Trust Cleanora",
    why_cleanora_subtitle: "Professional standards, trained personnel, and upfront transparency in every project.",
    why_1_title: "100% Satisfaction Guarantee",
    why_1_desc: "We conduct an on-the-spot quality walkthrough to ensure immaculate results every time.",
    why_2_title: "Modern Cleaning Equipment",
    why_2_desc: "We use high-grade professional equipment ensuring thorough and spotless results.",
    why_3_title: "Mattanur & Kannur Coverage",
    why_3_desc: "Dedicated local teams providing rapid response and prompt scheduling across the district.",
    why_4_title: "Clear & Transparent Pricing",
    why_4_desc: "Direct upfront quotes via WhatsApp with zero hidden surcharges or surprise billing.",

    why_badge: "The Cleanora Advantage",
    why_title: "Why Homeowners & Businesses in Kannur Trust Us",
    why_subtitle:
      "We deliver high-end cleaning and damage-free shifting backed by heavy-duty machinery and trained personnel.",
    why_card1_title: "100% Guaranteed Satisfaction",
    why_card1_desc: "We guarantee immaculate cleanliness and safe handling for every single project.",
    why_card2_title: "Packers & Movers Care",
    why_card2_desc: "Multi-layer bubble wrapping, safe transport vehicle, and professional loading & unloading staff.",
    why_card3_title: "Modern Equipment Fleet",
    why_card3_desc: "We use high-grade modern equipment to ensure deep, thorough, and safe cleaning for every surface.",
    why_card4_title: "Family & Pet-Safe Chemicals",
    why_card4_desc: "We use non-toxic, eco-friendly formulations that eliminate 99.9% germs without leaving harmful residues.",
    why_card5_title: "Fast Response & Prompt Service",
    why_card5_desc: "Based locally in Mattanur, our mobile team arrives promptly across Kannur district.",
    why_card6_title: "Transparent & Upfront Pricing",
    why_card6_desc: "Clear upfront quotes via WhatsApp. No hidden charges or surprise extras.",

    how_it_works_badge: "Easy 3-Step Process",
    how_it_works_title: "How Booking with Cleanora Works",
    how_it_works_subtitle: "Simple, transparent, and fast booking for all cleaning and shifting services.",
    step_1_num: "01",
    step_1_title: "Share Details via WhatsApp",
    step_1_desc: "Send us photos or describe your cleaning or shifting requirement for a quick upfront quote.",
    step_2_num: "02",
    step_2_title: "Scheduled Service Execution",
    step_2_desc: "Our trained team arrives on time equipped with high-grade machinery and quality materials.",
    step_3_num: "03",
    step_3_title: "Handover & Inspection",
    step_3_desc: "Inspect the immaculate results together with our supervisor for a verified, flawless handover.",

    equipments_badge: "Our Equipment",
    equipments_title: "Equipped with Modern Professional Gear",
    equipments_subtitle:
      "We utilize high-grade professional equipment to deliver spotless, reliable, and hygienic cleaning results.",
    equipments_feat_badge: "Professional Equipment",
    equipments_feat_title: "Modern Machinery for Spotless Living",
    equipments_feat_desc:
      "Our team is fully equipped with high-grade modern cleaning equipment for all residential and commercial needs.",

    equipment_1_title: "Floor Cleaning Equipment",
    equipment_1_desc: "Modern equipment for thorough floor buffing, stain removal, and surface care.",
    equipment_2_title: "Pressure Washing Gear",
    equipment_2_desc: "High-grade equipment for outdoor paving, interlocks, and courtyard cleaning.",
    equipment_3_title: "Fabric & Upholstery Cleaners",
    equipment_3_desc: "Deep cleaning tools for sofas, fabric upholstery, and mattresses.",
    equipment_4_title: "Solar & Glass Cleaning Tools",
    equipment_4_desc: "Specialized soft tools for spotless and scratch-free solar panel cleaning.",

    about_badge: "About Cleanora",
    about_title: "Mattanur's Dedicated Cleaning & Relocation Specialists",
    about_subtitle:
      "Founded with the motto 'Clean Spaces... Healthy Lives...', Cleanora provides premier residential and commercial services across Kannur.",
    about_p1:
      "We understand that a clean living space is the cornerstone of family well-being. Cleanora was established in Mattanur to bring professional-grade cleaning and stress-free household relocation to Kannur district.",
    about_p2:
      "Combining quality equipment, trained personnel, and strict safety standards, we ensure your premises are pristine, sanitized, and revitalized.",
    about_btn: "Learn More About Us",

    coverage_badge: "Service Coverage",
    coverage_title: "Serving Mattanur & Across Kannur District",
    coverage_subtitle:
      "Our mobile cleaning and shifting units cover all major towns and rural areas across Kannur, Kerala.",

    faq_badge: "Got Questions?",
    faq_title: "Frequently Asked Questions",
    faq_subtitle:
      "Answers to common questions about our cleaning methods, relocation services, booking, and pricing.",

    final_cta_badge: "Quick Booking Available",
    final_cta_title: "Ready to Experience Spotless Living or a Hassle-Free Move?",
    final_cta_subtitle:
      "Contact our Mattanur team via WhatsApp or direct call for instant pricing, customized packages, and fast scheduling.",
    final_cta_whatsapp: "Book on WhatsApp",
    final_cta_call: "Call Now +91 94968 40540",

    footer_bio:
      "Professional deep cleaning, sanitization, and Packers & Movers relocation services based in Mattanur, Kannur, Kerala.",
    footer_nav_title: "Quick Navigation",
    footer_services_title: "Services Catalog",
    footer_contact_title: "Contact Cleanora",
    footer_rights: "Cleanora Deep Cleaning & Relocations. All rights reserved. Mattanur, Kannur, Kerala.",

    mobile_call_now: "Call Now",
    mobile_whatsapp_us: "WhatsApp",

    chat_header_title: "Chat with Cleanora",
    chat_header_sub: "Mattanur, Kannur • Instant Response",
    chat_intro: "Hello! How can we assist you with cleaning or shifting in Kannur?",
    chat_guarantee: "Direct contact with Cleanora team",

    view_all_services: "Explore All Services",
    enquire_whatsapp: "Enquire via WhatsApp",
    get_quote: "Get Instant Quote",
  },
  ml: {
    nav_home: "ഹോം",
    nav_services: "സർവീസുകൾ",
    nav_results: "റിസൾട്ട്",
    nav_machinery: "മെഷീനുകൾ",
    nav_transformations: "റിസൾട്ട്",
    nav_equipments: "മെഷീനുകൾ",
    nav_about: "ഞങ്ങൾ",
    nav_work: "വർക്കുകൾ",
    nav_contact: "കോൺടാക്റ്റ്",

    top_bar_location: "മട്ടന്നൂർ • കണ്ണൂർ, കേരളം",
    top_bar_guarantee: "100% സംതൃപ്തി ഉറപ്പ് • മികച്ച ക്വാളിറ്റി സർവീസ്",
    book_via_whatsapp: "വാട്സാപ്പിൽ ബുക്ക് ചെയ്യാം",
    menu: "മെനു",

    hero_badge_location: "മട്ടന്നൂർ • കണ്ണൂർ, കേരളം",
    hero_badge_slogan: "ക്ലീൻ സ്പേസസ് • ഹെൽത്തി ലൈവ്സ്",
    hero_title_line1: "വൃത്തിയുള്ള സുരക്ഷിത ഇടങ്ങൾ.",
    hero_title_line2: "വിശ്വസ്ത പാക്കേഴ്സ് & മൂവേഴ്സ്.",
    hero_subtitle:
      "മട്ടന്നൂരിലും കണ്ണൂർ ജില്ലയിലെവിടെയും വീട്, ഓഫീസ്, വാട്ടർ ടാങ്ക്, സോഫ, ഇന്റർലോക്ക്, സോളാർ പാനൽ ഡീപ് ക്ലീനിംഗും പാക്കേഴ്സ് & മൂവേഴ്സ് ഷിഫ്റ്റിംഗ് സർവീസും.",
    hero_cta_whatsapp: "വാട്സാപ്പിൽ ബുക്ക് ചെയ്യാം",
    hero_cta_services: "എല്ലാ സർവീസുകളും",
    hero_guarantee_text: "100% സംതൃപ്തി ഉറപ്പ്",
    hero_guarantee_sub: "ഗുണനിലവാരം ഉറപ്പുവരുത്തിയുള്ള വിശ്വസ്ത സേവനം",

    services_badge: "ഞങ്ങളുടെ സർവീസുകൾ",
    services_title: "കണ്ണൂരിലെ മികച്ച ക്ലീനിംഗ് & ഷിഫ്റ്റിംഗ് സർവീസുകൾ",
    services_subtitle:
      "വീടുകൾ, വില്ലകൾ, ഓഫീസുകൾ എന്നിവയ്ക്കായി അത്യാധുനിക മെഷീനുകളോടെയുള്ള വിശ്വസ്ത സേവനം.",
    tab_all: "എല്ലാ സർവീസുകളും (9)",
    tab_packers: "പാക്കേഴ്സ് & മൂവേഴ്സ്",
    tab_residential: "വീടുകൾക്ക്",
    tab_deep: "ഡീപ് ക്ലീനിംഗ്",
    tab_commercial: "ഓഫീസുകൾക്ക്",
    badge_featured: "പ്രത്യേക സർവീസ്",
    btn_view_details: "വിശദാംശങ്ങൾ കാണുക",
    btn_whatsapp_quote: "വാട്സാപ്പിൽ വില ചോദിക്കാം",

    custom_requirement_title: "പ്രത്യേക ആവശ്യങ്ങളോ ഷിഫ്റ്റിംഗ് പ്ലാനുകളോ ഉണ്ടോ?",
    custom_requirement_sub: "വലിയ വില്ലകൾക്കും ഓഫീസുകൾക്കും അനുയോജ്യമായ പ്രത്യേക പാക്കേജുകൾ കണ്ണൂർ ജില്ലയിലെവിടെയും ലഭ്യമാണ്.",
    discuss_custom_scope: "വാട്സാപ്പിൽ സംസാരിക്കാം",

    transformations_badge: "യഥാർത്ഥ വർക്ക് റിസൾട്ടുകൾ",
    transformations_title: "കണ്ണൂരിലെ ഞങ്ങളുടെ വർക്കുകളുടെ മുൻപും ശേഷവുമുള്ള മാറ്റങ്ങൾ",
    transformations_subtitle:
      "മട്ടന്നൂരിലും കണ്ണൂരിലും അത്യാധുനിക മെഷീനുകൾ ഉപയോഗിച്ച് ചെയ്ത വർക്കുകളുടെ ഫോട്ടോകൾ കാണുക.",
    slider_instruction: "വ്യത്യാസം കാണാൻ സ്ലൈഡർ ഇടത്തോട്ടും വലത്തോട്ടും നീക്കുക",
    badge_real_case_study: "യഥാർത്ഥ വർക്ക്",
    label_location: "സ്ഥലം",
    label_challenge: "പ്രശ്നം",
    label_solution: "ക്ലീനോറ ചെയ്ത പരിഹാരം",
    label_equipment: "ഉപയോഗിച്ച മെഷീനുകൾ",
    label_turnaround: "എടുത്ത സമയം",
    btn_similar_quote: "ഇതേപോലുള്ള സർവീസ് ബുക്ക് ചെയ്യാം",

    why_cleanora_badge: "ക്ലീനോറയുടെ പ്രത്യേകതകൾ",
    why_cleanora_title: "എന്തുകൊണ്ട് ആളുകൾ ക്ലീനോറ തിരഞ്ഞെടുക്കുന്നു?",
    why_cleanora_subtitle: "പ്രൊഫഷണൽ സമീപനം, മികച്ച ജോലിക്കാർ, വ്യക്തമായ സർവീസ്.",
    why_1_title: "100% സംതൃപ്തി ഉറപ്പ്",
    why_1_desc: "കൃത്യമായ പരിശോധനയിലൂടെ 100% മികച്ച ഗുണനിലവാരം ഉറപ്പാക്കുന്നു.",
    why_2_title: "ആധുനിക ഉപകരണങ്ങൾ",
    why_2_desc: "മികച്ച ഫലം നൽകുന്ന ആധുനിക പ്രൊഫഷണൽ ഉപകരണങ്ങൾ ഉപയോഗിക്കുന്നു.",
    why_3_title: "കണ്ണൂർ മുഴുവൻ സർവീസ്",
    why_3_desc: "മട്ടന്നൂർ ആസ്ഥാനമായി കണ്ണൂർ ജില്ലയിൽ ഉടനീളം കൃത്യസമയത്ത് എത്തുന്ന ടീം.",
    why_4_title: "വ്യക്തമായ നിരക്കുകൾ",
    why_4_desc: "ഒളിപ്പിച്ച ചാർജുകളില്ലാതെ മുൻകൂട്ടി കൃത്യമായ എസ്റ്റിമേറ്റ് നൽകുന്നു.",

    why_badge: "ക്ലീനോറയുടെ പ്രത്യേകതകൾ",
    why_title: "എന്തുകൊണ്ട് ആളുകൾ ക്ലീനോറ തിരഞ്ഞെടുക്കുന്നു?",
    why_subtitle:
      "വിദഗ്ധ തൊഴിലാളികളും ആധുനിക മെഷീനുകളും ഉപയോഗിച്ച് കൃത്യമായ സമയത്ത് ഏറ്റവും മികച്ച സർവീസ് നൽകുന്നു.",
    why_card1_title: "100% സംതൃപ്തി ഉറപ്പ്",
    why_card1_desc: "വിശ്വസ്തവും കുറ്റമറ്റതുമായ സർവീസ് ഓരോ പ്രോജക്റ്റിലും ഉറപ്പുനൽകുന്നു.",
    why_card2_title: "സുരക്ഷിത പാക്കേഴ്സ് & മൂവേഴ്സ്",
    why_card2_desc: "ബബിൾ റാപ്പിംഗ്, വാഹന സൗകര്യം, സുരക്ഷിതമായ ലോഡിംഗ് & അൺലോഡിംഗ് സേവനങ്ങൾ.",
    why_card3_title: "ആധുനിക ഉപകരണങ്ങൾ",
    why_card3_desc: "എല്ലാ പ്രതലങ്ങളും വൃത്തിയാക്കാൻ മികച്ചതും സുരക്ഷിതവുമായ ഉപകരണങ്ങൾ ഉപയോഗിക്കുന്നു.",
    why_card4_title: "ആരോഗ്യത്തിന് സുരക്ഷിതമായ ലായനികൾ",
    why_card4_desc: "കുടുംബങ്ങൾക്കും കുട്ടികൾക്കും തികച്ചും സുരക്ഷിതമായ ഇക്കോ-ഫ്രണ്ട്ലി ഉൽപന്നങ്ങൾ മാത്രം ഉപയോഗിക്കുന്നു.",
    why_card5_title: "പെട്ടെന്നുള്ള സർവീസ്",
    why_card5_desc: "മട്ടന്നൂർ കേന്ദ്രീകരിച്ച് പ്രവർത്തിക്കുന്നതിനാൽ കണ്ണൂർ ജില്ലയിൽ ഉടനീളം വേഗത്തിൽ എത്തും.",
    why_card6_title: "വ്യക്തമായ നിരക്കുകൾ",
    why_card6_desc: "ഒളിപ്പിച്ച ചാർജുകളില്ലാതെ മുൻകൂട്ടി കൃത്യമായ എസ്റ്റിമേറ്റ് നൽകുന്നു.",

    how_it_works_badge: "ലളിതമായ 3 ഘട്ടങ്ങൾ",
    how_it_works_title: "ക്ലീനോറ സർവീസ് ബുക്കിംഗ് എങ്ങനെ?",
    how_it_works_subtitle: "വേഗത്തിലും എളുപ്പത്തിലും സർവീസുകൾ ബുക്ക് ചെയ്യാം.",
    step_1_num: "01",
    step_1_title: "വിവരങ്ങൾ വാട്സാപ്പിൽ അയക്കുക",
    step_1_desc: "ആവശ്യങ്ങളും ഫോട്ടോകളും വാട്സാപ്പിൽ അയച്ച് തത്സമയ എസ്റ്റിമേറ്റ് നേടുക.",
    step_2_num: "02",
    step_2_title: "കൃത്യസമയത്ത് സർവീസ്",
    step_2_desc: "ആധുനിക ഉപകരണങ്ങളോടും സുരക്ഷിത സാമഗ്രികളോടും കൂടി ഞങ്ങളുടെ ടീം എത്തുന്നു.",
    step_3_num: "03",
    step_3_title: "കണ്ട് ബോധ്യപ്പെട്ട് പൂർത്തിയാക്കുക",
    step_3_desc: "ജോലി പൂർണ്ണമായി കണ്ട് ബോധ്യപ്പെട്ട് സംതൃപ്തിയോടെ സർവീസ് പൂർത്തിയാക്കുക.",

    equipments_badge: "ഞങ്ങളുടെ ഉപകരണങ്ങൾ",
    equipments_title: "അത്യാധുനിക പ്രൊഫഷണൽ ഉപകരണങ്ങൾ",
    equipments_subtitle: "മികച്ച ക്ലീനിംഗ് ഫലം ഉറപ്പാക്കാൻ ക്ലീനോറ ആധുനിക ഉപകരണങ്ങൾ ഉപയോഗിക്കുന്നു.",
    equipments_feat_badge: "ആധുനിക ഉപകരണങ്ങൾ",
    equipments_feat_title: "മികച്ച ഫലം നൽകുന്ന ആധുനിക സാങ്കേതികവിദ്യ",
    equipments_feat_desc: "വീടുകൾക്കും സ്ഥാപനങ്ങൾക്കും അനുയോജ്യമായ പ്രൊഫഷണൽ ഉപകരണങ്ങൾ ഞങ്ങൾക്കുണ്ട്.",

    equipment_1_title: "തറ വൃത്തിയാക്കുന്ന ഉപകരണങ്ങൾ",
    equipment_1_desc: "ടൈലുകളും തറകളും കറകളില്ലാതെ വൃത്തിയാക്കാൻ അനുയോജ്യമായ ഉപകരണങ്ങൾ.",
    equipment_2_title: "പ്രഷർ വാഷിംഗ് ഉപകരണങ്ങൾ",
    equipment_2_desc: "ഇന്റർലോക്കിലെയും മുറ്റത്തെയും പായലും അഴുക്കും മാറ്റാനുള്ള ഉപകരണങ്ങൾ.",
    equipment_3_title: "സോഫ & ഫാബ്രിക് ക്ലീനറുകൾ",
    equipment_3_desc: "സോഫകളിലെയും മെത്തകളിലെയും അഴുക്കും പൊടിയും നീക്കം ചെയ്യാനുള്ള ഉപകരണങ്ങൾ.",
    equipment_4_title: "സോളാർ പാനൽ ക്ലീനറുകൾ",
    equipment_4_desc: "സോളാർ പാനലുകൾ പോറലുകളില്ലാതെ വൃത്തിയാക്കാനുള്ള പ്രത്യേക ഉപകരണങ്ങൾ.",

    about_badge: "ക്ലീനോറയെക്കുറിച്ച്",
    about_title: "മട്ടന്നൂരിലെ പ്രൊഫഷണൽ ക്ലീനിംഗ് & മൂവേഴ്സ് ടീം",
    about_subtitle:
      "'Clean Spaces... Healthy Lives...' എന്ന ലക്ഷ്യത്തോടെ കണ്ണൂരിലെ വീടുകൾക്കും സ്ഥാപനങ്ങൾക്കും ശുചിത്വം നൽകുന്നു.",
    about_p1:
      "വൃത്തിയും ശുചിത്വവുമുള്ള ചുറ്റുപാടാണ് നല്ല ആരോഗ്യത്തിന്റെ അടിത്തറ. മട്ടന്നൂർ ആസ്ഥാനമായി കണ്ണൂർ ജില്ലയിലുടനീളം മികച്ച സർവീസ് നൽകാൻ ഞങ്ങൾ പ്രതിജ്ഞാബദ്ധരാണ്.",
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
      "മട്ടന്നൂർ, കണ്ണൂർ കേന്ദ്രീകരിച്ച് പ്രവർത്തിക്കുന്ന വീട്, ഓഫീസ്, വാട്ടർ ടാങ്ക്, സോഫ, ഇന്റർലോക്ക്, സോളാർ പാനൽ ഡീപ് ക്ലീനിംഗും പാക്കേഴ്സ് & മൂവേഴ്സ് ഷിഫ്റ്റിംഗ് സർവീസും.",
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

