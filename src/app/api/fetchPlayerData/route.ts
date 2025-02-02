import { NextRequest, NextResponse } from "next/server";
import fetchPlayerData from "../../../js/function";

export async function POST(req: NextRequest) {
  const { name, tag, apiKey } = await req.json();

  if (!name || !tag || !apiKey) {
    return NextResponse.json(
      { error: "Missing required parameters" },
      { status: 400 }
    );
  }

  try {
    const playerData = await fetchPlayerData(name, tag, apiKey);
    return NextResponse.json(playerData, { status: 200 });
  } catch (error) {
    console.error("Error fetching player data:", error);
    return NextResponse.json(
      { error: "Failed to fetch player data" },
      { status: 500 }
    );
  }
}
