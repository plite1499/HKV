"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import css from "../../comp/Roulette/Roulette.module.scss";

const Wheel = dynamic(
  () => import("react-custom-roulette").then((mod) => mod.Wheel),
  { ssr: false }
);

const Roulette = () => {
  const [isClient, setIsClient] = useState(false);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSpinClick = () => {
    if (!mustSpin && data.length > 0) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddOption = () => {
    if (inputValue.trim() !== "") {
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;

      const newOption = {
        option: inputValue,
        style: { backgroundColor: randomColor },
      };
      setData((prevData) => [...prevData, newOption]);
      setInputValue("");
    }
  };
  if (!isClient) {
    return null;
  }

  return (
    <div className={css.container}>
      <div className={css.addContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="項目を入力"
          className={css.inputs}
        />
        <button className={css.add} onClick={handleAddOption}>
          追加
        </button>
      </div>

      {data.length > 0 && (
        <div className={css.wheel}>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => setMustSpin(false)}
            radiusLineWidth={2}
          />

          <button className={css.spinButton} onClick={handleSpinClick}>
            SPIN
          </button>
        </div>
      )}
    </div>
  );
};

export default Roulette;
