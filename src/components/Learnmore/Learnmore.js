import React from "react";
import "./Learnmore.css";
import car from "./track.png";
import icon from "./icon.png";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
function Learnmore() {
  return (
    <div>
      <div className="a">
        <div>
          <h1>Поставщик Дальнего Востока</h1>
          <p>
            Наши клиенты получают полный спектр услуг по работе с Китаем.
            Начиная с подбора производителя заканчивая доставкой товара до
            двери. Настолько прозрачных сделок с Китаем вы еще не осуществляли.
          </p>
          <h2>Узнать больше</h2>
        </div>
        <img src={car} alt="" />
      </div>
      <div className="container">
        <div className="a1">
          <div className="a2">
            <img src={icon} alt="" />
            <h1>Поиск производителей по товару</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod incididunt ut.
            </p>
          </div>
          <div className="a2">
            <img src={icon1} alt="" />
            <h1>Поиск конкретного производителя</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod incididunt ut.
            </p>
          </div>
          <div className="a3">
            <img src={icon2} alt="" />
            <h1>Доставка образцов товаров</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod incididunt ut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learnmore;
