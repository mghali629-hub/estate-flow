'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const neighborhoods = [
  { name: 'Beverly Hills', city: 'Los Angeles, CA', avgPrice: '$11.8M', desc: 'World-renowned tree-lined avenues, iconic palatial estates, and world-class shopping on Rodeo Drive.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80' },
  { name: 'Tribeca', city: 'New York, NY', avgPrice: '$9.4M', desc: 'Cobblestone streets, industrial cast-iron loft conversions, and private celebrity sanctuaries.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' },
  { name: 'Belgravia', city: 'London, UK', avgPrice: '£14.2M', desc: 'Regency white stucco squares, ambassadorial residences, and proximity to Hyde Park.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80' },
];

export default function NeighborhoodsPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ece3] font-serif flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#8B6914] uppercase font-semibold bg-[#8B6914]/10 px-4 py-1.5 rounded-full border border-[#8B6914]/30">
            PREMIER LOCATIONS
          </span>
          <h1 className="text-5xl font-light mt-4 mb-3 font-serif">Luxury Neighborhood Guides</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">Explore prime residential enclaves, local lifestyle amenities, and real estate valuation benchmarks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
          {neighborhoods.map((n, i) => (
            <div key={i} className="bg-[#161616] border border-white/10 rounded-3xl overflow-hidden hover:border-[#8B6914]/40 transition-colors">
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url('${n.image}')` }} />
              <div className="p-6">
                <span className="text-[10px] text-[#8B6914] font-bold uppercase tracking-widest block">{n.city}</span>
                <h3 className="text-2xl font-bold text-white font-serif mt-1 mb-2">{n.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">{n.desc}</p>
                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <span className="text-xs font-bold text-[#8B6914]">Avg: {n.avgPrice}</span>
                  <Link href="/properties" className="text-[11px] text-white font-bold hover:underline">View Active Homes →</Link>
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
