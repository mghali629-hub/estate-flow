'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function ComparePropertiesPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ece3] font-serif flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#8B6914] uppercase font-semibold bg-[#8B6914]/10 px-4 py-1.5 rounded-full border border-[#8B6914]/30">
            SIDE-BY-SIDE ANALYSIS
          </span>
          <h1 className="text-5xl font-light mt-4 mb-3 font-serif">Property Comparison</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">Compare technical specifications, architectural square footage, and valuation metrics across luxury listings.</p>
        </div>

        <div className="bg-[#161616] border border-white/10 rounded-3xl p-8 overflow-x-auto font-sans">
          <table className="w-full text-xs text-left text-gray-300">
            <thead>
              <tr className="border-b border-white/10 text-[#8B6914] text-sm">
                <th className="py-3 px-4">Specification</th>
                <th className="py-3 px-4 font-bold text-white">The Grand Beverly Villa</th>
                <th className="py-3 px-4 font-bold text-white">Oceanfront Penthouse Suite</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr><td className="py-3 px-4 font-bold text-white">Listing Price</td><td className="py-3 px-4 text-[#8B6914] font-bold text-sm">$12,500,000</td><td className="py-3 px-4 text-[#8B6914] font-bold text-sm">$8,900,000</td></tr>
              <tr><td className="py-3 px-4 font-bold text-white">Interior Footprint</td><td className="py-3 px-4">8,400 sq ft</td><td className="py-3 px-4">5,200 sq ft</td></tr>
              <tr><td className="py-3 px-4 font-bold text-white">Bedrooms / Bathrooms</td><td className="py-3 px-4">6 Beds / 8 Baths</td><td className="py-3 px-4">4 Beds / 5 Baths</td></tr>
              <tr><td className="py-3 px-4 font-bold text-white">Lot Size / Outdoor Terrace</td><td className="py-3 px-4">1.8 Acres manicured grounds</td><td className="py-3 px-4">1,400 sq ft private wrap-around deck</td></tr>
              <tr><td className="py-3 px-4 font-bold text-white">Primary Amenity</td><td className="py-3 px-4">Infinity pool, tennis court & wine cellar</td><td className="py-3 px-4">Private helipad access & deep-water dock</td></tr>
              <tr><td className="py-3 px-4 font-bold text-white">Estimated Property Tax</td><td className="py-3 px-4">$112,000 / year</td><td className="py-3 px-4">$78,000 / year</td></tr>
            </tbody>
          </table>
          <div className="pt-6 flex justify-end">
            <Link href="/contact" className="bg-[#8B6914] hover:bg-[#a67c1e] text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-colors uppercase tracking-wider">
              Request Full Comparative Market Analysis (CMA)
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
