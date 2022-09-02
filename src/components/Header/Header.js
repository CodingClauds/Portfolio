import "./Header.scss";
import "../Body/Body.js";

function Header({ executeScroll, myRefAbout, myRefProjects, myRefContact }) {
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
        <div className="container wrapper">
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
                  About
                </span>
              </li>
              <li>
                <span
                  className="nav-link"
                  onClick={() => executeScroll(myRefProjects)}
                  href="projects"
                >
                  Projects
                </span>
              </li>
              <li>
                <span
                  className="nav-link"
                  onClick={() => executeScroll(myRefContact)}
                  href="contact"
                >
                  Contact
                </span>
              </li>
            </ul>
          </nav>
          <button className="hamburger">
            <div className="bar"></div>
          </button>
        </div>
      </header>

      <nav className="mobile-nav">
        <ul>
          <li>
            <span
              className="mobile-navlink"
              onClick={() => executeScroll(myRefAbout)}
              href="about-me"
            >
              About
            </span>
          </li>
          <li>
            <span
              className="mobile-navlink"
              onClick={() => executeScroll(myRefProjects)}
              href="projects"
            >
              Projects
            </span>
          </li>
          <li>
            <span
              className="mobile-navlink"
              onClick={() => executeScroll(myRefContact)}
              href="contact"
            >
              Contact
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
