import "./Header.scss";
import { useState } from "react";

function Header({ executeScroll, myRefAbout, myRefProjects, myRefContact }) {
  const [menuButton, setMenuButton] = useState("");
  const [hamburger, setIsHamburgerActive] = useState("");

  const toggleMenu = () => {
    if (menuButton === "") {
      setMenuButton("is-active");
      setIsHamburgerActive("is-active");
    } else {
      setMenuButton("");
      setIsHamburgerActive("");
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <a href="/">
            <h2>Claudio Miranda</h2>
          </a>
          <nav>
            <ul>
              <li>
                <span
                  className="nav-link"
                  onClick={() => executeScroll(myRefAbout)}
                  href="about-me"
                >
                  about
                </span>
              </li>

              <li>
                <span
                  className="nav-link"
                  onClick={() => executeScroll(myRefAbout)}
                  href="about-me"
                >
                  roadmap
                </span>
              </li>

              <li>
                <span
                  className="nav-link"
                  onClick={() => executeScroll(myRefProjects)}
                  href="projects"
                >
                  projects
                </span>
              </li>
              <li>
                <span
                  className="nav-link"
                  onClick={() => executeScroll(myRefContact)}
                  href="contact"
                >
                  contact
                </span>
              </li>
            </ul>
          </nav>
          <button className={`hamburger ${hamburger}`} onClick={toggleMenu}>
            {/* <button className="hamburger"> */}
            <div className="bar"></div>
          </button>
        </div>
      </header>

      <nav className={`mobile-nav ${menuButton}`}>
        {/* <nav className="mobile-nav"> */}
        <ul className="mobile-nav__menu">
          <li className="menuItem" onClick={toggleMenu}>
            <span
              className="mobile-navlink"
              onClick={() => executeScroll(myRefAbout)}
              href="about-me"
            >
              about
            </span>
          </li>
          <li className="menuItem" onClick={toggleMenu}>
            <span
              className="mobile-navlink"
              onClick={() => executeScroll(myRefProjects)}
              href="projects"
            >
              projects
            </span>
          </li>
          <li className="menuItem" onClick={toggleMenu}>
            <span
              className="mobile-navlink"
              onClick={() => executeScroll(myRefContact)}
              href="contact"
            >
              contact
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
