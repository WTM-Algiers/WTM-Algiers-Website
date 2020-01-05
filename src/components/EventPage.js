import React from "react";
import { Link } from "gatsby";
import returnbtn from "../images/Icons/back.svg";
import "../components/EventPage.css";
import green from "../images/shapes/green-shape-1.svg";
import blue from "../images/shapes/blue-shape-1.svg";
import SM from "./socialmedia";
import EventImage from "./EventImage";
import date from "../images/Icons/date.svg";
import location from "../images/Icons/location.svg";
import website from "../images/Icons/Website.svg";
import { useEffect, useState } from "react";

const EventPage = ({ image, title, info, description, fb_link, twitter_link, github_link, linkedin_link }) => {

  const [ftitle, setFtitle] = useState({
    event: "",
    year: ""
  });

  /// preprocess the passed title
  useEffect(() => {
    let items = title.split("-");
    setFtitle({ event: items[0], year: items[1] });
  }, [title]);

  return (
    <div className="page-container">
      <div className="return-btn" >
        <Link to="/">
          <img src={returnbtn} alt="return" />
        </Link>
      </div>
      <div className="page-content">
        <div className="page-col1">
          <div className="page-img-frame">
            <EventImage
              image={image}
              width={350}
              height={350}
            />
          </div>
          <div className="page-social-media">
            <SM facebook_link={fb_link} github_link={github_link} linkedin_link={linkedin_link} twitter_link={twitter_link} />
          </div>
          <Link to="../../coc">
            <button class="flat-butt">Code of conduct</button>
          </Link>
        </div>
        <div className="page-col2">
          <h1 className="page-event-title">
            <span className="title1">{ftitle.event}</span>
            <span className="title2"> {ftitle.year !== undefined ? ftitle.year : ""}</span>
          </h1>
          <div className="page-info">
            <p>
              <span className="info-icon">
                <img src={location} alt="location icon" />
              </span>
              {info.location}
            </p>
            <p>
              <span className="info-icon">
                <img src={date} alt="date icon" />
              </span>
              {info.date}
            </p>
            <p>
              <span className="info-icon">
                <img src={website} alt="website icon" />{" "}
              </span>
              {info.website}
            </p>
          </div>
          <div className="page-description"> {description} </div>
        </div>
      </div>
      <div id="svg-blue">
        <img src={blue} alt="blueshape" />
      </div>
      <div id="svg-green">
        <img src={green} alt="greenshape" />
      </div>
    </div>
  );
};

export default EventPage;
