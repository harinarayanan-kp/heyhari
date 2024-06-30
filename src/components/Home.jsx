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

import logoWhite from "../assets/images/logo white.svg";

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
import Music from "./Music";
import { Link } from "react-router-dom";

import emoji1 from "../assets/images/emoji_glass_thumbsup.png";
import Marquee from "react-fast-marquee";

function Button2(props) {
  return (
    <a href={props.link} className={props.className + " button-container"}>
      <button className=" button2">{props.text}</button>
      <div className="button_bg"></div>
    </a>
  );
}

const Home = () => {
  const [pointerStyle, setPointerStyle] = useState(0);
  // const handlePointerstyle = (i) => {
  //   setPointerStyle(i);
  // };
  const [hidePointers, setMouseOver] = useState(false);
  const handleMouseEnter = () => {
    setMouseOver(true);
  };
  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  const topDivRef = useRef(null);
  const [topDivHeight, setTopDivHeight] = useState(0);
  const [dimension, setDimension] = useState(
    window.innerHeight > window.innerWidth
      ? window.innerWidth
      : window.innerHeight
  );
  const handleResize = () => {
    setDimension(
      window.innerHeight > window.innerWidth
        ? window.innerWidth
        : window.innerHeight
    );
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (topDivRef.current) {
      setTopDivHeight(topDivRef.current.offsetHeight);
    }
  }, []);
  return (
    <div className="home">
      <PointerFollowDiv hide={hidePointers} customPointer={pointerStyle} />
      <div
        ref={topDivRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            padding: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: 100,
          }}
        >
          <a href="./">
            <img src={logoWhite} alt="Layer 2" />
          </a>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Button2 text="CONTACT" link="./music" />
          </div>
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Button2 className="" text="HEY" link="/canvas" />
        </div>
      </div>
      <PARALLAX topDivHeight={topDivHeight} />
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Button2
          className=""
          text="View Gallery"
          link="https://harinarayanan-kp.github.io/portfolio/"
        />
      </div>
      <Marquee>
        <div>
          <div
            style={{
              fontSize: "2rem",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
            className="phonk"
          >
            <img style={{ height: 80 }} src={emoji1} alt="emoji" />I breath RAW{" "}
            <div style={{ color: "yellow" }}>CSS</div>
          </div>
        </div>
        <div style={{paddingLeft:"40px", paddingRight:"40px"}}>
          <div
            style={{
              fontSize: "2rem",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
            className="phonk"
          >
            <img style={{ height: 80 }} src={emoji1} alt="emoji" />
            <div style={{ color: "yellow" }}>FIGMA</div>flows my veins
          </div>
        </div>
      </Marquee>
      <div
        onMouseEnter={() => {
          // setPointerStyle(1);
        }}
        onMouseLeave={() => {
          // setPointerStyle(0);
        }}
      >
        <Music
          size={
            window.innerHeight > window.innerWidth
              ? window.innerWidth - 50
              : window.innerHeight * 0.75
          }
        />
      </div>

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
    <div
      style={{
        width:
          window.innerHeight > window.innerWidth
            ? window.innerWidth - 50
            : window.innerHeight - 50,
        height:
          window.innerHeight > window.innerWidth
            ? window.innerWidth - 50
            : window.innerHeight - 50,
      }}
    >
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
  const translateY = -scrollY * depth;
  return (
    <div
      className="parallax-layer"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      {children}
    </div>
  );
};
