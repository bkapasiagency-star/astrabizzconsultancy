import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, HelpCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#F7F8FA] relative overflow-hidden border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-[0.18em]">
            Case Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Success Stories from Key Partners
          </h2>
          <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
          <p className="text-slate-600 font-sans text-sm max-w-xl mx-auto leading-relaxed">
            Discover how industrial managers, compliance heads, and textile executives streamlined operational cycles and unlocked growth.
          </p>
        </div>

        {/* Testimonials Grid (4 Cards) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex flex-col justify-between text-left hover:shadow-md hover:border-brand-primary/20 transition-all duration-300 relative group"
            >
              {/* Star ratings row */}
              <div className="flex gap-1 mb-5">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Quotes icon backdrop */}
              <Quote className="absolute right-6 top-6 w-12 h-12 text-slate-100 group-hover:text-emerald-50 transition-colors pointer-events-none -z-0" />

              <p className="text-slate-600 font-sans text-sm leading-relaxed mb-6 italic relative z-10">
                "{test.feedback}"
              </p>

              {/* Author Info row */}
              <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-slate-100 mt-auto">
                <img
                  src={test.image}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <span className="block text-sm font-semibold text-slate-800">
                    {test.name}
                  </span>
                  <span className="block text-[11px] text-slate-500 font-mono mt-0.5 uppercase tracking-wider">
                    {test.role}, <strong className="text-brand-dark">{test.company}</strong>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
