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
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';
import { YamamaLogo } from './YamamaLogo';

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
    { label: 'Reviews & Ratings', href: '#reviews' },
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
      {/* Top Fire & Smoke Announcement Bar */}
      <div className="bg-[#0A0A0D] border-b border-[#24242C] text-[#D4D4D8] text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-[#FFA000] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-ping" />
              <span>Fire & Charcoal Shawaya • Free Delivery (Angadipuram, Thirurkad)</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-[#A1A1AA]">
              <Clock className="w-3.5 h-3.5 text-[#FFB703]" />
              12:00 PM – 12:00 AM (Open Daily)
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-[11px] sm:text-xs">
            <a
              href={`tel:${RESTAURANT_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-[#D4D4D8] hover:text-[#FFA000] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF4500]" />
              <span className="font-mono font-medium">{RESTAURANT_INFO.phone}</span>
            </a>
            <span className="text-[#3F3F46]">|</span>
            <a
              href={`tel:${RESTAURANT_INFO.phone2Clean}`}
              className="hidden sm:flex items-center gap-1.5 text-[#D4D4D8] hover:text-[#FFA000] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF4500]" />
              <span className="font-mono font-medium">{RESTAURANT_INFO.phone2}</span>
            </a>
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Charcoal Navbar with Smokey Glass */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0D]/95 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.85)] border-b border-[#2E2E38] py-3'
            : 'bg-[#0B0B0E]/85 backdrop-blur-sm border-b border-[#22222A] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Animated Logo & Brand */}
          <a
            href="#overview"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#overview');
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <YamamaLogo size="md" showText={true} animate={true} glow="fire" />
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
                className={`text-xs uppercase tracking-wider font-bold transition-all duration-200 hover:text-[#FFA000] relative py-1 ${
                  link.href === '#menu'
                    ? 'text-[#FFD21F] font-extrabold'
                    : link.href === '#reviews'
                    ? 'text-[#FF8800]'
                    : 'text-[#A1A1AA]'
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
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#17171F] hover:bg-[#20202B] text-[#D4D4D8] border border-[#30303D] text-xs font-bold tracking-wide transition-all hover:border-[#FF5500]/50"
            >
              <FileText className="w-3.5 h-3.5 text-[#FFB703]" />
              <span>Menu Card</span>
            </button>

            {/* Bag Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative flex items-center gap-2 px-3 py-2 rounded-xl bg-[#16161D] hover:bg-[#22222C] border border-[#2F2F3B] hover:border-[#FF5500]/50 text-white transition-all group"
              aria-label="View Shopping Bag"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-[#FFA000] group-hover:scale-110 transition-transform" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2.5 w-4 h-4 rounded-full bg-[#FF3A00] text-white text-[10px] font-bold flex items-center justify-center animate-bounce shadow-md">
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
              className="inline-flex items-center gap-1.5 px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#FF4500] via-[#E21B23] to-[#FF2200] hover:from-[#FF5E00] hover:to-[#FF3300] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#FF4500]/30 transition-all active:scale-95 glow-fire"
            >
              <Flame className="w-4 h-4 fill-white" />
              <span>Order Now</span>
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#17171F] text-[#D4D4D8] hover:text-white border border-[#2A2A35]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#23232C] px-4 pb-4 bg-[#0E0E13] animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="py-2 px-3 rounded-xl text-sm font-bold tracking-wide text-[#D4D4D8] hover:text-[#FFA000] hover:bg-[#181822] transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-[#23232C] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenMenuCard();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#181822] border border-[#30303D] text-xs font-bold uppercase tracking-wider text-white"
                >
                  <FileText className="w-4 h-4 text-[#FFB703]" />
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
