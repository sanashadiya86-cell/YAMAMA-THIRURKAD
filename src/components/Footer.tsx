import React from 'react';
import { Phone, Clock, FileText, MessageCircle, MapPin, ChevronRight, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

interface FooterProps {
  onOpenMenuCard: () => void;
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMenuCard, onOpenWhatsApp }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060608] border-t border-[#22222E] text-[#D4D4D8] pt-16 pb-12 text-left relative overflow-hidden">
      {/* Background ambient smoke & ember glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF4500]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#22222E]">
          {/* Brand Info with Animated Yamama Logo */}
          <div className="lg:col-span-5 space-y-4">
            <YamamaLogo size="lg" showText={true} animate={true} glow="fire" />

            <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-sm leading-relaxed mt-2">
              Authentic charcoal chicken shawaya, signature Bishawari spiced rice, gourmet shawarma,
              and open-flame Alfaham grills on Calicut Road (Direction: Angadipuram, Thirurkad).
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenMenuCard}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#15151F] hover:bg-[#1E1E2C] border border-[#2B2B3B] text-xs font-semibold text-white transition-all hover:border-[#FF5500]/50"
              >
                <FileText className="w-3.5 h-3.5 text-[#FFB703]" />
                <span>View Menu Card</span>
              </button>
              <button
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 text-xs font-semibold transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Hotline</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Quick Navigation</h3>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Overview', href: '#overview' },
                { label: 'Shawaya + Bishawari Combo', href: '#special' },
                { label: 'Full Food Menu', href: '#menu' },
                { label: 'About Our Craft', href: '#about' },
                { label: 'Reviews & Ratings', href: '#reviews' },
                { label: 'Photo Gallery', href: '#photos' },
                { label: 'Contact & Location', href: '#contact' },
              ].map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-[#A1A1AA] hover:text-[#FFA000] flex items-center gap-1.5 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-[#FF5500]" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Contact & Timings</h3>
            <div className="space-y-2 text-xs text-[#A1A1AA]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" />
                <span>Oradampalam, Valiyaveetilpadi, Calicut Road, Angadipuram, Thirurkad, Kerala</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFA000] shrink-0" />
                <span>
                  <a href={`tel:${RESTAURANT_INFO.phoneClean}`} className="hover:text-white font-mono">
                    {RESTAURANT_INFO.phone}
                  </a>{' '}
                  /{' '}
                  <a href={`tel:${RESTAURANT_INFO.phone2Clean}`} className="hover:text-white font-mono">
                    {RESTAURANT_INFO.phone2}
                  </a>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>12:00 PM – 12:00 AM (Open Every Day)</span>
              </p>
            </div>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-[#121A16] border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
                🛵 Free Home Delivery across Angadipuram, Thirurkad & Perinthalmanna
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>© {new Date().getFullYear()} Yamama Shawaya. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#FF3E00] fill-[#FF3E00]" />
            <span>for authentic charcoal food lovers in Angadipuram & Thirurkad</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
