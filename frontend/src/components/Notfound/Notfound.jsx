// // import React from 'react'

// function Notfound(){
//     return(
//         <div>404 Error</div>
//     )
// }

// import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

function Notfound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Player
        src="https://lottie.host/fbec6d06-6a3a-42a7-9bc0-ad305dc43023/i12swbcRNb.json"
        className="player max-w-[300px] w-[80vw]"
        loop
        autoplay
      />

      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default Notfound;
