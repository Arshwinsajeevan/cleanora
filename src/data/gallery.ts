export interface GalleryItem {
  id: string;
  title: string;
  category: "Kitchen" | "Bathroom" | "Living" | "Sofa" | "Floor" | "Commercial" | "Full Home";
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
  status: "Inaugurating Next Week",
  badge: "Grand Opening Soon",
  title: "Starting Our Journey in Kannur",
  subtitle:
    "Cleanora is officially launching its professional cleaning services across Kannur next week! We are excited to embark on this journey to deliver spotless living and workspaces for families and businesses in Kerala.",
  offer: "Exclusive Inaugural Week Slots & Priority Booking Open",
};

export const galleryItems: GalleryItem[] = [
  {
    id: "kitchen-demo-1",
    title: "Kitchen Chimney & Hob Deep Degreasing Benchmark",
    category: "Kitchen",
    type: "before-after",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    beforeImageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    afterImageUrl: "https://images.unsplash.com/photo-1556911073-38141963c9e0?q=80&w=800&auto=format&fit=crop",
    location: "Kannur Launch Preview",
    description: "Standard of degreasing and carbon clearance we deliver for modular kitchens and chimneys.",
    inauguralHighlight: "Inaugural Service Ready",
  },
  {
    id: "bathroom-demo-1",
    title: "Hard Water Descaling & Tile Rejuvenation Standard",
    category: "Bathroom",
    type: "before-after",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    beforeImageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    afterImageUrl: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
    location: "Kannur Launch Preview",
    description: "Our descaling protocol eliminates stubborn mineral crusts and sanitizes all fittings.",
    inauguralHighlight: "Inaugural Service Ready",
  },
  {
    id: "living-prep-1",
    title: "Living & Villa Deep Detailing Setup",
    category: "Living",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    location: "Kannur Launch Preview",
    description: "Comprehensive dusting, single-disc floor scrubbing, and glass partition cleaning setup.",
    inauguralHighlight: "Pre-Booking Open",
  },
  {
    id: "sofa-shampoo-demo",
    title: "Upholstery & Fabric Extraction Standard",
    category: "Sofa",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    location: "Kannur Launch Preview",
    description: "High-suction foam extraction lifting embedded dirt and allergens from fabric furniture.",
    inauguralHighlight: "Pre-Booking Open",
  },
  {
    id: "floor-machine-demo",
    title: "Rotary Single-Disc Floor Scrubbing Gear",
    category: "Floor",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=800&auto=format&fit=crop",
    location: "Kannur Launch Preview",
    description: "Industrial grade floor machines ready for tiles, marble, and granite restoration.",
    inauguralHighlight: "Equipment Ready",
  },
  {
    id: "commercial-readiness",
    title: "Office & Clinic Sanitization Protocol",
    category: "Commercial",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    location: "Kannur Launch Preview",
    description: "Commercial deep cleaning protocols for clinics, showrooms, and corporate suites in Kannur.",
    inauguralHighlight: "Pre-Booking Open",
  },
];
