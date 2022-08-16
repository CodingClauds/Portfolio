import React from "react";
import "./Header.scss";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <a href="/">
            <h2>Claudio Miranda</h2>
          </a>
          <nav>
            <a href="#">About Me</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </nav>
          <button className="hamburger">
            <div className="bar"></div>
          </button>
        </div>
      </header>

      <nav className="mobile-nav">
        <a href="#">About Me</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </nav>
    </>
  );
}

export default Header;
