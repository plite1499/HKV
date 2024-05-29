import React from "react";
import css from "./LckResult.module.scss";
import Image from "next/image";

const LckResult = (props) => {
  return (
    <div className={`${css["comp"]}`}>
      <div className={`${css["team"]}`}>
        <Image
          src="/T1.png"
          alt="Summoner Icon"
          width={80}
          height={80}
          className={css.roundImage}
        />
        <p className={`${css["teamName"]}`}>{props.leftTeam}</p>
      </div>
      <p className={`${css["result"]}`}>{props.stats}</p>
      <div className={`${css["team"]}`}>
        <Image
          src="/geng.png"
          alt="Summoner Icon"
          width={80}
          height={80}
          className={css.roundImage}
        />
        <p className={`${css["teamName"]}`}>{props.rightTeam}</p>
      </div>
    </div>
  );
};

export default LckResult;
