export interface PortfolioItem {
  id: string;
  title: string;
  category: "all" | "kitchen" | "living" | "bedroom" | "ceiling" | "wardrobe" | "turnkey";
  categoryLabel: string;
  location: string;
  image: string;
  aspectRatio: "portrait" | "landscape" | "square" | "tall";
  description: string;
  highlights: string[];
}

/**
 * DYNAMIC PORTFOLIO DATA
 * Clients can easily replace the image URLs, titles, and descriptions below.
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Minimalist Italian Modular Kitchen",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    location: "Bailey Road, Patna",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    description: "Matte anthracite handleless acrylic cabinetry with quartz waterfall island and concealed warm LED profile lighting.",
    highlights: ["Soft-close BLUM hardware", "Quartz Calacatta Island", "Integrated Bosch Appliances"],
  },
  {
    id: "p2",
    title: "Warm Contemporary Living Lounge",
    category: "living",
    categoryLabel: "Living Room",
    location: "Fraser Road, Patna",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "portrait",
    description: "Double-height living space featuring bespoke fluted wooden acoustic panelling, curved bouclé sofas, and warm magnetic track illumination.",
    highlights: ["Acoustic Wall Panels", "Ambient Smart Lighting", "Bespoke Italian Furniture"],
  },
  {
    id: "p3",
    title: "Master Suite with Walk-In Wardrobe",
    category: "bedroom",
    categoryLabel: "Master Bedroom",
    location: "Kankarbagh, Patna",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    description: "Serene master bedroom in warm taupe and espresso palettes with integrated headboard backlighting and plush velvet upholstery.",
    highlights: ["Integrated Sensory Lighting", "Tinted Glass Wardrobe", "Acoustic Wall Paneling"],
  },
  {
    id: "p4",
    title: "Architectural Cove False Ceiling & Chandelier",
    category: "ceiling",
    categoryLabel: "False Ceiling",
    location: "Patliputra Colony, Patna",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
    description: "Seamless gypsum multi-tier false ceiling design with concealed RGBW cove lighting, magnetic track lights, and custom brass chandelier.",
    highlights: ["Saint-Gobain Gyproc System", "Smart Dimmable Lighting", "Zero-Shadow Architectural Design"],
  },
  {
    id: "p5",
    title: "Turnkey Luxury Villa Residence",
    category: "turnkey",
    categoryLabel: "Turnkey Project",
    location: "Danapur Cantt, Patna",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
    description: "Complete end-to-end interior execution for a 4BHK duplex villa, blending contemporary geometry with Vaastu-harmonized spaces.",
    highlights: ["100% Concept-to-Handover", "Italian Marble Flooring", "Custom Joinery & Millwork"],
  },
  {
    id: "p6",
    title: "Floor-to-Ceiling Smoked Glass Wardrobe",
    category: "wardrobe",
    categoryLabel: "Wardrobe Design",
    location: "Boring Road, Patna",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "portrait",
    description: "Custom floor-to-ceiling wardrobe featuring anodized bronze aluminum framing, smoked fluted glass, and automated motion-sensor LED rails.",
    highlights: ["Häfele Soft-Slide Rails", "Automated Interior Lights", "Dedicated Accessory Island"],
  },
  {
    id: "p7",
    title: "Parallel Chef's Kitchen with Breakfast Counter",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    location: "Rajendra Nagar, Patna",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
    description: "Ergonomic parallel kitchen with anti-fingerprint slate laminate, composite granite countertops, and corner carousel optimizers.",
    highlights: ["Hydraulic Lift-Up Cabinets", "Anti-Scratch Nano Counter", "Vaastu Fire-Zone Placement"],
  },
  {
    id: "p8",
    title: "Warm Amber Lounge & Bar Spatial Design",
    category: "living",
    categoryLabel: "Living Room",
    location: "Exhibition Road, Patna",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    description: "Warm espresso interior with amber back-lit onyx bar, custom leather seating, and custom brass partition screens.",
    highlights: ["Back-lit Natural Onyx", "Custom Metal Partitions", "Soundproof Acoustic Ceilings"],
  },
  {
    id: "p9",
    title: "Geometric Wooden Baffle False Ceiling",
    category: "ceiling",
    categoryLabel: "False Ceiling",
    location: "Ashiana Nagar, Patna",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
    description: "Linear natural veneer wooden baffles integrated with directional spotlighting and perimeter negative cove details.",
    highlights: ["Natural Teak Veneer", "Integrated HVAC Diffusers", "Acoustic Insulation"],
  },
];
