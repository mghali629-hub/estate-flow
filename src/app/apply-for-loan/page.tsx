'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import { CheckCircle2 } from 'lucide-react';

export default function ApplyForLoanPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [income, setIncome] = useState('500000');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white mb-2">Mortgage Pre-Approval Application</h1>
          <p className="text-slate-400 text-sm">Fast-track private jumbo loan qualification.</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Applicant Name</label>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Alexander Vance" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="alexander@vance.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <button type="submit" className="w-full py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider">
              Submit Pre-Approval Application
            </button>
          </form>
        ) : (
          <div className="p-8 rounded-3xl bg-slate-900 border border-emerald-500 text-center space-y-4 font-mono">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-2xl font-bold text-white">Pre-Approval Underway</h3>
            <p className="text-slate-300 text-xs">Our private lending officer will email {email}.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
