'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';
import { Search } from 'lucide-react';

export default function SearchEnginePage() {
  const [query, setQuery] = useState('');
  const [beds, setBeds] = useState('All');

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white mb-2">Advanced Real Estate Search</h1>
          <p className="text-slate-400 text-sm">Filter properties by location, bedrooms, amenities, and price telemetry.</p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search by city, zipcode, or keyword..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="flex gap-4 items-center">
            <span className="text-xs text-slate-400 font-bold">Min Beds:</span>
            {['All', '3+', '4+', '5+'].map((b) => (
              <button
                key={b}
                onClick={() => setBeds(b)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold ${beds === b ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
              >
                {b}
              </button>
            ))}
          </div>

          <Link href="/properties" className="block w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider text-center">
            Execute Filter Search
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
