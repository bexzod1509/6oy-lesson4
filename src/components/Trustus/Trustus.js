import React from "react";
import "./Trustus.css";
import logotip1 from "./logotip1.png";
import logotip2 from "./logotip2.png";
import logotip3 from "./logotip3.png";
import logotip4 from "./logotip4.png";
import logotip5 from "./logotip5.png";
import logotip6 from "./logotip6.png";
import logotip7 from "./logotip7.png";
import logotip8 from "./logotip8.png";
function Trustus() {
  return (
    <div className="container">
      <h1 className="d3">Нам доверяют</h1>
      <div className="d">
        <div className="d1">
          <img src={logotip1} alt="" />
          <h1>Росатом</h1>
          <p>Корпорация атомной энергии</p>
        </div>
        <div className="d1">
          <img src={logotip2} alt="" />
          <br />
          <br />
          <h1>Газпром</h1>
          <p>Энергетическая компания</p>
        </div>
        <div className="d1">
          <img src={logotip3} alt="" />
          <h1>Роснефть</h1>
          <p>Нефтегазовая компания</p>
        </div>
        <div className="d2">
          <img src={logotip4} alt="" />
          <h1>Роскосмос</h1>
          <p>Корпорация в космической отрасли</p>
        </div>
        <div className="d1">
          <img src={logotip5} alt="" />
          <br />
          <br />
          <br />
          <h1>Лукойл</h1>
          <p>Нефтяная компания</p>
        </div>
        <div className="d1">
          <img src={logotip6} alt="" />
          <h1>Интер РАО</h1>
          <p>Энергетическая компания</p>
        </div>
        <div className="d1">
          <img src={logotip7} alt="" />
          <h1>Ростех</h1>
          <p>Промышленная корпорация</p>
        </div>
        <div className="d2">
          <img src={logotip8} alt="" />
          <br />
          <br />
          <br />
          <h1>Банк ВТБ</h1>
          <p>Коммерческий банк</p>
        </div>
      </div>
    </div>
  );
}

export default Trustus;
