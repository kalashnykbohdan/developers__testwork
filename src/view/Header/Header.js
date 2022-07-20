import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import styles from "./Header.module.scss";

const Header = () => {
  const [isBurger, setIsBurger] = useState(false);

  const handleburger = () => {
    setIsBurger(!isBurger);
  };

  return (
    <>
      <div className={styles.main}>
        <div className="container">
          <div className={styles.wrap_header}>
            <a href="" className={styles.logo}>
              <Logo />
            </a>

            <button className={styles.burger} onClick={handleburger}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav
              className={
                isBurger ? styles.menu + " " + styles.active : styles.menu
              }
            >
              <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                  <a href="#services" className={styles.menu__button}>
                    Услуги
                  </a>
                </li>
                <li className={styles.menu__item}>
                  <a href="#portfolio" className={styles.menu__button}>
                    Портфолио
                  </a>
                </li>
                <li className={styles.menu__item}>
                  <a href="#stages" className={styles.menu__button}>
                    Этапы
                  </a>
                </li>
                <li className={styles.menu__item}>
                  <a href="#designers" className={styles.menu__button}>
                    Дизайнеры
                  </a>
                </li>
                <li className={styles.menu__item}>
                  <a>
                    <button className={styles.menu__button_order}>
                      Заказать
                    </button>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
