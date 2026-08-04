import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const props = await prisma.property.findMany({ select: { id: true } });
  return props.map((p) => ({ id: String(p.id) }));
}

export default async function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = await prisma.property.findUnique({ where: { id: Number(params.id) } });
  if (!property) notFound();

  const features = [
    'Private swimming pool',
    'Smart home automation',
    'Gourmet kitchen',
    'Marble master bathroom',
    'Home theater system',
    'Climate-controlled wine cellar',
    '3-car private garage',
    'Landscaped garden',
  ];

  return (
    <main style={{ background: '#0f0f0f', minHeight: '100vh', color: '#f0ece3', fontFamily: "'Georgia', serif" }}>
      {/* Gallery Hero */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gridTemplateRows: '280px 280px', gap: '4px', height: '560px' }}>
        <div style={{ gridRow: '1 / 3', background: `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%), url('https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1200&q=80') center/cover` }} />
        <div style={{ background: `url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80') center/cover` }} />
        <div style={{ background: `url('https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80') center/cover`, position: 'relative' }}>
          <div style={{ position: 'absolute', bottom: '20px', right: '20px', background: 'rgba(0,0,0,0.8)', color: '#fff', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer' }}>📷 View all photos</div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '50px 5%', display: 'grid', gridTemplateColumns: '1fr 400px', gap: '60px' }}>
        {/* Left Content */}
        <div>
          <div style={{ marginBottom: '28px' }}>
            <Link href="/properties" style={{ color: '#8B6914', textDecoration: 'none', fontSize: '13px', letterSpacing: '1px' }}>← All Properties</Link>
            <div style={{ display: 'flex', gap: '10px', marginTop: '12px', flexWrap: 'wrap' }}>
              <span style={{ background: '#8B6914', color: '#fff', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>{property.type.toUpperCase()}</span>
              <span style={{ background: 'rgba(139,105,20,0.15)', color: '#8B6914', border: '1px solid rgba(139,105,20,0.4)', padding: '4px 14px', borderRadius: '20px', fontSize: '12px' }}>FOR SALE</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: '400', margin: '16px 0 8px', lineHeight: '1.25' }}>{property.title}</h1>
            <p style={{ color: '#999', fontSize: '1rem' }}>📍 {property.location}</p>
          </div>

          {/* Specs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '40px', padding: '24px', background: 'rgba(139,105,20,0.08)', borderRadius: '14px', border: '1px solid rgba(139,105,20,0.2)' }}>
            {[
              { icon: '🛏', label: 'Bedrooms', value: property.beds },
              { icon: '🛁', label: 'Bathrooms', value: property.baths },
              { icon: '📐', label: 'Square Ft', value: property.sqft.toLocaleString() },
              { icon: '🏠', label: 'Type', value: property.type },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem' }}>{s.icon}</div>
                <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#8B6914', margin: '6px 0 3px' }}>{s.value}</div>
                <div style={{ color: '#777', fontSize: '12px' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '400', color: '#8B6914', marginBottom: '16px', borderBottom: '1px solid rgba(139,105,20,0.2)', paddingBottom: '10px' }}>Property Description</h2>
            <p style={{ lineHeight: '1.9', color: '#bbb', fontSize: '1rem' }}>{property.description}</p>
            <p style={{ lineHeight: '1.9', color: '#bbb', fontSize: '1rem', marginTop: '16px' }}>
              Nestled in the heart of {property.location}, this exceptional {property.type.toLowerCase()} represents the pinnacle of luxury living. Every detail has been meticulously crafted to create a home that is both breathtakingly beautiful and supremely functional.
            </p>
          </section>

          {/* Features */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '400', color: '#8B6914', marginBottom: '20px', borderBottom: '1px solid rgba(139,105,20,0.2)', paddingBottom: '10px' }}>Premium Features</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {features.map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ color: '#8B6914', fontSize: '1.1rem' }}>◆</span>
                  <span style={{ color: '#ccc', fontSize: '0.95rem' }}>{f}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Agent */}
          <section style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', padding: '28px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '400', color: '#8B6914', marginBottom: '20px' }}>Listed By</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #8B6914, #4a3808)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '700', color: '#fff' }}>
                {property.agent.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.1rem', color: '#f0ece3' }}>{property.agent}</div>
                <div style={{ color: '#999', fontSize: '14px' }}>Luxury Property Specialist · EstateFlow</div>
                <div style={{ color: '#8B6914', fontSize: '13px', marginTop: '4px' }}>⭐ 4.9 · 47 sales closed</div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <div style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}>
          <div style={{ background: '#161616', border: '1px solid rgba(139,105,20,0.4)', borderRadius: '20px', padding: '36px' }}>
            <p style={{ color: '#888', fontSize: '12px', letterSpacing: '2px', marginBottom: '6px' }}>ASKING PRICE</p>
            <p style={{ fontSize: '2.4rem', fontWeight: '700', color: '#8B6914', margin: '0 0 6px' }}>${property.price.toLocaleString()}</p>
            <p style={{ color: '#777', fontSize: '13px', marginBottom: '32px' }}>${Math.round(property.price / property.sqft).toLocaleString()} / sq ft</p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <input placeholder="Full Name" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px 16px', color: '#f0ece3', fontSize: '14px', outline: 'none' }} />
              <input type="email" placeholder="Email Address" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px 16px', color: '#f0ece3', fontSize: '14px', outline: 'none' }} />
              <input placeholder="Phone Number" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px 16px', color: '#f0ece3', fontSize: '14px', outline: 'none' }} />
              <input type="date" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px 16px', color: '#f0ece3', fontSize: '14px', outline: 'none' }} />
              <button type="submit" style={{ background: 'linear-gradient(135deg, #8B6914, #5c4410)', color: '#fff', border: 'none', borderRadius: '12px', padding: '16px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', letterSpacing: '1px' }}>
                SCHEDULE VIEWING
              </button>
            </form>

            <div style={{ marginTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}>
              <Link href="/calculator" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#8B6914', textDecoration: 'none', fontSize: '14px', padding: '12px', border: '1px solid rgba(139,105,20,0.3)', borderRadius: '10px' }}>
                🧮 Mortgage Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
