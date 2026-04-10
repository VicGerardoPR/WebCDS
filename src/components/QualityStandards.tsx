"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export const QualityStandards = () => {
  return (
    <section className="py-24 md:py-32 relative bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow">{CONTENT.quality.title}</p>
            <h2 className="section-title text-gold/90">Rigor, Trazabilidad e Integridad</h2>
            <p className="text-white/40 text-lg leading-relaxed font-light mb-12">
              Nuestra operación se rige por protocolos de grado farmacéutico, asegurando que cada producto que sale de Isabela cumpla con las expectativas de los socios más exigentes.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {CONTENT.quality.items.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="luxury-card border-l-2 border-l-gold/20 hover:border-l-gold transition-all duration-700"
              >
                <div className="flex justify-between items-center mb-2">
                   <h3 className="text-gold font-serif text-xl tracking-tight">{item.label}</h3>
                   <span className="text-[10px] text-white/20 font-sans uppercase tracking-[0.2em]">Tier 1 Certified</span>
                </div>
                <p className="text-white/40 text-sm italic">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
