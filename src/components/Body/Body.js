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
import AxiosIcon from "../../assets/images/techstack/axios-ar21.svg";
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

            <div className="infinite">
              <h3 className="infinite__title">
                Let's <span className="infinite__rotate-text"></span>
              </h3>
            </div>
          </div>
        </section>

        <section className="about wrapper" id="about-me" ref={myRefAbout}>
          <div className="about__container">
            <div className="about__content">
              <div className="about__content--text">
                <p className="about__description">
                  Hello, my name is Claudio! Originally a registered tool-maker
                  in the automotive sector, now turned front-end developer.
                  Decided to pivot and focus myself and my passion around what
                  matters most, while still leveraging my past experiences
                  forward. My past career was specific in automation and
                  robotics where I first caught wind of coding and seeing the
                  endless possiblities.
                  <br />I was inspired by web developement for it's level of
                  attention to inclusivity and working closely with ones
                  passion. I thrive in group environments and enjoy the energy
                  that comes from collaboration. I'm looking forward to this new
                  chapter while also focusing on what drives me, reach out and
                  let's power through some code!
                </p>
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
                <div className="techstack__spacer"></div>
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

                  <a className="button">Learn more</a>
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
                  <a className="button">Learn more</a>
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
                  <a className="button">Learn more</a>
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
                  <a className="button">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
