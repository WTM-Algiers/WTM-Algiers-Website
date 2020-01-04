import React from "react";
import backgroundShape from "../images/shapes/white-shape-1.svg";
import logo from "../images/shapes/GDGAlgiers-logo.svg";
import './partner.css';

const partner = () => (
    <div className="section-holder">
        <div className="section-title">
            <span className="our">OUR</span> PARTNERS
        </div>

        <div className="partner-holder">
            <div>
                <div className="partner-logo">
                    <img src={logo} alt="" />
                </div>
                <img src={backgroundShape} className="rotate" alt="background shape" />
            </div>

            <div>
                <div className="partner-logo">

                </div>
                <img src={backgroundShape} alt="background shape" />
            </div>
        </div>

    </div>
);


export default partner;
