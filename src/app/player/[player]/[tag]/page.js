import Header from "../../../../comp/Header";
import WideCard from "../../../../comp/WideCard";
import css from "../../[player]/[tag]/page.module.css";
import UserResult from "../../../../comp/UserResult";
import fetchPlayerData from "../../../../js/function";

export const metadata = {
  title: "Player",
  description: "Player",
};

const player = async ({ params }) => {
  const { player, tag } = params;
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;
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

  const playerMatches = matchDetail.map((match) => {
    const participant = match.info.participants.find(
      (participant) => participant.riotIdGameName === playerData.name
    );
    return participant;
  });

  const mastery = playerData.mastery;
  const championIds = mastery.map((item) => item.championId.toString());

  const fetchChampion = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/14.10.1/data/en_US/champion.json`
  );
  const championData = await fetchChampion.json();

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
  // console.log("マスタリー", playerMatches);

  return (
    <>
      <div className={css.head}>
        <Header />
      </div>
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
                      Points: {champ.masteryData.championPoints}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={css.result}>
          <div className={css.title}>STUTS</div>

          {playerMatches.map((playerMatch, index) => (
            <UserResult key={index} data={playerMatch} />
          ))}
        </div>
      </div>
    </>
  );
};

export default player;
