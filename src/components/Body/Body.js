import React from "react";
import "./Body.scss";

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

            <h3>Website solutions for all your needs</h3>

            <a href="#" className="button">
              Find out more
            </a>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <h2>Services</h2>

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
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis beatae, cumque mollitia laudantium fugiat
                    perspiciatis saepe. Delectus praesentium numquam quas?
                  </p>
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
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis beatae, cumque mollitia laudantium fugiat
                    perspiciatis saepe. Delectus praesentium numquam quas?
                  </p>
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
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis beatae, cumque mollitia laudantium fugiat
                    perspiciatis saepe. Delectus praesentium numquam quas?
                  </p>
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
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis beatae, cumque mollitia laudantium fugiat
                    perspiciatis saepe. Delectus praesentium numquam quas?
                  </p>
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
                <div className="content">
                  <h3>Project 1</h3>
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
                  <h3>Project 2</h3>
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
                  <h3>Project 3</h3>
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

            <div className="center">
              <a href="#" className="button">
                View more
              </a>
            </div>
          </div>
        </section>
      </main>
      {/* <script src="./assets/js/main.js"></script> */}
    </>
  );
}
