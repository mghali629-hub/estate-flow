'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ece3] font-serif flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-8 font-sans">
        <div>
          <Link href="/blog" className="text-xs text-[#8B6914] font-bold hover:underline mb-4 block">← Back to Real Estate Journal</Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#8B6914] bg-[#8B6914]/10 px-3 py-1 rounded-full uppercase border border-[#8B6914]/30">MARKET INSIGHTS</span>
            <span className="text-xs text-gray-500">8 Min Read · Senior Partner Analysis</span>
          </div>
          <h1 className="text-4xl font-light text-white font-serif mt-3 mb-2 leading-snug">Why Waterfront Property Remains the Strongest Asset Class in 2026</h1>
          <p className="text-gray-400 text-sm">Published: August 2, 2026 · By Harrison Sterling, Senior Partner · EstateFlow Advisory</p>
        </div>

        <div className="bg-[#161616] border border-white/10 rounded-3xl p-8 space-y-6 text-gray-300 text-sm leading-relaxed">
          <p>
            Coastal land scarcity combined with strict environmental zoning laws in premier markets such as Miami Beach, the French Riviera, and Sydney Harbour has created an unparalleled supply bottleneck in ultra-luxury real estate.
          </p>
          <p>
            Data from Q2 2026 transactions demonstrates that prime waterfront assets experienced a 14.2% year-over-year price appreciation, outpacing urban penthouse benchmarks by over 450 basis points and delivering inflation-beating real returns to high-net-worth investors.
          </p>
          <h2 className="text-xl font-bold text-white font-serif">Key Market Drivers for 2026</h2>
          <ul className="space-y-2 text-xs">
            <li className="flex gap-2"><span className="text-[#8B6914] font-bold shrink-0">→</span><span>Remote work normalization has permanently shifted buyer preferences toward residential properties with outdoor access and waterfront views.</span></li>
            <li className="flex gap-2"><span className="text-[#8B6914] font-bold shrink-0">→</span><span>Currency diversification by family offices across the Middle East, Asia-Pacific, and North America continues to fuel international demand.</span></li>
            <li className="flex gap-2"><span className="text-[#8B6914] font-bold shrink-0">→</span><span>Environmental coastal zoning restrictions are permanently limiting new-build supply in all tier-one waterfront markets.</span></li>
          </ul>
          <div className="bg-[#8B6914]/10 border border-[#8B6914]/30 rounded-2xl p-5 text-xs text-[#8B6914] space-y-2">
            <strong className="block font-bold text-white">📊 Benchmark Transaction Data Q2 2026:</strong>
            <p>Average days on market for prime waterfront estates under $25M dropped to 28 days. Off-market private transactions constituted 67% of all closings above $10M.</p>
          </div>
          <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
            <span className="text-gray-500">Category: Wealth Advisory · Real Estate Market Analysis</span>
            <Link href="/contact" className="text-[#8B6914] font-bold hover:underline">Inquire About Off-Market Estates →</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
