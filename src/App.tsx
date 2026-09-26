import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightsStrip } from './components/HighlightsStrip';
import { SignatureSpotlight } from './components/SignatureSpotlight';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AmbianceSection } from './components/AmbianceSection';
import { CustomerReviews } from './components/CustomerReviews';
import { PhotoGallery } from './components/PhotoGallery';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { MenuCardModal } from './components/MenuCardModal';
import { WhatsAppModal } from './components/WhatsAppModal';
import { FloatingActions } from './components/FloatingActions';

function MainApp() {
  const [isMenuCardOpen, setIsMenuCardOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  // Check URL hash on initial render (e.g. #menu) and scroll into view smoothly
  useEffect(() => {
    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    handleInitialHash();
    window.addEventListener('hashchange', handleInitialHash);
    return () => window.removeEventListener('hashchange', handleInitialHash);
  }, []);

  const scrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenMenuCard = () => {
    setIsMenuCardOpen(true);
  };

  const handleOpenWhatsApp = () => {
    setIsWhatsAppOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col font-sans selection:bg-[#FFD21F] selection:text-black">
      {/* Top Navbar */}
      <Navbar
        onOrderNowClick={scrollToMenu}
        onOpenMenuCard={handleOpenMenuCard}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOrderNow={scrollToMenu}
          onOpenMenuCard={handleOpenMenuCard}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Highlights Live Ticker */}
        <HighlightsStrip />

        {/* Overview & Signature Spotlight (Shawaya + Bishawari Rice Combo) */}
        <SignatureSpotlight
          onOrderNow={scrollToMenu}
          onOpenMenuCard={handleOpenMenuCard}
        />

        {/* Food Menu Section (#menu) */}
        <MenuSection
          onOpenMenuCard={handleOpenMenuCard}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* About Yamama Shawaya */}
        <AboutSection onOpenMenuCard={handleOpenMenuCard} />

        {/* Why Choose Yamama */}
        <WhyChooseUs />

        {/* Cozy Ambiance & Dine-In Space */}
        <AmbianceSection />

        {/* Customer Reviews & Google Ratings */}
        <CustomerReviews />

        {/* Photo Gallery & Menu Card Showcase */}
        <PhotoGallery />

        {/* Call To Action Banner */}
        <CtaBanner
          onOrderNow={scrollToMenu}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Contact, Timings & Google Maps */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenMenuCard={handleOpenMenuCard}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Slide-Over Food Bag / Cart Drawer */}
      <CartDrawer />

      {/* Interactive Official Menu Card Modal */}
      <MenuCardModal
        isOpen={isMenuCardOpen}
        onClose={() => setIsMenuCardOpen(false)}
      />

      {/* WhatsApp Quick Message / Enquiry Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
      />

      {/* Floating Action Buttons */}
      <FloatingActions
        onOpenWhatsAppModal={handleOpenWhatsApp}
        onOpenMenuCard={handleOpenMenuCard}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}
