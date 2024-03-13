import { IProfile } from "@/utilities/interfaces";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const res = await req.json();

  return new NextResponse(JSON.stringify(req))
}