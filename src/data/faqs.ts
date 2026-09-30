export interface FAQItem {
  id: string;
  questionEn: string;
  questionMl: string;
  answerEn: string;
  answerMl: string;
  category: "General" | "Services" | "Booking" | "Pricing";
}

export const faqsData: FAQItem[] = [
  {
    id: "services-offered",
    category: "Services",
    questionEn: "What services does Cleanora provide in Kannur?",
    questionMl: "ക്ലീനോറ കണ്ണൂരിൽ എന്തൊക്കെ സർവീസുകളാണ് നൽകുന്നത്?",
    answerEn:
      "Cleanora provides Packers & Movers shifting services, House Deep Cleaning, Water Tank Cleaning, Solar Panel Cleaning, Sofa & Carpet Shampooing, Interlock Jet Washing, Kitchen Degreasing, Bathroom Descaling, and Office & Commercial Cleaning across Kannur and Mattanur.",
    answerMl:
      "പാക്കേഴ്‌സ് & മൂവേഴ്‌സ് ഷിഫ്റ്റിംഗ്, വീട് ഡീപ് ക്ലീനിംഗ്, വാട്ടർ ടാങ്ക് ക്ലീനിംഗ്, സോളാർ പാനൽ വാഷിംഗ്, സോഫ & കാർപെറ്റ് ഷാംപൂ വാഷ്, ഇന്റർലോക്ക് ജെറ്റ് വാഷ്, അടുക്കള ഡീഗ്രീസിംഗ്, ബാത്ത്റൂം ഡെസ്കെയിലിംഗ്, ഓഫീസ് ക്ലീനിംഗ് എന്നിവ ക്ലീനോറ നൽകുന്നു.",
  },
  {
    id: "packers-movers-scope",
    category: "Services",
    questionEn: "Do you undertake household shifting anywhere in and around Kannur?",
    questionMl: "കണ്ണൂരിലും പരിസരങ്ങളിലും വീട്ടുസാധനങ്ങൾ ഷിഫ്റ്റ് ചെയ്തു തരുമോ?",
    answerEn:
      "Yes! Cleanora Packers & Movers undertakes to shift anything including household goods, furniture, electronics, and office materials to anywhere in and around Kannur with multi-layer protective packing and zero-damage transport.",
    answerMl:
      "തീർച്ചയായും! വീട്ടുപകരണങ്ങൾ, ഫർണിച്ചറുകൾ, ഇലക്ട്രോണിക്സ് എന്നിവ കേടുപാടുകൾ കൂടാതെ സുരക്ഷിതമായി പാക്ക് ചെയ്ത് കണ്ണൂരിലും സമീപ പ്രദേശങ്ങളിലും എവിടെയും എത്തിച്ചു നൽകാൻ ക്ലീനോറ ടീം സദാ സജ്ജമാണ്.",
  },
  {
    id: "service-areas",
    category: "General",
    questionEn: "Which areas in and around Kannur do you serve?",
    questionMl: "കണ്ണൂരിൽ എവിടെയൊക്കെ സർവീസ് ലഭ്യമാണ്?",
    answerEn:
      "We serve residential and commercial clients across Mattanur, Kannur Town, Thalassery, Iritty, Kuthuparamba, Payyanur, Taliparamba, Anjarakandy, Chakkarakkal, and adjacent areas throughout Kannur district.",
    answerMl:
      "മട്ടന്നൂർ, കണ്ണൂർ ടൗൺ, തലശ്ശേരി, ഇരിട്ടി, കൂത്തുപറമ്പ്, പയ്യന്നൂർ, തളിപ്പറമ്പ്, അഞ്ചരക്കണ്ടി, ചക്കരക്കൽ ഉൾപ്പെടെ കണ്ണൂർ ജില്ലയിലെവിടെയും സർവീസ് ലഭ്യമാണ്.",
  },
  {
    id: "how-to-book",
    category: "Booking",
    questionEn: "How can I book a cleaning or shifting service with Cleanora?",
    questionMl: "ക്ലീനോറ സർവീസ് എങ്ങനെ ബുക്ക് ചെയ്യാം?",
    answerEn:
      "Booking is fast and convenient via WhatsApp or Phone. Simply tap any 'Book via WhatsApp' button on our website, or call us directly at +91 94968 40540 / +91 80754 79552. We will confirm your preferred date and slot promptly.",
    answerMl:
      "ഞങ്ങളുടെ വെബ്‌സൈറ്റിലെ 'Book via WhatsApp' ബട്ടണിൽ ക്ലിക്ക് ചെയ്തോ +91 94968 40540 / +91 80754 79552 എന്ന നമ്പറുകളിലേക്ക് വിളിച്ചോ വളരെ എളുപ്പത്തിൽ ബുക്ക് ചെയ്യാം.",
  },
  {
    id: "get-quote",
    category: "Pricing",
    questionEn: "How do I get an accurate quote for my service requirement?",
    questionMl: "എസ്റ്റിമേറ്റ് തുക എങ്ങനെ അറിയാം?",
    answerEn:
      "You can send us a few photos or item lists of your home or shifting needs on WhatsApp (+91 94968 40540). We provide transparent, custom quotes without hidden charges.",
    answerMl:
      "സർവീസ് ആവശ്യമായ സ്ഥലത്തിന്റെ ഫോട്ടോയോ ഷിഫ്റ്റ് ചെയ്യേണ്ട സാധനങ്ങളുടെ വിവരങ്ങളോ വാട്സാപ്പിൽ (+91 94968 40540) അയച്ചുതന്നാൽ കൃത്യമായ എസ്റ്റിമേറ്റ് മുൻകൂട്ടി നൽകുന്നതാണ്.",
  },
  {
    id: "equipment-chemicals",
    category: "Services",
    questionEn: "Do I need to provide any machinery, packing supplies, or chemicals?",
    questionMl: "മെഷീനുകളോ പാക്കിംഗ് സാധനങ്ങളോ നമ്മൾ നൽകേണ്ടതുണ്ടോ?",
    answerEn:
      "No. Cleanora brings all industrial-grade machinery, packing protective rolls, vacuum extractors, high-pressure jet washers, and safe solutions. You only need to provide water and electricity access for cleaning jobs.",
    answerMl:
      "വേണ്ടതില്ല. റോട്ടറി സ്ക്രബ്ബറുകൾ, പാക്കിംഗ് മെറ്റീരിയലുകൾ, വാക്വം മെഷീനുകൾ, പ്രഷർ വാഷറുകൾ, ക്ലീനിംഗ് ലോഷനുകൾ എന്നിവയെല്ലാം ഞങ്ങളുടെ ടീം കൊണ്ടുവരുന്നതാണ്. ക്ലീനിംഗിനായി വെള്ളവും വൈദ്യുതിയും മാത്രം ലഭ്യമാക്കിയാൽ മതിയാകും.",
  },
  {
    id: "satisfaction-guarantee",
    category: "General",
    questionEn: "What is your 100% Satisfaction Guarantee?",
    questionMl: "100% സംതൃപ്തി ഉറപ്പ് എങ്ങനെയാണ് പ്രവർത്തിക്കുന്നത്?",
    answerEn:
      "We walk through the finished job with you before concluding. If any area needs extra attention, our team resolves it immediately to your complete satisfaction.",
    answerMl:
      "ജോലി പൂർത്തിയായ ശേഷം നിങ്ങളുടെ സാന്നിധ്യത്തിൽ പരിശോധന നടത്തുന്നു. എന്തെങ്കിലും പോരായ്മയുണ്ടെങ്കിൽ ഉടൻ തന്നെ വീണ്ടും ക്ലീൻ ചെയ്തു നൽകുന്നു.",
  },
];
