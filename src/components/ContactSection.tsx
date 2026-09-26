import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Bike,
  MessageCircle,
  ExternalLink,
  Mail,
  Send,
  CheckCircle,
  Maximize2,
  X,
  Store,
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [orderType, setOrderType] = useState('Free Home Delivery');
  const [message, setMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    let text = `🍗 *NEW ENQUIRY FROM WEBSITE* 🍗\n\n`;
    text += `*Name:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;
    text += `*Service:* ${orderType}\n`;
    text += `*Message:* ${message || 'None'}\n\n`;
    text += `📍 Direction: Angadipuram, Thirurkad (Calicut Road, Oradampalam)\n`;

    const url = `https://wa.me/${RESTAURANT_INFO.whatsappClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setSentNotice(true);
    setTimeout(() => {
      setSentNotice(false);
      setName('');
      setPhone('');
      setMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#08080B] relative border-b border-[#252530]">
      {/* Background ambient glowing smoke */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#FF4500]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center">
            <YamamaLogo size="sm" animate={true} glow="fire" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16161F] border border-[#FF5500]/40 text-[#FFA000] text-xs font-bold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#FF3E00]" />
            <span>Visit Us or Order Delivery</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white uppercase">
            FIND US & <span className="text-fire-gradient">CONTACT</span>
          </h2>
          <p className="mt-2 text-sm text-[#A1A1AA]">
            Conveniently located on Calicut Road at Oradampalam, Angadipuram with ample parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {/* Address Card with Restaurant Picture */}
            <div className="p-5 rounded-2xl bg-[#14141C] border border-[#282835] hover:border-[#FF5500]/40 transition-colors space-y-3 shadow-lg">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#FFA000]">
                <Store className="w-4 h-4 text-[#FF4500]" />
                <span>Restaurant Location & Storefront</span>
              </div>

              {/* Real Restaurant Picture Thumbnail */}
              <div
                className="relative aspect-[16/9] rounded-xl overflow-hidden border border-[#2D2D3B] group cursor-pointer shadow-md"
                onClick={() => setShowPhotoModal(true)}
              >
                <img
                  src="/yamama-shop-exterior.jpg"
                  alt="Yamama Shawaya Restaurant Storefront Calicut Road"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0D]/95 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] font-bold text-[#FFA000] bg-black/85 px-2 py-0.5 rounded border border-[#FF5500]/40">
                    Storefront on Calicut Road
                  </span>
                  <span className="text-[10px] text-white bg-black/80 px-2 py-0.5 rounded flex items-center gap-1 border border-white/20">
                    <Maximize2 className="w-3 h-3 text-[#FFB703]" /> Enlarge
                  </span>
                </div>
              </div>

              <p className="text-sm font-bold text-white leading-snug">
                {RESTAURANT_INFO.address}
              </p>
              
              {/* Highlighted Direction Box */}
              <div className="p-3.5 rounded-xl bg-[#0E0E14] border border-[#FF5500]/30 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#FFA000]">
                      Direction: Angadipuram, Thirurkad
                    </span>
                  </div>
                  <span className="text-[10px] text-white/70 bg-[#20202C] px-2 py-0.5 rounded font-mono font-bold">
                    Calicut Road
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#D4D4D8] pt-1">
                  <div className="p-2 rounded-lg bg-[#161620] border border-[#252532]">
                    <span className="text-[#FFA000] font-bold block mb-0.5">🚗 From Angadipuram:</span>
                    <span>Take Calicut Road towards Thirurkad (~2.8 km). Arrive at Oradampalam, Valiyaveetilpadi on the main highway.</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#161620] border border-[#252532]">
                    <span className="text-emerald-400 font-bold block mb-0.5">🚗 From Thirurkad:</span>
                    <span>Take Calicut Road towards Angadipuram (~2.5 km). Look for our glowing Yamama Shawaya signboard with roadside parking.</span>
                  </div>
                </div>
              </div>

              <div className="pt-1 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href={RESTAURANT_INFO.social.googleMapsDirections || RESTAURANT_INFO.social.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#FF4500] to-[#E21B23] text-white text-xs font-bold hover:shadow-lg hover:shadow-[#FF4500]/30 transition-all"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={RESTAURANT_INFO.social.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#20202C] hover:bg-[#2A2A38] text-[#D4D4D8] hover:text-white text-xs font-semibold border border-[#3A3A4A] transition-colors"
                  >
                    <span>Maps Pin</span>
                  </a>
                </div>
                <button
                  onClick={() => setShowPhotoModal(true)}
                  className="text-xs text-[#FFA000] font-bold hover:underline inline-flex items-center gap-1"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>View Storefront</span>
                </button>
              </div>
            </div>

            {/* Phone & Delivery Hotline Card */}
            <div className="p-5 rounded-2xl bg-[#14141C] border border-[#282835] hover:border-emerald-500/40 transition-colors space-y-3 shadow-lg">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Bike className="w-4 h-4" />
                <span>Free Home Delivery Hotlines</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneClean}`}
                  className="p-3 rounded-xl bg-[#0D0D12] border border-[#282835] hover:border-emerald-400 flex items-center gap-3 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-[#A1A1AA] uppercase block font-semibold">Line 1</span>
                    <span className="text-xs font-bold text-white font-mono">{RESTAURANT_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`tel:${RESTAURANT_INFO.phone2Clean}`}
                  className="p-3 rounded-xl bg-[#0D0D12] border border-[#282835] hover:border-emerald-400 flex items-center gap-3 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-[#A1A1AA] uppercase block font-semibold">Line 2</span>
                    <span className="text-xs font-bold text-white font-mono">{RESTAURANT_INFO.phone2}</span>
                  </div>
                </a>
              </div>
              <p className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                ✓ Free Home Delivery: Angadippuram, Thirurkad, and Perinthalmanna
              </p>
            </div>

            {/* Timings Card */}
            <div className="p-5 rounded-2xl bg-[#14141C] border border-[#282835] space-y-2 shadow-lg">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#FFA000]">
                <Clock className="w-4 h-4 text-[#FFA000]" />
                <span>Opening Hours</span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#E4E4E7] font-medium">
                <span>Monday – Sunday (Daily):</span>
                <span className="font-mono font-bold text-[#FFB703]">12:00 PM – 12:00 AM</span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#A1A1AA]">
                <span>Dine-In & Takeaway:</span>
                <span>Till 12:00 Midnight</span>
              </div>
            </div>

            {/* Email & Info */}
            <div className="p-3.5 rounded-xl bg-[#14141C] border border-[#282835] text-xs text-[#A1A1AA] flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#71717A] shrink-0" />
              <span>Email: {RESTAURANT_INFO.email}</span>
            </div>
          </div>

          {/* Right Column: Interactive Quick Enquiry / WhatsApp Form */}
          <div className="lg:col-span-7 bg-[#14141C] border border-[#282835] rounded-3xl p-6 sm:p-8 text-left shadow-2xl glow-smoke">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Enquiry</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display uppercase">
                Send an Enquiry or Booking
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
                Send your order request, bulk meal questions, or table reservations directly to our front desk via WhatsApp.
              </p>
            </div>

            {sentNotice && (
              <div className="mb-4 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-300 text-xs font-bold flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>WhatsApp conversation opened! We will reply promptly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#D4D4D8] block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shinshad / Rahul"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#0A0A0E] border border-[#2B2B38] rounded-xl text-sm text-white focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#D4D4D8] block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98460 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#0A0A0E] border border-[#2B2B38] rounded-xl text-sm text-white focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#D4D4D8] block mb-1">
                  Enquiry Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Free Home Delivery', 'Dine-In Table', 'Party / Bulk Feast'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setOrderType(type)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border ${
                        orderType === type
                          ? 'bg-gradient-to-r from-[#FF4500] to-[#E21B23] text-white border-[#FF4500] shadow-md'
                          : 'bg-[#0A0A0E] text-[#A1A1AA] border-[#2B2B38] hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#D4D4D8] block mb-1">
                  Message / Order Details / Landmark
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Please deliver 1 Full Shawaya + Bishawari Combo to Near Thirurkad Railway gate..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0A0A0E] border border-[#2B2B38] rounded-xl text-sm text-white focus:outline-none focus:border-[#FF5500]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/30 active:scale-98 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Open in WhatsApp & Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Restaurant Photo Lightbox Modal */}
      {showPhotoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowPhotoModal(false)}
        >
          <button
            onClick={() => setShowPhotoModal(false)}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-[#1F1F2A] hover:bg-[#2A2A38] text-white z-50 transition-colors border border-[#3C3C4C]"
            aria-label="Close photo"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/yamama-shop-exterior.jpg"
              alt="Yamama Shawaya Restaurant Storefront"
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl border border-[#FF5500]/50 shadow-2xl glow-smoke"
            />
            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs font-bold text-[#FFA000] uppercase tracking-wider">
                Yamama Shawaya • Calicut Road (Angadipuram, Thirurkad)
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                Yamama Shawaya Storefront on Calicut Road
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
                Direction: Angadipuram, Thirurkad. Located at Oradampalam, Valiyaveetilpadi on Calicut Road. Look for our glowing signboard. Ample parking space in front!
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
