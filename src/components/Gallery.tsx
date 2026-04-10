"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const IMAGES = [
  "/images/hero_cultivation.png",
  "/images/controlled_environment.png",
  "/images/botanical_genetics.png",
  "/images/precision_harvest.png",
  "/images/cultivation_wide.png",
  "/images/botanical_flower_2.png"
];

export const Gallery = () => {
  return (
    <section className="py-24 md:py-32 bg-matte/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
         >
           <p className="eyebrow">Visualización Operativa</p>
           <h2 className="section-title text-gold/90">Galería de Cultivo</h2>
           <p className="text-white/40 text-lg max-w-2xl mx-auto font-light">Una mirada interna a nuestra disciplina botánica y tecnológica.</p>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {IMAGES.map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden group cursor-pointer border border-white/5"
              >
                <Image 
                  src={img} 
                  alt={`Galería Cultivo ${i + 1}`} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 brightness-50 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] border border-gold/10 group-hover:border-gold/50"></div>
                <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-all duration-[1000ms] translate-y-4 group-hover:translate-y-0">
                   Ver Detalle
                </div>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};
