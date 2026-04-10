"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";
import Image from "next/image";

export const CultivationExcellence = () => {
  return (
    <section id="cultivo" className="py-24 md:py-32 relative bg-matte/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
         <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow"
         >
            {CONTENT.cultivation.title}
         </motion.p>
         <h2 className="section-title text-gold/90 max-w-4xl mx-auto mb-20">{CONTENT.cultivation.sections[0].title} y más</h2>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
            {CONTENT.cultivation.sections.map((sect, i) => (
              <motion.div
                key={sect.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1 }}
                className="group relative flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm mb-8 border border-white/5 group-hover:border-gold/30 transition-all duration-700">
                  <Image 
                    src={sect.image} 
                    alt={sect.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms] brightness-75 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-all duration-700"></div>
                </div>
                <h3 className="font-serif text-2xl text-gold mb-4 group-hover:scale-110 transition-transform duration-500 origin-center">{sect.title}</h3>
                <p className="text-white/40 text-sm max-w-xs leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                  {sect.description}
                </p>
                <div className="mt-8 w-12 h-px bg-gold/30 group-hover:w-24 group-hover:bg-gold transition-all duration-700"></div>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};
