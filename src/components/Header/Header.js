import "./Header.scss";

function Header({ executeScroll, myRefAbout, myRefProjects, myRefContact }) {
  window.onload = () => {
    // Scroll function executes when user clicks menu item.
    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset > 100) {
        document.querySelector("header").classList.add("is-scrolling");
      } else {
        document.querySelector("header").classList.remove("is-scrolling");
      }
    });

    const menuButton = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-nav");

    function toggleMenu() {
      menuButton.classList.toggle("is-active");
      mobileMenu.classList.toggle("is-active");
    }

    menuButton.addEventListener("click", () => {
      toggleMenu();
    });

    const menuItems = document.querySelectorAll(".menuItem");

    // When user clicks ANY menuItem, scrolls into view and mobile nav disappears.
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener("click", () => {
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
