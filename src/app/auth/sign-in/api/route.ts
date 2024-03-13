import { NextRequest, NextResponse } from 'next/server';
import { Mongo } from '@/app/auth/api/mongo';
import { HTTPConstants } from '@/utilities/constants';
import { IProfile } from '@/utilities/interfaces';

/**
 * Handles the POST request for the sign-in page.
 * @param req The incoming request.
 * @returns The response.
 */
export async function POST(req: NextRequest): Promise<NextResponse> {

  // Parse the request body as JSON
  const res = await req.json();

  // Create a new Mongo client instance with the parsed JSON
  const client = new Mongo(res);

  if(await client.doesProfileExist() === false) {
    return new NextResponse(JSON.stringify(res), {
      headers: {
        'Content-Type': 'application/json'
      },
      ...HTTPConstants.ACCOUNT_NOT_FOUND
    });
  }

  const profile = await client.fetchProfile();

  return new NextResponse(JSON.stringify(profile), {
    headers: {
      'Content-Type': 'application/json'
    }, 
    ...HTTPConstants.ACCOUNT_FOUND_SUCCESSFULLY
  });
}