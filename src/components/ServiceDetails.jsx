import React from "react";
import Lottie from "lottie-react";
import "./services.css";
import ModalButton from "./ModalButton";
function ServiceDetails({ service }) {
  return (
    <div className="service">
      <h5> {service.name} </h5>
      <Lottie
        animationData={service.animateData}
        loop={true}
        className="lotti"
      />
      <ModalButton desc={service.desc} />
    </div>
  );
}

export default ServiceDetails;
