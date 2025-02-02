import { db, auth } from "./firebase";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";

export const likePlayer = async (puuid, name, tag) => {
  const user = auth.currentUser;

  if (!user) {
    console.error("ユーザーがログインしていません");
    return;
  }
  const userUID = user.uid;
  const playerRef = doc(db, "likes", userUID, "players", puuid);

  try {
    await setDoc(playerRef, { name, tag }, { merge: true });
    console.log("プレイヤーをいいねしました:", puuid);
  } catch (error) {
    console.error("エラー: いいねの保存に失敗しました", error);
  }
};

export const getLikedPlayers = async () => {
  const user = auth.currentUser;

  if (!user) {
    console.error("ユーザーがログインしていません");
    return [];
  }

  const userUID = user.uid;
  const playersRef = collection(db, "likes", userUID, "players");

  try {
    const snapshot = await getDocs(playersRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("エラー: いいねリストの取得に失敗しました", error);
    return [];
  }
};
