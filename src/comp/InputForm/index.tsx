import React, { useState, useEffect } from "react";
import css from "./InputForm.module.scss";
import { Button } from "@mui/material";
import UserCard from "../../comp/UserCard";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useLike } from "../../hooks/useLike"; // カスタムフックをインポート

interface PlayerData {
  name: string;
  tag: string;
  icon: string;
}

const InputForm: React.FC = () => {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [players, setPlayers] = useState<PlayerData[]>([]);
  const [user, setUser] = useState(null);

  const handleInputChangeName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setName(event.target.value);
  };

  const handleInputChangeTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value);
  };

  const handleFetchPlayers = async () => {
    try {
      const response = await fetch("/api/fetchPlayerData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, tag, apiKey }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch player data");
      }

      const playerData: PlayerData = await response.json();
      setPlayers([playerData]);
    } catch (error) {
      console.error("プレイヤーデータをフェッチできませんでした:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const { liked, toggleLike } = useLike(players, user);

  return (
    <div>
      <div className={css.search}>
        <div className={css.inputArea}>
          <h1 className={css.searchTitle}>Search Summoner Profile</h1>
          <div className={css.inputWrap}>
            <div className={css.inputs}>
              <input
                className={css.inputName}
                type="text"
                value={name}
                onChange={handleInputChangeName}
                placeholder="summoner"
              />
              <input
                className={css.inputTag}
                type="text"
                value={tag}
                onChange={handleInputChangeTag}
                placeholder="tag"
              />
            </div>
            <Button
              variant="outlined"
              onClick={handleFetchPlayers}
              sx={{
                minWidth: { xs: 50, sm: 100 },
                maxWidth: { xs: 50, sm: 100 },
                minHeight: { xs: 40, sm: 60 },
                borderRadius: { xs: 3, sm: 20 },
                color: "white",
                backgroundColor: "rgba(63, 85, 181, 0.789)",
                border: "none",
                fontSize: { xs: 8, sm: 16 },
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              search
            </Button>
          </div>
        </div>
        <div className={css.card}>
          {players.length > 0 && (
            <UserCard
              key={players[0].name}
              name={players[0].name}
              src={players[0].icon}
              tag={players[0].tag}
              url={`/player/${players[0].name}/${players[0].tag}`}
              onClick={toggleLike} // toggleLikeを渡す
              icon={liked ? "fillHeart.svg" : "heart.svg"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default InputForm;
