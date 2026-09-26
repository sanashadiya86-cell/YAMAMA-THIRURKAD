import React, { useState } from 'react';
import { Flame, Star, Sparkles, Check, ShoppingBag, MessageCircle, FileText } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';
import { YamamaLogo } from './YamamaLogo';

interface SignatureSpotlightProps {
  onOrderNow: () => void;
  onOpenMenuCard: () => void;
}

export const SignatureSpotlight: React.FC<SignatureSpotlightProps> = ({
  onOpenMenuCard,
}) => {
  const { addToCart } = useCart();
  const [selectedPortion, setSelectedPortion] = useState<'full' | 'half' | 'quarter'>('full');
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const fullItem = MENU_ITEMS.find((i) => i.id === 'shawaya-bishawari-full')!;
  const halfItem = MENU_ITEMS.find((i) => i.id === 'shawaya-bishawari-half')!;
  const quarterItem = MENU_ITEMS.find((i) => i.id === 'shawaya-bishawari-quarter')!;

  const portionData = {
    full: {
      item: fullItem,
      title: 'Full Shawaya + Bishawari Rice Platter',
      serves: 'Feast for 4–5 People',
      price: fullItem.price,
      originalPrice: fullItem.originalPrice,
      savings: 'Save ₹60',
      tag: 'Best Value for Families & Parties',
      kubbus: '3 Fresh Kubbus',
      details: 'Whole charcoal-roasted chicken + generous mound of fragrant spiced Bishawari rice',
    },
    half: {
      item: halfItem,
      title: 'Half Shawaya + Bishawari Rice Platter',
      serves: 'Perfect for 2–3 People',
      price: halfItem.price,
      originalPrice: halfItem.originalPrice,
      savings: 'Save ₹40',
      tag: 'Ideal for Couples & Friends',
      kubbus: '2 Fresh Kubbus',
      details: 'Half juicy chicken shawaya + aromatic Bishawari spiced rice',
    },
    quarter: {
      item: quarterItem,
      title: 'Quarter Shawaya + Bishawari Rice Platter',
      serves: 'Single Person Meal',
      price: quarterItem.price,
      originalPrice: undefined,
      savings: null,
      tag: 'Most Popular Quick Lunch / Dinner',
      kubbus: '1 Fresh Kubbus',
      details: 'Quarter tender chicken leg or breast + aromatic spiced Bishawari rice',
    },
  };

  const current = portionData[selectedPortion];

  const handleAdd = () => {
    addToCart(current.item, 1);
    setAddedNotice(current.item.name);
    setTimeout(() => setAddedNotice(null), 2500);
  };

  const handleWhatsAppOrder = () => {
    const text = `Hi Yamama Shawaya, I want to order the *${current.title}* (₹${current.price}) for Free Home Delivery / Dine-in!`;
    const url = `https://wa.me/${RESTAURANT_INFO.whatsappClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const comboAccompaniments = [
    'Hardwood Charcoal Roasted Spiced Chicken (Crispy & Tender)',
    'Aromatic Long-Grain Bishawari Spiced Rice with Sultanas',
    'Freshly Baked Soft Kubbus Arabic Flatbread',
    'Whipped Creamy Garlic Toum Paste (House Made)',
    'Spicy Red Tomato Shatta & Fresh Mint Dip',
    'Signature Warm Rich Meat Gravy & Pickled Salad',
  ];

  return (
    <section id="special" className="py-20 bg-[#0A0A0D] relative border-b border-[#252530]">
      {/* Background ambient smoke & ember */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF3A00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Logo */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center">
            <YamamaLogo size="md" animate={true} glow="ember" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181822] border border-[#FF6600]/40 text-[#FFA000] text-xs font-bold tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5 text-[#FF3E00] animate-pulse" />
            <span>Yamama's #1 Signature Charcoal Dish</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight uppercase">
            Shawaya + <span className="text-fire-gradient">Bishawari Rice</span> Combo
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#D4D4D8]">
            A match made in heaven: our juicy, slow-turned charcoal chicken paired with the rich,
            aromatic heritage of spiced Bishawari rice.
          </p>
        </div>

        {/* Feature Box (Deep Charcoal Black & Smokey Grey with Hot Ember Highlights) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-[#16161D] via-[#101014] to-[#0A0A0D] rounded-3xl border border-[#FF5500]/40 p-6 sm:p-10 shadow-2xl glow-smoke">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#2F2F3D] bg-black group shadow-xl">
              <img
                src={current.item.image}
                alt={current.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0D]/90 via-transparent to-transparent" />

              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#FF4500] to-[#E21B23] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg">
                  House Specialty
                </span>
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#FFA000] text-xs font-bold border border-[#FF6600]/40">
                  {current.tag}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="text-xs text-[#A1A1AA] font-semibold">{current.serves}</div>
                  <div className="text-xl sm:text-2xl font-extrabold font-display text-white uppercase">
                    {current.title}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-black text-[#FFA000] font-mono">
                    ₹{current.price}
                  </div>
                  {current.originalPrice && (
                    <div className="text-xs text-[#71717A] line-through">₹{current.originalPrice}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Portion Selector Tabs (Fire & Smoke Charcoal style) */}
            <div className="grid grid-cols-3 gap-2.5">
              {(['quarter', 'half', 'full'] as const).map((portion) => {
                const info = portionData[portion];
                const active = selectedPortion === portion;
                return (
                  <button
                    key={portion}
                    onClick={() => setSelectedPortion(portion)}
                    className={`py-3 px-2 sm:px-4 rounded-xl border text-center transition-all ${
                      active
                        ? 'bg-gradient-to-r from-[#FF4500] to-[#FF8C00] text-white border-[#FF6600] font-extrabold shadow-lg scale-102 glow-fire'
                        : 'bg-[#14141B] text-[#D4D4D8] border-[#2A2A36] hover:border-[#FF5500]/40'
                    }`}
                  >
                    <div className="text-xs uppercase tracking-wider font-bold">
                      {portion === 'full' ? 'Full' : portion === 'half' ? 'Half' : 'Quarter'}
                    </div>
                    <div className="text-base font-black font-mono mt-0.5">₹{info.price}</div>
                    <div
                      className={`text-[10px] mt-0.5 line-clamp-1 ${
                        active ? 'text-white/90' : 'text-[#71717A]'
                      }`}
                    >
                      {portion === 'full' ? 'Serves 4–5' : portion === 'half' ? 'Serves 2–3' : 'Serves 1'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Inclusions & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#FFA000] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Complete Charcoal Feast Set</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                What's Included in Your Platter:
              </h3>
              <p className="text-sm text-[#A1A1AA] mt-1">{current.details}</p>
            </div>

            {/* Accompaniments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {comboAccompaniments.map((acc, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0D0D12] border border-[#272733] text-xs text-[#D4D4D8] hover:border-[#FF6600]/30 transition-colors"
                >
                  <div className="w-4 h-4 rounded-full bg-[#FF4500]/20 text-[#FF4500] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{acc}</span>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="p-4 rounded-2xl bg-[#0E0E14] border border-[#2B2B38] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#A1A1AA] block">Price for {selectedPortion.toUpperCase()} Platter:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[#FFA000] font-mono">
                    ₹{current.price}
                  </span>
                  {current.originalPrice && (
                    <span className="text-sm text-[#71717A] line-through">₹{current.originalPrice}</span>
                  )}
                  {current.savings && (
                    <span className="text-xs font-bold text-[#FF9100] bg-[#FF4500]/15 px-2 py-0.5 rounded border border-[#FF4500]/40">
                      {current.savings}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={handleAdd}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#FF4500] via-[#E21B23] to-[#FF2200] hover:from-[#FF5E00] hover:to-[#FF3300] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#FF4500]/30 transition-all active:scale-95 glow-fire"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>

                <button
                  onClick={handleWhatsAppOrder}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Added notice confirmation toast */}
            {addedNotice && (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-300 text-xs font-bold flex items-center justify-between animate-in fade-in">
                <span>✓ Added {addedNotice} to your bag!</span>
                <button
                  onClick={onOpenMenuCard}
                  className="underline text-white hover:text-[#FFA000] font-semibold"
                >
                  View printed card
                </button>
              </div>
            )}

            {/* Menu Card Teaser */}
            <div className="flex items-center justify-between text-xs text-[#A1A1AA] pt-2 border-t border-[#23232E]">
              <span>Looking for individual Shawaya portions?</span>
              <button
                onClick={onOpenMenuCard}
                className="text-[#FFA000] hover:underline font-bold inline-flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Open Full Menu Card</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
