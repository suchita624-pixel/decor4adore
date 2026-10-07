"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  X,
  Sparkles,
  Calendar,
  Clock,
  Phone,
  User,
  MapPin,
  CheckCircle2,
  MessageCircle,
  Home,
} from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyType: "3BHK Apartment",
    service: "Turnkey Home Interior",
    date: "",
    timeSlot: "Morning (10 AM - 1 PM)",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FFC700", "#FF5E00", "#FF0055", "#D900FF"],
        });
      } catch {
        // Confetti fallback
      }
    }, 600);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hello Decor 4 Adore, I would like to book a design consultation:\n\n*Name:* ${formData.name || "Client"}\n*Phone:* ${formData.phone || "N/A"}\n*Property:* ${formData.propertyType}\n*Service:* ${formData.service}\n*Preferred Date:* ${formData.date || "Earliest"}\n*Time:* ${formData.timeSlot}\n*Notes:* ${formData.notes || "None"}`;
    return `https://wa.me/917541822342?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#161214] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
        
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5E00]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F181D] border border-white/10 text-xs font-semibold text-[#FFC700] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Free 1-on-1 Consultation</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Book Your Design Session
              </h3>
              <p className="text-xs sm:text-sm text-[#C4B2A5] font-light mt-1">
                Meet our lead architects in Patna or schedule a site visit. 100% free with no obligations.
              </p>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#E9DDD2] mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#FF5E00]" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#20191E] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#FF5E00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E9DDD2] mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#FFC700]" />
                    <span>Phone / WhatsApp *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 075418 22342"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#20191E] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#FF5E00]"
                  />
                </div>
              </div>

              {/* Service & Property Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#E9DDD2] mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF0055]" />
                    <span>Service Interested In</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#20191E] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF5E00]"
                  >
                    <option value="Turnkey Home Interior">Turnkey Home Interior</option>
                    <option value="Modular Kitchen">Modular Kitchen</option>
                    <option value="Wardrobe & Storage">Wardrobe & Storage</option>
                    <option value="False Ceiling & Lights">False Ceiling & Lights</option>
                    <option value="3D Interior & VR Design">3D Interior & VR Design</option>
                    <option value="Vaastu Consultation">Vaastu Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E9DDD2] mb-1.5 flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5 text-[#D900FF]" />
                    <span>Property Layout</span>
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#20191E] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF5E00]"
                  >
                    <option value="1BHK Apartment">1 BHK Apartment</option>
                    <option value="2BHK Apartment">2 BHK Apartment</option>
                    <option value="3BHK Apartment">3 BHK Apartment</option>
                    <option value="4BHK+ Luxury Villa">4 BHK+ Luxury Villa</option>
                    <option value="Commercial Space">Commercial / Office</option>
                    <option value="Single Room Renovation">Single Room Renovation</option>
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#E9DDD2] mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#FF5E00]" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#20191E] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF5E00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E9DDD2] mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FFC700]" />
                    <span>Time Window</span>
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#20191E] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF5E00]"
                  >
                    <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                    <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                    <option value="Flexible (Anytime - 24 Hours Open)">Flexible (Anytime - 24h Open)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#E9DDD2] mb-1.5">
                  Location / Specific Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Fraser Rd flat, looking for modern false ceiling and open modular kitchen..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-[#20191E] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#FF5E00]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full brand-gradient-bg text-white font-bold text-sm shadow-xl shadow-orange-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{loading ? "Securing Slot..." : "Confirm Free Consultation"}</span>
                </button>
              </div>

              {/* WhatsApp Alternative */}
              <div className="text-center pt-2">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Or book instantly via WhatsApp (Direct Chat)</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full brand-gradient-bg text-white mx-auto flex items-center justify-center mb-4 shadow-xl shadow-orange-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2">
              Consultation Request Received!
            </h3>

            <p className="text-sm text-[#D8C7BA] max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our senior interior architect from <strong className="text-white">Decor 4 Adore</strong> will contact you at <strong className="text-[#FFC700]">{formData.phone}</strong> to confirm the exact time and site location.
            </p>

            <div className="p-4 rounded-2xl bg-[#20191E] border border-white/10 text-left max-w-sm mx-auto mb-6 text-xs space-y-1.5 text-[#D1C2B5]">
              <div><strong>Service:</strong> {formData.service}</div>
              <div><strong>Property:</strong> {formData.propertyType}</div>
              <div><strong>Time Window:</strong> {formData.timeSlot}</div>
              <div><strong>Studio:</strong> Dumrao Palace, Fraser Rd, Patna (Open 24 Hours)</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-green-600/20"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Open in WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
