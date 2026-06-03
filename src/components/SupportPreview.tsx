"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function SupportPreview() {
  return (
    <section className="py-16 sm:py-20 bg-cream border-t border-black/[0.08] relative">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-10 bg-gold/6 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Heart className="w-4 h-4 text-gold" strokeWidth={1.5} />
          </motion.div>
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-textprimary mb-3 tracking-tight">
            Support Revival Ministries
          </h3>
          <p className="text-textsecondary font-light text-sm leading-relaxed max-w-md mx-auto mb-6">
            Your generosity helps us continue sharing worship, messages and ministry resources.
          </p>
          <Link
            href="/offerings"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-charcoal text-white rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-charcoal/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:scale-[0.98] cursor-pointer"
          >
            Give With Purpose
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
