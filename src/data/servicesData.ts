export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: "UtensilsCrossed" | "Layers" | "Box" | "Sparkles" | "Compass" | "Hammer";
  image: string;
  deliverables: string[];
  tagline: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "modular-kitchen",
    title: "Modular Kitchens",
    tagline: "Ergonomics Meets Culinary Elegance",
    shortDesc: "Custom precision-engineered kitchens featuring BLUM & Häfele fittings, acrylic & PU finishes, and anti-scratch quartz surfaces.",
    fullDesc:
      "Transform cooking into an effortless luxury experience. Our modular kitchens are designed with optimal golden triangle ergonomics, hydraulic lift-ups, corner carousels, and premium water-resistant HDHMR substrates built to last a lifetime.",
    iconName: "UtensilsCrossed",
    image: "/projects/project_modular_kitchen_dining.jpg",
    deliverables: [
      "L-Shape, U-Shape, Island & Parallel Layouts",
      "German BLUM / Häfele Soft-Close Hardware",
      "Scratch & Heat Resistant Countertops",
      "10-Year Hardware & Waterproof Warranty",
    ],
  },
  {
    id: "wardrobe-design",
    title: "Wardrobe Design",
    tagline: "Bespoke Storage with Haute-Couture Styling",
    shortDesc: "Floor-to-ceiling walk-in closets, sliding tinted glass systems, geometric lattice panels, and intelligent automated sensory lighting.",
    fullDesc:
      "Maximize storage while maintaining an uncluttered, opulent aesthetic. We craft customized walk-in wardrobes, lacquered glass sliding systems, dedicated jewelry drawers, and built-in vanity stations tailored to your daily rhythm.",
    iconName: "Layers",
    image: "/projects/project_bedroom_green_wardrobe.jpg",
    deliverables: [
      "Floor-to-Ceiling Max Storage Solutions",
      "Geometric Lattice & Lacquered Glass Shutters",
      "Automated Motion-Sensor LED Rails",
      "Custom Accessory & Watch Organizers",
    ],
  },
  {
    id: "3d-interior-design",
    title: "3D Interior Design",
    tagline: "Photorealistic Virtual Immersion Before You Build",
    shortDesc: "High-definition 3D rendering, virtual 360° walkthroughs, and accurate material moodboards for complete design confidence.",
    fullDesc:
      "Eliminate guesswork with photorealistic 3D architectural renders. Walk through your future home in virtual reality, test different color palettes, lighting temperatures, and material finishes before a single nail is hammered.",
    iconName: "Box",
    image: "/projects/project_bedroom_arch_lighting.jpg",
    deliverables: [
      "Ultra-HD 4K Photorealistic Renders",
      "360° Virtual Reality Room Walkthroughs",
      "Accurate Lighting Simulation & Lux Levels",
      "Comprehensive Material & Texture Swatches",
    ],
  },
  {
    id: "false-ceiling",
    title: "False Ceiling & Lighting",
    tagline: "Sculpted Architectural Ceilings & Mood Lighting",
    shortDesc: "Cove lighting, gypsum multi-tier designs, magnetic track lights, geometric channels, and smart automation.",
    fullDesc:
      "Ceilings are the fifth wall of your home. We engineer sophisticated false ceilings with Saint-Gobain Gyproc plasterboards, recessed architectural magnetic tracks, warm indirect coves, and acoustic treatments to create dramatic ambiance.",
    iconName: "Sparkles",
    image: "/projects/project_gold_showroom_ceiling.jpg",
    deliverables: [
      "Zero-Crack Saint-Gobain Gypsum Systems",
      "Magnetic Track & Architectural Spotlights",
      "Smart RGBW & Dimmable Ambiance Coves",
      "Wooden Baffles & Acoustic Suspensions",
    ],
  },
  {
    id: "turnkey-projects",
    title: "Turnkey Projects",
    tagline: "End-to-End Stress-Free Home Transformation",
    shortDesc: "Complete concept-to-handover execution including civil work, electricals, plumbing, custom millwork, and final styling.",
    fullDesc:
      "Sit back and watch your dream space come to life. Decor 4 Adore handles everything: procurement, civil alterations, electrical schematics, false ceilings, furniture manufacturing, and final decor styling under a dedicated project manager.",
    iconName: "Hammer",
    image: "/projects/project_lounge_salon1.jpg",
    deliverables: [
      "Dedicated Site Engineer & Daily Progress Updates",
      "Strict Timeline Adherence with Penalty Clause",
      "Transparent Milestone-Based Pricing",
      "Deep Cleaning & Post-Handover Sanitization",
    ],
  },
  {
    id: "vaastu-solutions",
    title: "Vaastu Solutions",
    tagline: "Harmonious Energy Flows & Scientific Spatial Balance",
    shortDesc: "Scientific Vaastu planning integrated seamlessly into modern luxury aesthetics without sacrificing contemporary appeal.",
    fullDesc:
      "Bring positivity, abundance, and peace into your home. Our certified Vaastu consultants work in tandem with our architects to optimize entry orientations, kitchen fire zones, master bedroom stability quadrants, and water flow elements.",
    iconName: "Compass",
    image: "/projects/project_bedroom_artistic_cove.jpg",
    deliverables: [
      "Scientific 16-Zone Energy Mapping",
      "Non-Destructive Vaastu Corrections",
      "Color Therapy & Elemental Alignment",
      "Entrance & Sacred Zone Spatial Balancing",
    ],
  },
];
