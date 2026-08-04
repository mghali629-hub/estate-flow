import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding EstateFlow database...');

  await prisma.property.deleteMany();
  await prisma.agent.deleteMany();

  await prisma.agent.create({
    data: {
      name: 'Harrison Sterling',
      role: 'Managing Partner — Ultra Luxury Portfolio',
      sales: '$4.2 Billion',
      specialty: 'Waterfront Estates & Penthouses',
      phone: '+1 (310) 892-4401',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
    },
  });

  await prisma.property.createMany({
    data: [
      {
        title: 'The Bel Air Grand Villa',
        location: 'Bel Air, Los Angeles, CA',
        price: 34500000,
        beds: 7,
        baths: 11.5,
        sqft: 14200,
        type: 'VILLA',
        agent: 'Harrison Sterling',
        description: 'Private 3-acre architectural estate with infinity pool and panoramic ocean views.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      },
      {
        title: 'Miami Oceanfront Penthouse',
        location: 'Miami Beach, FL',
        price: 18900000,
        beds: 4,
        baths: 5.5,
        sqft: 6800,
        type: 'PENTHOUSE',
        agent: 'Harrison Sterling',
        description: 'Glass-walled sky home with private rooftop pool and 360-degree ocean panoramas.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      },
    ],
  });

  console.log('EstateFlow database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
