import React, { useState, useEffect } from "react";
import "../App.css";
import SVG from "react-inlinesvg";
import { Player } from "@lottiefiles/react-lottie-player";
import logoAnim from "../lottie/logo.json";
import Home from "./Home";

const HomeNew = () => {
  const [isLoading, setIsLoading] = useState(true); // Initial loading state
  const [showSVG, setShowSVG] = useState(true); // Flag to control SVG visibility
  useEffect(() => {
    const waitThreeSeconds = new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );
    waitThreeSeconds.then(() => setIsLoading(false));
    waitThreeSeconds
      .then(() => new Promise((resolve) => setTimeout(resolve, 3000)))
      .then(() => setShowSVG(false));
  }, []);

  return (
    <div
      style={{
        width:"100%",
        position: "relative",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        minHeight:"100vh",
      }}
    >
        {isLoading ? (
          <div className="loader"></div>
        ) : showSVG ? (
          <Player
            autoplay
            src={logoAnim}
            style={{ height: "300px", width: "300px" }}
          ></Player>
        ) : (
          <div style={{
            width:"100%",
          }}>
            <Home />
          </div>
        )}
    </div>
  );
};

export default HomeNew;
