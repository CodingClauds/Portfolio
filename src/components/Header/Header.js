import React from "react";
import "./Header.scss";
// import { Link } from "react-router-dom";

function Header() {
  window.onload = function () {
    window.addEventListener("scroll", function (e) {
      if (window.pageYOffset > 100) {
        document.querySelector("header").classList.add("is-scrolling");
      } else {
        document.querySelector("header").classList.remove("is-scrolling");
      }
    });

    const menu__btn = document.querySelector(".hamburger");

    menu__btn.addEventListener("click", function () {
      menu__btn.classList.toggle("is-active");
    });
  };
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
        <a className="mobile-link" href="#">
          About
        </a>
        <a className="mobile-link" href="#">
          Projects
        </a>
        <a className="mobile-link" href="#">
          Contact
        </a>
      </nav>
    </>
  );
}

export default Header;
