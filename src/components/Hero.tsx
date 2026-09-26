import React, { useState } from 'react';
import { Flame, FileText, MessageCircle, Star, Sparkles, Bike, ShieldCheck, ChevronRight, Store, Utensils, Maximize2, X, MapPin } from 'lucide-react';
import { RESTAURANT_INFO, MENU_ITEMS } from '../data/restaurantData';
import { useCart } from '../context/CartContext';
import { YamamaLogo } from './YamamaLogo';

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
  const [activeMediaTab, setActiveMediaTab] = useState<'food' | 'exterior' | 'interior'>('exterior');
  const [enlargedImage, setEnlargedImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  const signatureItem = MENU_ITEMS.find((i) => i.id === 'shawaya-bishawari-full') || MENU_ITEMS[0];

  return (
    <section id="overview" className="relative pt-6 pb-16 lg:py-20 overflow-hidden bg-[#070709]">
      {/* Background ambient fire and smoke drift glows */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[#FF3A00]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#FF8000]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#14141B] opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Fire Badge with Animated Yamama Logo */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#16161D] border border-[#FF5500]/40 text-[#FFA000] text-xs font-bold tracking-wider uppercase shadow-lg shadow-[#FF4500]/15">
              <YamamaLogo size="sm" animate={true} glow="fire" />
              <span className="text-white font-extrabold">{RESTAURANT_INFO.tagline}</span>
              <span className="w-1 h-1 rounded-full bg-[#FF4500]" />
              <span className="text-[#A1A1AA]">Angadipuram, Thirurkad</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] uppercase">
              Charcoal Smoke <span className="text-fire-gradient">Shawaya</span> & Fragrant{' '}
              <span className="text-gold-gradient">Bishawari</span> Rice
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#D4D4D8] max-w-2xl leading-relaxed">
              Experience genuine open-flame hardwood roasting at{' '}
              <strong className="text-white font-semibold">Yamama Shawaya</strong>. Whole spiced chickens
              slow-turned over glowing red charcoal spits, paired with aromatic long-grain Bishawari rice,
              thick garlic toum, and freshly baked kubbus.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-[#14141A] border border-[#2B2B36] hover:border-[#FF5500]/40 transition-colors">
                <Bike className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-[#E4E4E7]">Free Delivery</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-[#14141A] border border-[#2B2B36] hover:border-[#FF5500]/40 transition-colors">
                <Flame className="w-4 h-4 text-[#FF3E00] shrink-0" />
                <span className="text-xs font-bold text-[#E4E4E7]">100% Charcoal</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 p-3 rounded-2xl bg-[#14141A] border border-[#2B2B36] hover:border-[#FF5500]/40 transition-colors">
                <ShieldCheck className="w-4 h-4 text-[#FFB703] shrink-0" />
                <span className="text-xs font-bold text-[#E4E4E7]">Halal Fresh Daily</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onOrderNow}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF4500] via-[#E21B23] to-[#FF2200] hover:from-[#FF5E00] hover:to-[#FF3300] text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-[#FF4500]/30 transition-all active:scale-95 glow-fire"
              >
                <Flame className="w-4 h-4 fill-white" />
                <span>Explore Menu & Order</span>
              </button>

              <button
                onClick={onOpenMenuCard}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#1A1A22] hover:bg-[#252530] text-white border border-[#3A3A4A] hover:border-[#FF6600]/40 font-extrabold text-sm uppercase tracking-wider transition-all active:scale-95"
              >
                <FileText className="w-4 h-4 text-[#FFB703]" />
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

            {/* Restaurant Photos Quick Selector */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-[#A1A1AA] font-medium">View Photos:</span>
              <button
                onClick={() => setActiveMediaTab('exterior')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeMediaTab === 'exterior'
                    ? 'bg-[#FF4500] text-white shadow-md shadow-[#FF4500]/30'
                    : 'bg-[#16161F] text-[#D4D4D8] hover:text-white border border-[#2B2B36]'
                }`}
              >
                <Store className="w-3.5 h-3.5 text-[#FFB703]" />
                <span>Restaurant Storefront</span>
              </button>
              <button
                onClick={() => setActiveMediaTab('interior')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeMediaTab === 'interior'
                    ? 'bg-[#FF4500] text-white shadow-md shadow-[#FF4500]/30'
                    : 'bg-[#16161F] text-[#D4D4D8] hover:text-white border border-[#2B2B36]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FFB703]" />
                <span>Cozy Dining Hall</span>
              </button>
              <button
                onClick={() => setActiveMediaTab('food')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeMediaTab === 'food'
                    ? 'bg-[#FF4500] text-white shadow-md shadow-[#FF4500]/30'
                    : 'bg-[#16161F] text-[#D4D4D8] hover:text-white border border-[#2B2B36]'
                }`}
              >
                <Utensils className="w-3.5 h-3.5 text-[#FFB703]" />
                <span>Signature Feast</span>
              </button>
            </div>

            {/* Location & Time info banner */}
            <div className="pt-2 text-xs text-[#A1A1AA] flex flex-wrap items-center gap-4 border-t border-[#252530]">
              <span className="text-[#FFA000] font-bold">📍 Direction: Angadipuram, Thirurkad (Calicut Rd)</span>
              <span className="text-[#3F3F46]">•</span>
              <span>⏰ 12:00 PM – 12:00 AM Daily</span>
              <span className="text-[#3F3F46]">•</span>
              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="text-white hover:text-[#FFA000] font-mono font-bold"
              >
                📞 {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Restaurant Picture tabs */}
          <div className="lg:col-span-5 relative">
            {/* Visual Card Container */}
            <div className="relative rounded-3xl overflow-hidden border border-[#FF5500]/40 bg-gradient-to-b from-[#181822] via-[#111116] to-[#0A0A0D] p-3 shadow-2xl glow-smoke group">
              {/* Media Switcher Tab Strip */}
              <div className="flex items-center gap-1 p-1 mb-2.5 rounded-xl bg-[#0F0F14] border border-[#252530]">
                <button
                  onClick={() => setActiveMediaTab('exterior')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-[11px] font-extrabold uppercase tracking-wide transition-all ${
                    activeMediaTab === 'exterior'
                      ? 'bg-gradient-to-r from-[#FF4500] to-[#E21B23] text-white shadow'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  <Store className="w-3.5 h-3.5" />
                  <span>Storefront</span>
                </button>
                <button
                  onClick={() => setActiveMediaTab('interior')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-[11px] font-extrabold uppercase tracking-wide transition-all ${
                    activeMediaTab === 'interior'
                      ? 'bg-gradient-to-r from-[#FF4500] to-[#E21B23] text-white shadow'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Interior</span>
                </button>
                <button
                  onClick={() => setActiveMediaTab('food')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-[11px] font-extrabold uppercase tracking-wide transition-all ${
                    activeMediaTab === 'food'
                      ? 'bg-gradient-to-r from-[#FF4500] to-[#E21B23] text-white shadow'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Feast</span>
                </button>
              </div>

              {/* Main Image Frame */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black">
                {activeMediaTab === 'exterior' && (
                  <>
                    <img
                      src="/yamama-shop-exterior.jpg"
                      alt="Yamama Shawaya Restaurant Storefront on Calicut Road"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                      onClick={() =>
                        setEnlargedImage({
                          src: '/yamama-shop-exterior.jpg',
                          title: 'Yamama Shawaya Restaurant Storefront',
                          subtitle: 'Calicut Road, Oradampalam, Angadipuram, Thirurkad',
                        })
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0D]/95 via-[#0A0A0D]/20 to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[#FF6600]/40 flex items-center gap-1.5 text-xs font-bold text-white shadow-lg">
                      <MapPin className="w-3.5 h-3.5 text-[#FF4500]" />
                      <span>Calicut Road Landmark</span>
                    </div>

                    <button
                      onClick={() =>
                        setEnlargedImage({
                          src: '/yamama-shop-exterior.jpg',
                          title: 'Yamama Shawaya Restaurant Storefront',
                          subtitle: 'Calicut Road, Oradampalam, Angadipuram, Thirurkad',
                        })
                      }
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/80 hover:bg-[#FF4500] text-white border border-white/20 transition-colors shadow-lg"
                      title="Enlarge Restaurant Picture"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Bottom Card Overlay info */}
                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <div className="p-3 rounded-xl bg-[#121217]/95 backdrop-blur-md border border-[#30303D]">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FFA000]">
                              Real Restaurant Picture
                            </span>
                            <h2 className="text-sm font-bold text-white uppercase tracking-wide">
                              Yamama Shawaya Storefront
                            </h2>
                            <p className="text-[11px] text-[#A1A1AA] line-clamp-1">
                              Direction: Angadipuram, Thirurkad • Easy highway parking & quick takeaway
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              setEnlargedImage({
                                src: '/yamama-shop-exterior.jpg',
                                title: 'Yamama Shawaya Restaurant Storefront',
                                subtitle: 'Calicut Road, Oradampalam, Angadipuram, Thirurkad',
                              })
                            }
                            className="px-2.5 py-1 rounded-lg bg-[#20202C] hover:bg-[#FF4500] text-white text-[11px] font-bold border border-[#3A3A4A] transition-colors shrink-0"
                          >
                            Zoom
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeMediaTab === 'interior' && (
                  <>
                    <img
                      src="/yamama-cozy-interior.jpg"
                      alt="Yamama Shawaya Cozy Dining Interior"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                      onClick={() =>
                        setEnlargedImage({
                          src: '/yamama-cozy-interior.jpg',
                          title: 'Yamama Shawaya Cozy Dining Interior',
                          subtitle: 'Warm amber ambiance with family booths and live rotisserie counter',
                        })
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0D]/95 via-[#0A0A0D]/20 to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-emerald-500/40 flex items-center gap-1.5 text-xs font-bold text-emerald-400 shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Cozy Dining Space</span>
                    </div>

                    <button
                      onClick={() =>
                        setEnlargedImage({
                          src: '/yamama-cozy-interior.jpg',
                          title: 'Yamama Shawaya Cozy Dining Interior',
                          subtitle: 'Warm amber ambiance with family booths and live rotisserie counter',
                        })
                      }
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/80 hover:bg-[#FF4500] text-white border border-white/20 transition-colors shadow-lg"
                      title="Enlarge Interior Picture"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Bottom Card Overlay info */}
                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <div className="p-3 rounded-xl bg-[#121217]/95 backdrop-blur-md border border-[#30303D]">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
                              Dine-in Ambiance
                            </span>
                            <h2 className="text-sm font-bold text-white uppercase tracking-wide">
                              Warm & Trendy Hall
                            </h2>
                            <p className="text-[11px] text-[#A1A1AA] line-clamp-1">
                              Comfortable booth seating, warm lighting, and open-flame aroma
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              setEnlargedImage({
                                src: '/yamama-cozy-interior.jpg',
                                title: 'Yamama Shawaya Cozy Dining Interior',
                                subtitle: 'Warm amber ambiance with family booths and live rotisserie counter',
                              })
                            }
                            className="px-2.5 py-1 rounded-lg bg-[#20202C] hover:bg-[#FF4500] text-white text-[11px] font-bold border border-[#3A3A4A] transition-colors shrink-0"
                          >
                            Zoom
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeMediaTab === 'food' && (
                  <>
                    <img
                      src={signatureItem.image}
                      alt="Yamama Shawaya + Bishawari Rice Combo"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0D]/90 via-[#0A0A0D]/30 to-transparent" />

                    {/* Rating Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#FF6600]/40 flex items-center gap-1.5 text-xs font-bold text-white shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-[#FFB703] text-[#FFB703]" />
                      <span>4.9</span>
                      <span className="text-[#A1A1AA] text-[10px]">(490+ Reviews)</span>
                    </div>

                    {/* Portion/Chef Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r from-[#FF4500] to-[#E21B23] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                      #1 Signature Feast
                    </div>

                    {/* Bottom Card Overlay info */}
                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <div className="p-3.5 rounded-xl bg-[#121217]/90 backdrop-blur-md border border-[#30303D]">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h2 className="text-sm font-bold text-white uppercase tracking-wide">
                              Shawaya + Bishawari Rice
                            </h2>
                            <p className="text-[11px] text-[#A1A1AA] line-clamp-1">
                              Whole charcoal roasted chicken with spiced rice, kubbus & garlic toum
                            </p>
                          </div>
                          <div className="text-right shrink-0">
                            <div className="text-base font-extrabold text-[#FFA000] font-mono">₹660</div>
                            <div className="text-[10px] text-[#71717A] line-through">₹720</div>
                          </div>
                        </div>

                        <div className="mt-2.5 pt-2 border-t border-[#252530] flex items-center justify-between">
                          <span className="text-[10px] text-[#FFA000] font-bold uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Quarter Combo at ₹180
                          </span>
                          <button
                            onClick={() => addToCart(signatureItem, 1)}
                            className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#FF9900] to-[#FFD21F] hover:from-[#FFA600] hover:to-[#FFE066] text-black text-xs font-extrabold tracking-wide uppercase transition-colors"
                          >
                            + Add to Bag
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Floating Trust Callout with logo */}
            <div className="mt-4 p-3.5 rounded-2xl bg-[#15151C] border border-[#2B2B36] flex items-center justify-between text-left text-xs text-[#D4D4D8]">
              <div className="flex items-center gap-2.5">
                <YamamaLogo size="sm" animate={false} glow="ember" />
                <div>
                  <p className="font-bold text-white text-xs">Direct WhatsApp Booking</p>
                  <p className="text-[10px] text-[#A1A1AA]">Free Delivery across Angadipuram, Thirurkad</p>
                </div>
              </div>
              <button
                onClick={onOrderNow}
                className="text-xs text-[#FFA000] hover:underline font-bold inline-flex items-center"
              >
                View Menu <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {enlargedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setEnlargedImage(null)}
        >
          <button
            onClick={() => setEnlargedImage(null)}
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
              src={enlargedImage.src}
              alt={enlargedImage.title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl border border-[#FF5500]/50 shadow-2xl glow-smoke"
            />
            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs font-bold text-[#FFA000] uppercase tracking-wider">
                Yamama Shawaya • Calicut Road (Angadipuram, Thirurkad)
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                {enlargedImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">{enlargedImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
