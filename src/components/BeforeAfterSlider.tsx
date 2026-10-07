"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal, ArrowLeftRight } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <section id="before-after" className="relative py-20 bg-[#120E10] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F191D] border border-white/10 text-xs font-semibold text-[#FFC700] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Transformations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            See The Transformation{" "}
            <span className="font-serif italic font-normal brand-gradient-text">
              In Action
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#C7B7AA] font-light leading-relaxed">
            Drag the interactive slider below to reveal how Decor 4 Adore reimagines raw brick and concrete spaces into opulent, warm sanctuaries.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[480px] md:h-[560px] w-full rounded-3xl overflow-hidden select-none cursor-ew-resize border border-white/15 shadow-2xl bg-[#181316]"
          >
            {/* After Image (Full Background) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
                alt="Decor 4 Adore Finished Luxury Living Room"
                fill
                className="object-cover"
                draggable={false}
              />
              {/* After Label Badge */}
              <div className="absolute top-5 right-5 px-3.5 py-1.5 rounded-full bg-[#0E0C0D]/90 backdrop-blur-md border border-[#25D366]/40 text-xs font-bold text-[#25D366] shadow-lg">
                ✨ After: Decor 4 Adore Luxury Finish
              </div>
            </div>

            {/* Before Image (Clipped Layer) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%" }}>
                <Image
                  src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85"
                  alt="Raw Concrete Construction Before Renovation"
                  fill
                  className="object-cover filter grayscale contrast-125"
                  draggable={false}
                />
                {/* Before Label Badge */}
                <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-white/20 text-xs font-bold text-white/90 shadow-lg">
                  🏗️ Before: Raw Unfinished Space
                </div>
              </div>
            </div>

            {/* Slider Dividing Bar & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full brand-gradient-bg text-white shadow-2xl flex items-center justify-center border-2 border-white">
                <ArrowLeftRight className="w-5 h-5 animate-pulse" />
              </div>
            </div>

            {/* Bottom Floating Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] text-[#E7DAD0] flex items-center gap-2 pointer-events-none">
              <MoveHorizontal className="w-3.5 h-3.5 text-[#FFC700]" />
              <span>Drag or slide left & right to compare</span>
            </div>
          </div>

          {/* Quick Transformation Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-2xl bg-[#171215] border border-white/5 text-center sm:text-left">
              <div className="text-xs font-bold text-[#FFC700] uppercase tracking-wider mb-1">
                Acoustic & Ceiling
              </div>
              <p className="text-xs text-[#C5B4A7]">
                Multi-tier cove gypsum false ceiling with magnetic track warm lights.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#171215] border border-white/5 text-center sm:text-left">
              <div className="text-xs font-bold text-[#FF5E00] uppercase tracking-wider mb-1">
                Custom Millwork
              </div>
              <p className="text-xs text-[#C5B4A7]">
                Fluted wood panels, concealed wiring, and built-in luxury media console.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#171215] border border-white/5 text-center sm:text-left">
              <div className="text-xs font-bold text-[#D900FF] uppercase tracking-wider mb-1">
                Turnkey Delivery
              </div>
              <p className="text-xs text-[#C5B4A7]">
                Transformed in 45 days with strict quality checks and zero mess.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
