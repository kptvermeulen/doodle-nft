import React from "react";
import "styles/Home/info.css";
import buttonSprite from "assets/img/buttonSprite.png";
import highscore from "assets/img/highscore.png";

export default function InfoGame({ dL }) {
  return (
    <div id="infoGame">
      <div className="maxWidthContainer">
        <div className="infoContainer">
          <div className="column11">
            <div className="infoContent order2">
              <div className="iCLine">
                <div className="iCLineInner"></div>
              </div>
              <h4>Earn cash prizes</h4>
              <p>
                So you think your a pro jumper? Prove it by reaching the top 10
                leaderboard and get the chance to win up to $10,000 every month.
                Best of all, Your mom will never tell you off for playing games
                ever again!
              </p>
              <a href={dL} target="_blank" rel="noreferrer">
                <div
                  className="headerNavItemAccent"
                  style={{ marginTop: "50px", marginLeft: "0px" }}
                >
                  <div style={{ zIndex: 5 }}>Join Now</div>
                  <img
                    src={buttonSprite}
                    alt="buttonSprite"
                    className="headerButtonSprite"
                  />
                </div>
              </a>
            </div>
            <div className="gameContainer order1">
              <div className="phoneContainerContainer">
                <div className="phoneContainer">
                  <img
                    src={highscore}
                    alt="phoneImage"
                    style={{ marginLeft: "-25px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="infoContainerLineLeft"></div>
        </div>
      </div>
    </div>
  );
}
