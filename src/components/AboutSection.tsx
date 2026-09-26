import React from 'react';
import { Flame, ShieldCheck, Heart, Sparkles, MapPin, FileText } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface AboutSectionProps {
  onOpenMenuCard: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenMenuCard }) => {
  return (
    <section id="about" className="py-20 bg-[#0E0E0E] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Ambiance badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl p-2 group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="/yamama-cozy-interior.jpg"
                  alt="Yamama Shawaya Cozy Interior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="px-3 py-1 rounded-full bg-[#FFD21F] text-black text-xs font-bold uppercase tracking-wider">
                    Dine-in Experience
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Cozy, Casual & Trendy Interior
                  </h3>
                  <p className="text-xs text-white/70">
                    Warm amber lighting and spacious booth seating suitable for solo diners and groups.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Location Card */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#161616] border border-[#FFD21F]/40 p-4 rounded-2xl shadow-2xl max-w-xs text-left">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FFD21F] uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4 text-[#E21B23]" />
                <span>Prime Location</span>
              </div>
              <p className="text-xs text-white font-medium">
                Calicut Road, Oradampalam, Valiyaveetilpadi, Angadipuram
              </p>
            </div>
          </div>

          {/* Right Column: Story & Principles */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FFD21F] uppercase">
              <Flame className="w-3.5 h-3.5 text-[#E21B23]" />
              <span>Our Culinary Craft</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white uppercase leading-tight">
              Where Charcoal Embers Meet <span className="text-gold-gradient">Authentic Flavours</span>
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              At <strong className="text-white font-semibold">Yamama Shawaya</strong>, we stay true to the
              traditional Arabic rotisserie craft. Unlike modern commercial setups that rely on gas or
              electric heat, every chicken is turned slowly over red-hot natural hardwood charcoal embers.
            </p>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              This slow-roasting seals in the natural juices while imparting that unmistakable smoky aroma
              deep into the meat. Complemented by our proprietary Bishawari spiced rice—infused with whole
              cardamom, cloves, and fried sultanas—every plate is a feast of texture and richness.
            </p>

            {/* 3 Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-lg bg-[#E21B23]/20 text-[#E21B23] shrink-0 mt-0.5">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Genuine Natural Hardwood Charcoal</h3>
                  <p className="text-xs text-white/70">
                    No artificial smoke flavorings or microwave reheating. Just pure, slow charcoal-roasted poultry.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">100% Halal Fresh Chicken Daily</h3>
                  <p className="text-xs text-white/70">
                    Sourced fresh every morning from trusted local farms. Cleaned with lemon and marinated in pure spices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-lg bg-[#FFD21F]/20 text-[#FFD21F] shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">House-Whipped Creamy Garlic Toum</h3>
                  <p className="text-xs text-white/70">
                    Freshly whipped in small batches with garlic, olive oil, and fresh lemon. No preservatives or powders.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenMenuCard}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1C1C1C] hover:bg-[#252525] border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                <FileText className="w-4 h-4 text-[#FFD21F]" />
                <span>Browse Menu Card</span>
              </button>
              <span className="text-xs text-white/60">
                Motto: <span className="text-[#FFD21F] font-bold">Refill Your Energy</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
