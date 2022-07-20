import React, { useState, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import styles from "./Gallery.module.scss";
import Carousel from "../../../component/Carousel";

const data = [
  {
    name: "для оптовых покупок",
    url_img: require("./../../../image/gallery/two-miniature-green-blue-shopping-cart-yellow-background.png"),
  },
  {
    name: "для парикмахеров",
    url_img: require("./../../../image/gallery/close-up-of-hair-dryer-and-brush.png"),
  },
  {
    name: "для кондитеров",
    url_img: require("./../../../image/gallery/deva-williamson-ygTzbTHgDnY-unsplash.png"),
  },
  {
    name: "для флористов",
    url_img: require("./../../../image/gallery/baby-s-breath-flower-bottom-purple-backdrop.png"),
  },
  {
    name: "для визажистов",
    url_img: require("./../../../image/gallery/pexels-shiny-diamond-3373739.png"),
  },
  {
    name: "для художников",
    url_img: require("./../../../image/gallery/color-palette-catalogue-scheme-roller.png"),
  },
];

const Gallery = () => {
  const [quantityColums, setQuantityColums] = useState(
    data.length / 3 + (data.length % 3)
  );
  const matches = useMediaQuery("(min-width: 768px)");
  console.log(quantityColums, "quantityColums");
  console.log(data.length % 2, "data.length %");

  // for(const i = 0; i < quantityColums; i++){
  //   return <></>
  // }

  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}></h2>
          <div className={styles.gallery}>
            {matches ? (
              <>
                {" "}
                {data.map((item) => (
                  <article
                    style={{
                      backgroundImage: `url(${item.url_img})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className={styles.gallery__item}
                  >
                    <a href="#" className={styles.gallery__itemlink}>
                      <div className={styles.gallery__itemoverlayer}>
                        <h4 className={styles.gallery__itemoverlayer_h4}>
                          Онлайн-магазин
                        </h4>
                        <p className={styles.gallery__itemoverlayer_p}>
                          {item.name}
                        </p>
                      </div>
                    </a>
                  </article>
                ))}
              </>
            ) : (
              <Carousel>
                <div className={styles.gallery__colum}>
                  <article
                    style={{
                      backgroundImage: `url(${data[0].url_img})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className={styles.gallery__item}
                  >
                    <a href="#" className={styles.gallery__itemlink}>
                      <div className={styles.gallery__itemoverlayer}>
                        <h4 className={styles.gallery__itemoverlayer_h4}>
                          Онлайн-магазин
                        </h4>
                        <p className={styles.gallery__itemoverlayer_p}>
                          {data[0].name}
                        </p>
                      </div>
                    </a>
                  </article>
                  <article
                    style={{
                      backgroundImage: `url(${data[1].url_img})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className={styles.gallery__item}
                  >
                    <a href="#" className={styles.gallery__itemlink}>
                      <div className={styles.gallery__itemoverlayer}>
                        <h4 className={styles.gallery__itemoverlayer_h4}>
                          Онлайн-магазин
                        </h4>
                        <p className={styles.gallery__itemoverlayer_p}>
                          {data[1].name}
                        </p>
                      </div>
                    </a>
                  </article>
                  <article
                    style={{
                      backgroundImage: `url(${data[2].url_img})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className={styles.gallery__item}
                  >
                    <a href="#" className={styles.gallery__itemlink}>
                      <div className={styles.gallery__itemoverlayer}>
                        <h4 className={styles.gallery__itemoverlayer_h4}>
                          Онлайн-магазин
                        </h4>
                        <p className={styles.gallery__itemoverlayer_p}>
                          {data[2].name}
                        </p>
                      </div>
                    </a>
                  </article>
                </div>
                <div className={styles.gallery__colum}>
                  <article
                    style={{
                      backgroundImage: `url(${data[3].url_img})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className={styles.gallery__item}
                  >
                    <a href="#" className={styles.gallery__itemlink}>
                      <div className={styles.gallery__itemoverlayer}>
                        <h4 className={styles.gallery__itemoverlayer_h4}>
                          Онлайн-магазин
                        </h4>
                        <p className={styles.gallery__itemoverlayer_p}>
                          {data[3].name}
                        </p>
                      </div>
                    </a>
                  </article>
                  <article
                    style={{
                      backgroundImage: `url(${data[4].url_img})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className={styles.gallery__item}
                  >
                    <a href="#" className={styles.gallery__itemlink}>
                      <div className={styles.gallery__itemoverlayer}>
                        <h4 className={styles.gallery__itemoverlayer_h4}>
                          Онлайн-магазин
                        </h4>
                        <p className={styles.gallery__itemoverlayer_p}>
                          {data[4].name}
                        </p>
                      </div>
                    </a>
                  </article>
                  <article
                    style={{
                      backgroundImage: `url(${data[5].url_img})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className={styles.gallery__item}
                  >
                    <a href="#" className={styles.gallery__itemlink}>
                      <div className={styles.gallery__itemoverlayer}>
                        <h4 className={styles.gallery__itemoverlayer_h4}>
                          Онлайн-магазин
                        </h4>
                        <p className={styles.gallery__itemoverlayer_p}>
                          {data[5].name}
                        </p>
                      </div>
                    </a>
                  </article>
                </div>
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
