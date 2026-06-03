"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, User, Mail, Tag, MessageSquare, Send, MessageCircle, Check } from "lucide-react";

const categories = [
  "Healing", "Family", "Salvation", "Finances", "Spiritual Growth", "Other",
];

function PrayerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    request: "",
    anonymous: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", category: "", request: "", anonymous: false });
    }, 3000);
  };

  return (
    <div className="bg-white rounded-2xl p-8 sm:p-10 border border-black/[0.08] shadow-sm">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 0.5 }}
            className="w-14 h-14 bg-gold/6 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Heart className="w-6 h-6 text-gold" />
          </motion.div>
          <h3 className="font-serif text-xl text-textprimary mb-1.5">Prayer Received</h3>
          <p className="text-textsecondary font-light text-sm">We will lift your request up in prayer.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[11px] font-medium text-textsecondary uppercase tracking-wider mb-2">
              Your Name
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-textsecondary/30" />
              <input
                type="text"
                required={!formData.anonymous}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-white/70 border border-black/[0.08] rounded-lg text-textprimary placeholder:text-textsecondary/35 focus:outline-none focus:border-gold/25 focus:ring-1 focus:ring-gold/10 transition-all duration-300 text-sm"
                placeholder="Enter your name"
                disabled={formData.anonymous}
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-textsecondary uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-textsecondary/30" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-white/70 border border-black/[0.08] rounded-lg text-textprimary placeholder:text-textsecondary/35 focus:outline-none focus:border-gold/25 focus:ring-1 focus:ring-gold/10 transition-all duration-300 text-sm"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-textsecondary uppercase tracking-wider mb-2">
              Prayer Category
            </label>
            <div className="relative">
              <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-textsecondary/30" />
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-white/70 border border-black/[0.08] rounded-lg text-textprimary focus:outline-none focus:border-gold/25 focus:ring-1 focus:ring-gold/10 transition-all duration-300 appearance-none cursor-pointer text-sm"
              >
                <option value="" disabled>Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-textsecondary uppercase tracking-wider mb-2">
              Prayer Request
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-3.5 w-3.5 h-3.5 text-textsecondary/30" />
              <textarea
                required
                rows={4}
                value={formData.request}
                onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-white/70 border border-black/[0.08] rounded-lg text-textprimary placeholder:text-textsecondary/35 focus:outline-none focus:border-gold/25 focus:ring-1 focus:ring-gold/10 transition-all duration-300 resize-none text-sm"
                placeholder="Share your prayer request..."
              />
            </div>
          </div>

          <label className="flex items-center gap-3 cursor-pointer group">
            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
              formData.anonymous
                ? "bg-gold border-gold"
                : "border-black/[0.15] group-hover:border-gold/40"
            }`}>
              {formData.anonymous && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
            </div>
            <input
              type="checkbox"
              checked={formData.anonymous}
              onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
              className="sr-only"
            />
            <span className="text-[13px] text-textsecondary/80 font-light group-hover:text-textsecondary transition-colors">
              Submit anonymously
            </span>
          </label>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2.5 py-3 bg-charcoal text-white rounded-full text-[13px] font-medium tracking-wide hover:bg-charcoal/90 hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            Submit Prayer Request
          </motion.button>

          <p className="text-center text-[11px] text-textsecondary/60 mt-3">
            Your prayer request will be received by our ministry team.
          </p>
        </form>
      )}
    </div>
  );
}

export default function PrayerPageContent() {
  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-cream relative">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-6"
            >
              <span className="inline-block px-5 py-2 rounded-full border border-gold/20 text-gold text-[10px] font-medium tracking-[0.3em] uppercase">
                Prayer Ministry
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-textprimary leading-[0.9] tracking-[-0.03em]"
            >
              We Would Be
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-light italic text-gold leading-[0.9] tracking-[-0.03em] mt-1 sm:mt-0 md:-mt-2"
            >
              Honored To Pray
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-textprimary leading-[0.9] tracking-[-0.03em] mt-1"
            >
              For You
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-6 text-base md:text-lg text-textsecondary font-light tracking-[0.04em] max-w-md mx-auto leading-relaxed"
            >
              Whatever burden you carry, you do not have to carry it alone.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center"
            >
              <a
                href="#prayer-form"
                className="px-7 py-3 bg-charcoal text-white rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-charcoal/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:scale-[0.98] cursor-pointer"
              >
                Submit Prayer Request
              </a>
              <a
                href="#prayer-support"
                className="px-7 py-3 bg-white text-charcoal rounded-full text-[11px] font-medium tracking-wide border border-black/[0.08] hover:border-black/[0.15] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                Contact Prayer Team
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-cream border-t border-black/[0.08] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="w-12 h-[1px] bg-gold/30 mx-auto mb-10" />
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light italic text-textprimary leading-[1.4] tracking-tight">
              &ldquo;Cast all your anxiety on Him because He cares for you.&rdquo;
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-8 h-[1px] bg-gold/20" />
              <span className="font-serif text-lg sm:text-xl text-gold font-light tracking-wide">
                1 Peter 5:7
              </span>
              <div className="w-8 h-[1px] bg-gold/20" />
            </div>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto mt-10" />
          </motion.div>
        </div>
      </section>

      <section id="prayer-form" className="py-16 sm:py-20 bg-cream border-t border-black/[0.08] relative">
        <div className="max-w-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-12"
          >
            <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-4 block">
              Share Your Heart
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-textprimary mb-4 tracking-tight">
              Submit a <span className="italic font-light text-gold">Prayer Request</span>
            </h2>
            <p className="text-textsecondary max-w-sm mx-auto font-light text-base">
              Share your burdens with us. Our ministry team is here to pray for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <PrayerForm />
          </motion.div>
        </div>
      </section>

      <section id="prayer-support" className="py-16 sm:py-20 bg-cream border-t border-black/[0.08] relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-12"
          >
            <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-4 block">
              Prayer Support
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-textprimary mb-4 tracking-tight">
              How We Can <span className="italic font-light text-gold">Pray</span> With You
            </h2>
            <p className="text-textsecondary max-w-md mx-auto font-light text-base">
              Whether you need intercession or someone to speak with, our prayer team is here.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-black/[0.08] shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-gold/6 rounded-full flex items-center justify-center mx-auto mb-5">
                <Heart className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-textprimary mb-3">
                Submit Prayer Request
              </h3>
              <p className="text-textsecondary font-light text-sm leading-relaxed mb-7 max-w-xs mx-auto">
                Share your prayer needs with our ministry team. We will intercede on your behalf.
              </p>
              <a
                href="#prayer-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-charcoal/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:scale-[0.98] cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                Submit Prayer Request
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-black/[0.08] shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-gold/6 rounded-full flex items-center justify-center mx-auto mb-5">
                <MessageCircle className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-textprimary mb-3">
                Connect With Prayer Team
              </h3>
              <p className="text-textsecondary font-light text-sm leading-relaxed mb-7 max-w-xs mx-auto">
                Reach out to our prayer team directly for immediate prayer support and guidance.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-charcoal/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:scale-[0.98] cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Connect on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-cream border-t border-black/[0.08] relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 bg-gold/6 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Heart className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </motion.div>
            <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-4 block">
              Encouragement
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-textprimary mb-6 tracking-tight">
              You Are Not Alone
            </h2>
            <p className="text-textsecondary font-light text-lg leading-relaxed max-w-xl mx-auto">
              Our ministry believes in the power of prayer, the comfort of God&rsquo;s presence, and the faithfulness of His promises.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
