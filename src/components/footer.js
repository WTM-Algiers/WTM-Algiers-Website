import { Link } from "gatsby";
import React from "react";

import SM from "../components/socialmedia"
import wtmlogo from "../images/logo/WTM\ logo.svg"

import './footer.css'

const Footer = () => (
  <footer class="footer">
      <div class="footer-box">  
        
        <div class="logo">
          <img src={wtmlogo} alt="WomenTechmakers Algiers logo"/>
        </div>

        <div class="copyrights">
          &copy; 2019 WTM Algiers All Rights Reserved.
        </div>

        <div class= "social">
          <SM></SM>
        </div>

      </div>
  </footer>
);


export default Footer;
