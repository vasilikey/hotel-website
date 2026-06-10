import React from 'react';

function Navbar() {
  return (
<nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md border-b border-slate-100/50 shadow-sm z-50 px-8 py-4 flex justify-between items-center transition-all duration-300 hover:bg-white/90">      {/* Hotel Logo/Name */}
      <div className="text-2xl font-serif font-bold tracking-wide text-slate-800">
        KALAMATA VIEWS
      </div>

      {/* Navigtation Links */}
     <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wider text-slate-600">
  {["HOME", "ROOMS", "AMENITIES", "ABOUT"].map((link) => (
    <a 
      key={link}
      href={`#${link.toLowerCase()}`} 
      className="relative py-1 hover:text-amber-600 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-amber-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
    >
      {link}
    </a>
  ))}
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