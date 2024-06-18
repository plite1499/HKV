import React from "react";
import css from "./Header.module.scss";
import Link from "next/link";
import LoginForm from "../LoginForm";

const Header = (props) => {
  return (
    <div className={`${css["comp"]}`}>
      <div className={`${css["left"]}`}>
        <p className={`${css["title"]}`}>HKV.GG</p>
      </div>
      <div className={`${css["link"]}`}>
        <Link href="home">HOME</Link>
        <Link href="roulettePage">roulette</Link>
        <Link href="clips">Clips</Link>
        <LoginForm />
      </div>
    </div>
  );
};

export default Header;
