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
import JiraIcon from "../images/techstack/jira-svgrepo-com.svg";
import FigmaaIcon from "../images/techstack/figma-svgrepo-com.svg";

// Projects assets
import Horoscope from "../images/projects/horoscope.png";
import Sproutr from "../images/projects/sproutr.png";
import F1 from "../images/projects/f1stopwatch.png";
import DarkMode from "../images/projects/dark-light-mode.png";
import Login from "../images/projects/login.png";
// import Maesurf from "../images/projects/maesurf.png";

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
  { src: JiraIcon },
  { src: FigmaaIcon },
];

export const projectCard = [
  {
    src: Horoscope,
    textContent: {
      title: "Horoscoped",
      description: "HTML | CSS | JS | APIs",
    },

    button: {
      demoURL: "https://hororscoped.netlify.app/",
      codeURL: "https://github.com/CodingClauds/horoscoped",
    },
  },
  {
    src: F1,
    textContent: {
      title: "F1 Flipcard",
      description: "JS | HTML | SCSS",
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
      description: "React | JS | Firebase ",
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
      description: "JS | HTML | SCSS",
    },
    button: {
      demoURL: "https://dark-light-mode-stopwatch.netlify.app/",
      codeURL: "https://github.com/CodingClauds/Dark-light-Mode-StopWatch",
    },
  },
  // {
  //   src: Maesurf,
  //   textContent: {
  //     title: "Maesurf Co.",
  //     description: "WordPress | PHP ",
  //   },
  //   button: {
  //     demoURL: "https://maesurf.com/",
  //   },
  // },
  {
    src: Login,
    textContent: {
      title: "LogIn",
      description: "React | JS | SCSS ",
    },
    button: {
      demoURL: "https://consolelogin.netlify.app/",
      codeURL: "https://github.com/CodingClauds/React-Login",
    },
  },
];
