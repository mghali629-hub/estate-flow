'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';

export default function MortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(2500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [calculatedMonthly, setCalculatedMonthly] = useState(0);

  useEffect(() => {
    fetch('/api/mortgage-calc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ homePrice, downPaymentPercent, interestRate, loanTermYears }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setCalculatedMonthly(data.calculation.monthlyPayment);
      });
  }, [homePrice, downPaymentPercent, interestRate, loanTermYears]);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white mb-2">Real-Time Mortgage Estimator</h1>
          <p className="text-slate-400 text-sm">Calculate your estimated monthly principal and interest payment via API telemetry.</p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div>
            <label className="text-xs text-slate-400 block mb-2 font-semibold">Home Purchase Price: <strong className="text-emerald-400">${homePrice.toLocaleString()}</strong></label>
            <input type="range" min={1000000} max={20000000} step={250000} value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
          </div>

          <div>
            <label className="text-xs text-slate-400 block mb-2 font-semibold">Down Payment ({downPaymentPercent}%): <strong className="text-emerald-400">${((homePrice * downPaymentPercent) / 100).toLocaleString()}</strong></label>
            <input type="range" min={10} max={50} step={5} value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(Number(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 text-center">
            <span className="text-xs text-emerald-400 uppercase tracking-widest block font-bold">Estimated Monthly Payment</span>
            <div className="text-4xl font-black text-white mt-1">${calculatedMonthly.toLocaleString()} / mo</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
