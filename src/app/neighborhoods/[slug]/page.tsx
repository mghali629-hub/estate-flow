import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const hoods = await prisma.neighborhood.findMany({ select: { slug: true } });
  return hoods.map((h) => ({ slug: h.slug }));
}

export default async function NeighborhoodDetailPage({ params }: { params: { slug: string } }) {
  const hood = await prisma.neighborhood.findUnique({ where: { slug: params.slug } });
  if (!hood) notFound();

  return (
    <main style={{ background: '#0f0f0f', minHeight: '100vh', color: '#f0ece3', fontFamily: "'Georgia', serif", padding: '100px 5% 60px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Link href="/neighborhoods" style={{ color: '#8B6914', textDecoration: 'none', fontSize: '13px', letterSpacing: '1px' }}>← Back to Neighborhoods</Link>
        <div style={{ margin: '30px 0 40px' }}>
          <span style={{ background: 'rgba(139,105,20,0.2)', color: '#8B6914', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>NEIGHBORHOOD GUIDE</span>
          <h1 style={{ fontSize: '3rem', fontWeight: '400', margin: '12px 0 8px' }}>{hood.name}</h1>
          <p style={{ color: '#8B6914', fontSize: '1.2rem', fontWeight: '600' }}>Average Home Price: {hood.avgPrice}</p>
        </div>

        <div style={{ height: '450px', background: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80') center/cover`, borderRadius: '20px', marginBottom: '40px' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '50px' }}>
          <div>
            <h2 style={{ color: '#8B6914', fontSize: '1.6rem', fontWeight: '400', marginBottom: '16px' }}>Neighborhood Overview</h2>
            <p style={{ lineHeight: '1.9', color: '#ccc', fontSize: '1.05rem' }}>{hood.description}</p>
          </div>
          <div style={{ background: '#161616', border: '1px solid rgba(139,105,20,0.3)', borderRadius: '16px', padding: '28px' }}>
            <h3 style={{ color: '#f0ece3', margin: '0 0 16px' }}>Neighborhood Stats</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#aaa', fontSize: '14px' }}>
              <div>🏫 Top-rated public & private schools</div>
              <div>🌳 45+ acres of parkland and trails</div>
              <div>🍷 Michelin-starred dining & shopping</div>
              <div>🔒 24/7 community patrol</div>
            </div>
            <Link href="/properties" style={{ display: 'block', background: '#8B6914', color: '#fff', textAlign: 'center', padding: '14px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', marginTop: '24px' }}>
              VIEW LISTINGS IN {hood.name.toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
