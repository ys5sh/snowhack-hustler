import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { query, location } = await req.json();

    if (!query || !location) {
      return NextResponse.json(
        { error: "Missing query or location" },
        { status: 400 }
      );
    }

    const serpRes = await fetch(
      `https://serpapi.com/search?engine=google_jobs&api_key=68dd363995d240eda99b6720a710984630c2ae355855220e3abbce871d636dfa&q=${encodeURIComponent(
        "SOFTWARE DEVELOPER"
      )}&location=${encodeURIComponent(location)}&output=json`,
      { method: "GET" }
    );

    const data = await serpRes.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Failed to fetch from SerpAPI", details: error },
      { status: 500 }
    );
  }
}
