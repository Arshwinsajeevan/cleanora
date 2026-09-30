export interface GalleryItem {
  id: string;
  title: string;
  category: "Kitchen" | "Bathroom" | "Living" | "Sofa" | "Floor" | "Commercial" | "Full Home" | "Relocation";
  type: "image" | "before-after" | "video";
  imageUrl: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  videoPoster?: string;
  videoUrl?: string;
  location: string;
  description: string;
  inauguralHighlight?: string;
}

export const inaugurationInfo = {
  status: "Now Open & Serving Kannur",
  badge: "Malabar Plaza, Mattanur",
  title: "Serving Families & Businesses Across Kannur",
  subtitle:
    "Cleanora is now open at Malabar Plaza, Mattanur! We deliver spotless living and workspaces for families and businesses across Kannur with modern equipment and prompt scheduling.",
  offer: "Direct Booking via WhatsApp & Same-Day Estimates Available",
};

export const galleryItems: GalleryItem[] = [
  {
    id: "kitchen-demo-1",
    title: "Kitchen Chimney & Hob Deep Degreasing Benchmark",
    category: "Kitchen",
    type: "before-after",
    imageUrl: "/images/kitchen_beforeafter.png",
    beforeImageUrl: "/images/kitchen_beforeafter.png",
    afterImageUrl: "/images/kitchen.png",
    location: "Mattanur, Kannur",
    description: "Standard of degreasing and carbon clearance we deliver for modular kitchens and chimneys.",
    inauguralHighlight: "Verified Result",
  },
  {
    id: "bathroom-demo-1",
    title: "Hard Water Descaling & Tile Rejuvenation Standard",
    category: "Bathroom",
    type: "before-after",
    imageUrl: "/images/batroom_beforeafter.png",
    beforeImageUrl: "/images/batroom_beforeafter.png",
    afterImageUrl: "/images/bathroom.png",
    location: "Mattanur, Kannur",
    description: "Our descaling protocol eliminates stubborn mineral crusts and sanitizes all fittings.",
    inauguralHighlight: "Verified Result",
  },
  {
    id: "interlock-demo-1",
    title: "Outdoor Interlock & Paving Restoration",
    category: "Floor",
    type: "before-after",
    imageUrl: "/images/interlock_beforeafter.png",
    beforeImageUrl: "/images/interlock_beforeafter.png",
    afterImageUrl: "/images/interlock.png",
    location: "Mattanur, Kannur",
    description: "High-pressure washing eliminating moss, algae, and deep mud stains from walkways.",
    inauguralHighlight: "Verified Result",
  },
  {
    id: "house-cleaning-1",
    title: "Full Villa & House Deep Cleaning",
    category: "Full Home",
    type: "image",
    imageUrl: "/images/housecleaning.png",
    location: "Kannur District",
    description: "Comprehensive dusting, window polishing, woodwork cleaning, and floor restoration.",
    inauguralHighlight: "Active Service",
  },
  {
    id: "packers-movers-1",
    title: "Packers & Movers Shifting Transport",
    category: "Relocation",
    type: "image",
    imageUrl: "/images/packers_movers.png",
    location: "Malabar Plaza, Mattanur",
    description: "Dedicated transport vehicle, multi-layer packing, and trained loading team for safe moves.",
    inauguralHighlight: "Active Service",
  },
  {
    id: "watertank-1",
    title: "Overhead & Sump Water Tank Sanitization",
    category: "Full Home",
    type: "image",
    imageUrl: "/images/watertank.png",
    location: "Mattanur & Kannur",
    description: "High pressure slurry extraction and antibacterial sanitization for pure, hygienic water.",
    inauguralHighlight: "Active Service",
  },
  {
    id: "sofa-shampoo-demo",
    title: "Upholstery & Fabric Sofa Deep Extraction",
    category: "Sofa",
    type: "image",
    imageUrl: "/images/sofa.png",
    location: "Mattanur, Kannur",
    description: "Deep foam extraction lifting embedded dirt, oil marks, and allergens from fabric furniture.",
    inauguralHighlight: "Active Service",
  },
  {
    id: "solar-cleaning-1",
    title: "Rooftop Solar Panel Efficiency Cleaning",
    category: "Commercial",
    type: "image",
    imageUrl: "/images/solar.png",
    location: "Kannur District",
    description: "Soft washing removing solar grime and restoring maximum power generation.",
    inauguralHighlight: "Active Service",
  },
  {
    id: "machinery-gear-1",
    title: "Professional Equipment Fleet",
    category: "Commercial",
    type: "image",
    imageUrl: "/images/equipments.png",
    location: "Malabar Plaza, Mattanur",
    description: "Modern professional cleaning machinery and high-grade tools.",
    inauguralHighlight: "Active Service",
  },
];
