import React from "react";
import Lottie from "lottie-react";
import AboutAnimate from "../assets/67471-web-development-lottie-animation-json.json";
import "./about.css";
function About() {
  return (
    <div className="about" id="about">
      <div className="wrapAbout">
        <div className="wrapLotti">
          <Lottie
            animationData={AboutAnimate}
            loop={true}
            className="lottiAbout"
          />
          <a href="#contact">Contact</a>
        </div>
        <div className="aboutText">
          <h3 className="headTitle">Something about us.</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <h3 className="ourGoals">Our goals</h3>
          <p>
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
