import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Download, MessageCircle, FileText } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

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

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#141414] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10 text-left">
        {/* Header Bar */}
        <div className="p-4 sm:px-6 border-b border-white/10 flex items-center justify-between bg-[#181818]">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#FFD21F]" />
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight">
                Official Yamama Shawaya Menu Card
              </h2>
              <p className="text-[11px] text-white/60">
                Pricelist in ₹ INR • Free Home Delivery (9747362101 / 9747362102)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-black/60 border border-white/15 rounded-xl p-1">
              <button
                onClick={handleZoomOut}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono px-2 text-white/80">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
                title="Zoom In"
                aria-label="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleReset}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
                title="Reset Zoom"
                aria-label="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Menu Card Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable / Zoomable Image Canvas */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black min-h-[350px]">
          <div
            className="transition-transform duration-200 origin-center max-w-full"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src="/yamama-menu-card.jpg"
              alt="Yamama Shawaya Official Menu Card"
              className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl border border-white/15 mx-auto"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-3.5 sm:px-6 border-t border-white/10 bg-[#161616] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-white/70">
            <span className="text-emerald-400 font-bold">● Free Home Delivery</span>
            <span className="hidden sm:inline">• Angadippuram & Perinthalmanna</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href="/yamama-menu-card.jpg"
              download="Yamama-Shawaya-Menu-Card.jpg"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider transition-colors"
            >
              <Download className="w-4 h-4" />
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
