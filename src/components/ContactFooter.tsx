"use client";

import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Mail,
  ArrowRight,
  ShieldCheck,
  Star,
  ExternalLink,
  Navigation,
} from "lucide-react";

interface ContactFooterProps {
  onOpenConsultation: () => void;
}

export default function ContactFooter({ onOpenConsultation }: ContactFooterProps) {
  return (
    <footer id="contact" className="relative bg-[#0A0809] border-t border-white/10 pt-20 pb-28 sm:pb-16 overflow-hidden">
      
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-[#FF5E00]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#D900FF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Contact Highlight Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1C161A] via-[#161214] to-[#120E10] border border-white/15 shadow-2xl mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#231A20] border border-white/10 text-xs font-semibold text-[#FFC700] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
                <span>Open 24 Hours • Ready for Site Visits</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                Ready to Incarnate Your Space with{" "}
                <span className="brand-gradient-text">Decor 4 Adore</span>?
              </h2>
              
              <p className="text-sm sm:text-base text-[#C7B7AB] font-light max-w-2xl leading-relaxed">
                Connect with our architects today for a free on-site spatial survey, photorealistic 3D visualization, and transparent itemized quote.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <button
                onClick={onOpenConsultation}
                className="w-full py-4 rounded-full brand-gradient-bg text-white font-bold text-sm shadow-xl shadow-orange-500/25 transition-transform hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2"
              >
                <span>Book Free Design Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/917541822342?text=Hello%20Decor%204%20Adore,%20I%20would%20like%20to%20get%20in%20touch%20regarding%20interior%20design%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 transition-transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp: 075418 22342</span>
              </a>
            </div>

          </div>
        </div>

        {/* 3 Core Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Address */}
          <div className="p-6 rounded-3xl bg-[#141012] border border-white/10 hover:border-[#FF5E00]/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#231A20] text-[#FF5E00] flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Our Studio Address</h3>
            <p className="text-sm text-[#D8C7BA] leading-relaxed mb-4">
              Dumrao Palace, L/B-15, Fraser Rd, Lodipur, Patna, Bihar 800001
            </p>
            <a
              href="https://maps.google.com/?q=Dumrao+Palace+Fraser+Road+Patna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFC700] hover:text-white transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Card 2: Contact Numbers */}
          <div className="p-6 rounded-3xl bg-[#141012] border border-white/10 hover:border-[#FFC700]/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#231A20] text-[#FFC700] flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Call & WhatsApp</h3>
            <p className="text-sm text-[#D8C7BA] leading-relaxed mb-4">
              Speak directly with our spatial architects or request instant portfolio catalogs.
            </p>
            <div className="space-y-1.5">
              <a
                href="tel:07541822342"
                className="block text-sm font-bold text-white hover:text-[#FF5E00] transition-colors"
              >
                📞 075418 22342 (Calling)
              </a>
              <a
                href="https://wa.me/917541822342"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs font-semibold text-[#25D366] hover:underline"
              >
                💬 WhatsApp Chat: 075418 22342
              </a>
            </div>
          </div>

          {/* Card 3: Working Hours */}
          <div className="p-6 rounded-3xl bg-[#141012] border border-white/10 hover:border-[#D900FF]/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#231A20] text-[#D900FF] flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Studio Hours</h3>
            <div className="flex items-center gap-2 text-sm font-bold text-[#25D366] mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"></span>
              <span>Open 24 Hours (7 Days a Week)</span>
            </div>
            <p className="text-xs text-[#BFAEA2] leading-relaxed mb-4 mt-2">
              Round-the-clock client support, emergency site visits, and uninterrupted turnkey execution.
            </p>
            <div className="text-[11px] text-[#A69689]">
              Patna Metro & Bihar Region Services
            </div>
          </div>

        </div>

        {/* Brand Information & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-12 border-t border-white/10 items-center">
          
          {/* Brand Logo & Tagline */}
          <div className="md:col-span-6 flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden p-[2px] brand-gradient-bg shrink-0 shadow-lg">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#141012]">
                <Image
                  src="/1000040445.jpg"
                  alt="Decor 4 Adore Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="font-extrabold text-xl text-white">
                Decor <span className="brand-gradient-text">4</span> Adore
              </div>
              <div className="font-serif italic text-xs text-[#E1D1C4]">
                “incarnate your imagination”
              </div>
              <p className="text-[11px] text-[#9A8A7E] mt-1">
                Dumrao Palace, L/B-15, Fraser Rd, Patna 800001
              </p>
            </div>
          </div>

          {/* Quick Footer Navigation */}
          <div className="md:col-span-6 flex flex-wrap gap-5 justify-start md:justify-end text-xs font-medium text-[#C8B8AB]">
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="#services" className="hover:text-white transition-colors">Modular Kitchens</a>
            <a href="#services" className="hover:text-white transition-colors">False Ceilings</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#calculator" className="hover:text-white transition-colors">Cost Estimator</a>
            <a href="#testimonials" className="hover:text-white transition-colors">4.6★ Reviews</a>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7B70]">
          <div>
            © 2026 Decor 4 Adore. All rights reserved. Incarnate Your Imagination.
          </div>
          <div className="flex items-center gap-4">
            <span>Patna, Bihar</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>4.6★ Google Verified</span>
          </div>
        </div>

      </div>

      {/* Floating Bottom Quick Action Bar for Mobile Visitors */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#120E10]/95 backdrop-blur-xl border-t border-white/15 p-3 flex items-center gap-2 shadow-2xl">
        <a
          href="tel:07541822342"
          className="flex-1 py-2.5 rounded-xl bg-[#1F191D] border border-white/10 text-white font-bold text-xs flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#FFC700]" />
          <span>Call 24/7</span>
        </a>

        <a
          href="https://wa.me/917541822342?text=Hello%20Decor%204%20Adore,%20I%20would%20like%20to%20inquire%20about%20interior%20design%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-green-600/20"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenConsultation}
          className="flex-[1.2] py-2.5 rounded-xl brand-gradient-bg text-white font-bold text-xs flex items-center justify-center gap-1 shadow-md shadow-orange-500/20"
        >
          <span>Book Visit</span>
        </button>
      </div>

    </footer>
  );
}
