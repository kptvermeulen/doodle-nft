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

export default function Play() {
  const dL = "https://discord.gg/rmfftwCanu";

  const [leaderboardData, setLeaderboardData] = useState(undefined);

  useEffect(() => {
    getLeaderboard();
  }, []);

  function getLeaderboard() {
    const config = {
      url: GETLEADERBOARD_URL,
      method: "get",
      data: { count: 2 },
    };
    Request(config)
      .then((response) => {
        if (response.message) {
        } else {
          //success
          console.log(response);
          setLeaderboardData(response);
        }
      })
      .catch((error) => {});
  }

  return (
    <>
      <Header dL={dL} />
      <div className="doodleBody" id="leaderboard">
        <div style={{ marginTop: "150px" }}>
          {leaderboardData !== undefined ? (
            <div className="leaderboardGame">
              <h2>leaderboard</h2>
              <div
                className="leaderboardRow"
                style={{ backgroundColor: "white" }}
              >
                <div className="">Username</div>
                <div className="">Score</div>
              </div>
              {leaderboardData.map((leaderboardRow) => {
                return (
                  <div className="leaderboardRow">
                    <div className="">{leaderboardRow.username}</div>
                    <div className="">{leaderboardRow.score}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
