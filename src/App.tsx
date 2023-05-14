import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import sunLogo from "../src/data/logo/sun.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-orange-50 h-32">
        <img src={sunLogo} alt="" className=" h-28 animate-spin-slow"></img>
      </header>
      <section></section>
    </div>
  );
}

export default App;
