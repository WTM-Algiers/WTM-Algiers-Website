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
    <img src={contactImg} className={"contactImg"} alt="Contact svg"></img>
    <img className={"shapeleft"} src={shapeleft}></img>
    <div className={"contactForm"}>
      <Contact></Contact>
    </div>
    <img className={"shaperight"} src={shaperight}></img>
  </div>
);

export default conactUs;
