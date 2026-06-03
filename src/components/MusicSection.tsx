"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Play,
  Pause,
  Music,
  Volume2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { handleImgError, FALLBACK_IMG } from "@/utils/img";

export const featuredReleases = [
  {
    id: 1,
    title: "Heaven's Embrace",
    date: "March 2026",
    views: "24K views",
    description:
      "A powerful worship song capturing the overwhelming love of God and His embrace of our lives.",
    image: FALLBACK_IMG,
    alt: "Heaven's Embrace album artwork",
  },
  {
    id: 2,
    title: "Light of Salvation",
    date: "February 2026",
    views: "18K views",
    description:
      "An uplifting anthem declaring the light of Christ that breaks through every darkness.",
    image: FALLBACK_IMG,
    alt: "Light of Salvation album artwork",
  },
  {
    id: 3,
    title: "Grace Overflowing",
    date: "January 2026",
    views: "32K views",
    description:
      "A soul-stirring worship experience celebrating the unending grace of our Savior.",
    image: FALLBACK_IMG,
    alt: "Grace Overflowing album artwork",
  },
  {
    id: 4,
    title: "Holy Fire",
    date: "December 2025",
    views: "15K views",
    description:
      "A passionate call to encounter the refining fire of God's presence in worship.",
    image: FALLBACK_IMG,
    alt: "Holy Fire album artwork",
  },
];

export const libraryCards = [
  {
    id: "videos",
    title: "Music Videos",
    count: "137 Videos",
    description: "Official worship music videos.",
    button: "Explore Videos",
    image: FALLBACK_IMG,
    alt: "Music Videos library",
  },
  {
    id: "audio",
    title: "Audio Songs",
    count: "25 Songs",
    description: "Listen to the worship audio collection.",
    button: "Explore Audio",
    image: FALLBACK_IMG,
    alt: "Audio Songs library",
  },
];

export const ministryStats = [
  { value: "275K+", label: "Subscribers" },
  { value: "248+", label: "Videos" },
  { value: "Millions", label: "of Views" },
  { value: "Years", label: "of Ministry" },
];

