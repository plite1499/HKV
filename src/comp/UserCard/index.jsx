"use client";

import React, { useEffect, useState } from "react";
import css from "./UserCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const UserCard = (props) => {
  return (
    <>
      <Link href={props.url}>
        <div className={`${css["flame"]}`}>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/profileicon/${props.src}.png`}
            alt="Summoner Icon"
            width={250}
            height={250}
            className={css.roundImage}
          />
          <div className={css.title}>
            <p className={css.name}>{props.name}</p>
            <p className={css.tag}>#{props.tag}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default UserCard;
