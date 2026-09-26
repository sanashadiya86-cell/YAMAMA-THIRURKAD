import React from 'react';
import { Flame } from 'lucide-react';

interface YamamaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  tagline?: string;
  animate?: boolean;
  className?: string;
  glow?: 'fire' | 'ember' | 'smoke' | 'none';
}

export const YamamaLogo: React.FC<YamamaLogoProps> = ({
  size = 'md',
  showText = false,
  tagline,
  animate = true,
  className = '',
  glow = 'fire',
}) => {
  const sizeMap = {
    sm: {
      wrapper: 'w-9 h-9',
      img: 'w-9 h-9',
      flame: 'w-3 h-3 -bottom-1 -right-1',
      text: 'text-sm',
      sub: 'text-[9px]',
    },
    md: {
      wrapper: 'w-12 h-12',
      img: 'w-12 h-12',
      flame: 'w-4 h-4 -bottom-1.5 -right-1',
      text: 'text-base sm:text-lg',
      sub: 'text-[10px]',
    },
    lg: {
      wrapper: 'w-16 h-16 sm:w-20 sm:h-20',
      img: 'w-16 h-16 sm:w-20 sm:h-20',
      flame: 'w-5 h-5 -bottom-2 -right-1.5',
      text: 'text-xl sm:text-2xl',
      sub: 'text-xs',
    },
    xl: {
      wrapper: 'w-24 h-24 sm:w-28 sm:h-28',
      img: 'w-24 h-24 sm:w-28 sm:h-28',
      flame: 'w-7 h-7 -bottom-2 -right-2',
      text: 'text-2xl sm:text-3xl',
      sub: 'text-sm',
    },
  };

  const currentSize = sizeMap[size];

  const glowStyles = {
    fire: 'shadow-[0_0_25px_rgba(255,77,0,0.55)] border-[#FF4D00]',
    ember: 'shadow-[0_0_25px_rgba(255,210,31,0.5)] border-[#FFD21F]',
    smoke: 'shadow-[0_0_20px_rgba(110,110,120,0.4)] border-[#52525b]',
    none: 'border-white/20',
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Animated Logo Crest with Charcoal Fire Aura */}
      <div className={`relative ${currentSize.wrapper} shrink-0 select-none group`}>
        {/* Animated Smoke & Flame Ambient Auras */}
        {animate && (
          <>
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#FF2A00] via-[#FF8800] to-[#FFD21F] opacity-70 blur-md animate-pulse pointer-events-none" />
            <div className="absolute -inset-2.5 rounded-full bg-[#18181B] opacity-40 blur-lg animate-ping pointer-events-none" style={{ animationDuration: '3.5s' }} />
            {/* Rotating Ember Ring */}
            <div className="absolute -inset-1 rounded-full border border-dashed border-[#FF9900]/60 animate-spin-slow pointer-events-none" />
          </>
        )}

        {/* Charcoal Core Container */}
        <div
          className={`relative ${currentSize.img} rounded-full overflow-hidden bg-[#FDB813] border-2 ${glowStyles[glow]} transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,60,0,0.8)]`}
        >
          <img
            src="/yamama-logo.jpg"
            alt="Yamama Shawaya Logo"
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:rotate-3"
            onError={(e) => {
              // fallback if /yamama-logo.jpg fails
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('yamama_shawaya_logo')) {
                target.src = '/src/assets/images/yamama_shawaya_logo_1790412212940.jpg';
              }
            }}
          />
        </div>

        {/* Flickering Fire Badge */}
        {animate && (
          <div
            className={`absolute ${currentSize.flame} bg-gradient-to-br from-[#FF4D00] to-[#E21B23] text-white p-1 rounded-full border border-[#FFD21F] shadow-lg flex items-center justify-center animate-bounce`}
            style={{ animationDuration: '2s' }}
          >
            <Flame className="w-full h-full fill-[#FFD21F] text-[#FFD21F]" />
          </div>
        )}
      </div>

      {/* Optional Brand Name Text with Fire & Smoke Gradients */}
      {showText && (
        <div className="text-left">
          <div className="flex items-center gap-1.5 font-display font-extrabold uppercase tracking-wider leading-none">
            <span className={`${currentSize.text} text-white`}>Yamama</span>
            <span className={`${currentSize.text} text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E00] via-[#FFAE00] to-[#FFD21F]`}>
              Shawaya
            </span>
          </div>
          <p className={`${currentSize.sub} font-mono tracking-widest text-[#9CA3AF] uppercase mt-0.5 flex items-center gap-1`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500] animate-ping" />
            <span>{tagline || 'Refill Your Energy • Charcoal & Smoke'}</span>
          </p>
        </div>
      )}
    </div>
  );
};
