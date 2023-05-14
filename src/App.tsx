import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import sunLogo from "../src/data/logo/sun.svg";
import waveOne from "../src/data/logo/Wave-1.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-orange-50 h-[80vh] flex justify-end">
        <img src={sunLogo} alt="" className=" h-28 animate-spin-slow"></img>

        {/* <svg
          className="top-story-wave01"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
        >
          <path d="M0,0 v8 q20,8 50,0 t50,-5 v-8 Z" fill="#77dff2"></path>
        </svg> */}
      </header>
      <section className=" bg-[#77dff2] h-96">
        <img
          src={waveOne}
          alt=""
          className="w-full absolute block bottom-[20%]"
        ></img>
        <div>Titre</div>
      </section>
    </div>
  );
}

export default App;
