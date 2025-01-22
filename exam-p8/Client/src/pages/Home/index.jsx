import React from "react";
import style from "./index.module.scss";
import Product from "../Product";
const Home = () => {
  return (
    <>
      <div className={style["home"]}>
        <div className={style["words"]}>
          <h2>Shop With Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            assumenda ea quo cupiditate facere deleniti fuga officia.
          </p>
          <div className={style["butons"]}>
            <button className={style["shop"]}>SHOP NOW</button>
            <button className={style["club"]}>CLUB MEMBERSHIP</button>
          </div>
        </div>
      </div>

      <Product/>
    </>
  );
};

export default Home;
