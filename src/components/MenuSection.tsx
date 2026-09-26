import React, { useState, useMemo } from 'react';
import {
  Flame,
  Search,
  FileText,
  MessageCircle,
  Plus,
  Minus,
  Sparkles,
  ShoppingBag,
  Leaf,
  Check,
  Bike,
} from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuCategory, MenuItem } from '../types/restaurant';
import { useCart } from '../context/CartContext';

interface MenuSectionProps {
  onOpenMenuCard: () => void;
  onOpenWhatsApp: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onOpenMenuCard,
  onOpenWhatsApp,
}) => {
  const { cart, addToCart, updateQuantity } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'spicy' | 'special'>('all');
  const [lastAddedId, setLastAddedId] = useState<string | null>(null);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;

      // Search match
      const searchMatch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      // Diet filter
      let dietMatch = true;
      if (dietFilter === 'veg') dietMatch = !!item.isVeg;
      if (dietFilter === 'spicy') dietMatch = !!item.isSpicy;
      if (dietFilter === 'special') dietMatch = !!item.isChefSpecial;

      return categoryMatch && searchMatch && dietMatch;
    });
  }, [selectedCategory, searchQuery, dietFilter]);

  const handleItemAdd = (item: MenuItem) => {
    addToCart(item, 1);
    setLastAddedId(item.id);
    setTimeout(() => setLastAddedId(null), 1500);
  };

  const handleWhatsAppSingleItem = (item: MenuItem) => {
    const text = `Hi Yamama Shawaya, I want to order *${item.name}* (₹${item.price}, ${item.portion}) for Free Home Delivery across Angadipuram!`;
    const url = `https://wa.me/${RESTAURANT_INFO.whatsappClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getItemQuantityInCart = (itemId: string) => {
    const found = cart.find((c) => c.item.id === itemId);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="py-20 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FFD21F] uppercase mb-2">
            <Flame className="w-3.5 h-3.5 text-[#E21B23]" />
            <span>Refill Your Energy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight uppercase">
            OUR <span className="text-gold-gradient">MENU</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/80 font-medium">
            Freshly prepared charcoal shawaya, shawarma, Alfaham, and Bishawari rice meals.
          </p>
          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
            <Bike className="w-3.5 h-3.5" />
            <span>Free Home Delivery across Angadipuram & Perinthalmanna</span>
          </div>
        </div>

        {/* Menu Card Quick Banner */}
        <div className="mb-10 rounded-2xl bg-gradient-to-r from-[#181818] via-[#1f1911] to-[#181818] border border-[#FFD21F]/30 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-14 rounded-lg overflow-hidden border border-[#FFD21F]/50 shrink-0 bg-black shadow-md cursor-pointer" onClick={onOpenMenuCard}>
              <img
                src="/yamama-menu-card.jpg"
                alt="Yamama Menu Card"
                className="w-full h-full object-cover object-top hover:scale-110 transition-transform"
              />
            </div>
            <div className="text-left">
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>Official Yamama Shawaya Menu Card</span>
                <span className="text-[10px] bg-[#FFD21F] text-black px-2 py-0.5 rounded font-extrabold uppercase">
                  PDF / HD
                </span>
              </h3>
              <p className="text-xs text-white/70">
                View the authentic printed dine-in & takeaway card with combos, pricing, and phone lines.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenMenuCard}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFD21F] hover:bg-[#ffe066] text-black text-xs font-extrabold uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <FileText className="w-4 h-4" />
            <span>View & Zoom Menu Card</span>
          </button>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4 mb-10">
          {/* Search bar & Diet filters */}
          <div className="flex flex-col md:flex-row gap-3 items-stretch justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search shawaya, bishawari rice, alfaham, shawarma..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#141414] border border-white/15 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#FFD21F] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar shrink-0">
              <button
                onClick={() => setDietFilter('all')}
                className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  dietFilter === 'all'
                    ? 'bg-white text-black'
                    : 'bg-[#181818] text-white/70 border border-white/10 hover:text-white'
                }`}
              >
                All Dishes ({MENU_ITEMS.length})
              </button>
              <button
                onClick={() => setDietFilter('special')}
                className={`px-3 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  dietFilter === 'special'
                    ? 'bg-[#FFD21F] text-black'
                    : 'bg-[#181818] text-[#FFD21F] border border-[#FFD21F]/30 hover:bg-[#FFD21F]/10'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Chef's Specials</span>
              </button>
              <button
                onClick={() => setDietFilter('spicy')}
                className={`px-3 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  dietFilter === 'spicy'
                    ? 'bg-[#E21B23] text-white'
                    : 'bg-[#181818] text-[#E21B23] border border-[#E21B23]/30 hover:bg-[#E21B23]/10'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Spicy Grills</span>
              </button>
              <button
                onClick={() => setDietFilter('veg')}
                className={`px-3 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  dietFilter === 'veg'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#181818] text-emerald-400 border border-emerald-500/30 hover:bg-emerald-950/30'
                }`}
              >
                <Leaf className="w-3.5 h-3.5" />
                <span>Pure Veg</span>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/10 no-scrollbar">
            {MENU_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider shrink-0 transition-all ${
                    active
                      ? 'bg-[#E21B23] text-white shadow-lg shadow-[#E21B23]/30 glow-red'
                      : 'bg-[#141414] text-white/70 hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#121212] rounded-2xl border border-white/10 p-8">
            <Flame className="w-10 h-10 text-[#FFD21F] mx-auto mb-3 opacity-50" />
            <h3 className="text-lg font-bold text-white">No dishes found matching your search</h3>
            <p className="text-sm text-white/60 mt-1 max-w-md mx-auto">
              Try searching for "shawaya", "rice", "alfaham" or clear the current filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setDietFilter('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#FFD21F] text-black text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const inCartQty = getItemQuantityInCart(item.id);
              const isJustAdded = lastAddedId === item.id;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl bg-[#141414] border border-white/10 overflow-hidden flex flex-col hover:border-[#FFD21F]/40 transition-all duration-300 group shadow-lg"
                >
                  {/* Image container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

                    {/* Portion Tag */}
                    <div className="absolute bottom-2.5 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-white text-[11px] font-bold border border-white/15">
                      {item.portion}
                    </div>

                    {/* Calories Tag */}
                    {item.calories && (
                      <div className="absolute bottom-2.5 right-3 text-[10px] font-mono text-white/70 bg-black/60 px-2 py-0.5 rounded">
                        {item.calories}
                      </div>
                    )}

                    {/* Badges on top */}
                    <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                      {item.isChefSpecial && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FFD21F] text-black text-[10px] font-extrabold uppercase tracking-wide flex items-center gap-1 shadow-sm">
                          <Sparkles className="w-2.5 h-2.5" />
                          Special
                        </span>
                      )}
                      {item.isPopular && !item.isChefSpecial && (
                        <span className="px-2 py-0.5 rounded-full bg-[#E21B23] text-white text-[10px] font-extrabold uppercase tracking-wide shadow-sm">
                          Popular
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="px-2 py-0.5 rounded-full bg-red-950/80 border border-red-500 text-red-300 text-[10px] font-bold">
                          🌶️ Spicy
                        </span>
                      )}
                      {item.isVeg && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500 text-emerald-300 text-[10px] font-bold flex items-center gap-1">
                          <Leaf className="w-2.5 h-2.5" />
                          Veg
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left space-y-3">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#FFD21F] font-bold">
                        {item.category}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FFD21F] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <p className="mt-1.5 text-xs text-white/70 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Action bar */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-lg sm:text-xl font-black text-[#FFD21F] font-mono">
                            ₹{item.price}
                          </span>
                          {item.originalPrice && (
                            <span className="text-xs text-white/40 line-through">
                              ₹{item.originalPrice}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-white/50 block">Incl. taxes & dips</span>
                      </div>

                      {/* Add to Bag or Increment/Decrement */}
                      <div className="flex items-center gap-1.5">
                        {/* WhatsApp Quick Order button */}
                        <button
                          onClick={() => handleWhatsAppSingleItem(item)}
                          title="Order this dish on WhatsApp"
                          className="p-2 rounded-xl bg-white/5 hover:bg-emerald-600 text-white/80 hover:text-white border border-white/10 transition-colors"
                          aria-label={`Order ${item.name} via WhatsApp`}
                        >
                          <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                        </button>

                        {inCartQty > 0 ? (
                          <div className="flex items-center bg-[#1A1A1A] border border-[#FFD21F] rounded-xl overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="px-2.5 py-1.5 text-white/80 hover:text-white hover:bg-white/10 text-xs"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-2 text-xs font-mono font-bold text-[#FFD21F]">
                              {inCartQty}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-2.5 py-1.5 text-white/80 hover:text-white hover:bg-white/10 text-xs"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleItemAdd(item)}
                            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-95 ${
                              isJustAdded
                                ? 'bg-emerald-600 text-white'
                                : 'bg-[#E21B23] hover:bg-[#c9141b] text-white glow-red'
                            }`}
                          >
                            {isJustAdded ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Added</span>
                              </>
                            ) : (
                              <>
                                <ShoppingBag className="w-3.5 h-3.5" />
                                <span>Add</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Custom Order / Catering Notice Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FFD21F]" />
              <span>Planning a Family Gathering or Office Feast?</span>
            </h3>
            <p className="text-sm text-white/70">
              Order bulk Shawaya combos or customize your platter with extra Bishawari rice and kubbus.
              Free delivery for group orders in Angadippuram & Perinthalmanna!
            </p>
          </div>
          <button
            onClick={onOpenWhatsApp}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat for Bulk Feast Order</span>
          </button>
        </div>
      </div>
    </section>
  );
};
