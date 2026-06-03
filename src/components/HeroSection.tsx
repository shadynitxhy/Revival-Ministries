"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TopographicBackground from "./TopographicBackground";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cream"
    >
      <TopographicBackground />

      <motion.div
        className="relative z-20 flex items-center justify-center px-6 pt-24 pb-10 sm:pt-28"
        style={{ y: heroY, opacity: heroOpacity, willChange: "transform, opacity" }}
      >
        <div className="text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-6"
          >
            <span className="inline-block px-5 py-2 rounded-full border border-gold/20 text-gold text-[10px] font-medium tracking-[0.3em] uppercase">
              Welcome
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-light text-textprimary leading-[0.9] tracking-[-0.03em]"
          >
            Revival
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5.6rem] font-light italic text-gold leading-[0.9] tracking-[-0.03em] mt-1 sm:-mt-2 md:-mt-4 lg:-mt-6"
          >
            Ministries
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 text-base md:text-lg text-textsecondary font-light tracking-[0.04em] max-w-sm mx-auto leading-relaxed"
          >
            Spreading the Word Through Worship
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <a
              href="/music"
              className="px-7 py-3 bg-charcoal text-white rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-charcoal/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:scale-[0.98]"
            >
              Listen to Worship
            </a>
            <a
              href="/sermons"
              className="px-7 py-3 bg-white text-charcoal rounded-full text-[11px] font-medium tracking-wide border border-black/[0.08] hover:border-black/[0.15] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98]"
            >
              Watch Sermons
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
