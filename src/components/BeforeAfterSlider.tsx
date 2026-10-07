"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal, ArrowLeftRight } from "lucide-react";

interface TransformationRoom {
  id: string;
  label: string;
  title: string;
  afterImage: string;
  beforeImage: string;
  afterBadge: string;
  location: string;
  highlights: { title: string; desc: string; color: string }[];
}

const rooms: TransformationRoom[] = [
  {
    id: "living-marble",
    label: "Grand Marble Living",
    title: "Luxury Marble Lounge & Sconce Lighting",
    afterImage: "/projects/project_living_marble_lounge.jpg",
    beforeImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85",
    afterBadge: "✨ After: Bookmatched Italian Marble & Gold Profiles",
    location: "Boring Road, Patna",
    highlights: [
      {
        title: "Italian Marble Wall",
        desc: "Bookmatched full-height marble paneling with vertical warm gold LED lighting.",
        color: "text-[#FFC700]",
      },
      {
        title: "Custom Media Unit",
        desc: "Sleek floating console, fluted accent wall, and integrated ceiling cove lighting.",
        color: "text-[#FF5E00]",
      },
      {
        title: "Turnkey Handover",
        desc: "Completed from bare shell in 40 days with zero structural compromise.",
        color: "text-[#D900FF]",
      },
    ],
  },
  {
    id: "kitchen-ushape",
    label: "Champagne Modular Kitchen",
    title: "High-Gloss U-Shape Modular Kitchen",
    afterImage: "/projects/project_modular_kitchen_ushape.jpg",
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85",
    afterBadge: "✨ After: High-Gloss Acrylic & Concealed Task LEDs",
    location: "Bailey Road, Patna",
    highlights: [
      {
        title: "Ergonomic Layout",
        desc: "Golden triangle U-shape workflow with seamless quartz countertop.",
        color: "text-[#FFC700]",
      },
      {
        title: "Concealed Lighting",
        desc: "3000K warm under-cabinet task LEDs and overhead downlights.",
        color: "text-[#FF5E00]",
      },
      {
        title: "Häfele Hardware",
        desc: "10-year warranty soft-close tandem drawers and hydraulic lift-ups.",
        color: "text-[#D900FF]",
      },
    ],
  },
  {
    id: "bedroom-arch",
    label: "Master Bedroom Suite",
    title: "Arch Headboard & Ambient Cove Suite",
    afterImage: "/projects/project_bedroom_arch_lighting.jpg",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    afterBadge: "✨ After: Fluted Arch Backlit Headboard & Vanity",
    location: "Patliputra Colony, Patna",
    highlights: [
      {
        title: "Backlit Arch Paneling",
        desc: "Architectural arched wooden fluting with concealed 3000K mood lighting.",
        color: "text-[#FFC700]",
      },
      {
        title: "Integrated Vanity",
        desc: "Floating study desk and dressing unit with perimeter ceiling cove.",
        color: "text-[#FF5E00]",
      },
      {
        title: "Acoustic Comfort",
        desc: "Sound-dampening wall panels and anti-glare recessed illumination.",
        color: "text-[#D900FF]",
      },
    ],
  },
];

export default function BeforeAfterSlider() {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentRoom = rooms[selectedRoomIndex];

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
    <section id="before-after" className="relative py-24 bg-[#120E10] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F191D] border border-white/10 text-xs font-semibold text-[#FFC700] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Spatial Transformations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            See The Transformation{" "}
            <span className="font-serif italic font-normal brand-gradient-text">
              In Action
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#C7B7AA] font-light leading-relaxed">
            Drag the interactive slider below to reveal how Decor 4 Adore reimagines raw brick and concrete spaces into opulent, warm sanctuaries across Patna.
          </p>
        </div>

        {/* Room Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-8">
          {rooms.map((room, idx) => (
            <button
              key={room.id}
              onClick={() => setSelectedRoomIndex(idx)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedRoomIndex === idx
                  ? "brand-gradient-bg text-white shadow-lg shadow-orange-500/25 scale-105"
                  : "bg-[#1C1619] text-[#C4B3A5] hover:text-white hover:bg-[#251D22] border border-white/5"
              }`}
            >
              {room.label}
            </button>
          ))}
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
                src={currentRoom.afterImage}
                alt={currentRoom.title}
                fill
                className="object-cover"
                draggable={false}
              />
              {/* After Label Badge */}
              <div className="absolute top-5 right-5 px-3.5 py-1.5 rounded-full bg-[#0E0C0D]/90 backdrop-blur-md border border-[#25D366]/40 text-xs font-bold text-[#25D366] shadow-lg">
                {currentRoom.afterBadge}
              </div>
            </div>

            {/* Before Image (Clipped Layer) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="relative w-full h-full"
                style={{
                  width: containerRef.current
                    ? `${containerRef.current.clientWidth}px`
                    : "100%",
                }}
              >
                <Image
                  src={currentRoom.beforeImage}
                  alt="Raw Construction Before Renovation"
                  fill
                  className="object-cover filter grayscale contrast-125 brightness-90"
                  draggable={false}
                />
                {/* Before Label Badge */}
                <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-white/20 text-xs font-bold text-white/90 shadow-lg">
                  🏗️ Before: Raw Concrete Space
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

          {/* Room Specific Transformation Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {currentRoom.highlights.map((h, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-[#171215] border border-white/5 text-center sm:text-left transition-all"
              >
                <div className={`text-xs font-bold ${h.color} uppercase tracking-wider mb-1`}>
                  {h.title}
                </div>
                <p className="text-xs text-[#C5B4A7] leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