export function SectionHeader({
  label,
  title,
  description,
}: {
  label?: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-center mb-10"
    >
      {label && (
        <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-4 block">
          {label}
        </span>
      )}
      <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-textprimary mb-4 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-textsecondary max-w-md mx-auto font-light text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export const popularSongs = [
  { id: 1, title: "Heaven's Embrace", plays: "1.2M plays", image: FALLBACK_IMG, alt: "Heaven's Embrace song cover" },
  { id: 2, title: "Light of Salvation", plays: "980K plays", image: FALLBACK_IMG, alt: "Light of Salvation song cover" },
  { id: 3, title: "Grace Overflowing", plays: "856K plays", image: FALLBACK_IMG, alt: "Grace Overflowing song cover" },
  { id: 4, title: "Holy Fire", plays: "743K plays", image: FALLBACK_IMG, alt: "Holy Fire song cover" },
  { id: 5, title: "Spirit of Revival", plays: "621K plays", image: FALLBACK_IMG, alt: "Spirit of Revival song cover" },
  { id: 6, title: "Endless Worship", plays: "592K plays", image: FALLBACK_IMG, alt: "Endless Worship song cover" },
];

export function FeaturedRelease() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const release = featuredReleases[currentIndex];
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goPrev = () => {
    const prev = currentIndex === 0 ? featuredReleases.length - 1 : currentIndex - 1;
    setDirection(-1);
    setCurrentIndex(prev);
  };

  const goNext = () => {
    const next = currentIndex === featuredReleases.length - 1 ? 0 : currentIndex + 1;
    setDirection(1);
    setCurrentIndex(next);
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
        setCurrentIndex((prev) => (prev === 0 ? featuredReleases.length - 1 : prev - 1));
      } else {
        setDirection(1);
        setCurrentIndex((prev) => (prev === featuredReleases.length - 1 ? 0 : prev + 1));
      }
    }
  }, []);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="py-16 sm:py-20 bg-cream border-t border-black/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center mb-8 gap-6 text-center">
          <div className="min-w-0">
            <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-2 block">
              Featured Release
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-textprimary tracking-tight">
              Latest Release
            </h2>
          </div>
          <div className="flex items-center justify-center gap-2 shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goPrev}
              className="w-9 h-9 rounded-full border border-black/[0.08] flex items-center justify-center text-textsecondary/60 hover:bg-charcoal hover:text-white transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goNext}
              className="w-9 h-9 rounded-full border border-black/[0.08] flex items-center justify-center text-textsecondary/60 hover:bg-charcoal hover:text-white transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        <div
          className="card-surface overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-[50%] aspect-[4/3] md:aspect-auto md:min-h-[420px] overflow-hidden border-r border-black/[0.08]">
              <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={release.id}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={release.image}
                      alt={release.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
            </div>
            <div className="flex-1 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              <div className="min-h-[200px] flex flex-col justify-center">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={release.id}
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
                    <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-textprimary mb-3 tracking-tight">
                      {release.title}
                    </h3>
                    <div className="flex items-center gap-4 mb-4 text-sm text-textsecondary/70 font-light">
                      <span>{release.date}</span>
                      <span className="w-1 h-1 rounded-full bg-textsecondary/30" />
                      <span>{release.views}</span>
                    </div>
                    <p className="text-textsecondary font-light text-base leading-relaxed mb-8 max-w-md">
                      {release.description}
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
                  Watch Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal rounded-full text-[11px] font-medium tracking-wide border border-black/[0.08] hover:border-black/[0.15] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                >
                  <Music className="w-3.5 h-3.5" />
                  Listen Now
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {featuredReleases.map((_, i) => (
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
      </div>
    </section>
  );
}

export function MusicLibrary() {
  return (
    <section className="py-16 sm:py-20 bg-cream relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Music Library"
          description="Explore the complete Revival Songs collection."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {libraryCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: card.id === "videos" ? 0 : 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white border border-black/[0.08] rounded-2xl shadow-sm hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-shadow duration-500 overflow-hidden h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      onError={handleImgError}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
                  </div>
                  <div className="flex-1 p-8 flex flex-col justify-center">
                    <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-2 block">
                      {card.count}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-textprimary mb-2 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-textsecondary font-light text-sm mb-6 max-w-sm">
                      {card.description}
                    </p>
                    <div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-white rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-charcoal/90 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-white" />
                        {card.button}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RevivalCollection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const albums = [
    { id: 11, title: "Volume 11", songs: "12 Songs", image: FALLBACK_IMG, alt: "Volume 11 album cover" },
    { id: 10, title: "Volume 10", songs: "10 Songs", image: FALLBACK_IMG, alt: "Volume 10 album cover" },
    { id: 9, title: "Volume 9", songs: "14 Songs", image: FALLBACK_IMG, alt: "Volume 9 album cover" },
    { id: 8, title: "Volume 8", songs: "11 Songs", image: FALLBACK_IMG, alt: "Volume 8 album cover" },
    { id: 7, title: "Volume 7", songs: "13 Songs", image: FALLBACK_IMG, alt: "Volume 7 album cover" },
    { id: 6, title: "Volume 6", songs: "12 Songs", image: FALLBACK_IMG, alt: "Volume 6 album cover" },
  ];

  const featuredAlbum = albums[0];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 relative overflow-hidden bg-cream border-t border-black/[0.08]"
    >
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 -top-40 -bottom-40 opacity-[0.08] pointer-events-none"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M0,200 C200,150 400,300 600,200 S1000,100 1440,200" stroke="#2C2C2C" strokeWidth="1" opacity="0.4" />
          <path d="M0,280 C250,220 450,380 650,280 S1050,160 1440,280" stroke="#2C2C2C" strokeWidth="1" opacity="0.35" />
          <path d="M0,360 C300,290 500,460 700,360 S1100,220 1440,360" stroke="#2C2C2C" strokeWidth="1" opacity="0.3" />
          <path d="M0,440 C350,360 550,540 750,440 S1150,280 1440,440" stroke="#2C2C2C" strokeWidth="1" opacity="0.25" />
          <path d="M0,520 C400,430 600,620 800,520 S1200,340 1440,520" stroke="#2C2C2C" strokeWidth="1" opacity="0.2" />
          <path d="M0,600 C450,500 650,700 850,600 S1250,400 1440,600" stroke="#2C2C2C" strokeWidth="1" opacity="0.15" />
          <path d="M0,680 C500,570 700,780 900,680 S1300,460 1440,680" stroke="#2C2C2C" strokeWidth="1" opacity="0.12" />
          <path d="M0,760 C550,640 750,860 950,760 S1350,520 1440,760" stroke="#2C2C2C" strokeWidth="1" opacity="0.1" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-10"
        >
          <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-4 block">
            THE COLLECTION
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-textprimary mb-4 tracking-tight">
            Revival Worship Collection
          </h2>
          <p className="text-textsecondary max-w-md mx-auto font-light text-base">
            Explore the complete Revival Songs album journey through worship and faith.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20"
        >
          <div className="w-full md:w-1/2 lg:w-[45%]">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative aspect-square overflow-hidden card-image"
            >
              <Image
                src={featuredAlbum.image}
                alt={featuredAlbum.alt}
                onError={handleImgError}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="flex-1 flex flex-col justify-center text-center">
          <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-3 block">
            {featuredAlbum.title}
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-textprimary mb-3 tracking-tight">
            Latest Revival Worship Collection
          </h3>
          <p className="text-textsecondary font-light text-base leading-relaxed mb-6 max-w-md mx-auto">
            A collection of worship songs focused on faith, revival, hope and spiritual renewal.
          </p>
          <span className="text-sm text-textsecondary/70 font-light mb-8">
            {featuredAlbum.songs}
          </span>
          <div className="flex items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-charcoal text-white rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-charcoal/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:scale-[0.98] cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              Listen Album
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal rounded-full text-[11px] font-medium tracking-wide border border-black/[0.08] hover:border-black/[0.15] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              <Music className="w-3.5 h-3.5" />
              View Songs
            </motion.button>
          </div>
          </div>
        </motion.div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-2xl sm:text-3xl font-light text-textprimary mb-8 tracking-tight"
          >
            Browse Albums
          </motion.h3>
          <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 hide-scrollbar">
            {albums.slice(1).map((album) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.03 }}
                className="flex-shrink-0 w-[200px] sm:w-[220px] group cursor-pointer"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-soft group-hover:shadow-elevated transition-shadow duration-500 mb-3">
                  <Image
                    src={album.image}
                    alt={album.alt}
                    onError={handleImgError}
                    fill
                    sizes="220px"
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-serif text-lg font-light text-textprimary tracking-tight">
                  {album.title}
                </h4>
                <p className="text-xs text-textsecondary/70 font-light mt-0.5">
                  {album.songs}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MinistryImpact() {
  return (
    <section className="py-16 sm:py-20 bg-cream relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Ministry Impact"
          description="Together we are spreading worship across the world"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {ministryStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
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
  );
}

export function PopularSongs() {
  return (
    <section className="py-16 sm:py-20 bg-cream border-t border-black/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Popular Worship Songs"
          description="Most loved worship songs from the Revival collection"
        />
        <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 hide-scrollbar">
          {popularSongs.map((song) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.03 }}
              className="flex-shrink-0 w-[220px] sm:w-[240px] group cursor-pointer"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-soft group-hover:shadow-elevated transition-shadow duration-500 mb-3">
                <Image
                  src={song.image}
                  alt={song.alt}
                  onError={handleImgError}
                  fill
                  sizes="240px"
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h4 className="font-serif text-lg font-light text-textprimary tracking-tight">
                {song.title}
              </h4>
              <p className="text-xs text-textsecondary/70 font-light mt-0.5">
                {song.plays}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StickyPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3.5 bg-white/90 backdrop-blur-xl rounded-2xl pl-2.5 pr-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-black/[0.04]"
      >
        <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={FALLBACK_IMG}
            alt="Revival Fire album artwork"
            width={40}
            height={40}
            unoptimized
            className="object-cover"
          />
          {isPlaying && (
            <div className="absolute inset-0 bg-charcoal/10 flex items-center justify-center">
              <Volume2 className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium text-textprimary truncate max-w-[100px]">
            Revival Fire
          </p>
          <p className="text-[10px] text-textsecondary/70 font-light">
            Pr Lucasekar
          </p>
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-8 h-8 rounded-full bg-charcoal flex items-center justify-center hover:bg-charcoal/80 transition-colors flex-shrink-0 cursor-pointer"
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 text-white fill-white" />
          ) : (
            <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
          )}
        </button>
      </motion.div>

      <motion.div
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-black/[0.04] px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      >
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={FALLBACK_IMG}
              alt="Revival Fire album artwork"
              width={40}
              height={40}
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-textprimary truncate max-w-[140px]">
                  Revival Fire
                </p>
                <p className="text-[10px] text-textsecondary/60 font-light">
                  Pr Lucasekar
                </p>
              </div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-full bg-charcoal flex items-center justify-center flex-shrink-0 cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-3.5 h-3.5 text-white fill-white" />
                ) : (
                  <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                )}
              </button>
            </div>
            <div className="mt-1.5 h-0.5 bg-black/[0.04] rounded-full overflow-hidden">
              <div
                className={`h-full bg-softgold/60 rounded-full transition-all duration-1000 ${isPlaying ? "w-2/3" : "w-0"}`}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default function MusicSection() {
  return (
    <>
      <section id="music" className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-cream relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-6 block">
              Worship Collection
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-textprimary mb-6 tracking-tight">
              Revival Songs
            </h1>
            <p className="text-textsecondary font-light text-lg max-w-lg mx-auto mb-10">
              Worship that leads hearts closer to Christ
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-charcoal text-white rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-charcoal/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:scale-[0.98] cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                Listen on YouTube
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-charcoal rounded-full text-[11px] font-medium tracking-wide border border-black/[0.08] hover:border-black/[0.15] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                <Music className="w-3.5 h-3.5" />
                Explore Collection
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <FeaturedRelease />
      <RevivalCollection />
      <PopularSongs />
      <MinistryImpact />
      <StickyPlayer />
    </>
  );
}
