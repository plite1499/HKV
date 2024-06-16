// "use client";

import Roulette from "../../comp/Roulette/index";
import Accordion from "../../comp/Accordion/index";
import css from "../roulettePage/page.module.css";
import Header from "../../comp/Header/index";

export const metadata = {
  title: "roulette",
  description: "roulette",
};
const roulettePage = () => {
  return (
    <>
      <div className={css.comp}>
        {/* <div className={css.backGround}> */}
        <div className={css.head}>
          <Header />
        </div>
        <div className={css.roulette}>
          <div className={css.inner}>
            <Roulette />
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default roulettePage;
