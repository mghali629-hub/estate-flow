'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';
import { Search, MapPin, Bed, Bath, Maximize2, Eye, Heart } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  image: string;
  description: string;
  agent: string;
}

export default function PropertiesCatalogPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [propertyType, setPropertyType] = useState('All');
  const [maxPrice, setMaxPrice] = useState(20000000);

  useEffect(() => {
    fetch(`/api/properties?type=${propertyType}&maxPrice=${maxPrice}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProperties(data.properties);
      });
  }, [propertyType, maxPrice]);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Luxury Residence Portfolio</h1>
          <p className="text-slate-400 text-sm">Filter through our curated penthouses, modern architectural villas, and waterfront estates.</p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex gap-2">
            {['All', 'Penthouse', 'Villa'].map((type) => (
              <button
                key={type}
                onClick={() => setPropertyType(type)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${propertyType === type ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-400">Max Price: <strong className="text-emerald-400">${(maxPrice / 1000000).toFixed(1)}M</strong></span>
            <input
              type="range"
              min={5000000}
              max={20000000}
              step={500000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-48 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((item) => (
            <div key={item.id} className="rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden flex flex-col justify-between">
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 font-bold text-xs">
                  {item.type}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-slate-400 text-xs flex items-center gap-1 mb-1"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> {item.location}</span>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <span className="text-2xl font-black text-emerald-400 block">${(item.price / 1000000).toFixed(2)}M</span>
                <Link href={`/properties/${item.id}`} className="w-full py-3 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 font-bold text-xs uppercase transition-all text-center block">
                  Inspect Property Specs
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
