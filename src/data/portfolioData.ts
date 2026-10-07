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
 * 100% Real Decor 4 Adore Project Photography
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Dual-Tone Contemporary Modular Kitchen & Dining",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    location: "Fraser Road, Patna",
    image: "/projects/project_modular_kitchen_dining.jpg",
    aspectRatio: "landscape",
    description: "Handleless matte blush & American walnut dual-tone cabinetry with marble backsplash, integrated appliances, and Sputnik burst chandelier.",
    highlights: ["Anti-Fingerprint Acrylic Shutters", "Integrated Wall Microwave & Oven", "Concealed Warm Under-Cabinet Lighting"],
  },
  {
    id: "p2",
    title: "Master Bedroom with Geometric Lattice Wardrobe",
    category: "bedroom",
    categoryLabel: "Master Bedroom",
    location: "Bailey Road, Patna",
    image: "/projects/project_bedroom_green_wardrobe.jpg",
    aspectRatio: "landscape",
    description: "Bespoke sage-green fluted headboard wall with integrated LED profiles, designer sliding wardrobe with geometric lattice panels, and suspended bedside globe.",
    highlights: ["Sliding Glass Lattice Wardrobe", "Integrated Wall LED Strips", "Fluted Sage Upholstered Backboard"],
  },
  {
    id: "p3",
    title: "Modern Charcoal Fluted Lounge & Media Suite",
    category: "living",
    categoryLabel: "Living Room",
    location: "Kankarbagh, Patna",
    image: "/projects/project_living_charcoal_fluted.jpg",
    aspectRatio: "landscape",
    description: "Full-height geometric fluted charcoal feature wall with low-profile modular media console, plush powder blue sectional sofa, and brass chandelier.",
    highlights: ["Full-Height Fluted Acoustic Wall", "Custom Low-Profile Media Unit", "Multi-Tier Gypsum False Ceiling"],
  },
  {
    id: "p4",
    title: "Warm Curvilinear Living Lounge & Reception",
    category: "living",
    categoryLabel: "Living Room",
    location: "Fraser Road, Patna",
    image: "/projects/project_lounge_salon1.jpg",
    aspectRatio: "tall",
    description: "Curvilinear multi-tier cove false ceiling with ambient ribbon lighting, curved dusty-rose velvet sofas, and brushed brass circular architectural signage.",
    highlights: ["Curvilinear Illuminated Ceiling", "Bespoke Curved Velvet Sofas", "Brushed Brass Fluted Tables"],
  },
  {
    id: "p5",
    title: "Contemporary Suite with Arch-Backlit Headboard",
    category: "bedroom",
    categoryLabel: "Master Bedroom",
    location: "Patliputra Colony, Patna",
    image: "/projects/project_bedroom_arch_lighting.jpg",
    aspectRatio: "tall",
    description: "Architectural arched fluted wooden headboard with concealed 3000K warm backlighting, integrated study/vanity station, and perimeter ceiling cove.",
    highlights: ["Backlit Arch Wall Paneling", "Built-In Dressing Vanity", "Warm Perimeter LED Cove"],
  },
  {
    id: "p6",
    title: "Minimalist Master Suite with Sculptural Wall Art",
    category: "bedroom",
    categoryLabel: "Master Bedroom",
    location: "Danapur Cantt, Patna",
    image: "/projects/project_bedroom_artistic_cove.jpg",
    aspectRatio: "portrait",
    description: "Full-wall linear fluted paneling with layered illuminated arch art installations, built-in storage bed with horizontal pull-outs, and matching floating nightstands.",
    highlights: ["Illuminated Arch Wall Sconces", "Integrated Pull-Out Storage Bed", "Natural Teak & Linen Finishes"],
  },
  {
    id: "p7",
    title: "Geometric Diamond False Ceiling & Marble Showcase",
    category: "ceiling",
    categoryLabel: "False Ceiling",
    location: "Exhibition Road, Patna",
    image: "/projects/project_luxury_showroom_dark.jpg",
    aspectRatio: "landscape",
    description: "Angular geometric false ceiling channels with magnetic track lighting, textured bookmatched stone counter, and recessed display vitrines.",
    highlights: ["Angular Geometric Cove Channels", "Bookmatched Stone Counter", "Anti-Glare Spotlights"],
  },
  {
    id: "p8",
    title: "Backlit Arched Vanity & Custom Dressing Suite",
    category: "wardrobe",
    categoryLabel: "Wardrobe Design",
    location: "Kankarbagh, Patna",
    image: "/projects/project_vanity_mirrors.jpg",
    aspectRatio: "tall",
    description: "Floor-to-ceiling illuminated arched dressing mirrors with fluted terracotta millwork, rose-gold styling chairs, and integrated acoustic cove ceilings.",
    highlights: ["Smart-Touch Illuminated Arches", "Fluted Wall Joinery", "High-Definition Lighting"],
  },
  {
    id: "p9",
    title: "Warm Amber Architectural Ceiling & Showroom",
    category: "ceiling",
    categoryLabel: "False Ceiling",
    location: "Patliputra Colony, Patna",
    image: "/projects/project_gold_showroom_ceiling.jpg",
    aspectRatio: "landscape",
    description: "Multi-layered intersecting coffered ceiling with continuous warm LED profiles, crystal chandeliers, and polished Italian marble flooring.",
    highlights: ["Intersecting Geometric Gypsum Coves", "Integrated Crystal Chandeliers", "3000K Warm Ambient Illumination"],
  },
  {
    id: "p10",
    title: "Bespoke Luxury Spa & Wellness Lounge",
    category: "turnkey",
    categoryLabel: "Turnkey Project",
    location: "Bailey Road, Patna",
    image: "/projects/project_spa_seating.jpg",
    aspectRatio: "tall",
    description: "Illuminated architectural archways with backlit velvet wingback seating, Italian marble vanity pedestals, and perimeter under-glow floor coves.",
    highlights: ["Backlit Architectural Wall Arches", "Italian Marble Step Pedestals", "Sensory Warm LED Lighting"],
  },
  {
    id: "p11",
    title: "Grand Marble Living Lounge & Gold Accent Sconces",
    category: "living",
    categoryLabel: "Living Room",
    location: "Boring Road, Patna",
    image: "/projects/project_living_marble_lounge.jpg",
    aspectRatio: "tall",
    description: "Floor-to-ceiling Italian marble feature wall with vertical warm gold LED lighting, bespoke white & charcoal entertainment console, geometric false ceiling, and plush grey velvet sectional suite.",
    highlights: ["Italian Bookmatched Marble Wall Paneling", "Vertical Warm Gold Profile Accents", "Bespoke Low-Profile Entertainment Unit", "Integrated Linear False Ceiling Lighting"],
  },
  {
    id: "p12",
    title: "Minimalist Media Suite with Illuminated Vitrine",
    category: "living",
    categoryLabel: "Media & Living Room",
    location: "Kankarbagh, Patna",
    image: "/projects/project_living_media_vitrine.jpg",
    aspectRatio: "tall",
    description: "Architectural TV wall with vertical warm fluting, concealed bottom cove ambient glow, floating matte console, and full-height illuminated glass display vitrine with curated styling.",
    highlights: ["Backlit Glass Display Vitrine", "Warm Concealed Floor & Cove Lighting", "Acoustic Vertical Fluted Accent Paneling", "Floating Minimalist Storage Credenza"],
  },
  {
    id: "p13",
    title: "High-Gloss Champagne U-Shaped Modular Kitchen",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    location: "Bailey Road, Patna",
    image: "/projects/project_modular_kitchen_ushape.jpg",
    aspectRatio: "landscape",
    description: "Ergonomic U-shaped modular kitchen featuring high-gloss champagne acrylic shutters, integrated under-cabinet warm task lighting, quartz countertops, and soft-close tandem pull-outs.",
    highlights: ["Anti-Fingerprint Champagne Acrylic Shutters", "Concealed 3000K Warm Under-Cabinet LEDs", "Ergonomic U-Shaped Golden Triangle Layout", "Heavy-Duty Soft-Close Tandem Hardware"],
  },
];

