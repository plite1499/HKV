"use client";
import React, { useState } from "react";
import css from "./Clips.module.scss";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";

const UpdataClips = () => {
  const uploadFirebase = (e) => {
    const file = e.target.files[0];

    const storageRef = ref(storage, "video/" + file.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };

  return (
    <>
      <div className={css.clip}>
        <div>
          <div>
            <h2>updata video</h2>
          </div>
          <div>
            <input
              className={css.upLoadInput}
              multiple
              name="imaheURL"
              type="file"
              accept="video/*"
              onChange={uploadFirebase}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdataClips;
