import ClipCard from "../../comp/ClipCard";
import Header from "../../comp/Header";
import css from "./page.module.scss";
import UpdataClips from "../../comp/UpdataClips";

export const metadata = {
  title: "clips",
  description: "clips",
};

const Clips = () => {
  return (
    <>
      <div className={css.clip}>
        <div className={css.head}>
          <Header />
        </div>
        <div className={css.upload}>
          <UpdataClips />
        </div>
        <div className={css.title}>
          <h1 className={css.titleText}>Clips</h1>
        </div>

        <div className={css.main}>
          <ClipCard />
        </div>
      </div>
    </>
  );
};

export default Clips;
