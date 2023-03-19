import React from "react";
import "../AboutUs/AboutUs.scss";
import aboutBg from "../../../public/img/kapell.png";
import aboutImg from "../../../public/img/bröllop.jpeg";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-text">
          <h1>Vi på Köpmanberget!</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            laboriosam ex molestiae repellat adipisci deleniti a laudantium
            tempore similique maiores recusandae quisquam quam sint architecto
            ad doloremque odit in voluptas sed, perferendis et nesciunt officia?
            Consequatur, perspiciatis. Reprehenderit, officiis magnam modi iste
            distinctio, error quae ducimus quas, excepturi in recusandae?
          </p>
          <button id="kontakta-btn">Kontakta oss</button>
        </div>
        <div className="img-container">
          <img src={aboutImg} alt="" />
        </div>
      </div>
      <img className="about-opacity" src={aboutBg} alt="" />
    </div>
  );
};

export default AboutUs;
