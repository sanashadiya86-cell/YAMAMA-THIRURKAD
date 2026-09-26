import React, { useState } from 'react';
import { Star, MessageSquare, ThumbsUp, MapPin, CheckCircle2, Plus } from 'lucide-react';
import { REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';
import { Review } from '../types/restaurant';

export const CustomerReviews: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [dish, setDish] = useState('Shawaya + Bishawari Rice Combo');
  const [location, setLocation] = useState('Angadipuram');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const initials = name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    const newRev: Review = {
      id: `custom-rev-${Date.now()}`,
      name,
      rating,
      date: 'Just now',
      comment,
      source: 'Verified Customer Review',
      avatarBg: '#FFD21F',
      initials: initials || 'YC',
      dishRecommended: dish,
      location: location || 'Angadipuram',
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setName('');
      setComment('');
    }, 1800);
  };

  return (
    <section id="reviews" className="py-20 bg-[#0E0E0E] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Summary Bar */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#181818] via-[#141414] to-[#1a140b] border border-[#FFD21F]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-16 h-16 rounded-2xl bg-[#FFD21F] text-black flex flex-col items-center justify-center font-black shadow-lg">
              <span className="text-2xl font-mono leading-none">4.9</span>
              <div className="flex text-black text-[10px] mt-0.5">
                {'★★★★★'}
              </div>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
                Top Rated Shawaya & Rice in Angadipuram
              </h2>
              <p className="text-xs text-white/70">
                Over 450+ verified reviews across Google & food delivery circles.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={RESTAURANT_INFO.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider border border-white/15 transition-all"
            >
              <ThumbsUp className="w-3.5 h-3.5 text-[#FFD21F]" />
              <span>Review on Google</span>
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#E21B23] hover:bg-[#c9141b] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>Add Review</span>
            </button>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FFD21F] uppercase mb-2">
            <MessageSquare className="w-3.5 h-3.5 text-[#E21B23]" />
            <span>Customer Love & Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white uppercase">
            What Our <span className="text-gold-gradient">Guests Say</span>
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Real feedback from diners in Angadippuram, Perinthalmanna, Thirurkad, and Malappuram.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="rounded-2xl bg-[#141414] border border-white/10 p-5 flex flex-col justify-between hover:border-[#FFD21F]/30 transition-all text-left shadow-lg"
            >
              <div className="space-y-3">
                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-black"
                      style={{ backgroundColor: rev.avatarBg }}
                    >
                      {rev.initials}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{rev.name}</h3>
                      <p className="text-[11px] text-white/50 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#E21B23]" />
                        {rev.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex text-[#FFD21F] text-xs">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FFD21F]" />
                      ))}
                    </div>
                    <span className="text-[10px] text-white/40">{rev.date}</span>
                  </div>
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Recommended Dish & Source */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px]">
                {rev.dishRecommended ? (
                  <span className="text-[#FFD21F] font-semibold truncate max-w-[200px]">
                    ⭐ {rev.dishRecommended}
                  </span>
                ) : (
                  <span className="text-white/40">Verified Customer</span>
                )}
                <span className="text-emerald-400 font-medium flex items-center gap-1 text-[10px]">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for adding review */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-lg bg-[#141414] border border-white/20 rounded-3xl p-6 sm:p-8 text-left shadow-2xl">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                Share Your Experience at Yamama Shawaya
              </h3>
              <p className="text-xs text-white/60 mt-1">
                Your review helps other diners in Angadipuram discover authentic charcoal grills!
              </p>

              {submitted ? (
                <div className="py-8 text-center space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-base font-bold text-white">Thank you for your feedback!</h4>
                  <p className="text-xs text-white/70">Your review has been published.</p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4 mt-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Faisal K."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-black/50 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#FFD21F]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1">
                        Location / Town
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Angadipuram"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-black/50 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#FFD21F]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1">
                        Rating (1–5 Stars)
                      </label>
                      <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="w-full px-3.5 py-2.5 bg-black/50 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#FFD21F]"
                      >
                        <option value={5}>5 Stars - Outstanding</option>
                        <option value={4}>4 Stars - Great</option>
                        <option value={3}>3 Stars - Good</option>
                        <option value={2}>2 Stars - Average</option>
                        <option value={1}>1 Star - Needs Improvement</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1">
                      Favorite Dish
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Shawaya + Bishawari Combo, Mexican Shawarma"
                      value={dish}
                      onChange={(e) => setDish(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-black/50 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#FFD21F]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1">
                      Review / Comments
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="How was the charcoal chicken, flavor, delivery speed, or ambiance?"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-black/50 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#FFD21F]"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase text-white/70 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-[#E21B23] hover:bg-[#c9141b] text-white text-xs font-bold uppercase tracking-wider"
                    >
                      Submit Review
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
