import React from "react";
import "styles/Home/NFTShowcase.css";
import doodle4 from "assets/img/gif1.gif";
import doodle5 from "assets/img/gif2.gif";
import doodle6 from "assets/img/gif3.gif";

export default function NFTShowcase() {
  return (
    <div id="NFTShowcase">
      <div className="maxWidthContainer">
        <div className="center">
          <h2>1 Game</h2>
          <h2>
            <span style={{ color: "#FF2020" }}>8,888</span> NFTs
          </h2>
          <div className="column111" style={{ marginTop: "40px" }}>
            <img src={doodle4} alt="doodle4" />
            <img src={doodle5} alt="doodle5" />
            <img src={doodle6} alt="doodle6" />
          </div>
          <h4>The possibilities are endless... but wait... there’s more</h4>
        </div>
      </div>
    </div>
  );
}
