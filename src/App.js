import { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const number1 = (Math.floor(Math.random() * 6)+1).toString();
  const number2 = (Math.floor(Math.random() * 6) +1).toString();

  const randomImg1 = require("./Images/img" + number1 + ".png");
  const randomImg2 = require("./Images/img" + number2 + ".png");



  const RefreshPageHandler = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <div className="">
          <h1>{result}</h1>
          <button className="btn-refresh" onClick={RefreshPageHandler}>Refresh Page</button>
        </div>
        <div className="images">
          <div className="playerOne">
            <img className="img img1" src={randomImg1} />
          </div>
          <div className="playerTwo">
            <img className="img img2" src={randomImg2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
