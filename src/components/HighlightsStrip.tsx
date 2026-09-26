import React from 'react';
import { Flame, Bike, Phone, Clock, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const HighlightsStrip: React.FC = () => {
  const highlights = [
    { icon: Flame, text: '100% Real Charcoal Shawaya', color: 'text-[#E21B23]' },
    { icon: Sparkles, text: 'Signature Bishawari Spiced Rice', color: 'text-[#FFD21F]' },
    { icon: Bike, text: 'Free Home Delivery (Angadipuram & Perinthalmanna)', color: 'text-emerald-400' },
    { icon: Phone, text: `Call: ${RESTAURANT_INFO.phone} / ${RESTAURANT_INFO.phone2}`, color: 'text-white' },
    { icon: Clock, text: 'Open 12:00 PM – 12:00 AM Daily', color: 'text-[#FFD21F]' },
    { icon: Sparkles, text: 'Cozy, Casual & Trendy Interior', color: 'text-emerald-400' },
  ];

  return (
    <div className="bg-[#121212] border-y border-white/10 py-3 overflow-hidden select-none">
      <div className="flex items-center gap-8 whitespace-nowrap animate-none overflow-x-auto no-scrollbar px-4 sm:px-6">
        {highlights.concat(highlights).map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90 shrink-0"
            >
              <Icon className={`w-4 h-4 ${item.color}`} />
              <span>{item.text}</span>
              <span className="text-white/20 mx-2">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
