import Image from "next/image";
import css from "./page.module.scss";
import Header from "../comp/Header";
import UserCard from "../comp/UserCard";
import LckResult from "../comp/LckResult";
import Link from "next/link";

export default function Home() {
  return (
    <div className={`${css["comp"]}`}>
      <Link href="home">Home</Link>
    </div>
  );
}
