"use client";

import Image from "next/image";
import { Star, Award, CheckCircle, ShieldCheck, Sparkles, MapPin, HeartHandshake, Layers } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      title: "Custom Spatial Crafting",
      desc: "Every corner is tailored to your habits, maximizing usable square footage with contemporary aesthetics.",
      icon: Layers,
    },
    {
      title: "4K 3D Photorealistic Previews",
      desc: "Walk through your renovated home in high-fidelity 3D before committing to materials or civil work.",
      icon: Sparkles,
    },
    {
      title: "Turnkey Fixed-Timeline Execution",
      desc: "Single-point project management with strict milestone deliveries, factory finishing, and zero budget creep.",
      icon: ShieldCheck,
    },
    {
      title: "Vaastu-Compliant Harmonization",
      desc: "Scientific energy balancing integrated subtly into modern palettes, textures, and spatial layouts.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#120E10] border-y border-white/5 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF5E00]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D900FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column with Double Imagery & Badge */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] bg-[#1a1417]">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                  alt="Decor 4 Adore Luxury Architectural Design"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0D] via-transparent to-black/20" />
                
                {/* Location Pill */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0E0C0D]/80 backdrop-blur-md border border-white/10 text-xs text-[#EAE0D7]">
                  <MapPin className="w-3.5 h-3.5 text-[#FF5E00]" />
                  <span>Fraser Road, Patna</span>
                </div>
              </div>

              {/* Prominent 4.6-Star Customer Rating Badge */}
              <div className="absolute -bottom-8 -right-4 sm:-right-6 p-5 rounded-2xl bg-[#1A1418]/95 backdrop-blur-xl border border-amber-500/20 shadow-2xl max-w-[260px] brand-gradient-border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl brand-gradient-bg text-white shadow-md shadow-orange-500/30">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-white leading-none">4.6 / 5.0</div>
                    <div className="flex items-center gap-0.5 text-[#FFC700] mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FFC700] text-[#FFC700]" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-xs font-semibold text-[#E9DDD2] mb-0.5">Top-Rated Studio</div>
                <p className="text-[11px] text-[#B8A79B] leading-tight">
                  Based on verified customer reviews for home renovations & turnkey spatial design.
                </p>
              </div>

              {/* Secondary Texture Preview Box */}
              <div className="hidden sm:block absolute -top-6 -left-6 p-4 rounded-2xl bg-[#181316]/95 backdrop-blur-xl border border-white/10 shadow-xl max-w-[170px]">
                <span className="text-[11px] uppercase tracking-wider text-[#FFC700] font-bold block mb-1">
                  Craftsmanship
                </span>
                <span className="text-xs font-medium text-[#DCD0C5]">
                  Premium Italian Acrylics & Veneers
                </span>
              </div>
            </div>
          </div>

          {/* Right Narrative Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F191D] border border-white/10 text-xs font-semibold text-[#FFC700] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Decor 4 Adore</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              We Don&apos;t Just Decorate Rooms, We{" "}
              <span className="font-serif italic font-normal brand-gradient-text">
                Incarnate Your Imagination.
              </span>
            </h2>

            <p className="text-[#D8C7BA] text-base sm:text-lg font-light leading-relaxed mb-6">
              <strong className="text-white font-semibold">Decor 4 Adore</strong> is a full-service, high-end interior design and spatial renovation studio based at Fraser Road, Patna. We specialize in transforming raw residential flats, expansive villas, and commercial spaces into bespoke sanctuaries of elegance, warmth, and enduring utility.
            </p>

            <p className="text-[#BFAFA3] text-sm sm:text-base font-light leading-relaxed mb-8">
              Whether you need an ergonomic modular kitchen with soft-close German hardware, luxury walk-in wardrobes, sculptural false ceilings with integrated smart lighting, or a complete turnkey home transformation, our passionate team delivers with obsessive attention to detail.
            </p>

            {/* 4 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-2xl bg-[#171215] border border-white/5 hover:border-white/15 transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2 rounded-xl bg-[#231A20] text-[#FF5E00] group-hover:text-[#FFC700] transition-colors shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white mb-1">{pillar.title}</h3>
                        <p className="text-xs text-[#B5A599] leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold brand-gradient-text">120+</div>
                <div className="text-xs text-[#C5B4A7] mt-0.5">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">4.6★</div>
                <div className="text-xs text-[#C5B4A7] mt-0.5">Google Rating</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FFC700]">24 Hours</div>
                <div className="text-xs text-[#C5B4A7] mt-0.5">Studio Support</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
