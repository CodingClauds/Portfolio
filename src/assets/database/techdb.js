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
import JiraIcon from "../images/techstack/jira.svg";
import FigmaIcon from "../images/techstack/figma.svg";
import ExpressIcon from "../images/techstack/expressjs.svg";
import NodeIcon from "../images/techstack/node.svg";

// Projects assets
import Horoscope from "../images/projects/horoscope.png";
import Sproutr from "../images/projects/sproutr.png";
import F1 from "../images/projects/f1stopwatch.png";
import DarkMode from "../images/projects/dark-light-mode.png";
import Login from "../images/projects/login.png";
// import Maesurf from "../images/projects/maesurf.png";

const { v4: uuidv4 } = require("uuid");

export const db = [
  { id: uuidv4(), src: ReactIcon },
  { id: uuidv4(), src: HtmlIcon },
  { id: uuidv4(), src: CssIcon },
  { id: uuidv4(), src: SassIcon },
  { id: uuidv4(), src: JsIcon },
  { id: uuidv4(), src: RouterIcon },
  { id: uuidv4(), src: AxiosIcon },
  { id: uuidv4(), src: NpmIcon },
  { id: uuidv4(), src: FirebaseIcon },
  { id: uuidv4(), src: ExpressIcon },
  { id: uuidv4(), src: NodeIcon },
  { id: uuidv4(), src: JiraIcon },
  { id: uuidv4(), src: FigmaIcon },
  { id: uuidv4(), src: GithubIcon },
];

export const projectCard = [
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
