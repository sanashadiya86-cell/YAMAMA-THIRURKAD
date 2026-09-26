import React, { useState } from 'react';
import { Flame, ShieldCheck, Heart, MapPin, FileText, Store, Sparkles, Maximize2, X } from 'lucide-react';
import { YamamaLogo } from './YamamaLogo';

interface AboutSectionProps {
  onOpenMenuCard: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenMenuCard }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; desc: string } | null>(null);

  return (
    <section id="about" className="py-20 bg-[#08080B] relative border-b border-[#252530]">
      {/* Background ambient fire and smoke drift */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#FF3A00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF8000]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Real Restaurant Pictures Showcase */}
          <div className="lg:col-span-6 relative space-y-4">
            {/* Main Picture: Restaurant Storefront on Calicut Road */}
            <div className="relative rounded-2xl overflow-hidden border border-[#2F2F3D] bg-[#101015] shadow-2xl p-2 group glow-smoke">
              <div
                className="relative aspect-[16/10] rounded-xl overflow-hidden cursor-pointer"
                onClick={() =>
                  setSelectedPhoto({
                    src: '/yamama-shop-exterior.jpg',
                    title: 'Yamama Shawaya Restaurant Storefront',
                    desc: 'Prominent restaurant facade on Calicut Road (Direction: Angadipuram, Thirurkad) at Oradampalam, Valiyaveetilpadi with convenient street parking.',
                  })
                }
              >
                <img
                  src="/yamama-shop-exterior.jpg"
                  alt="Yamama Shawaya Restaurant Storefront on Calicut Road"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0D]/95 via-transparent to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#FF5500]/40 flex items-center gap-1.5 text-xs font-bold text-white shadow-md">
                  <Store className="w-3.5 h-3.5 text-[#FFA000]" />
                  <span>Restaurant Storefront</span>
                </div>

                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/80 hover:bg-[#FF4500] text-white transition-colors border border-white/20">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="px-2.5 py-0.5 rounded-md bg-gradient-to-r from-[#FF4500] to-[#E21B23] text-white text-[10px] font-extrabold uppercase tracking-wider shadow">
                    Direction: Angadipuram, Thirurkad
                  </span>
                  <h3 className="text-base font-bold text-white mt-1 uppercase">
                    Yamama Shawaya • Calicut Road
                  </h3>
                  <p className="text-[11px] text-[#A1A1AA]">
                    Easy highway access, takeaway counter, and welcoming facade at Oradampalam.
                  </p>
                </div>
              </div>
            </div>

            {/* Secondary Inset: Cozy Dining Interior */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="relative rounded-2xl overflow-hidden border border-[#2B2B38] bg-[#12121A] p-2 group cursor-pointer shadow-lg hover:border-emerald-500/40 transition-colors"
                onClick={() =>
                  setSelectedPhoto({
                    src: '/yamama-cozy-interior.jpg',
                    title: 'Warm Ambient Dining Hall',
                    desc: 'Cozy air-conditioned booth and group seating with ambient amber lighting and live view of the rotisserie counter.',
                  })
                }
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src="/yamama-cozy-interior.jpg"
                    alt="Yamama Shawaya Cozy Interior"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0D]/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 right-2 text-left">
                    <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider bg-black/80 px-1.5 py-0.5 rounded border border-emerald-500/30">
                      Dining Hall
                    </span>
                    <p className="text-xs font-bold text-white mt-0.5">Warm & Cozy Seating</p>
                  </div>
                </div>
              </div>

              {/* Floating Location Card with Fire Badge */}
              <div className="bg-[#14141C] border border-[#FF5500]/40 p-4 rounded-2xl shadow-xl text-left flex flex-col justify-center glow-smoke">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FFA000] uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4 text-[#FF4500] shrink-0" />
                  <span>Highway Landmark</span>
                </div>
                <p className="text-xs text-white font-medium">
                  Calicut Road, Oradampalam, Valiyaveetilpadi
                </p>
                <p className="text-[11px] text-[#A1A1AA] mt-1">
                  Direction: Angadipuram, Thirurkad • Parking available
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Principles */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-3">
              <YamamaLogo size="sm" animate={true} glow="fire" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16161F] border border-[#FF5500]/40 text-[#FFA000] text-xs font-bold tracking-widest uppercase">
                <Flame className="w-3.5 h-3.5 text-[#FF3E00] animate-pulse" />
                <span>Our Culinary Craft & Fire Story</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white uppercase leading-tight">
              Where Charcoal Embers Meet <span className="text-fire-gradient">Authentic Flavours</span>
            </h2>

            <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
              At <strong className="text-white font-semibold">Yamama Shawaya</strong>, we stay true to the
              traditional Arabic rotisserie craft. Unlike modern commercial setups that rely on gas or
              electric heat, every chicken is turned slowly over red-hot natural hardwood charcoal embers.
            </p>

            <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
              This slow-roasting seals in the natural juices while imparting that unmistakable smoky aroma
              deep into the meat. Complemented by our proprietary Bishawari spiced rice—infused with whole
              cardamom, cloves, and fried sultanas—every plate is a feast of texture and richness.
            </p>

            {/* 3 Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#14141B] border border-[#282835] hover:border-[#FF5500]/40 transition-colors">
                <div className="p-2 rounded-lg bg-[#FF4500]/20 text-[#FF4500] shrink-0 mt-0.5">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Genuine Natural Hardwood Charcoal</h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">
                    No artificial smoke flavorings or microwave reheating. Just pure, slow charcoal-roasted poultry.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#14141B] border border-[#282835] hover:border-emerald-500/40 transition-colors">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">100% Halal Fresh Chicken Daily</h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">
                    Sourced fresh every morning from trusted local farms. Cleaned with lemon and marinated in pure spices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#14141B] border border-[#282835] hover:border-[#FFB703]/40 transition-colors">
                <div className="p-2 rounded-lg bg-[#FFB703]/20 text-[#FFB703] shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">House-Whipped Creamy Garlic Toum</h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">
                    Freshly whipped in small batches with garlic, olive oil, and fresh lemon. No preservatives or powders.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenMenuCard}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#191924] hover:bg-[#222230] border border-[#3A3A4A] hover:border-[#FF5500]/50 text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                <FileText className="w-4 h-4 text-[#FFB703]" />
                <span>Browse Menu Card</span>
              </button>
              <span className="text-xs text-[#A1A1AA]">
                Motto: <span className="text-[#FFA000] font-bold">Refill Your Energy</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-[#1F1F2A] hover:bg-[#2A2A38] text-white z-50 transition-colors border border-[#3C3C4C]"
            aria-label="Close photo"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl border border-[#FF5500]/50 shadow-2xl glow-smoke"
            />
            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs font-bold text-[#FFA000] uppercase tracking-wider">
                Real Restaurant Photo • Yamama Shawaya
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">{selectedPhoto.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
