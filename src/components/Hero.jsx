import React from 'react';

function Hero() {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ 
        // Updated to a stunning high-res view of Kalamata, Greece
        backgroundImage: `url('https://cdn.getyourguide.com/img/location/5a1d572e4a065.jpeg/99.jpg')` 
      }}
    >
      {/* Premium Dark Overlay to keep text perfectly legible */}
      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <span className="text-xs md:text-sm font-semibold tracking-widest text-amber-400 uppercase mb-3 block animate-fade-in delay-100">
          Welcome to the Messinian Gulf
        </span>
        <h1 className="text-4xl md:text-7xl font-serif font-light text-white tracking-wide mb-6 leading-tight">
          A Sanctuary for the <br />
          <span className="font-normal italic text-amber-100">Modern Traveler</span>
        </h1>
        <p className="text-base md:text-xl text-slate-100 font-light max-w-2xl mx-auto mb-8 tracking-wide">
          Experience world-class luxury, breathtaking Greek horizons, and refined comfort right on the coast.
        </p>
        
        <a 
          href="#rooms" 
          className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-medium text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:tracking-[0.15em] rounded-sm shadow-lg"
        >
          Explore Suites
        </a>
      </div>
    </section>
  );
}

export default Hero;