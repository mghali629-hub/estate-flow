import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    user: {
      id: 'usr_ef_investor_551',
      name: 'Harrison Sterling',
      email: 'h.sterling@sterling-holdings.com',
      role: 'VIP_BUYER',
    },
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      token: 'ef_jwt_lux_8819203',
      user: {
        id: 'usr_ef_investor_551',
        email: body.email || 'client@estateflow.com',
        role: 'CLIENT',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Invalid authentication request' }, { status: 400 });
  }
}
