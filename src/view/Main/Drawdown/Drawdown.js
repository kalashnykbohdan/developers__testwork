import React, { useState, useEffect } from "react";
import styles from "./Drawdown.module.scss";
import ArrowDown from "./../../../image/arrow/211687_down_arrow_icon.svg";
import ArrowUp from "./../../../image/arrow/211690_up_arrow_icon.svg";

const data = [
  {
    title: "Дизайн портала",
    text: "Дизайн портала — это оформление контента, совокупность всех графических элементов на веб-странице. Основная задача дизайна — познакомить пользователя со страницей. Продуманный дизайн создает нужное впечатление о компании.",
  },
  {
    title: "Дизайн адаптивной мобильной версии",
    text: "Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия дает наиболее приоритетную информацию, а также позволяет совершать заказ/покупку с минимумом действий. При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана. Для того, чтобы получить рабочий продукт не нужно писать все с нуля — достаточно лишь подправить CSS и HTML. Один URL избавляет нас от ненужных редиректов, и надобности пользователю запоминать адрес мобильной версии.",
  },
  {
    title: "Дизайн десктопной версии",
    text: "Десктопную версию сайта просматривают пользователи со стационарных компьютеров. Основная цель: посерфить, углубиться в детали, получить больше информации, сравнить, выбрать, прицениться.",
  },
  {
    title: "Пользовательский интерфейс",
    text: "Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя. Хороший дизайн пользовательского интерфейса облегчает выполнение поставленной задачи, не привлекая к себе лишнего внимания.",
  },
  {
    title: "Микро UX",
    text: "Микро-анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения. Микро-анимации способны многое объяснить без слов.",
  },
];

const Drawdown = () => {
  const [state, setState] = useState(data);
  return (
    <div className={styles.drawdown}>
      <div className="container">
        <div>
          <h2 className={styles.drawdown__title}>
            Что входит в услугу по созданию дизайна интернет-магазина?
          </h2>
          <ul className={styles.drawdown__list}>
            {state &&
              state.map((item) => (
                <DrawdownItem key={item.title} element={item} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawdown;

const DrawdownItem = ({ element }) => {
  const [active, setActive] = useState(false);
  const handleOnClick = () => {
    setActive(!active);
  };
  return (
    <li className={styles.drawdown__item}>
      <button className={styles.drawdown__itembth} onClick={handleOnClick}>
        <div className={styles.drawdown__wraptitle}>
          <h5
            className={
              active
                ? styles.drawdown__item_title +
                  " " +
                  styles.drawdown__item_title__active
                : styles.drawdown__item_title
            }
          >
            {element.title}
          </h5>
          <img
            src={active ? ArrowUp : ArrowDown}
            className={styles.drawdown__item_arrow}
            alt=""
          />
        </div>
        <p
          className={
            active
              ? styles.drawdown__item_text +
                " " +
                styles.rawdown__item_text_active
              : styles.drawdown__item_text
          }
        >
          {element.text}
        </p>
      </button>
    </li>
  );
};
