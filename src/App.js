import "./App.scss";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { useRef } from "react";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const myRefAbout = useRef(null);
  const myRefProjects = useRef(null);
  const myRefContact = useRef(null);

  const executeScroll = (scrollToSection) =>
    scrollToSection.current.scrollIntoView();

  return (
    <>
      <Header
        myRefAbout={myRefAbout}
        myRefProjects={myRefProjects}
        myRefContact={myRefContact}
        executeScroll={executeScroll}
      />
      <Body
        myRefAbout={myRefAbout}
        myRefProjects={myRefProjects}
        myRefContact={myRefContact}
        executeScroll={executeScroll}
      />
      <Footer myRefContact={myRefContact} />
    </>
  );
}

export default App;
