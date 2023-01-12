import React from "react";

import { services } from "../data";
import "./services.css";
import ServiceDetails from "./ServiceDetails";
function Services() {
  return (
    <div className="services" id="services">
      <h3>What can we offer!</h3>

      <div className="wrapServices">
        {services.map((service, i) => (
          <ServiceDetails service={service} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Services;
