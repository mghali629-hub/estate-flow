import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const propertyId = Number(params.id);
    const property = await prisma.property.findUnique({
      where: { id: propertyId },
    });
    if (!property) {
      return NextResponse.json({ success: false, error: 'Property not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, property });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
