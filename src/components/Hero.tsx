"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-[-10]">
        <Image 
          src={CONTENT.hero.videoPlaceholder} 
          alt="Cinematic Cultivation" 
          fill 
          className="object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background"></div>
        <div className="absolute inset-0 bg-background/20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Centered Logo Entry */}
          <motion.div
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, -10, 0] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut",
              opacity: { duration: 1.5 },
              scale: { duration: 1.5 }
            }}
            className="mb-12 relative w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]"
          >
            <Image 
              src={CONTENT.brand.logo} 
              alt={CONTENT.brand.name} 
              fill 
              className="object-contain mix-blend-screen contrast-125 scale-125"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="eyebrow"
          >
            {CONTENT.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] tracking-tight py-2 gold-gradient"
          >
            {CONTENT.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mb-12 font-sans font-light"
          >
            {CONTENT.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="flex flex-col md:flex-row gap-6"
          >
            <a href="#contacto" className="btn-premium flex items-center justify-center min-w-[240px]">
              {CONTENT.hero.ctaPrimary}
            </a>
            <a href="#cultivo" className="px-8 py-4 text-xs uppercase tracking-widest text-white/50 border border-white/10 hover:text-gold hover:border-gold/50 transition-all duration-500 min-w-[240px]">
              {CONTENT.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Hero Accent: Particle/Atmospheric floaters */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold opacity-50 animate-bounce">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gold/50 to-gold"></div>
      </div>
    </section>
  );
};
