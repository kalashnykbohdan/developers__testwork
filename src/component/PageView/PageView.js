import React, { useState, useEffect } from "react";
import styles from "./PageView.module.scss";

const PageView = ({ children, url_img }) => {
  return (
    <>
      <div className={styles.main}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.content__text}>{children}</div>
            <div className={styles.content__img}>
              <img src={url_img} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageView;
