import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities'; // 1. Import Amenities
import Footer from './components/Footer';       // 2. Import Footer

function App() {
  return (
    <div className="bg-slate-900 min-h-screen font-sans selection:bg-amber-500 selection:text-white scroll-smooth">
      <Navbar />

      <main>
        <Hero />
        <Rooms />
        <Amenities /> {/* 3. Inject below rooms */}
      </main>

      <Footer /> {/* 4. Append at the base */}
    </div>
  );
}

export default App;