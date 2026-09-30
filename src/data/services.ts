export interface ServiceItem {
  id: string;
  slug: string;
  nameEn: string;
  nameMl: string;
  shortDescriptionEn: string;
  shortDescriptionMl: string;
  detailedDescriptionEn: string;
  detailedDescriptionMl: string;
  highlightsEn: string[];
  highlightsMl: string[];
  checklistEn: string[];
  checklistMl: string[];
  image: string;
  badgeEn?: string;
  badgeMl?: string;
  featured?: boolean;
  whatsappMessageEn: string;
  whatsappMessageMl: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "house-cleaning",
    slug: "house-cleaning",
    nameEn: "House Deep Cleaning",
    nameMl: "വീട് ഡീപ് ക്ലീനിംഗ്",
    shortDescriptionEn:
      "Comprehensive residential deep cleaning covering living rooms, bedrooms, balconies, fans, and hard-to-reach zones.",
    shortDescriptionMl:
      "ലിവിംഗ് റൂം, ബെഡ്‌റൂം, ബാൽക്കണി, ജനലുകൾ, ഫാനുകൾ എന്നിവ ഉൾപ്പെടെ വീട് മുഴുവൻ സമഗ്രമായി ഡീപ് ക്ലീൻ ചെയ്യുന്നു.",
    detailedDescriptionEn:
      "A complete top-to-bottom residential cleaning solution for villas, independent houses, and flats in Mattanur and across Kannur. We eliminate deep-seated dust, remove cobwebs, vacuum upholstery, sanitize fixtures, and restore absolute freshness to your home.",
    detailedDescriptionMl:
      "കണ്ണൂരിലെ വീടുകൾക്കും വില്ലകൾക്കും അപ്പാർട്ട്‌മെന്റുകൾക്കും അനുയോജ്യമായ സമ്പൂർണ്ണ ക്ലീനിംഗ്. സീലിംഗ് മുതൽ ഫ്ലോർ വരെ മെഷീനുകൾ ഉപയോഗിച്ച് വൃത്തിയാക്കി വീടിന് പുത്തൻ ഉണർവ് നൽകുന്നു.",
    highlightsEn: [
      "Floor single-disc scrubbing and deep vacuuming",
      "Ceiling fans, light fixtures & switchboard detailing",
      "Door frames, window tracks & balcony grill cleaning",
      "Wardrobe exteriors & furniture dusting and sanitization",
    ],
    highlightsMl: [
      "മെഷീൻ ഫ്ലോർ സ്ക്രബ്ബിംഗും വാക്വമിംഗും",
      "ഫാൻ, ലൈറ്റുകൾ, സ്വിച്ച് ബോർഡുകൾ ക്ലീനിംഗ്",
      "ജനൽ ചില്ലുകൾ, ട്രാക്കുകൾ, ഗ്രില്ലുകൾ വൃത്തിയാക്കൽ",
      "ഫർണിച്ചറുകൾ, വാർഡ്രോബുകൾ പൊടി കളഞ്ഞ് തിളക്കമുള്ളതാക്കൽ",
    ],
    checklistEn: [
      "Cobweb and high-corner dust removal from ceilings",
      "Dusting, wiping, and sanitization of furniture and surfaces",
      "Deep mechanical floor machine scrubbing and dry mopping",
      "Balcony wash and glass railing streak-free polishing",
    ],
    checklistMl: [
      "സീലിംഗിലെയും കോണുകളിലെയും മാറാല മാറ്റൽ",
      "ഫർണിച്ചറുകളും പ്രതലങ്ങളും തുടച്ച് അണുവിമുക്തമാക്കൽ",
      "മെഷീൻ ഉപയോഗിച്ചുള്ള ഫ്ലോർ സ്ക്രബ്ബിംഗ്",
      "ബാൽക്കണിയും ഗ്ലാസ് റെയ്‌ലിംഗുകളും പോളിഷ് ചെയ്യൽ",
    ],
    image: "/images/housecleaning.png",
    featured: true,
    badgeEn: "Most Popular",
    badgeMl: "ഏറ്റവും ജനപ്രിയം",
    whatsappMessageEn:
      "Hi Cleanora, I would like to enquire about House Deep Cleaning in Kannur.",
    whatsappMessageMl:
      "നമസ്കാരം ക്ലീനോറ, എന്റെ വീട് ഡീപ് ക്ലീൻ ചെയ്യുന്നതിനെക്കുറിച്ച് അറിയാൻ ആഗ്രഹിക്കുന്നു.",
  },
  {
    id: "water-tank-cleaning",
    slug: "water-tank-cleaning",
    nameEn: "Water Tank Cleaning",
    nameMl: "വാട്ടർ ടാങ്ക് ക്ലീനിംഗ്",
    shortDescriptionEn:
      "Hygienic multi-stage cleaning, sludge evacuation, and disinfection for overhead and underground sumps.",
    shortDescriptionMl:
      "ഓവർഹെഡ് ടാങ്കുകളും അണ്ടർഗ്രൗണ്ട് വാട്ടർ സംപുകളും ചെളിയും അഴുക്കും മാറ്റി അണുവിമുക്തമാക്കുന്നു.",
    detailedDescriptionEn:
      "Ensure pure, safe water for your family. Over time, water tanks accumulate heavy silt, algae, mud, and harmful bacteria. Cleanora performs systematic de-sludging, high-pressure scrubbing, vacuum mud extraction, and eco-safe antibacterial treatment.",
    detailedDescriptionMl:
      "കുടുംബത്തിന് ശുദ്ധജലം ഉറപ്പാക്കൂ. ടാങ്കുകളിൽ അടിഞ്ഞുകൂടുന്ന പായൽ, ചെളി, ബാക്ടീരിയ എന്നിവ ഹൈ-പ്രഷർ വാഷിംഗിലൂടെയും വാക്വമിംഗിലൂടെയും നീക്കം ചെയ്ത് ശുദ്ധമാക്കുന്നു.",
    highlightsEn: [
      "Complete dewatering & sludge sediment removal",
      "High-pressure jet washing of interior tank walls & ceiling",
      "Vacuum suction of dirty residue and algae layers",
      "Antibacterial spray sanitization for 100% clean drinking water",
    ],
    highlightsMl: [
      "ചെളിയും അവശിഷ്ടങ്ങളും പൂർണ്ണമായി നീക്കം ചെയ്യൽ",
      "ഹൈ-പ്രഷർ ജെറ്റ് വാഷർ ഉപയോഗിച്ചുള്ള ഉൾഭിത്തി കഴുകൽ",
      "അഴുക്കും പായലും വാക്വം സക്ഷനിലൂടെ നീക്കൽ",
      "സുരക്ഷിതമായ ആന്റിബാക്ടീരിയൽ സാനിറ്റൈസേഷൻ",
    ],
    checklistEn: [
      "Tank inspection & initial drainage",
      "Manual scrub & high-pressure rotary wash",
      "Sludge and sediment vacuum evacuation",
      "Disinfection and safe refill verification",
    ],
    checklistMl: [
      "ടാങ്ക് പരിശോധനയും പ്രാഥമിക ഡ്രെയിനേജും",
      "ഹൈ-പ്രഷർ റോട്ടറി വാഷിംഗ്",
      "ചെളി വാക്വം സക്ഷൻ",
      "അണുനശീകരണവും സുരക്ഷിതമായ റീഫില്ലിംഗും",
    ],
    image: "/images/watertank.png",
    featured: true,
    badgeEn: "Health & Pure Water",
    badgeMl: "ആരോഗ്യവും ശുദ്ധജലവും",
    whatsappMessageEn:
      "Hi Cleanora, I would like to book Water Tank Cleaning service in Kannur.",
    whatsappMessageMl:
      "നമസ്കാരം ക്ലീനോറ, വാട്ടർ ടാങ്ക് ക്ലീനിംഗ് സർവീസ് ബുക്ക് ചെയ്യാൻ ആഗ്രഹിക്കുന്നു.",
  },
  {
    id: "solar-panel-cleaning",
    slug: "solar-panel-cleaning",
    nameEn: "Solar Panel Cleaning",
    nameMl: "സോളാർ പാനൽ ക്ലീനിംഗ്",
    shortDescriptionEn:
      "Demineralized soft-brush cleaning for rooftop solar PV panels to maximize power generation efficiency.",
    shortDescriptionMl:
      "സോളാർ പാനലുകളിലെ പൊടിയും കാഷ്ഠങ്ങളും നീക്കി പരമാവധി കറന്റ് ഉൽപ്പാദനം ഉറപ്പാക്കുന്നു.",
    detailedDescriptionEn:
      "Dust, bird droppings, pollen, and pollution film reduce solar panel efficiency by up to 25-30%. Cleanora provides non-abrasive, soft-brush solar panel cleaning using purified water solutions that restore maximum solar energy absorption without scratching glass surfaces.",
    detailedDescriptionMl:
      "സോളാർ പാനലുകളിൽ പറ്റിപ്പിടിക്കുന്ന പൊടിയും കാഷ്ഠങ്ങളും കറന്റ് ഉൽപ്പാദനം ഗണ്യമായി കുറയ്ക്കുന്നു. പോറലുകൾ വീഴാത്ത വാട്ടർ-ഫെഡ് ബ്രഷ് ഉപയോഗിച്ച് പാനലുകൾ കഴുകി കാര്യക്ഷമത വർദ്ധിപ്പിക്കുന്നു.",
    highlightsEn: [
      "Boosts solar energy output and electricity generation efficiency",
      "Soft-bristle telescopic brushes safe on photovoltaic glass & anti-reflective coatings",
      "Effective removal of bird droppings, dust, and environmental film",
      "Safe rooftop access and electrical safety-compliant procedures",
    ],
    highlightsMl: [
      "സൗരോർജ്ജ ഉൽപ്പാദനക്ഷമത വർദ്ധിപ്പിക്കുന്നു",
      "ഗ്ലാസിന് പോറലുകൾ വീഴാത്ത സോഫ്റ്റ് ടെലിസ്കോപ്പിക് ബ്രഷ്",
      "പക്ഷിക്കാഷ്ഠങ്ങളും പൊടിപടലങ്ങളും പൂർണ്ണമായി നീക്കൽ",
      "റൂഫ്ടോപ്പ് സുരക്ഷാ മുൻകരുതലുകളോടെയുള്ള വർക്ക്",
    ],
    checklistEn: [
      "Pre-cleaning inspection of solar panel arrays",
      "Purified water spray and gentle non-abrasive brush agitation",
      "Streak-free squeegee rinse to prevent mineral deposit buildup",
      "Post-cleaning output check and cleanliness verification",
    ],
    checklistMl: [
      "സോളാർ പാനലുകളുടെ പ്രാരംഭ പരിശോധന",
      "സോഫ്റ്റ് ബ്രഷ് വാഷിംഗ്",
      "കറകൾ അവശേഷിക്കാത്ത ക്ലീൻ റിൻസിംഗ്",
      "അന്തിമ കാര്യക്ഷമതാ പരിശോധന",
    ],
    image: "/images/solar.png",
    featured: true,
    badgeEn: "Energy Efficiency",
    badgeMl: "പരമാവധി കാര്യക്ഷമത",
    whatsappMessageEn:
      "Hi Cleanora, I would like to enquire about Solar Panel Cleaning service in Kannur.",
    whatsappMessageMl:
      "നമസ്കാരം ക്ലീനോറ, സോളാർ പാനൽ ക്ലീനിംഗ് സർവീസിനെക്കുറിച്ച് അറിയാൻ ആഗ്രഹിക്കുന്നു.",
  },
  {
    id: "sofa-carpet-cleaning",
    slug: "sofa-carpet-cleaning",
    nameEn: "Sofa & Carpet Cleaning",
    nameMl: "സോഫ & കാർപെറ്റ് ക്ലീനിംഗ്",
    shortDescriptionEn:
      "Professional fabric shampooing, deep moisture extraction, and allergen removal for couches and rugs.",
    shortDescriptionMl:
      "സോഫ, കാർപെറ്റ്, മെത്ത എന്നിവയിലെ അഴുക്കും ദുർഗന്ധവും ഷാംപൂ വാഷിലൂടെ നീക്കുന്നു.",
    detailedDescriptionEn:
      "Revitalize your fabric sofas, luxury couches, dining chairs, and carpets with industrial suction extraction and fabric-safe foam shampooing. Effectively eliminates trapped dust, sweat stains, allergens, and odors.",
    detailedDescriptionMl:
      "സോഫകളിലും കാർപെറ്റുകളിലും അടിഞ്ഞുകൂടുന്ന പൊടിയും വിയർപ്പ് കറകളും ദുർഗന്ധവും അത്യാധുനിക ഷാംപൂ എക്സ്ട്രാക്ഷൻ മെഷീൻ ഉപയോഗിച്ച് വേഗത്തിൽ വൃത്തിയാക്കുന്നു.",
    highlightsEn: [
      "High-power dry vacuuming for dust & allergen extraction",
      "Fabric-safe foam shampooing to break down tough stains",
      "Industrial suction extraction for rapid moisture removal",
      "Sanitizing treatment for fabric couches, carpets & mattresses",
    ],
    highlightsMl: [
      "പൊടിയും അണുക്കളും നീക്കം ചെയ്യുന്ന ഡ്രൈ വാക്വമിംഗ്",
      "തുണിത്തരങ്ങൾക്ക് അനുയോജ്യമായ ഫോം ഷാംപൂ വാഷ്",
      "ഈർപ്പം വേഗത്തിൽ വലിച്ചെടുക്കുന്ന ഹൈ-സക്ഷൻ ഡ്രൈയിംഗ്",
      "ദുർഗന്ധം മാറ്റി സുഗന്ധം നൽകുന്ന സാനിറ്റൈസേഷൻ",
    ],
    checklistEn: [
      "Fabric type and colorfastness inspection",
      "Deep crevice and edge dry vacuuming",
      "Shampoo foam rotary agitation",
      "High-powered wet vacuum extraction and drying check",
    ],
    checklistMl: [
      "ഫാബ്രിക് പരിശോധന",
      "ആഴത്തിലുള്ള വാക്വമിംഗ്",
      "റോട്ടറി ഷാംപൂ ട്രീറ്റ്‌മെന്റ്",
      "വെറ്റ് എക്‌സ്ട്രാക്ഷനും ഡ്രൈയിംഗും",
    ],
    image: "/images/sofa.png",
    featured: true,
    badgeEn: "Fabric Care",
    badgeMl: "ഫാബ്രിക് കെയർ",
    whatsappMessageEn:
      "Hi Cleanora, I would like to enquire about Sofa & Carpet Cleaning in Kannur.",
    whatsappMessageMl:
      "നമസ്കാരം ക്ലീനോറ, സോഫ & കാർപെറ്റ് ക്ലീനിംഗ് സർവീസിനെക്കുറിച്ച് അറിയാൻ ആഗ്രഹിക്കുന്നു.",
  },
  {
    id: "packers-and-movers",
    slug: "packers-and-movers",
    nameEn: "Cleanora Packers & Movers",
    nameMl: "ക്ലീനോറ പാക്കേഴ്‌സ് & മൂവേഴ്‌സ്",
    shortDescriptionEn:
      "Safe and reliable shifting of household goods, furniture, and office items anywhere in and around Kannur.",
    shortDescriptionMl:
      "വീട്ടുപകരണങ്ങൾ, ഫർണിച്ചറുകൾ, ഓഫീസ് സാധനങ്ങൾ എന്നിവ കണ്ണൂരിലും പരിസരങ്ങളിലും സുരക്ഷിതമായി ഷിഫ്റ്റ് ചെയ്തു നൽകുന്നു.",
    detailedDescriptionEn:
      "We undertake to shift anything! Cleanora Packers & Movers provides hassle-free relocation of household goods, heavy furniture, appliances, and office essentials anywhere in and around Kannur. Our dedicated team guarantees multi-layer protective packing, cautious vehicle loading, and timely doorstep delivery with zero damage.",
    detailedDescriptionMl:
      "വീടോ ഓഫീസോ മാറാൻ ആഗ്രഹിക്കുന്നവർക്കായി കണ്ണൂരിലും സമീപ പ്രദേശങ്ങളിലും വിശ്വസ്തമായ പാക്കേഴ്‌സ് & മൂവേഴ്‌സ് സർവീസ്. സാധനങ്ങൾ സുരക്ഷിതമായി പാക്ക് ചെയ്ത് പുതിയ സ്ഥലത്ത് എത്തിച്ചു നൽകാൻ ക്ലീനോറ ടീം സദാ സജ്ജമാണ്.",
    highlightsEn: [
      "We undertake to shift household goods & furniture anywhere in & around Kannur",
      "Multi-layer bubble wrapping & scratch-proof packing for delicate items",
      "Trained loading and unloading staff with dedicated transport vehicle",
      "Doorstep pickup and punctual on-time delivery with zero damage care",
    ],
    highlightsMl: [
      "കണ്ണൂരിലും പരിസരങ്ങളിലും വീട്ടുസാധനങ്ങളും ഫർണിച്ചറുകളും സുരക്ഷിതമായി ഷിഫ്റ്റ് ചെയ്യൽ",
      "പൊട്ടുന്ന വസ്തുക്കൾക്കും ഉപകരണങ്ങൾക്കും പ്രത്യേക സംരക്ഷണ പാക്കിംഗ്",
      "പരിശീലനം ലഭിച്ച ജീവനക്കാരും പ്രത്യേക ട്രാൻസ്പോർട്ട് വാഹനവും",
      "കൃത്യസമയത്ത് പിക്കപ്പും സുരക്ഷിതമായ ഡോർസ്റ്റെപ്പ് ഡെലിവറിയും",
    ],
    checklistEn: [
      "Pre-move survey & itemized packing plan",
      "Heavy furniture dismantling, foam wrap & protective boxing",
      "Careful vehicle loading with secure transit fastening",
      "Safe destination unloading, unpack and positioning support",
    ],
    checklistMl: [
      "പ്രാഥമിക പരിശോധനയും പ്ലാനിംഗും",
      "ഫർണിച്ചറുകൾക്കും ഉപകരണങ്ങൾക്കും ഫോം റാപ്പിംഗ് പാക്കിംഗ്",
      "സുരക്ഷിതമായ ലോഡിംഗും യാത്രാ ഗതാഗതവും",
      "പുതിയ ലൊക്കേഷനിൽ സുരക്ഷിതമായ അൺലോഡിംഗ്",
    ],
    image: "/images/packers_movers.png",
    featured: true,
    badgeEn: "Shifting & Relocation",
    badgeMl: "ഷിഫ്റ്റിംഗ് സർവീസ്",
    whatsappMessageEn:
      "Hi Cleanora, I would like to enquire about Packers and Movers / Shifting service in and around Kannur.",
    whatsappMessageMl:
      "നമസ്കാരം ക്ലീനോറ, കണ്ണൂരിലെ പാക്കേഴ്‌സ് & മൂവേഴ്‌സ് / ഷിഫ്റ്റിംഗ് സർവീസിനെക്കുറിച്ച് അറിയാൻ ആഗ്രഹിക്കുന്നു.",
  },
  {
    id: "interlock-cleaning",
    slug: "interlock-cleaning",
    nameEn: "Interlock Cleaning",
    nameMl: "ഇന്റർലോക്ക് ക്ലീനിംഗ്",
    shortDescriptionEn:
      "High-pressure jet washing to eliminate slippery moss, dark algae, mud, and stains from outdoor pavers.",
    shortDescriptionMl:
      "മുറ്റത്തെ ഇന്റർലോക്കിലെ വഴുവഴുപ്പുള്ള പായലും കറുത്ത അഴുക്കും പ്രഷർ വാഷറിലൂടെ മാറ്റി പുത്തനാക്കുന്നു.",
    detailedDescriptionEn:
      "Interlock pavers and outdoor walkways quickly develop dark algae, slippery moss, and deep dirt under Kerala's climate. Cleanora utilizes high-pressure rotary surface cleaners to restore the bright, non-slip, new look of your courtyard and driveways.",
    detailedDescriptionMl:
      "മഴക്കാലത്തും മറ്റും ഇന്റർലോക്കിൽ ഉണ്ടാകുന്ന വഴുക്കലുള്ള പായലും അഴുക്കുകളും ഹൈ-പ്രഷർ ജെറ്റ് മെഷീൻ ഉപയോഗിച്ച് പോറലുകളില്ലാതെ പൂർണ്ണമായി കഴുകി കളയുന്നു.",
    highlightsEn: [
      "High-pressure rotary jet washing for instant moss & algae removal",
      "Restores vibrant original color to interlock pavers & stone paths",
      "Eliminates slippery surfaces around homes for family safety",
      "Deep washing without dislodging paver alignment",
    ],
    highlightsMl: [
      "വഴുക്കൽ ഉണ്ടാക്കുന്ന പായലുകൾ ഹൈ-പ്രഷർ വഴി നീക്കൽ",
      "ഇന്റർലോക്കിന്റെ പഴയ നിറവും ഭംഗിയും തിരിച്ചുകൊണ്ടുവരുന്നു",
      "നടപ്പാതകളിലെ വഴുക്കൽ മാറ്റി സുരക്ഷിതമാക്കുന്നു",
      "കല്ലുകൾക്ക് ഇളക്കം തട്ടാതെ ശാസ്ത്രീയ ക്ലീനിംഗ്",
    ],
    checklistEn: [
      "Debris, leaf, and loose dust clearing",
      "High-pressure surface cleaner jet wash",
      "Corner, wall-edge, and joint detailing",
      "Drainage channel rinse and surface runoff clear",
    ],
    checklistMl: [
      "പ്രാഥമിക മാലിന്യങ്ങളും പൊടിയും നീക്കൽ",
      "ഹൈ-പ്രഷർ സർഫേസ് വാഷിംഗ്",
      "മൂലകളിലെയും വശങ്ങളിലെയും ക്ലീനിംഗ്",
      "ഡ്രെയിനേജ് ശുചീകരണം",
    ],
    image: "/images/interlock.png",
    featured: true,
    badgeEn: "Outdoor Paving",
    badgeMl: "മുറ്റത്തെ ഇന്റർലോക്ക്",
    whatsappMessageEn:
      "Hi Cleanora, I would like to enquire about Interlock Cleaning service in Kannur.",
    whatsappMessageMl:
      "നമസ്കാരം ക്ലീനോറ, ഇന്റർലോക്ക് പ്രഷർ വാഷ് സർവീസിനെക്കുറിച്ച് അറിയാൻ ആഗ്രഹിക്കുന്നു.",
  },
  {
    id: "office-cleaning",
    slug: "office-cleaning",
    nameEn: "Office & Commercial Cleaning",
    nameMl: "ഓഫീസ് & സ്ഥാപനങ്ങൾ ക്ലീനിംഗ്",
    shortDescriptionEn:
      "Professional cleaning for commercial offices, workstations, executive cabins, showrooms, and clinics.",
    shortDescriptionMl:
      "ഓഫീസുകൾ, ഷോറൂമുകൾ, ക്ലിനിക്കുകൾ എന്നിവയ്ക്കുള്ള സമഗ്രമായ ക്ലീനിംഗ്.",
    detailedDescriptionEn:
      "Create an immaculate, hygienic impression for your clients and a fresh, productive environment for your staff. We provide one-time deep sanitization and periodic commercial maintenance across Kannur and Mattanur.",
    detailedDescriptionMl:
      "ഉപഭോക്താക്കൾക്ക് മികച്ച മതിപ്പും ജീവനക്കാർക്ക് ഉന്മേഷവും നൽകുന്ന അന്തരീക്ഷം സൃഷ്ടിക്കാൻ സ്ഥാപനങ്ങൾക്കായുള്ള പ്രത്യേക ഡീപ് ക്ലീനിംഗ് സർവീസ്.",
    highlightsEn: [
      "Workstation, chair & cabin surface sanitization",
      "Reception area, conference room & glass entry detailing",
      "Commercial restroom descaling & intensive disinfection",
      "Pantry & high-traffic carpet/floor mechanical scrub",
    ],
    highlightsMl: [
      "വർക്ക്സ്റ്റേഷനുകൾ, ചെയറുകൾ, ക്യാബിനുകൾ അണുവിമുക്തമാക്കൽ",
      "റിസപ്ഷൻ, കോൺഫറൻസ് റൂം, ഗ്ലാസ് ഡോറുകൾ ക്ലീനിംഗ്",
      "വാഷ്‌റൂം ഡീപ് ഡിസ്ഇൻഫെക്ഷൻ പ്രോട്ടോകോൾ",
      "പാൻട്രി, ഫ്ലോർ മെഷീൻ സ്ക്രബ്ബിംഗ്",
    ],
    checklistEn: [
      "Desk, monitor exterior & electronic surface wipe-down",
      "Conference room chairs and table deep sanitization",
      "Commercial restroom sterilization and odor treatment",
      "High-traffic hallway floor scrubbing and shine restoration",
    ],
    checklistMl: [
      "മേശകളും ഇലക്ട്രോണിക് പ്രതലങ്ങളും തുടയ്ക്കൽ",
      "മീറ്റിംഗ് റൂം കസേരകളും മേശകളും ക്ലീനിംഗ്",
      "ബാത്ത്റൂം അണുനശീകരണം",
      "ഫ്ലോർ മെഷീൻ സ്ക്രബ്ബിംഗ്",
    ],
    image: "/images/office.png",
    featured: true,
    badgeEn: "Commercial",
    badgeMl: "ഓഫീസ് & സ്ഥാപനങ്ങൾ",
    whatsappMessageEn:
      "Hi Cleanora, I would like to enquire about Office / Commercial Cleaning in Kannur.",
    whatsappMessageMl:
      "നമസ്കാരം ക്ലീനോറ, ഓഫീസ് / കൊമേഴ്സ്യൽ ക്ലീനിംഗ് സർവീസിനെക്കുറിച്ച് അറിയാൻ ആഗ്രഹിക്കുന്നു.",
  },
  {
    id: "kitchen-deep-cleaning",
    slug: "kitchen-deep-cleaning",
    nameEn: "Kitchen Deep Cleaning",
    nameMl: "അടുക്കള ഡീപ് ക്ലീനിംഗ്",
    shortDescriptionEn:
      "Intensive degreasing and sanitization of kitchen countertops, chimney filters, exhaust fans, and cabinets.",
    shortDescriptionMl:
      "ചിമ്മിനി, എക്‌സ്‌ഹോസ്റ്റ് ഫാൻ, ടൈലുകൾ, സ്ലാബുകൾ എന്നിവയിലെ എണ്ണക്കറകൾ പൂർണ്ണമായി മാറ്റുന്നു.",
    detailedDescriptionEn:
      "Kitchens accumulate heavy grease, cooking oils, and smoke film over time. Cleanora provides rigorous kitchen deep cleaning using specialized degreasing agents, leaving your cooking space hygienic, fragrant, and sparkling.",
    detailedDescriptionMl:
      "അടുക്കളകളിൽ പറ്റിപ്പിടിക്കുന്ന കടുത്ത എണ്ണക്കറകളും കരിയും നീക്കം ചെയ്യാൻ പ്രത്യേക ഡീഗ്രീസിംഗ് ലോഷനുകൾ ഉപയോഗിച്ച് അടുക്കള വെട്ടിത്തിളങ്ങുന്നതാക്കുന്നു.",
    highlightsEn: [
      "Heavy grease and sticky oil stain removal",
      "Exhaust fan, chimney filters & cooking hob detailing",
      "Kitchen cabinet exterior & handle sanitization",
      "Wall tile descaling and sink germ-free sanitization",
    ],
    highlightsMl: [
      "കടുത്ത എണ്ണക്കറകളും കരിയും പൂർണ്ണമായി നീക്കൽ",
      "ചിമ്മിനി ഫിൽട്ടറുകൾ, എക്‌സ്‌ഹോസ്റ്റ് ഫാൻ ക്ലീനിംഗ്",
      "കാബിനറ്റുകൾ തുടച്ച് തിളക്കമുള്ളതാക്കൽ",
      "സിങ്കും വാൾ ടൈലുകളും അണുവിമുക്തമാക്കൽ",
    ],
    checklistEn: [
      "Countertop and tile backsplash thorough scrubbing",
      "Sink descaling, tap polishing, and drain sanitization",
      "Cabinet exterior front cleaning and polishing",
      "Appliance exterior detailing (refrigerator, microwave, hob)",
    ],
    checklistMl: [
      "കൗണ്ടർടോപ്പും ടൈലുകളും സ്ക്രബ് ചെയ്യൽ",
      "സിങ്ക് ഡെസ്കെയിലിംഗും ടാപ്പ് പോളിഷിംഗും",
      "കാബിനറ്റ് ഫ്രണ്ടുകൾ തുടയ്ക്കൽ",
      "അപ്ലയൻസസ് എക്സ്റ്റീരിയർ ക്ലീനിംഗ്",
    ],
    image: "/images/kitchen.png",
    featured: false,
    badgeEn: "Degreasing",
    badgeMl: "എണ്ണക്കറ നീക്കൽ",
    whatsappMessageEn:
      "Hi Cleanora, I would like to enquire about Kitchen Deep Cleaning service in Kannur.",
    whatsappMessageMl:
      "നമസ്കാരം ക്ലീനോറ, കിച്ചൻ ഡീപ് ക്ലീനിംഗ് സർവീസിനെക്കുറിച്ച് അറിയാൻ ആഗ്രഹിക്കുന്നു.",
  },
  {
    id: "bathroom-deep-cleaning",
    slug: "bathroom-deep-cleaning",
    nameEn: "Bathroom Deep Cleaning",
    nameMl: "ബാത്ത്റൂം ഡീപ് ക്ലീനിംഗ്",
    shortDescriptionEn:
      "Hard water yellow stain removal, tile descaling, commode disinfection, and chrome fitting mirror polishing.",
    shortDescriptionMl:
      "ടൈലുകളിലെയും ഗ്ലാസിലെയും ഉപ്പുവെള്ളക്കറകളും മഞ്ഞപ്പാടുകളും മാറ്റി പുത്തൻ തിളക്കം നൽകുന്നു.",
    detailedDescriptionEn:
      "Hard water stains and mineral limescale are stubborn challenges in Kannur. Our bathroom deep cleaning dissolves yellow limescale, sanitizes sanitary ware, and restores bright shine to glass partitions, tiles, and chrome fixtures.",
    detailedDescriptionMl:
      "ഉപ്പുവെള്ളം കൊണ്ട് ടൈലുകളിലും ക്ലോസറ്റിലും ടാപ്പുകളിലും ഉണ്ടാകുന്ന കഠിനമായ വെള്ളപ്പാടുകളും മഞ്ഞക്കറകളും നീക്കം ചെയ്ത് ബാത്ത്റൂം തിളക്കമുള്ളതാക്കുന്നു.",
    highlightsEn: [
      "Hard water limescale and yellow stain removal",
      "Wall & floor tile scrubbing with safe descaling agents",
      "Shower cubicle, glass partition & mirror streak-free polishing",
      "Commode, basin, and drain deep sanitization",
    ],
    highlightsMl: [
      "ഉപ്പുവെള്ളക്കറകളും മഞ്ഞപ്പാടുകളും നീക്കൽ",
      "ടൈലുകൾക്ക് സുരക്ഷിതമായ ഡെസ്കെയിലിംഗ് സ്ക്രബ്ബിംഗ്",
      "ഗ്ലാസ് പാർട്ടീഷനുകളും ടാപ്പുകളും തിളക്കമുള്ളതാക്കൽ",
      "ക്ലോസറ്റും വാഷ് ബേസിനും അണുവിമുക്തമാക്കൽ",
    ],
    checklistEn: [
      "Acid-safe descaling treatment for bathroom tiles",
      "Disinfection of toilet bowls, seats, and flushing hardware",
      "Chrome tap and showerhead descaling & shine polish",
      "Grout scrubbing and floor sanitization",
    ],
    checklistMl: [
      "ടൈൽ ഡെസ്കെയിലിംഗ് ട്രീറ്റ്‌മെന്റ്",
      "ടോയ്‌ലറ്റ് ബൗൾ അണുനശീകരണം",
      "ടാപ്പുകളും ഷവറുകളും പോളിഷ് ചെയ്യൽ",
      "ഗ്രൗട്ട് ക്ലീനിംഗും ഫ്ലോർ സാനിറ്റൈസേഷനും",
    ],
    image: "/images/bathroom.png",
    featured: false,
    badgeEn: "Descaling",
    badgeMl: "ഉപ്പുവെള്ളക്കറ നീക്കൽ",
    whatsappMessageEn:
      "Hi Cleanora, I would like to enquire about Bathroom Deep Cleaning service.",
    whatsappMessageMl:
      "നമസ്കാരം ക്ലീനോറ, ബാത്ത്റൂം ഡീപ് ക്ലീനിംഗ് സർവീസിനെക്കുറിച്ച് അറിയാൻ ആഗ്രഹിക്കുന്നു.",
  },
];
