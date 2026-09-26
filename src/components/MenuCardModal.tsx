import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Download, MessageCircle, FileText } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

interface MenuCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuCardModal: React.FC<MenuCardModalProps> = ({ isOpen, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleReset = () => setZoomLevel(1);

  const handleWhatsAppOrder = () => {
    const text = `Hi Yamama Shawaya, I am looking at your Menu Card and would like to place an order / make an enquiry!`;
    const url = `https://wa.me/${RESTAURANT_INFO.whatsappClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
      <div className="fixed inset-0" onClick={onClose} aria-label="Close modal backdrop" />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0A0A0E] border border-[#2B2B38] rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10 text-left glow-smoke">
        {/* Header Bar with Animated Yamama Logo */}
        <div className="p-4 sm:px-6 border-b border-[#242430] flex items-center justify-between bg-[#111118]">
          <div className="flex items-center gap-3">
            <YamamaLogo size="sm" animate={true} glow="fire" />
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#FFA000]" />
                <span>Official Yamama Shawaya Menu Card</span>
              </h2>
              <p className="text-[11px] text-[#A1A1AA]">
                Pricelist in ₹ INR • Free Home Delivery (9747362101 / 9747362102)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-[#07070A] border border-[#2B2B38] rounded-xl p-1">
              <button
                onClick={handleZoomOut}
                className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#1A1A24]"
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono px-2 text-[#E4E4E7]">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#1A1A24]"
                title="Zoom In"
                aria-label="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleReset}
                className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#1A1A24]"
                title="Reset Zoom"
                aria-label="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-[#1C1C28] transition-colors"
              aria-label="Close Menu Card Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable / Zoomable Image Canvas with Official Yamama Shawaya Logo */}
        <div className="flex-1 overflow-auto p-4 flex flex-col items-center bg-[#070709] min-h-[350px]">
          {/* Prominent Official Brand Strip on Menu Card */}
          <div className="w-full max-w-xl mb-3.5 p-3 rounded-2xl bg-gradient-to-r from-[#171722] via-[#201510] to-[#171722] border border-[#FF5500]/40 shadow-xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#FDB813] border-2 border-[#FFD21F] shadow-lg shrink-0">
                <img
                  src="/yamama-logo.jpg"
                  alt="Official Yamama Shawaya Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-extrabold text-white uppercase font-display tracking-wide">
                    Yamama Shawaya
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#FF4500] text-white font-extrabold uppercase">
                    Official
                  </span>
                </div>
                <p className="text-[11px] text-[#FFA000] font-bold mt-0.5">
                  Refill Your Energy • Direction: Angadipuram, Thirurkad
                </p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/30">
                📞 9747362101
              </span>
            </div>
          </div>

          <div
            className="relative transition-transform duration-200 origin-center max-w-full"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            {/* Embedded Logo Crest on the Menu Card Corner */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#FFD21F] shadow-2xl">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-[#FDB813] border border-yellow-300 shrink-0">
                <img
                  src="/yamama-logo.jpg"
                  alt="Yamama Shawaya Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left pr-1">
                <p className="text-[10px] font-extrabold text-white leading-tight uppercase font-display">
                  Yamama Shawaya
                </p>
                <p className="text-[8px] text-[#FFD21F] font-bold">Refill Your Energy</p>
              </div>
            </div>

            <img
              src="/yamama-menu-card.jpg"
              alt="Yamama Shawaya Official Menu Card"
              className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl border border-[#2B2B38] mx-auto"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-3.5 sm:px-6 border-t border-[#242430] bg-[#111118] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#A1A1AA]">
            <span className="text-emerald-400 font-bold">● Free Home Delivery</span>
            <span className="hidden sm:inline">• Angadipuram, Thirurkad</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href="/yamama-menu-card.jpg"
              download="Yamama-Shawaya-Menu-Card.jpg"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#1C1C28] hover:bg-[#282838] border border-[#343445] text-white font-bold uppercase tracking-wider transition-colors"
            >
              <Download className="w-4 h-4 text-[#FFA000]" />
              <span>Download</span>
            </a>

            <button
              onClick={handleWhatsAppOrder}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
