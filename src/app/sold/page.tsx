'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

const soldProperties = [
  { title: 'Modern Alpine Chalet', price: '$8,200,000', location: 'Aspen, CO', soldDate: 'July 2026', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' },
  { title: 'Tribeca Glass Loft', price: '$14,500,000', location: 'New York, NY', soldDate: 'June 2026', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80' },
];

export default function SoldPropertiesPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ece3] font-serif flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#8B6914] uppercase font-semibold bg-[#8B6914]/10 px-4 py-1.5 rounded-full border border-[#8B6914]/30">
            RECORD SALES
          </span>
          <h1 className="text-5xl font-light mt-4 mb-3 font-serif">Recently Sold Estates</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">Explore landmark real estate transactions represented by EstateFlow advisors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          {soldProperties.map((p, i) => (
            <div key={i} className="bg-[#161616] border border-white/10 rounded-3xl overflow-hidden hover:border-[#8B6914]/40 transition-colors">
              <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: `url('${p.image}')` }}>
                <span className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  SOLD — {p.soldDate}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white font-serif mb-1">{p.title}</h3>
                <p className="text-xs text-gray-400 mb-3">📍 {p.location}</p>
                <div className="text-2xl font-bold text-[#8B6914] font-serif border-t border-white/10 pt-4">{p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
