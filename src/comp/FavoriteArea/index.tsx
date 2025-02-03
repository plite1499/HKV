import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc, arrayRemove } from "firebase/firestore";
import { db, auth } from "../../firebase";
import LikeCard from "../../comp/LikeCard";
import { onAuthStateChanged } from "firebase/auth";

const FavoriteArea = () => {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;
  const [likedPlayers, setLikedPlayers] = useState<
    { name: string; tag: string }[]
  >([]);
  const [user, setUser] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        fetchLikedPlayers(user.uid);
      } else {
        setUser(null);
        setLikedPlayers([]);
      }
    });

    return () => unsubscribe();
  }, []);
  // console.log(user?.uid);

  const fetchLikedPlayers = async (uid: string) => {
    try {
      const userLikesRef = doc(db, "like", uid);
      const docSnap = await getDoc(userLikesRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const playersArray = data.likePlayers || [];

        const formattedPlayers = playersArray.map((playerId: string) => {
          const [name, tag] = playerId.split("-");
          return { name, tag };
        });

        setLikedPlayers(formattedPlayers);
      } else {
        setLikedPlayers([]);
      }
    } catch (error) {
      console.error("データ取得エラー: ", error);
    }
  };
  console.log("いいね", likedPlayers);

  const fetchLikedPlayersData = async () => {
    console.log("送信データ:", JSON.stringify({ players: likedPlayers }));

    try {
      const response = await fetch("/api/fetchLikedPlayers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ players: likedPlayers }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("サーバーエラー:", errorData);
        throw new Error("プレイヤーデータの取得に失敗しました");
      }

      const playerDataArray = await response.json();
      console.log("取得したデータ:", playerDataArray);
      setPlayers(playerDataArray);
    } catch (error) {
      console.error("プレイヤーデータの取得に失敗しました:", error);
    }
  };

  useEffect(() => {
    if (likedPlayers.length > 0) {
      fetchLikedPlayersData();
    }
  }, [likedPlayers]);

  const removeLike = async (name: string, tag: string) => {
    if (!user) return;

    const playerId = `${name}-${tag}`;
    const userLikesRef = doc(db, "like", user.uid);

    try {
      await updateDoc(userLikesRef, {
        likePlayers: arrayRemove(playerId),
      });

      setLikedPlayers(
        likedPlayers.filter(
          (player) => player.name !== name || player.tag !== tag
        )
      );
    } catch (error) {
      console.error("いいねの削除エラー:", error);
    }
  };

  return (
    <>
      {players.map((player, index) => (
        <LikeCard
          key={index}
          name={player.data?.name}
          tag={player.data?.tag}
          icon={player.data?.icon}
          onClick={() => removeLike(player.data?.name, player.data?.tag)}
          remove={"closeIcon.svg"}
        />
      ))}
    </>
  );
};

export default FavoriteArea;
