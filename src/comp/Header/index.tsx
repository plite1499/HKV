import React from "react";
import css from "./Header.module.scss";
import Link from "next/link";

const Header = (props) => {
  return (
    <div className={`${css["comp"]}`}>
      <div className={`${css["left"]}`}>
        <p className={`${css["title"]}`}>HKV.GG</p>
      </div>
      <div className={`${css["link"]}`}>
        <Link href="home">HOME</Link>
        <Link href="roulettePage">roulette</Link>
      </div>
    </div>
  );
};

export default Header;
