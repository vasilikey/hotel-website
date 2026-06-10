import React from 'react';

function Footer() {
  return (
    <footer id="about" className="bg-slate-900 text-white pt-20 pb-10 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Column 1: Brand Statement */}
        <div>
          <h3 className="text-xl font-serif tracking-widest text-amber-400 mb-4">Kalamata Views</h3>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Crafting unforgettable stays where refined architecture meets bespoke hospitality. Your coastal sanctuary awaits.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-slate-300 mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#home" className="hover:text-amber-400 transition-colors">Back to Top</a></li>
            <li><a href="#rooms" className="hover:text-amber-400 transition-colors">Our Suites</a></li>
            <li><a href="#amenities" className="hover:text-amber-400 transition-colors">Resort Experience</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Channels */}
        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-slate-300 mb-4">Contact Info</h4>
          <p className="text-sm text-slate-400 mb-2">📍 102 Horizon Boulevard, Coastal Crest</p>
          <p className="text-sm text-slate-400 mb-2">📞 +31 (0) 15 278 9111</p>
          <p className="text-sm text-slate-400">✉️ reservations@grandhorizon.com</p>
        </div>

      </div>

      {/* Sub-footer Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Kalamata Views Hotel. Designed with precision.</p>
      </div>
    </footer>
  );
}

export default Footer;