import React, { useState, useEffect, useMemo } from 'react';
import {
  Star,
  MessageSquare,
  ThumbsUp,
  MapPin,
  CheckCircle2,
  Plus,
  Flame,
  Bike,
  Sparkles,
  Filter,
  X,
  Share2,
} from 'lucide-react';
import { REVIEWS, RESTAURANT_INFO, MENU_ITEMS } from '../data/restaurantData';
import { Review } from '../types/restaurant';
import { YamamaLogo } from './YamamaLogo';

export const CustomerReviews: React.FC = () => {
  // Load saved reviews from localStorage or fallback to default REVIEWS
  const [reviewsList, setReviewsList] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem('yamama_reviews');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return REVIEWS;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starFilter, setStarFilter] = useState<number | 'all'>('all');
  const [orderTypeFilter, setOrderTypeFilter] = useState<string>('all');

  // Form states for the new Rating & Review option
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [smokinessRating, setSmokinessRating] = useState(5);
  const [tasteRating, setTasteRating] = useState(5);
  const [serviceRating, setServiceRating] = useState(5);
  const [orderType, setOrderType] = useState<'Dine-In' | 'Free Home Delivery' | 'Takeaway'>('Dine-In');
  const [dish, setDish] = useState('Shawaya + Bishawari Rice Combo (Full)');
  const [location, setLocation] = useState('Angadippuram');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('yamama_reviews', JSON.stringify(reviewsList));
    } catch {
      // ignore
    }
  }, [reviewsList]);

  // Dynamic Rating calculations
  const totalCount = reviewsList.length;
  const avgRating = useMemo(() => {
    if (reviewsList.length === 0) return 5.0;
    const sum = reviewsList.reduce((acc, curr) => acc + curr.rating, 0);
    return (sum / reviewsList.length).toFixed(1);
  }, [reviewsList]);

  const starCounts = useMemo(() => {
    const counts: { [key: number]: number } = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviewsList.forEach((r) => {
      const star = Math.max(1, Math.min(5, Math.floor(r.rating)));
      counts[star] = (counts[star] || 0) + 1;
    });
    return counts;
  }, [reviewsList]);

  const filteredReviews = useMemo(() => {
    return reviewsList.filter((rev) => {
      if (starFilter !== 'all' && rev.rating !== starFilter) return false;
      if (orderTypeFilter !== 'all' && rev.orderType !== orderTypeFilter) return false;
      return true;
    });
  }, [reviewsList, starFilter, orderTypeFilter]);

  const ratingDescriptions: { [key: number]: string } = {
    5: '🔥 Phenomenal! (Authentic Charcoal Smoke & Juicy Meat)',
    4: '⭐ Very Good (Great flavor & fast service)',
    3: '👍 Good (Decent shawaya meal)',
    2: '😐 Average (Needs improvement)',
    1: '👎 Disappointing',
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const initials = name
      .split(' ')
      .filter(Boolean)
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    const avatarColors = ['#FF4D00', '#FF8800', '#E21B23', '#FFD21F', '#FF3300'];
    const randomColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];

    const newRev: Review = {
      id: `custom-rev-${Date.now()}`,
      name: name.trim(),
      rating,
      date: 'Just now',
      comment: comment.trim(),
      source: 'Verified Customer Review',
      avatarBg: randomColor,
      initials: initials || 'YS',
      dishRecommended: dish,
      location: location.trim() || 'Angadipuram',
      orderType,
      smokinessRating,
      tasteRating,
      serviceRating,
      verified: true,
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setName('');
      setComment('');
      setRating(5);
    }, 1800);
  };

  return (
    <section id="reviews" className="py-20 bg-[#08080A] relative border-b border-[#2B2B33]">
      {/* Background ambient fire smoke glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#FF3A00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF9000]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Animated Logo */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center">
            <YamamaLogo size="md" animate={true} glow="fire" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181F] border border-[#FF5500]/40 text-[#FFA000] text-xs font-bold tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5 text-[#FF3E00] animate-pulse" />
            <span>Customer Testimonials & Fire Grills Experience</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight uppercase">
            REVIEWS & <span className="text-fire-gradient">RATINGS</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-2xl mx-auto">
            Real guest opinions on our slow charcoal-roasted chicken shawaya, spiced Bishawari rice,
            and fast free home delivery in Angadippuram & Perinthalmanna.
          </p>
        </div>

        {/* Rating Breakdown & Quick Action Hero Bar (Fire & Smoke Charcoal style) */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#18181E] via-[#121216] to-[#0A0A0D] border border-[#FF4D00]/30 shadow-2xl glow-smoke grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Score Column */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-left border-b lg:border-b-0 lg:border-r border-[#2C2C35] pb-6 lg:pb-0 lg:pr-6">
            <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#FF3A00] via-[#FF8000] to-[#FFD21F] p-0.5 shadow-[0_0_25px_rgba(255,80,0,0.4)] shrink-0">
              <div className="w-full h-full rounded-[14px] bg-[#0E0E12] flex flex-col items-center justify-center text-center">
                <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFF275] to-[#FF5500] font-mono leading-none">
                  {avgRating}
                </span>
                <div className="flex text-[#FFB703] text-xs mt-1">
                  {'★★★★★'}
                </div>
                <span className="text-[10px] text-[#A1A1AA] uppercase font-mono mt-0.5 font-bold">
                  {totalCount} Ratings
                </span>
              </div>
            </div>

            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FF4500]/20 text-[#FFA000] border border-[#FF4500]/40 text-[10px] font-extrabold uppercase tracking-wide">
                Top Rated Charcoal Spot
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1 uppercase tracking-tight">
                Angadipuram & Perinthalmanna
              </h3>
              <p className="text-xs text-[#9CA3AF] mt-1 leading-relaxed">
                98% of diners recommend the signature Shawaya + Bishawari rice combo!
              </p>
            </div>
          </div>

          {/* Sub-Metrics Breakdown Bars */}
          <div className="lg:col-span-5 space-y-2.5 text-xs text-left">
            <div className="flex items-center justify-between text-[#E4E4E7]">
              <span className="flex items-center gap-1.5 font-bold text-xs">
                <Flame className="w-3.5 h-3.5 text-[#FF3E00]" />
                Charcoal Smokiness & Flavor
              </span>
              <span className="font-mono font-bold text-[#FFA000]">5.0 / 5.0</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#202028] overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#FF3A00] to-[#FFD21F] rounded-full w-[99%]" />
            </div>

            <div className="flex items-center justify-between text-[#E4E4E7] pt-1">
              <span className="flex items-center gap-1.5 font-bold text-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD21F]" />
                Chicken Juiciness & Rice Aroma
              </span>
              <span className="font-mono font-bold text-[#FFA000]">4.9 / 5.0</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#202028] overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#FF6600] to-[#FFB703] rounded-full w-[97%]" />
            </div>

            <div className="flex items-center justify-between text-[#E4E4E7] pt-1">
              <span className="flex items-center gap-1.5 font-bold text-xs">
                <Bike className="w-3.5 h-3.5 text-emerald-400" />
                Free Delivery Speed & Packaging
              </span>
              <span className="font-mono font-bold text-emerald-400">4.9 / 5.0</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#202028] overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full w-[96%]" />
            </div>
          </div>

          {/* Action CTAs */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#FF4500] via-[#E21B23] to-[#FF2200] hover:from-[#FF5E00] hover:to-[#FF3300] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#FF4500]/30 transition-all active:scale-95 glow-fire flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add Your Rating & Review</span>
            </button>

            <a
              href={RESTAURANT_INFO.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#202028] hover:bg-[#2A2A35] text-[#E4E4E7] border border-[#3C3C48] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <ThumbsUp className="w-3.5 h-3.5 text-[#FFD21F]" />
              <span>Review on Google Maps</span>
            </a>
          </div>
        </div>

        {/* Filter Controls (Star rating & Order type) */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-[#272730]">
          {/* Star Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-bold text-[#A1A1AA] uppercase flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#FF6600]" />
              Filter:
            </span>

            <button
              onClick={() => setStarFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                starFilter === 'all'
                  ? 'bg-gradient-to-r from-[#FF4D00] to-[#E21B23] text-white shadow-md'
                  : 'bg-[#18181E] text-[#A1A1AA] hover:text-white border border-[#2D2D37]'
              }`}
            >
              All Reviews ({totalCount})
            </button>

            {[5, 4].map((st) => (
              <button
                key={st}
                onClick={() => setStarFilter(st)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all shrink-0 ${
                  starFilter === st
                    ? 'bg-[#FFD21F] text-black font-extrabold shadow-md'
                    : 'bg-[#18181E] text-[#D4D4D8] hover:text-white border border-[#2D2D37]'
                }`}
              >
                <span>{st} Stars</span>
                <span className="text-[10px] opacity-75">({starCounts[st] || 0})</span>
              </button>
            ))}
          </div>

          {/* Dining / Delivery Mode Filter */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-[#A1A1AA] text-xs">Service:</span>
            {['all', 'Dine-In', 'Free Home Delivery', 'Takeaway'].map((type) => (
              <button
                key={type}
                onClick={() => setOrderTypeFilter(type)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                  orderTypeFilter === type
                    ? 'bg-[#2E2E38] text-white border border-[#FF6600]/50'
                    : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                {type === 'all' ? 'All' : type}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Cards Grid (Smokey Charcoal theme with Fire accents) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl bg-gradient-to-b from-[#18181E] to-[#101014] border border-[#2B2B36] p-5 sm:p-6 flex flex-col justify-between hover:border-[#FF5500]/50 transition-all duration-300 text-left shadow-xl group hover:shadow-[0_10px_30px_rgba(255,60,0,0.15)]"
            >
              <div className="space-y-3.5">
                {/* Header: User avatar, rating, and date */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center font-extrabold text-sm text-black shadow-md shrink-0 border border-white/20"
                      style={{ backgroundColor: rev.avatarBg }}
                    >
                      {rev.initials}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-[#FFA000] transition-colors leading-tight">
                        {rev.name}
                      </h3>
                      <p className="text-[11px] text-[#A1A1AA] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#FF3E00]" />
                        {rev.location}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="flex text-[#FFB703] text-xs">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FFB703]" />
                      ))}
                    </div>
                    <span className="text-[10px] text-[#71717A] font-mono mt-0.5 block">{rev.date}</span>
                  </div>
                </div>

                {/* Service Tag & Smokiness Pill */}
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-semibold">
                  {rev.orderType && (
                    <span className="px-2 py-0.5 rounded-full bg-[#242430] border border-[#3C3C4A] text-[#D4D4D8]">
                      {rev.orderType === 'Free Home Delivery' ? '🛵 Free Delivery' : rev.orderType === 'Dine-In' ? '🍽️ Dine-In' : '🥡 Takeaway'}
                    </span>
                  )}
                  {rev.smokinessRating && (
                    <span className="px-2 py-0.5 rounded-full bg-[#FF4500]/15 border border-[#FF4500]/40 text-[#FFA000] flex items-center gap-1">
                      <Flame className="w-2.5 h-2.5 text-[#FF3E00]" />
                      <span>Smokiness: 5/5</span>
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Bottom Footer: Dish Recommended & Verified */}
              <div className="pt-4 mt-4 border-t border-[#262630] flex items-center justify-between text-[11px]">
                {rev.dishRecommended ? (
                  <span className="text-[#FFB800] font-semibold truncate max-w-[210px] flex items-center gap-1">
                    <Flame className="w-3 h-3 text-[#FF3E00] shrink-0" />
                    <span className="truncate">{rev.dishRecommended}</span>
                  </span>
                ) : (
                  <span className="text-[#71717A]">Verified Customer</span>
                )}

                <span className="text-emerald-400 font-semibold flex items-center gap-1 text-[10px] shrink-0">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* In-Section Quick Review Callout Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#181820] via-[#1F1815] to-[#181820] border border-[#FF6600]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <YamamaLogo size="md" animate={true} glow="ember" />
            <div>
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                Dined at Yamama Shawaya Recently?
              </h3>
              <p className="text-xs text-[#A1A1AA] mt-0.5">
                Rate the juiciness of our charcoal chicken and the aroma of our Bishawari rice.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full md:w-auto shrink-0 px-6 py-3 rounded-xl bg-[#FF4500] hover:bg-[#FF3000] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-[#FF4500]/30 transition-all active:scale-95 glow-fire"
          >
            ⭐ Submit Your Rating (Takes 30 Sec)
          </button>
        </div>

        {/* Interactive Add Review & Rating Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
            <div className="fixed inset-0" onClick={() => setIsModalOpen(false)} />

            <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#121216] border border-[#FF5500]/40 rounded-3xl p-6 sm:p-8 text-left shadow-2xl z-10 space-y-5">
              {/* Header with animated logo */}
              <div className="flex items-center justify-between border-b border-[#272733] pb-4">
                <div className="flex items-center gap-3">
                  <YamamaLogo size="sm" animate={true} glow="fire" />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                      Rate & Review Yamama Shawaya
                    </h3>
                    <p className="text-[11px] text-[#A1A1AA]">
                      Oradampalam, Calicut Road, Angadipuram
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-xl text-[#71717A] hover:text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Review Added Successfully!</h4>
                  <p className="text-xs text-[#A1A1AA] max-w-xs mx-auto">
                    Thank you for rating our charcoal shawaya & Bishawari rice. Your review is now live!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4">
                  {/* Star Rating Interactive Picker */}
                  <div className="p-4 rounded-2xl bg-[#1A1A22] border border-[#2F2F3D] text-center space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#FFA000] block">
                      Overall Experience Rating *
                    </label>

                    <div className="flex items-center justify-center gap-2">
                      {[1, 2, 3, 4, 5].map((starValue) => {
                        const active = (hoverRating || rating) >= starValue;
                        return (
                          <button
                            type="button"
                            key={starValue}
                            onClick={() => setRating(starValue)}
                            onMouseEnter={() => setHoverRating(starValue)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 transition-transform hover:scale-125 focus:outline-none"
                            aria-label={`${starValue} stars`}
                          >
                            <Star
                              className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                                active
                                  ? 'fill-[#FFB800] text-[#FFB800] drop-shadow-[0_0_8px_rgba(255,184,0,0.6)]'
                                  : 'text-[#3E3E4D]'
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>

                    <p className="text-xs text-[#E4E4E7] font-semibold h-4">
                      {ratingDescriptions[hoverRating || rating]}
                    </p>
                  </div>

                  {/* Sub-Ratings: Charcoal Smokiness & Service */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-[#171720] border border-[#2B2B38] space-y-1">
                      <span className="font-bold text-[#D4D4D8] flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-[#FF3E00]" />
                        Smokiness Rating:
                      </span>
                      <div className="flex items-center gap-1 pt-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <button
                            type="button"
                            key={s}
                            onClick={() => setSmokinessRating(s)}
                            className={`w-6 h-6 rounded text-[11px] font-bold ${
                              smokinessRating >= s
                                ? 'bg-[#FF4500] text-white'
                                : 'bg-[#242430] text-[#71717A]'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#171720] border border-[#2B2B38] space-y-1">
                      <span className="font-bold text-[#D4D4D8] flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#FFD21F]" />
                        Taste & Juiciness:
                      </span>
                      <div className="flex items-center gap-1 pt-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <button
                            type="button"
                            key={s}
                            onClick={() => setTasteRating(s)}
                            className={`w-6 h-6 rounded text-[11px] font-bold ${
                              tasteRating >= s
                                ? 'bg-[#FFA000] text-black'
                                : 'bg-[#242430] text-[#71717A]'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Customer Name & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#D4D4D8] block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Shinshad K."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#0C0C10] border border-[#2F2F3E] rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF5500]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#D4D4D8] block mb-1">
                        Your Town / Area
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Angadippuram, Thirurkad, Perinthalmanna"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#0C0C10] border border-[#2F2F3E] rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF5500]"
                      />
                    </div>
                  </div>

                  {/* Service Order Type */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#D4D4D8] block mb-1">
                      Dining / Order Mode:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['Dine-In', 'Free Home Delivery', 'Takeaway'] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setOrderType(type)}
                          className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border ${
                            orderType === type
                              ? 'bg-[#FF4500] text-white border-[#FF4500] shadow-md'
                              : 'bg-[#15151D] text-[#A1A1AA] border-[#292936] hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Favorite Dish Picker */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#D4D4D8] block mb-1">
                      Dish You Had / Recommend
                    </label>
                    <select
                      value={dish}
                      onChange={(e) => setDish(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#0C0C10] border border-[#2F2F3E] rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF5500]"
                    >
                      {MENU_ITEMS.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name} ({item.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Review Text */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#D4D4D8] block mb-1">
                      Your Comments / Taste Feedback *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell us about the charcoal smokiness, tender chicken, Bishawari rice spices, toum dip, or delivery experience..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#0C0C10] border border-[#2F2F3E] rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase text-[#A1A1AA] hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF4500] to-[#E21B23] hover:from-[#FF5E00] hover:to-[#FF3300] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-[#FF4500]/30 transition-all glow-fire active:scale-95"
                    >
                      Publish Rating
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
