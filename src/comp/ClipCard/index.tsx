"use client";
import React, { useEffect, useState } from "react";
import css from "./ClipCard.module.scss";
import Image from "next/image";
import { storage } from "../../firebase";
import {
  ListResult,
  getDownloadURL,
  getStorage,
  listAll,
  ref,
} from "firebase/storage";

const ClipCard = (props) => {
  const [urls, setUrls] = useState([]);

  const storageRef = ref(storage, "video");
  // console.log("Storage Ref:", storageRef);
  const getAllVideoUrls = async () => {
    try {
      const list: ListResult = await listAll(storageRef);
      const urlPromises = list.items.map((item) => getDownloadURL(item));
      const urls = await Promise.all(urlPromises);
      console.log("Download URLs:", urls);
      setUrls(urls);
    } catch (error) {
      console.error("Error getting download URLs:", error);
    }
  };

  useEffect(() => {
    getAllVideoUrls();
  }, []);

  return (
    <div className={css.comp}>
      <div className={css.flame}>
        {urls.map((url, index) => (
          <video className={css.video} key={index} controls>
            <source src={url} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  );
};

export default ClipCard;
