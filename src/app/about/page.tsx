'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ece3] font-serif flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#8B6914] uppercase font-semibold bg-[#8B6914]/10 px-4 py-1.5 rounded-full border border-[#8B6914]/30">
            OUR REALTY LEGACY
          </span>
          <h1 className="text-5xl font-light mt-4 mb-3 font-serif">Redefining Ultra-Luxury Real Estate</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            EstateFlow is a premier global real estate advisory representing iconic architectural residences, private islands, and ultra-high-net-worth acquisitions worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-sans">
          {[
            { stat: '$4.2B+', label: 'Closed Transaction Volume' },
            { stat: '12', label: 'International Markets' },
            { stat: '85%', label: 'Off-Market Private Listings' },
            { stat: '100%', label: 'Confidentiality Guaranteed' },
          ].map((s, i) => (
            <div key={i} className="bg-[#161616] border border-white/10 rounded-2xl p-5 text-center">
              <div className="text-3xl font-light text-[#8B6914] font-serif">{s.stat}</div>
              <div className="text-xs text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          {[
            { title: '$4.2B+ Total Volume', desc: 'Represented over $4.2 billion in closed luxury real estate transactions across 12 countries.' },
            { title: 'Off-Market Access', desc: 'Unrivaled access to private off-market estates and confidential seller portfolios not indexed on public MLS systems.' },
            { title: 'Global Advisory', desc: 'Bespoke legal, tax structuring, and valuation guidance for family offices and institutional buyers.' },
          ].map((m, i) => (
            <div key={i} className="bg-[#161616] border border-white/10 rounded-3xl p-8 space-y-3">
              <h3 className="text-xl font-bold text-white font-serif">{m.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#161616] border border-white/10 rounded-3xl p-8 text-center space-y-4 font-sans">
          <h2 className="text-2xl font-light text-white font-serif">Inquire About Confidential Off-Market Estates</h2>
          <p className="text-gray-400 text-xs max-w-md mx-auto">Speak with a senior partner to access non-public luxury listings.</p>
          <Link href="/contact" className="inline-block bg-[#8B6914] hover:bg-[#a67c1e] text-white font-bold text-xs px-8 py-3 rounded-xl transition-colors uppercase tracking-wider">
            Schedule Private Consultation
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
