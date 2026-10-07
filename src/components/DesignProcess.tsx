"use client";

import { Sparkles, Ruler, MonitorPlay, Hammer, KeyRound } from "lucide-react";

export default function DesignProcess() {
  const steps = [
    {
      num: "01",
      icon: Ruler,
      title: "Discovery & Site Survey",
      desc: "Our architects visit your property in Patna for millimeter-accurate laser measurements and personal lifestyle briefing.",
    },
    {
      num: "02",
      icon: MonitorPlay,
      title: "3D Virtual Immersion",
      desc: "We render photorealistic 4K 3D views of your exact floor plan, testing custom lighting, textures, and Vaastu balance.",
    },
    {
      num: "03",
      icon: Hammer,
      title: "Precision Crafting",
      desc: "Materials are factory-cut on computerized CNC machinery, with strict quality inspections and waterproofing treatments.",
    },
    {
      num: "04",
      icon: KeyRound,
      title: "Turnkey Handover",
      desc: "Flawless site assembly, professional deep cleaning, and formal key handover with your 10-year warranty certificate.",
    },
  ];

  return (
    <section className="relative py-20 bg-[#0E0C0D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1619] border border-white/10 text-xs font-semibold text-[#FFC700] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seamless Execution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our 4-Step Architectural{" "}
            <span className="font-serif italic font-normal brand-gradient-text">
              Design Journey
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#C7B7AA] font-light leading-relaxed">
            Zero ambiguity, fixed timelines, and total transparency from concept to final key handover.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className="p-6 rounded-3xl bg-[#171215] border border-white/10 relative group hover:border-[#FF5E00]/40 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-[#231A20] text-[#FF5E00] group-hover:text-white group-hover:bg-[#FF5E00] transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-white/15 group-hover:text-[#FFC700]/30 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#BBA99C] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-semibold text-[#FFC700]">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
