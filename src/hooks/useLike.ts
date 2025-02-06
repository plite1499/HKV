import { useState, useEffect } from "react";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../firebase";

export const useLike = (
  players: { name: string; tag: string }[],
  user: any
) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (!user || players.length === 0) return;

    const fetchLikeStatus = async () => {
      const uid = user.uid;
      const playerId = `${players[0].name}-${players[0].tag}`;
      const userLikesRef = doc(db, "like", uid);

      try {
        const docSnap = await getDoc(userLikesRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setLiked(data.likePlayers?.includes(playerId) ?? false);
        }
      } catch (error) {
        console.error("いいね状態の取得エラー:", error);
      }
    };

    fetchLikeStatus();
  }, [user, players]);

  const toggleLike = async () => {
    if (!user || players.length === 0) return;

    const uid = user.uid;
    const playerId = `${players[0].name}-${players[0].tag}`;
    const userLikesRef = doc(db, "like", uid);

    try {
      if (liked) {
        await updateDoc(userLikesRef, {
          likePlayers: arrayRemove(playerId),
        });
      } else {
        await setDoc(
          userLikesRef,
          { likePlayers: arrayUnion(playerId) },
          { merge: true }
        );
      }

      setLiked(!liked);
    } catch (error) {
      console.error("いいねの更新エラー:", error);
    }
  };

  return { liked, toggleLike };
};
