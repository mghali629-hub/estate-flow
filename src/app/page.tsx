'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';
import { Building2, MapPin, Bed, Bath, Maximize2, Search, ArrowRight, ShieldCheck, CheckCircle2, DollarSign } from 'lucide-react';

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

export default function EstateFlowHomePage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/properties')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProperties(data.properties);
      })
      .catch((err) => console.error(err));
  }, []);

  const filtered = properties.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 flex flex-col justify-between">
      <Header />

      <main className="flex-1 space-y-20">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-black/40" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Building2 className="w-4 h-4 text-emerald-400" /> Ultra-Luxury Modernist Real Estate
            </div>
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-none">
              Architectural Havens & <span className="text-emerald-400 block mt-2">Sky Penthouses</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Curated architectural masterpieces across Manhattan, Bel-Air, and Palm Beach with private docks and rooftop pools.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/properties"
                className="px-8 py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-widest shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all text-center"
              >
                Inspect Residence Portfolio
              </Link>
              <Link
                href="/calculator"
                className="px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-white font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all text-center font-mono"
              >
                Launch Mortgage Telemetry
              </Link>
            </div>
          </div>
        </section>

        {/* Property Portfolio */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-1">Prime Listings</span>
              <h2 className="text-3xl font-extrabold text-white">Featured Luxury Estates</h2>
            </div>
            <div className="relative w-full sm:w-72 font-mono">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
              <input
                type="text"
                placeholder="Search location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div key={item.id} className="rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden flex flex-col justify-between">
                <div className="relative h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 font-bold text-xs">
                    {item.type}
                  </div>
                </div>
                <div className="p-6 space-y-4 font-sans">
                  <div>
                    <span className="text-slate-400 text-xs flex items-center gap-1 mb-1"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> {item.location}</span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <span className="text-3xl font-black text-emerald-400 block">${(item.price / 1000000).toFixed(2)}M</span>
                  <Link href={`/properties/${item.id}`} className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 font-bold text-xs uppercase transition-all text-center block">
                    Inspect Property Specs
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
