import React, { useState } from 'react';
import { X, MessageCircle, Clock, Bike, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  const [selectedPhone, setSelectedPhone] = useState(RESTAURANT_INFO.whatsappClean);
  const [activePreset, setActivePreset] = useState<'order' | 'combo' | 'table' | 'bulk'>('order');
  const [customMessage, setCustomMessage] = useState('');

  if (!isOpen) return null;

  const presets = {
    order:
      'Hi Yamama Shawaya, I want to place an order for Free Home Delivery (Angadipuram / Perinthalmanna). Please send me the latest menu and timings!',
    combo:
      'Hello Yamama Shawaya, I would like to order the Shawaya + Bishawari Rice Combo (Full ₹660 / Quarter ₹180). How soon can it be delivered?',
    table:
      'Hi, I would like to enquire about table availability for dine-in at your restaurant on Calicut Road, Angadipuram.',
    bulk:
      'Hello! I want to enquire about a bulk feast / party catering order for our upcoming family/office gathering.',
  };

  const handleLaunchWhatsApp = () => {
    const textToSend =
      `🍗 *YAMAMA SHAWAYA ENQUIRY* 🍗\n\n` +
      `${customMessage.trim() || presets[activePreset]}\n\n` +
      `📍 Oradampalam, Calicut Road, Angadipuram\n` +
      `⏰ Opening Hours: 12:00 PM – 12:00 AM Daily`;

    const url = `https://wa.me/${selectedPhone}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={onClose} aria-label="Close modal backdrop" />

      <div className="relative w-full max-w-lg bg-[#141414] border border-white/20 rounded-3xl overflow-hidden shadow-2xl z-10 text-left">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-emerald-950 via-[#141414] to-[#141414] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white uppercase tracking-tight">
                Quick WhatsApp Enquiry
              </h2>
              <p className="text-[11px] text-emerald-400 font-semibold">
                Online • Free Delivery in Angadipuram
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close WhatsApp Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Phone Selector */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-white/70 block mb-1.5">
              Select WhatsApp Line:
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedPhone(RESTAURANT_INFO.whatsappClean)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedPhone === RESTAURANT_INFO.whatsappClean
                    ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold'
                    : 'bg-[#181818] border-white/10 text-white/70 hover:text-white'
                }`}
              >
                <div className="text-xs font-mono font-bold">{RESTAURANT_INFO.phoneFormatted}</div>
                <div className="text-[10px] text-white/50">Primary Hotline (Takeaway & Delivery)</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPhone(RESTAURANT_INFO.whatsapp2Clean)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedPhone === RESTAURANT_INFO.whatsapp2Clean
                    ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold'
                    : 'bg-[#181818] border-white/10 text-white/70 hover:text-white'
                }`}
              >
                <div className="text-xs font-mono font-bold">{RESTAURANT_INFO.phone2Formatted}</div>
                <div className="text-[10px] text-white/50">Secondary Hotline (Support & Orders)</div>
              </button>
            </div>
          </div>

          {/* Quick Presets */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-white/70 block mb-1.5">
              Choose Quick Topic:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'order' as const, label: '🛵 Delivery Order', subtitle: 'Angadipuram & nearby' },
                { id: 'combo' as const, label: '🍗 Shawaya + Rice Combo', subtitle: 'Quarter / Half / Full' },
                { id: 'table' as const, label: '🍽️ Table Booking', subtitle: 'Calicut Road Dine-in' },
                { id: 'bulk' as const, label: '🎉 Party / Bulk Feast', subtitle: 'Family & events' },
              ].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setActivePreset(p.id);
                    setCustomMessage('');
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    activePreset === p.id
                      ? 'bg-[#FFD21F]/15 border-[#FFD21F] text-white'
                      : 'bg-[#181818] border-white/10 text-white/70 hover:text-white hover:border-white/20'
                  }`}
                >
                  <span className="text-xs font-bold block">{p.label}</span>
                  <span className="text-[10px] text-white/50">{p.subtitle}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Message Preview / Custom Text */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-white/70 block">
              Message Preview / Custom Note:
            </label>
            <textarea
              rows={3}
              value={customMessage || presets[activePreset]}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-black/60 border border-white/15 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400 placeholder-white/40"
              placeholder="Type your enquiry message here..."
            />
          </div>

          {/* Trust Banner */}
          <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between text-[11px] text-white/70">
            <div className="flex items-center gap-1 text-emerald-400 font-semibold">
              <Bike className="w-3.5 h-3.5" />
              <span>Free Home Delivery</span>
            </div>
            <div className="flex items-center gap-1 font-mono text-white/80">
              <Clock className="w-3 h-3 text-[#FFD21F]" />
              <span>12:00 PM – 12:00 AM</span>
            </div>
          </div>

          {/* Action button */}
          <button
            type="button"
            onClick={handleLaunchWhatsApp}
            className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/30 active:scale-98 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Open in WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
