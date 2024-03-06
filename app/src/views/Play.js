import React, { useEffect, useState } from "react";
import Header from "components/Header";
import Game from "components/Game";
import { ADDSCORE_URL, GETLEADERBOARD_URL } from "libraries/constants";
import { Request, Popup } from "libraries/functions";
import {
  connectToBlockchain,
  initWeb3,
  isConnectedToBlockchain,
  getConnectedAccount,
} from "libraries/Blockchain";
import SmoothCollapse from "react-smooth-collapse";
import buttonSprite from "assets/img/buttonSprite.png";
import CryptoJS from "react-native-crypto-js";

export default function Play() {
  const dL = "https://discord.gg/rmfftwCanu";

  const [leaderboardData, setLeaderboardData] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  const [period, setPeriod] = useState(-1);

  function setScorePrompt(score, username) {
    let encryptScore = CryptoJS.AES.encrypt(
      score.toString(),
      "N&b80P!wbZ4GqA6N$@I0qFPUB"
    ).toString();
    const config = {
      url: ADDSCORE_URL,
      method: "post",
      data: {
        score: encryptScore,
        username: username,
        address: address,
      },
    };
    Request(config)
      .then((response) => {
        if (response.message) {
          console.log("error:", response.message);
        } else {
          //success
          getLeaderboard();
        }
      })
      .catch((error) => {});
  }

  useEffect(() => {
    getLeaderboard();
  }, []);

  function getLeaderboard(periodPre) {
    const config = {
      url: GETLEADERBOARD_URL,
      method: "post",
      data: { period: period },
    };
    if (periodPre !== undefined) {
      config.data.period = periodPre;
    }
    Request(config)
      .then((response) => {
        console.log(response);
        if (response.message) {
        } else {
          //success
          setLeaderboardData(response);
        }
      })
      .catch((error) => {});
  }

  const componentDidMount = async () => {
    try {
      let result = await initWeb3();
      if (!result) {
        window.alert(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
        return;
      }
      await connectToBlockchain();
    } catch (err) {
      console.log(err);
      alert(
        "Please check if you are connected properly with Metamask and reload the page."
      );
    }
  };

  const standButtonStyle = {
    margin: "15px 0px 20px 0px",
    width: "120px",
    fontSize: "20px",
    opacity: 0.4,
  };
  const selectedButtonStyle = {
    margin: "15px 0px 20px 0px",
    width: "120px",
    fontSize: "20px",
    opacity: 1,
  };

  return (
    <>
      <Header dL={dL} />
      <div className="doodleBody" id="play">
        {address !== undefined ? (
          <div className="">
            <div class="container">
              <canvas id="canvas">Your browser doesn't support HTML5!</canvas>
              <Game setScorePrompt={setScorePrompt} />
            </div>
            {leaderboardData !== undefined ? (
              <div className="leaderboardGame">
                <h2>leaderboard</h2>
                <div className="flex" style={{ gap: "10px" }}>
                  <div
                    className="headerNavItemAccent"
                    style={
                      period === -1 ? selectedButtonStyle : standButtonStyle
                    }
                    onClick={() => {
                      setPeriod(-1);
                      getLeaderboard(-1);
                    }}
                  >
                    <div style={{ zIndex: 10, marginTop: "-8px" }}>
                      All Time
                    </div>
                    <img
                      style={{
                        display: "block",
                      }}
                      src={buttonSprite}
                      alt="buttonSprite"
                      className="headerButtonSprite"
                    />
                  </div>
                  <div
                    className="headerNavItemAccent"
                    style={
                      period === 168 ? selectedButtonStyle : standButtonStyle
                    }
                    onClick={() => {
                      setPeriod(168);
                      getLeaderboard(168);
                    }}
                  >
                    <div style={{ zIndex: 10, marginTop: "-8px" }}>Weekly</div>
                    <img
                      style={{
                        display: "block",
                      }}
                      src={buttonSprite}
                      alt="buttonSprite"
                      className="headerButtonSprite"
                    />
                  </div>
                  <div
                    className="headerNavItemAccent"
                    style={
                      period === 24 ? selectedButtonStyle : standButtonStyle
                    }
                    onClick={() => {
                      setPeriod(24);
                      getLeaderboard(24);
                    }}
                  >
                    <div style={{ zIndex: 10, marginTop: "-8px" }}>Daily</div>
                    <img
                      style={{
                        display: "block",
                      }}
                      src={buttonSprite}
                      alt="buttonSprite"
                      className="headerButtonSprite"
                    />
                  </div>
                  <div
                    className="headerNavItemAccent"
                    style={
                      period === 1 ? selectedButtonStyle : standButtonStyle
                    }
                    onClick={() => {
                      setPeriod(1);
                      getLeaderboard(1);
                    }}
                  >
                    <div style={{ zIndex: 10, marginTop: "-8px" }}>Hourly</div>
                    <img
                      style={{
                        display: "block",
                      }}
                      src={buttonSprite}
                      alt="buttonSprite"
                      className="headerButtonSprite"
                    />
                  </div>
                </div>
                <div
                  className="leaderboardRow"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="">#</div>
                  <div className="">Discord ID</div>
                  <div className="">Score</div>
                </div>
                {leaderboardData.map((leaderboardRow, index) => {
                  return (
                    <div className="leaderboardRow">
                      <div className="">{index + 1}</div>
                      <div className="flex">
                        {leaderboardRow.username} (
                        <div className="textElipsis" style={{ width: "100px" }}>
                          {leaderboardRow.address}
                        </div>
                        )
                      </div>
                      <div className="">{leaderboardRow.score}</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div
            className="center"
            style={{ position: "relative", marginTop: "100px" }}
          >
            <h4>Connect your metamask to play</h4>
            <div
              className="headerNavItemAccent"
              style={{ marginLeft: "0px", marginTop: "20px" }}
              onClick={async () => {
                await componentDidMount();
                if (isConnectedToBlockchain()) {
                  setAddress(getConnectedAccount());
                }
              }}
            >
              <div style={{ zIndex: 10 }}>Connect</div>
              <img
                style={{
                  display: "block",
                }}
                src={buttonSprite}
                alt="buttonSprite"
                className="headerButtonSprite"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
