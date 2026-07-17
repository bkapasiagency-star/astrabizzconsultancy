/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import Founder from './components/Founder';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100 antialiased selection:bg-brand-primary/20 selection:text-brand-dark dark:selection:bg-brand-primary/30 dark:selection:text-white transition-colors duration-300">
      {/* Sticky header bar and navigation */}
      <Navbar />

      {/* Main landing sections */}
      <main>
        {/* Hero Section featuring the animated dynamic dashboard mockup */}
        <Hero />

        {/* Dynamic statistics and numeric counters */}
        <TrustIndicators />

        {/* Narrative bio, why digital transformation matters and interactive infographic comparison slider */}
        <About />

        {/* Grid of 8 core practices complete with detailed overlay inquiry modals */}
        <Services />

        {/* Mapped sector solutions for Textile, Apparel, Pharma, and Packaging */}
        <Industries />

        {/* Competitive advantages bento grid and interactive 7-step process timeline */}
        <WhyChooseUs />

        {/* Principal founder showcase on Denish Dalal and certification credentials */}
        <Founder />

        {/* High-contrast partner testimonial cards */}
        <Testimonials />

        {/* BUTTERY smooth FAQ accordion */}
        <FAQ />

        {/* Elegant Consultation booking form and direct corporate business card indicators */}
        <Contact />
      </main>

      {/* Large structured corporate footer with social sitemaps and legal disclosures */}
      <Footer />
    </div>
  );
}

