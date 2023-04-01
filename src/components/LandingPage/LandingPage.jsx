import React from "react";
import bgVideo from "../../../public/video/wedding.mp4";
import arrow from "../../../public/img/arrow.png";
import "../LandingPage/LandingPage.scss";
import logo from "../../../public/img/logo.png";
import AboutUs from "../AboutUs/AboutUs";

const LandingPage = () => {
  return (
    <div className="lp-container">
      <div className="video-container">
        <video width="100%" height="100%" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>
      <div className="header-container">
        <div className="text">
          <img src={logo} alt="" />

          <h1>Skapa magi med oss på Köpmanberget</h1>
          <p>
            Vi erbjuder event, catering, bröllop och fest som ger en magisk
            känsla
          </p>
          <img className="arrow-animate" src={arrow} alt="" />
        </div>
      </div>
      <AboutUs />
    </div>
  );
};

export default LandingPage;
