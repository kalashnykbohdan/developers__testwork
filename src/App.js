import style from "./App.module.scss";
import Header from "./view/Header";
import Order from "./view/Main/Order";
import Drawdown from "./view/Main/Drawdown";
import CarouselView from "./view/Main/CarouselView";
import Gallery from "./view/Main/Gallery";
import Footer from "./view/Footer";
import FormaSend from "./view/Main/FormaSend";
import PageView from "./component/PageView";

import Orders from "./image/Orders.png";
import Card from "./image/go_to_market_147.png";

function App() {
  return (
    <div className={style.App}>
      <Header />
      <div className={style.wrapper}>
        <div className="container">
          <img
            src={require("./image/shape_cylinder_275.png")}
            className={style.shape_cylinder_275}
          />
          <img
            src={require("./image/shape_wave_258.png")}
            className={style.shape_wave_258}
          />
          <img
            src={require("./image/shape_wave_258.png")}
            className={style.shape_wave_258}
          />
          <img
            src={require("./image/shape_cylinder_278.png")}
            className={style.hape_cylinder_red}
          />
          <img
            src={require("./image/shape_wave_258.png")}
            className={style.shape_wave_259}
          />
          <img
            src={require("./image/shape_wave_blue.png")}
            className={style.shape_wave_260}
          />
          <img
            src={require("./image/shape_sphere_blue.png")}
            className={style.shape_wave_blue}
          />
          <img
            src={require("./image/shape_sphere_264.png")}
            className={style.shape_sphera_ping1}
          />
          <img
            src={require("./image/shape_sphere_264.png")}
            className={style.shape_sphera_ping2}
          />
          <div className={style.background__eclips_left}></div>
          <div className={style.background__eclips_right}></div>
          <PageView url_img={Card}>
            <h1 className={style.title_page1}>
              Разработка интернет-магазина с нуля за неделю
            </h1>
            <p className={style.p_page1}>
              Дизайн интернет магазина, элементов микро UX, корзин, личного
              кабинета - от фирменного стиля до пользовательского интерфейса в
              сжатые сроки с командой Virtual Designers
            </p>
            <button className="button">Заказать</button>
          </PageView>
        </div>
      </div>
      <Drawdown id="services" />
      <CarouselView id="stages" />
      <Gallery />
      <div className={style.wrapper}>
        <div className="container">
          <img
            src={require("./image/shape_sphere_blue.png")}
            className="background__img2"
          />
          <PageView url_img={Orders}>
            <h2 className={style.title_page2}>Необходимо больше информации?</h2>
            <p className={style.p_page2}>
              Если Вы владелец онлайн-магазина или только начинаете свой путь в
              электронной коммерции и вам нужен уникальный дизайн онлайн
              магазина для стартапа, обратитесь к нашему веб дизайнеру. За
              выгодную цену и короткий период времени, он поможет
              визуализировать ваш веб проект.
            </p>
            <button className="button">Оставить заявку</button>
          </PageView>
        </div>
      </div>
      <FormaSend />
      <Footer />
    </div>
  );
}

export default App;
