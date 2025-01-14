import Header from "../../../../comp/Header";
import WideCard from "../../../../comp/WideCard";
import css from "../../[player]/[tag]/page.module.scss";
import UserResult from "../../../../comp/UserResult";
import fetchPlayerData from "../../../../js/function";

export const metadata = {
  title: "Player",
  description: "Player",
};

type Params = {
  params: {
    player: string;
    tag: string;
  };
};

interface Champion {
  id: string;
  key: string;
  name: string;
}

interface ChampionData {
  data: {
    [key: string]: Champion;
  };
}

const Player = async ({ params }) => {
  const { player, tag } = params as { player: string; tag: string };
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY as string;
  const playerData = await fetchPlayerData(player, tag, apiKey);
  const Id = playerData.matchId;

  const matchDetail = await Promise.all(
    Id.map(async (matchId) => {
      const fetchMatchDetail = await fetch(
        `https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${apiKey}`
      );

      const fullMatchData = await fetchMatchDetail.json();

      return fullMatchData;
    })
  );

  const playerMatches = matchDetail
    .map((match) => {
      const participant = match.info.participants.find(
        (participant) => participant.riotIdGameName === playerData.name
      );

      // participant が見つからない場合は undefined になるので、それをチェックします
      if (participant) {
        return {
          ...participant,
          gameMode: match.info.gameMode, // ここで gameMode を追加します
        };
      }

      return null;
    })
    .filter(Boolean); // 参加者が見つからない試合を除外します

  const mastery = playerData.mastery;
  const championIds = mastery.map((item) => item.championId.toString());

  const fetchChampion = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/14.10.1/data/en_US/champion.json`
  );
  const championData: ChampionData = await fetchChampion.json();

  const filteredChampions = Object.values(championData.data).filter(
    (champion) => championIds.includes(champion.key)
  );

  const championsWithMastery = filteredChampions.map((champion) => {
    const masteryData = mastery.find(
      (item) => item.championId.toString() === champion.key
    );
    return {
      ...champion,
      masteryData,
    };
  });

  return (
    <>
      <div className={css.backGround}>
        <div className={css.top}>
          <WideCard
            name={playerData.name}
            tag={playerData.tag}
            icon={playerData.icon}
          />
        </div>
        <div className={css.mastery}>
          <p className={css.title}>TOP3 MASTERY</p>
          <div className={css.masteryWrap}>
            {championsWithMastery.map((champ, index) => (
              <div key={index} className={css.championContainer}>
                <div className={css.championCard}>
                  <img
                    className={css.masteryIcon}
                    src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/${champ.id}.png`}
                    alt={champ.name}
                  />
                  <div className={css.masteryStuts}>
                    <p className={css.champName}>{champ.name}</p>
                    <p className={css.champLevel}>
                      Level: {champ.masteryData.championLevel}
                    </p>
                    <p className={css.champPoints}>
                      {champ.masteryData.championPoints} pt
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={css.result}>
          <p className={css.resultTitle}>History</p>

          {playerMatches.map((playerMatch, index) => (
            <UserResult key={index} data={playerMatch} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Player;
