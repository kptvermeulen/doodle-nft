import React from "react";
import "styles/header.css";
import { useNavigate } from "react-router-dom";
import logo from "assets/img/DJlogo.png";
import buttonSprite from "assets/img/buttonSpriteLong.png";
import buttonSpriteBlue from "assets/img/bluePlatform.png";

import devLogo from "assets/img/vermaxLogo.svg";

import twitter from "assets/img/twitter.svg";
import instagram from "assets/img/instagram.svg";

export default function Header({ dL }) {
  const navigate = useNavigate();

  return (
    <div id="header">
      {/*<a href="https://vermax.nl" target="_blank" rel="noreferrer">
        <div className="devHeader">
          This website is still in development
          <img src={devLogo} alt="vermax logo" />
        </div>
  </a>*/}
      <div className="maxWidthContainer">
        <div className="headerContainer">
          <div
            className="headerLogo"
            onClick={() => {
              navigate("/");
            }}
          >
            <img style={{ marginRight: "20px" }} src={logo} alt="logo" />
          </div>
          <div className="headerNav">
            <a
              href="https://twitter.com/DoodleJumperNFT"
              target="_blank"
              rel="noreferrer"
            >
              <div className="headerNavItem">
                <img src={twitter} alt="twitter logo" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/doodlejumper.io/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="headerNavItem" style={{ marginRight: "15px" }}>
                <img
                  src={instagram}
                  alt="instagram logo"
                  style={{ marginTop: "-4px" }}
                />
              </div>
            </a>
            <div
              className="headerNav removeOnSmallScreen"
              style={{ marginRight: "30px" }}
            >
              {/*<div
                className="headerNavItem"
                onClick={() => {
                  navigate("/play");
                }}
              >
                Play
              </div>*/}
              <div
                className="headerNavItemAccent"
                style={{ width: "200px", paddingTop: "10px" }}
                onClick={() => {
                  navigate("/play");
                }}
              >
                <div style={{ zIndex: 5 }}>Play Game</div>
                <img
                  src={buttonSpriteBlue}
                  alt="buttonSprite"
                  className="headerButtonSprite"
                />
              </div>

              <a href={dL} target="_blank" rel="noreferrer">
                <div
                  className="headerNavItemAccent"
                  style={{ width: "250px", paddingTop: "5px" }}
                >
                  <div style={{ zIndex: 5 }}>Join Discord Now</div>
                  <img
                    src={buttonSprite}
                    alt="buttonSprite"
                    className="headerButtonSprite"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
