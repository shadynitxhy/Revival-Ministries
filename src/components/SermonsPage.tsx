"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Eye, Clock, ExternalLink, Music, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { handleImgError, FALLBACK_IMG } from "@/utils/img";

const latestSermons = [
  {
    id: 1,
    title: "The Power of Revival",
    date: "May 18, 2026",
    views: "24K views",
    duration: "45 min",
    image: FALLBACK_IMG,
    alt: "The Power of Revival sermon thumbnail",
  },
  {
    id: 2,
    title: "Faith That Moves Mountains",
    date: "May 11, 2026",
    views: "18K views",
    duration: "38 min",
    image: FALLBACK_IMG,
    alt: "Faith That Moves Mountains sermon thumbnail",
  },
  {
    id: 3,
    title: "Walking in God's Grace",
    date: "May 4, 2026",
    views: "31K views",
    duration: "52 min",
    image: FALLBACK_IMG,
    alt: "Walking in God's Grace sermon thumbnail",
  },
  {
    id: 4,
    title: "Hope in Times of Trial",
    date: "Apr 27, 2026",
    views: "15K views",
    duration: "41 min",
    image: FALLBACK_IMG,
    alt: "Hope in Times of Trial sermon thumbnail",
  },
];

const popularSermons = [
  {
    id: 1,
    title: "The Power of Revival",
    views: "45K views",
    duration: "38 min",
    image: FALLBACK_IMG,
    alt: "The Power of Revival sermon thumbnail",
  },
  {
    id: 2,
    title: "Faith That Moves Mountains",
    views: "42K views",
    duration: "45 min",
    image: FALLBACK_IMG,
    alt: "Faith That Moves Mountains sermon thumbnail",
  },
  {
    id: 3,
    title: "Walking in God's Grace",
    views: "38K views",
    duration: "52 min",
    image: FALLBACK_IMG,
    alt: "Walking in God's Grace sermon thumbnail",
  },
];

const sermonPlaylist = {
  title: "Pastor Lucas Sekar Sermons Playlist",
  count: "84+ Sermons",
  label: "Biblical Teaching Collection",
  description:
    "Explore a growing library of biblical teaching, revival messages, faith-building sermons, and Christ-centered ministry content.",
  image: FALLBACK_IMG,
  alt: "Sermon playlist collection thumbnail",
};

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function SermonsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const sermon = latestSermons[currentIndex];
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? latestSermons.length - 1 : prev - 1));
  };

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === latestSermons.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? latestSermons.length - 1 : prev - 1));
      } else {
        setDirection(1);
        setCurrentIndex((prev) => (prev === latestSermons.length - 1 ? 0 : prev + 1));
      }
    }
  }, []);

  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-cream relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-6 block">
              Word of God
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-textprimary mb-6 tracking-tight">
              Messages That Transform Lives
            </h1>
            <p className="text-textsecondary font-light text-lg max-w-2xl mx-auto mb-10">
              Biblical teaching, spiritual wisdom, and life-changing messages from Pastor Lucas
              Sekar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-charcoal text-white rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-charcoal/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:scale-[0.98] cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                Watch Latest Sermons
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-charcoal rounded-full text-[11px] font-medium tracking-wide border border-black/[0.08] hover:border-black/[0.15] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                <Music className="w-3.5 h-3.5" />
                View Sermon Collection
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16 bg-cream relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="card-surface overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-[55%] aspect-[4/3] md:aspect-auto md:min-h-[420px] overflow-hidden border-r border-black/[0.08]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={sermon.id}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={sermon.image}
                      alt={sermon.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 55vw"
                      unoptimized
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex-1 p-6 sm:p-10 md:p-14 flex flex-col justify-center">
                <div className="min-h-[200px] flex flex-col justify-center">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={sermon.id}
                      custom={direction}
                      variants={{
                        enter: (dir: number) => ({ y: dir > 0 ? 20 : -20, opacity: 0 }),
                        center: { y: 0, opacity: 1 },
                        exit: (dir: number) => ({ y: dir > 0 ? -20 : 20, opacity: 0 }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-3 block">
                        Latest Message
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-textprimary mb-3 tracking-tight">
                        {sermon.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-4 text-sm text-textsecondary/70 font-light">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {sermon.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-textsecondary/30" />
                        <span className="flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5" />
                          {sermon.views}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-textsecondary/30" />
                        <span>{sermon.duration}</span>
                      </div>
                      <p className="text-textsecondary font-light text-base leading-relaxed mb-8 max-w-md">
                        A powerful message of faith and spiritual growth from Pastor Lucas Sekar.
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-charcoal text-white rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-charcoal/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:scale-[0.98] cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    Watch Message
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              {latestSermons.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-gold w-6"
                      : "bg-black/[0.08] hover:bg-black/[0.15]"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={goPrev}
                className="w-9 h-9 rounded-full border border-black/[0.08] flex items-center justify-center text-charcoal/50 hover:bg-charcoal hover:text-white transition-all duration-300 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={goNext}
                className="w-9 h-9 rounded-full border border-black/[0.08] flex items-center justify-center text-charcoal/50 hover:bg-charcoal hover:text-white transition-all duration-300 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
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
            className="card-surface overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-[45%] aspect-video md:aspect-auto md:min-h-[340px] overflow-hidden border-r border-black/[0.08]">
                <Image
                  src={sermonPlaylist.image}
                  alt={sermonPlaylist.alt}
                  onError={handleImgError}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-6 sm:p-10 md:p-14 flex flex-col justify-center">
                <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-3 block">
                  {sermonPlaylist.count}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-textprimary mb-3 tracking-tight">
                  {sermonPlaylist.title}
                </h3>
                <p className="text-textsecondary/70 font-light text-sm leading-relaxed mb-2">
                  {sermonPlaylist.label}
                </p>
                <p className="text-textsecondary font-light text-base leading-relaxed mb-7 max-w-lg">
                  {sermonPlaylist.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-charcoal text-white rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-charcoal/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:scale-[0.98] cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    Watch Playlist
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal rounded-full text-[11px] font-medium tracking-wide border border-black/[0.08] hover:border-black/[0.15] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open on YouTube
                  </motion.button>
                </div>
              </div>
            </div>
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
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-textprimary mb-4 tracking-tight">
              Most Watched Messages
            </h2>
            <p className="text-textsecondary max-w-md mx-auto font-light text-base">
              Messages that have impacted thousands of lives
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {popularSermons.map((sermon) => (
              <motion.div
                key={sermon.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sermon.id * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="bg-white rounded-2xl overflow-hidden border border-black/[0.08] shadow-sm hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-shadow duration-500"
                >
                  <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={sermon.image}
                        alt={sermon.alt}
                        onError={handleImgError}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                        <Play className="w-6 h-6 text-charcoal ml-0.5 fill-charcoal" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-charcoal/70 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
                      {sermon.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg text-textprimary mb-3 group-hover:text-gold transition-colors">
                      {sermon.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-textsecondary/70 font-light">
                      <span className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        {sermon.views}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {sermon.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
