import React from "react";
import { Link } from "gatsby";
import returnbtn from "../images/Icons/back.svg";
import green from "../images/shapes/green-shape-1.svg";
import blue from "../images/shapes/blue-shape-1.svg";
import "../components/coc.css"

const SecondPage = () => {

  return (
    <div className="page-container">
      <div className="coc-return-btn" >
        <Link to="/">
          <img src={returnbtn} alt="return" />
        </Link>
      </div>
      <div className="coc-content">
        <h1 className="coc-title">
          <span className="coc-title1">Code of</span>
          <span className="coc-title2"> Conduct</span>
        </h1>
        <div className="coc-container">
          <div className="coc-intro">
            <p>
              We are dedicated to providing a <b>harassment-free</b> experience for everyone, speakers, sponsors, members and
              participants. Committed to creating an environment that is <b>safe, professional and of mutual trust</b> where
              <b> diversity and inclusion</b> are valued, and where everyone is entitled to be treated with <b>courtesy and
              respect.</b> Obviously we do not tolerate harassment in any form and Our organisers commit to making conferences,
              workshops, hackathons and all associated activities <b>productive and enjoyable</b> for everyone.
              <br />
              So you are invited to be part of <b>WTM Algiers' events</b> in a spirit of <b>curiosity, friendliness,
              open-mindedness, and respect.</b>
            </p>
          </div>
          <div className="coc-bp">
            <div className="coc-agree">
              <h1 className="coc-sub-title coc-title1">What you should respect ?</h1>
              <ul>
                <li>Behave professionally and respectfully with everyone.</li>
                <li>Adopt Diversity and Inclusion.</li>
                <li>Avoid aggressively pushing your own services, products or causes.</li>
                <li>Respect confidentiality requests by speakers and other attendees.</li>
                <li>Look out for one another.</li>
              </ul>
            </div>
            <div className="coc-donot">
              <h1 className="coc-sub-title coc-title2">What is not tolerated ?</h1>
              <ul>
                <li>Invasion of privacy, including taking photos (or requesting selfies) of people who refuses it.</li>
                <li>Being disruptive, stalking, following or threatening anyone.</li>
                <li>Homophobia, racism or behavior that discriminates against a group or class of people.</li>
                <li>Sexual harassment of any kind, including unwelcome sexual attention and inappropriate physical contact.</li>
              </ul>
            </div>
          </div>
          <div className="coc-report">
            <h1 className="coc-sub-title">
              <span className="coc-title1">Contact us to</span><span className="coc-title2"> report an incident</span>
            </h1>
            <p>
              If someone makes you or anyone else feel unsafe or unwelcome, please report it as soon as possible,
              either to the organizers <b>[WTM Algiers organizers can be identified by t-shirts/special badges/headsets.] </b>
              or through <b>[A Watched Phone Number or a form].</b> RESPONSE TEAM may take any action they deem appropriate,
              up to and including expulsion from all GDG Algiers and WTM Algiers spaces or events and identification of
              that person as a harasser to other GDG Algiers or WTM Algiers members or the general public.
            </p>
            <button class="flat-butt">Check the complete version!</button>
          </div>
        </div>
      </div>
      <div id="coc-svg-blue">
        <img src={blue} alt="blueshape" />
      </div>
      <div id="coc-svg-green">
        <img src={green} alt="greenshape" />
      </div>
    </div>
  );
}

export default SecondPage;
