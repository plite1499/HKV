const fetchPlayerData = async (name, tag, apiKey) => {
  const fetchPlayer = await fetch(
    `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}?api_key=${apiKey}`
  );
  const player = await fetchPlayer.json();

  /////////////////////////////////////////////////////////////////

  //アイコンフェッチ
  const fetchIcon = await fetch(
    `https://jp1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${player.puuid}?api_key=${apiKey}`
  );
  const icon = await fetchIcon.json();

  /////////////////////////////////////////////////////////////////

  //マッチIDフェッチ
  const fetchMatch = await fetch(
    `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${player.puuid}/ids?start=0&count=10&api_key=${apiKey}`
  );
  const matchId = await fetchMatch.json();
  // console.log("マッチ", matchId);

  /////////////////////////////////////////////////////////////////

  return {
    name: player.gameName,
    icon: icon.profileIconId,
    tag: player.tagLine,
    matchId: matchId,
    // matchDetail: matchDetail[0].info.participants,
  };
};

export default fetchPlayerData;
