import React, { useState } from 'react';
import { MessageCircle, ShoppingBag, X, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
  onOpenMenuCard: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenWhatsAppModal,
}) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const { totalItems, grandTotal, setIsOpen } = useCart();

  return (
    <>
      {/* Floating WhatsApp Action (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-2 bg-[#121212]/95 backdrop-blur-md border border-emerald-500/40 text-white px-3.5 py-2 rounded-2xl shadow-2xl animate-in slide-in-from-bottom-2 duration-300 text-left">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <div className="text-left">
              <p className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>WhatsApp Quick Enquiry</span>
                <span className="text-[10px] text-emerald-400 font-mono">Online</span>
              </p>
              <p className="text-[10px] text-white/60">Free Home Delivery · Angadipuram</p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-white/40 hover:text-white p-1 ml-1"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <button
          onClick={onOpenWhatsAppModal}
          className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3.5 rounded-full shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-600/60 active:scale-95 transition-all duration-200 border-2 border-emerald-400/30"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FFD21F] rounded-full" />
          </div>
          <span className="text-xs font-extrabold uppercase tracking-wider hidden md:inline">
            WhatsApp Enquiry
          </span>
        </button>
      </div>

      {/* Floating Mobile Cart Bar (Sticky at bottom on small screens) */}
      {totalItems > 0 && (
        <div className="fixed bottom-3 left-3 right-3 sm:hidden z-30 animate-in slide-in-from-bottom-2">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full py-3.5 px-4 bg-[#E21B23] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-2xl flex items-center justify-between border border-white/20 active:scale-98 transition-transform glow-red"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-white text-[#E21B23] flex items-center justify-center text-xs font-mono font-extrabold">
                {totalItems}
              </span>
              <span>View Order Bag</span>
            </div>
            <div className="flex items-center gap-1 text-[#FFD21F] font-mono font-extrabold text-sm">
              <span>₹{grandTotal.toLocaleString('en-IN')}</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      )}
    </>
  );
};
