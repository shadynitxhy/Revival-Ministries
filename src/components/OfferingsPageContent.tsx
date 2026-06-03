"use client";

import { motion } from "framer-motion";
import { Heart, Music, Globe, Landmark } from "lucide-react";

export default function OfferingsPageContent() {
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
                Giving As Worship
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-textprimary leading-[0.9] tracking-[-0.03em]"
            >
              Give With
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-light italic text-gold leading-[0.9] tracking-[-0.03em] mt-1 sm:mt-0 md:-mt-2"
            >
              Purpose
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-6 text-base md:text-lg text-textsecondary font-light tracking-[0.04em] max-w-md mx-auto leading-relaxed"
            >
              Your generosity helps support worship ministry, outreach and the ongoing work of Revival Ministries.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center"
            >
              <a
                href="#giving-methods"
                className="px-7 py-3 bg-charcoal text-white rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-charcoal/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:scale-[0.98]"
              >
                Support The Ministry
              </a>
              <a
                href="#why-we-give"
                className="px-7 py-3 bg-white text-charcoal rounded-full text-[11px] font-medium tracking-wide border border-black/[0.08] hover:border-black/[0.15] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98]"
              >
                Learn More
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
              &ldquo;God loves a cheerful giver.&rdquo;
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-8 h-[1px] bg-gold/20" />
              <span className="font-serif text-lg sm:text-xl text-gold font-light tracking-wide">
                2 Corinthians 9:7
              </span>
              <div className="w-8 h-[1px] bg-gold/20" />
            </div>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto mt-10" />
          </motion.div>
        </div>
      </section>

      <section id="why-we-give" className="py-16 sm:py-20 bg-cream border-t border-black/[0.08] relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-12"
          >
            <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-4 block">
              Why We Give
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-textprimary mb-4 tracking-tight">
              Giving That <span className="italic font-light text-gold">Matters</span>
            </h2>
            <p className="text-textsecondary max-w-md mx-auto font-light text-base">
              Every gift supports the mission of sharing the Gospel through worship and ministry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-black/[0.08] shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-gold/6 rounded-full flex items-center justify-center mx-auto mb-5">
                <Music className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-textprimary mb-3">
                Worship Ministry
              </h3>
              <p className="text-textsecondary font-light text-sm leading-relaxed max-w-xs mx-auto">
                Supporting worship music and ministry resources.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-black/[0.08] shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-gold/6 rounded-full flex items-center justify-center mx-auto mb-5">
                <Globe className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-textprimary mb-3">
                Outreach
              </h3>
              <p className="text-textsecondary font-light text-sm leading-relaxed max-w-xs mx-auto">
                Helping spread the Gospel through digital and local ministry efforts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-black/[0.08] shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-gold/6 rounded-full flex items-center justify-center mx-auto mb-5">
                <Heart className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-textprimary mb-3">
                Kingdom Impact
              </h3>
              <p className="text-textsecondary font-light text-sm leading-relaxed max-w-xs mx-auto">
                Investing in lives transformed through Christ-centered ministry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="giving-methods" className="py-16 sm:py-20 bg-cream border-t border-black/[0.08] relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-12"
          >
            <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-4 block">
              Giving Methods
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-textprimary mb-4 tracking-tight">
              Ways To <span className="italic font-light text-gold">Give</span>
            </h2>
            <p className="text-textsecondary max-w-md mx-auto font-light text-base">
              We are preparing convenient ways for you to support the ministry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-black/[0.08] shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-gold/6 rounded-full flex items-center justify-center mx-auto mb-5">
                <Landmark className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-textprimary mb-3">
                UPI Giving
              </h3>
              <span className="inline-block px-4 py-1.5 rounded-full border border-black/[0.08] text-textsecondary/50 text-[10px] font-medium tracking-wide">
                Coming Soon
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-black/[0.08] shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-gold/6 rounded-full flex items-center justify-center mx-auto mb-5">
                <Landmark className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-textprimary mb-3">
                Bank Transfer
              </h3>
              <span className="inline-block px-4 py-1.5 rounded-full border border-black/[0.08] text-textsecondary/50 text-[10px] font-medium tracking-wide">
                Coming Soon
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-black/[0.08] shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-gold/6 rounded-full flex items-center justify-center mx-auto mb-5">
                <Globe className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-textprimary mb-3">
                International Giving
              </h3>
              <span className="inline-block px-4 py-1.5 rounded-full border border-black/[0.08] text-textsecondary/50 text-[10px] font-medium tracking-wide">
                Future Support
              </span>
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
              Partner Appreciation
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-textprimary mb-6 tracking-tight">
              Thank You For Standing With Us
            </h2>
            <p className="text-textsecondary font-light text-lg leading-relaxed max-w-xl mx-auto">
              We are grateful for every prayer, every act of support and every partner who helps make this ministry possible.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
