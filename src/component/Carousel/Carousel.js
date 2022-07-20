import React, { useState, useEffect, Children, cloneElement } from "react";
import styles from "./Carousel.module.scss";

import ArrowDown from "./../../image/arrow/211687_down_arrow_icon.svg";
import ArrowUp from "./../../image/arrow/211690_up_arrow_icon.svg";

const PAGE_WIDTH = 100;

export const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            minWidth: `calc(${PAGE_WIDTH}%)`,
            maxWidth: `${PAGE_WIDTH}%`,
          },
        });
      })
    );
  }, []);

  const handlshiftleft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      return Math.min(newOffset, 0);
    });
  };

  const handlshiftfight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className={styles.window}>
      <div
        className={styles.all_items_container}
        style={{ transform: `translateX(${offset}%)` }}
      >
        {pages}
      </div>
      <div className={styles.carousel__nav}>
        <button className={styles.carousel__bth} onClick={handlshiftleft}>
          <img src={ArrowUp} className={styles.carousel__bthL_img} />
        </button>
        <button className={styles.carousel__bth} onClick={handlshiftfight}>
          <img src={ArrowDown} className={styles.carousel__bthR_img} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
