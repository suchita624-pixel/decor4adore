"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X, Calendar, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Transformations", href: "#before-after" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Cost Estimator", href: "#calculator" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0E0C0D]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/60 py-3"
          : "bg-gradient-to-b from-[#0E0C0D]/90 via-[#0E0C0D]/50 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <a href="#" className="flex items-center gap-3.5 group focus:outline-none">
            {/* Circular Logo Frame */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-[#FFC700] via-[#FF5E00] to-[#D900FF] shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-300 shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#141012] relative">
                <Image
                  src="/1000040445.jpg"
                  alt="Decor 4 Adore Logo"
                  width={56}
                  height={56}
                  priority
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Brand Title & Tagline */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl md:text-2xl tracking-tight text-white group-hover:text-[#FFC700] transition-colors">
                  Decor <span className="brand-gradient-text">4</span> Adore
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF5E00] animate-pulse"></span>
              </div>
              <span className="font-serif italic text-[11px] sm:text-xs text-[#D5C2B4] tracking-wider -mt-0.5">
                incarnate your imagination
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#D8C7B9] hover:text-white transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FFC700] via-[#FF5E00] to-[#D900FF] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Quick Link */}
            <a
              href="https://wa.me/917541822342?text=Hello%20Decor%204%20Adore,%20I%20would%20like%20to%20inquire%20about%20interior%20design%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#1F191D] hover:bg-[#2A2227] text-[#25D366] border border-white/10 transition-all hover:scale-105"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Phone Call Link */}
            <a
              href="tel:07541822342"
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1C171A] hover:bg-[#272024] text-xs font-semibold text-[#E9DBD0] border border-white/10 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFC700]" />
              <span>075418 22342</span>
            </a>

            {/* Main Gradient CTA */}
            <button
              onClick={onOpenConsultation}
              className="relative group overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 brand-gradient-bg transition-transform duration-300 group-hover:opacity-95"></span>
              <span className="relative flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="sm:hidden px-3 py-1.5 rounded-full brand-gradient-bg text-white text-xs font-semibold"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#1C171A] text-[#F4ECE4] border border-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-[#120E10]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300 shadow-2xl animate-in slide-in-from-top-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#E5D7CC] hover:text-[#FFC700] transition-colors py-1.5 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-3">
              <a
                href="tel:07541822342"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1D171B] border border-white/10 text-[#EBDED3] font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-[#FFC700]" />
                <span>Call 075418 22342 (24/7)</span>
              </a>

              <a
                href="https://wa.me/917541822342?text=Hello%20Decor%204%20Adore,%20I%20would%20like%20to%20inquire%20about%20interior%20design%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Instant Inquiry</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-xl brand-gradient-bg text-white font-bold text-sm shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free Design Consultation</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
