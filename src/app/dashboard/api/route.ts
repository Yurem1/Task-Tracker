import { IProfile } from "@/utilities/interfaces";
import { NextRequest, NextResponse } from "next/server";
import { HTTPConstants } from "@/utilities/constants";

let profile: IProfile | undefined;

export async function POST(req: NextRequest): Promise<NextResponse> {
  const res = await req.json();
  profile = !!res ? res : profile;
  
  return new NextResponse(JSON.stringify(profile), {
    headers: {
      'Content-Type': 'application/json',
    },
    ...HTTPConstants.ACCOUNT_POSTED_SUCCESSFULLY,
  });
}