import React from "react";
import "./Stages.css";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
function Stages() {
  return (
    <div className="container">
      <h1 className="c2">Этапы поставки </h1>
      <div className="c">
        <div className="c1">
          <img src={image1} alt="" />
          <div>
            <h1>Предложение от продавца</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
              duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus
              turpis massa tincidunt. Venenatis urna cursus eget nunc
              scelerisque viverra mauris in.{" "}
            </p>
          </div>
        </div>
        <div className="c1">
          <img src={image2} alt="" />
          <div>
            <h1>Доставка</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
              duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus
              turpis massa tincidunt. Venenatis urna cursus eget nunc
              scelerisque viverra mauris in.{" "}
            </p>
          </div>
        </div>
        <div className="c1">
          <img src={image3} alt="" />
          <div>
            <h1>Установка у клиента</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
              duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus
              turpis massa tincidunt. Venenatis urna cursus eget nunc
              scelerisque viverra mauris in.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stages;
