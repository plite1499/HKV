import Image from "next/image";
import css from "./page.module.scss";
import Header from "../comp/Header";
import UserCard from "../comp/UserCard";
import LckResult from "../comp/LckResult";

export default function Home() {
  return (
    <div className={`${css["comp"]}`}>
      <div className={`${css["mach"]}`}>
        <div className={`${css["title"]}`}>
          <p className={`${css["name"]}`}>T1 MACH RESULT</p>
        </div>
        <div className={`${css["result"]}`}></div>
      </div>
    </div>
  );
}
