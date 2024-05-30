import css from "./UserResult.module.scss";
import Image from "next/image";

const UserResult = ({ data }) => {
  const items = [
    data.item0,
    data.item1,
    data.item2,
    data.item3,
    data.item4,
    data.item5,
  ];

  // console.log(data);

  const kda = data.challenges.kda.toFixed(1);

  return (
    <div className={`${css["comp"]}`}>
      <div className={`${css["champ"]}`}>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/${data.championName}.png`}
          alt="Summoner Icon"
          className={css.champImage}
        />
        <p className={`${css["champName"]}`}>{data.championName}</p>
      </div>
      <div className={`${css.right} ${data.win ? css.win : css.lose}`}>
        <div className={`${css["stuts"]}`}>
          <div className={`${css["leftMicro"]}`}>
            <p className={`${css["kdas"]}`}>
              <span>{data.kills}</span> / {data.deaths} / {data.assists}
            </p>
            <p className={`${css["kda"]}`}>{kda} KDA</p>
          </div>
          <hr />
          <div className={`${css["rightMicro"]}`}>
            <p className={`${css["dmg"]}`}>{data.totalDamageDealt} dmg</p>
            <p className={`${css["cs"]}`}>{data.totalMinionsKilled} cs</p>
            <p className={`${css["ward"]}`}>
              {data.visionWardsBoughtInGame} ward
            </p>
            <p className={`${css["level"]}`}>{data.champLevel} lv</p>
          </div>
        </div>

        <div className={`${css["items"]}`}>
          {items.map(
            (item, index) =>
              item !== 0 && (
                <img
                  key={index}
                  src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/${item}.png`}
                  alt={`item${index}`}
                  width={32}
                  height={32}
                  className={`${css["itemImage"]}`}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default UserResult;
