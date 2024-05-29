import React from "react";
import css from "./Header.module.scss";

const Header = (props) => {
  return (
    <div className={`${css["comp"]}`}>
      <p className={`${css["title"]}`}>HKV.GG</p>
    </div>
  );
};

export default Header;
