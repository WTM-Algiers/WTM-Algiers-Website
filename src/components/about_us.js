import React from "react";
import Workshops from "../images/workshops.svg";
import Conference from "../images/conf.svg";
import Meetups from "../images/meetups.svg";
import "./about_us.css";
const AboutUs = () => {
  return (
    <div className="flex-container">
      <p className="section-titlea">
        About <span>US</span>{" "}
      </p>
      <div className="paragraphe">
        <p>
          Shaping the future of technology that will create the outlook we all
          want to live in by increasing visibility, community, and resources for
          women in the field. In view of this, Google’s <b>Women TechMackers </b>
          program has been created in 2012, in order to spread learning and
          build role models globally, since, more than 200 communities have been
          launched locally. <b>WTM Algiers </b>is one of these communities, it aims to
          inspire and enable more women to join the tech industry. Our
          community, located at the National Higher School of Computer science,
          Algiers, Algeria, isn’t just driven by developers but anyone who is
          excited about technology, and focuses on understanding the needs of
          women and underrepresented groups locally by providing them with
          experiences and events that are going to best serve them advance in
          the industry.
        </p>
      </div>
      <div className="photos">
        <div>
          {" "}
          <img src={Workshops} className="photo1" alt="workshops" />
          <div className="imgTitle">Workshops </div>
        </div>
        <div>
          {" "}
          <img src={Conference} alt="conferences" />
          <div className="imgTitle"> Conferences</div>
        </div>
        <div>
          {" "}
          <img src={Meetups} alt="meetups" />
          <div className="imgTitle">Meetups</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
