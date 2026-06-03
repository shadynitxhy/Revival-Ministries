"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Clock, Calendar } from "lucide-react";
import Image from "next/image";
import { handleImgError, FALLBACK_IMG } from "@/utils/img";

const sermons = [
  {
    id: 1,
    title: "Walking in Faith",
    pastor: "Pr Lucasekar",
    duration: "45 min",
    date: "May 18, 2026",
    thumbnail: FALLBACK_IMG,
  },
  {
    id: 2,
    title: "The Power of Grace",
    pastor: "Pr Lucasekar",
    duration: "38 min",
    date: "May 11, 2026",
    thumbnail: FALLBACK_IMG,
  },
  {
    id: 3,
    title: "Renewed in Spirit",
    pastor: "Pr Lucasekar",
    duration: "52 min",
    date: "May 4, 2026",
    thumbnail: FALLBACK_IMG,
  },
  {
    id: 4,
    title: "Love Without Limits",
    pastor: "Pr Lucasekar",
    duration: "41 min",
    date: "Apr 27, 2026",
    thumbnail: FALLBACK_IMG,
  },
  {
    id: 5,
    title: "Strength in Weakness",
    pastor: "Pr Lucasekar",
    duration: "48 min",
    date: "Apr 20, 2026",
    thumbnail: FALLBACK_IMG,
  },
];

export default function SermonsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
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
        if (scrollRef.current) scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
      } else {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section id="sermons" className="py-16 sm:py-20 bg-cream border-t border-black/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6"
        >
          <div>
            <span className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mb-4 block">
              Weekly Messages
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-textprimary tracking-tight">
              Featured <span className="italic font-light text-gold">Sermons</span>
            </h2>
          </div>

          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full border border-black/[0.06] flex items-center justify-center text-textsecondary/60 hover:bg-charcoal hover:text-white transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full border border-black/[0.06] flex items-center justify-center text-textsecondary/60 hover:bg-charcoal hover:text-white transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {sermons.map((sermon, index) => (
            <motion.div
              key={sermon.id}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start group"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white rounded-2xl overflow-hidden border border-black/[0.08] shadow-sm hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-shadow duration-500"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={sermon.thumbnail}
                    alt={sermon.title + " thumbnail"}
                    onError={handleImgError}
                    fill
                    sizes="340px"
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 cursor-pointer"
                    >
                      <Play className="w-5 h-5 text-charcoal ml-0.5" fill="currentColor" />
                    </motion.div>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-charcoal/50 backdrop-blur-sm rounded text-[10px] text-white/90 font-medium">
                    {sermon.duration}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-serif text-lg text-textprimary mb-1 group-hover:text-gold transition-colors">
                    {sermon.title}
                  </h3>
                  <p className="text-sm text-textsecondary/70 mb-3 font-light">{sermon.pastor}</p>
                  <div className="flex items-center gap-3 text-[11px] text-textsecondary/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {sermon.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
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
  );
}
