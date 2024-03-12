import { NextRequest, NextResponse } from 'next/server';
import { Mongo } from '@/app/auth/api/mongo';

/**
 * Handles the POST request for the sign-in page.
 * @param res The incoming request.
 * @returns The response.
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  const res = await req.json();

  const client = new Mongo(res);

  if(await client.doesProfileExist()) {
    return new NextResponse(JSON.stringify(res), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 409,
      statusText: 'Account already exists',
    });
  }

	return new NextResponse(JSON.stringify(res), {
		headers: {
			'Content-Type': 'application/json',
		},
    status: 200,
    statusText: 'OK',
	});
}