import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const favorites = await prisma.favorite.findMany();
    return NextResponse.json({ success: true, favorites });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { propertyId, userEmail } = body;
    const favorite = await prisma.favorite.create({
      data: { propertyId: Number(propertyId) },
    });
    return NextResponse.json({ success: true, favorite });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
