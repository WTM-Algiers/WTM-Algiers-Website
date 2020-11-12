import React from "react";
import "./landing.css";
import backgroundImg from "../images/logo/WTM-Main.svg";
import SM from "../components/socialmedia";
import SMHolder from "../images/shapes/social-media-holder.svg";
import blueWTM from "../images/logo/WTM-blue-shape.svg";


const landing = () => {


    return (
        <div className="skewed-bg">
            <div className="landing">
                <div className="social-media-holder">
                    <div>
                        <div className="shape">
                            <img src={SMHolder} alt="holder shape of socila media links" />
                        </div>
                        <div className="social-links">
                            <SM direction="Vertical" />
                        </div>
                    </div>
                    <div className="title">
                        <div className="bar">

                        </div>
                        <div>
                            <h1>Women Techmakers Kolachi</h1>
                            <h2>More Women in technology</h2>
                        </div>
                    </div>
                </div>
                <div className="main-landing-holder">
                    <div className="main-landing">
                        <img src={backgroundImg} alt={"WTM Logo"} />
                    </div>
                </div>
            </div>
            <div className="blueWTM">
                <img src={blueWTM} alt="WTM logo White Version" />
            </div>
        </div>
    );
}

export default landing

