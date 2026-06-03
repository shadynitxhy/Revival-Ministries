"use client";

import { motion } from "framer-motion";
import { Play, Music, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { handleImgError, FALLBACK_IMG } from "@/utils/img";

const latestRelease = {
  title: "Heaven's Embrace",
  album: "Revival Worship Collection",
  date: "March 2026",
  description:
    "A powerful worship song capturing the overwhelming love of God and His embrace of our lives.",
  image: FALLBACK_IMG,
  alt: "Heaven's Embrace album artwork",
};

const latestSermon = {
  title: "Walking in Faith",
  date: "May 18, 2026",
  duration: "45 min",
  description:
    "A message of faith and trust in God's perfect plan for your life, reminding us that He is always with us.",
  thumbnail: FALLBACK_IMG,
  alt: "Walking in Faith sermon thumbnail",
};

export function MusicPreview() {
  return (
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
            Latest Release
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-textprimary mb-4 tracking-tight">
            Featured <span className="italic font-light text-gold">Worship</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="card-surface overflow-hidden max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-[45%] aspect-video md:aspect-auto md:min-h-[400px] overflow-hidden border-r border-black/[0.08]">
              <Image
                src={latestRelease.image}
                alt={latestRelease.alt}
                onError={handleImgError}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-6 sm:p-10 md:p-14 flex flex-col justify-center">
              <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-3 block">
                {latestRelease.album}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-textprimary mb-3 tracking-tight">
                {latestRelease.title}
              </h3>
              <p className="text-sm text-textsecondary/70 font-light mb-1">
                {latestRelease.date}
              </p>
              <p className="text-textsecondary font-light text-base leading-relaxed mb-8 max-w-md">
                {latestRelease.description}
              </p>
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-charcoal text-white rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-charcoal/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:scale-[0.98] cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Play Now
                </motion.button>
                <Link
                  href="/music"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal rounded-full text-[11px] font-medium tracking-wide border border-black/[0.08] hover:border-black/[0.15] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                >
                  <Music className="w-3.5 h-3.5" />
                  Explore All Music
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SermonPreview() {
  return (
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
            Weekly Message
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-textprimary mb-4 tracking-tight">
            Latest <span className="italic font-light text-gold">Sermon</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="card-surface overflow-hidden max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row-reverse">
            <div className="relative w-full md:w-[45%] aspect-video md:aspect-auto md:min-h-[400px] overflow-hidden border-l border-black/[0.08]">
              <Image
                src={latestSermon.thumbnail}
                alt={latestSermon.alt}
                onError={handleImgError}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-6 sm:p-10 md:p-14 flex flex-col justify-center">
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-textprimary mb-3 tracking-tight">
                {latestSermon.title}
              </h3>
              <div className="flex items-center gap-4 mb-4 text-sm text-textsecondary/70 font-light">
                <span>{latestSermon.date}</span>
                <span className="w-1 h-1 rounded-full bg-textsecondary/30" />
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {latestSermon.duration}
                </span>
              </div>
              <p className="text-textsecondary font-light text-base leading-relaxed mb-8 max-w-md">
                {latestSermon.description}
              </p>
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-charcoal text-white rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-charcoal/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:scale-[0.98] cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Watch Sermon
                </motion.button>
                <Link
                  href="/sermons"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal rounded-full text-[11px] font-medium tracking-wide border border-black/[0.08] hover:border-black/[0.15] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                >
                  View All Sermons
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 bg-cream border-t border-black/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full md:w-[40%] aspect-[3/4] card-image"
          >
            <Image
              src={FALLBACK_IMG}
              alt="Revival Ministries leadership portrait"
              onError={handleImgError}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              unoptimized
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 text-center"
          >
            <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-4 block">
              About
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-textprimary mb-6 tracking-tight">
              Revival <span className="italic font-light text-gold">Ministries</span>
            </h2>
            <p className="text-textsecondary font-light text-base leading-relaxed mb-8 max-w-lg mx-auto">
              Revival Ministries exists to share the Gospel through worship and
              biblical teaching. Through worship music, ministry events and
              biblical messages, we seek to lead people into a deeper
              relationship with Jesus Christ.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-charcoal/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:scale-[0.98] cursor-pointer"
            >
              Learn More
              <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
