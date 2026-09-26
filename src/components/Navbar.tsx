import React, { useState, useEffect } from 'react';
import {
  Phone,
  Clock,
  ShoppingBag,
  FileText,
  Menu as MenuIcon,
  X,
  Flame,
  MessageCircle,
  MapPin,
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onOrderNowClick: () => void;
  onOpenMenuCard: () => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOrderNowClick,
  onOpenMenuCard,
  onOpenWhatsApp,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, grandTotal, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Signature Feast', href: '#special' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Photos', href: '#photos' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#121212] border-b border-white/10 text-white/90 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Free Home Delivery: Angadipuram & Perinthalmanna
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-white/60">
              <Clock className="w-3.5 h-3.5 text-[#FFD21F]" />
              12:00 PM – 12:00 AM (Open Daily)
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-[11px] sm:text-xs">
            <a
              href={`tel:${RESTAURANT_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-white/80 hover:text-[#FFD21F] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFD21F]" />
              <span className="font-mono font-medium">{RESTAURANT_INFO.phone}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`tel:${RESTAURANT_INFO.phone2Clean}`}
              className="hidden sm:flex items-center gap-1.5 text-white/80 hover:text-[#FFD21F] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFD21F]" />
              <span className="font-mono font-medium">{RESTAURANT_INFO.phone2}</span>
            </a>
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0B]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3'
            : 'bg-[#0B0B0B]/85 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#overview"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#overview');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#FFD21F] shadow-lg group-hover:scale-105 transition-transform bg-black">
              <img
                src="/yamama-logo.jpg"
                alt="Yamama Shawaya Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white uppercase group-hover:text-[#FFD21F] transition-colors">
                  Yamama
                </span>
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-[#FFD21F] uppercase">
                  Shawaya
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-white/60 tracking-wider flex items-center gap-1 font-mono">
                <MapPin className="w-3 h-3 text-[#E21B23]" />
                Oradampalam, Calicut Road
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-xs uppercase tracking-wider font-semibold transition-colors duration-200 hover:text-[#FFD21F] ${
                  link.href === '#menu' ? 'text-[#FFD21F] font-bold' : 'text-white/80'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Menu Card Trigger */}
            <button
              onClick={onOpenMenuCard}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/90 border border-white/15 text-xs font-semibold tracking-wide transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#FFD21F]" />
              <span>Menu Card</span>
            </button>

            {/* Bag Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative flex items-center gap-2 px-3 py-2 rounded-xl bg-[#1A1A1A] hover:bg-[#252525] border border-white/15 text-white transition-all group"
              aria-label="View Shopping Bag"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-[#FFD21F] group-hover:scale-110 transition-transform" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2.5 w-4 h-4 rounded-full bg-[#E21B23] text-white text-[10px] font-bold flex items-center justify-center animate-bounce">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-bold font-mono">
                {totalItems > 0 ? `₹${grandTotal.toLocaleString('en-IN')}` : 'Bag'}
              </span>
            </button>

            {/* Primary Order Now Button */}
            <button
              onClick={onOrderNowClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 sm:py-2.5 rounded-xl bg-[#E21B23] hover:bg-[#c9141b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#E21B23]/30 transition-all active:scale-95 glow-red"
            >
              <Flame className="w-4 h-4 fill-white" />
              <span>Order Now</span>
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 text-white/90 hover:text-white border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 px-4 pb-4 bg-[#0E0E0E] animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="py-2 px-3 rounded-lg text-sm font-semibold tracking-wide text-white/90 hover:text-[#FFD21F] hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenMenuCard();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 border border-white/15 text-xs font-bold uppercase tracking-wider text-white"
                >
                  <FileText className="w-4 h-4 text-[#FFD21F]" />
                  <span>View Official Menu Card</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenWhatsApp();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold uppercase tracking-wider text-white"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
