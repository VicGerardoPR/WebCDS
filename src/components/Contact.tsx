"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export const Contact = () => {
  return (
    <section id="contacto" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
         >
           <p className="eyebrow">{CONTENT.contact.title}</p>
           <h2 className="section-title text-gold/90">{CONTENT.contact.headline}</h2>
           <p className="text-white/40 text-lg max-w-2xl mx-auto font-light">{CONTENT.contact.description}</p>
         </motion.div>

         <motion.form
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 1 }}
           className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-matte border border-white/5 p-8 md:p-16 rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]"
           onSubmit={(e) => e.preventDefault()}
         >
           <div className="flex flex-col gap-2">
             <label className="text-[10px] uppercase tracking-widest text-gold opacity-50 mb-2">{CONTENT.contact.fields.name}</label>
             <input type="text" className="bg-transparent border-b border-white/10 py-3 text-sm focus:border-gold outline-none transition-colors" placeholder="Su nombre completo" />
           </div>
           <div className="flex flex-col gap-2">
             <label className="text-[10px] uppercase tracking-widest text-gold opacity-50 mb-2">{CONTENT.contact.fields.company}</label>
             <input type="text" className="bg-transparent border-b border-white/10 py-3 text-sm focus:border-gold outline-none transition-colors" placeholder="Nombre de su organización" />
           </div>
           <div className="flex flex-col gap-2">
             <label className="text-[10px] uppercase tracking-widest text-gold opacity-50 mb-2">{CONTENT.contact.fields.email}</label>
             <input type="email" className="bg-transparent border-b border-white/10 py-3 text-sm focus:border-gold outline-none transition-colors" placeholder="nombre@compania.com" />
           </div>
           <div className="flex flex-col gap-2">
             <label className="text-[10px] uppercase tracking-widest text-gold opacity-50 mb-2">{CONTENT.contact.fields.phone}</label>
             <input type="tel" className="bg-transparent border-b border-white/10 py-3 text-sm focus:border-gold outline-none transition-colors" placeholder="+1 (787) 000-0000" />
           </div>
           <div className="flex flex-col gap-2 md:col-span-2">
             <label className="text-[10px] uppercase tracking-widest text-gold opacity-50 mb-2">{CONTENT.contact.fields.message}</label>
             <textarea rows={4} className="bg-transparent border-b border-white/10 py-3 text-sm focus:border-gold outline-none transition-colors resize-none" placeholder="¿Cómo podemos colaborar?"></textarea>
           </div>
           
           <div className="md:col-span-2 mt-8 flex justify-center">
             <button type="submit" className="btn-premium group flex items-center gap-4 min-w-full md:min-w-[400px] justify-center">
               <span>{CONTENT.contact.cta}</span>
               <svg 
                 className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" 
                 fill="none" viewBox="0 0 24 24" stroke="currentColor"
               >
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
               </svg>
             </button>
           </div>
         </motion.form>
      </div>
    </section>
  );
};
