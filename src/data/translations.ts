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
  | "tab_vehicle"
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
  | "get_quote"
  | "gallery_badge"
  | "gallery_title"
  | "gallery_subtitle"
  | "gallery_video_title"
  | "gallery_video_desc"
  | "gallery_book_service"
  | "gallery_upcoming_notice"
  | "gallery_video_play"
    | "gallery_video_pause"
  | "gallery_tab_all"
  | "gallery_tab_videos"
  | "gallery_tab_showcase"
  | "gallery_video2_title"
  | "gallery_video2_desc"
  | "gallery_showcase_title"
  | "gallery_showcase_desc"
  | "gallery_view_full"
  | "gallery_close"
  | "gallery_call_now";

export const translations: Record<"en" | "ml", Record<TranslationKey, string>> = {
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_results: "Results",
    nav_machinery: "Machinery",
    nav_transformations: "Results",
    nav_equipments: "Machinery",
    nav_about: "About Us",
    nav_work: "Gallery",
    nav_contact: "Contact",

    top_bar_location: "Mattanur • Kannur, Kerala",
    top_bar_guarantee: "100% Satisfaction Guarantee • Direct Malabar Plaza Office",
    book_via_whatsapp: "Book via WhatsApp",
    menu: "Menu",

    hero_badge_location: "Mattanur • Kannur, Kerala",
    hero_badge_slogan: "Clean Spaces. Healthy Lives.",
    hero_title_line1: "Spotless Clean Spaces.",
    hero_title_line2: "Safe Packers & Movers.",
    hero_subtitle:
      "Premier deep cleaning and hassle-free household shifting services for homes, offices, water tanks, sofas, interlocks, and solar panels in Mattanur and across Kannur, Kerala.",
    hero_cta_whatsapp: "Book Instant via WhatsApp",
    hero_cta_services: "Explore All Services",
    hero_guarantee_text: "100% Satisfaction Guaranteed",
    hero_guarantee_sub: "Complete on-the-spot quality inspection for verified standards",

    services_badge: "What We Do",
    services_title: "Specialized Deep Cleaning & Relocation Services",
    services_subtitle:
      "Engineered for homes, commercial complexes, and institutions in Kannur. Executed by verified technicians using professional machinery.",

    tab_all: "All Services",
    tab_packers: "Packers & Movers",
    tab_residential: "Home Cleaning",
    tab_deep: "Deep Specialized",
    tab_commercial: "Commercial",
    tab_vehicle: "Vehicle Wash",

    badge_featured: "Most Requested",
    btn_view_details: "View Scope",
    btn_whatsapp_quote: "WhatsApp Estimate",

    custom_requirement_title: "Have a Custom Requirement in Kannur?",
    custom_requirement_sub:
      "We handle large-scale construction handovers, multi-story water tanks, complete commercial building sanitization, and interstate shifting.",
    discuss_custom_scope: "Discuss Custom Scope on WhatsApp",

    transformations_badge: "Real Proof",
    transformations_title: "Actual Before & After Transformations",
    transformations_subtitle:
      "Swipe across real project images from Mattanur, Kannur, Thalassery, and Payyanur to inspect the exact difference Cleanora delivers.",
    slider_instruction: "Drag slider horizontally to compare Before & After",
    badge_real_case_study: "Verified Site Proof",

    label_location: "Location",
    label_challenge: "Challenge",
    label_solution: "Cleanora Solution",
    label_equipment: "Machinery Deployed",
    label_turnaround: "Turnaround Time",
    btn_similar_quote: "Get Quote for Similar Cleaning",

    why_cleanora_badge: "Why Cleanora",
    why_cleanora_title: "The Cleanora Standard of Cleanliness",
    why_cleanora_subtitle:
      "From high-pressure German washers to antibacterial sanitization, we provide unmatched hygiene and zero-damage shifting across Kannur.",

    why_1_title: "Industrial Grade Machinery",
    why_1_desc: "high-pressure jet washers and single-disc scrubbers for 10x deeper cleaning than manual methods.",
    why_2_title: "100% Verified & Trained Crew",
    why_2_desc: "Background-verified, polite specialists dedicated to high-standard execution and property care.",
    why_3_title: "Safe & Eco-Friendly Formulations",
    why_3_desc: "Hospital-grade, non-toxic sanitizers that protect your family, pets, tiles, and delicate fabrics.",
    why_4_title: "Pay Only Upon Satisfaction",
    why_4_desc: "Inspect every corner with our supervisor. Pay only when you are 100% satisfied with our work.",

    how_it_works_badge: "Simple 3-Step Process",
    how_it_works_title: "Booking with Cleanora is Fast & Simple",
    how_it_works_subtitle: "Zero hidden costs, prompt arrival, and guaranteed satisfaction on completion.",

    step_1_num: "01",
    step_1_title: "Share Your Requirement",
    step_1_desc: "Send photos, video, or location on WhatsApp. We provide instant clear estimates without hidden fees.",
    step_2_num: "02",
    step_2_title: "On-Time Arrival & Service",
    step_2_desc: "Our verified crew arrives with specialized equipment, hospital-grade chemicals, and protective gear.",
    step_3_num: "03",
    step_3_title: "Inspect & Pay Upon Satisfaction",
    step_3_desc: "Inspect every corner with our team lead. Pay only after you are 100% satisfied with the work.",

    equipments_badge: "Our Fleet",
    equipments_title: "Industrial Grade Cleaning Machinery",
    equipments_subtitle:
      "We invest in heavy-duty commercial equipment to ensure deep sanitization without causing surface damage.",
    equipments_feat_badge: "Heavy Duty Gear",
    equipments_feat_title: "Technology that Delivers Visible Results",
    equipments_feat_desc:
      "Industrial single-disc floor scrubbers, high-pressure jet washers, extraction vacuum units, and scratch-free solar brush systems.",

    equipment_1_title: "Single Disc Floor Scrubbers",
    equipment_1_desc: "Heavy-duty rotating scrubbers for tiles, marble, granite, and epoxy floors.",
    equipment_2_title: "High-Pressure Jet Washers",
    equipment_2_desc: "High-pressure washers to eliminate years of moss, algae, and grime from interlocks and walls.",
    equipment_3_title: "Deep Extraction Upholstery Cleaners",
    equipment_3_desc: "Deep fabric injection and extraction vacuuming for sofa sets, mattresses, and vehicle seats.",
    equipment_4_title: "Telescopic Solar Cleaning Brushes",
    equipment_4_desc: "Scratch-resistant soft brushes with deionized water feeds to restore solar panel efficiency.",

    about_badge: "About Us",
    about_title: "Mattanur's Dedicated Cleaning & Shifting Team",
    about_subtitle: "Under our guiding mission 'Clean Spaces... Healthy Lives...', we deliver trustworthy services across Kannur district.",
    about_p1:
      "Cleanliness is fundamental to healthy living. Based at Malabar Plaza, Mattanur, Cleanora was founded to bring organized, professional deep cleaning and relocation standards to Kannur.",
    about_p2:
      "Whether restoring a residential home, deep cleaning water tanks, or safely shifting your household belongings, we guarantee spotless execution and total peace of mind.",
    about_btn: "Learn More About Cleanora",

    coverage_badge: "Service Coverage",
    coverage_title: "Covering Mattanur & Across Kannur District",
    coverage_subtitle: "Quick dispatch to all locations in Kannur district with complete equipment and dedicated staff.",

    faq_badge: "FAQ",
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Clear answers regarding our deep cleaning, household shifting, pricing, and procedures in Kannur.",

    final_cta_badge: "Instant Booking",
    final_cta_title: "Ready for a Spotless Space or Hassle-Free Shifting?",
    final_cta_subtitle: "Connect with our Mattanur headquarters on WhatsApp or phone for immediate consultation and transparent quotes.",
    final_cta_whatsapp: "Book Instant via WhatsApp",
    final_cta_call: "Call Us: +91 94968 40540",

    footer_bio:
      "Premier deep cleaning and Packers & Movers relocation services based in Mattanur, serving homes, offices, water tanks, sofas, interlocks, and solar panels across Kannur district, Kerala.",
    footer_nav_title: "Quick Navigation",
    footer_services_title: "Our Services",
    footer_contact_title: "Get in Touch",
    footer_rights: "Cleanora Deep Cleaning & Relocations. All Rights Reserved. Malabar Plaza, Mattanur, Kannur, Kerala.",

    mobile_call_now: "Call Now",
    mobile_whatsapp_us: "WhatsApp",

    chat_header_title: "Chat with Cleanora",
    chat_header_sub: "Mattanur, Kannur • Instant Response",
    chat_intro: "Hello! How can we assist you with cleaning or shifting in Kannur?",
    chat_guarantee: "Direct contact with Cleanora team",

    view_all_services: "Explore All Services",
    enquire_whatsapp: "Enquire via WhatsApp",
    get_quote: "Get Instant Quote",

    gallery_badge: "Work Gallery",
    gallery_title: "Real Work Gallery",
    gallery_subtitle: "Watch authentic on-site video proof of Cleanora's professional interlock pressure washing and house deep cleaning in Kannur.",
    gallery_video_title: "Interlock Jet Wash & House Deep Cleaning",
    gallery_video_desc: "Live site footage capturing the complete removal of stubborn moss and black algae from interlocks, followed by full house deep scrubbing.",
    gallery_book_service: "Book This Cleaning Service",
    gallery_upcoming_notice: "More live project videos from our ongoing sites in Kannur will be added here regularly.",
    gallery_video_play: "Play Video",
    gallery_video_pause: "Pause Video",
    gallery_tab_all: "All Work (3)",
    gallery_tab_videos: "On-Site Videos (2)",
    gallery_tab_showcase: "Official Catalogue (1)",
    gallery_video2_title: "House Deep Cleaning & Floor Scrubbing",
    gallery_video2_desc: "Live site footage capturing floor scrubbing, deep dust extraction, and intensive room sanitization by Cleanora's verified team.",
    gallery_showcase_title: "Official Cleanora Service Catalogue & Contacts",
    gallery_showcase_desc: "Verified official service list including full house cleaning, interlock, water tank, solar panels, and new vehicle & two-wheeler washing.",
    gallery_view_full: "Click to Zoom Flyer",
    gallery_close: "Close Preview",
    gallery_call_now: "Call Cleanora Direct",
  },
  ml: {
    nav_home: "ഹോം",
    nav_services: "സർവീസുകൾ",
    nav_results: "ഫലങ്ങൾ",
    nav_machinery: "ഉപകരണങ്ങൾ",
    nav_transformations: "ഫലങ്ങൾ",
    nav_equipments: "ഉപകരണങ്ങൾ",
    nav_about: "ഞങ്ങൾ",
    nav_work: "ഗ്യാലറി",
    nav_contact: "ബന്ധപ്പെടുക",

    top_bar_location: "മട്ടന്നൂർ • കണ്ണൂർ, കേരളം",
    top_bar_guarantee: "100% സംതൃപ്തി ഉറപ്പ് • മട്ടന്നൂർ മലബാർ പ്ലാസ ഓഫീസ്",
    book_via_whatsapp: "വാട്സാപ്പിൽ ബുക്ക് ചെയ്യാം",
    menu: "മെനു",

    hero_badge_location: "മട്ടന്നൂർ • കണ്ണൂർ, കേരളം",
    hero_badge_slogan: "വൃത്തിയുള്ള ഇടങ്ങൾ • ആരോഗ്യകരമായ ജീവിതം",
    hero_title_line1: "വീടും പരിസരവും പുത്തൻപോലെ.",
    hero_title_line2: "വിശ്വസ്ത പാക്കേഴ്സ് & മൂവേഴ്സ്.",
    hero_subtitle:
      "മട്ടന്നൂരിലും കണ്ണൂർ ജില്ലയിലെവിടെയും വീട്, ഓഫീസ്, വാട്ടർ ടാങ്ക്, സോഫ, ഇന്റർലോക്ക്, സോളാർ പാനൽ ഡീപ് ക്ലീനിംഗും പാക്കേഴ്സ് & മൂവേഴ്സ് ഷിഫ്റ്റിംഗ് സർവീസും.",
    hero_cta_whatsapp: "വാട്സാപ്പിൽ ബുക്ക് ചെയ്യാം",
    hero_cta_services: "എല്ലാ സർവീസുകളും",
    hero_guarantee_text: "100% സംതൃപ്തി ഉറപ്പ്",
    hero_guarantee_sub: "ഗുണനിലവാരം ഉറപ്പുവരുത്തിയുള്ള വിശ്വസ്ത സേവനം",

    services_badge: "ഞങ്ങളുടെ സർവീസുകൾ",
    services_title: "പ്രൊഫഷണൽ ഡീപ് ക്ലീനിംഗ് & ഷിഫ്റ്റിംഗ് സർവീസുകൾ",
    services_subtitle:
      "കണ്ണൂരിലെ വീടുകൾക്കും സ്ഥാപനങ്ങൾക്കും അനുയോജ്യമായ പ്രൊഫഷണൽ സർവീസുകൾ പരിശീലനം ലഭിച്ച തൊഴിലാളികളും ആധുനിക ഉപകരണങ്ങളും വഴി നൽകുന്നു.",

    tab_all: "എല്ലാ സർവീസുകളും",
    tab_packers: "പാക്കേഴ്സ് & മൂവേഴ്സ്",
    tab_residential: "ഹോം ക്ലീനിംഗ്",
    tab_deep: "ഡീപ് ക്ലീനിംഗ്",
    tab_commercial: "കൊമേഴ്സ്യൽ",
    tab_vehicle: "വാഹനങ്ങൾ",

    badge_featured: "കൂടുതൽ ആളുകൾ ആവശ്യപ്പെടുന്നത്",
    btn_view_details: "വിവരങ്ങൾ കാണുക",
    btn_whatsapp_quote: "വാട്സാപ്പിൽ ചോദിക്കാം",

    custom_requirement_title: "പ്രത്യേക ആവശ്യങ്ങളുണ്ടോ?",
    custom_requirement_sub:
      "വലിയ കെട്ടിടങ്ങളുടെ ക്ലീനിംഗ്, ഒന്നിലധികം വാട്ടർ ടാങ്കുകൾ, വലിയ വീടുകൾ അല്ലെങ്കിൽ ദൂരസ്ഥലങ്ങളിലേക്കുള്ള ഷിഫ്റ്റിംഗ് എന്നിവയ്ക്കായി ബന്ധപ്പെടുക.",
    discuss_custom_scope: "വാട്സാപ്പിൽ സംസാരിക്കാം",

    transformations_badge: "യഥാർത്ഥ മാറ്റങ്ങൾ",
    transformations_title: "ക്ലീനിംഗിന് മുൻപും ശേഷവുമുള്ള വ്യത്യാസം",
    transformations_subtitle:
      "മട്ടന്നൂർ, കണ്ണൂർ, തലശ്ശേരി, പയ്യന്നൂർ എന്നിവിടങ്ങളിലെ ക്ലീനോറ ടീം ചെയ്ത ജോലികളുടെ വ്യക്തമായ മാറ്റം കാണാം.",
    slider_instruction: "മാറ്റം കാണാൻ സ്ലൈഡർ ഇടത്തോട്ടും വലത്തോട്ടും നീക്കുക",
    badge_real_case_study: "യഥാർത്ഥ ജോലി ഫലം",

    label_location: "സ്ഥലം",
    label_challenge: "പ്രശ്നം",
    label_solution: "ക്ലീനോറ നൽകിയ പരിഹാരം",
    label_equipment: "ഉപയോഗിച്ച ഉപകരണം",
    label_turnaround: "എടുത്ത സമയം",
    btn_similar_quote: "ഇത്തരം സർവീസിന് റേറ്റ് അറിയുക",

    why_cleanora_badge: "എന്തുകൊണ്ട് ക്ലീനോറ",
    why_cleanora_title: "ക്ലീനോറ നൽകുന്ന സവിശേഷതകൾ",
    why_cleanora_subtitle:
      "ഉയർന്ന പ്രഷർ വാഷറുകൾ, സുരക്ഷിതമായ ക്ലീനിംഗ് ലായനികൾ, കേടുപാടുകൾ കൂടാതെ സുരക്ഷിതമായ ഷിഫ്റ്റിംഗ് എന്നിവ ക്ലീനോറ ഉറപ്പുനൽകുന്നു.",

    why_1_title: "ആധുനിക മെഷീനുകൾ",
    why_1_desc: "ഹൈ-പ്രഷർ ജെറ്റ് വാഷറുകളും സിംഗിൾ ഡിസ്ക് സ്ക്രബ്ബറുകളും വഴി ആഴത്തിലുള്ള ക്ലീനിംഗ് ഉറപ്പാക്കുന്നു.",
    why_2_title: "പരിശീലനം ലഭിച്ച ജീവനക്കാർ",
    why_2_desc: "പൂർണ്ണ വിശ്വാസ്യതയുള്ളവരും തൊഴിൽ വൈദഗ്ദ്ധ്യം നേടിയവരുമായ ക്ലീനോറ ടെക്നീഷ്യന്മാർ.",
    why_3_title: "സുരക്ഷിത ക്ലീനിംഗ് ലായനികൾ",
    why_3_desc: "കുടുംബത്തിനും വളർത്തുമൃഗങ്ങൾക്കും ഉപദ്രവമില്ലാത്ത ഹോസ്പിറ്റൽ-ഗ്രേഡ് സുരക്ഷിത ലായനികൾ.",
    why_4_title: "സംതൃപ്തിക്ക് ശേഷം മാത്രം പണം",
    why_4_desc: "ജോലി പൂർണ്ണമായി കണ്ട് ബോധ്യപ്പെട്ട് 100% സംതൃപ്തി വന്ന ശേഷം മാത്രം പണം നൽകുക.",

    how_it_works_badge: "ലളിതമായ 3 ഘട്ടങ്ങൾ",
    how_it_works_title: "ബുക്കിംഗ് വളരെ എളുപ്പമാണ്",
    how_it_works_subtitle: "മറച്ചുവെച്ച ചാർജുകളില്ലാതെ കൃത്യസമയത്ത് സർവീസ്.",

    step_1_num: "01",
    step_1_title: "ആവശ്യം അറിയിക്കുക",
    step_1_desc: "വാട്സാപ്പിൽ ചിത്രങ്ങളോ ലൊക്കേഷനോ അയക്കുക. ഞങ്ങൾ വ്യക്തമായ നിരക്കുകൾ നൽകും.",
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

    gallery_badge: "വർക്ക് ഗ്യാലറി",
    gallery_title: "യഥാർത്ഥ ജോലി ഗ്യാലറി",
    gallery_subtitle: "കണ്ണൂരിലെ വീടുകളിലും സ്ഥാപനങ്ങളിലും ക്ലീനോറ ടീം നേരിട്ട് ചെയ്ത ഇന്റർലോക്ക് പ്രഷർ വാഷിംഗും ഡീപ് ക്ലീനിംഗും തത്സമയം കാണാം.",
    gallery_video_title: "ഇന്റർലോക്ക് ജെറ്റ് വാഷിംഗ് & വീട് ഡീപ് ക്ലീനിംഗ്",
    gallery_video_desc: "ഇന്റർലോക്കിലെ കട്ടപിടിച്ച പായലും അഴുക്കും ഹൈ-പ്രഷർ വാഷർ വഴി നീക്കം ചെയ്യുന്നതും വീട് ഡീപ് ക്ലീനിംഗ് പൂർത്തിയാക്കുന്നതുമായ തത്സമയ വീഡിയോ.",
    gallery_book_service: "ഇത്തരം സർവീസ് ബുക്ക് ചെയ്യാം",
    gallery_upcoming_notice: "കണ്ണൂരിലെ മറ്റ് സൈറ്റുകളിൽ നിന്നുള്ള യഥാർത്ഥ വീഡിയോകൾ ഉടൻ ഇവിടെ അപ്‌ലോഡ് ചെയ്യുന്നതാണ്.",
    gallery_video_play: "വീഡിയോ പ്ലേ ചെയ്യുക",
    gallery_video_pause: "പോസ് ചെയ്യുക",
    gallery_tab_all: "എല്ലാം (3)",
    gallery_tab_videos: "സൈറ്റ് വീഡിയോകൾ (2)",
    gallery_tab_showcase: "സർവീസ് കാറ്റലോഗ് (1)",
    gallery_video2_title: "വീട് ഡീപ് ക്ലീനിംഗ് & ഫ്ലോർ സ്ക്രബ്ബിംഗ്",
    gallery_video2_desc: "വീടിന്റെ തറയും മുറികളും മെഷീൻ സ്ക്രബ്ബിംഗ് വഴി ആഴത്തിൽ വൃത്തിയാക്കുന്നതും അഴുക്കുകൾ പൂർണ്ണമായും നീക്കം ചെയ്യുന്നതുമായ തത്സമയ വീഡിയോ.",
    gallery_showcase_title: "ക്ലീനോറ ഒഫീഷ്യൽ സർവീസ് കാറ്റലോഗ് & നമ്പറുകൾ",
    gallery_showcase_desc: "വീട്, ഓഫീസ്, ഇന്റർലോക്ക്, വാട്ടർ ടാങ്ക്, സോളാർ പാനൽ കൂടാതെ പുതിയ വാഹനം & ബൈക്ക് വാഷിംഗ് സർവീസുകളുടെ വിവരങ്ങൾ.",
    gallery_view_full: "വലുതാക്കി കാണാൻ ക്ലിക്ക് ചെയ്യുക",
    gallery_close: "ക്ലോസ് ചെയ്യുക",
    gallery_call_now: "നേരിട്ട് വിളിക്കുക",
  },
};
