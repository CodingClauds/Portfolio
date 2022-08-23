import React, { Component, useRef, useEffect } from "react";
// import { render } from "react-dom";
import "./Header.scss";
import "../Body/Body.js";

function Header({ executeScroll, myRef, myRefProjects, myRefContact }) {
  // Hamburger Menu Functionality
  window.onload = function () {
    window.addEventListener("scroll", function (e) {
      if (window.pageYOffset > 100) {
        document.querySelector("header").classList.add("is-scrolling");
      } else {
        document.querySelector("header").classList.remove("is-scrolling");
      }
    });

    const menu_button = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector(".mobile-nav");

    menu_button.addEventListener("click", function () {
      menu_button.classList.toggle("is-active");
      mobile_menu.classList.toggle("is-active");
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
            <span onClick={() => executeScroll(myRef)} href="about-me">
              About
            </span>
            <span onClick={() => executeScroll(myRefProjects)} href="projects">
              Projects
            </span>
            <span onClick={() => executeScroll(myRefContact)} href="contact">
              Contact
            </span>
          </nav>
          <button className="hamburger">
            <div className="bar"></div>
          </button>
        </div>
      </header>

      <nav className="mobile-nav">
        <a className="mobile-navlink" href="#">
          About
        </a>
        <a className="mobile-navlink" href="#">
          Projects
        </a>
        <a className="mobile-navlink" href="#">
          Contact
        </a>
      </nav>
    </>
  );
}

export default Header;
