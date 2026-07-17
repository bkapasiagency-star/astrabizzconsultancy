import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Calendar, Award, GraduationCap, CheckCircle2, Linkedin, Briefcase } from 'lucide-react';
import denishPhoto from '../assets/denish-dalal.jpg';

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-white relative overflow-hidden border-b border-slate-200/50 text-slate-800">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-[0.18em]">
            Executive Leadership
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Meet Our Founder & Chief Consultant
          </h2>
          <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
          <p className="text-slate-600 font-sans text-sm max-w-xl mx-auto leading-relaxed">
            Leading Astrabizz from the front with a hands-on consulting paradigm, deep industrial operational knowledge, and robust technical architectures.
          </p>
        </div>

        {/* Founder Premium Card Bento Layout */}
        <div className="max-w-4xl mx-auto bg-brand-light rounded-2xl border border-slate-200/60 overflow-hidden shadow-md flex flex-col md:flex-row">
          
          {/* Left Column: Portrait and brief contact badges */}
          <div className="md:w-[350px] bg-slate-900 text-slate-100 p-8 flex flex-col justify-between items-center text-center shrink-0">
            <div className="space-y-4">
              {/* Profile Image with high-end border frame */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-tr from-brand-primary to-brand-gold rounded-full blur-sm opacity-60" />
                <img
                  src={denishPhoto}
                  alt="Denish Dalal"
                  className="relative w-36 h-36 rounded-full object-cover border-4 border-slate-900 mx-auto"
                />
              </div>

              {/* Title & Role */}
              <div className="pt-2 text-center">
                <span className="block font-display text-xl font-bold text-white tracking-tight">
                  Denish Dalal
                </span>
                <span className="text-xs font-mono text-brand-primary font-bold uppercase tracking-widest mt-1 block">
                  Founder & Principal Consultant
                </span>
              </div>
            </div>

            {/* Quick Badges & Details */}
            <div className="w-full space-y-3 mt-8 pt-6 border-t border-slate-800 text-left">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="p-1.5 bg-slate-800 rounded-lg text-brand-primary">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-[11px] text-slate-400">Experience</span>
                  <span className="font-bold text-white">12+ Years Enterprise Practice</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="p-1.5 bg-slate-800 rounded-lg text-brand-gold">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-[11px] text-slate-400">Education</span>
                  <span className="font-bold text-white">B.Tech Computer Engineering</span>
                </div>
              </div>
            </div>

            {/* LinkedIn Mock Icon button */}
            <div className="mt-8 pt-4 w-full border-t border-slate-800 text-slate-400 text-[11px] font-mono flex items-center justify-between">
              <span>Verified Principal</span>
              <a href="#" className="text-brand-primary hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Bio details & highlights */}
          <div className="flex-1 p-8 text-left space-y-6 flex flex-col justify-between bg-white">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-brand-dark uppercase tracking-wider block">
                Professional Profile
              </span>
              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                With over 12 years of experience in ERP, CRM, and Digital Transformation, Denish Dalal has successfully guided businesses across Textile, Apparel, Pharma, and Packaging industries in optimizing operations through intelligent technology solutions.
              </p>
              <p className="text-slate-500 font-sans text-xs leading-relaxed">
                Denish spent his early career engineering enterprise platforms and mapping software architectures. Seeing local manufacturers struggling with system gaps, he established Astrabizz to bridge the gap between technical complexity and real, profitable industrial throughput.
              </p>
            </div>

            {/* Key Expertise highlights checklist */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-brand-dark uppercase tracking-wider block">
                Practice Focus Areas
              </span>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {[
                  'ERP Systems Architecture',
                  'CRM Implementation Specialist',
                  'Digital Transformation Consulting',
                  'FEFO Compliance Integrator',
                  'Deckle Minimizing Logic',
                  'Machine Capacity Optimization'
                ].map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                    <span className="font-semibold leading-none">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick direct contact card buttons */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-mono">
              <a
                href="mailto:info@astrabizz.com"
                className="flex items-center gap-2 py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 hover:border-brand-primary transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-primary" />
                info@astrabizz.com
              </a>
              <a
                href="tel:+919687412080"
                className="flex items-center gap-2 py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 hover:border-brand-primary transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-primary" />
                +91 96874 12080
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
