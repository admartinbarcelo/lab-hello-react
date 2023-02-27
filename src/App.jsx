// src/App.js
import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-icons">
          <div className="App-logo">
            <img src={logo} alt="ironhack-logo-xs" />
          </div>
          <div className="App-menu">
            <img src={menu} alt="menu-top-xs.png" />
          </div>
        </div>
        <div className="App-text">
          <h1>Say Hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular front-end library, and
            become a super Ninja developer.
          </p>
          <div className="awesome">Awesome!</div>
        </div>
      </header>
      <div className="icons-boxes">
        <div className="icons-box">
          <img src={icon1} alt="icon1.png" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="icons-box">
          <img src={icon2} alt="icon2.png" />
          <h2>Component</h2>
          <p>Build encapsuled components that manage their state.</p>
        </div>
        <div className="icons-box">
          <img src={icon3} alt="icon3.png" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>

        <div className="icons-box">
          <img src={icon4} alt="icon4.png" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}
export default App;
