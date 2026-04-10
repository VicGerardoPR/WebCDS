"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTENT } from "@/data/content";
import Image from "next/image";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Historia", href: "#historia" },
    { name: "Cultivo", href: "#cultivo" },
    { name: "Sede", href: "#sede" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 h-24 flex items-center px-6 md:px-12 ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-white/5 h-20" : "bg-transparent h-24"
      }`}
    >
      <div className="max-w-[1440px] mx-auto w-full flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative w-12 h-12 md:w-16 md:h-16 group"
        >
          <Image 
            src={CONTENT.brand.logo} 
            alt={CONTENT.brand.name} 
            fill 
            className="object-contain mix-blend-screen contrast-125 hover:scale-110 transition-all duration-700 drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
          />
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/50 hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a 
            href="#contacto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 border border-gold/40 text-[10px] uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all duration-500 rounded-sm"
          >
            Portal de Socios
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-px bg-current mb-2"></div>
          <div className="w-6 h-px bg-current"></div>
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-[110] flex flex-col items-center justify-center gap-8 p-6"
          >
            <button 
                className="absolute top-8 right-8 text-gold text-2xl"
                onClick={() => setMobileMenuOpen(false)}
            >
                ✕
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-serif tracking-widest text-gold hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
