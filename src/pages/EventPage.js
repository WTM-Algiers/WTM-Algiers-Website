import React from "react";
import returnbtn from "../images/Icons/back.svg";
import "../components/EventPage.css";
import green from "../images/shapes/green-shape-1.svg";
import blue from "../images/shapes/blue-shape-1.svg";
import SM from "../components/socialmedia";
import EventImage from "../components/EventImage";
import sampleImage from "../images/gatsby-astronaut.png";
import date from "../images/Icons/date.svg";
import location from "../images/Icons/location.svg";
import website from "../images/Icons/Website.svg";
import { useEffect, useState } from "react";

const EventPage = ({ image, title, info, description }) => {
  const [ftitle, setFtitle] = useState({
    event: "",
    year: ""
  });
  /// preprocess the passed title
  useEffect(() => {
    let items = title.split("'");
    setFtitle({ event: items[0], year: items[1] });
  }, []);
  const _return =e => {
    alert('returning')
  }
  return (
    <div className="page-container">
      <div className="return-btn" >
        <img src={returnbtn} alt="return" onClick={e=>_return(e)}></img>
      </div>
      <div className="page-content">
        <div className="page-col1">
          <div className="page-img-frame">
            <EventImage
              image={sampleImage}
              width={350}
              height={350}
            ></EventImage>
          </div>
          <div className="page-social-media">
            <SM></SM>
          </div>
        </div>
        <div className="page-col2">
          <h1 className="page-event-title">
            <span className="title1">{ftitle.event}</span>
            <span className="title2"> {`'${ftitle.year}`}</span>
          </h1>
          <div className="page-info">
            <p>
              <span className="info-icon">
                <img src={location}></img>
              </span>
              {info.location}
            </p>
            <p>
              <span className="info-icon">
                <img src={date}></img>
              </span>
              {info.date}
            </p>
            <p>
              <span className="info-icon">
                <img src={website}></img>{" "}
              </span>
              {info.website}
            </p>
          </div>
          <div className="page-description"> {description} </div>
        </div>
      </div>
      <div id="svg-blue">
        <img src={blue} alt="blueshape"></img>
      </div>
      <div id ="svg-green">
      <img src={green} alt="greenshape"></img>
     
      </div>
    </div>
  );
};

export default EventPage;
