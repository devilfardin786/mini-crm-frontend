import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/campaigns/history`);

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching campaign history:", error);
    return NextResponse.json({ error: "Failed to fetch campaigns" }, { status: 500 });
  }
}