import React from "react";
import "./Footer.css";
import insta from "./Group 875.png";
import facebook from "./Group 876.png";
import arrow from "./Arrow 1.png";
function Footer() {
  return (
    <div className="color">
      <div className="container">
        <div className="f">
          <div className="f1">
            <h1>LOGO</h1>
          </div>
          <div className="f2">
            <p>Каталог</p>
            <p>о компании</p>
            <p>Индивидуальная</p>
            <p>Партнерам</p>
          </div>
          <div className="f2">
            <p>2D, 3D модели</p>
            <p>Шоу-румы</p>
            <p>Дилерам</p>
            <p>Контакты</p>
            <p>Конфигуратор</p>
          </div>
          <div className="f3">
            <img src={insta} alt="" />
            <img src={facebook} alt="" />
            <p className="f5">+38 (099)-638-45-37</p>
            <button>
              <p>Персональная консультация</p>
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
        <p className="f4">© 1993–2021 Интернет-магазин «LOGO» — truck</p>
      </div>
    </div>
  );
}

export default Footer;
