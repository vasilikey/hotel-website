import React from 'react';

// Reusable room data array
const ROOMS_DATA = [
  {
    id: 1,
    title: "Deluxe Ocean Suite",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    price: "€240",
    size: "45 m²",
    guests: "2 Adults",
    amenities: ["Ocean View", "King Bed", "Private Balcony", "Wi-Fi"]
  },
  {
    id: 2,
    title: "Premium Family Room",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    price: "€310",
    size: "65 m²",
    guests: "4 Adults",
    amenities: ["2 Queen Beds", "Kitchenette", "Living Area", "Wi-Fi"]
  },
  {
    id: 3,
    title: "Penthouse Sanctuary",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    price: "€550",
    size: "120 m²",
    guests: "2 Adults",
    amenities: ["Panoramic View", "Private Jacuzzi", "Mini Bar", "24/7 Butler"]
  }
];

function Rooms() {
  return (
    <section id="rooms" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-600 uppercase mb-2 block">
            Our Accommodations
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-800 tracking-wide">
            Rooms & Suites
          </h2>
          <div className="w-12 h-[2px] bg-amber-600 mx-auto mt-4" />
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROOMS_DATA.map((room) => (
            <div key={room.id} className="bg-white border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 flex flex-col group rounded-sm overflow-hidden">
              
              {/* Image Container with Zoom Effect */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-amber-400 font-serif px-3 py-1.5 text-sm tracking-wide">
                  {room.price} <span className="text-xs text-white/80 font-sans">/ night</span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                    {room.title}
                  </h3>
                  
                  {/* Specs Row */}
                  <div className="flex space-x-4 text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100">
                    <span>Size: <strong>{room.size}</strong></span>
                    <span>•</span>
                    <span>Capacity: <strong>{room.guests}</strong></span>
                  </div>

                  {/* Amenities Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.map((amenity, index) => (
                      <span key={index} className="bg-slate-100 text-slate-600 text-[11px] px-2.5 py-1 tracking-wide">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA Action */}
                <button className="w-full bg-transparent border border-slate-800 text-slate-800 font-medium text-xs tracking-widest uppercase py-3.5 relative overflow-hidden transition-colors duration-300 group-hover:bg-slate-800 group-hover:text-white">
  Discover Suite
</button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Rooms;