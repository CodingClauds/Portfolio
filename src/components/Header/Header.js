import React from "react";
import "./Header.scss";

function Header() {
  return (
    <>
      <header className="portfolio">
        <div className="portfolio__header">
          <a href="/">
            <h1 id="portfolio-title">Claudio Miranda</h1>
          </a>
        </div>

        <div className="header">
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">About Me</li>
              <li className="header__nav-item">Projects</li>
              <li className="header__nav-item">Contact</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
