import React, { useState } from 'react';
import { Sparkles, Users, Coffee, Flame, MapPin, Clock, Maximize2, X, Store } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

export const AmbianceSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<{ src: string; title: string; desc: string } | null>(null);

  const ambianceFeatures = [
    {
      icon: Sparkles,
      title: 'Warm Amber Lighting',
      desc: 'Thoughtfully designed illumination creating a soothing, modern evening glow.',
    },
    {
      icon: Users,
      title: 'Spacious Group Seating',
      desc: 'Comfortable family tables, couple booths, and solo diner arrangements.',
    },
    {
      icon: Coffee,
      title: 'Casual & Trendy Vibe',
      desc: 'Air-conditioned comfort with sleek contemporary woodwork and open-flame aesthetic.',
    },
    {
      icon: Flame,
      title: 'Hygienic Show Counters',
      desc: 'Watch your fresh shawaya being carved and wrapped right in front of you.',
    },
  ];

  return (
    <section id="ambiance" className="py-20 bg-[#08080B] relative border-b border-[#252530]">
      {/* Background ambient smoke glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#FF3E00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center">
            <YamamaLogo size="sm" animate={true} glow="ember" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16161F] border border-[#FF5500]/40 text-[#FFA000] text-xs font-bold tracking-widest uppercase">
            <Store className="w-3.5 h-3.5 text-[#FFD21F]" />
            <span>Storefront & Dining Space</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight uppercase">
            Storefront & <span className="text-fire-gradient">Trendy Interior</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#D4D4D8]">
            {RESTAURANT_INFO.ambiance.description}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visuals: Exterior & Interior Split */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#2B2B38] bg-[#121218] group shadow-xl cursor-pointer hover:border-[#FF5500]/60 transition-all duration-300"
              onClick={() =>
                setActivePhoto({
                  src: '/yamama-shop-exterior.jpg',
                  title: 'Yamama Shawaya Restaurant Storefront',
                  desc: 'Our welcoming restaurant facade on Calicut Road (Direction: Angadipuram, Thirurkad) at Oradampalam, Valiyaveetilpadi. Ample highway front parking available.',
                })
              }
            >
              <img
                src="/yamama-shop-exterior.jpg"
                alt="Yamama Storefront Calicut Road"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E]/90 via-transparent to-transparent" />
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/75 hover:bg-[#FF4500] text-white transition-colors border border-white/20">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFA000] bg-black/80 px-2 py-0.5 rounded border border-[#FF5500]/30">
                  Storefront View
                </span>
                <p className="text-xs font-bold text-white mt-1">Calicut Road Facade</p>
                <p className="text-[11px] text-[#A1A1AA]">Easy parking & prominent landmark</p>
              </div>
            </div>

            <div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#2B2B38] bg-[#121218] group shadow-xl cursor-pointer hover:border-emerald-500/60 transition-all duration-300"
              onClick={() =>
                setActivePhoto({
                  src: '/yamama-cozy-interior.jpg',
                  title: 'Warm & Cozy Dining Hall',
                  desc: 'Thoughtfully designed illumination, family booths, and comfortable dining tables with live shawaya spit view.',
                })
              }
            >
              <img
                src="/yamama-cozy-interior.jpg"
                alt="Yamama Warm Dining Hall"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E]/90 via-transparent to-transparent" />
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/75 hover:bg-[#FF4500] text-white transition-colors border border-white/20">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-black/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  Interior Ambiance
                </span>
                <p className="text-xs font-bold text-white mt-1">Warm Ambient Lighting</p>
                <p className="text-[11px] text-[#A1A1AA]">Cozy booth & family seating</p>
              </div>
            </div>
          </div>

          {/* Right Column: Features and Timings */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {ambianceFeatures.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-[#14141C] border border-[#2B2B38] hover:border-[#FF5500]/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#FF4500]/15 text-[#FFA000] flex items-center justify-center mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wide">
                      {feat.title}
                    </h3>
                    <p className="text-[11px] text-[#A1A1AA] mt-1 leading-relaxed">{feat.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick Visit Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#171722] to-[#101017] border border-[#FF5500]/30 space-y-3 shadow-lg">
              <div className="flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Open Daily: 12:00 PM – 12:00 AM
                </span>
                <span className="text-[#A1A1AA] font-mono text-[10px] font-bold">No Day Off</span>
              </div>
              <p className="text-xs text-[#E4E4E7] leading-relaxed flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF4500] shrink-0 mt-0.5" />
                <span>
                  Direction: Angadipuram, Thirurkad (Calicut Road, Oradampalam, Valiyaveetilpadi).
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePhoto(null)}
        >
          <button
            onClick={() => setActivePhoto(null)}
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
              src={activePhoto.src}
              alt={activePhoto.title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl border border-[#FF5500]/50 shadow-2xl glow-smoke"
            />
            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs font-bold text-[#FFA000] uppercase tracking-wider">
                Yamama Shawaya Restaurant Photos
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                {activePhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">{activePhoto.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
