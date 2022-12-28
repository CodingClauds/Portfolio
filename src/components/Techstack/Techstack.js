import React from "react";
import "./Techstack.scss";

import { db } from "../../assets/database/techdb.js";

export default function Techstack() {
  return (
    <div className="techstack wrapper">
      <h2 className="techstack__title">tech stack</h2>

      <div className="techstack__services-grid">
        {db.map(({ src, id }) => {
          return (
            <div className="techstack__service" key={id}>
              <img
                src={src}
                alt="techstack badge"
                className="techstack__icon"
                data-aos="fade-right"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
