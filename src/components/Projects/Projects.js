import React from "react";
import "./Projects.scss";

import { projectCard } from "../../assets/database/techdb.js";

export default function Projects() {
  return (
    <div className="projects wrapper">
      <div className="container">
        <h2>Projects</h2>
        <h3 className="projects__title">Click to view my recent work:</h3>

        <section className="projects__grid">
          {projectCard.map(
            ({
              src,
              textContent: { title, description },
              button: { codeURL, demoURL },
            }) => {
              return (
                <div className="project">
                  <div className="content">
                    <div className="content__photocard">
                      <img
                        className="content__photocard-img"
                        src={src}
                        alt="webapp homescreen snapshot"
                      />
                    </div>

                    <div className="content__photocard-container">
                      <div className="content__photocard-content">
                        <h3>{title}</h3>
                        <p>{description}</p>

                        <div className="button">
                          <a className="button__link" href={demoURL}>
                            Demo
                          </a>
                          {codeURL && (
                            <a className="button__link" href={codeURL}>
                              Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </section>
      </div>
    </div>
  );
}
