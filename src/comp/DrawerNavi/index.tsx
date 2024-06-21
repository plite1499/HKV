"use client";

import React, { useState } from "react";
import css from "./DrawerNavi.module.scss";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import LoginForm from "../LoginForm";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import DehazeIcon from "@mui/icons-material/Dehaze";

const DrawerNavi = (props) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, backgroundColor: "#333", height: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        <LoginForm />
      </List>
      <List sx={{ color: "#fff" }}>
        {[
          {
            text: "HOME",
            icon: <HomeIcon sx={{ color: "#fff" }} />,
            href: "/home",
          },
          {
            text: "Roulette",
            icon: <TrackChangesIcon sx={{ color: "#fff" }} />,
            href: "/roulettePage",
          },
          {
            text: "Clips",
            icon: <OndemandVideoIcon sx={{ color: "#fff" }} />,
            href: "/clips",
          },
        ].map(({ text, icon, href }) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              "&:hover": {
                backgroundColor: "#555",
              },
            }}
          >
            <ListItemButton component={Link} href={href}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Button onClick={toggleDrawer(true)} sx={{ minWidth: 0, padding: 0 }}>
        <DehazeIcon sx={{ color: "#fff", fontSize: 30 }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default DrawerNavi;
