import React, { useState } from 'react';
import { Flame, Star, Sparkles, Check, ShoppingBag, MessageCircle, FileText } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

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
    'Authentic Charcoal Roasted Spiced Chicken',
    'Aromatic Long-Grain Bishawari Spiced Rice with Sultanas',
    'Freshly Baked Soft Kubbus Arabic Flatbread',
    'Whipped Creamy Garlic Toum Paste (House Made)',
    'Spicy Red Tomato Shatta & Fresh Mint Dip',
    'Signature Warm Rich Meat Gravy & Pickled Salad',
  ];

  return (
    <section id="special" className="py-20 bg-[#0E0E0E] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FFD21F] uppercase mb-2">
            <Flame className="w-3.5 h-3.5 text-[#E21B23]" />
            <span>Yamama's #1 Signature Dish</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight uppercase">
            Shawaya + <span className="text-gold-gradient">Bishawari Rice</span> Combo
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/80">
            A match made in heaven: our juicy, slow-turned charcoal chicken paired with the rich,
            aromatic heritage of spiced Bishawari rice.
          </p>
        </div>

        {/* Feature Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#141414] rounded-3xl border border-[#FFD21F]/30 p-6 sm:p-10 shadow-2xl">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-black group">
              <img
                src={current.item.image}
                alt={current.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="px-3 py-1 rounded-full bg-[#E21B23] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg">
                  House Specialty
                </span>
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#FFD21F] text-xs font-bold border border-white/10">
                  {current.tag}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="text-xs text-white/70 font-medium">{current.serves}</div>
                  <div className="text-xl sm:text-2xl font-extrabold font-display text-white uppercase">
                    {current.title}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-black text-[#FFD21F] font-mono">
                    ₹{current.price}
                  </div>
                  {current.originalPrice && (
                    <div className="text-xs text-white/50 line-through">₹{current.originalPrice}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Portion Selector Tabs */}
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
                        ? 'bg-[#FFD21F] text-black border-[#FFD21F] font-extrabold shadow-lg scale-102'
                        : 'bg-[#1C1C1C] text-white/80 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs uppercase tracking-wider font-bold">
                      {portion === 'full' ? 'Full' : portion === 'half' ? 'Half' : 'Quarter'}
                    </div>
                    <div className="text-base font-black font-mono mt-0.5">₹{info.price}</div>
                    <div
                      className={`text-[10px] mt-0.5 line-clamp-1 ${
                        active ? 'text-black/70' : 'text-white/40'
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
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Complete Feast Set</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                What's Included in Your Platter:
              </h3>
              <p className="text-sm text-white/70 mt-1">{current.details}</p>
            </div>

            {/* Accompaniments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {comboAccompaniments.map((acc, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white/90"
                >
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{acc}</span>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-white/60 block">Price for {selectedPortion.toUpperCase()} Platter:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[#FFD21F] font-mono">
                    ₹{current.price}
                  </span>
                  {current.originalPrice && (
                    <span className="text-sm text-white/50 line-through">₹{current.originalPrice}</span>
                  )}
                  {current.savings && (
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      {current.savings}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={handleAdd}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E21B23] hover:bg-[#c9141b] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#E21B23]/30 transition-all active:scale-95 glow-red"
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
              <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-500 text-emerald-300 text-xs font-bold flex items-center justify-between animate-in fade-in">
                <span>✓ Added {addedNotice} to your bag!</span>
                <button
                  onClick={onOpenMenuCard}
                  className="underline text-white hover:text-[#FFD21F] font-semibold"
                >
                  View printed card
                </button>
              </div>
            )}

            {/* Menu Card Teaser */}
            <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">
              <span>Looking for individual Shawaya portions?</span>
              <button
                onClick={onOpenMenuCard}
                className="text-[#FFD21F] hover:underline font-bold inline-flex items-center gap-1"
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
