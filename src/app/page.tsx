"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import PortfolioGallery from "@/components/PortfolioGallery";
import CostCalculator from "@/components/CostCalculator";
import DesignProcess from "@/components/DesignProcess";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactFooter from "@/components/ContactFooter";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#0E0C0D] text-[#F4ECE4]">
      {/* Navigation Header */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Hero Section */}
      <Hero onOpenConsultation={handleOpenConsultation} />

      {/* About Us Section */}
      <AboutSection />

      {/* Key Services Grid */}
      <ServicesSection onOpenConsultation={handleOpenConsultation} />

      {/* Interactive Before & After Transformation Slider */}
      <BeforeAfterSlider />

      {/* Dynamic Portfolio Gallery (Easy-to-update image assets) */}
      <PortfolioGallery onOpenConsultation={handleOpenConsultation} />

      {/* Interactive Room Cost & Budget Estimator */}
      <CostCalculator onOpenConsultation={handleOpenConsultation} />

      {/* 4-Step Architectural Design Process */}
      <DesignProcess />

      {/* Customer Testimonials & 4.6-Star Rating */}
      <TestimonialsSection />

      {/* Contact & Footer */}
      <ContactFooter onOpenConsultation={handleOpenConsultation} />

      {/* Booking / Consultation Interactive Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
    </main>
  );
}
