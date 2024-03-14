import { NextRequest, NextResponse } from 'next/server';

// As of now, this api endpoint serves no purpose.
export async function POST(req: NextRequest): Promise<NextResponse> {
  const res = await req.json();

  return new NextResponse(JSON.stringify(res));
}
