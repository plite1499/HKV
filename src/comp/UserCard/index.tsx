"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const UserCard = (props) => {
  return (
    <>
      <Card
        sx={{
          minWidth: { xs: 300, sm: 345 },
          maxWidth: { xs: 300, sm: 345 },

          background: "none",
          boxShadow: "none",
          border: "1px solid #666666",
          borderRadius: "8px",
          "&:hover": {
            border: "2px solid #00c3ff",
          },
        }}
      >
        <Link href={props.url}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/profileicon/${props.src}.png`}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="#d4d4d4"
                fontSize={20}
                letterSpacing={1}
                fontWeight={100}
              >
                {props.name}
              </Typography>
              <Typography variant="body2" color="#989898" fontSize={18}>
                #{props.tag}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                background: "none",
                justifyContent: "flex-end",
              }}
            >
              <Button size="medium" color="primary" sx={{ color: "#209f9f" }}>
                More
              </Button>
            </CardActions>
          </CardActionArea>
        </Link>
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      </Card>
    </>
  );
};

export default UserCard;
