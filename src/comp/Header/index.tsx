import React from "react";
import css from "./Header.module.scss";
import Link from "next/link";
import LoginForm from "../LoginForm";
import DrawerNavi from "../DrawerNavi";

const Header = (props) => {
  return (
    <div className={`${css["comp"]}`}>
      <div className={`${css["left"]}`}>
        <Link href="/home">
          <p className={`${css["title"]}`}>HKV.GG</p>
        </Link>
      </div>

      <div className={`${css["link"]}`}>
        <div className={`${css["links"]}`}>
          <Link className={`${css["linksHome"]}`} href="/home">
            HOME
          </Link>
          <Link className={`${css["linksClips"]}`} href="/clips">
            Clips
          </Link>
        </div>
        <LoginForm />
      </div>
      <div className={`${css["drawer"]}`}>
        <DrawerNavi />
      </div>
    </div>
  );
};

export default Header;
