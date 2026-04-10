"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="py-20 md:py-32 relative overflow-hidden bg-black border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center">
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="relative w-24 h-24 mb-12 grayscale brightness-50 contrast-125 opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
         >
           <Image 
            src={CONTENT.brand.logo} 
            alt={CONTENT.brand.name} 
            fill 
            className="object-contain mix-blend-screen contrast-125"
           />
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full text-center md:text-left mb-24">
            <div className="flex flex-col gap-6">
               <h4 className="font-serif text-xl text-gold/80">{CONTENT.brand.name}</h4>
               <p className="text-white/30 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                  Operando con integridad regulatoria y excelencia botánica desde Isabela, Puerto Rico.
               </p>
            </div>
            
            <div className="flex flex-col gap-6 items-center">
               <h4 className="font-serif text-xl text-gold/80">Ubicación</h4>
               <div className="flex flex-col gap-2 text-sm text-white/30 italic">
                  <span>Isabela, PR</span>
                  <span>Carretera PR-2</span>
                  <span>info@cultivosdesalud.com</span>
               </div>
            </div>

            <div className="flex flex-col gap-6 md:items-end">
               <h4 className="font-serif text-xl text-gold/80">Institucional</h4>
               <ul className="flex flex-col gap-3 text-xs uppercase tracking-widest text-white/30">
                  {CONTENT.footer.links.map(link => (
                    <li key={link} className="hover:text-gold cursor-pointer transition-colors duration-300">{link}</li>
                  ))}
               </ul>
            </div>
         </div>

         <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent mb-12"></div>

         <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium">
               {CONTENT.footer.legal}
            </span>
            
            <div className="flex gap-10">
               {/* Social placeholders */}
               {["LinkedIn", "Instagram", "E-Mail"].map(social => (
                 <span key={social} className="text-[10px] uppercase tracking-widest text-white/10 hover:text-gold transition-colors cursor-pointer">{social}</span>
               ))}
            </div>
         </div>
      </div>
    </footer>
  );
};
