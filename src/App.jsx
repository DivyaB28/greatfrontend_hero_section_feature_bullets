import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <main>
        <section className="description">
          <header>
            <h1>
              <div>Premium</div>
              <div>abstract images</div>
            </h1>
          </header>
          <ul>
            <li className="list_container">
              <img
                src="../img/check-line.svg"
                className="icon_bullet"
                alt="icon_bullet"
              />{" "}
              <p> Minimum 5K image resolution</p>
            </li>
            <li className="list_container">
              <img
                src="../img/check-line.svg"
                className="icon_bullet"
                alt="icon_bullet"
              />{" "}
              <p> Various format variants available</p>
            </li>
            <li className="list_container">
              <img
                src="../img/check-line.svg"
                className="icon_bullet"
                alt="icon_bullet"
              />
              <p>Retina display support </p>
            </li>
          </ul>
          <div className="button_container">
            <button className="primary">See pricing</button>
            <button className="secondary">Learn more</button>
          </div>
        </section>
        <section
          className="design"
          alt="background of Permium abstract images"
        ></section>
      </main>
    </div>
  );
}

export default App;
