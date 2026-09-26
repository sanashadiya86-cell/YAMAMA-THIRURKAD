import React, { useState } from 'react';
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  Bike,
  Store,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    grandTotal,
    totalItems,
    checkoutViaWhatsApp,
  } = useCart();

  const [orderType, setOrderType] = useState('Free Home Delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [targetPhone, setTargetPhone] = useState(RESTAURANT_INFO.whatsappClean);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  if (!isOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      setValidationError('Please enter your name and phone number to proceed.');
      return;
    }
    setValidationError('');

    checkoutViaWhatsApp({
      name: customerName,
      phone: customerPhone,
      address,
      orderType,
      notes,
      targetPhone,
    });

    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
      setIsOpen(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md transition-opacity duration-300">
      <div
        className="fixed inset-0"
        onClick={() => setIsOpen(false)}
        aria-label="Close cart backdrop"
      />

      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#0A0A0E] border-l border-[#282835] shadow-2xl flex flex-col z-10 text-left">
        {/* Header with Animated Yamama Logo */}
        <div className="p-4 sm:p-5 border-b border-[#242430] flex items-center justify-between bg-[#101016]">
          <div className="flex items-center gap-3">
            <YamamaLogo size="sm" animate={true} glow="fire" />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight flex items-center gap-1.5">
                <ShoppingBag className="w-4 h-4 text-[#FFA000]" />
                <span>Your Food Bag ({totalItems})</span>
              </h2>
              <span className="text-[10px] text-[#A1A1AA] block uppercase font-mono">
                Yamama Shawaya Charcoal Grills
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-[#1A1A24] transition-colors"
            aria-label="Close Cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
          {validationError && (
            <div className="p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-12 h-12 text-[#3C3C4C] mx-auto" />
              <h3 className="text-base font-bold text-white">Your bag is empty</h3>
              <p className="text-xs text-[#A1A1AA] max-w-xs mx-auto">
                Explore our menu to add juicy charcoal shawaya, shawarma, or fragrant Bishawari rice.
              </p>
              <button
                onClick={() => {
                  setIsOpen(false);
                  const el = document.getElementById('menu');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-3 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF4500] to-[#E21B23] text-white text-xs font-bold uppercase tracking-wider shadow-lg glow-fire"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between pb-2 border-b border-[#242430]">
                <span className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider">
                  Order Items
                </span>
                <button
                  onClick={clearCart}
                  className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 font-semibold"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
              </div>

              {cart.map(({ item, quantity }) => (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl bg-[#14141C] border border-[#262635] flex items-center gap-3 shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-xl object-cover bg-black shrink-0 border border-[#2B2B38]"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-white truncate">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-[#A1A1AA]">{item.portion}</p>
                    <div className="text-xs font-extrabold text-[#FFA000] font-mono mt-0.5">
                      ₹{(item.price * quantity).toLocaleString('en-IN')}
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-1.5 bg-[#0D0D12] border border-[#2E2E3E] rounded-xl p-1 shrink-0">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#1C1C28]"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-mono font-bold text-white px-1">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#1C1C28]"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 text-[#52525B] hover:text-red-400 transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Delivery Details Form */}
              <div className="pt-4 border-t border-[#242430] space-y-3">
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Select Order Service:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType('Free Home Delivery')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                      orderType === 'Free Home Delivery'
                        ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                        : 'bg-[#0E0E14] text-[#A1A1AA] border-[#2B2B38] hover:text-white'
                    }`}
                  >
                    <Bike className="w-3.5 h-3.5" />
                    <span>Free Delivery</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('Dine-In / Takeaway')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                      orderType === 'Dine-In / Takeaway'
                        ? 'bg-gradient-to-r from-[#FF4500] to-[#E21B23] text-white border-[#FF4500] shadow-md font-extrabold'
                        : 'bg-[#0E0E14] text-[#A1A1AA] border-[#2B2B38] hover:text-white'
                    }`}
                  >
                    <Store className="w-3.5 h-3.5" />
                    <span>Dine-In / Pickup</span>
                  </button>
                </div>

                <div className="space-y-2">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] block mb-1">
                      Customer Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 bg-[#0C0C12] border border-[#2B2B38] rounded-xl text-xs text-white focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contact number"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-[#0C0C12] border border-[#2B2B38] rounded-xl text-xs text-white focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>

                  {orderType === 'Free Home Delivery' && (
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] block mb-1">
                        Delivery Address & Landmark *
                      </label>
                      <textarea
                        rows={2}
                        placeholder="House name, street, nearby landmark (Angadipuram / Perinthalmanna)"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-3 py-2 bg-[#0C0C12] border border-[#2B2B38] rounded-xl text-xs text-white focus:outline-none focus:border-[#FF5500]"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] block mb-1">
                      Special Requests / Notes
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Extra garlic toum, less spicy"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3 py-2 bg-[#0C0C12] border border-[#2B2B38] rounded-xl text-xs text-white focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>

                  {/* WhatsApp Line Selector */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] block mb-1">
                      Send to WhatsApp Line:
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <button
                        type="button"
                        onClick={() => setTargetPhone(RESTAURANT_INFO.whatsappClean)}
                        className={`p-1.5 rounded-lg border text-center transition-all ${
                          targetPhone === RESTAURANT_INFO.whatsappClean
                            ? 'bg-emerald-600/30 border-emerald-400 text-emerald-300 font-bold'
                            : 'bg-[#0E0E14] border-[#282835] text-[#A1A1AA]'
                        }`}
                      >
                        Line 1 ({RESTAURANT_INFO.phone})
                      </button>
                      <button
                        type="button"
                        onClick={() => setTargetPhone(RESTAURANT_INFO.whatsapp2Clean)}
                        className={`p-1.5 rounded-lg border text-center transition-all ${
                          targetPhone === RESTAURANT_INFO.whatsapp2Clean
                            ? 'bg-emerald-600/30 border-emerald-400 text-emerald-300 font-bold'
                            : 'bg-[#0E0E14] border-[#282835] text-[#A1A1AA]'
                        }`}
                      >
                        Line 2 ({RESTAURANT_INFO.phone2})
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#242430] bg-[#101016] space-y-3">
            <div className="space-y-1 text-xs">
              <div className="flex items-center justify-between text-[#A1A1AA]">
                <span>Subtotal ({totalItems} items):</span>
                <span className="font-mono text-white">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex items-center justify-between text-emerald-400 font-semibold">
                <span className="flex items-center gap-1">
                  <Bike className="w-3.5 h-3.5" />
                  Delivery Charge:
                </span>
                <span className="uppercase text-[11px] font-bold">FREE</span>
              </div>
              <div className="flex items-center justify-between text-base font-extrabold text-white pt-2 border-t border-[#242430]">
                <span>Grand Total:</span>
                <span className="text-[#FFA000] font-mono text-xl">
                  ₹{grandTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {orderSuccess ? (
              <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-500 text-emerald-300 text-xs font-bold flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Redirecting to WhatsApp...</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/30 active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Order via WhatsApp</span>
              </button>
            )}
            <p className="text-[10px] text-center text-[#71717A]">
              Orders are confirmed promptly by Yamama Shawaya staff over WhatsApp.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
