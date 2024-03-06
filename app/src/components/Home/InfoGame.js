import React from "react";
import "styles/Home/info.css";
import buttonSprite from "assets/img/buttonSprite.png";
import doodle3 from "assets/img/Propeller.gif";
import gameGif from "assets/img/gameGif2.gif";
import { useNavigate } from "react-router-dom";

export default function InfoGame() {
  const navigate = useNavigate();

  return (
    <div id="infoGame">
      <div className="maxWidthContainer">
        <div className="infoContainer">
          <div className="column11">
            <div className="gameContainer">
              <img src={doodle3} alt="doodle3" className="doodle3" />
              <div className="phoneContainerContainer">
                <div className="phoneContainer">
                  <img src={gameGif} alt="phoneImage" />
                </div>
              </div>
            </div>
            <div className="infoContent">
              <div className="iCLine">
                <div className="iCLineInner"></div>
              </div>
              <h4>play with your NFT</h4>
              <p>
                Compete with the world’s best jumpers using your unique jumping
                nft in our enjoyable play to earn game. Put your skills to the
                test in a competitive environment for the chance to win big.
              </p>
              <div
                className="headerNavItemAccent"
                onClick={() => {
                  navigate("/play");
                }}
                style={{ marginTop: "50px", marginLeft: "0px" }}
              >
                <div style={{ zIndex: 5 }}>Play Now</div>
                <img
                  src={buttonSprite}
                  alt="buttonSprite"
                  className="headerButtonSprite"
                />
              </div>
            </div>
          </div>
          <div className="infoContainerLineRight"></div>
        </div>
      </div>
    </div>
  );
}
