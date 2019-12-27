import React from "react";

import SM from "../components/socialmedia"
import wtmlogo from "../images/logo/WTM\ logo.svg"
import footerImg from "../images/footer.svg"

import './footer.css'

const Footer = () => (
  <footer class="footer-container">
    <div class="footer-svg">
      <img src={footerImg} alt="footer svg" />
    </div>
    <div class="footer-box">

      <div class="logo-f">
        <img src={wtmlogo} alt="WomenTechmakers Algiers logo" />
      </div>

      <div class="copyrights">
        &copy; 2019 WTM Algiers All Rights Reserved.
        </div>

      <div class="social">
        <SM></SM>
      </div>
    </div>
    <div className="footer-down"></div>
  </footer>
);


export default Footer;
