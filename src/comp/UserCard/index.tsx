"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

const UserCard = (props) => {
  const { name, tag, src, url, onClick, icon } = props;
  const [isLoading, setIsLoading] = useState(false); // ローディング状態を追加

  const handleMoreClick = () => {
    setIsLoading(true); // クリック時にローディング状態に変更
  };

  return (
    <Card
      sx={{
        minWidth: { xs: 300, sm: 345 },
        maxWidth: { xs: 300, sm: 345 },
        background: "rgb(15, 18, 20)",
        boxShadow: "none",
        borderRadius: "8px",
        "&:hover": {
          opacity: 0.9,
          border: "2px solid transparent",
          boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.3)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/profileicon/${src}.png`}
          alt="Profile Icon"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="#d4d4d4"
            fontSize={30}
            letterSpacing={1}
            fontWeight={100}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="#989898" fontSize={20}>
            #{tag}
          </Typography>
        </CardContent>
        <CardActions sx={{ background: "none", justifyContent: "flex-end" }} />
      </CardActionArea>

      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          onClick={onClick}
          sx={{
            width: 24,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "opacity 0.3s",
            cursor: "pointer",
            "&:hover": {
              opacity: 0.5,
            },
          }}
        >
          <img src={icon} alt="heart" width="100%" height="100%" />
        </Box>
        {isLoading ? (
          <Typography
            variant="body2"
            color="#23ac5a"
            fontSize={23}
            sx={{ fontWeight: "bold" }}
          >
            Loading...
          </Typography>
        ) : (
          <Link href={url} onClick={handleMoreClick}>
            <Typography
              variant="body2"
              color="#23ac5a"
              fontSize={23}
              sx={{
                transition: "opacity 0.3s",
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.5,
                },
              }}
            >
              more
            </Typography>
          </Link>
        )}
      </Box>
    </Card>
  );
};

export default UserCard;
