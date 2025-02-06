"use client";
import css from "../../app/home/page.module.scss";
import InputForm from "../../comp/InputForm";
import FavoriteArea from "../../comp/FavoriteArea";

const Home = () => {
  return (
    <div className={css.comp}>
      <div className={css.backGround}>
        <InputForm />
        <div className={css.summoner}>
          <div className={css.title}>
            <p className={css.titleName}>Favorite</p>
          </div>
          <div className={css.card}>
            <FavoriteArea />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
