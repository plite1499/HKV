"use client";

import UserCard from "../../comp/UserCard";
import css from "../../app/home/page.module.scss";
import InputForm from "../../comp/InputForm";
import { getDatabase, ref, set, update, onValue } from "firebase/database";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

const Home = () => {
  //apiKey
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  console.log("ユーザー", user?.uid);

  useEffect(() => {
    const dataRef = ref(db, "users/uid");

    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      console.log("データの内容:", data);
      setUserData(data);
    });
    return () => unsubscribe();
  }, []);

  console.log("データ", userData);

  return (
    <div className={css.comp}>
      <div className={css.backGround}>
        <InputForm />
        <div className={css.summoner}>
          <div className={css.title}>
            <p className={css.titleName}>お気に入り</p>
          </div>
          <div className={css.card}>
            <div className={css.cardWrap}>
              {/* {player.map((player, index) => (
                <UserCard
                  key={index}
                  name={player.name}
                  src={player.icon}
                  tag={player.tag}
                  url={`/player/${player.name}/${player.tag}`}
                />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
