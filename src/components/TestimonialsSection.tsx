"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Award, CheckCircle2, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      id: 1,
      quote: "Loved the color combination and the lighting work.",
      detail:
        "Decor 4 Adore transformed our 3BHK living room and false ceiling beyond what we imagined. The warm ambient lights and magnetic track spotlights made our home feel like a 5-star hotel suite.",
      author: "Priya & Rajesh Sharma",
      location: "Fraser Road, Patna",
      rating: 5,
      project: "3BHK Full Interior & False Ceiling",
      date: "Verified Review",
    },
    {
      id: 2,
      quote: "Very good service Affordable price.",
      detail:
        "Transparent pricing from day one without any hidden surprise costs. The modular kitchen and wardrobe finish quality is top notch, and they handed over the keys right on our promised schedule.",
      author: "Amit K. Verma",
      location: "Kankarbagh, Patna",
      rating: 5,
      project: "Modular Kitchen & Wardrobe Joinery",
      date: "Verified Review",
    },
    {
      id: 3,
      quote: "Exceptional 3D interior renders and flawless Vaastu planning.",
      detail:
        "Before starting construction, their 3D photorealistic walkthrough gave us 100% confidence. Their Vaastu recommendations for our kitchen fire-zone and master bedroom were scientifically integrated.",
      author: "Dr. Ananya & Rohit Sen",
      location: "Bailey Road, Patna",
      rating: 5,
      project: "Turnkey 4BHK Villa Interior",
      date: "Verified Review",
    },
    {
      id: 4,
      quote: "The false ceiling design is the absolute highlight of our new home.",
      detail:
        "The team was extremely polite and professional. They worked around the clock with zero hassle. Everyone visiting our home compliments the cove lighting and fluted acoustic wooden panelling.",
      author: "S. Narayan & Family",
      location: "Patliputra Colony, Patna",
      rating: 5,
      project: "Living Lounge & Architectural Ceilings",
      date: "Verified Review",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-[#120E10] border-t border-white/5 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#FF5E00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F191D] border border-white/10 text-xs font-semibold text-[#FFC700] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customer Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Words From Our{" "}
            <span className="font-serif italic font-normal brand-gradient-text">
              Delighted Homeowners
            </span>
          </h2>

          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex text-[#FFC700]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FFC700] text-[#FFC700]" />
              ))}
            </div>
            <span className="text-sm font-bold text-white">4.6 out of 5.0 Rating</span>
            <span className="text-xs text-[#BFAEA2]">(Based on real client feedback)</span>
          </div>
        </div>

        {/* Featured Slider on Mobile & Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#171215] border border-white/10 relative group hover:border-[#FF5E00]/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Top Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#FFC700]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFC700] text-[#FFC700]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#FF5E00]/40 group-hover:text-[#FF5E00] transition-colors" />
                </div>

                {/* Main Highlight Quote */}
                <h3 className="font-serif italic text-lg sm:text-xl font-semibold text-[#F7E7D9] mb-3 leading-snug">
                  “{rev.quote}”
                </h3>

                {/* Detailed Review */}
                <p className="text-xs sm:text-sm text-[#BBA99C] font-light leading-relaxed mb-6">
                  {rev.detail}
                </p>
              </div>

              {/* Author & Project Info */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{rev.author}</div>
                  <div className="text-xs text-[#D8C7B9] flex items-center gap-1 mt-0.5">
                    <span>{rev.location}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30"></span>
                    <span className="text-[11px] text-[#FFC700]">{rev.project}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-medium text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-full border border-[#25D366]/20">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Badge Card */}
        <div className="mt-12 max-w-2xl mx-auto p-5 rounded-2xl bg-[#1A1418] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl brand-gradient-bg text-white">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">100% Client Satisfaction Guarantee</div>
              <div className="text-xs text-[#BBA99C]">10-Year Warranty on all modular fittings & joinery.</div>
            </div>
          </div>
          <a
            href="https://wa.me/917541822342?text=Hello%20Decor%204%20Adore,%20I%20saw%20your%20reviews%20and%20would%20like%20to%20consult%20for%20my%20home."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] text-xs font-bold transition-colors border border-[#25D366]/30 shrink-0"
          >
            Chat with Designer
          </a>
        </div>

      </div>
    </section>
  );
}
