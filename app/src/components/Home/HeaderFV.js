import React from "react";
import "styles/Home/headerFV.css";
import buttonSprite from "assets/img/buttonSprite.png";
import { useNavigate } from "react-router-dom";

import doodle1 from "assets/img/doodle1.png";
import doodle2 from "assets/img/doodle2.png";
import logo from "assets/img/DJlogoC.png";
import logo2 from "assets/img/DJlogo.png";
import logoDoodle from "assets/img/logoDoodle.gif";

export default function HeaderFV({ dL }) {
  const navigate = useNavigate();
  return (
    <div id="HeaderFV">
      <div className="maxWidthContainer">
        {/*<div className="column11">
          <div className="headerFVContent">
            
            <h1>Free to Play</h1>
            <h1>Free to Earn</h1>
            <div className="column11">
              <img src={doodle1} alt="doodle1" id="doodle1" />
              <h4>
                So you think you have what it takes to be 1 of 8,888 pro
                jumpers... Prove it and win up to $10,000 every month. What are
                you waiting for? START JUMPING!!!
              </h4>
            </div>
            <a href={dL} target="_blank" rel="noreferrer">
              <div className="headerNavItemAccent">
                <div style={{ zIndex: 5 }}>Join Now</div>
                <img
                  src={buttonSprite}
                  alt="buttonSprite"
                  className="headerButtonSprite"
                />
              </div>
            </a>
          </div>
          <div className="headerFVImage removeOnSmallScreen">
            <img src={doodle2} alt="doodle2" id="doodle2" />
  </div>
        </div>*/}
        <div className="center">
          <img
            src={logo}
            alt="logo"
            id="hFVLogo"
            className="removeOnSmallScreen"
          />
          <img
            src={logo2}
            alt="logo2"
            id="hFVLogo"
            className="removeOnBigScreen"
          />
          <img
            src={logoDoodle}
            alt="logoDoodle"
            id="logoDoodle"
            className="removeOnSmallScreen"
          />
          <div className="flex">
            <a href={dL} target="_blank" rel="noreferrer">
              <div className="headerNavItemAccent">
                <div style={{ zIndex: 5 }}>Join Discord</div>
                <img
                  src={buttonSprite}
                  alt="buttonSprite"
                  className="headerButtonSprite"
                />
              </div>
            </a>
            <div
              className="headerNavItemAccent"
              onClick={() => {
                navigate("/play");
              }}
            >
              <div style={{ zIndex: 5 }}>Play Now</div>
              <img
                src={buttonSprite}
                alt="buttonSprite"
                className="headerButtonSprite"
              />
            </div>
          </div>
          <h4 id="hFVText" style={{ color: "white" }}>
            Think you have what it takes to jump your way onto our whitelist?
            Hit the play now button to see if you have what it takes and join
            8,888 pro jumpers, who will be competing for monthly prizes up to
            $10,000. Let the best Jumpers win.
          </h4>
        </div>
      </div>
    </div>
  );
}
