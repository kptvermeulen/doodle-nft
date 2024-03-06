import React from "react";
import "styles/Home/Prices.css";
import CountUp from "react-countup";

import cloud from "assets/img/cloud.png";

export default function Prices() {
  return (
    <div id="Prices">
      <div className="maxWidthContainer">
        <div className="column11">
          <div className="pricesContent">
            <h2>Monthly prizes for highscores</h2>
            <h4>
              With your Doodle Jumper NFT you will be granted access to our
              competitive jumping game.
              <br />
              <br /> Finish in the top 5 highscores of the month to win up to
              $10,000 in cash prizes.
              <br />
              <br /> How is that even possible? Why would we do that... Well
              because we can!
            </h4>
            <p>p.s I know your not going to beat me anyways ;)</p>
          </div>

          <div className="pricesPrizes">
            <div className="prizesGrid">
              <div className="prizeContainer zeroTopMargin">
                <div
                  className="prizeMoney"
                  style={{ color: "rgba(72, 187, 1, 1)" }}
                >
                  $
                  <CountUp separator={","} end={10000} useEasing duration={4} />
                </div>
                <div
                  className="prizePlace"
                  style={{ color: "rgba(72, 187, 1, 1)" }}
                >
                  1st place
                </div>
                <div
                  className="prizeLine"
                  style={{ backgroundColor: "rgba(72, 187, 1, 1)" }}
                ></div>
              </div>

              <div className="prizeContainer">
                <div
                  className="prizeMoney"
                  style={{ color: "rgba(101, 205, 249, 1)" }}
                >
                  $
                  <CountUp separator={","} end={5000} useEasing duration={4} />
                </div>
                <div
                  className="prizePlace"
                  style={{ color: "rgba(101, 205, 249, 1)" }}
                >
                  2nd place
                </div>
                <div
                  className="prizeLine"
                  style={{ backgroundColor: "rgba(101, 205, 249, 1)" }}
                ></div>
              </div>
              <div className="prizeContainer zeroTopMargin">
                <div
                  className="prizeMoney"
                  style={{ color: "rgba(162, 96, 243, 1)" }}
                >
                  $
                  <CountUp separator={","} end={2500} useEasing duration={4} />
                </div>
                <div
                  className="prizePlace "
                  style={{ color: "rgba(162, 96, 243, 1)" }}
                >
                  3rd place
                </div>
                <div
                  className="prizeLine"
                  style={{ backgroundColor: "rgba(162, 96, 243, 1)" }}
                ></div>
              </div>
              <div className="prizeContainer">
                <div
                  className="prizeMoney"
                  style={{ color: "rgba(255, 158, 12, 1)" }}
                >
                  $
                  <CountUp separator={","} end={1000} useEasing duration={4} />
                </div>
                <div
                  className="prizePlace"
                  style={{ color: "rgba(255, 158, 12, 1)" }}
                >
                  4th place
                </div>
                <div
                  className="prizeLine"
                  style={{ backgroundColor: "rgba(255, 158, 12, 1)" }}
                ></div>
              </div>
              <div className="prizeContainer zeroTopMargin">
                <div
                  className="prizeMoney"
                  style={{ color: "rgba(255, 32, 32, 1)" }}
                >
                  $
                  <CountUp separator={","} end={500} useEasing duration={4} />
                </div>
                <div
                  className="prizePlace"
                  style={{ color: "rgba(255, 32, 32, 1)" }}
                >
                  5th place
                </div>
                <div
                  className="prizeLine"
                  style={{ backgroundColor: "rgba(255, 32, 32, 1)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/*<img src={cloud} alt="cloud" id="cloud" />*/}
      </div>
    </div>
  );
}
