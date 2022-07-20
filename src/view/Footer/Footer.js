import React, { useState, useEffect } from "react";
import styles from "./Footer.module.scss";
import Logo from "../Logo";
import { useMediaQuery } from "usehooks-ts";

const social_icons = [
  {
    name: "facebook",
    url_img: require("./../../image/social_icons/fb.png"),
    url_img1: require("./../../image/social_icons/fc_void.png"),
  },
  {
    name: "telegram",
    url_img: require("./../../image/social_icons/tg.png"),
    url_img1: require("./../../image/social_icons/tg_void.png"),
  },
  {
    name: "viber",
    url_img: require("./../../image/social_icons/viber.png"),
  },
  {
    name: "instagram",
    url_img: require("./../../image/social_icons/insta.png"),
  },
  {
    name: "messenger",
    url_img: require("./../../image/social_icons/whatsapp.png"),
  },
];

const contacts = [
  { name: "Валерия", namber: "+380505859409" },
  { name: "Анна", namber: "+380505859409" },
  { name: "Валерия", namber: "+380505859409" },
];

const Footer = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.content__blok1}>
            <div className={styles.nav}>
              <a href="">
                <Logo />
              </a>
              <div className={styles.social}>
                <ul className={styles.social__list}>
                  {social_icons.map((item, index) => (
                    <li
                      className={
                        index === 3
                          ? styles.social__item + " " + styles.social__item3
                          : styles.social__item
                      }
                    >
                      <a href="">
                        <img
                          src={
                            matches && item.url_img1
                              ? item.url_img1
                              : item.url_img
                          }
                          alt={item.name}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.phone}>
              {contacts.map((item) => (
                <div className={styles.phone__item}>
                  <p className={styles.phone__item_name}>{item.name}</p>
                  <p className={styles.phone__item_namber}>{item.namber}</p>
                </div>
              ))}
            </div>
            <div className={styles.email}>
              <p>hr@d-vs.com</p>
            </div>
          </div>
          <div className={styles.content__blok2}>
            <p>Developers 2018-2022 © All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
