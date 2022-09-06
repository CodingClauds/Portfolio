import React from "react";
import "./Body.scss";
import Me from "../../assets/images/BSTN-May-2022-Toront-CT-Headshot-31.jpg";

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

export default function Body({ myRefAbout, myRefProjects }) {
  return (
    <>
      <main>
        <section className="banner">
          <div className="container wrapper">
            <h1>
              Websites you're <br />
              <span>not afraid</span> to share
            </h1>

            <div className="infinite typewriter">
              <h3 className="infinite__title">Let's Develop.</h3>
            </div>
          </div>
        </section>

        <section className="about wrapper" id="about-me" ref={myRefAbout}>
          <div className="about__container">
            <div className="about__content">
              <div className="about__content--text">
                <div className="about__description">
                  <p className="about__inner-text">
                    Hello, my name is Claudio! I decided to pivot into tech and
                    take the plunge after 7 years in the automotive industry.
                    Initially working as a registered tool-maker, then narrowed
                    down specifically into robotics and automation.
                  </p>
                  <p className="about__inner-text">
                    This was where I got my first taste for coding and seeing
                    the potential it has.I love new challenges and this is what
                    sparked my interest into Web Development. An industry that
                    is constantly evolving which keeps me on my toes and allows
                    to explore the unknown.
                  </p>
                  <p className="about__inner-text">
                    I was born in Canada but my background is Portuguese, I have
                    dual nationality and can speak fluently. When I am not at my
                    desk you’ll most likely catch me biking around in the sun,
                    rock climbing or cooking away for friends and having them
                    tell me about the latest restaurants.
                  </p>
                </div>
              </div>
              <div className="about__profile">
                <img
                  className="about__headshot"
                  src={Me}
                  alt="profile headshot"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="techstack wrapper">
            <h2 className="techstack__title">tech stack:</h2>
            <div className="techstack__services-grid">
              <div className="techstack__service">
                <img
                  src={ReactIcon}
                  alt="react badge"
                  className="techstack__icon"
                />
              </div>
              <div className="techstack__service">
                <img
                  src={HtmlIcon}
                  alt="html badge"
                  className="techstack__icon"
                />
              </div>

              <div className="techstack__service">
                <img
                  src={CssIcon}
                  alt="css badge"
                  className="techstack__icon"
                />
              </div>

              <div className="techstack__service">
                <img
                  src={JsIcon}
                  alt="javascript badge"
                  className="techstack__icon"
                />
              </div>

              <div className="techstack__service">
                <img
                  src={SassIcon}
                  alt="sass badge"
                  className="techstack__icon"
                />
              </div>
              <div className="techstack__service">
                <img
                  src={FirebaseIcon}
                  alt="firebase badge"
                  className="techstack__icon"
                />
              </div>

              <div className="techstack__service">
                <img
                  src={NpmIcon}
                  alt="npm badge"
                  className="techstack__icon"
                />
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
                <img
                  src={AxiosIcon}
                  alt="axios badge"
                  className="techstack__icon"
                />
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
        </section>

        <section className="projects wrapper" id="projects" ref={myRefProjects}>
          <div className="container">
            <h2>Projects</h2>

            <div className="projects-grid">
              <div className="project">
                <div className="content content__1">
                  <h3>MaeSurf</h3>
                  <p>
                    MaeSurf is a surf camp website that is designed to help
                    travellers book surf lessons in Costa Rica.
                  </p>
                  <p>
                    I was tasked with organizing the site, giving it a clean
                    look that coincides with the teams vision and adding in key
                    functionalities to help attract clients and traffic to the
                    site.
                  </p>

                  <a href="https://maesurf.com/" className="button">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="content">
                  <h3>Sproutr</h3>
                  <p>
                    Sproutr is a habit building app that lets you choose & track
                    a new or existing habit. At Sproutr we are about helping
                    those create the habits that matter.
                  </p>
                  <p>
                    The approach we decided to take was to create a friendly and
                    visually appealing app to help those making habits fun.
                  </p>

                  <a className="button" href="/">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="content">
                  <h3>Horoscoped</h3>
                  <p>
                    For one of our "mini-hackathons" we created a Horoscope app
                    that utilizes API’s to retrieve data when an individual user
                    inputs their specific birthday.
                    <br />
                    As such it will return one of the 12 astrological signs and
                    a quote that is randomly generated from the API. We also
                    included a date/time API.
                  </p>
                  <a href="https://hororscoped.netlify.app/" className="button">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="content">
                  <h3>Project 4</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores, mollitia voluptas dolore reprehenderit nulla
                    consectetur ipsa accusantium facilis! Cumque, voluptate!
                  </p>
                  <a className="button" href="/">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="content">
                  <h3>Project 5</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores, mollitia voluptas dolore reprehenderit nulla
                    consectetur ipsa accusantium facilis! Cumque, voluptate!
                  </p>
                  <a className="button" href="/">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="content">
                  <h3>Project 6</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores, mollitia voluptas dolore reprehenderit nulla
                    consectetur ipsa accusantium facilis! Cumque, voluptate!
                  </p>
                  <a className="button" href="/">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
