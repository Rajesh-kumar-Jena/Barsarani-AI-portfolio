import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  return NextResponse.json(
    { error: "Contact form delivery is unavailable. Please email me directly instead." },
    { status: 503 },
  );
}
