import React from "react";
import css from "./SignInButton.module.scss";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

const SignInButton = (props) => {
  const signInButton = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <div className={css.main}>
      <button className={css.button} onClick={signInButton}>
        ログイン
      </button>
    </div>
  );
};

export default SignInButton;
