"use client";

import React from "react";
import css from "./page.module.scss";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import UserInfo from "../UserInfo";
import SignInButton from "../SignInButton";
import SignOutButton from "../SignOutButton";

const LoginForm = (props) => {
  const [user] = useAuthState(auth);

  return (
    <div className={css.main}>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

export default LoginForm;
