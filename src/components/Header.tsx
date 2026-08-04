'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2 } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/properties', label: 'Residences' },
    { href: '/search', label: 'Search' },
    { href: '/neighborhoods', label: 'Districts' },
    { href: '/new-developments', label: 'New Builds' },
    { href: '/sold', label: 'Sold Portfolio' },
    { href: '/agents', label: 'Elite Agents' },
    { href: '/calculator', label: 'Mortgage' },
    { href: '/compare', label: 'Compare' },
    { href: '/market-insights', label: 'Insights' },
    { href: '/virtual-tour', label: '360 Tour' },
    { href: '/favorites', label: 'Saved' },
    { href: '/blog', label: 'Blog' },
    { href: '/apply-for-loan', label: 'Pre-Approval' },
    { href: '/contact', label: 'Showing Desk' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0F172A]/90 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-emerald-500/20">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white block">EstateFlow</span>
            <span className="text-[9px] tracking-[0.2em] text-emerald-400 font-semibold uppercase block -mt-1">Real Estate Platform</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold py-2">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors whitespace-nowrap py-1 ${pathname === link.href ? 'text-emerald-400 border-b-2 border-emerald-400 font-bold' : 'text-zinc-100 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
          {navLinks.length > 5 && (
            <div className="relative group py-1">
              <button className="flex items-center gap-1.5 text-zinc-100 hover:text-white font-semibold text-sm transition-colors cursor-pointer py-1">
                <span>More</span>
                <span className="text-[10px] opacity-80">▼</span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-56 bg-black border border-zinc-700 rounded-2xl shadow-2xl p-2 hidden group-hover:block group-focus-within:block z-50">
                <div className="grid grid-cols-1 gap-1 max-h-80 overflow-y-auto no-scrollbar">
                  {navLinks.slice(5).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-zinc-100 hover:bg-zinc-800 hover:text-white transition-colors block whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>

        <Link
          href="/properties"
          className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px] uppercase tracking-wider transition-all shrink-0"
        >
          Explore
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#090D16] border-t border-slate-800 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <Building2 className="w-5 h-5 text-emerald-400" /> ESTATEFLOW
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Ultra-luxury architectural real estate platform connecting discerning buyers with premier estates worldwide.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider">Districts</h4>
          <ul className="space-y-2">
            <li><Link href="/neighborhoods/beverly-hills" className="hover:text-emerald-400">Beverly Hills</Link></li>
            <li><Link href="/neighborhoods/manhattan-penthouse" className="hover:text-emerald-400">Manhattan Penthouses</Link></li>
            <li><Link href="/neighborhoods/miami-waterfront" className="hover:text-emerald-400">Miami Waterfront</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider">Financing</h4>
          <ul className="space-y-2">
            <li><Link href="/calculator" className="hover:text-emerald-400">Mortgage Calculator</Link></li>
            <li><Link href="/apply-for-loan" className="hover:text-emerald-400">Pre-Approval Loan</Link></li>
            <li><Link href="/market-insights" className="hover:text-emerald-400">Market Insights</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider">Private Concierge</h4>
          <p className="text-slate-400">Schedule Private Tour:</p>
          <p className="text-emerald-400 font-bold mt-1 text-sm">+1 (800) 555-ESTATE</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
        <div>© 2026 All rights reserved.</div>
        <div>
          <a
            href="https://devmaster.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white font-medium transition-colors cursor-pointer"
          >
            <span>Powered by</span>
            <span className="font-bold text-emerald-400 hover:underline">DevMaster</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
