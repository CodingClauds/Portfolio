// Techstack assets
import ReactIcon from "../../assets/images/techstack/react.svg";
import HtmlIcon from "../../assets/images/techstack/html5.svg";
import CssIcon from "../../assets/images/techstack/css3.svg";
import SassIcon from "../../assets/images/techstack/sass.svg";
import JsIcon from "../../assets/images/techstack/javascript.svg";
import FirebaseIcon from "../../assets/images/techstack/firebase.png";
import GithubIcon from "../../assets/images/techstack/github.svg";
import RouterIcon from "../../assets/images/techstack/reactrouter.svg";
import AxiosIcon from "../../assets/images/techstack/axios.svg";
import NpmIcon from "../../assets/images/techstack/npm.svg";

// Projects assets
import Horoscope from "../../assets/images/projects/horoscope.png";
import Maesurf from "../../assets/images/projects/maesurf.png";
import Sproutr from "../../assets/images/projects/sproutr.png";
import F1 from "../../assets/images/projects/f1stopwatch.png";
import DarkMode from "../../assets/images/projects/dark-light-mode.png";

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
];
