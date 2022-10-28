// Techstack assets
import ReactIcon from "../images/techstack/react.svg";
import HtmlIcon from "../images/techstack/html5.svg";
import CssIcon from "../images/techstack/css3.svg";
import SassIcon from "../images/techstack/sass.svg";
import JsIcon from "../images/techstack/javascript.svg";
import FirebaseIcon from "../images/techstack/firebase.png";
import GithubIcon from "../images/techstack/github.svg";
import RouterIcon from "../images/techstack/reactrouter.svg";
import AxiosIcon from "../images/techstack/axios.svg";
import NpmIcon from "../images/techstack/npm.svg";

// Projects assets
import Horoscope from "../images/projects/horoscope.png";
import Maesurf from "../images/projects/maesurf.png";
import Sproutr from "../images/projects/sproutr.png";
import F1 from "../images/projects/f1stopwatch.png";
import DarkMode from "../images/projects/dark-light-mode.png";
import Login from "../images/projects/login.png";

export const db = [
  { src: ReactIcon },
  { src: HtmlIcon },
  { src: CssIcon },
  { src: SassIcon },
  { src: JsIcon },
  { src: FirebaseIcon },
  { src: GithubIcon },
  { src: RouterIcon },
  { src: AxiosIcon },
  { src: NpmIcon },
];

export const projectCard = [
  {
    src: Horoscope,
    textContent: {
      title: "Horoscoped",
      description:
        "For one of our hackathons we created a Horoscope app that utilizes API’s to retrieve data when an individual user inputs their zodiac sign or their specific birthday.",
    },

    button: {
      demoURL: "https://hororscoped.netlify.app/",
      codeURL: "https://github.com/CodingClauds/horoscoped",
    },
  },
  {
    src: F1,
    textContent: {
      title: "F1",
      description:
        "Here's the Formula-1 flipcard game with all 20 drivers from the 2022 driver lineup, try to match the drivers with their teams before the time runs out! Let's see if you have what it takes to have a podium finish.",
    },
    button: {
      demoURL: "https://flipcardformula1.netlify.app/",
      codeURL: "https://github.com/CodingClauds/F1-stopwatch",
    },
  },
  {
    src: Sproutr,
    textContent: {
      title: "Sproutr",
      description:
        "Sproutr is a habit building app that lets you choose & track a new or existing habit. At Sproutr we are about helping those create the habits that matter. The approach we decided to take was to create a friendly and visually appealing app to help those making habits fun.",
    },
    button: {
      demoURL: "https://sproutr.netlify.app/",
      codeURL: "https://github.com/CodingClauds/sproutr-capstone",
    },
  },
  {
    src: DarkMode,
    textContent: {
      title: "DarkMode",
      description:
        "For this challenge, I wanted to implement a light and dark mode switch toggle that would change the colours or invert the colours from the default to dark mode for this basic stopwatch component. The method I used was creating variables for the two color states, and adding the toggle on those two throughout.",
    },
    button: {
      demoURL: "https://dark-light-mode-stopwatch.netlify.app/",
      codeURL: "https://github.com/CodingClauds/Dark-light-Mode-StopWatch",
    },
  },
  {
    src: Maesurf,
    textContent: {
      title: "Maesurf",
      description:
        "MaeSurf is a surf camp website that is designed to help travellers book full surf camps and lessons in Costa Rica. Currently tasked with organizing the site and adding in key functionalities to help attract traffic to the site.",
    },
    button: {
      demoURL: "https://maesurf.com/",
    },
  },
  {
    src: Login,
    textContent: {
      title: "LogIn",
      description:
        "I focused on building out a login component, that emulates a sign in with error handling and a admin login that will bring you to a new page. This is currently done in a naive approach, but the point still stands. Its meant to show how the path would go from a sign in to a logged in page.",
    },
    button: {
      demoURL: "https://consolelogin.netlify.app/",
      codeURL: "https://github.com/CodingClauds/React-Login",
    },
  },
];
