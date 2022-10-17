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

import Horoscope from "../../assets/images/horoscope.png";
import Maesurf from "../../assets/images/maesurf.png";
import Sproutr from "../../assets/images/sproutr.png";
import F1 from "../../assets/images/f1stopwatch.png";
import DarkMode from "../../assets/images/dark-light-mode.png";

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
              <div className="about__profile">
                <img
                  className="about__headshot"
                  src={Me}
                  alt="profile headshot"
                />
              </div>
              <div className="about__content--text">
                <div className="about__description">
                  <p className="about__inner-text">
                    Hello, my name is Claudio! I decided to pivot into tech and
                    take the plunge after 7 years in the automotive industry.
                    Initially working as a registered tool-maker, further
                    narrowed down into robotics and automation.
                  </p>
                  <p className="about__inner-text">
                    This was where I got my first taste for programming and
                    seeing it's true potential. I love new challenges and this
                    is what sparked my interest into Web Development. An
                    industry that is constantly evolving, keeping me on my toes
                    and allowing to explore the unknown.
                  </p>
                  <p className="about__inner-text">
                    I was born in Canada but my background is Portuguese, I have
                    dual citizenship and I can speak fluently. When I am not at
                    my desk you'll most likely catch me biking around in the
                    sun, rock climbing or cooking away for friends while having
                    them tell me all about the latest local eats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="techstack wrapper">
            <h2 className="techstack__title">tech stack</h2>
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
            <h3 className="projects__title">Click to view my recent work:</h3>

            <div className="projects__grid">
              <div className="project">
                <div className="content">
                  <div className="content__photocard">
                    <img
                      className="content__photocard-img"
                      src={Sproutr}
                      alt="webapp homescreen snapshot"
                    />
                  </div>

                  <div className="content__photocard-container">
                    <div className="content__photocard-content">
                      <h3>Sproutr</h3>
                      <p>
                        Sproutr is a habit building app that lets you choose &
                        track a new or existing habit. At Sproutr we are about
                        helping those create the habits that matter.
                      </p>
                      <p>
                        The approach we decided to take was to create a friendly
                        and visually appealing app to help those making habits
                        fun.
                      </p>

                      <div className="button">
                        <a
                          className="button__link"
                          href="https://sproutr.netlify.app/"
                        >
                          Demo
                        </a>
                        <a
                          className="button__link"
                          href="https://github.com/CodingClauds/sproutr-capstone"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project">
                <div className="content">
                  <div className="content__photocard">
                    <img
                      className="content__photocard-img"
                      src={Maesurf}
                      alt="webapp homescreen snapshot"
                    />
                  </div>

                  <div className="content__photocard-container">
                    <div className="content__photocard-content">
                      <h3>MaeSurf</h3>
                      <p>
                        MaeSurf is a surf camp website that is designed to help
                        travellers book full surf camps and lessons in Costa
                        Rica.
                      </p>
                      <p>
                        Currently tasked with organizing the site and adding in
                        key functionalities to help attract traffic to the site.
                      </p>
                      <div className="button">
                        <a className="button__link" href="https://maesurf.com/">
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project">
                <div className="content">
                  <div className="content__photocard">
                    <img
                      className="content__photocard-img"
                      src={Horoscope}
                      alt="webapp homescreen snapshot"
                    />
                  </div>

                  <div className="content__photocard-container">
                    <div className="content__photocard-content">
                      <h3>Horoscoped</h3>
                      <p>
                        For one of our "mini-hackathons" we created a Horoscope
                        app that utilizes API’s to retrieve data when an
                        individual user inputs their zodiac sign or their
                        specific birthday.
                      </p>

                      <br></br>

                      <div className="button">
                        <a
                          className="button__link"
                          href="https://hororscoped.netlify.app/"
                        >
                          Demo
                        </a>
                        <a
                          className="button__link"
                          href="https://github.com/CodingClauds/horoscoped"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project">
                <div className="content">
                  <div className="content__photocard">
                    <img
                      className="content__photocard-img"
                      src={F1}
                      alt="webapp homescreen snapshot"
                    />
                  </div>

                  <div className="content__photocard-container">
                    <div className="content__photocard-content">
                      <h3>F1 Stopwatch</h3>
                      <p>
                        Here's the Formula-1 themed flipcard game with all 20
                        drivers from the 2022 driver lineup, try to match the
                        drivers with their teams before the time runs out! Let's
                        see if you have what it takes to have a podium finish.
                      </p>

                      <div className="button">
                        <a
                          className="button__link"
                          href="https://flipcardformula1.netlify.app/"
                        >
                          Demo
                        </a>
                        <a
                          className="button__link"
                          href="https://github.com/CodingClauds/F1-stopwatch"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project">
                <div className="content">
                  <div className="content__photocard">
                    <img
                      className="content__photocard-img"
                      src={DarkMode}
                      alt="webapp homescreen snapshot"
                    />
                  </div>

                  <div className="content__photocard-container">
                    <div className="content__photocard-content">
                      <h3>Dark/Light Mode</h3>
                      <p>
                        For this challenge, I wanted to implement a light and
                        dark mode switch toggle that would change the colours or
                        invert the colours from the default to dark mode for
                        this basic stopwatch component. The method I used was
                        creating variables for the two color states, and adding
                        the toggle on those two throughout.
                      </p>

                      <div className="button">
                        <a
                          className="button__link"
                          href="https://dark-light-mode-stopwatch.netlify.app/"
                        >
                          Demo
                        </a>
                        <a
                          className="button__link"
                          href="https://github.com/CodingClauds/Dark-light-Mode-StopWatch"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================Template for Future Projects ======================= */}

              {/* <div className="project">
                <div className="content">

                    <div className="content__photocard">
                      <img
                        className="content__photocard-img"
                        src={}
                        alt="webapp homescreen snapshot"
                      />
                    </div>

                  <div className="content__photocard-container">
                    <div className="content__photocard-content">

                    <h3>Title of Project</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias exercitationem veniam nihil aspernatur voluptas
                      placeat mollitia? Voluptates magni et laudantium
                      voluptatibus autem temporibus optio minus! Earum veritatis
                      obcaecati numquam commodi.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias exercitationem veniam nihil aspernatur voluptas
                      placeat mollitia? Voluptates magni et laudantium
                      voluptatibus autem temporibus optio minus! Earum veritatis
                      obcaecati numquam commodi.
                    </p>

                      <div className="button">
                        <a href="https://f1-stopwatch.netlify.app/">
                          <button className="button__link">Demo</button>
                        </a>
                        <a href="https://github.com/CodingClauds/F1-stopwatch">
                          <button className="button__link">Code</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
