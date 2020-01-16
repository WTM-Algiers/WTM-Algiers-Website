import React from "react";
import backgroundShape from "../images/shapes/white-shape-1.svg";
import logo from "../images/shapes/GDGAlgiers-logo.svg";
import './partner.css';

const partner = () => {

    const goToGDGWebsite = event => {
        const url = 'https://gdgalgiers.com/';
        window.open(url, '_blank');
    };

    return (
        <div className="section-holder">
            <div className="section-title">
                <span className="our">OUR</span> PARTNERS
        </div>

            <div className="partner-holder">
                <div>
                    <div className="partner-logo" onClick={goToGDGWebsite} style={{ cursor: "pointer" }}>
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
}


export default partner;
