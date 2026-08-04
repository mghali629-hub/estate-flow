'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';
import { Phone, Mail, Award, Building2 } from 'lucide-react';

interface Agent {
  id: number;
  name: string;
  role: string;
  sales: string;
  specialty: string;
  phone: string;
  image: string;
}

export default function AgentsDirectoryPage() {
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    fetch('/api/agents')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setAgents(data.agents);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs text-emerald-400 font-mono font-bold uppercase tracking-widest block">Executive Real Estate Leadership</span>
          <h1 className="text-4xl font-bold text-white">Managing Partners & Brokers</h1>
          <p className="text-slate-400 text-sm">Top-tier luxury real estate advisors with over $1B in combined career sales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agents.map((agent) => (
            <div key={agent.id} className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row gap-6 items-center">
              <img src={agent.image} alt={agent.name} className="w-32 h-32 rounded-2xl object-cover border-2 border-emerald-500/40" />
              <div className="space-y-2 text-center sm:text-left">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold font-mono uppercase inline-block">
                  {agent.sales} Volume
                </span>
                <h3 className="text-2xl font-bold text-white">{agent.name}</h3>
                <span className="text-slate-400 text-xs block font-mono">{agent.role} • {agent.specialty}</span>
                <div className="text-xs text-slate-300 flex items-center justify-center sm:justify-start gap-1 font-mono pt-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" /> {agent.phone}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
