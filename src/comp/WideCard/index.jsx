// import React, { useEffect, useState } from "react";
import css from "./WideCard.module.scss";
import Image from "next/image";
import fetchPlayerData from "../../js/function";

const WideCard = (props) => {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

  return (
    <div className={`${css["comp"]}`}>
      <div className={`${css["card"]}`}>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/profileicon/${props.icon}.png`}
          alt="Summoner Icon"
          width={150}
          height={150}
          className={css.roundImage}
          priority="true"
        />
        <p className={`${css["name"]}`}>{props.name}</p>
      </div>
      <div className={`${css["right"]}`}>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/profileicon/${props.icon}.png`}
          alt="Summoner Icon"
          width={150}
          height={150}
          className={css.rightImage}
          priority="true"
        />
      </div>
    </div>
  );
};

export default WideCard;
