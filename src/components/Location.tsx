"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";
import Image from "next/image";

export const Location = () => {
  return (
    <section id="sede" className="py-24 md:py-32 relative overflow-hidden bg-matte">
      <div className="absolute inset-0 z-[-1]">
         <Image 
          src="/images/isabela_landscape.png" 
          alt="Coastal Isabela environment textures" 
          fill 
          className="object-cover opacity-10 grayscale hover:opacity-20 transition-all duration-[2000ms]"
         />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Contact/Info Side */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
           <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
           >
              <p className="eyebrow">{CONTENT.locations.title}</p>
              <h2 className="section-title text-gold/90 mb-8">{CONTENT.locations.headline}</h2>
              <p className="text-white/60 text-lg leading-relaxed font-light mb-10 max-w-xl">
                {CONTENT.locations.description}
              </p>
              
              <ul className="space-y-6">
                {CONTENT.locations.features.map((feature, i) => (
                  <motion.li 
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-4 text-gold/80"
                  >
                    <div className="w-1.5 h-1.5 bg-gold rounded-full ring-4 ring-gold/10"></div>
                    <span className="text-sm font-sans uppercase tracking-widest">{feature}</span>
                  </motion.li>
                ))}
              </ul>
           </motion.div>
        </div>

        {/* Visual Map Side */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
           whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5 }}
           className="relative aspect-video lg:aspect-square bg-background border border-gold/20 overflow-hidden group order-1 lg:order-2"
        >
           <Image 
            src={CONTENT.locations.image || "/images/isabela_landscape.png"} 
            alt="Isabela Location" 
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 grayscale-[0.5] group-hover:grayscale-0"
           />
           
           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>

           <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
             <div className="flex flex-col">
               <span className="text-4xl font-serif text-gold italic drop-shadow-lg">Isabela</span>
               <span className="text-[10px] tracking-[0.4em] uppercase text-white/70">Puerto Rico</span>
             </div>
             
             {CONTENT.locations.imageCredit && (
               <span className="text-[9px] uppercase tracking-widest text-white/30 font-sans italic">
                 {CONTENT.locations.imageCredit}
               </span>
             )}
           </div>
           
           <div className="absolute inset-0 pointer-events-none border-[1px] border-gold/10 m-4 group-hover:border-gold/30 transition-all duration-700"></div>
        </motion.div>
      </div>
    </section>
  );
};
