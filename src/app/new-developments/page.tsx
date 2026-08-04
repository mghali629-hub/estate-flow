'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

const developments = [
  { name: 'The Ritz-Carlton Residences', completion: 'Q4 2027', units: '42 Penthouses', location: 'Miami Beach, FL', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' },
  { name: 'Belgravia Private Estates', completion: 'Q2 2028', units: '12 Townhouses', location: 'London, UK', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80' },
];

export default function NewDevelopmentsPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ece3] font-serif flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#8B6914] uppercase font-semibold bg-[#8B6914]/10 px-4 py-1.5 rounded-full border border-[#8B6914]/30">
            PRE-CONSTRUCTION OPPORTUNITIES
          </span>
          <h1 className="text-5xl font-light mt-4 mb-3 font-serif">New Luxury Developments</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">Exclusive early-access opportunities to secure off-plan units in world-class architectural developments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          {developments.map((d, i) => (
            <div key={i} className="bg-[#161616] border border-white/10 rounded-3xl overflow-hidden hover:border-[#8B6914]/40 transition-colors">
              <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: `url('${d.image}')` }}>
                <span className="absolute top-4 left-4 bg-[#8B6914] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  ESTIMATED COMPLETION: {d.completion}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-white font-serif">{d.name}</h3>
                <p className="text-xs text-gray-400">📍 {d.location} · {d.units}</p>
                <button className="w-full border border-[#8B6914] text-[#8B6914] hover:bg-[#8B6914] hover:text-white transition-colors py-3 rounded-xl text-xs font-bold uppercase tracking-wider">
                  Request Floor Plans & Brochure
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
