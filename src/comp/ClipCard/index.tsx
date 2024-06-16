import React from "react";
import css from "./ClipCard.module.scss";
import Image from "next/image";

const ClipCard = (props) => {
  return (
    <div className={`${css["comp"]}`}>
      <div className={`${css["flame"]}`}>
        <div className={`${css["card"]}`}>
          <Image
            src="/lol-Icon.jpeg"
            alt="Summoner Icon"
            width={350}
            height={250}
            className={css.roundImage}
          />
        </div>
        <div className={`${css["right"]}`}>
          <p className={`${css["top"]}`}>{props.title}</p>
          <p className={`${css["mid"]}`}>{props.name}</p>
          <p className={`${css["bot"]}`}>{props.game}</p>
        </div>
      </div>
    </div>
  );
};

export default ClipCard;
