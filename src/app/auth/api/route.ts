import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
	const request = await req.json();

	return new NextResponse(JSON.stringify(request), {
		headers: {
			"content-type": "application/json",
		},
	});
}

export async function GET(req: NextRequest): Promise<NextResponse> {
	return new NextResponse('Hello World');
}
