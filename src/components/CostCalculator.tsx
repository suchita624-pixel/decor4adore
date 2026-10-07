"use client";

import { useState } from "react";
import { Calculator, Sparkles, ArrowRight, MessageCircle, Check, Info } from "lucide-react";

interface CostCalculatorProps {
  onOpenConsultation: () => void;
}

export default function CostCalculator({ onOpenConsultation }: CostCalculatorProps) {
  const [projectType, setProjectType] = useState<string>("3bhk");
  const [areaSqft, setAreaSqft] = useState<number>(1400);
  const [qualityTier, setQualityTier] = useState<string>("premium");

  const projectTypes = [
    { id: "kitchen", name: "Modular Kitchen", defaultArea: 120, unitPriceBase: 1800 },
    { id: "2bhk", name: "2 BHK Full Home", defaultArea: 1000, unitPriceBase: 1350 },
    { id: "3bhk", name: "3 BHK Full Home", defaultArea: 1450, unitPriceBase: 1450 },
    { id: "4bhk", name: "4 BHK / Villa", defaultArea: 2200, unitPriceBase: 1600 },
    { id: "living", name: "Living + False Ceiling", defaultArea: 350, unitPriceBase: 1200 },
    { id: "bedroom", name: "Master Suite + Wardrobe", defaultArea: 250, unitPriceBase: 1500 },
  ];

  const qualityTiers = [
    {
      id: "essential",
      name: "Essential Classic",
      multiplier: 0.85,
      desc: "Commercial ply with matte laminate, standard soft-close fittings & basic false ceiling.",
    },
    {
      id: "premium",
      name: "Premium Contemporary",
      multiplier: 1.15,
      desc: "HDHMR with acrylic & PU finishes, BLUM/Häfele hardware, magnetic track lights & acoustic walls.",
    },
    {
      id: "luxury",
      name: "Ultra Luxury Signature",
      multiplier: 1.55,
      desc: "Italian marble accents, fluted smoked glass, veneer millwork, automated sensory lighting & smart home.",
    },
  ];

  // Calculation
  const selectedTypeObj = projectTypes.find((t) => t.id === projectType) || projectTypes[2];
  const selectedTierObj = qualityTiers.find((q) => q.id === qualityTier) || qualityTiers[1];

  const estimatedBase = areaSqft * selectedTypeObj.unitPriceBase * selectedTierObj.multiplier;
  const minCost = Math.round((estimatedBase * 0.92) / 10000) * 10000;
  const maxCost = Math.round((estimatedBase * 1.08) / 10000) * 10000;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleTypeChange = (id: string) => {
    setProjectType(id);
    const target = projectTypes.find((t) => t.id === id);
    if (target) {
      setAreaSqft(target.defaultArea);
    }
  };

  const inquiryText = `Hello Decor 4 Adore, I calculated an interior estimate for my ${selectedTypeObj.name} (${areaSqft} sq.ft, ${selectedTierObj.name} tier, Approx ${formatCurrency(minCost)} - ${formatCurrency(maxCost)}). I'd like a detailed bill of quantities (BOQ).`;

  return (
    <section id="calculator" className="relative py-24 bg-[#120E10] border-y border-white/5 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FFC700]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1619] border border-white/10 text-xs font-semibold text-[#FFC700] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Cost Calculator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Estimate Your Dream{" "}
            <span className="font-serif italic font-normal brand-gradient-text">
              Interior Budget
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#C7B7AA] font-light leading-relaxed">
            Get an instant, transparent ballpark estimate tailored to your room type, carpet area, and desired finish quality in Patna.
          </p>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Inputs Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#171215] border border-white/10 flex flex-col justify-between">
            <div>
              {/* Step 1: Select Space Type */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#FFC700] mb-3">
                  1. Select Space or Project Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleTypeChange(type.id)}
                      className={`p-3 rounded-2xl text-xs font-semibold text-left transition-all border ${
                        projectType === type.id
                          ? "bg-[#271E24] text-white border-[#FF5E00] shadow-md shadow-orange-500/15"
                          : "bg-[#1E181B] text-[#C4B3A5] border-white/5 hover:bg-[#251D22] hover:text-white"
                      }`}
                    >
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Carpet Area Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#FFC700]">
                    2. Estimated Carpet Area
                  </label>
                  <span className="text-sm font-extrabold text-white bg-[#251D22] px-3 py-1 rounded-xl border border-white/10">
                    {areaSqft} sq.ft
                  </span>
                </div>
                <input
                  type="range"
                  min={80}
                  max={4500}
                  step={20}
                  value={areaSqft}
                  onChange={(e) => setAreaSqft(Number(e.target.value))}
                  className="w-full h-2 bg-[#281F25] rounded-lg appearance-none cursor-pointer accent-[#FF5E00]"
                />
                <div className="flex justify-between text-[11px] text-[#A8988C] mt-1.5 font-medium">
                  <span>80 sq.ft (Studio/Kitchen)</span>
                  <span>4,500 sq.ft (Duplex/Villa)</span>
                </div>
              </div>

              {/* Step 3: Finish & Material Tier */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#FFC700] mb-3">
                  3. Choose Material & Finish Quality
                </label>
                <div className="space-y-2.5">
                  {qualityTiers.map((tier) => (
                    <div
                      key={tier.id}
                      onClick={() => setQualityTier(tier.id)}
                      className={`p-3.5 rounded-2xl cursor-pointer transition-all border flex items-start gap-3 ${
                        qualityTier === tier.id
                          ? "bg-[#251D22] border-[#FF5E00]/60 shadow-md"
                          : "bg-[#1C1619] border-white/5 hover:bg-[#221B20]"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full mt-0.5 flex items-center justify-center shrink-0 border ${
                          qualityTier === tier.id
                            ? "bg-[#FF5E00] border-[#FF5E00] text-white"
                            : "border-white/20"
                        }`}
                      >
                        {qualityTier === tier.id && <Check className="w-3 h-3" />}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
                          {tier.name}
                        </div>
                        <p className="text-[11px] text-[#BBAA9D] leading-tight font-light">
                          {tier.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Estimate Output Box */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#1E171B] to-[#161214] border border-white/15 flex flex-col justify-between relative shadow-2xl">
            {/* Top Indicator */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs uppercase font-bold text-[#EADBD0] tracking-wider">
                  Estimated Price Range
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#25D366]/20 text-[#25D366] font-semibold">
                  Patna Local Market Rates
                </span>
              </div>

              {/* Big Price Display */}
              <div className="mb-6 text-center lg:text-left">
                <div className="text-2xl sm:text-3xl xl:text-4xl font-black brand-gradient-text">
                  {formatCurrency(minCost)} - {formatCurrency(maxCost)}
                </div>
                <p className="text-xs text-[#BBA99C] mt-1.5 font-light">
                  Estimated for <strong className="text-white">{areaSqft} sq.ft</strong> ({selectedTypeObj.name}) with{" "}
                  <strong className="text-white">{selectedTierObj.name}</strong> specifications.
                </p>
              </div>

              {/* What is included list */}
              <div className="space-y-2 mb-6 p-4 rounded-2xl bg-[#120E10]/70 border border-white/5">
                <div className="flex items-center gap-2 text-xs text-[#E1D4C8]">
                  <Check className="w-3.5 h-3.5 text-[#FF5E00]" />
                  <span>3D Architectural Walkthrough included</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E1D4C8]">
                  <Check className="w-3.5 h-3.5 text-[#FF5E00]" />
                  <span>Labor, Civil Work, Material & Assembly</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E1D4C8]">
                  <Check className="w-3.5 h-3.5 text-[#FF5E00]" />
                  <span>10-Year Hardware & Moisture Warranty</span>
                </div>
              </div>
            </div>

            {/* CTA Actions */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={`https://wa.me/917541822342?text=${encodeURIComponent(inquiryText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] shadow-lg shadow-green-600/20"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Get Itemized Bill on WhatsApp</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 rounded-full brand-gradient-bg text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] shadow-lg shadow-orange-500/25"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book In-Home Measurement</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#A69588] text-center pt-1">
                <Info className="w-3 h-3" />
                <span>Final quote provided after site measurement. No obligations.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
