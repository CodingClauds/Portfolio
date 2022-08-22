import React from "react";
import "./Body.scss";
import Me from "../../assets/images/BSTN-May-2022-Toront-CT-Headshot-31.jpg";

export default function Body() {
  return (
    <>
      <main>
        <section className="banner">
          <div className="container">
            <h1>
              Websites you're <br className="hide-mob" />
              <span>not afraid</span> to share
            </h1>

            {/* <h3>Solutions for all your needs</h3> */}
            <div className="wrapper">
              <h3 className="wrapper__title">
                Let's <span className="wrapper__rotate-text"></span>
              </h3>
            </div>

            {/* <h1>
              <span>always be</span>
              <div class="message">
                <div class="word1">close</div>
                <div class="word2">code</div>
                <div class="word3">creating</div>
              </div>
            </h1> */}

            <a href="#" className="button">
              Find out more
            </a>
          </div>
        </section>

        <section className="about" id="about-me">
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
                <figure className="img-box">
                  <img
                    src="./assets/images/service-1.jpg"
                    alt="Website Service"
                    className="img"
                  />
                </figure>
                <div className="content">
                  <h3>Websites</h3>
                  {/* <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis beatae, cumque mollitia laudantium fugiat
                    perspiciatis saepe. Delectus praesentium numquam quas?
                  </p> */}
                </div>
              </div>

              <div className="service">
                <figure className="img-box">
                  <img
                    src="./assets/images/service-2.jpg"
                    alt="App Service"
                    className="img"
                  />
                </figure>
                <div className="content">
                  <h3>Apps</h3>
                  {/* <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis beatae, cumque mollitia laudantium fugiat
                    perspiciatis saepe. Delectus praesentium numquam quas?
                  </p> */}
                </div>
              </div>

              <div className="service">
                <figure className="img-box">
                  <img
                    src="./assets/images/service-3.jpg"
                    alt="Games Service"
                    className="img"
                  />
                </figure>
                <div className="content">
                  <h3>Games</h3>
                  {/* <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis beatae, cumque mollitia laudantium fugiat
                    perspiciatis saepe. Delectus praesentium numquam quas?
                  </p> */}
                </div>
              </div>

              <div className="service">
                <figure className="img-box">
                  <img
                    src="./assets/images/service-4.jpg"
                    alt="Mentoring Service"
                    className="img"
                  />
                </figure>
                <div className="content">
                  <h3>Mentoring</h3>
                  {/* <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis beatae, cumque mollitia laudantium fugiat
                    perspiciatis saepe. Delectus praesentium numquam quas?
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
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
