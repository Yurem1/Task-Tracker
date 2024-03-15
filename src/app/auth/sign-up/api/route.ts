import { NextRequest, NextResponse } from 'next/server';
import { HTTPConstants } from '@/utilities/constants';
import { Mongo } from '@/app/auth/api/mongo';

/**
 * Handles the POST request for signing up a user.
 * 
 * @param req - The NextRequest object representing the incoming request.
 * @returns A Promise that resolves to a NextResponse object representing the response to the request.
 */
export async function POST(req: NextRequest): Promise<NextResponse> {

  // Parse the request body as JSON
  const res = await req.json();

  // Create a new instance of the Mongo class with the parsed JSON data
  const client = new Mongo(res);

  // Checks whether the account exists, returns false if not
  if(await client.doesProfileExist()) {
    // Finally returns the response with status code 409
    return new NextResponse(JSON.stringify(res), {
      headers: {
        'Content-Type': 'application/json',
        'Response-Type': 'Error'
      },
      ...HTTPConstants.ACCOUNT_ALREADY_EXISTS
    });
  }

  // Add the profile to the database
  await client.addProfile();

  // Fetch the created profile from the database
  const profile = await client.fetchProfile();
  
  // Finally return the fetched profile from the database
  return new NextResponse(JSON.stringify(profile), {
    headers: {
      'Content-Type': 'application/json'
    },
    ...HTTPConstants.ACCOUNT_CREATED_SUCCESSFULLY
  });
}