import React from "react";
import "./Techstack.scss";

import ReactIcon from "../../assets/images/techstack/react.svg";
import HtmlIcon from "../../assets/images/techstack/html5.svg";
import CssIcon from "../../assets/images/techstack/css3.svg";
import SassIcon from "../../assets/images/techstack/sass.svg";
import JsIcon from "../../assets/images/techstack/javascript.svg";
import FirebaseIcon from "../../assets/images/techstack/firebase.png";
import GithubIcon from "../../assets/images/techstack/github.svg";
import RouterIcon from "../../assets/images/techstack/reactrouter.svg";
import AxiosIcon from "../../assets/images/techstack/axios.svg";
import NpmIcon from "../../assets/images/techstack/npm.svg";

function Techstack() {
  return (
    <div className="techstack wrapper">
      <h2 className="techstack__title">tech stack</h2>

      <div className="techstack__services-grid">
        <div className="techstack__service">
          <img src={ReactIcon} alt="react badge" className="techstack__icon" />
        </div>

        <div className="techstack__service">
          <img src={HtmlIcon} alt="html badge" className="techstack__icon" />
        </div>

        <div className="techstack__service">
          <img src={CssIcon} alt="css badge" className="techstack__icon" />
        </div>

        <div className="techstack__service">
          <img
            src={JsIcon}
            alt="javascript badge"
            className="techstack__icon"
          />
        </div>

        <div className="techstack__service">
          <img src={SassIcon} alt="sass badge" className="techstack__icon" />
        </div>
        <div className="techstack__service">
          <img
            src={FirebaseIcon}
            alt="firebase badge"
            className="techstack__icon"
          />
        </div>

        <div className="techstack__service">
          <img src={NpmIcon} alt="npm badge" className="techstack__icon" />
        </div>

        <div className="techstack__service">
          <img
            src={RouterIcon}
            alt="react router badge"
            className="techstack__icon"
          />
        </div>

        <div className="techstack__service">
          <div className="techstack__spacer"></div>
          <img src={AxiosIcon} alt="axios badge" className="techstack__icon" />
        </div>
        <div className="techstack__service">
          <img
            src={GithubIcon}
            alt="github badge"
            className="techstack__icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Techstack;
