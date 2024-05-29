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

  console.log("プレイヤーマッチ", playerMatches);
  // console.log("ログ", matchDetail[0].info);

  return (
    <>
      <div className={css.head}>
        <Header />
      </div>
      <div className={css.backGround}>
        <div className={css.title}>STUTS</div>
        <div className={css.top}>
          <WideCard
            name={playerData.name}
            tag={playerData.tag}
            icon={playerData.icon}
          />
        </div>
        <div className={css.result}>
          {playerMatches.map((playerMatch, index) => (
            <UserResult key={index} data={playerMatch} />
          ))}
        </div>
      </div>
    </>
  );
};

export default player;
