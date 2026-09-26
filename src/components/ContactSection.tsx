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
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [orderType, setOrderType] = useState('Free Home Delivery');
  const [message, setMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    let text = `🍗 *NEW ENQUIRY FROM WEBSITE* 🍗\n\n`;
    text += `*Name:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;
    text += `*Service:* ${orderType}\n`;
    text += `*Message:* ${message || 'None'}\n\n`;
    text += `📍 Oradampalam, Calicut Road, Angadipuram\n`;

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
    <section id="contact" className="py-20 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FFD21F] uppercase mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#E21B23]" />
            <span>Visit Us or Order Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white uppercase">
            FIND US & <span className="text-gold-gradient">CONTACT</span>
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Conveniently located on Calicut Road at Oradampalam, Angadipuram with ample parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#FFD21F]/30 transition-colors space-y-2">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#FFD21F]">
                <MapPin className="w-4 h-4 text-[#E21B23]" />
                <span>Restaurant Location</span>
              </div>
              <p className="text-sm font-bold text-white leading-snug">
                {RESTAURANT_INFO.address}
              </p>
              <p className="text-xs text-white/60">
                Landmark: Oradampalam, Valiyaveetilpadi, on the main Calicut Road between Angadippuram & Thirurkad.
              </p>
              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFD21F] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone & Delivery Hotline Card */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 hover:border-emerald-500/30 transition-colors space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Bike className="w-4 h-4" />
                <span>Free Home Delivery Hotlines</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneClean}`}
                  className="p-3 rounded-xl bg-black/50 border border-white/10 hover:border-emerald-400 flex items-center gap-3 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-white/50 uppercase block font-semibold">Line 1</span>
                    <span className="text-xs font-bold text-white font-mono">{RESTAURANT_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`tel:${RESTAURANT_INFO.phone2Clean}`}
                  className="p-3 rounded-xl bg-black/50 border border-white/10 hover:border-emerald-400 flex items-center gap-3 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-white/50 uppercase block font-semibold">Line 2</span>
                    <span className="text-xs font-bold text-white font-mono">{RESTAURANT_INFO.phone2}</span>
                  </div>
                </a>
              </div>
              <p className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                ✓ Free Home Delivery: Angadippuram, Thirurkad, and Perinthalmanna
              </p>
            </div>

            {/* Timings Card */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-2">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#FFD21F]">
                <Clock className="w-4 h-4 text-[#FFD21F]" />
                <span>Opening Hours</span>
              </div>
              <div className="flex items-center justify-between text-xs text-white/90 font-medium">
                <span>Monday – Sunday (Daily):</span>
                <span className="font-mono font-bold text-[#FFD21F]">12:00 PM – 12:00 AM</span>
              </div>
              <div className="flex items-center justify-between text-xs text-white/70">
                <span>Dine-In & Takeaway:</span>
                <span>Till 12:00 Midnight</span>
              </div>
            </div>

            {/* Email & Info */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-white/40 shrink-0" />
              <span>Email: {RESTAURANT_INFO.email}</span>
            </div>
          </div>

          {/* Right Column: Interactive Quick Enquiry / WhatsApp Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/10 rounded-3xl p-6 sm:p-8 text-left shadow-2xl">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Enquiry</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display uppercase">
                Send an Enquiry or Booking
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1">
                Send your order request, bulk meal questions, or table reservations directly to our front desk via WhatsApp.
              </p>
            </div>

            {sentNotice && (
              <div className="mb-4 p-4 rounded-xl bg-emerald-950 border border-emerald-500 text-emerald-300 text-xs font-bold flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>WhatsApp conversation opened! We will reply promptly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shinshad / Rahul"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#FFD21F]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98460 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#FFD21F]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1">
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
                          ? 'bg-[#FFD21F] text-black border-[#FFD21F]'
                          : 'bg-black/50 text-white/70 border-white/10 hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1">
                  Message / Order Details / Landmark
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Please deliver 1 Full Shawaya + Bishawari Combo to Near Thirurkad Railway gate..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#FFD21F]"
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
    </section>
  );
};
