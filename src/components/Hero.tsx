import React from 'react';
import { Flame, FileText, MessageCircle, Star, Sparkles, Bike, ShieldCheck, ChevronRight } from 'lucide-react';
import { RESTAURANT_INFO, MENU_ITEMS } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

interface HeroProps {
  onOrderNow: () => void;
  onOpenMenuCard: () => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOrderNow,
  onOpenMenuCard,
  onOpenWhatsApp,
}) => {
  const { addToCart } = useCart();
  const signatureItem = MENU_ITEMS.find((i) => i.id === 'shawaya-bishawari-full') || MENU_ITEMS[0];

  return (
    <section id="overview" className="relative pt-6 pb-16 lg:py-20 overflow-hidden bg-[#0B0B0B]">
      {/* Background ambient glow circles */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#FFD21F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#E21B23]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#FFD21F]/30 text-[#FFD21F] text-xs font-bold tracking-wider uppercase">
              <Flame className="w-3.5 h-3.5 text-[#E21B23] animate-pulse" />
              <span>{RESTAURANT_INFO.tagline}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-white/80">Angadipuram, Kerala</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] uppercase">
              Juicy Charcoal <span className="text-gold-gradient">Shawaya</span> & Fragrant{' '}
              <span className="text-[#FFD21F]">Bishawari</span> Rice
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Experience authentic open-flame cooking at{' '}
              <strong className="text-white font-semibold">Yamama Shawaya</strong>. Tender whole chickens
              slow-turned over glowing natural charcoal spits, paired with aromatic spiced Bishawari rice,
              whipped garlic toum, and freshly baked kubbus.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <Bike className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-white/90">Free Delivery</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <Flame className="w-4 h-4 text-[#E21B23] shrink-0" />
                <span className="text-xs font-semibold text-white/90">100% Charcoal</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#FFD21F] shrink-0" />
                <span className="text-xs font-semibold text-white/90">Halal Certified</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onOrderNow}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E21B23] hover:bg-[#c9141b] text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-[#E21B23]/30 transition-all active:scale-95 glow-red"
              >
                <Flame className="w-4 h-4 fill-white" />
                <span>Explore Menu & Order</span>
              </button>

              <button
                onClick={onOpenMenuCard}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#1A1A1A] hover:bg-[#252525] text-white border border-white/20 font-bold text-sm uppercase tracking-wider transition-all active:scale-95"
              >
                <FileText className="w-4 h-4 text-[#FFD21F]" />
                <span>View Menu Card</span>
              </button>

              <button
                onClick={onOpenWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-600/30 transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Delivery</span>
              </button>
            </div>

            {/* Location & Time info banner */}
            <div className="pt-2 text-xs text-white/60 flex flex-wrap items-center gap-4 border-t border-white/10">
              <span className="text-emerald-400 font-semibold">📍 Calicut Road, Oradampalam</span>
              <span>•</span>
              <span>⏰ 12:00 PM – 12:00 AM Daily</span>
              <span>•</span>
              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="text-white hover:text-[#FFD21F] font-mono font-bold"
              >
                📞 {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#FFD21F]/30 bg-gradient-to-b from-[#181818] to-[#101010] p-3 shadow-2xl group">
              {/* Image Frame */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black">
                <img
                  src={signatureItem.image}
                  alt="Yamama Shawaya + Bishawari Rice Combo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center gap-1.5 text-xs font-bold text-white shadow-lg">
                  <Star className="w-3.5 h-3.5 fill-[#FFD21F] text-[#FFD21F]" />
                  <span>4.9</span>
                  <span className="text-white/60 text-[10px]">(450+ Local Reviews)</span>
                </div>

                {/* Portion/Chef Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#E21B23] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                  #1 Signature Combo
                </div>

                {/* Bottom Card Overlay info */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/15">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h2 className="text-sm font-bold text-white uppercase tracking-wide">
                          Shawaya + Bishawari Rice
                        </h2>
                        <p className="text-[11px] text-white/70 line-clamp-1">
                          Full chicken with aromatic spiced rice, kubbus & garlic toum
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-base font-extrabold text-[#FFD21F] font-mono">₹660</div>
                        <div className="text-[10px] text-white/50 line-through">₹720</div>
                      </div>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Quarter Combo at ₹180
                      </span>
                      <button
                        onClick={() => addToCart(signatureItem, 1)}
                        className="px-3 py-1 rounded-lg bg-[#FFD21F] hover:bg-[#ffd943] text-black text-xs font-extrabold tracking-wide uppercase transition-colors"
                      >
                        + Add to Bag
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Callout */}
            <div className="mt-4 p-3 rounded-2xl bg-[#141414] border border-white/10 flex items-center justify-between text-left text-xs text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-bold text-white text-xs">Direct WhatsApp Booking</p>
                  <p className="text-[10px] text-white/50">Free Delivery across Angadippuram</p>
                </div>
              </div>
              <button
                onClick={onOrderNow}
                className="text-xs text-[#FFD21F] hover:underline font-bold inline-flex items-center"
              >
                View Menu <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
