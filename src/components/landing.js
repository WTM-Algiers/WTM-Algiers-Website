import React from "react";
import { useState, useEffect } from 'react';
import "./landing.css";
import menubutton from "../images/Icons/menu.svg";
import backgroundImg from "../images/logo/WTM-Main.svg";
import SM from "../components/socialmedia";
import SMHolder from "../images/shapes/social-media-holder.svg"



const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return windowWidth;
};


const landing = () => {

    //const imageUrl = useWindowWidth() >= 650 ? logo : logoM;

    return (
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
                        <h1>Women Techmakers Algiers</h1>
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
    );
}

export default landing
