'use client';

import React from 'react';
import { Header, Footer } from '@/components/Header';

export default function MarketInsightsPage() {
  const trends = [
    { label: 'Luxury Villa Index (YoY)', value: '+14.2%', status: 'BULLISH' },
    { label: 'Median Price / Sq Ft', value: '$1,480', status: 'STABLE' },
    { label: 'Average Days on Market', value: '28 Days', status: 'FAST SALES' },
    { label: 'Total Volume Q3 2026', value: '$420M', status: 'RECORD HIGH' },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ece3] font-serif flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest text-[#8B6914] uppercase font-sans font-semibold">Real Estate Intelligence</span>
          <h1 className="text-5xl font-light mt-3 mb-4 tracking-wide">Market Insights & Trends</h1>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto text-lg">Data-driven analysis of prime luxury real estate performance, inventory metrics, and valuation growth.</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {trends.map((t, i) => (
            <div key={i} className="bg-[#161616] border border-[rgba(139,105,20,0.3)] rounded-2xl p-6 font-sans">
              <span className="text-xs text-[#8B6914] font-bold tracking-widest uppercase">{t.status}</span>
              <div className="text-3xl font-bold text-white mt-2 mb-1">{t.value}</div>
              <div className="text-xs text-gray-400">{t.label}</div>
            </div>
          ))}
        </div>

        {/* Market Analysis Card */}
        <div className="bg-[#161616] border border-white/10 rounded-3xl p-8 space-y-6">
          <h2 className="text-2xl font-light text-[#8B6914]">Executive Market Analysis</h2>
          <p className="text-gray-300 font-sans leading-relaxed text-base">
            Demand for premier waterfront and prime urban estates remains exceptionally resilient. Driven by high net worth capital allocation into tangible luxury assets, prime yields have outpaced general market indices by 4.8% over the past four quarters.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-sm text-gray-300 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2">✓ <strong>Waterfront Assets:</strong> Highest appreciation rate (+16.8%)</div>
            <div className="flex items-center gap-2">✓ <strong>Penthouse Suites:</strong> Average absorption rate under 21 days</div>
            <div className="flex items-center gap-2">✓ <strong>International Buyers:</strong> Accounting for 38% of total volume</div>
            <div className="flex items-center gap-2">✓ <strong>Off-Market Transactions:</strong> Representing 24% of luxury sales</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
