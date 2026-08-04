'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const posts = [
  { slug: 'prime-waterfront-valuation-2026', title: 'Why Waterfront Property Remains the Strongest Asset Class in 2026', date: 'August 2, 2026', author: 'Harrison Sterling', category: 'INSIGHTS', excerpt: 'Coastal land scarcity combined with strict environmental zoning laws has created an unparalleled supply bottleneck in premier markets.' },
  { slug: 'architectural-trends-luxury-villas', title: 'Biophilic Architecture & Net-Zero Innovations in Ultra-Luxury Estates', date: 'July 19, 2026', author: 'Evelyn Vance', category: 'ARCHITECTURE', excerpt: 'How top architects combine solar glass, geothermal HVAC, and indoor botanical courtyards without sacrificing high-end luxury.' },
  { slug: 'tax-structuring-family-offices', title: 'Real Estate Portfolio Tax Structuring for International Family Offices', date: 'June 30, 2026', author: 'Marcus Laurent', category: 'WEALTH STRATEGY', excerpt: 'Cross-border entity formation, trust structures, and capital gains tax optimization for multi-jurisdictional holdings.' },
];

export default function EstateFlowBlogPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ece3] font-serif flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#8B6914] uppercase font-semibold bg-[#8B6914]/10 px-4 py-1.5 rounded-full border border-[#8B6914]/30">
            REAL ESTATE JOURNAL
          </span>
          <h1 className="text-5xl font-light mt-4 mb-3 font-serif">EstateFlow Insights</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-base">Market analysis, architectural trends, and private wealth real estate strategies.</p>
        </div>

        <div className="space-y-6 font-sans">
          {posts.map((p) => (
            <div key={p.slug} className="bg-[#161616] border border-white/10 rounded-3xl p-8 space-y-3 hover:border-[#8B6914]/40 transition-colors">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#8B6914] bg-[#8B6914]/10 px-3 py-1 rounded-full uppercase">{p.category}</span>
                <span className="text-xs text-gray-500">{p.date} · By {p.author}</span>
              </div>
              <h2 className="text-2xl font-bold text-white font-serif">{p.title}</h2>
              <p className="text-gray-400 text-xs leading-relaxed">{p.excerpt}</p>
              <div className="pt-2">
                <Link href={`/blog/${p.slug}`} className="inline-block text-[#8B6914] font-bold text-xs hover:underline uppercase tracking-wider">
                  Read Journal Article →
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
