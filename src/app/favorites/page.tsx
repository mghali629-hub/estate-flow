'use client';

import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function FavoritesPage() {
  const favorites = [
    { id: 1, title: 'The Grand Beverly Villa', price: 12500000, location: 'Beverly Hills, CA', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80' },
    { id: 2, title: 'Oceanfront Penthouse Suite', price: 8900000, location: 'Miami Beach, FL', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ece3] font-serif flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1">
        <div className="mb-10">
          <span className="text-xs tracking-widest text-[#8B6914] uppercase font-sans font-semibold">Saved Properties</span>
          <h1 className="text-4xl font-light mt-2 mb-2 tracking-wide">Your Saved Portfolio</h1>
          <p className="text-gray-400 font-sans">{favorites.length} luxury residences saved</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {favorites.map((p) => (
            <div key={p.id} className="bg-[#161616] border border-white/10 rounded-3xl overflow-hidden font-sans">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${p.image}')` }} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{p.title}</h3>
                <p className="text-xs text-gray-400 mb-3">📍 {p.location}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-2xl font-bold text-[#8B6914]">${p.price.toLocaleString()}</span>
                  <Link href={`/properties/${p.id}`} className="bg-[#8B6914] hover:bg-[#6e5310] text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors">
                    VIEW PROPERTY
                  </Link>
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
