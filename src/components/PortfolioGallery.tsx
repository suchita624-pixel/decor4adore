"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioItems, PortfolioItem } from "@/data/portfolioData";
import {
  Sparkles,
  MapPin,
  Maximize2,
  X,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Layers,
} from "lucide-react";

interface PortfolioGalleryProps {
  onOpenConsultation: () => void;
}

export default function PortfolioGallery({ onOpenConsultation }: PortfolioGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "kitchen", label: "Modular Kitchens" },
    { id: "living", label: "Living Rooms" },
    { id: "bedroom", label: "Master Suites" },
    { id: "ceiling", label: "False Ceiling & Lights" },
    { id: "wardrobe", label: "Wardrobes" },
    { id: "turnkey", label: "Turnkey Villas" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 bg-[#0E0C0D] overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D900FF]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#FF5E00]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1619] border border-white/10 text-xs font-semibold text-[#FFC700] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio & Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Curated Architectural{" "}
            <span className="font-serif italic font-normal brand-gradient-text">
              Masterpieces
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#C7B7AA] font-light leading-relaxed">
            Explore our recently completed residential projects across Patna. Click any project to view high-resolution details and material specifications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "brand-gradient-bg text-white shadow-lg shadow-orange-500/25 scale-105"
                  : "bg-[#181316] text-[#C4B3A5] hover:text-white hover:bg-[#231B20] border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Masonry / Dynamic Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-[#171215] border border-white/10 cursor-pointer hover:border-[#FF5E00]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/15"
            >
              {/* Aspect Ratio Container */}
              <div
                className={`relative w-full overflow-hidden bg-[#1D171B] ${
                  item.aspectRatio === "tall"
                    ? "aspect-[3/4]"
                    : item.aspectRatio === "portrait"
                    ? "aspect-[4/5]"
                    : item.aspectRatio === "square"
                    ? "aspect-square"
                    : "aspect-[16/11]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 brightness-[0.88] group-hover:brightness-100"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0D] via-[#0E0C0D]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#0E0C0D]/85 backdrop-blur-md text-[11px] font-semibold text-[#FFC700] border border-white/10">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Top Expand Icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-[#0E0C0D]/85 backdrop-blur-md text-white/80 group-hover:text-white group-hover:bg-[#FF5E00] transition-colors border border-white/10 opacity-0 group-hover:opacity-100 duration-200">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Information */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 transition-transform duration-300">
                  <div className="flex items-center gap-1.5 text-xs text-[#D8C7B9] mb-1.5">
                    <MapPin className="w-3 h-3 text-[#FF5E00]" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#FFC700] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#BBAA9D] line-clamp-2 font-light opacity-90 group-hover:opacity-100">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#A8978A] font-light">
            💡 Showing {filteredItems.length} curated design examples. Have specific floor plan requirements?{" "}
            <button
              onClick={onOpenConsultation}
              className="text-[#FFC700] font-semibold underline underline-offset-4 hover:text-white"
            >
              Request Custom 3D Moodboards
            </button>
          </p>
        </div>

      </div>

      {/* Full Resolution Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-4xl rounded-3xl bg-[#161214] border border-white/15 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col lg:flex-row">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors border border-white/15"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Large Image View */}
            <div className="relative w-full lg:w-3/5 h-72 sm:h-96 lg:h-auto bg-black">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#0E0C0D]/90 backdrop-blur-md text-xs font-semibold text-[#FFC700] border border-white/10">
                  {activeItem.categoryLabel}
                </span>
              </div>
            </div>

            {/* Right Project Details */}
            <div className="w-full lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#161214]">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#D8C7B9] mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#FF5E00]" />
                  <span>{activeItem.location}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-3">
                  {activeItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#CBB9AC] font-light leading-relaxed mb-6">
                  {activeItem.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-[#FFC700] font-bold mb-3">
                    Project Specifications
                  </h4>
                  <div className="space-y-2">
                    {activeItem.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#E3D6CA]">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5E00] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-2.5 mt-4">
                <a
                  href={`https://wa.me/917541822342?text=Hello%20Decor%204%20Adore,%20I%20am%20interested%20in%20a%20similar%20design%20to%20your%20portfolio%20project:%20${encodeURIComponent(
                    activeItem.title
                  )}%20(${activeItem.location}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] font-semibold text-xs flex items-center justify-center gap-2 border border-[#25D366]/30 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire About This Design on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setActiveItem(null);
                    onOpenConsultation();
                  }}
                  className="w-full py-2.5 rounded-full brand-gradient-bg text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book In-Person Consultation</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
