import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const maxPrice = searchParams.get('maxPrice');

    let properties = await prisma.property.findMany();

    if (properties.length === 0) {
      const initialProps = [
        {
          title: 'The Glass Pavilion Luxury Penthouse',
          location: 'Tribeca, New York, NY',
          price: 8450000,
          beds: 4,
          baths: 4.5,
          sqft: 5200,
          type: 'Penthouse',
          image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
          agent: 'Victoria Vance',
          description: 'A masterpiece of contemporary architecture featuring 360-degree skyline views of Manhattan.',
        },
        {
          title: 'Beverly Hills Modern Architectural Estate',
          location: 'Beverly Hills, Los Angeles, CA',
          price: 14200000,
          beds: 6,
          baths: 8,
          sqft: 9800,
          type: 'Villa',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
          agent: 'Julian Sterling',
          description: 'Infinity pools, subterranean 6-car garage, private screening room, and lush botanical gardens.',
        },
      ];
      await prisma.property.createMany({ data: initialProps });
      properties = await prisma.property.findMany();
    }

    let filtered = properties;
    if (type && type !== 'All') {
      filtered = filtered.filter(p => p.type.toLowerCase() === type.toLowerCase());
    }
    if (maxPrice) {
      filtered = filtered.filter(p => p.price <= Number(maxPrice));
    }

    return NextResponse.json({ success: true, properties: filtered });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
