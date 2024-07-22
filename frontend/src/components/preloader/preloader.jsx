// import React from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
import preloaderAnim from "./PreloaderAnimation.json";

const Preloader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-base-100">
      <Player
        src={preloaderAnim}
        className="player max-w-[300px] w-[80vw]"
        loop
        autoplay
      />
    </div>
  );
}

export default Preloader;
