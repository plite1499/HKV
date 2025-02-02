import css from "./WideCard.module.scss";

const WideCard = (props) => {
  const { name, tag, icon, level, like } = props;
  return (
    <div className={`${css["comp"]}`}>
      <div className={css.overlay}></div>

      <div className={`${css["card"]}`}>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/profileicon/${icon}.png`}
          alt="Summoner Icon"
          className={css.image}
        />
      </div>
      <div className={`${css["right"]}`}>
        <p className={`${css["name"]}`}>{name}</p>
        <p className={`${css["tag"]}`}>#{tag}</p>
        <p className={`${css["level"]}`}>{level}</p>
      </div>
    </div>
  );
};

export default WideCard;
