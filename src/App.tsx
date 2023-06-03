import React from "react";

import "./App.css";
import handIcecream from "./assets/hand-icecream.png";
import oishii from "./assets/おいしいいいいい.svg";

import WaveUp from "./assets/WaveUp";
import Seagull from "./assets/Seagull";
import { MobileMenu } from "./components/Menu/MobileMenu";

function App() {
  return (
    <div className="App bg-orange-50">
      <header className="App-header h-[80vh] flex z-50">
        <MobileMenu></MobileMenu>
        <Seagull className="w-16 absolute left-[68vw] top-[29vh] animate-wiggleSlow drop-shadow-md"></Seagull>
        <Seagull className="w-24 absolute left-[65vw] top-[25vh] animate-wiggle drop-shadow-md"></Seagull>

        <img
          src={oishii}
          alt="Oishii"
          className="absolute h-24 md:h-44 lg:h-48 top-[25vh] left-[10vw] md:top-[20vh]  md:left-[20%] lg:left-[35%] drop-shadow-[0px_3px_0px_rgba(255,255,255,0.99)] "
        ></img>
        <div className="absolute bottom-[21vh] md:bottom-[25vh] lg:bottom-[28vh] xl:bottom-[32vh]">
          <img
            className="w-52 md:w-60 lg:w-80 rotate-12"
            src={handIcecream}
            alt="hand Ice cream"
          />
        </div>
      </header>
      <section className="hero bg-[#77dff2] h-96">
        <WaveUp className="w-full absolute block bottom-[20vh] z-10"></WaveUp>

        <div>Titre</div>
      </section>
    </div>
  );
}

export default App;
