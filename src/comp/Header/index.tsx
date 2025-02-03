import React from "react";
import css from "./Header.module.scss";
import Link from "next/link";
import LoginForm from "../LoginForm";
import DrawerNavi from "../DrawerNavi";

const Header = (props) => {
  return (
    <div className={`${css["comp"]}`}>
      <div className={`${css["left"]}`}>
        <p className={`${css["title"]}`}>HKV.GG</p>
      </div>

      <div className={`${css["link"]}`}>
        <Link href="/home">HOME</Link>
        <Link href="/clips">Clips</Link>
        <LoginForm />
      </div>
      <div className={`${css["drawer"]}`}>
        <DrawerNavi />
      </div>
    </div>
  );
};

export default Header;
