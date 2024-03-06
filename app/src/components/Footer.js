import React from "react";
import "styles/footer.css";
import logo from "assets/img/DJlogo.png";
import buttonSprite from "assets/img/buttonSpriteLong.png";
import { useNavigate } from "react-router-dom";

import jumper from "assets/img/jump2.gif";
import footerSprite from "assets/img/footerSprite.png";

export default function Footer({ dL }) {
  const navigate = useNavigate();
  return (
    <div id="footer">
      <div className="footerSpriteContainer">
        <div className="footerSpriteContainerContainer">
          <img src={footerSprite} alt="footerSprite" id="footerSprite" />
          <img src={footerSprite} alt="footerSprite" id="footerSprite" />
          <img src={footerSprite} alt="footerSprite" id="footerSprite" />
        </div>
      </div>
      <div className="maxWidthContainer">
        <img
          src={jumper}
          alt="jumper"
          id="jumper"
          className="removeOnSmallScreen"
        />
        <div className="center">
          <div className="headerLogo">
            <img style={{ marginRight: "20px" }} src={logo} alt="logo" />
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
          <div
            className="btn noBtn"
            style={{ marginLeft: "20px" }}
            onClick={() => {
              navigate("/play");
            }}
          >
            Play Game
          </div>
        </div>
      </div>
    </div>
  );
}
