import React from 'react';
import { Flame, Bike, Sparkles, ShieldCheck } from 'lucide-react';
import { KEY_FEATURES } from '../data/restaurantData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#E21B23]" />;
      case 'Zap':
      case 'Bike':
        return <Bike className="w-6 h-6 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#FFD21F]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#FFD21F]" />;
      default:
        return <Flame className="w-6 h-6 text-[#FFD21F]" />;
    }
  };

  return (
    <section className="py-20 bg-[#0B0B0B] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FFD21F] uppercase mb-2">
            <Flame className="w-3.5 h-3.5 text-[#E21B23]" />
            <span>The Yamama Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white uppercase">
            Why Foodies Choose <span className="text-gold-gradient">Yamama Shawaya</span>
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Committed to pure charcoal grilling, authentic Gulf-style spices, and exceptional local service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEY_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#FFD21F]/40 transition-all text-left flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed">{feature.description}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 text-[10px] text-[#FFD21F] font-mono uppercase tracking-wider font-semibold">
                Guaranteed Quality
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
