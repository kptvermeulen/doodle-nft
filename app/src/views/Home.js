import React from "react";
import Header from "components/Header";
import HeaderFV from "components/Home/HeaderFV";
import InfoGame from "components/Home/InfoGame";
import NFTShowcaseGrid from "components/Home/NFTShowcaseGrid";
import Prices from "components/Home/Prices";
import FAQ from "components/Home/FAQ";
import Footer from "components/Footer";
import background from "assets/img/background.png";

import path from "assets/img/path.svg";
import hole from "assets/img/Black_Hole.gif";
import star from "assets/img/fallingStar.gif";
import moon from "assets/img/moon.gif";
import platform from "assets/img/Blue.gif";

export default function Home() {
  const dL = "https://discord.gg/doodlejumper";
  return (
    <div id="home">
      <Header dL={dL} />
      <div className="doodleBody">
        <HeaderFV dL={dL} />
        <InfoGame />
        {/*<InfoCash dL={dL} />*/}
        {/*<NFTShowcase />*/}
        <NFTShowcaseGrid />
        <Prices />
        <FAQ />
        <div className="path removeOnSmallScreen">
          <div className="maxWidthContainer">
            {/*<img src={path} alt="path" />
            <img src={path} alt="path" />
            <img src={path} alt="path" />
            <img src={path} alt="path" />*/}
            <img src={hole} alt="hole" className="removeOnSmallScreen" />
            <img src={star} alt="star" className="removeOnSmallScreen" />
            <img src={star} alt="star" className="removeOnSmallScreen" />
            <img src={moon} alt="moon" className="removeOnSmallScreen" />
            <img
              src={platform}
              alt="platform"
              className="removeOnSmallScreen"
            />
            <img
              src={platform}
              alt="platform"
              className="removeOnSmallScreen"
            />
          </div>
        </div>
      </div>

      <Footer dL={dL} />
    </div>
  );
}
