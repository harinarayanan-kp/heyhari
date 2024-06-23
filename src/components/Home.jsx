import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import "../App.css";

//images
import fg from "./pfp_fg.png";
import bg from "./pfp_bg.png";
import pfp from "./pfp_main.png";
import goto from "./goto.png";
import PointerFollowDiv from "./Pointer";

//portfolio images
import img1 from "./portfolioimages/img1.png";
import img2 from "./portfolioimages/img2.png";
import img3 from "./portfolioimages/img3.png";
import img4 from "./portfolioimages/img4.png";
import img5 from "./portfolioimages/img5.png";

import video1 from "../assets/renderfolio.mp4";
import video2 from "../assets/renderfolio2.mp4";
import Tile1 from "./Tile1/Tile1";
import Canvas from "./ThreeD/Canvas";

//parallax img
import layer0 from "../assets/parallax_camera/final.svg";
import layer1 from "../assets/parallax_camera/l1.svg";
import layer2 from "../assets/parallax_camera/l2.svg";
import layer3 from "../assets/parallax_camera/l3.svg";
import layer4 from "../assets/parallax_camera/l4.svg";
import layer5 from "../assets/parallax_camera/l5.svg";

function Button2(props) {
  return (
    <a href={props.link} className={props.className + " button-container"}>
      <button className=" button2">{props.text}</button>
      <div className="button_bg"></div>
    </a>
  );
}

const Home = () => {
  const [hidePointers, setMouseOver] = useState(false);
  const handleMouseEnter = () => {
    setMouseOver(true);
  };
  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  const topDivRef = useRef(null);
  const [topDivHeight, setTopDivHeight] = useState(0);

  useEffect(() => {
    if (topDivRef.current) {
      setTopDivHeight(topDivRef.current.offsetHeight);
    }
  }, []);
  return (
    <div className="home">
      <PointerFollowDiv hide={hidePointers} />
      <div ref={topDivRef}>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Button2 className="" text="HEY" link="/canvas" />
        </div>
      </div>
      <PARALLAX topDivHeight={topDivHeight} />
      <div className="phonk text-white text-4xl">MORE SooooN</div>
      {/* <video className="vidfull" src={video2} autoPlay loop muted /> */}
      {/* <div className="homecenter">
        <div className="introtitle ">Hey, Hari Here</div>
        <div className="squareimg">
          <img className="pfpfg" src={fg} alt="" />
          <img className="pfpimg" src={pfp} alt="" />
          <img className="pfpbg" src={bg} alt="" />
        </div>
      </div> */}
      {/* <video className="vid1" src={video1} autoPlay loop muted /> */}

      {/* <button className="button1"><b>Register</b></button> */}

      {/* <Tile1/> */}
      {/* <Canvas/> */}

      {/* <div className="gridbox">
        <Tile
          img={img1}
          tags={["#web", "#firebase"]}
          link={"https://trek-stepintostyle.web.app/"}
        />
        <Tile
          img={img2}
          tags={["#web", "#portfolio", "#ui"]}
          link={"https://harinarayanan-kp.github.io/portfolio/"}
        />
        <Tile
          img={img3}
          tags={["#web", "#portfolio"]}
          link={"https://trek-stepintostyle.web.app/"}
        />
        <Tile img={img4} tags={["#blender", "#3dmodelling"]} />
        <Tile
          img={img5}
          tags={["#web", "#threejs"]}
          link={"https://harinarayanan-kp.github.io/valentine/"}
        />
      </div> */}
    </div>
  );
};

export default Home;
const Tile = ({ tags, img, link }) => {
  const tagElements = tags.map((tag, index) => (
    <div className="tag" key={index}>
      {tag}
    </div>
  ));

  return (
    <div className="tile">
      {link ? (
        <a rel="noreferrer" target="_blank" href={link} className="goto">
          <img alt="" className="gotoimg" src={goto}></img>
        </a>
      ) : (
        <div className=""></div>
      )}
      <img className="tileimg" src={img} alt="" />
      <div className="tags">{tagElements}</div>
    </div>
  );
};
const PARALLAX = ({ topDivHeight }) => {
  return (
    <div className="parallax-container">
      <ParallaxLayer depth={0.9} initialOffset={topDivHeight}>
        <img src={layer1} alt="Layer 1" />
      </ParallaxLayer>
      <ParallaxLayer depth={0.5} initialOffset={topDivHeight}>
        <img src={layer3} alt="Layer 3" />
      </ParallaxLayer>
      <ParallaxLayer depth={0.4} initialOffset={topDivHeight}>
        <img src={layer4} alt="Layer 4" />
      </ParallaxLayer>
      <ParallaxLayer depth={0.3} initialOffset={topDivHeight}>
        <img src={layer5} alt="Layer 5" />
      </ParallaxLayer>
      <ParallaxLayer depth={0.9} initialOffset={topDivHeight}>
        <img src={layer0} alt="Layer 0" />
      </ParallaxLayer>
      <ParallaxLayer depth={0.7} initialOffset={topDivHeight}>
        <img src={layer2} alt="Layer 2" />
      </ParallaxLayer>
    </div>
  );
};
const ParallaxLayer = ({ depth, initialOffset, children }) => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const translateY = -scrollY * depth + initialOffset * depth;
  return (
    <div
      className="parallax-layer"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      {children}
    </div>
  );
};
