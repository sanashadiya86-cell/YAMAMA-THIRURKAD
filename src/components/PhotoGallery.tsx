import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types/restaurant';

export const PhotoGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Shop & Ambiance', 'Menu Card', 'Food', 'Grills'];

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentItem: GalleryItem | null =
    activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  return (
    <section id="photos" className="py-20 bg-[#0B0B0B] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FFD21F] uppercase mb-2">
            <Camera className="w-3.5 h-3.5 text-[#E21B23]" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white uppercase">
            PHOTO <span className="text-gold-gradient">GALLERY</span>
          </h2>
          <p className="mt-2 text-sm text-white/70">
            A glimpse into our restaurant storefront, cozy interior, printed menu card, and sizzling charcoal grills.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#FFD21F] text-black font-extrabold shadow-md'
                    : 'bg-[#181818] text-white/70 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#141414] aspect-[4/3] cursor-pointer shadow-lg hover:border-[#FFD21F]/50 transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Category pill */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[#FFD21F] text-[10px] font-extrabold uppercase tracking-wider border border-white/10">
                  {item.category}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <h3 className="text-sm font-bold text-white group-hover:text-[#FFD21F] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-white/60 line-clamp-1 mt-0.5">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {currentItem && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
              aria-label="Close photo"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev / Next controls */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content */}
            <div
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl border border-white/20 shadow-2xl"
              />
              <div className="mt-4 text-center max-w-xl">
                <span className="text-xs font-bold text-[#FFD21F] uppercase tracking-wider">
                  {currentItem.category} • {activeImageIndex! + 1} of {filteredItems.length}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  {currentItem.title}
                </h3>
                <p className="text-xs text-white/70 mt-1">{currentItem.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
