const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding EstateFlow DB...');

  await prisma.property.deleteMany();
  await prisma.agent.deleteMany();
  await prisma.neighborhood.deleteMany();
  await prisma.blogPost.deleteMany();

  const properties = [
    {
      title: 'The Sky Glass Penthouse',
      location: 'Manhattan, New York',
      price: 14500000,
      beds: 5,
      baths: 6.5,
      sqft: 8200,
      type: 'Penthouse',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
      description: '360-degree Central Park views, private infinity rooftop pool, direct elevator entry, and Smart-Home automation.',
      agent: 'Eleanor Vance'
    },
    {
      title: 'Bel-Air Modernist Sanctuary Villa',
      location: 'Los Angeles, California',
      price: 22000000,
      beds: 7,
      baths: 9.0,
      sqft: 12500,
      type: 'Villa',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      description: 'Gated modern estate featuring a 12-car subterranean garage, private vineyard, zero-edge pool, and luxury wellness wing.',
      agent: 'Marcus Sterling'
    },
    {
      title: 'Waterfront Palm Beach Residence',
      location: 'Palm Beach, Florida',
      price: 11800000,
      beds: 4,
      baths: 5.0,
      sqft: 6400,
      type: 'Waterfront Estate',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
      description: 'Private megayacht dock, lush tropical gardens, coral stone loggias, and sunset ocean views.',
      agent: 'Sophia Laurent'
    }
  ];

  for (const p of properties) {
    await prisma.property.create({ data: p });
  }

  await prisma.agent.createMany({
    data: [
      { name: 'Eleanor Vance', role: 'Managing Partner', sales: '$450M+', specialty: 'Penthouse Architecture', phone: '+1 (212) 555-0192', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
      { name: 'Marcus Sterling', role: 'Senior Vice President', sales: '$620M+', specialty: 'Luxury Waterfronts', phone: '+1 (310) 555-0144', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' }
    ]
  });

  await prisma.neighborhood.createMany({
    data: [
      { name: 'Tribeca', slug: 'tribeca', description: 'Cobblestone streets, historic cast-iron lofts, and top Michelin dining.', avgPrice: '$4,200/sqft', image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=800&auto=format&fit=crop' },
      { name: 'Beverly Hills', slug: 'beverly-hills', description: 'Palatial estates, palm-lined avenues, and world-renowned Rodeo Drive shopping.', avgPrice: '$3,800/sqft', image: 'https://images.unsplash.com/photo-1580654712603-eb43273aff33?q=80&w=800&auto=format&fit=crop' }
    ]
  });

  console.log('EstateFlow DB seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
