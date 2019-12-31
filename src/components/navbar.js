import React from "react";
import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import "./navbar.css";
import logo from "../images/logo/WTM\ logo.svg";
import logoM from "../images/logo/WTM.svg";
import menubutton from "../images/Icons/menu.svg";
import backbutton from "../images/Icons/back.svg";
import backgroundImg from "../images/logo/WTM-Main.svg";


const Wwidth = typeof window !== 'undefined' && window

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(Wwidth.innerWidth);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return windowWidth;
};


const NavBar = ({ menuelements }) => {

    let [pos, setPos] = useState(0)
    let [visible, setVisible] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            let temp = window.pageYOffset

            setVisible(pos < 30);
            console.log(temp);
            setPos(temp)
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    const [showMMenu, setshowMMenu] = useState(false);

    const showMenu = () => {
        setshowMMenu(true);
    }

    const hideMenu = () => {
        setshowMMenu(false);
    }

    const imageUrl = useWindowWidth() >= 450 ? logo : logoM;

    const sections = menuelements.map((item, i) => {
        console.log("section" + i)
        return <Link
            key={i}
            className="navbar-item"
            activeClass="is-activated"
            to={"section" + i}
            spy={true}
            smooth={true}
            offset={i == 0 ? 0 : -70}
            duration={500}
        >
            {item}
        </Link>
    })

    const Msections = menuelements.map((item, i) => {
        return <Link
            key={i}
            className="Mnavbar-item"
            activeClass="Mis-activated"
            to={"section" + i}
            spy={true}
            smooth={true}
            offset={i == 0 ? 0 : -70}
            duration={500}
            onClick={hideMenu}
        >
            {item}
        </Link>
    })

    const links = (
        <div className="section-link">
            {sections}
        </div>
    );

    const menuButton = (
        <div className="menub">
            <img src={menubutton} onClick={showMenu} alt="menu button" />
        </div>
    );

    const mobileMenu = (
        <div className="background">
            <div className="Mcontainer">
                <div className="back">
                    <img src={backbutton} onClick={hideMenu} alt="back button" />
                </div>
                <div className="Menu">
                    {Msections}
                </div>
            </div>
            <div className="backgroundimg">
                <img src={backgroundImg} alt="background" />
            </div>

        </div>
    )

    const nav = (
        <div className={!visible ? "nav-bar scrolled-menu" : "nav-bar"}>
            <div className="logo">
                {!visible ? <img src={imageUrl} alt="Women TechMakers Algiers" /> : null}
            </div>
            {useWindowWidth() >= 450 ? links : menuButton}
        </div>
    )

    return (
        showMMenu && mobileMenu || nav
    );
}

export default NavBar
