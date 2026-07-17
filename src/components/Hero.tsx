import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Code, Play } from 'lucide-react';
import DashboardMockup from './DashboardMockup';
import HeroParticles from './HeroParticles';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#F7F8FA] dark:bg-slate-950 pt-28 pb-20 overflow-hidden flex items-center justify-center border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300"
    >
      {/* Immersive Interactive Constellation Canvas Particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <HeroParticles />
        {/* Subtle decorative grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 dark:opacity-40 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Textual Column */}
          <div className="min-w-0 lg:col-span-6 flex flex-col items-start text-left w-full max-w-xl">
            {/* Top Badge Accent */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-full flex items-center gap-2 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-dark dark:text-brand-primary font-semibold text-xs mb-6 uppercase tracking-wider font-mono select-none"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-primary animate-pulse shrink-0" />
              <span className="truncate">Digital Transformation Practice</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full font-display text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] break-words"
            >
              Transform Your Business Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark via-brand-primary to-brand-gold dark:from-brand-primary dark:to-brand-gold">
                Intelligent Digital Solutions
              </span>
            </motion.h1>

            {/* Sub heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full mt-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-sans break-words"
            >
              We help businesses streamline operations, improve productivity and accelerate growth through custom ERP, CRM, AI and Digital Transformation consulting.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-brand-primary hover:bg-brand-dark text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-brand-primary/20 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={scrollToServices}
                className="w-full sm:w-auto bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold text-sm px-7 py-3.5 rounded-full shadow-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Services
              </button>
            </motion.div>

            {/* Bullet Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-10 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 w-full flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-slate-500 dark:text-slate-400"
            >
              <span className="flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                Textile & Apparel Specialist
              </span>
              <span className="flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                Pharma Compliance Built-in
              </span>
              <span className="flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-dark shrink-0" />
                Packaging Deckle Optimization
              </span>
            </motion.div>
          </div>

          {/* Right Column: Interactive Systems Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, type: 'spring', damping: 20 }}
            className="min-w-0 lg:col-span-6 w-full flex justify-center"
          >
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Decorative backglow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-primary to-brand-gold rounded-2xl blur opacity-15" />
              
              {/* Real Interactive App Dashboard Mockup */}
              <div className="relative">
                <DashboardMockup />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
