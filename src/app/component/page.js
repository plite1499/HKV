import UserCard from "../../comp/UserCard";
import UserResult from "../../comp/UserResult";
import Accordion from "../../comp/Accordion";
import LckResult from "../../comp/LckResult";
import WideCard from "../../comp/WideCard";
import ClipCard from "../../comp/ClipCard";
import Header from "../../comp/Header";

// const Data = async () => {
//   // ワードプレスからデータを取得
//   const res = await fetch("https://hkv.gg.royall.jp/wp-json/wp/v2/posts");
//   const data = await res.json();
// };

const comp = async () => {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;
  const gameName = "free young thug";
  const tagLine = "NSMR";
  const region = "jp1";

  const res = await fetch(
    `https://asia.api.riotgames.com/riot/account/v1/accounts/by-puuid/Z36bNBZbNYtqgbMM5ZCh0ai4lGlzeJPD21QHuVRABi19lkoS-Xst2O1BtMfuUxMXnBKPADnQOMEeEg?api_key=RGAPI-c76a1205-79c7-4466-8197-1b57bcb5861e`
  );
  const data = await res.json();

  console.log(data);

  return (
    <div>
      <p>ccccccc</p>
      <UserCard name={data.gameName} />
      <UserResult result="25/5/11" />
      <Accordion title="VALORANT" summary="A" />
      <LckResult leftTeam="T1" rightTeam="Geng" stats="T1 WIN" />
      <WideCard name="free young thug" />
      <ClipCard title="penta kill" name="こじ" game="league of legends" />
      <Header />
    </div>
  );
};

export default comp;
