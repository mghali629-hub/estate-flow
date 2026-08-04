'use client';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ece3] flex flex-col font-serif">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 font-sans">
        <div className="text-5xl font-light text-[#8B6914] mb-4 font-serif">404</div>
        <h1 className="text-3xl font-light text-white mb-3 font-serif">Estate Not Found</h1>
        <p className="text-gray-400 text-xs max-w-md mb-8">
          The luxury listing, off-market portfolio item, or neighborhood guide you searched for could not be located.
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-[#8B6914] hover:bg-[#a67c1e] text-black font-bold rounded-xl text-xs uppercase tracking-wider transition-colors"
          >
            Return to Portfolio
          </Link>
          <Link
            href="/properties"
            className="px-6 py-3 bg-[#161616] hover:bg-[#222] text-[#8B6914] font-bold rounded-xl text-xs uppercase tracking-wider border border-[#8B6914]/30 transition-colors"
          >
            Explore Estates
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
