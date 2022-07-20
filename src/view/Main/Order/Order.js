import React, { useState, useEffect } from "react";
import styles from "./Order.module.scss";
// import Card from "../../../go_to_market.147.png";

const Order = () => {
  return (
    <div className={styles.main}>
      <img
        src={require("../../../png_bg/Ellipse_2.png")}
        className={styles.bg__eclipse_small}
      />
      <img
        src={require("../../../png_bg/Ellipse_2_big.png")}
        className={styles.bg__eclipse2_big}
      />

      <img
        src={require("../../../png_bg/shape_wave_258.png")}
        className={styles.bg__wave_2}
      />
      <img
        src={require("../../../png_bg/Ellipse_3.png")}
        className={styles.bg__eclipse3}
      />

      <img
        src={require("../../../png_bg/shape_sphere_264.png")}
        className={styles.bg__sphere_1}
      />
      <img
        src={require("../../../png_bg/Ellipse_3_left.png")}
        className={styles.bg__eclipse_3left}
      />
      <img
        src={require("../../../png_bg/shape_sphere_264.png")}
        className={styles.bg__sphere_4}
      />

      <div className="container">
        <div className={styles.content}>
          <div
            className={styles.content__blok + " " + styles.content__blok_img}
          >
            <img
              src={require("../../../png_bg/shape_cylinder_278.png")}
              className={styles.bg__cylinder_red}
            />
            <img
              src={require("../../../png_bg/shape_wave_257.png")}
              className={styles.bg__wave_blue}
            />
            <img
              src={require("../../../png_bg/basket.png")}
              className={styles.bg__card}
            />
            <img
              src={require("../../../png_bg/shape_wave_258.png")}
              className={styles.bg__wave_1}
            />
            <img
              src={require("../../../png_bg/shape_cylinder_275.png")}
              className={styles.bg__cylinder_blue}
            />
            <img
              src={require("../../../png_bg/shape_sphere_264.png")}
              className={styles.bg__sphere_2}
            />
            <img
              src={require("../../../png_bg/shape_sphere_267.png")}
              className={styles.bg__sphere_3}
            />
          </div>

          <div
            className={styles.content__blok + " " + styles.content__blok_text}
          >
            <h1>Разработка интернет-магазина с нуля за неделю</h1>
            <p>
              Дизайн интернет магазина, элементов микро UX, корзин, личного
              кабинета - от фирменного стиля до пользовательского интерфейса в
              сжатые сроки с командой Virtual Designers
            </p>
            <button className="button">Заказать</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
