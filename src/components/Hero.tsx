"use client";

import Image from "next/image";
import { Star, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Clock, Award, Compass } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Immersive Background Image with Warm Ambient Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/projects/project_lounge_salon1.jpg"
          alt="Warm Ambient Luxury Living Lounge by Decor 4 Adore"
          fill
          priority
          className="object-cover object-center brightness-[0.38] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Dark Charcoal / Warm Espresso Gradient Filters */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0D] via-[#0E0C0D]/70 to-[#0E0C0D]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0E0C0D]/60 to-[#0E0C0D]" />
        
        {/* Warm Ambient Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5E00]/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#D900FF]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-[#FFC700]/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Rating Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1619]/90 border border-white/10 backdrop-blur-md shadow-xl mb-6">
              <div className="flex items-center text-[#FFC700]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FFC700] text-[#FFC700]" />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#F4ECE4]">
                <strong className="text-white">4.6★ Rated</strong> on Google Reviews
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/40"></span>
              <span className="hidden sm:inline-block text-xs text-[#D8C6B8]">Patna, Bihar</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-3">
              Decor <span className="brand-gradient-text">4</span> Adore
            </h1>

            {/* Tagline in Stylish Italic Serif */}
            <div className="mb-6">
              <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F7D8B5] font-normal tracking-wide">
                “Incarnate Your Imagination”
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-[#D8C7BA] max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-8">
              Patna’s premier interior architecture studio crafting soulful living spaces, precision modular kitchens, customized wardrobes, and complete turnkey transformations tailored to your lifestyle.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-full font-bold text-base text-white shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="absolute inset-0 brand-gradient-bg"></span>
                <span className="relative flex items-center justify-center gap-2">
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>

              <a
                href="#portfolio"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#1E181B]/80 hover:bg-[#2A2126] text-sm font-semibold text-[#EFE5DC] border border-white/10 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 hover:border-white/20"
              >
                <span>Explore Portfolio</span>
              </a>

              <a
                href="#calculator"
                className="w-full sm:w-auto px-5 py-4 rounded-full bg-transparent hover:bg-white/5 text-xs sm:text-sm font-medium text-[#FFC700] transition-colors flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Estimate Cost</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF5E00] shrink-0" />
                <span className="text-xs sm:text-sm text-[#D5C2B4]">100% Turnkey Fit</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFC700] shrink-0" />
                <span className="text-xs sm:text-sm text-[#D5C2B4]">10-Yr Hardware Warranty</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 text-[#D900FF] shrink-0" />
                <span className="text-xs sm:text-sm text-[#D5C2B4]">Open 24 Hours</span>
              </div>
            </div>
          </div>

          {/* Right Floating Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative rounded-3xl overflow-hidden p-1 bg-gradient-to-br from-white/15 via-white/5 to-white/0 shadow-2xl backdrop-blur-xl">
                <div className="relative rounded-[22px] overflow-hidden bg-[#161214] aspect-[4/5]">
                  <Image
                    src="/projects/project_bedroom_green_wardrobe.jpg"
                    alt="Decor 4 Adore Bespoke Master Suite & Wardrobe"
                    fill
                    className="object-cover brightness-90 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0D] via-transparent to-black/20" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#0E0C0D]/80 backdrop-blur-md text-[11px] font-semibold text-[#FFC700] border border-white/10">
                      Bespoke Master Suite
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-white/80">
                      Fraser Rd, Patna
                    </span>
                  </div>

                  {/* Bottom Card Content */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#161214]/85 backdrop-blur-md border border-white/10 shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping"></div>
                        <span className="text-xs font-semibold text-white">Live Consultation Ready</span>
                      </div>
                      <span className="text-[11px] font-bold text-[#FFC700]">Vaastu Aligned</span>
                    </div>
                    <p className="text-xs text-[#D8C7B9] line-clamp-2">
                      From 3D photorealistic visualization to final handover with zero hidden costs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Pill: 4.6-Star Customer Rating */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 p-4 rounded-2xl bg-[#1D171A]/95 backdrop-blur-xl border border-white/15 shadow-2xl max-w-[210px] animate-float">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 rounded-lg brand-gradient-bg text-white">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-extrabold text-white">4.6 / 5.0</span>
                    <div className="flex text-[#FFC700]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-[#FFC700] text-[#FFC700]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[10px] text-[#C4B2A5] leading-tight">
                  Based on verified client reviews in Patna
                </p>
              </div>

              {/* Floating Pill: 3D Visualization */}
              <div className="hidden sm:block absolute -top-4 -right-4 p-3.5 rounded-2xl bg-[#1D171A]/95 backdrop-blur-xl border border-white/15 shadow-2xl max-w-[190px]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#291F24] text-[#FF5E00]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">3D Walkthrough</div>
                    <div className="text-[10px] text-[#D8C7B9]">Photorealistic 4K</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
