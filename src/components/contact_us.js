import React from "react";
import Contact from "./contactUs";
import contactImg from "../images/Contact.svg";
import shapeleft from "../images/shapes/blue-shape-2.svg";
import shaperight from "../images/shapes/green-shape-2.svg";
import "./contact_us.css";
const conactUs = () => (
  <div>
    <p className="section-title">
      CONTACT <span>US</span>
    </p>

    <div className="contact-section">
      <div className="SL">
        <img className={"shapeleft"} src={shapeleft} alt="decoration shape" />
        <img src={contactImg} className={"contactImg"} alt="Contact svg" />
      </div>
      <div className={"contactForm"}>
        <Contact />
      </div>

      <div className="SR">
        <img className={"shaperight"} src={shaperight} alt="decoration shape" />
      </div>
    </div>

  </div>
);

export default conactUs;
