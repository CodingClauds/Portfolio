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
// import AxiosIcon from "../../assets/images/techstack/axios.svg";
// import NpmIcon from "../../assets/images/techstack/npm.svg";

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

            {/* <h3>Solutions for all your needs</h3> */}
            <div className="infinite">
              <h3 className="infinite__title">
                Let's <span className="infinite__rotate-text"></span>
              </h3>
            </div>

            <a href="#" className="button">
              Find out more
            </a>
          </div>
        </section>

        <section className="about" id="about-me" ref={myRefAbout}>
          <div className="about__container">
            <h2 className="about__title-hello">Hey There!</h2>

            <h2 className="about__title-myname">My Name's Claudio</h2>

            <div className="about__content">
              <div className="about__content-text">
                <p className="about__description">
                  Originally a journeyman Tool-Maker in the automotive sector,
                  now turned Front-End Developer. Focusing my skills to better
                  the tech community around us and leverage my past experiences
                  into my current role. Pivoting from my past career in
                  automation to web development, I was inspired by the tech
                  industry for its level of attention to inclusivity and working
                  closely with passion. I thrive in group environments and enjoy
                  the energy that comes from collaboration. Looking to focus
                  more on what drives me, lets drive down some code! 🚗
                </p>

                <h3 className="about__cta">lets get coding!</h3>
              </div>
              <div className="about__content-img">
                <img
                  className="about__profile-img"
                  src={Me}
                  alt="profile photo"
                />
              </div>
            </div>

            <div className="services-grid">
              <div className="service">
                <img src={ReactIcon} alt="React badge image" className="img" />
              </div>
              <div className="service">
                <img src={HtmlIcon} alt="HTML badge image" className="img" />
              </div>

              <div className="service">
                <img src={CssIcon} alt="CSS badge image" className="img" />
              </div>

              <div className="service">
                <img
                  src={JsIcon}
                  alt="Javascript badge image"
                  className="img"
                />
              </div>

              <div className="service">
                <img src={SassIcon} alt="Sass badge image" className="img" />
              </div>
              <div className="service">
                <img
                  src={FirebaseIcon}
                  alt="Firebase badge image"
                  className="img"
                />
              </div>

              <div className="service">
                <img
                  src={GithubIcon}
                  alt="Github badge image"
                  className="img"
                />
              </div>

              <div className="service">
                <img
                  src={RouterIcon}
                  alt="Github badge image"
                  className="img"
                />
              </div>

              <div className="service">
                {/* <img src={AxiosIcon} alt="Github badge image" className="img" /> */}
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

                  <a href="#" className="button">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="content">
                  <h3>Horoscoped</h3>
                  <p>
                    For one of our "mini-hackathons" we created a Horoscope app
                    that utilizes API’s (through the use of axios) to retrieve
                    data when an individual user inputs their specific birthday.
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
                  <a href="#" className="button">
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
                  <a href="#" className="button">
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
                  <a href="#" className="button">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <script src="./assets/js/main.js"></script> */}
    </>
  );
}
