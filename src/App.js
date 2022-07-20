import "./App.scss";
import Header from "./view/Header";
import Order from "./view/Main/Order";
import Drawdown from "./view/Main/Drawdown";
import CarouselView from "./view/Main/CarouselView";
import Gallery from "./view/Main/Gallery";
import Footer from "./view/Footer";
import FormaSend from "./view/Main/FormaSend";
import PageView from "./component/PageView";

import Orders from "./image/Orders.png";
import Card from "./image/Cart.png";

function App() {
  return (
    <div className="App">
      <Header />
      <PageView url_img={Card}>
        <h1 className="title_page1">
          Разработка интернет-магазина с нуля за неделю
        </h1>
        <p className="p_page1">
          Дизайн интернет магазина, элементов микро UX, корзин, личного кабинета
          - от фирменного стиля до пользовательского интерфейса в сжатые сроки с
          командой Virtual Designers
        </p>
        <button className="button">Заказать</button>
      </PageView>
      <Drawdown id="services" />
      <CarouselView id="stages" />
      <Gallery />
      <PageView url_img={Orders}>
        <h2 className="title_page2">Необходимо больше информации?</h2>
        <p className="p_page2">
          Если Вы владелец онлайн-магазина или только начинаете свой путь в
          электронной коммерции и вам нужен уникальный дизайн онлайн магазина
          для стартапа, обратитесь к нашему веб дизайнеру. За выгодную цену и
          короткий период времени, он поможет визуализировать ваш веб проект.
        </p>
        <button className="button">Оставить заявку</button>
      </PageView>
      <FormaSend />
      <Footer />
    </div>
  );
}

export default App;
