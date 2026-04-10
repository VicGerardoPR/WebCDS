"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandStory } from "@/components/BrandStory";
import { CultivationExcellence } from "@/components/CultivationExcellence";
import { Gallery } from "@/components/Gallery";
import { QualityStandards } from "@/components/QualityStandards";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const AmbientGlow = () => {
  return (
    <>
      <div className="ambient-circle top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold/5 opacity-10"></div>
      <div className="ambient-circle bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold/10 opacity-15"></div>
      <div className="fixed inset-0 pointer-events-none bg-vignette opacity-40 z-[-15]"></div>
    </>
  );
};

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative selection:bg-gold selection:text-black">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gold origin-left z-[150]"
        style={{ scaleX }}
      />
      
      <AmbientGlow />
      <Navbar />
      
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <BrandStory />
      </motion.div>

      <div className="w-full h-24 bg-gradient-to-b from-background to-matte"></div>

      <CultivationExcellence />
      
      <Gallery />
      
      {/* Divider */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent"></div>
      </div>

      <Location />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Contact />
      </motion.div>

      <Footer />
    </main>
  );
}
