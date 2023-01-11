import React from "react";
import Lottie from "lottie-react";
import WebDevelopment from "../assets/13262-no-internet-connection.json";
import "./hero.css";
function Hero() {
  return (
    <div id="home" className="home">
      <div className="webDevelop">
        <Lottie
          animationData={WebDevelopment}
          loop={true}
          className="lottiHero"
        />
        <div className="intro">
          <h2>Get Pro, Grow Your Buissness Fast</h2>
          <p>
            Together with your team, our developers will co-create a tech
            solution tailored to your needs. We employ design thinking to ensure
            smooth adoption and effective user experience, and can integrate
            various tools, functionalities, and databases. With one simple tech
            solution, your teams can focus on the work that matters: using data
            to drive change. We’ve learned that the best way to design an
            effective application or platform is to map out how data will flow
            through a system and how users will interact with it.
          </p>

          <a href="#services" className="discover">
            Go Services
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
