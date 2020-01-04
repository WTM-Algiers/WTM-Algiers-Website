import React from "react";
import SM from "../components/socialmedia";
import wtmlogo from "../images/logo/WTM logo.svg";
import footerImg from "../images/footer.svg";
import './footer.css';

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-svg">
      <img src={footerImg} alt="footer svg" />
    </div>
    <div className="footer-box">
      <div className="logo-f">
        <img src={wtmlogo} alt="WomenTechmakers Algiers logo" />
      </div>
      <div className="copyrights">&copy; 2019 WTM Algiers All Rights Reserved.</div>
      <div className="social">
        <SM />
      </div>
    </div>
    <div className="footer-down"></div>
  </footer>
);


export default Footer;
