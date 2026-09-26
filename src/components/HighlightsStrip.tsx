import React from 'react';
import { Flame, Bike, Phone, Clock, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

export const HighlightsStrip: React.FC = () => {
  const highlights = [
    { icon: Flame, text: '100% Real Charcoal Shawaya', color: 'text-[#FF4500]' },
    { icon: Sparkles, text: 'Signature Bishawari Spiced Rice', color: 'text-[#FFD21F]' },
    { icon: Bike, text: 'Free Home Delivery (Angadipuram & Perinthalmanna)', color: 'text-emerald-400' },
    { icon: Phone, text: `Call: ${RESTAURANT_INFO.phone} / ${RESTAURANT_INFO.phone2}`, color: 'text-[#E4E4E7]' },
    { icon: Clock, text: 'Open 12:00 PM – 12:00 AM Daily', color: 'text-[#FFA000]' },
    { icon: Sparkles, text: 'Cozy, Casual & Trendy Interior', color: 'text-amber-400' },
  ];

  return (
    <div className="bg-[#09090D] border-y border-[#262632] py-3.5 overflow-hidden select-none relative">
      {/* Subtle charcoal glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500]/5 via-transparent to-[#FF8800]/5 pointer-events-none" />

      <div className="flex items-center gap-8 whitespace-nowrap overflow-x-auto no-scrollbar px-4 sm:px-6 relative z-10">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#16161F] border border-[#FF5500]/30 shrink-0">
          <YamamaLogo size="sm" animate={true} glow="fire" />
          <span className="text-xs font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] to-[#FFD21F]">
            Yamama Live
          </span>
        </div>

        {highlights.concat(highlights).map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D4D4D8] shrink-0 hover:text-white transition-colors"
            >
              <Icon className={`w-4 h-4 ${item.color}`} />
              <span>{item.text}</span>
              <span className="text-[#3F3F4E] mx-2">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
