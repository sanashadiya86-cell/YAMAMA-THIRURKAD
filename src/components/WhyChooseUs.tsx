import React from 'react';
import { Flame, Bike, Sparkles, ShieldCheck } from 'lucide-react';
import { KEY_FEATURES } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#FF4500]" />;
      case 'Zap':
      case 'Bike':
        return <Bike className="w-6 h-6 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#FFD21F]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#FFA000]" />;
      default:
        return <Flame className="w-6 h-6 text-[#FF4500]" />;
    }
  };

  return (
    <section className="py-20 bg-[#09090D] border-b border-[#252530] relative overflow-hidden">
      {/* Background ambient smoke glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF4500]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center">
            <YamamaLogo size="sm" animate={true} glow="fire" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16161F] border border-[#FF5500]/40 text-[#FFA000] text-xs font-bold tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5 text-[#FF3E00] animate-pulse" />
            <span>The Yamama Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white uppercase">
            Why Foodies Choose <span className="text-fire-gradient">Yamama Shawaya</span>
          </h2>
          <p className="mt-2 text-sm text-[#A1A1AA]">
            Committed to pure charcoal grilling, authentic Gulf-style spices, and exceptional local service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEY_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#14141C] border border-[#2B2B38] hover:border-[#FF5500]/50 transition-all text-left flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#1B1B26] border border-[#343445] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#FF5500]/50 transition-all">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">{feature.description}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#262632] text-[10px] text-[#FFA000] font-mono uppercase tracking-wider font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
                <span>Guaranteed Quality</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
