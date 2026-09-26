import React from 'react';
import { Sparkles, Users, Coffee, Music, MapPin, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const AmbianceSection: React.FC = () => {
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
      icon: Music,
      title: 'Hygienic Show Counters',
      desc: 'Watch your fresh shawaya being carved and wrapped right in front of you.',
    },
  ];

  return (
    <section id="ambiance" className="py-20 bg-[#0B0B0B] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FFD21F] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD21F]" />
            <span>Dining Space & Atmosphere</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight uppercase">
            Cozy, Casual & <span className="text-gold-gradient">Trendy Interior</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/80">
            {RESTAURANT_INFO.ambiance.description}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visuals: Exterior & Interior Split */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 bg-black group shadow-xl">
              <img
                src="/yamama-shop-exterior.jpg"
                alt="Yamama Storefront Calicut Road"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD21F] bg-black/70 px-2 py-0.5 rounded">
                  Storefront View
                </span>
                <p className="text-xs font-bold text-white mt-1">Calicut Road Facade</p>
                <p className="text-[11px] text-white/60">Easy parking & prominent landmark</p>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 bg-black group shadow-xl">
              <img
                src="/yamama-cozy-interior.jpg"
                alt="Yamama Warm Dining Hall"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-black/70 px-2 py-0.5 rounded">
                  Interior Ambiance
                </span>
                <p className="text-xs font-bold text-white mt-1">Warm Ambient Lighting</p>
                <p className="text-[11px] text-white/60">Cozy booth & family seating</p>
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
                    className="p-4 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#FFD21F]/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#FFD21F]/15 text-[#FFD21F] flex items-center justify-center mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wide">
                      {feat.title}
                    </h3>
                    <p className="text-[11px] text-white/60 mt-1 leading-relaxed">{feat.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick Visit Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#181818] to-[#121212] border border-[#FFD21F]/20 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Open Daily: 12:00 PM – 12:00 AM
                </span>
                <span className="text-white/50 font-mono text-[10px]">No Day Off</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E21B23] shrink-0 mt-0.5" />
                <span>
                  Oradampalam, Valiyaveetilpadi, Calicut Road, Angadipuram, Near Perinthalmanna.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
