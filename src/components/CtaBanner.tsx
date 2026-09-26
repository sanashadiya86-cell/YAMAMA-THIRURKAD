import React from 'react';
import { Flame, Phone, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CtaBannerProps {
  onOrderNow: () => void;
  onOpenWhatsApp: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOrderNow, onOpenWhatsApp }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#181818] via-[#1f1212] to-[#181818] border-y border-[#E21B23]/30 relative overflow-hidden text-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E21B23]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E21B23]/20 border border-[#E21B23]/40 text-[#FFD21F] text-xs font-bold uppercase tracking-wider">
          <Flame className="w-3.5 h-3.5 fill-[#E21B23] text-[#E21B23]" />
          <span>Craving Hot Charcoal Grills Tonight?</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white uppercase tracking-tight">
          Refill Your Energy With <span className="text-gold-gradient">Yamama Shawaya</span>
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
          Crispy skin, juicy spiced meat, and steaming Bishawari rice. Delivered hot to your doorstep
          anywhere in Angadippuram, Thirurkad, and Perinthalmanna!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onOrderNow}
            className="px-6 py-3.5 rounded-xl bg-[#E21B23] hover:bg-[#c9141b] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#E21B23]/30 transition-all active:scale-95 glow-red"
          >
            Explore Menu & Add to Bag
          </button>

          <button
            onClick={onOpenWhatsApp}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order via WhatsApp</span>
          </button>

          <a
            href={`tel:${RESTAURANT_INFO.phoneClean}`}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/20 transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#FFD21F]" />
            <span>Call {RESTAURANT_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
