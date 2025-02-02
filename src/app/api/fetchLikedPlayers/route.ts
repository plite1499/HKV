import { NextRequest, NextResponse } from "next/server";
import fetchPlayerData from "../../../js/function";

export async function POST(req: NextRequest) {
  try {
    // リクエストボディからプレイヤーリストを取得
    const { players } = await req.json();

    // データのバリデーション
    if (!players || !Array.isArray(players)) {
      return NextResponse.json(
        { error: "Invalid data format" },
        { status: 400 }
      );
    }

    // APIキーの取得
    const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing API key" }, { status: 500 });
    }

    // 複数のプレイヤーデータを取得
    const results = await Promise.all(
      players.map(async (player) => {
        try {
          const playerData = await fetchPlayerData(
            player.name,
            player.tag,
            apiKey
          );
          return { ...player, data: playerData };
        } catch (error) {
          console.error(
            `プレイヤー ${player.name} の取得に失敗しました:`,
            error
          );
          return { ...player, error: "Failed to fetch" };
        }
      })
    );

    // クライアントにデータを返す
    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error("Error fetching liked player data:", error);
    return NextResponse.json(
      { error: "Failed to fetch liked players" },
      { status: 500 }
    );
  }
}
