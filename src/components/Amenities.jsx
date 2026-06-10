import React from 'react';

const AMENITIES_DATA = [
  { title: "Infinity Pool", desc: "A spectacular temperature-controlled pool overlooking the horizon." },
  { title: "Luxury Wellness Spa", desc: "Rejuvenating massage therapies and holistic skincare treatments." },
  { title: "Michelin Dining", desc: "Exquisite culinary experiences crafted by world-renowned chefs." },
  { title: "Private Beach Access", desc: "Pristine white sands exclusively reserved for our guests." }
];

function Amenities() {
  return (
    <section id="amenities" className="py-24 px-6 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-600 uppercase mb-2 block">
            The Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-wide">
            World-Class Amenities
          </h2>
          <div className="w-12 h-[2px] bg-amber-600 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {AMENITIES_DATA.map((item, index) => (
            <div key={index} className="p-8 border border-slate-100 bg-slate-50 hover:bg-slate-900 hover:text-white transition-all duration-300 group">
              <h3 className="text-xl font-serif mb-3 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;