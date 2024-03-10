import React from "react";
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

const Home = () => {
  return (
    <div className="home">
      <div className="column1">
        <div className="homecenter">
          <div className="introtitle">Hey, Hari Here</div>
          <div className="squareimg">
            <img className="pfpfg" src={fg} alt="" />
            <img className="pfpimg" src={pfp} alt="" />
            <img className="pfpbg" src={bg} alt="" />
          </div>
        </div>
        <div className="gridbox">
          <Tile
            img={img1}
            tags={["#web", "#firebase"]}
            link={"https://trek-stepintostyle.web.app/"}
          />
          <Tile
            img={img2}
            tags={["#web", "#portfolio",  "#ui"]}
            link={"https://harinarayanan-kp.github.io/portfolio/"}
          />
          <Tile
            img={img3}
            tags={["#web", "#portfolio"]}
            link={"https://trek-stepintostyle.web.app/"}
          />
          <Tile
            img={img4}
            tags={["#blender", "#3dmodelling"]}
          />
          <Tile
            img={img5}
            tags={["#web", "#threejs"]}
            link={"https://harinarayanan-kp.github.io/valentine/"}
          />
        </div>
      </div>
      <PointerFollowDiv />
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
