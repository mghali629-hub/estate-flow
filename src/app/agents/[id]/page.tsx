import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const agents = await prisma.agent.findMany({ select: { id: true } });
  return agents.map((a) => ({ id: String(a.id) }));
}

export default async function AgentDetailPage({ params }: { params: { id: string } }) {
  const agent = await prisma.agent.findUnique({ where: { id: Number(params.id) } });
  if (!agent) notFound();

  const properties = await prisma.property.findMany({
    where: { agent: agent.name },
    take: 6,
  });

  return (
    <main style={{ background: '#0f0f0f', minHeight: '100vh', color: '#f0ece3', fontFamily: "'Georgia', serif", padding: '100px 5% 60px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Link href="/agents" style={{ color: '#8B6914', textDecoration: 'none', fontSize: '13px', letterSpacing: '1px' }}>← Back to Agents</Link>

        {/* Profile Card */}
        <div style={{ background: '#161616', border: '1px solid rgba(139,105,20,0.3)', borderRadius: '20px', padding: '40px', margin: '30px 0 60px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: '40px', alignItems: 'center' }}>
          <div style={{ width: '200px', height: '200px', borderRadius: '50%', background: 'linear-gradient(135deg, #8B6914, #4a3808)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', fontWeight: '700', color: '#fff', border: '4px solid rgba(139,105,20,0.4)' }}>
            {agent.name.charAt(0)}
          </div>
          <div>
            <span style={{ background: 'rgba(139,105,20,0.2)', color: '#8B6914', border: '1px solid rgba(139,105,20,0.4)', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>{agent.specialty.toUpperCase()}</span>
            <h1 style={{ fontSize: '2.4rem', fontWeight: '400', margin: '12px 0 6px', color: '#f0ece3' }}>{agent.name}</h1>
            <p style={{ color: '#999', fontSize: '1.05rem', margin: '0 0 20px' }}>{agent.role} · EstateFlow Luxury Division</p>

            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px' }}>
              <div>
                <div style={{ color: '#8B6914', fontSize: '1.4rem', fontWeight: '700' }}>{agent.sales}</div>
                <div style={{ color: '#777', fontSize: '12px' }}>Total Sales Volume</div>
              </div>
              <div>
                <div style={{ color: '#8B6914', fontSize: '1.4rem', fontWeight: '700' }}>📞 {agent.phone}</div>
                <div style={{ color: '#777', fontSize: '12px' }}>Direct Contact</div>
              </div>
              <div>
                <div style={{ color: '#8B6914', fontSize: '1.4rem', fontWeight: '700' }}>⭐ 4.98</div>
                <div style={{ color: '#777', fontSize: '12px' }}>Client Satisfaction Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Listings */}
        <section>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '400', color: '#8B6914', marginBottom: '24px', borderBottom: '1px solid rgba(139,105,20,0.2)', paddingBottom: '12px' }}>Exclusive Listings by {agent.name}</h2>
          {properties.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
              {properties.map((p) => (
                <Link key={p.id} href={`/properties/${p.id}`} style={{ textDecoration: 'none', background: '#161616', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', overflow: 'hidden', color: '#f0ece3' }}>
                  <div style={{ height: '200px', background: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80') center/cover` }} />
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem', fontWeight: '600' }}>{p.title}</h3>
                    <p style={{ color: '#888', fontSize: '13px', margin: '0 0 12px' }}>📍 {p.location}</p>
                    <p style={{ color: '#8B6914', fontWeight: '700', fontSize: '1.2rem', margin: 0 }}>${p.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p style={{ color: '#888' }}>Currently managing private off-market listings. Contact directly for availability.</p>
          )}
        </section>
      </div>
    </main>
  );
}
