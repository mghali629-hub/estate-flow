'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

const tours = [
  { title: 'The Grand Beverly Villa (360° Walkthrough)', duration: '4:15', preview: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80', features: '6 Beds · 8 Baths · Infinity Pool' },
  { title: 'Oceanfront Penthouse Suite (Interactive VR)', duration: '3:40', preview: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', features: '4 Beds · Private Helipad · Deep Dock' },
];

export default function EstateFlowVirtualTourPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ece3] font-serif flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#8B6914] uppercase font-semibold bg-[#8B6914]/10 px-4 py-1.5 rounded-full border border-[#8B6914]/30">
            IMMERSIVE REALTY
          </span>
          <h1 className="text-5xl font-light mt-4 mb-3 font-serif">360° Virtual Property Tours</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">Inspect every room, architectural detail, and panoramic view remotely with 4K spatial video.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
          {tours.map((t, i) => (
            <div key={i} className="bg-[#161616] border border-white/10 rounded-3xl overflow-hidden hover:border-[#8B6914]/40 transition-colors">
              <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: `url('${t.preview}')` }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-black text-xl shadow-xl transition-all">
                    ▶
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-white font-serif">{t.title}</h3>
                <p className="text-xs text-gray-400">{t.features}</p>
                <div className="flex justify-between items-center pt-2 text-[11px] text-[#8B6914]">
                  <span>Duration: {t.duration}</span>
                  <span className="bg-[#8B6914]/10 px-2 py-0.5 rounded border border-[#8B6914]/30 font-bold">4K VR COMPATIBLE</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
