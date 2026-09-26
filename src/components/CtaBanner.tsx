import React from 'react';
import { Flame, Phone, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

interface CtaBannerProps {
  onOrderNow: () => void;
  onOpenWhatsApp: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOrderNow, onOpenWhatsApp }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0C0C10] via-[#1A0F0D] to-[#0C0C10] border-y border-[#FF4D00]/30 relative overflow-hidden text-center">
      {/* Background fire and smoke ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF3A00]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <div className="flex items-center justify-center">
          <YamamaLogo size="md" animate={true} glow="fire" />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181822] border border-[#FF5500]/40 text-[#FFA000] text-xs font-bold uppercase tracking-wider">
          <Flame className="w-3.5 h-3.5 fill-[#FF4500] text-[#FF4500] animate-pulse" />
          <span>Craving Hot Charcoal Grills Tonight?</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white uppercase tracking-tight">
          Refill Your Energy With <span className="text-fire-gradient">Yamama Shawaya</span>
        </h2>

        <p className="text-base sm:text-lg text-[#D4D4D8] max-w-2xl mx-auto">
          Crispy skin, juicy spiced meat, and steaming Bishawari rice. Delivered hot to your doorstep
          anywhere in Angadippuram, Thirurkad, and Perinthalmanna!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onOrderNow}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF4500] via-[#E21B23] to-[#FF2200] hover:from-[#FF5E00] hover:to-[#FF3300] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#FF4500]/35 transition-all active:scale-95 glow-fire"
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
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#1B1B26] hover:bg-[#252535] text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-[#3C3C4C] hover:border-[#FF5500]/50 transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#FFA000]" />
            <span>Call {RESTAURANT_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
