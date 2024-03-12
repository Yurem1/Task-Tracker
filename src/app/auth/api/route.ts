import { NextRequest, NextResponse } from 'next/server';
import { Mongo } from '@/app/auth/api/mongo';

/**
 * Handles the POST request for the sign-in page.
 * @param req The incoming request.
 * @returns The response.
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
	const request = await req.json();

  const mongo = new Mongo().dbCollection;
  console.log(await mongo.countDocuments())
  await mongo.insertOne(request);

	return new NextResponse(JSON.stringify(request), {
		headers: {
			"content-type": "application/json",
		},
    status: 200,
    statusText: 'OK',
	});
}

/**
 * Handles the GET request for the sign-in page.
 * @param req The incoming request.
 * @returns The response.
 */
export async function GET(req: NextRequest): Promise<NextResponse> {
	return new NextResponse('Hello World');
}
