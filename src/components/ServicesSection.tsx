"use client";

import { useState } from "react";
import Image from "next/image";
import { servicesData, ServiceItem } from "@/data/servicesData";
import {
  UtensilsCrossed,
  Layers,
  Box,
  Sparkles,
  Hammer,
  Compass,
  ArrowRight,
  CheckCircle2,
  X,
  Calendar,
  MessageCircle,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export default function ServicesSection({ onOpenConsultation }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: ServiceItem["iconName"]) => {
    switch (iconName) {
      case "UtensilsCrossed":
        return <UtensilsCrossed className="w-6 h-6" />;
      case "Layers":
        return <Layers className="w-6 h-6" />;
      case "Box":
        return <Box className="w-6 h-6" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6" />;
      case "Hammer":
        return <Hammer className="w-6 h-6" />;
      case "Compass":
        return <Compass className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#0E0C0D] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FF5E00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1619] border border-white/10 text-xs font-semibold text-[#FFC700] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Interior Architecture</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Specialized Services For{" "}
            <span className="font-serif italic font-normal brand-gradient-text">
              Elevated Living
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#C7B7AB] font-light leading-relaxed">
            From single-room modular upgrades to comprehensive turnkey villas, explore how our expert designers and craftsmen engineer perfection.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="group relative rounded-3xl bg-[#171215] border border-white/10 overflow-hidden hover:border-[#FF5E00]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col justify-between"
            >
              {/* Card Image Banner */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#1D171B]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171215] via-black/40 to-transparent" />

                {/* Minimalist Floating Icon */}
                <div className="absolute top-4 left-4 p-3 rounded-2xl bg-[#0E0C0D]/85 backdrop-blur-md border border-white/15 text-[#FFC700] group-hover:text-white group-hover:bg-[#FF5E00] transition-colors duration-300 shadow-xl">
                  {getIcon(service.iconName)}
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 text-xs font-extrabold text-white/40 tracking-widest">
                  0{idx + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-[#FFC700] transition-colors">
                    {service.title}
                  </h3>
                  <div className="font-serif italic text-xs text-[#E6CDB8] mb-3">
                    {service.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-[#BBA99C] font-light leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#DED1C5]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5E00] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-[#FFC700] hover:text-white transition-colors flex items-center gap-1 group/btn"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="px-3.5 py-1.5 rounded-full bg-[#241C21] hover:bg-[#FF5E00] text-white text-xs font-medium transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1E171B] via-[#241C21] to-[#1E171B] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              Need a Custom Turnkey Quotation for Your Flat or Villa?
            </h3>
            <p className="text-xs sm:text-sm text-[#C4B2A5]">
              Our lead interior architect offers free 1-on-1 discovery visits across Patna.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-full brand-gradient-bg text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform"
            >
              Book Free Site Visit
            </button>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#171215] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl brand-gradient-bg text-white">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">{selectedService.title}</h3>
                <p className="font-serif italic text-xs text-[#E6CDB8]">{selectedService.tagline}</p>
              </div>
            </div>

            {/* Modal Image */}
            <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-6 bg-[#1A1418]">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Modal Description */}
            <p className="text-sm text-[#D8C7BA] leading-relaxed mb-6">{selectedService.fullDesc}</p>

            {/* Key Inclusions */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider text-[#FFC700] font-bold mb-3">
                Key Inclusions & Quality Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#20181D] text-xs text-[#EFE4DA]">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5E00] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
              <a
                href={`https://wa.me/917541822342?text=Hello%20Decor%204%20Adore,%20I%20am%20interested%20in%20learning%20more%20about%20your%20${encodeURIComponent(
                  selectedService.title
                )}%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] font-semibold text-xs flex items-center justify-center gap-2 transition-colors border border-[#25D366]/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full brand-gradient-bg text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
