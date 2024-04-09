import React from "react";
import "./Workdone.css";
import rectangle1 from "./Rectangle1.png";
import rectangle2 from "./Rectangle2.png";
import rectangle3 from "./Rectangle3.png";
function Workdone() {
  return (
    <div className="container">
      <h1 className="b">Выполненные работы</h1>
      <p className="b1">
        Мы собрали информацию по грузам, которые мы уже доставили.У нас
        специальный подход к каждому виду товаров.
      </p>
      <div className="b2">
        <div className="b3">
          <img src={rectangle1} alt="" />
          <h1>Станки и оборудование</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod ut.
          </p>
          <h2>20 000 руб.</h2>
        </div>
        <div className="b3">
          <img src={rectangle2} alt="" />
          <h1>Компоненты и запчасти</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod ut.
          </p>
          <h2>18 000 руб.</h2>
        </div>
        <div className="b3">
          <img src={rectangle3} alt="" />
          <h1>Станки и оборудование</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod ut.
          </p>
          <h2>20 000 руб.</h2>
        </div>
      </div>
    </div>
  );
}

export default Workdone;
