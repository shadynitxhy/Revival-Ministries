"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cross } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Music", href: "/music" },
  { name: "Sermons", href: "/sermons" },
  { name: "Prayer", href: "/prayer" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-[90%] sm:w-auto px-5 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-black/[0.08] shadow-sm"
        >
        <div className="flex items-center justify-between w-full sm:w-auto gap-8">
          <Link href="/" className="flex items-center gap-2.5 shrink-0 py-1">
            <Cross className="w-4 h-4 text-gold" strokeWidth={1.5} />
            <span className="font-serif text-sm font-bold uppercase text-charcoal tracking-wide hidden sm:block">
              Revival Ministries
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-[13px] font-normal transition-colors duration-300 group ${
                    isActive
                      ? "text-charcoal"
                      : "text-warmgray/70 hover:text-charcoal"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-gold/50 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/offerings"
              className="hidden sm:inline-flex px-4 py-1.5 rounded-full border border-gold/30 text-gold text-[12px] font-medium tracking-wide hover:bg-gold/5 hover:border-gold/50 transition-all duration-300 cursor-pointer"
            >
              Give
            </Link>
            <button
              className="md:hidden text-charcoal/60 p-2.5 -mr-1 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-xl flex flex-col items-center justify-center gap-5 sm:gap-8 md:hidden"
          >
            <button
              className="absolute top-6 right-6 text-charcoal/60 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-serif text-3xl font-light transition-colors duration-300 block py-3 min-h-[44px] flex items-center ${
                      isActive
                        ? "text-gold"
                        : "text-charcoal/80 hover:text-gold"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              className="flex flex-col items-center gap-4 mt-4"
            >
              <Link
                href="/offerings"
                onClick={() => setMobileOpen(false)}
                className="px-8 py-3 rounded-full border border-gold/40 text-gold text-sm font-medium tracking-wide hover:bg-gold/5 hover:border-gold/60 transition-all duration-300 min-h-[44px] inline-flex items-center cursor-pointer"
              >
                Give
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
