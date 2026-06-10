import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 px-6 py-4 flex justify-between items-center">
      {/* Hotel Logo/Name */}
      <div className="text-2xl font-serif font-bold tracking-wide text-slate-800">
        GRAND HORIZON
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wider text-slate-600">
        <a href="#home" className="hover:text-amber-600 transition-colors">HOME</a>
        <a href="#rooms" className="hover:text-amber-600 transition-colors">ROOMS</a>
        <a href="#amenities" className="hover:text-amber-600 transition-colors">AMENITIES</a>
        <a href="#about" className="hover:text-amber-600 transition-colors">ABOUT</a>
      </div>

      {/* Booking CTA Button */}
      <div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all shadow-md hover:shadow-lg">
          Book Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;