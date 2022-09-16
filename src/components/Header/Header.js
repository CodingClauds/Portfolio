import "./Header.scss";
import "../Body/Body.js";

function Header({ executeScroll, myRefAbout, myRefProjects, myRefContact }) {
  window.onload = function () {
    // Scroll function executes when user clicks menu item.
    window.addEventListener("scroll", function (e) {
      if (window.pageYOffset > 100) {
        document.querySelector("header").classList.add("is-scrolling");
      } else {
        document.querySelector("header").classList.remove("is-scrolling");
      }
    });

    // Create variables and append class, to allow all our functionality to stem from these.
    const menuButton = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-nav");

    // Create toggle function
    function toggleMenu() {
      menuButton.classList.toggle("is-active");
      mobileMenu.classList.toggle("is-active");
    }

    // When user clicks menu, toggle function is executed.
    menuButton.addEventListener("click", function () {
      toggleMenu();
    });

    // Create variable and append, this will be when user clicks individual item in the mobile view. Mobile Screen shifts out of view.
    const menuItems = document.querySelectorAll(".menuItem");

    // When user clicks ANY menuItem, mobile screen disappears.
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener("click", function () {
        toggleMenu();
      });
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
        <ul className="mobile-nav__menu">
          <li className="menuItem">
            <span
              className="mobile-navlink"
              onClick={() => executeScroll(myRefAbout)}
              href="about-me"
            >
              About
            </span>
          </li>
          <li className="menuItem">
            <span
              className="mobile-navlink"
              onClick={() => executeScroll(myRefProjects)}
              href="projects"
            >
              Projects
            </span>
          </li>
          <li className="menuItem">
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
