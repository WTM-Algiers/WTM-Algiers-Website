import React from "react";
import { useState, useEffect } from 'react';
import "./navbar.css";
import logo from "../images/logo/WTM\ logo.svg";
import logoM from "../images/logo/WTM.svg";
import menubutton from "../images/Icons/menu.svg";
import { Link, animateScroll as scroll } from "react-scroll";


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



const NavBar = () => {

    const imageUrl = useWindowWidth() >= 650 ? logo : logoM;

    const links = (
        <div className="section-link">

            <Link
                className="navbar-item"
                activeClass="is-activated"
                to="section6"
                spy={true}
                smooth={true}
                offset={35}
                duration={500}
            >
                HOME
            </Link>

            <Link
                className="navbar-item"
                activeClass="is-activated"
                to="section6"
                spy={true}
                smooth={true}
                offset={35}
                duration={500}
            >
                ABOUT
            </Link>

            <Link
                className="navbar-item"
                activeClass="is-activated"
                to="section6"
                spy={true}
                smooth={true}
                offset={35}
                duration={500}
            >
                EVENTS
            </Link>

            <Link
                className="navbar-item"
                activeClass="is-activated"
                to="section6"
                spy={true}
                smooth={true}
                offset={35}
                duration={500}
            >
                PARTNERS
            </Link>

            <Link
                className="navbar-item"
                activeClass="is-activated"
                to="section6"
                spy={true}
                smooth={true}
                offset={35}
                duration={500}
            >
                CONTACT
            </Link>
        </div>
    );

    const menuButton = (
        <div className="menub">
            <img src={menubutton}  alt="menu button" />
        </div>
    );

    return (

        <div className="nav-bar">
            <div className="logo">
                <img src={imageUrl} alt="Women TechMakers Algiers" />
            </div>
            {useWindowWidth() >= 650 ? links : menuButton}
        </div>
    );
}

export default NavBar
