import React from "react";
import Wtm_main from "../images/logo/WTM-Main.svg";
import image404 from "../images/404.svg";
import "./404component.css";
import { Link } from "gatsby";

const NotFound404 = () => {
  return (
    <div className="container">
      <div>
        <img
          src={Wtm_main}
          alt="Wtm logo"
          className="error-back"
        />
      </div>
      <div className="center">
        <img src={image404} alt="404 error" />
        <div className="text-message">
          It appears that you used an invalid link press
          <Link className="text-style-1" to="./">
            {" "}
            here{" "}
          </Link>{" "}
          to go to the Main page{" "}
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
