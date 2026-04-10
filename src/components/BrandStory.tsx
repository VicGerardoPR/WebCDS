"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";
import Image from "next/image";

export const BrandStory = () => {
  return (
    <section id="historia" className="py-24 md:py-32 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Visual Side */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1.2 }}
           className="relative aspect-square md:aspect-video lg:aspect-[4/5] overflow-hidden group"
        >
           <Image 
            src="/images/botanical_portrait.png" 
            alt="Interior premium cultivation" 
            fill 
            className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
           />
           <div className="absolute inset-0 border-[20px] border-background/20 group-hover:border-transparent transition-all duration-700"></div>
           <div className="absolute top-4 right-4 text-gold/30 text-8xl font-serif select-none pointer-events-none group-hover:text-gold/10 transition-colors duration-1000 italic opacity-20">EST. 2024</div>
        </motion.div>

        {/* Text Side */}
        <div className="flex flex-col gap-8">
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
           >
              <p className="eyebrow">{CONTENT.about.title}</p>
              <h2 className="section-title text-gold/90">{CONTENT.about.headline}</h2>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                {CONTENT.about.description}
              </p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              {CONTENT.about.highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.2 }}
                  className="p-6 border-l border-gold/30 hover:border-gold transition-colors duration-500 bg-matte/30"
                >
                  <h3 className="font-serif text-2xl text-gold mb-3">{item.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed italic">{item.text}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
