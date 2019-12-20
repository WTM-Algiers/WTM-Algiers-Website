import React from "react"
import "./navbar.css"
import logo from "../images/logo/WTM\ logo.svg"
import { Link, animateScroll as scroll } from "react-scroll";


const NavBar = ({ direction }) => (

    <div className="nav-bar">

        <div>
            <img src={logo} alt="Women TechMakers Algiers" />
        </div>

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



    </div>
)

export default NavBar
