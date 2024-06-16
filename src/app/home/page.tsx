import Header from "../../comp/Header";
import UserCard from "../../comp/UserCard";
import css from "../page.module.scss";
import fetchPlayerData from "../../js/function";
import InputForm from "../../comp/InputForm";

export const metadata = {
  title: "Home",
  description: "home",
};

const Home = async () => {
  //apiKey
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

  //fetch
  const players = await Promise.all([
    fetchPlayerData("free young thug", "NSMR", apiKey),
    fetchPlayerData("namateriyaki", "jp300", apiKey),
    fetchPlayerData("Amber7se", "TUYOI", apiKey),
    fetchPlayerData("25歳独身工場勤務男性", "派遣社員", apiKey),
    fetchPlayerData("せやかてくどう", "1111", apiKey),
    fetchPlayerData("陰屁現実 HAL", "TSM", apiKey),
    fetchPlayerData("WkeyAlwaysWithU", "4444", apiKey),
    fetchPlayerData("LOUD hairLess", "9999", apiKey),
    fetchPlayerData("五十嵐", "MGSTK", apiKey),
    fetchPlayerData("第85回税の書道展努力賞受賞者", "青色申告", apiKey),
    fetchPlayerData("STAMPEDE", "JP2", apiKey),
    fetchPlayerData("Kor No1 MID", "JP1", apiKey),
  ]);

  return (
    <div className={css.comp}>
      <Header />

      <div className={css.backGround}>
        <InputForm />
        <div className={css.summoner}>
          <div className={css.title}>
            <p className={css.name}>HKV.SUMMONERS</p>
          </div>
          <div className={css.card}>
            <div className={css.cardWrap}>
              {players.map((player, index) => (
                <UserCard
                  key={index}
                  name={player.name}
                  src={player.icon}
                  tag={player.tag}
                  url={`/player/${player.name}/${player.tag}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
