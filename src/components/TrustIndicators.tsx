import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TRUST_COUNTERS } from '../data';

interface CounterProps {
  value: string;
  suffix: string;
}

function CountUp({ value, suffix }: CounterProps) {
  const [count, setCount] = useState(0);
  const target = parseInt(value, 10);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // ms
    const increment = target / (duration / 16); // 60 FPS approx

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-mono text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
      {count}
      <span className="text-brand-primary">{suffix}</span>
    </span>
  );
}

export default function TrustIndicators() {
  return (
    <section
      id="trust-indicators"
      className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden select-none transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Simple layout with 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
          {TRUST_COUNTERS.map((counter, idx) => (
            <motion.div
              key={counter.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-brand-light/40 dark:hover:bg-slate-800/40 transition-all duration-300 group"
            >
              {/* Animated Counter */}
              <div className="flex items-baseline justify-center">
                <CountUp value={counter.value} suffix={counter.suffix} />
              </div>

              {/* Counter Label */}
              <span className="text-sm font-display font-semibold text-slate-800 dark:text-slate-200 mt-2 tracking-tight group-hover:text-brand-dark dark:group-hover:text-brand-primary transition-colors">
                {counter.label}
              </span>

              {/* Brief Description */}
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-sans leading-relaxed max-w-[200px]">
                {counter.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
