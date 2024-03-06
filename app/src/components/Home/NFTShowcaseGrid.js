import React from "react";
import "styles/Home/NFTShowcaseGrid.css";

import doodle1 from "assets/img/doodles/doodle1.gif";
import doodle2 from "assets/img/doodles/doodle2.gif";
import doodle3 from "assets/img/doodles/doodle3.png";
import doodle4 from "assets/img/doodles/doodle4.gif";
import doodle5 from "assets/img/doodles/doodle5.gif";
import doodle6 from "assets/img/doodles/doodle6.png";
import doodle7 from "assets/img/doodles/doodle7.gif";
import doodle8 from "assets/img/doodles/doodle8.gif";
import doodle9 from "assets/img/doodles/doodle9.png";
import doodle10 from "assets/img/doodles/doodle10.gif";
import doodle11 from "assets/img/doodles/doodle11.png";
import doodle12 from "assets/img/doodles/doodle12.gif";
import doodle13 from "assets/img/doodles/doodle13.gif";
import doodle14 from "assets/img/doodles/doodle14.png";
import doodle15 from "assets/img/doodles/doodle15.gif";

import rainbow from "assets/img/Rainbow.png";

export default function NFTShowcaseGrid() {
  return (
    <div id="NFTShowcaseGrid">
      <div className="maxWidthContainer">
        <div className="center">
          <h4 id="aboveNFTGrid">
            So you think your a pro jumper? Prove it by reaching the top 10
            leaderboard and get the chance to win up to $10,000 every month.
            Best of all, Your mom will never tell you off for playing games ever
            again!
          </h4>
        </div>
        <div className="column11">
          <img src={rainbow} alt="rainbow" id="rainbow" />
          <div className="NFTGrid">
            <img src={doodle1} alt="doodle" />
            <img src={doodle2} alt="doodle" />
            <img src={doodle12} alt="doodle" />
            <img src={doodle4} alt="doodle" />
            <img src={doodle5} alt="doodle" />

            <img src={doodle11} alt="doodle" />
            <img src={doodle3} alt="doodle" />
            <img src={doodle6} alt="doodle" />
            <img src={doodle14} alt="doodle" />
            <img src={doodle9} alt="doodle" />

            <img src={doodle13} alt="doodle" />
            <img src={doodle7} alt="doodle" />
            <img src={doodle8} alt="doodle" />
            <img src={doodle15} alt="doodle" />
            <img src={doodle10} alt="doodle" />
          </div>
          <div className="NFTShowcaseGridContent">
            <h2 style={{ marginBottom: "20px" }}>Doodle Jumpers Collection</h2>
            <p>
              Doodle Jumpers is a collection of 8,888 NFTs that allow you to
              join our play to earn jumping game.
              <br />
              <br /> The Doodle Jumpers collection is a set of hand-drawn
              digital art; including skeletons, apes, aliens, doge dogs and of
              course, the OG Doodle jumpers. The Doodle Jumpers collection
              includes many rare items of costumes, hats, custom colors and many
              more…
              <br />
              <br /> Additionally, there are different levels of rarity;
              including static images, animated characters and ultra rare
              doodles with special appearance traits.
              <br />
              <br />
              Your NFT will be your personal key to access the play to earn
              features within the Doodle Jumpers game, and will allow you to
              cast your vote on community driven features.
            </p>
          </div>
        </div>
        <div className="center">
          <h4 id="belowNFTGrid">
            The possibilities are endless... but wait... there’s more
          </h4>
        </div>
      </div>
    </div>
  );
}
