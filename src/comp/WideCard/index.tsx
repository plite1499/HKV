// import React, { useEffect, useState } from "react";
import css from "./WideCard.module.scss";

const WideCard = (props) => {
  return (
    <div className={`${css["comp"]}`}>
      <div className={`${css["card"]}`}>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/profileicon/${props.icon}.png`}
          alt="Summoner Icon"
          className={css.image}
        />
      </div>
      <div className={`${css["right"]}`}>
        <p className={`${css["name"]}`}>{props.name}</p>
        <p className={`${css["tag"]}`}>#{props.tag}</p>
        <p className={`${css["level"]}`}>{props.level}</p>
      </div>
    </div>
  );
};

export default WideCard;
