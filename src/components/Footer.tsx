import React from 'react';
import { Phone, Clock, FileText, MessageCircle, MapPin, ChevronRight, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

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
    <footer className="bg-[#070707] border-t border-white/10 text-white/80 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#FFD21F] shadow-lg bg-black">
                <img
                  src="/yamama-logo.jpg"
                  alt="Yamama Shawaya Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-wider text-white uppercase block">
                  Yamama <span className="text-[#FFD21F]">Shawaya</span>
                </span>
                <span className="text-[11px] text-[#FFD21F] font-mono tracking-widest uppercase">
                  {RESTAURANT_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              Authentic charcoal chicken shawaya, signature Bishawari spiced rice, gourmet shawarma,
              and open-flame Alfaham grills on Calicut Road, Angadipuram, Kerala.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenMenuCard}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold text-white transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-[#FFD21F]" />
                <span>View Menu Card</span>
              </button>
              <button
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-400 text-xs font-semibold transition-all"
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
                { label: 'Customer Reviews', href: '#reviews' },
                { label: 'Photo Gallery', href: '#photos' },
                { label: 'Contact & Location', href: '#contact' },
              ].map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-white/70 hover:text-[#FFD21F] flex items-center gap-1.5 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-[#FFD21F]" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Contact & Timings</h3>
            <div className="space-y-2 text-xs text-white/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E21B23] shrink-0 mt-0.5" />
                <span>Oradampalam, Valiyaveetilpadi, Calicut Road, Angadipuram, Kerala</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFD21F] shrink-0" />
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
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
                🛵 Free Home Delivery across Angadippuram, Thirurkad & Perinthalmanna
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Yamama Shawaya. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#E21B23] fill-[#E21B23]" />
            <span>for authentic food lovers in Angadipuram</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
