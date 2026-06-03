"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Heart, User, Tag, MessageSquare } from "lucide-react";

const categories = [
  "Healing",
  "Family",
  "Finances",
  "Guidance",
  "Strength",
  "Thanksgiving",
];

export default function PrayerSection() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    request: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", category: "", request: "" });
    }, 3000);
  };

  return (
    <section id="prayer" className="py-16 sm:py-20 bg-cream border-t border-black/[0.08] relative">
      <div className="max-w-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-4 block">
            Prayer Wall
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
          className="bg-white rounded-2xl p-8 sm:p-10 border border-black/[0.08] shadow-sm"
        >
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
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-white/70 border border-black/[0.06] rounded-lg text-textprimary placeholder:text-textsecondary/35 focus:outline-none focus:border-gold/25 focus:ring-1 focus:ring-gold/10 transition-all duration-300 text-sm"
                    placeholder="Enter your name"
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
                    className="w-full pl-10 pr-4 py-3 bg-white/70 border border-black/[0.06] rounded-lg text-textprimary focus:outline-none focus:border-gold/25 focus:ring-1 focus:ring-gold/10 transition-all duration-300 appearance-none cursor-pointer text-sm"
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
                    className="w-full pl-10 pr-4 py-3 bg-white/70 border border-black/[0.06] rounded-lg text-textprimary placeholder:text-textsecondary/35 focus:outline-none focus:border-gold/25 focus:ring-1 focus:ring-gold/10 transition-all duration-300 resize-none text-sm"
                    placeholder="Share your prayer request..."
                  />
                </div>
              </div>

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
        </motion.div>
      </div>
    </section>
  );
}
