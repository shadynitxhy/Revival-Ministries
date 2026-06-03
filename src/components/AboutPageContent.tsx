"use client";

import { motion } from "framer-motion";
import { Play, Music, ArrowRight } from "lucide-react";
import { handleImgError, FALLBACK_IMG } from "@/utils/img";
import Link from "next/link";
import Image from "next/image";

const ministryStats = [
  { value: "275K+", label: "Subscribers" },
  { value: "248+", label: "Videos" },
  { value: "Millions", label: "of Worship Views" },
  { value: "Global", label: "Tamil Audience" },
];

export default function AboutPageContent() {
  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-cream relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex-1 text-center"
            >
              <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-4 block">
                Who We Are
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-textprimary mb-4 tracking-tight">
                About Revival Ministries
              </h1>
              <p className="text-textsecondary font-light text-lg leading-relaxed max-w-lg mx-auto mb-6">
                Revival Ministries exists to share the Gospel through worship and biblical teaching. Through worship music, ministry events, and biblical messages, we seek to lead people into a deeper relationship with Jesus Christ.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/music"
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-charcoal text-white rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-charcoal/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:scale-[0.98] cursor-pointer"
                >
                  <Music className="w-3.5 h-3.5" />
                  Our Music
                </Link>
                <Link
                  href="/sermons"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal rounded-full text-[11px] font-medium tracking-wide border border-black/[0.08] hover:border-black/[0.15] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  View Sermons
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full md:w-[45%] aspect-[3/4] card-image"
            >
              <Image
                src={FALLBACK_IMG}
                alt="Pastor Lucasekar portrait"
                onError={handleImgError}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                unoptimized
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream border-t border-black/[0.08] relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-4 block">
              Our Worship Mission
            </span>
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-textprimary leading-[1.3] tracking-tight">
              To proclaim Christ,<br />
              strengthen believers,<br />
              and inspire worship through music<br />
              and biblical teaching.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream border-t border-black/[0.08] relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-12"
          >
            <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-4 block">
              Pastor
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-textprimary tracking-tight">
              Pastor Lucasekar
            </h2>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full md:w-[38%]"
            >
              <div className="aspect-[3/4] card-image">
                <Image
                  src={FALLBACK_IMG}
                  alt="Revival Ministries ministry image"
                  onError={handleImgError}
                  fill
                  sizes="(max-width: 768px) 100vw, 38vw"
                  unoptimized
                  className="object-cover rounded-2xl"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex-1"
            >
              <div className="space-y-4 text-textsecondary font-light text-base leading-relaxed max-w-lg">
                <p>
                  Known for worship songs and revival music ministry, Pastor
                  Lucasekar has blessed believers through Tamil Christian worship
                  music and biblical teaching.
                </p>
                <p>
                  His ministry continues to encourage believers through worship,
                  messages and Christ-centered content that points people toward
                  spiritual growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream border-t border-black/[0.08] relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-12"
          >
            <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-4 block">
              Our Vision
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-textprimary mb-4 tracking-tight">
              Ministry Vision
            </h2>
            <p className="text-textsecondary max-w-lg mx-auto font-light text-base">
              Spreading the Word through worship, prayer, and community — reaching souls across the world with the love of Christ.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {ministryStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="card-surface p-8 sm:p-10 text-center"
              >
                <p className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-textsecondary font-light tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream border-t border-black/[0.08] relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-4 block">
              Join the Movement
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-textprimary mb-10 tracking-tight">
              Experience Revival Worship
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-7 py-3 bg-charcoal text-white rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-charcoal/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:scale-[0.98] cursor-pointer"
              >
                <Music className="w-3.5 h-3.5" />
                Listen to Music
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3 bg-white text-charcoal rounded-full text-[11px] font-medium tracking-wide border border-black/[0.08] hover:border-black/[0.15] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
                Watch Sermons
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
