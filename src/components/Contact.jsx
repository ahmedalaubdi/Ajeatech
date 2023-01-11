import React from "react";
import "./contact.css";
import OurLocation from "../assets/77365-location-lottie-animation.json";
import Lottie from "lottie-react";
function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="location">
        <Lottie
          animationData={OurLocation}
          loop={true}
          className="lottiLocation"
        />

        <p>Yemen, Sana'a, Alkhamseen.</p>
      </div>
      <span className="line"></span>
      <div className="info">
        <p>
          {" "}
          <span>
            <i className="fa-regular fa-envelope"></i>
          </span>{" "}
          ajwatech@gmail.com
        </p>
        <p>
          <span>
            <i className="fa-sharp fa-solid fa-phone"></i>{" "}
          </span>
          +967 777595823
        </p>
        <p>
          <span>
            <i className="fa-brands fa-whatsapp"></i>{" "}
          </span>
          +967 734908260
        </p>
      </div>
      <span className="line"></span>

      <div className="community">
        <p>
          <span>
            <i className="fa-brands fa-facebook-f"></i>{" "}
          </span>
          Facebook
        </p>
        <p>
          <span>
            <i className=" fa-brands fa-twitter"></i>{" "}
          </span>
          Twitter
        </p>
        <p>
          <span>
            <i className="fa-brands fa-instagram"></i>{" "}
          </span>
          Instagram
        </p>
      </div>
    </div>
  );
}

export default Contact;
