import React from "react";

import "./App.css";
import sunLogo from "./icons/sun.svg";
import handIcecream from "./assets/hand-icecream.png";

import WaveUp from "./assets/WaveUp";
import Seagull from "./assets/Seagull";

function App() {
  return (
    <div className="App bg-orange-50">
      <header className="App-header h-[80vh] flex z-50">
        <img
          src={sunLogo}
          alt=""
          className=" h-28 animate-spin-slow absolute right-[10%]"
        ></img>
        <Seagull className="w-24 absolute left-[45%] top-[25%] rotate-12 animate-wiggle"></Seagull>
        <Seagull className="w-16 absolute left-[48%] top-[29%] rotate-12 animate-wiggleSlow"></Seagull>
      </header>
      <section className="hero bg-[#77dff2] h-96">
        <WaveUp className="w-full absolute block bottom-[20vh] z-10"></WaveUp>
        <div className="w-80 absolute bottom-[20vh] md:bottom-[25vh] lg:bottom-[28vh] xl:bottom-[32vh]">
          <img className="rotate-12" src={handIcecream} alt="hand Ice cream" />
        </div>

        <div>Titre</div>
      </section>
    </div>
  );
}

export default App;
