"use client";
import React from "react";
import css from "./SignOutButton.module.scss";
import { auth } from "../../firebase";

const SignOutButton = (props) => {
  return (
    <div className={css.main}>
      <button className={css.button} onClick={() => auth.signOut()}>
        ログアウト
      </button>
    </div>
  );
};

export default SignOutButton;
