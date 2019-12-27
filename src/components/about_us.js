import React from "react";
import Workshops from "../images/workshops.svg";
import Conference from "../images/conf.svg";
import Meetups from "../images/meetups.svg";

const AboutUs = () => {
  return (
    <div className="flex-container">
      <div className="title">
        About Us <img src={Workshops} />
      </div>
      <div className="paragraphe">
        <p>
          Shaping the future of technology that will create the outlook we all
          want to live in by increasing visibility, community, and resources for
          women in the field. In view of this, Google’s Women TechMackers
          program has been created in 2012, in order to spread learning and
          build role models globally, since, more than 200 communities have been
          launched locally. WTM Algiers is one of these communities, it aims to
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
          Workshops{" "}
          <img
            src={Workshops}
            style={{ minidth: `400px`, marginBottom: `0.5rem` }}
          />{" "}
        </div>
        <div>
          {" "}
          Conferences <img src={Conference} />{" "}
        </div>
        <div>
          {" "}
          Meetups <img src={Meetups} />{" "}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
