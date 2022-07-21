import React, { useState, useEffect } from "react";
import styles from "./CarouselView.module.scss";
import Carousel from "../../../component/Carousel";

const data = [
  {
    title: "Анализ",
    text: "Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском необходимо провести анализ других предложений рынка, оценить конкурентов и найти наиболее удобное решение. ",
    img_url: require("../../../image/corousel_img/analiz.png"),
  },
  {
    title: "Визуальное решение",
    text: "Разработка дизайна ключевых страниц магазина – главная, каталог, информационные разделы, раздел корзины, товаров. Для нас главное – передать настроение бренда, сделать удобный сайт. ",
    img_url: require("../../../image/corousel_img/vizual.png"),
  },
  {
    title: "Техническая реализация",
    text: "После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок.",
    img_url: require("../../../image/corousel_img/techic.png"),
  },
  {
    title: "Наполнение контентом ",
    text: "Создание и публикация текстов, а также видео материала. Хороший контент и качественные фотографии привлекают больше посетителей и помогают клиенту лучше ознакомиться с ассортиментом. ",
    img_url: require("../../../image/corousel_img/content.png"),
  },
  {
    title: "Тестирование",
    text: "Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения.",
    img_url: require("../../../image/corousel_img/testing.png"),
  },
];

const CarouselView = () => {
  const [content, setContent] = useState(data);
  return (
    <div className={styles.main}>
      <div className="container">
        <h2>Этапы разработки интернет-магазина</h2>

        <Carousel>
          {content &&
            content.map((item) => (
              <article className={styles.item}>
                <div className={styles.item__content}>
                  <div className={styles.item__text}>
                    <h3>
                      {content.indexOf(item) + 1}. {item.title}
                    </h3>
                    <p>{item.text}</p>
                  </div>
                  <img src={item.img_url} />
                </div>
              </article>
            ))}
        </Carousel>
        <img
          src={require("./../../../image/shape_sphere_grey.png")}
          className={styles.background__sphere}
        />
        <img
          src={require("./../../../image/shape_wave_blue.png")}
          className={styles.background__wave}
        />
      </div>
    </div>
  );
};

export default CarouselView;
