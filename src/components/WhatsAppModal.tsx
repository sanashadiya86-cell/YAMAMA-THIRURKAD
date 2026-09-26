import React, { useState } from 'react';
import { X, MessageCircle, Clock, Bike } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

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
      'Hi Yamama Shawaya, I want to place an order for Free Home Delivery (Angadipuram, Thirurkad). Please send me the latest menu and timings!',
    combo:
      'Hello Yamama Shawaya, I would like to order the Shawaya + Bishawari Rice Combo (Full ₹660 / Quarter ₹180). How soon can it be delivered to Angadipuram / Thirurkad?',
    table:
      'Hi, I would like to enquire about table availability for dine-in at your restaurant on Calicut Road (Direction: Angadipuram, Thirurkad).',
    bulk:
      'Hello! I want to enquire about a bulk feast / party catering order for our upcoming family/office gathering.',
  };

  const handleLaunchWhatsApp = () => {
    const textToSend =
      `🍗 *YAMAMA SHAWAYA ENQUIRY* 🍗\n\n` +
      `${customMessage.trim() || presets[activePreset]}\n\n` +
      `📍 Direction: Angadipuram, Thirurkad (Calicut Road, Oradampalam)\n` +
      `⏰ Opening Hours: 12:00 PM – 12:00 AM Daily`;

    const url = `https://wa.me/${selectedPhone}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="fixed inset-0" onClick={onClose} aria-label="Close modal backdrop" />

      <div className="relative w-full max-w-lg bg-[#0A0A0E] border border-[#2B2B38] rounded-3xl overflow-hidden shadow-2xl z-10 text-left glow-smoke">
        {/* Header with Animated Yamama Logo */}
        <div className="p-4 sm:p-5 bg-[#111118] border-b border-[#242430] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <YamamaLogo size="sm" animate={true} glow="fire" />
            <div>
              <h2 className="text-base font-bold text-white uppercase tracking-tight flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Quick WhatsApp Hotline</span>
              </h2>
              <p className="text-[11px] text-emerald-400 font-semibold">
                Online • Free Delivery in Angadipuram, Thirurkad
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-[#1A1A24] transition-colors"
            aria-label="Close WhatsApp Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Phone Selector */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] block mb-1.5">
              Select WhatsApp Line:
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedPhone(RESTAURANT_INFO.whatsappClean)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedPhone === RESTAURANT_INFO.whatsappClean
                    ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold'
                    : 'bg-[#14141C] border-[#282835] text-[#A1A1AA] hover:text-white'
                }`}
              >
                <div className="text-xs font-mono font-bold text-white">{RESTAURANT_INFO.phoneFormatted}</div>
                <div className="text-[10px] text-[#A1A1AA] mt-0.5">Primary Hotline (Takeaway & Delivery)</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPhone(RESTAURANT_INFO.whatsapp2Clean)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedPhone === RESTAURANT_INFO.whatsapp2Clean
                    ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold'
                    : 'bg-[#14141C] border-[#282835] text-[#A1A1AA] hover:text-white'
                }`}
              >
                <div className="text-xs font-mono font-bold text-white">{RESTAURANT_INFO.phone2Formatted}</div>
                <div className="text-[10px] text-[#A1A1AA] mt-0.5">Secondary Hotline (Support & Orders)</div>
              </button>
            </div>
          </div>

          {/* Quick Presets */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] block mb-1.5">
              Choose Quick Topic:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'order' as const, label: '🛵 Delivery Order', subtitle: 'Angadipuram, Thirurkad' },
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
                      ? 'bg-[#FF4500]/15 border-[#FF4500] text-white shadow-md'
                      : 'bg-[#14141C] border-[#282835] text-[#A1A1AA] hover:text-white hover:border-[#383848]'
                  }`}
                >
                  <span className="text-xs font-bold block">{p.label}</span>
                  <span className="text-[10px] text-[#71717A]">{p.subtitle}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Message Preview / Custom Text */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] block">
              Message Preview / Custom Note:
            </label>
            <textarea
              rows={3}
              value={customMessage || presets[activePreset]}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#07070A] border border-[#2B2B38] rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400 placeholder-[#52525B]"
              placeholder="Type your enquiry message here..."
            />
          </div>

          {/* Trust Banner */}
          <div className="p-2.5 rounded-xl bg-[#0E0E14] border border-[#242430] flex items-center justify-between text-[11px] text-[#A1A1AA]">
            <div className="flex items-center gap-1 text-emerald-400 font-semibold">
              <Bike className="w-3.5 h-3.5" />
              <span>Free Home Delivery</span>
            </div>
            <div className="flex items-center gap-1 font-mono text-[#D4D4D8]">
              <Clock className="w-3 h-3 text-[#FFA000]" />
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
