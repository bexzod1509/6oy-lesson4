import React from "react";
import "./Staff.css";
import line from "./Line 1.png";
import avatar1 from "./avatar1.png";
import avatar2 from "./avatar2.png";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.png";
import avatar5 from "./avatar5.png";
import avatar6 from "./avatar6.png";
import instagram from "./instagram.png";
import wk from "./wk.png";
import linkedin from "./linkedin.png";
function Staff() {
  return (
    <div className="container">
      <h1 className="e">Сотрудники компании</h1>
      <div className="e1">
        <div className="e2">
          <div className="e3"></div>
          <img src={avatar1} alt="" />
          <div>
            <h1>Антон Макаров</h1>
            <p>Руководитель компании</p>
            <img src={line} alt="" />
            <div className="e4">
              <img src={instagram} alt="" />
              <img src={wk} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        <div className="e2">
          <div className="e3"></div>
          <img src={avatar2} alt="" />
          <div>
            <h1>Иван Аркадьев </h1>
            <p>Менеджер по закупкам</p>
            <img src={line} alt="" />
            <div className="e4">
              <img src={instagram} alt="" />
              <img src={wk} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        <div className="e2">
          <div className="e3"></div>
          <img src={avatar3} alt="" />
          <div>
            <h1>Алина Кравец</h1>
            <p>Сотрудник отдела кадров</p>
            <img src={line} alt="" />
            <div className="e4">
              <img src={instagram} alt="" />
              <img src={wk} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        <div className="e2">
          <div className="e3"></div>
          <img src={avatar4} alt="" />
          <div>
            <h1>Елена Валерьева</h1>
            <p>Главный бухгалтер</p>
            <img src={line} alt="" />
            <div className="e4">
              <img src={instagram} alt="" />
              <img src={wk} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        <div className="e2">
          <div className="e3"></div>
          <img src={avatar5} alt="" />
          <div>
            <h1>Борис Вавилов</h1>
            <p>Бухгалтер</p>
            <img src={line} alt="" />
            <div className="e4">
              <img src={instagram} alt="" />
              <img src={wk} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        <div className="e2">
          <div className="e3"></div>
          <img src={avatar6} alt="" />
          <div>
            <h1>Виктор Козуб</h1>
            <p>Менеджер по закупкам</p>
            <img src={line} alt="" />
            <div className="e4">
              <img src={instagram} alt="" />
              <img src={wk} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
