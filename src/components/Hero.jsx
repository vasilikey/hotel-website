import React from 'react';

function Hero() {
  return (
    <div id="home" className="relative h-screen w-full flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background Image with Dark Overlay for Text Readability */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Hotel Exterior" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-slate-900/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <span className="text-xs md:text-sm font-semibold tracking-widest text-amber-400 uppercase mb-3 block">
          Welcome to Luxury Living
        </span>
        <h1 className="text-4xl md:text-7xl font-serif font-light text-white tracking-wide mb-6 leading-tight">
          A Sanctuary for the <br />
          <span className="font-normal italic text-amber-100">Modern Traveler</span>
        </h1>
        <p className="text-base md:text-xl text-slate-200 font-light max-w-2xl mx-auto mb-8 tracking-wide">
          Experience world-class hospitality, breathtaking views, and refined comfort in the heart of the coast.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#rooms" className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm tracking-wider uppercase px-8 py-3.5 transition-all shadow-lg text-center">
            Explore Suites
          </a>
          <a href="#about" className="w-full sm:w-auto border border-white/60 hover:border-white text-white font-medium text-sm tracking-wider uppercase px-8 py-3.5 transition-all text-center backdrop-blur-sm">
            Our Story
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;